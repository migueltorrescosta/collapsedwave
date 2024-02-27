---
tags:
  - "#quantum-theory"
---
i.e. $\Delta_\psi A=0 \Leftrightarrow A \psi = 0$, where

- A is an [[📘 Operator]]
- $\psi$ is a [[quantum state vector]].
- $\Delta_\psi A$ is the [[📘 Measurement uncertainty]] 

# Proof
$\Leftarrow$ is trivial. To prove $\Rightarrow$, we first define $B:=A - \braket{A}_\psi$, where $\braket{ \cdot }_\psi$ is the [[📘 Expectation]] operator, so that
- $\braket{B}_\psi=0$
- $\Delta_\psi B = \Delta_\psi A$ 

$0 = \Delta_\psi B = \braket{B^2}_\psi = \braket{\psi, B^2 \psi} = \braket{B \psi, B \psi} = \| B \psi \|$. Hence $A\psi = ( B + \braket{A}_\psi ) \psi = B \psi + \lambda \psi = \lambda \psi$, where we defined $\lambda := \braket{A}_\psi$.
Finally, $0 = \Delta_\psi A = \braket{\psi, A \psi} = \braket{\psi, \lambda \psi} = \lambda \| \psi \| = \lambda$, so $A \psi = \lambda \psi = 0 \psi = 0$.

For this prove we used the fact that Quantum operators are self-adjoint, and that $\psi$ is normalised.