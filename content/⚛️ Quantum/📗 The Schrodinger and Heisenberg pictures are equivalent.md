---
tags:
  - "#quantum-theory"
---
The [[Schrodinger picture]] and [[Heisenberg picture]] are equivalent, in the sense that we obtain the same results from either. Results are observed through [[📘 Measurement]], so this result means that [[📘 Measurement]]s are consistent across pictures

# Proof
In the [[Heisenberg picture]], we consider the [[📘 Quantum state vector]] $\psi$ fixed and the [[📘 Quantum observable]] $A(t)$ evolves in time. In this picture:
- a measurement is given by $\braket{A(t)}_\psi := \braket{\psi, A(t) \psi}$.
- $A(t)$ evolves according to the equation $A(t)=e^{\frac{itH}{\hbar}}Ae^{-\frac{itH}{\hbar}}$

In the [[Schrodinger picture]], we consider the [[📘 Quantum observable]] $A$ to be time independent and the [[📘 Quantum state vector]] $\psi(t)$ to evolve over time. In this picture:
- a measurement is given by $\braket{A}_{\psi(t)} := \braket{\psi(t), A \psi(t)}$.
- $\psi(t)$ evolves according to the equation $\psi(t)=e^{-\frac{itH}{\hbar}}\psi(0)$.

Joining the above, $\braket{A(t)}_\psi = \braket{\psi, A(t) \psi} = \braket{\psi, e^{\frac{itH}{\hbar}}Ae^{-\frac{itH}{\hbar}} \psi} = \braket{-e^{\frac{itH}{\hbar}} \psi, Ae^{-\frac{itH}{\hbar}} \psi} = \braket{ \psi(t), A \psi(t)} = \braket{A}_{\psi(t)}$  