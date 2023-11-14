---
date: 2023-10-21
---

$\sigma_x \sigma_x = \sigma_y \sigma_y = \sigma_z \sigma_z = I$ 

## ✍️  Notation
- $I = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$ is the unitary $2 \times 2$ matrix
- $A^{-1}$ is the [[inverse matrix]] of $A$ if $AA^{-1} = A^{-1}A = I$ 
- $\sigma_x, \sigma_y, \sigma_z$ are the [[📘 Pauli Matrices]]
- $A$ is an [[📘 Involutory matrix]] if $A^2=I$

### 🧠 Proof
$$\sigma_x \sigma_x = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix} \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix} = \begin{pmatrix} 0*0 + 1*1 & 0*1+1*0 \\ 0*1+1*0 & 0*0+1*1 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} = I$$

$$\sigma_y \sigma_y = \begin{pmatrix} 0 & -i \\ i & 0 \end{pmatrix} \begin{pmatrix} 0 & -i \\ i & 0 \end{pmatrix} = \begin{pmatrix} 0*0 + -i*i & 0*-i+i*0 \\ 0*i+i*0 & i*-i+0*0 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} = I$$

$$\sigma_y \sigma_y = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix} \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix} = \begin{pmatrix} 1*1 + 0*0 & 1*0+0*-1 \\ 0*1+-1*0 & 0*0+-1*-1 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} = I$$
