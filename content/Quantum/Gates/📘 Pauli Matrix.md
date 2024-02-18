---
date: 2023-10-21
tags:
  - "#quantum-theory"
---
Pauli matrices operate on [[qubit]]s. Pauli matrices are represented as:

$$\sigma_1 = \sigma_x = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$$
$$\sigma_2 = \sigma_y = \begin{pmatrix} 0 & -i \\ i & 0 \end{pmatrix}$$
$$\sigma_3 = \sigma_z = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$$
Their relations can be summarised by a [[Cayley table]]:

| $\times$ | $\sigma_x$ | $\sigma_y$ | $\sigma_z$ |
| --- | --- | --- | --- |
| $\sigma_x$ | $I$ | $i \sigma_z$ | $-i \sigma_y$ |
| $\sigma_y$ | $-i \sigma_z$ | $I$ | $i \sigma_x$ |
| $\sigma_z$ | $i \sigma_y$ | $-i\sigma_x$ | $I$ |
Which has a nicer ( shorter ) description, with indices taken module $3$, as
- $\sigma_x^2 = \sigma_y^2 = \sigma_z^2 = I$
- $\sigma_i \sigma_{i+1} = i \sigma_{i+2}$
- $\sigma_i \sigma_{i-1} = - i \sigma_{i-2}$

# Properties
Any Pauli matrix is also a
1. [[📗 Pauli matrices are involuntory]]
2. [[📗 Pauli matrices are unitary]]
3. [[📗 Pauli matrices have trace 0]]
4. [[📗 Pauli matrices have determinant -1]]
