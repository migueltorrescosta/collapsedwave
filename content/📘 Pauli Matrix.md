---
date: 2023-10-21
tags:
  - definition
  - quantum-theory
---
Pauli matrices operate on [[qubit]]s. They are represented by the following:

$$\sigma_1 = \sigma_x = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$$
$$\sigma_2 = \sigma_y = \begin{pmatrix} 0 & -i \\ i & 0 \end{pmatrix}$$
$$\sigma_3 = \sigma_z = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$$

# Cayley table
Below we describe the multiplication table for Pauli Matrices

| $\times$ | $\sigma_x$ | $\sigma_y$ | $\sigma_z$ |
| --- | --- | --- | --- |
| $\sigma_x$ | $I$ | $i \sigma_z$ | $-i \sigma_y$ |
| $\sigma_y$ | $-i \sigma_z$ | $I$ | $i \sigma_x$ |
| $\sigma_z$ | $i \sigma_y$ | $-i\sigma_x$ | $I$ |

# Properties
All the Pauli matrices
1. are Involuntary
2. are unitary
3. have trace $0$
4. have determinant $-1$

>[!success] Proof that any Pauli matrix is also an [[📘 Involutory matrix]]
> 
> $$\sigma_x \sigma_x = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix} \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix} = \begin{pmatrix} 0*0 + 1*1 & 0*1+1*0 \\ 0*1+1*0 & 0*0+1*1 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} = I$$
> 
> $$\sigma_y \sigma_y = \begin{pmatrix} 0 & -i \\ i & 0 \end{pmatrix} \begin{pmatrix} 0 & -i \\ i & 0 \end{pmatrix} = \begin{pmatrix} 0*0 + -i*i & 0*-i+i*0 \\ 0*i+i*0 & i*-i+0*0 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} = I$$
> 
> $$\sigma_y \sigma_y = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix} \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix} = \begin{pmatrix} 1*1 + 0*0 & 1*0+0*-1 \\ 0*1+-1*0 & 0*0+-1*-1 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} = I$$

>[!success] Proof that Pauli matrices are unitary
It follows from Pauli matrices being involuntary

>[!success] Proof that Pauli matrices have trace equal to $0$
> $$tr(\sigma_x) = tr \begin{pmatrix} 0 & 1 \\ 1 & 0\end{pmatrix} = 0 + 0 = 0$$
> 
> $$tr(\sigma_y) = tr \begin{pmatrix} 0 & -i \\ i & 0\end{pmatrix} = 0 + 0 = 0$$
> 
> $$tr(\sigma_z) = tr \begin{pmatrix} 1 & 0 \\ 0 & -1\end{pmatrix} = 1 + (-1) = 0$$

>[!success] Pauli matrices have determinant equal to $-1$
>
> $$\det(\sigma_x) = \det \begin{pmatrix} 0 & 1 \\ 1 & 0\end{pmatrix} = 0*0 - 1*1 = -1 $$
> 
> $$\det(\sigma_y) = \det \begin{pmatrix} 0 & -i \\ i & 0\end{pmatrix} = 0*0 - -i*i = -1 $$
>
> $$\det(\sigma_y) = \det \begin{pmatrix} 1 & 0 \\ 0 & -1\end{pmatrix} = 1*-1 - 0*0 = -1 $$

>[!info]-
> 1. $\det$ is the [[determinant]] operator on a [[matrix]]