.. _sec-training:

Training tutorials
==================

The following examples demonstrate the usage of the :py:mod:`.training` package for classical and quantum training scenarios.

.. toctree::
   :maxdepth: 1
   :hidden:

   ../tutorials/trainer-classical.ipynb
   ../tutorials/trainer-quantum.ipynb
   ../tutorials/trainer-hybrid.ipynb
   ../tutorials/discocirc-mc-task.ipynb
   discocirc-babi
   manual-training

- :ref:`Classical case <sec-train-tn>`

  Convert :term:`string diagrams <string diagram>` into tensor networks and train them with :term:`PyTorch`.

- :ref:`Quantum case <sec-train-quant>`

  Create :term:`quantum circuits <quantum circuit>` using the :term:`tket` backend and train them with :py:class:`~lambeq.training.QuantumTrainer`.

- :ref:`Hybrid case <sec-train-pl>`

  See how to utilise the powerful :term:`PennyLane` backend to train pure and hybrid quantum models.

- :ref:`DisCoCirc - classification <sec-discocirc_training>`
   
  Convert entire paragraphs or documents into :term:`DisCoCirc` circuits and train them with ``lambeq``'s :py:class:`~lambeq.training.PennyLaneModel`.

- :ref:`DisCoCirc - babi6 <sec-discocirc_babi>`  

  Create a DisCoCirc model for solving the `babi6` inference task.

- :ref:`Manual pipeline <sec-manual-training>`

  Learn how to create custom training loops for your ``lambeq`` models.

.. rubric:: See also:

- :ref:`sec-ml-lambeq`
