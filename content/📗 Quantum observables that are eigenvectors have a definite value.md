---
date: 2023-10-14
tags:
  - theorem
  - quantum-theory
---
$\hat{f}\psi = \lambda \psi \implies \mathbb{E}[f^m] = \braket{(\hat{f})^m}_\psi =\lambda^m$
### ✍️  Notation
- $\psi \in H$ is a [[quantum state vector]]
- $f$ is a [[📘 Classical observable]]
- $\hat{f}$ is the corresponding [[📘 Quantum observable]]
- $\lambda \in \mathbb{R}, m \in \mathbb{Z}^+$ 
### 🧠 Proof
$\mathbb{E}[f^m] = \braket{\psi, ( \hat{f} )^m \psi} = \braket{\psi, \lambda^m \psi} = \lambda^m \braket{\psi, \psi} = \lambda^m \| \psi \| = \lambda^m$, where the 1st equality is given to us by one of our axioms: [[📕 The expectation of a physical observable is described by its self adjoint operator]] 