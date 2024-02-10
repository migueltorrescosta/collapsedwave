---
date: 2023-10-14
tags:
  - quantum-theory
---
An operator $\hat{f}$ on the [[📘 Vector Space#Quantum Hilbert Space]] corresponding to a [[📘 Classical observable]] $f$, as per the [[📕 Postulates of Quantum Mechanics#Postulate 2]] of Quantum Mechanics

>[!info]-
> 1. $f : \mathbb{R}^{2n} \rightarrow \mathbb{R}$ is a [[📘 Classical observable]]
> 2. $\hat{f}: \mathbb{C}^{n} \rightarrow \mathbb{R}$ is the corresponding [[📘 Quantum observable]]


# Properties

## When the quantum state matches an eigenvector of the quantum observable, the measurement is deterministic

$\hat{f}\psi = \lambda \psi \implies \mathbb{E}[f^m] = \braket{(\hat{f})^m}_\psi =\lambda^m$

>[!info]-
> 1. $\psi \in H$ is a [[quantum state vector]]
> 2. $f$ is a [[📘 Classical observable]]
> 3. $\hat{f}$ is the corresponding [[📘 Quantum observable]]
> 4. $\lambda \in \mathbb{R}, m \in \mathbb{Z}^+$ 

>[!success]
> $\mathbb{E}[f^m] = \braket{\psi, ( \hat{f} )^m \psi} = \braket{\psi, \lambda^m \psi} = \lambda^m \braket{\psi, \psi} = \lambda^m \| \psi \| = \lambda^m$.
> 
> The first equality holds due to [[📕 Postulates of Quantum Mechanics#Postulate 3]]
