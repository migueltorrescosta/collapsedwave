---
tags:
  - "#quantum-computing"
---
# Goal
We want to protect our [[qubit]]s against decoherences and changes due to gate errors and environmental noise

# Solution
We implement $\ket{0}_L$ and $\ket{1}_L$ using three [[physical qubits]], by setting
$$
\left \{
\begin{array}{rll}
\ket{0}_L &= \ket{000} \\
\ket{1}_L &= \ket{111} \\
\end{array}
\right .
$$

We apply the [[📘 Measurement]]s $\braket{Z_1Z_2}$ and $\braket{Z_2Z_3}$ to get information about the system's state $\ket{\psi}$:

$$
(Z_1Z_2, Z_2Z_3) = 
\left \{
\begin{array}{rll}
(1,1) &\Rightarrow \ket{\psi} = \alpha \ket{000} + \beta \ket{111} \\
(1,-1) &\Rightarrow \ket{\psi} = \alpha \ket{001} + \beta \ket{110} \\
(-1,1) &\Rightarrow \ket{\psi} = \alpha \ket{100} + \beta \ket{011} \\
(-1,-1) &\Rightarrow \ket{\psi} = \alpha \ket{010} + \beta \ket{101} \\
\end{array}
\right .
$$

Having gotten this measurements, we can correct any changes to go back to the valid states of $\{ \ket{0}_L, \ket{1}_L \} = \{ \ket{000}, \ket{111}\}$, by flipping the appropriate [[qubit]]s. This fails if we had $2$ or more errors, which happens with probability $3p^2(1-p) + p^3$, where $p$ is the probability of a [[qubit]] being flipped by error.

The probability of error can be taken to be arbitrary close to zero, using enough [[ancillary qubit]]s. This is known as the [[quantum threshold theorem]]