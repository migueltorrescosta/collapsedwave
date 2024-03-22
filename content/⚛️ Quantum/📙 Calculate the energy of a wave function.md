---
tags:
  - "#quantum-theory"
---
The [[energy]] of a [[wave function]] is defined to be $E \in \mathbb{R}$ such that $H \ket{\psi} = E \ket{\psi}$. We can use this to calculate the [[energy]] of a generic [[wave function]] as the [[📘 Expectation]] $\braket{H}_\psi$, with $\psi$ having [[📘 Norm]] 1. This holds for an [[📘 Eigenstate]] $\psi$ of the [[Hamiltonian]] $H$ we have:
$$
\begin{array}{rll}
\braket{H}_\psi &= \braket{\psi | H | \psi } & \text{This holds for an eigenstate of the Hamiltonian}\\
&= \braket{\psi | E \psi} & \text{Since $E \in \mathbb{R}$ is a scalar}\\
&= E \braket{\psi | \psi} & \text{By definition of the norm}\\
&= E \| \psi \| & \text{Since $\psi$ is normalized}\\
&= E
\end{array}
$$ If $\psi$ is not an [[📘 Eigenstate]] of $H$, we then use $\braket{H}_\psi$ not as the [[energy]], but as the expected [[energy]] of the system upon measurement.