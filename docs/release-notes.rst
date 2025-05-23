.. _sec-release-notes:

Release notes
=============

.. _rel-0.5.0:

`0.5.0 <https://github.com/CQCL/lambeq/releases/tag/0.5.0>`_
------------------------------------------------------------

Added:

- A new experimental :py:mod:`~lambeq.experimental.discocirc` module that contains an efficient :py:class:`~lambeq.experimental.discocirc.DisCoCircReader` and all the required functionality for converting long texts and entire multi-paged documents into quantum circuits, based on the :py:term:`DisCoCirc` framework.
- A new tree representation of a pregroup diagram, termed :term:`pregroup tree`, is implemented through the :py:class:`~lambeq.text2diagram.pregroup_tree.PregroupTreeNode` class. This lays the groundwork for drastically improving the parsing and internal processing of diagrams.
- A new experimental end-to-end parser class, :py:class:`~lambeq.text2diagram.OncillaParser`, that simplifies the process of generating diagrams from text, minimizing or even eliminating exposure of the user to CCG representations and functionality. This parser utilises the :term:`pregroup tree` representation of diagrams. This does not replace :py:class:`.BobcatParser` as the default parser.
- A new :py:class:`~lambeq.backend.grammar.Frame` data structure that allows the recursive grouping of ``lambeq`` boxes and diagrams and can be seen as a `quantum supermap` acting on the enclosed arguments. Frames are used in :py:term:`DisCoCirc` diagrams.
- A new :py:class:`~lambeq.training.PytorchQuantumModel` class that allows Pytorch autograd to be used on quantum circuits, while so far it was possible to use it only on tensor networks (credit: `Kin Ian Lo <https://github.com/kinianlo>`_).
- A new native :py:class:`~lambeq.backend.symbol.Symbol` class that eliminates any dependencies with `SymPy <https://www.sympy.org/>`_ and improves efficiency.
- A new rewrite rule class, :py:class:`~lambeq.rewrite.CollapseDomainRewriteRule`, that converts boxes into domain-less boxes by uncurrying (credit: `Kin Ian Lo <https://github.com/kinianlo>`_).
- New :py:meth:`~lambeq.backend.Diagram.remove_snakes` and :py:meth:`~lambeq.backend.Diagram.rigid_normal_form` methods that make the specific rewrites also available outside of the original :py:meth:`~lambeq.backend.Diagram.normal_form` method (credit: `Kin Ian Lo <https://github.com/kinianlo>`_).
- Caching options for fast access to already computed tensor contraction paths for tensor network models, specifically :py:class:`.PytorchModel` and :py:class:`.PytorchQuantumModel`. The constructor of these models now takes a :py:attr:`tn_path_optimizer` argument, which can be a :py:class:`.TnPathOptimizer` object, replicating the old un-cached behaviour, or a :py:class:`.CachedTnPathOptimizer` which allows caching of the computed tensor contraction paths for quick lookup.
- Support for evaluating mixed-scalar PennyLane circuits, i.e. circuits where all qubits are either discarded or post-selected.
- Two new ansätze from the Sim `et al.` :cite:p:`sim_2019` paper, :py:class:`.Sim9Ansatz` and :py:class:`.Sim9CxAnsatz`.
- Support for ancilla qubits in ``lambeq``'s ansätze.

Changed:

- Significantly improved the efficiency of the :py:class:`.PennyLaneModel`.
- Refactored all models so that they do not depend on ``tket`` as an intermediate step for their conversions.
- :py:class:`.CircuitAnsatz` now acts as a dagger functor (credit: `Kin Ian Lo <https://github.com/kinianlo>`_).
- Refactored :py:class:`.QuantumModel` to be less numpy-specific and easier to extend with other backends.
- Made the split tensor ansätze, i.e. :py:class:`.SpiderAnsatz` and :py:class:`.MPSAnsatz`, work on boxes with domains. This utilises the newly-implemented :py:class:`.CollapseDomainRewriteRule` (credit: `Kin Ian Lo <https://github.com/kinianlo>`_).
- Changed the :py:attr:`device` keyword argument for model-based parsers, e.g. :py:class:`.BobcatParser`, so that it follows PyTorch convention and supports multiple types.
- Added the new :py:class:`~lambeq.text2diagram.OncillaParser` as a parser option to the CLI via the ``-p oncilla`` argument.
- Removed the deprecated :py:class:`~lambeq.text2diagram.DepCCGParser` as a parser option from the CLI.
- Refactored tokeniser loading from :py:class:`.SpacyTokeniser` into a new utility function :py:func:`~lambeq.core.utils.get_spacy_tokeniser`.
- Significantly extended and restructured the documentation pages, fixed various issues, and added more material and tutorials.
- Made ``tket`` an optional dependency.

Fixed:

- Fixed an enum incompatibility with Python > 3.10.
- Fixed the behaviour of tensoring a type with the identity diagram.
- Fixed a :py:meth:`~lambeq.backend.Diagram.lambdify` method error when used with a daggered tensor box (credit: `Kin Ian Lo <https://github.com/kinianlo>`_).

.. _rel-0.4.3:

`0.4.3 <https://github.com/CQCL/lambeq/releases/tag/0.4.3>`_
------------------------------------------------------------

Changed:

- Documentation has now been moved to a `dedicated repository <https://github.com/CQCL/lambeq-docs>`_ and got a new URL (https://docs.quantinuum.com/lambeq).
- Changed the landing page and some visuals in the online documentation.
- Updated README to reflect the new docs structure.

Fixed:

- Fixed minor issues on some documentation pages and the README file.

.. _rel-0.4.2:

`0.4.2 <https://github.com/CQCL/lambeq/releases/tag/0.4.2>`_
------------------------------------------------------------

Added:

- Added timing information to training logs and model checkpoints.

Changed:

- Changed theme of online documentation.
- Updated required version of ``pytket`` to 1.31.0.

Fixed:

- Fixed bug in generation of single-legged quantum spiders.
- Fixed bug when evaluating quantum circuits using Tket.

Removed:

- Removed support for Python 3.9.

.. _rel-0.4.1:

`0.4.1 <https://github.com/CQCL/lambeq/releases/tag/0.4.1>`_
------------------------------------------------------------

Added:

- Support for Python 3.12.
- A new :py:class:`~lambeq.Sim4Ansatz` based on the Sim `et al.` paper :cite:p:`sim_2019`.
- A new argument in :py:meth:`.Trainer.fit` for specifying an :py:attr:`early_stopping_criterion` other than validation loss.
- A new argument :py:attr:`collapse_noun_phrases` in methods of :py:class:`.CCGParser` and :py:class:`.CCGTree` classes (for example, see :py:meth:`.CCGParser.sentence2diagram`) that allows the user to maintain noun phrases in the derivation or collapse them into nouns as desired.
- Raised meaningful exception when users try to convert to/from DisCoPy 1.1.0

Changed:

- An internal refactoring of module :py:mod:`.backend.drawing` in view of planned new features.
- Updated random number generation in :py:class:`~lambeq.TketModel` by using the recommended :py:meth:`numpy.random.default_rnd` method.

Fixed:

- Handling of possible empty ``Bra`` s and ``Ket`` s during conversion from DisCoPy.
- Fixed a bug in JIT compilation of mixed circuit evaluations.

.. _rel-0.4.0:

`0.4.0 <https://github.com/CQCL/lambeq/releases/tag/0.4.0>`_
------------------------------------------------------------

Added:

- A new integrated backend that replaces :term:`DisCoPy`, which until now was providing the low-level functionality of ``lambeq``. The new backend offers better performance, increased stability, faster training speeds, and a simplified high-level interface to the user. The new backend consists of the following sub-modules:

  - :py:mod:`lambeq.backend.grammar`: Contains the building blocks for creating string diagrams.
  - :py:mod:`lambeq.backend.tensor`: Contains the necessary classes to create tensor diagrams.
  - :py:mod:`lambeq.backend.quantum`: Adds quantum-specific functionality to the backend and provides a circuit simulator based on the `TensorNetwork <https://github.com/google/TensorNetwork>`_ library.
  - :py:mod:`lambeq.backend.pennylane`: Interface with PennyLane.
  - :py:mod:`lambeq.backend.tk`: Inteface with Tket.
  - :py:mod:`lambeq.backend.numerical_backend`: Common interface for numerical backends (such as Numpy, Jax, PyTorch, TensorFlow)
  - :py:mod:`lambeq.backend.drawing`: Contains drawing functionality for diagrams and circuits.

- :py:class:`~lambeq.BobcatParser`: Added a special case for adjectival conjunction in tree translation.
- :py:class:`~lambeq.TreeReader`: Diagrams now are created straight from the :py:class:`~lambeq.CCGTree`.
- :py:class:`~lambeq.CCGRule` apply method: Added :py:meth:`~lambeq.CCGRule.apply` method to class :py:class:`~lambeq.CCGRule`.

Changed:

- Diagram-level rewriters: Rewrite functions :py:func:`remove_cups` and :py:func:`remove_swaps` are now refactored as diagram-level rewriters, :py:class:`~lambeq.RemoveCupsRewriter` and :py:class:`~lambeq.RemoveSwapsRewriter` correspondingly.
- Extra whitespace is now ignored in the :py:class:`~lambeq.Tokeniser`.

Fixed:

- :py:class:`~lambeq.UnknownWordsRewriteRule`: Fixed rewriting of non-word boxes.

Removed:

- Removed :py:meth:`CCGTree.to_biclosed_diagram` and references to :py:mod:`discopy.biclosed`. Now CCG trees are directly converted into string diagrams, without the extra step of storing the derivation in a biclosed form.
- :py:class:`~lambeq.CCGRule`: Removed :py:meth:`replace_cat_result` and added :py:meth:`~lambeq.CCGRule.resolve`.

.. _rel-0.3.3:

`0.3.3 <https://github.com/CQCL/lambeq/releases/tag/0.3.3>`_
------------------------------------------------------------
This update features contributions from participants in `unitaryHACK 2023 <https://unitaryhack.dev/>`_:

- Two new optimisers:

  - The Nelder-Mead optimiser. (credit: `Gopal Dahale <https://github.com/CQCL/lambeq/pull/104>`_)
  - The Rotosolve optimiser. (credit: `Ahmed Darwish <https://github.com/CQCL/lambeq/pull/93>`_)

- A new rewrite rule for handling unknown words. (credit: `WingCode <https://github.com/CQCL/lambeq/pull/105>`_)

Many thanks to all who participated.

This update also contains the following changes:

Added:

- :py:class:`~lambeq.DiagramRewriter` is a new class that rewrites diagrams by looking at the diagram as a whole rather than by using rewrite rules on individual boxes. This includes an example :py:class:`~lambeq.UnifyCodomainRewriter` which adds an extra box to the end of diagrams to change the output to a specified type. (credit: `A.C.E07 <https://github.com/CQCL/lambeq/pull/111>`_)
- Added an early stopping mechanism to :py:class:`~lambeq.Trainer` using the parameter ``early_stopping_interval``.

Fixed:

- In :py:class:`~lambeq.PennyLaneModel`, SymPy symbols are now substituted during the forward pass so that gradients are back-propagated to the original parameters.
- A pickling error that prevented CCG trees produced by :py:class:`~lambeq.BobcatParser` from being unpickled has been fixed.

.. _rel-0.3.2:

`0.3.2 <https://github.com/CQCL/lambeq/releases/tag/0.3.2>`_
------------------------------------------------------------

Added:

- Support for :term:`DisCoPy` >= 1.1.4 (credit: `toumix <https://github.com/CQCL/lambeq/pull/89>`_).

  - replaced ``discopy.rigid`` with :py:mod:`discopy.grammar.pregroup` everywhere.
  - replaced ``discopy.biclosed`` with :py:mod:`discopy.grammar.categorial` everywhere.
  - Use ``Diagram.decode`` to account for the change in contructor signature ``Diagram(inside, dom, cod)``.
  - updated attribute names that were previously hidden, e.g. ``._data`` becomes ``.data``.
  - replaced diagrammatic conjugate with transpose.
  - swapped left and right currying.
  - dropped support for legacy DisCoPy.

- Added :py:class:`~lambeq.CCGType` class for utilisation in the ``biclosed_type`` attribute of :py:class:`~lambeq.CCGTree`, allowing conversion to and from a discopy categorial object using :py:meth:`~lambeq.CCGType.discopy` and :py:meth:`~lambeq.CCGType.from_discopy` methods.
- :py:class:`~lambeq.CCGTree`: added reference to the original tree from parsing by introducing a ``metadata`` field.


Changed:

- Internalised DisCoPy quantum ansätze in lambeq.
- :py:class:`~lambeq.IQPAnsatz` now ends with a layer of Hadamard gates in the multi-qubit case and the post-selection basis is set to be the computational basis (Pauli Z).

Fixed:

- Fixed a bottleneck during the initialisation of the :py:class:`~lambeq.PennyLaneModel` caused by the inefficient substitution of Sympy symbols in the circuits.
- Escape special characters in box labels for symbol creation.
- Documentation: fixed broken links to DisCoPy documentation.
- Documentation: enabled sphinxcontrib.jquery extension for Read the Docs theme.
- Fixed disentangling ``RealAnsatz`` in extend-lambeq tutorial notebook.
- Fixed model loading in PennyLane notebooks.
- Fixed typo in :py:class:`~lambeq.SPSAOptimizer` (credit: `Gopal-Dahale <https://github.com/CQCL/lambeq/pull/102>`_)

Removed:

- Removed support for Python 3.8.

.. _rel-0.3.1:

`0.3.1 <https://github.com/CQCL/lambeq/releases/tag/0.3.1>`_
------------------------------------------------------------

Changed:

- Added example and tutorial notebooks to tests.
- Dependencies: pinned the maximum version of Jax and Jaxlib to 0.4.6 to avoid a JIT-compilation error when using the :py:class:`~lambeq.NumpyModel`.

Fixed:

- Documentation: fixed broken DisCoPy links.
- Fixed PyTorch datatype errors in example and tutorial notebooks.
- Updated custom :term:`ansätze <ansatz (plural: ansätze)>` in tutorial notebook to match new structure of :py:class:`~lambeq.CircuitAnsatz` and :py:class:`~lambeq.TensorAnsatz`.

.. _rel-0.3.0:

`0.3.0 <https://github.com/CQCL/lambeq/releases/tag/0.3.0>`_
------------------------------------------------------------

Added:

- Support for hybrid quantum-classical models using the :py:class:`~lambeq.PennyLaneModel`. :term:`PennyLane` is a powerful QML library that allows the development of hybrid ML models by hooking numerically determined gradients of parametrised quantum circuits (PQCs) to the autograd modules of ML libraries like PyTorch or TensorFlow.
- Add lambeq-native loss functions :py:class:`~lambeq.LossFunction` to be used in conjunction with the :py:class:`~lambeq.QuantumTrainer`. Currently, we support the :py:class:`~lambeq.CrossEntropyLoss`, :py:class:`~lambeq.BinaryCrossEntropyLoss`, and the :py:class:`~lambeq.MSELoss` loss functions.
- Python 3.11 support.
- An extensive :ref:`NLP-101 tutorial <sec-nlp-intro>`, covering basic definitions, text preprocessing, tokenisation, handling of unknown words, machine learning best practices, text classification, and other concepts.

Changed:

- Improve tensor initialisation in the :py:class:`~lambeq.PytorchModel`. This enables the training of larger models as all parameters are initialised such that the expected L2 norm of all output vectors is approximately 1. We use a symmetric uniform distribution where the range depends on the output dimension (flow) of each box.
- Improve the fail-safety of the :py:class:`~lambeq.BobcatParser` model download method by adding hash checks and atomic transactions.
- Use type union expression ``|`` instead of ``Union`` in type hints.
- Use ``raise from`` syntax for better exception handling.
- Update the requirements for the documentation.

Fixed:

- Fixed bug in :py:class:`~lambeq.SPSAOptimizer` triggered by the usage of masked arrays.
- Fixed test for :py:class:`~lambeq.NumpyModel` that was failing due to a change in the behaviour of Jax.
- Fixed brittle quote-wrapped strings in error messages.
- Fixed 400 response code during Bobcat model download.
- Fixed bug where :py:class:`~lambeq.CircuitAnsatz` would add empty discards and postselections to the circuit.

Removed:

- Removed install script due to deprecation.

.. _rel-0.2.8:

`0.2.8 <https://github.com/CQCL/lambeq/releases/tag/0.2.8>`_
------------------------------------------------------------

Changed:

- Improved the performance of :py:class:`.NumpyModel` when using Jax JIT-compilation.
- Dependencies: pinned the required version of DisCoPy to 0.5.X.

Fixed:

- Fixed incorrectly scaled validation loss in progress bar during model training.
- Fixed symbol type mismatch in the quantum models when a circuit was previously converted to tket.

.. _rel-0.2.7:

`0.2.7 <https://github.com/CQCL/lambeq/releases/tag/0.2.7>`_
------------------------------------------------------------

Added:

- Added support for Japanese to :py:class:`.DepCCGParser` (credit: `KentaroAOKI <https://github.com/CQCL/lambeq/pull/24>`_).
- Overhauled the :py:class:`.CircuitAnsatz` interface, and added three new :term:`ansätze <ansatz (plural: ansätze)>`.
- Added helper methods to :py:class:`.CCGTree` to get the children of a tree.
- Added a new :py:meth:`.TreeReader.tree2diagram` method to :py:class:`.TreeReader`, extracted from :py:meth:`.TreeReader.sentence2diagram`.
- Added a new :py:class:`.TreeReaderMode` named :py:attr:`.TreeReaderMode.HEIGHT`.
- Added new methods to :py:class:`.Checkpoint` for creating, saving and loading checkpoints for training.
- Documentation: added a section for how to select the right model and trainer for training.
- Documentation: added links to glossary terms throughout the documentation.
- Documentation: added UML class diagrams for the sub-packages in lambeq.

Changed:

- Dependencies: bumped the minimum versions of ``discopy`` and ``torch``.
- :py:class:`.IQPAnsatz` now post-selects in the Hadamard basis.
- :py:class:`.PytorchModel` now initialises using ``xavier_uniform``.
- :py:meth:`.CCGTree.to_json` can now be applied to ``None``, returning ``None``.
- Several slow imports have been deferred, making lambeq much faster to import for the first time.
- In :py:meth:`.CCGRule.infer_rule`, direction checks have been made explicit.
- :py:class:`.UnarySwap` is now specified to be a ``unaryBoxConstructor``.
- :py:class:`.BobcatParser` has been refactored for easier use with external evaluation tools.
- Documentation: headings have been organised in the tutorials into subsections.

Fixed:

- Fixed how :py:meth:`.CCGRule.infer_rule` assigns a ``punc + X`` instance: if the result is ``X\X`` the assigned rule is :py:attr:`.CCGRule.CONJUNCTION`, otherwise the rule is :py:attr:`.CCGRule.REMOVE_PUNCTUATION_LEFT` (similarly for punctuation on the right).

Removed:

- Removed unnecessary override of :py:meth:`.Model.from_diagrams` in :py:class:`.NumpyModel`.
- Removed unnecessary ``kwargs`` parameters from several constructors.
- Removed unused ``special_cases`` parameter and ``_ob`` method from :py:class:`.CircuitAnsatz`.

.. _rel-0.2.6:

`0.2.6 <https://github.com/CQCL/lambeq/releases/tag/0.2.6>`_
------------------------------------------------------------

- Added a strict pregroups mode to the CLI. With this mode enabled, all swaps are removed from the output string diagrams by changing the ordering of the atomic types, converting them into a valid :term:`pregroup <pregroup grammar>` form as given in :cite:p:`lambek_1999`.
- Adjusted the behaviour of output normalisation in quantum models. Now, :py:class:`.NumpyModel` always returns probabilities instead of amplitudes.
- Removed the prediction from the output of the :py:class:`.SPSAOptimizer`, which now returns just the loss.

.. _rel-0.2.5:

`0.2.5 <https://github.com/CQCL/lambeq/releases/tag/0.2.5>`_
------------------------------------------------------------

- Added a "swapping" unary rule box to handle unary rules that change the direction of composition, improving the coverage of the :py:class:`~lambeq.BobcatParser`.
- Added a ``--version`` flag to the CLI.
- Added a :py:meth:`~lambeq.Model.make_checkpoint` method to all training models.
- Changed the :py:class:`~lambeq.WebParser` so that the online service to use is specified by name rather than by URL.
- Changed the :py:class:`~lambeq.BobcatParser` to only allow one tree per category in a cell, doubling parsing speed without affecting the structure of the parse trees (in most cases).
- Fixed the parameter names in :py:class:`~lambeq.CCGRule`, where ``dom`` and ``cod`` had inadvertently been swapped.
- Made the linting of the codebase stricter, enforced by the GitHub action. The flake8 configuration can be viewed in the ``setup.cfg`` file.

.. _rel-0.2.4:

`0.2.4 <https://github.com/CQCL/lambeq/releases/tag/0.2.4>`_
------------------------------------------------------------

- Fix a bug that caused the :py:class:`~lambeq.BobcatParser` and the :py:class:`~lambeq.WebParser` to trigger an SSL certificate error using Windows.
- Fix false positives in assigning conjunction rule using the :py:class:`~lambeq.CCGBankParser`. The rule ``, + X[conj] -> X[conj]`` is a case of removing left punctuation, but was being assigned conjunction erroneously.
- Add support for using ``jax`` as backend of ``tensornetwork`` when setting ``use_jit=True`` in the :py:class:`~lambeq.NumpyModel`. The interface is not affected by this change, but performance of the model is significantly improved.

.. _rel-0.2.3:

`0.2.3 <https://github.com/CQCL/lambeq/releases/tag/0.2.3>`_
------------------------------------------------------------

- Fix a bug that raised a ``dtype`` error when using the :py:class:`~lambeq.TketModel` on Windows.
- Fix a bug that caused the normalisation of scalar outputs of circuits without open wires using a :py:class:`~lambeq.QuantumModel`.
- Change the behaviour of :py:data:`~lambeq.spiders_reader` such that the :term:`spiders <Frobenius algebra>` decompose logarithmically. This change also affects other rewrite rules that use :term:`spiders <Frobenius algebra>`, such as coordination and relative pronouns.
- Rename ``AtomicType.PREPOSITION`` to :py:data:`AtomicType.PREPOSITIONAL_PHRASE <lambeq.AtomicType.PREPOSITIONAL_PHRASE>`.
- :py:class:`~lambeq.CCGRule`: Add :py:meth:`~lambeq.CCGRule.symbol` method that returns the ASCII symbol of a given :term:`CCG <Combinatory Categorial Grammar (CCG)>` rule.
- :py:class:`~lambeq.CCGTree`: Extend :py:meth:`~lambeq.CCGTree.deriv` method with :term:`CCG <Combinatory Categorial Grammar (CCG)>` output. It is now capable of returning standard CCG diagrams.
- :ref:`Command-line interface <sec-cli>`: Add :term:`CCG <Combinatory Categorial Grammar (CCG)>` mode. When enabled, the output will be a string representation of the CCG diagram corresponding to the :py:class:`~lambeq.CCGTree` object produced by the parser, instead of a :term:`DisCoPy` diagram or circuit.
- Documentation: Add a :ref:`troubleshooting <sec-troubleshooting>` page.

.. _rel-0.2.2:

`0.2.2 <https://github.com/CQCL/lambeq/releases/tag/0.2.2>`_
------------------------------------------------------------

- Add support for Python 3.10.
- Unify class hierarchies for parsers and readers: :py:class:`~lambeq.CCGParser` is now a subclass of :py:class:`~lambeq.Reader` and placed in the common package :py:mod:`.text2diagram`. The old packages :py:mod:`.reader` and :py:mod:`.ccg2discocat` are no longer available. Compatibility problems with previous versions should be minimal, since from Release :ref:`rel-0.2.0` and onwards all ``lambeq`` classes can be imported from the global namespace.
- Add :py:class:`.CurryRewriteRule`, which uses map-state duality in order to remove adjoint types from the boxes of a diagram. When used in conjunction with :py:meth:`~discopy.rigid.Diagram.normal_form`, this removes cups from the diagram, eliminating post-selection.
- The :term:`Bobcat` parser now updates automatically when new versions are made available online.
- Update grammar file of :term:`Bobcat` parser to avoid problems with conflicting unary rules.
- Allow customising available root categories for the parser when using the command-line interface.

.. _rel-0.2.1:

`0.2.1 <https://github.com/CQCL/lambeq/releases/tag/0.2.1>`_
------------------------------------------------------------

- A new :py:class:`.Checkpoint` class that implements pickling and file operations from the :py:class:`.Trainer` and :py:class:`.Model`.
- Improvements to the :py:mod:`.training` module, allowing multiple diagrams to be accepted as input to the :py:class:`.SPSAOptimizer`.
- Updated documentation, including sub-package structures and class diagrams.

.. _rel-0.2.0:

`0.2.0 <https://github.com/CQCL/lambeq/releases/tag/0.2.0>`_
------------------------------------------------------------

- A new state-of-the-art CCG parser based on :cite:p:`clark_2021`, fully integrated with ``lambeq``, which replaces depccg as the default parser of the toolkit. The new :term:`Bobcat` parser has better performance, simplifies installation, and provides compatibility with Windows (which was not supported due to a depccg conflict). depccg is still supported as an alternative external dependency.
- A :py:mod:`.training` package, providing a selection of trainers, models, and optimizers that greatly simplify supervised training for most of ``lambeq``'s use cases, classical and quantum. The new package adds several new features to ``lambeq``, such as the ability to save to and restore models from checkpoints.
- Furthermore, the :py:mod:`.training` package uses :term:`DisCoPy`'s tensor network capability to contract tensor diagrams efficiently. In particular, :term:`DisCoPy 0.4.1 <DisCoPy>`'s new unitary and density matrix simulators result in substantially faster training speeds compared to the previous version.
- A command-line interface, which provides most of ``lambeq``'s functionality from the command line. For example, ``lambeq`` can now be used as a standard command-line pregroup parser.
- A web parser class that can send parsing queries to an online API, so that local installation of a parser is not strictly necessary anymore. The web parser is particularly helpful for testing purposes, interactive usage or when a local parser is unavailable, but should not be used for serious experiments.
- A new :py:mod:`~lambeq.pregroups` package that provides methods for easy creation of pregroup diagrams, removal of cups, and printing of diagrams in text form (i.e. in a terminal).
- A new :py:class:`.TreeReader` class that exploits the biclosed structure of CCG grammatical derivations.
- Three new rewrite rules for relative pronouns :cite:p:`sadrzadeh_2013,sadrzadeh_2014` and coordination :cite:p:`kartsaklis_2016a`.
- Tokenisation features have been added in all parsers and readers.
- Additional generator methods and minor improvements for the :py:class:`.CCGBankParser` class.
- Improved and more detailed package structure.
- Most classes and functions can now be imported from :py:mod:`lambeq` directly, instead of having to import from the sub-packages.
- The :py:mod:`.circuit` and :py:mod:`.tensor` modules have been combined into an :py:mod:`lambeq.ansatz` package. (However, as mentioned above, the classes and functions they define can now be imported directly from :py:mod:`lambeq` and should continue to do so in future releases.)
- Improved documentation and additional tutorials.

.. _rel-0.1.2:

`0.1.2 <https://github.com/CQCL/lambeq/releases/tag/0.1.2>`_
------------------------------------------------------------

- Add URLs to the setup file.
- Fix logo link in README.
- Fix missing version when building docs in GitHub action.
- Fix typo in the ``description`` keyword of the setup file.

.. _rel-0.1.1:

`0.1.1 <https://github.com/CQCL/lambeq/releases/tag/0.1.1>`_
------------------------------------------------------------

- Update install script to use PyPI package.
- Add badges and documentation link to the README file.
- Add ``lambeq`` logo and documentation link to the GitHub repository.
- Allow documentation to get the package version automatically.
- Add keywords and classifiers to the setup file.
- Fix: Add :py:mod:`lambeq.circuit` module to top-level :py:mod:`lambeq` package.
- Fix references to license file.

.. _rel-0.1.0:

`0.1.0 <https://github.com/CQCL/lambeq/releases/tag/0.1.0>`_
------------------------------------------------------------

The initial release of ``lambeq``, containing a lot of core material. Main features:

- Converting sentences to string diagrams.
- CCG parsing, including reading from CCGBank.
- Support for the ``depccg`` parser.
- DisCoCat, bag-of-words, and word-sequence compositional models.
- Support for adding new compositional schemes.
- Rewriting of diagrams.
- Ansätze for circuits and tensors, including various forms of matrix product states.
- Support for JAX and PyTorch integration.
- Example notebooks and documentation.
