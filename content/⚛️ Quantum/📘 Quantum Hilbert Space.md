---
date: 2024-01-05
---
The Quantum Hilbert Space is the [[📘 Hilbert Space]] used to represent [[quantum system state]]s. These states are acted on by [[📘 Operator]]s.

# Position and Momentum basis

In classical mechanics we keep track of a particle's position and momentum directly. In quantum mechanics particle's are described by their [[wave function]]. The [[wave function]] can be expressed in different orthonormal basis. Two commonly used basis are the position basis and the momentum basis. Both of these basis are continuous, represented by the $x$ and $p$ variables respectively, and in both cases taking values in $\mathbb{R}$.

# Properties
- [[📗 Quantum states' inner product is time independent]]

# Equations
The results below are frequently useful when manipulating algebraic expressions related to quantum spaces

|                                                                      Result | Comments                                                           |
| --------------------------------------------------------------------------: | ------------------------------------------------------------------ |
|          $\ket{\psi} = \int_{\infty}^{\infty}\ket{x}\braket{x \mid \psi}dx$ | Representation of a [[wave function]] $\psi$ in the position basis |
|          $\ket{\psi} = \int_{\infty}^{\infty}\ket{p}\braket{p \mid \psi}dp$ | Representation of a [[wave function]] $\psi$ in the momentum basis |
| $\braket{x \mid p} = \frac{1}{\sqrt{2 \pi \hbar}}\exp{(\frac{i}{\hbar}px)}$ | Transformation between the position and momentum basis             |
|                                                     $X \ket{x} = x \ket{x}$ | $\ket{x}$ is an eigenstate of $X$ with eigenvalue $x$              |
|                                                     $P \ket{p} = p \ket{p}$ | $\ket{p}$ is an eigenstate of $P$ with eigenvalue $p$              |
|                                                                             |                                                                    |

- $\ket{p}$ is the eigenstate associated with a definite momentum $p$
- $\ket{x}$ is the eigenstate associated with a definite momentum $x$
- $\ket{\psi}$ is a generic [[📘 Quantum state]]
- $\hbar$ is [[📘 Planck's reduced constant]]
- $X$ is the [[📘 Position Operator]]
- $P$ is the [[📘 Momentum Operator]]
