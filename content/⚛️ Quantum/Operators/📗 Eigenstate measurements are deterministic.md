---
tags:
  - "#quantum-theory"
  - "#theorem"
---

$\hat{f}\psi = \lambda \psi \implies \mathbb{E}[f^m] = \braket{(\hat{f})^m}_\psi =\lambda^m$, where
- $\psi$ is an [[📘 Eigenstate]] of a [[📘 Measurement]] $f$
- $\psi \in H$ is a [[📘 Quantum state]]
- $f$ is a [[📘 Classical observable]]
- $\hat{f}$ is the corresponding [[📘 Quantum observable]]
- $\lambda \in \mathbb{R}, m \in \mathbb{Z}^+$ 

# Proof
$$
\begin{array}{rll}
\mathbb{E}[f^m] & = \braket{\psi, ( \hat{f} )^m \psi} & \text{Due to the 3rd postulate of QM}\\
& = \braket{\psi, \lambda^m \psi} \\
& = \lambda^m \braket{\psi, \psi} \\
& = \lambda^m \| \psi \| \\
& = \lambda^m
\end{array}
$$

We used [[📕 Postulate 3]]
