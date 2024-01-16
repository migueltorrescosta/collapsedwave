---
tags:
  - quantum-theory
date: 2024-01-16
---
After many experimental observations, the postulates below are used to describe the fundamental ideas guiding quantum theory. They are not deduced or proved by theory. Instead, they agree with all experiments conducted so far, and are taken as fundamental truths of the behaviour guiding our Universe. Good luck!

# Postulate 1
A [[quantum system state]] is represented by a [[unit vector]] $\psi$ in a [[📘 Quantum Hilbert Space]] $H$.

These are unique up to multiples of unity, i.e. $\psi_1$ and $\psi_2$ represent the same physical state whenever $\exists c \in \mathbb{C}, \| c \| = 1$ such that $\psi_1 = c \psi_2$ .

# Postulate 2
For any [[📘 Classical observable]] $f: \mathbb{R}^{2n} \rightarrow \mathbb{R}$ on the classical [[📘 Vector Space#Phase Space]], there is an associated [[📘 Quantum observable]] $\hat{f} : \mathbb{R}^n \rightarrow \mathbb{R}$, described by a [[📘 Linear Operator#Self Adjoint Operator]] on the associated [[📘 Vector Space#Quantum Hilbert Space]].
# Postulate 3
If we measure a [[quantum state vector]] $\psi$ with result $\lambda \in \mathbb{R}$, Then immediately after the [[measurement]], the system will be in a state $\psi'$ satisfying $$\hat{f} \psi ' = \lambda \psi'$$
>[!info]-
> $\hat{f}$ is the [[📘 Linear Operator#Self Adjoint Operator]] associated with $f$. 

## Property

If a [[quantum system]] is described by a [[quantum state vector]] $\psi \in H$, the probability distribution of the [[📘 Classical observable]] $f$ is given by $\mathbb{E}[f^m] = \braket{\psi, ( \hat{f} )^m \psi}$

>[!info]-
> 1. $f : \mathbb{R}^{2n} \rightarrow \mathbb{R}$ is a [[📘 Classical observable]]
> 2. $\hat{f}: \mathbb{C}^{n} \rightarrow \mathbb{C}^n$ is the corresponding [[📘 Quantum observable]]
> 3. $\psi$ is a [[unit vector]]

>[!tip]
> Although we are in a quantum state space, we still care about measuring [[📘 Classical observable]] values. Rather than having a deterministic [[📘 Classical observable]] value, a [[quantum system state]] gives us a probability distribution for the classical counterpart.

# Postulate 4: Schrodinger's Equation
$i \hbar \dot \psi = H \psi$ defines the time evolution of a [[quantum state vector]] $\psi$

Different systems make use of the above equation by specifying different [[📘 Hamiltonian Operator]]s. As an example, the Schrodinger equation for a single non-relativistic particle under a time dependent potential $V(x,t)$ is given by: $$ih\frac{\partial}{\partial t}\Psi(x,t) = \left [ - \frac{h}{2m} \frac{\partial^2}{\partial x^2} + V(x,t) \right ] \Psi(x,t) $$
>[!info]-
> - $H$ is the [[📘 Hamiltonian Operator]] 
> - $\hbar$ is [[Plancks reduced constant]]
> - $V$ is the [[📘 Potential energy]]
