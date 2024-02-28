---
tags:
  - "#quantum-theory"
  - "#quantum-computing"
url: https://arxiv.org/abs/2309.10757
---
# 🧮 Summary

1. Build a [[📘 Quantum Hilbert Space]] from the [[tensor product]] $\tilde H = \tilde H_1 \otimes \tilde H_2$ of two systems given by [[Hamiltonian]]s $\tilde H_1$ and $\tilde H_2$. For a chosen $m \in \mathbb{Z}^+$ 
	1. $\tilde H_1$ has eigenvalues given by $\log p_i, i \in \{1, 2 ,... m \}$
	2. $\tilde H_2$ has eigenvalues given by $\log j, j \in \{1, 2 ,... m \}$
	3. The two systems above can be realised using either [[Supersymmetric Quantum Mechanics]]. This can be done more efficiently using a result from [[🗒️ Quantum algorithm for nonlinear differential equations]]
2. We build a [[Measurement operator]] with [[energy level]] $\log N$. Given our initial setup of $\tilde H$, $\ket{\log N}$ is described as $\sum_{i,j} \ket{\log p_i } \ket{\log j}$. After measurement, we get a value $\ket{\log p_i}$, i.e. we get a prime factor of $N$ 🎉

The above only describes the algorithm used. The paper also addresses physical implementation and [[time complexity]] considerations.

# ❓ Questions

🌞 nitpick: It was unclear in Eq 3 that the [[Hamiltonian]] $\bar H_1$ and $\bar H_2$ were operating on distinct [[qubit]]s. The notation for this is the [[tensor product]], $\bar H = \bar H_1 \otimes \bar H_2$

# 🌍 Quantum Potentials

I'm lost here as my own understanding of Quantum Physics is limited. [[Help me ❓]]. I need to learn the concepts of
- [ ] discrete quantum register
- [ ] quantum ladder ( This feels like a quantum specific application of ladder operator, i.e. annihilation/creation operators in the quantum world )
- [ ] "Both legs should have $d$ spins": No clue what this means
- [ ] Supersymmetric Quantum Mechanics: This technique allows us to build a potential with a pre-defined finite number of eigenvalues $\{ e_1, e_2, \dots , e_n \}$. How?
- [ ] "digital implementation of the algorithm": Classically, analog means continuous and digital means discrete. Does the same apply to quantum implementations? I thought everything in the quantum world was quantized aka discrete aka digital.