---
tags:
  - "#quantum-theory"
---
If we measure a [[quantum state vector]] $\psi$ with result $\lambda \in \mathbb{R}$, Then immediately after the [[measurement]], the system will be in a state $\psi'$ satisfying $$\hat{f} \psi ' = \lambda \psi'$$
>[!info]-
> $\hat{f}$ is the [[📘 Self-Adjoint Operator]] associated with $f$. 

# Properties

If a [[quantum system]] is described by a [[quantum state vector]] $\psi \in H$, the probability distribution of the [[📘 Classical observable]] $f$ is given by $\mathbb{E}[f^m] = \braket{\psi, ( \hat{f} )^m \psi}$

>[!info]-
> 1. $f : \mathbb{R}^{2n} \rightarrow \mathbb{R}$ is a [[📘 Classical observable]]
> 2. $\hat{f}: \mathbb{C}^{n} \rightarrow \mathbb{C}^n$ is the corresponding [[📘 Quantum observable]]
> 3. $\psi$ is a [[unit vector]]

>[!tip]
> Although we are in a quantum state space, we still care about measuring [[📘 Classical observable]] values. Rather than having a deterministic [[📘 Classical observable]] value, a [[quantum system state]] gives us a probability distribution for the classical counterpart.
