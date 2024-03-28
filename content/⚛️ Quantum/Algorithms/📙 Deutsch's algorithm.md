---
tags:
  - "#quantum-computing"
---
# Setup
Given an $n$-bit [[📘 Unitary Operator]] $f: \mathbb{F}_{2^n} \rightarrow \mathbb{F}_{2^n}$, can we know whether this function is constant with a single evaluation?

# Solution
We can solve the above in 3 steps, represented by the circuit below

![[deutschs_algorithm.png]]

# Proof of correctness
- We have $\ket{\psi_0} = \ket{00}$.
- After applying $X$ to the 2nd [[qubit]] we get $\ket{01}$
- Applying the [[📘 Hadamard gate]] $H$ to both matrices, we get the superposition $\ket{00} - \ket{01} + \ket{10} - \ket{11}$, up to normalisation.
- Applying $U_f$ we get $\ket{0(0 \oplus f(0))} - \ket{0(1 \oplus f(0))} + \ket{1(0 \oplus f(1))} - \ket{1(1 \oplus f(1))}$. 
- After applying the [[📘 Hadamard gate]]s on each bit individually, we get the [[📘 Quantum state]] $\ket{\psi_1} = \sum_{i=0}^{2^{n+1}-1} \ket{i_2}$, up to normalisation, where $i_2$ is the binary representation of $i$, i.e. $5_2 = 101$.
- $\ket{\psi_2} = U_f \ket{\psi_1} = \sum_{i=0}^{2^{n+1}-1} \ket{i_2}$ 
- [ ] Complete this proof


More generically, there is always a way of building an operator such that $U_f \ket{x} = (-1)^{f(x)}\ket{x}$.