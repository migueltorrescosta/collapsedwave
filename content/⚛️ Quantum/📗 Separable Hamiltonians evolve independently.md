---
tags:
  - "#quantum-theory"
---
When we have a [[📘 Separable Hamiltonian]] $H(x_1, p_1, x_2, p_2)=H_1(x_1, p_1) + H_2(x_2, p_2)$, we can solve the 2 sub-systems independently to obtain the joint solution.

# Proof
We have that $[ H_1, H_2] = 0$ since $H_1$ and $H_2$ act on different components of the [[📘 Tensor product]]. As such we can find their simultaneous eigenstates, which are given by

$$
\begin{array}{cll}
H\ket{E} & = (H_1 + H_2)(\ket{E_1} \otimes \ket{E_2}) & \text{since addition distributes over the tensor product}\\
& = H_1 (\ket{E_1} \otimes \ket{E_2}) + H_2 (\ket{E_1} \otimes \ket{E_2}) & \text{Since $H_i$ only operates on it's "component"}\\
& = E_1\ket{E_1} \otimes \ket{E_2} + \ket{E_1} \otimes E_2 \ket{E_2} \\
& = E_1 (\ket{E_1} \otimes \ket{E_2}) + E_2 (\ket{E_1} \otimes \ket{E_2}) \\
& = (E_1 + E_2)(\ket{E_1} \otimes \ket{E_2}) \\
& = E \ket{E} & \text{where $E:= E_1 + E_2$ and $\ket{E}:=\ket{E_1} \otimes \ket{E_2} = \ket{E_1E_2}$ }
\end{array}
$$
