---
date: 2024-01-10
tags:
  - physics
---
Shannon's entropy is a measure of the uncertainty of a system, or equivalently the amount of information present in it. It is often measured in bits, and, for a system with $n$ possible states, and probabilities described by the vector $p=[p_1, p_2, ..., p_n]$, the entropy is given by $$H(p) = \sum_{i=0}^{n}-\log_2{p_i}$$.
# Von Neumann Entropy

The Von Neumann Entropy is a generalisation of Shannon's entropy, useful for analysing the amount of information present in a [[qubit]]. It is given as a function of the [[density matrix]] $\rho$, namely $H(\rho) = - tr ( \rho\ln \rho )$.

The value of $\ln \rho$ is given by the generalisation of the $\ln$ operator to matrices. One way of doing this is to diagonalise the density matrix, take the logarithms along the diagonal, and change the basis back to the original one. I need to explain why we can diagonalise the matrix, or find a better explanation of $\ln \rho$. [[Help me❓]].

For a density matrix $\rho$ equivalent to a pure quantum state, the Von Neumann Entropy matches Shannon's entropy.