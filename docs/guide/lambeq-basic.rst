.. _sec-lambeq_comp:

lambeq and compositionality
===========================

``lambeq`` is a state-of-the-art software toolkit designed for implementing compositional :term:`natural language processing (NLP)` models using :term:`string diagrams <string diagram>` on a quantum computer. Language is `compositional` in nature :cite:p:`tull_2024`; this is expressed through the `principle of compositionality` which states that the meaning of a complex expression is determined by the meanings of its parts and the rules used to combine them. This concept, rooted in formal linguistics and philosophy, aligns with how humans intuitively process language.

``lambeq`` is particularly well-suited for tasks involving natural language processing on quantum computers, although it is also applicable to classical computational environments. It provides tools for:

- Parsing sentences into syntactic structures (:term:`CCG <Combinatory Categorial Grammar (CCG)>`, :term:`pregroup grammars <pregroup grammar>`, dependency graphs).
- Converting syntactic structures into compositional semantic representations (:term:`string diagrams <string diagram>`, :term:`tensor networks <tensor network>`).
- Encoding and parameterising syntacic structures into :term:`quantum circuits <quantum circuit>`.
- Training and evaluating NLP models using either classical or quantum :ref:`machine learning <sec-ml-lambeq>`.
- Integration with state-of-the-art ML and QML tools, such as :term:`PyTorch` and :term:`PennyLane`.

``lambeq`` is rooted in the formalism of :term:`monoidal categories <monoidal category>` :cite:p:`coecke_2010`, a branch of `category theory` that provides a robust algebraic framework for structuring and reasoning about compositionality. This foundation enables us to model linguistic structures and semantic compositions in a mathematically rigorous yet computationally efficient manner. For this reason, ``lambeq``'s models have some unique advantages over other traditional statistical approaches.

1. **Scalability to Quantum Computing:** ``lambeq``'s mathematical foundations make it uniquely compatible with quantum algorithms, where transformations in quantum states can represent semantic composition. In fact, ``lambeq`` is able to uniquely encode entire linguistic structures directly into :term:`quantum circuits <quantum circuit>`, enabling training without reliance on neural networks or other "classical" components.
2. **Interpretability:** The mathematical operations used to combine meanings are transparent and tied directly to linguistic principles. This enables trust in decision making and allows for accountability, while it also makes debugging and error analysis easier and more effective.
3. **Generalisation and flexibility:** The framework is highly abstract, allowing generalization across different types of related data representations (:term:`syntax trees <syntax tree>`, string diagrams, tensor networks, quantum circuits).
4. **Theoretical depth for linguistic analysis:** The compositional nature of ``lambeq``'s models allows for deeper theoretical insights into linguistic phenomena, bridging gaps between computational linguistics and formal linguistics.
5. **Interdisciplinary applications:** Since compositionality is a fundamental aspect in many other fields (e.g. systems theory, programming languages, bioinformatics, or even human cognition), ``lambeq`` can facilitate interdisciplinary research.

Related research
----------------

- The idea of using category theory to represent language was first introduced in :cite:p:`coecke_2010`, which detailed a framework that later became known as :term:`DisCoCat`. DisCoCat is supported in ``lambeq`` along with many other compositional schemes.
- An extension of DisCoCat that allows the compositional encoding of full paragraphs or documents into quantum circuits is described in :cite:p:`coecke_2021a`. ``lambeq`` provides experimental support for :term:`DisCoCirc` models through the :py:mod:`lambeq.experimental.discocirc` package :cite:p:`krawchuk_2025`.
- An early, yet-unreleased version of ``lambeq`` was used in :cite:p:`lorenz_2023`, a paper that described one of the first small-scale NLP experiments on a real quantum computer. The 40-pages paper provides a detailed introduction to the theoretical framework and the principles on which ``lambeq`` is now based, and it's an excellent starting point for the interested readers.

