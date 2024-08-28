# %% [markdown]
# # Quantum pipeline using JAX backend
# 
# This performs an exact classical simulation.

# %%
import warnings
warnings.filterwarnings("ignore")

import os
os.environ["TOKENIZERS_PARALLELISM"] = "false"

# %%
import numpy as np

BATCH_SIZE = 30
LEARNING_RATE = 3e-2
EPOCHS = 120
SEED = 0

# %% [markdown]
# ### Read in the data and create diagrams

# %%
def read_data(filename):
    labels, sentences = [], []
    with open(filename) as f:
        for line in f:
            t = int(line[0])
            labels.append([t, 1-t])
            sentences.append(line[1:].strip())
    return np.array(labels), sentences


train_labels, train_data = read_data('datasets/mc_train_data.txt')
dev_labels, dev_data = read_data('datasets/mc_dev_data.txt')
test_labels, test_data = read_data('datasets/mc_test_data.txt')

# %%
TESTING = int(os.environ.get('TEST_NOTEBOOKS', '0'))

if TESTING:
    train_labels, train_data = train_labels[:2], train_data[:2]
    dev_labels, dev_data = dev_labels[:2], dev_data[:2]
    test_labels, test_data = test_labels[:2], test_data[:2]
    EPOCHS = 1

# %% [markdown]
# ### Create diagrams

# %%
from lambeq import BobcatParser

parser = BobcatParser(verbose='text')

raw_train_diagrams = parser.sentences2diagrams(train_data)
raw_dev_diagrams = parser.sentences2diagrams(dev_data)
raw_test_diagrams = parser.sentences2diagrams(test_data)

# %% [markdown]
# ### Remove the cups

# %%
from lambeq import RemoveCupsRewriter

remove_cups = RemoveCupsRewriter()

train_diagrams = [remove_cups(diagram) for diagram in raw_train_diagrams]
dev_diagrams = [remove_cups(diagram) for diagram in raw_dev_diagrams]
test_diagrams = [remove_cups(diagram) for diagram in raw_test_diagrams]

# %% [markdown]
# ### Create circuits

# %%
from lambeq import AtomicType, IQPAnsatz

ansatz = IQPAnsatz({AtomicType.NOUN: 1, AtomicType.SENTENCE: 1},
                   n_layers=1, n_single_qubit_params=3)

train_circuits = [ansatz(diagram) for diagram in train_diagrams]
dev_circuits =  [ansatz(diagram) for diagram in dev_diagrams]
test_circuits = [ansatz(diagram) for diagram in test_diagrams]

# %% [markdown]
# ### Parameterise

# %%
from lambeq import NumpyModel

all_circuits = train_circuits + dev_circuits + test_circuits

model = NumpyModel.from_diagrams(all_circuits, use_jit=True)

# %% [markdown]
# ### Define evaluation metric

# %%
from lambeq import BinaryCrossEntropyLoss

# Using the builtin binary cross-entropy error from lambeq
bce = BinaryCrossEntropyLoss(use_jax=True)

acc = lambda y_hat, y: np.sum(np.round(y_hat) == y) / len(y) / 2  # half due to double-counting

# %% [markdown]
# ### Initialize trainer

# %%
from lambeq import QuantumTrainer, SPSAOptimizer

trainer = QuantumTrainer(
    model,
    loss_function=bce,
    epochs=EPOCHS,
    optimizer=SPSAOptimizer,
    optim_hyperparams={'a': 0.2, 'c': 0.06, 'A':0.01*EPOCHS},
    evaluate_functions={'acc': acc},
    evaluate_on_train=True,
    verbose='text',
    seed=0
)

# %%
from lambeq import Dataset

train_dataset = Dataset(
            train_circuits,
            train_labels,
            batch_size=BATCH_SIZE)

val_dataset = Dataset(dev_circuits, dev_labels, shuffle=False)

# %% [markdown]
# ### Train

# %%
eval_interval = 1
log_interval = 12
trainer.fit(train_dataset, val_dataset, eval_interval=eval_interval, log_interval=log_interval)

print(f'{len(trainer.train_durations) = }, {len(trainer.val_durations) = }, {train_dataset.batches_per_epoch = }')
assert len(trainer.train_durations) == eval_interval * train_dataset.batches_per_epoch * len(trainer.val_durations)
i = 0
train_durations_cumulative = []
while i < len(trainer.train_durations):
    train_durations_cumulative.append(
        sum(trainer.train_durations[i:min(i + eval_interval * log_interval * train_dataset.batches_per_epoch,
                                      len(trainer.train_durations))])
    )
    i += eval_interval * log_interval * train_dataset.batches_per_epoch
print(f'{train_durations_cumulative = }')

i = 0
val_durations_cumulative = []
while i < len(trainer.val_durations):
    val_durations_cumulative.append(
        sum(trainer.val_durations[i:min(i + log_interval, len(trainer.val_durations))])
    )
    i += log_interval
print(f'{val_durations_cumulative = }')

# %% [markdown]
# ### Show results

# %%
# import matplotlib.pyplot as plt
# import numpy as np

# fig, ((ax_tl, ax_tr), (ax_bl, ax_br)) = plt.subplots(2, 2, sharex=True, sharey='row', figsize=(10, 6))
# ax_tl.set_title('Training set')
# ax_tr.set_title('Development set')
# ax_bl.set_xlabel('Iterations')
# ax_br.set_xlabel('Iterations')
# ax_bl.set_ylabel('Accuracy')
# ax_tl.set_ylabel('Loss')

# colours = iter(plt.rcParams['axes.prop_cycle'].by_key()['color'])
# range_ = np.arange(1, trainer.epochs + 1)
# ax_tl.plot(range_, trainer.train_epoch_costs, color=next(colours))
# ax_bl.plot(range_, trainer.train_eval_results['acc'], color=next(colours))
# ax_tr.plot(range_, trainer.val_costs, color=next(colours))
# ax_br.plot(range_, trainer.val_eval_results['acc'], color=next(colours))

# test_acc = acc(model(test_circuits), np.array(test_labels))
# print('Test accuracy:', test_acc)


