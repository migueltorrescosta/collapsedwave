---
tags:
  - "#probability"
---
Markov Chains are described via a discrete time evolution where the transition matrix is time invariant. This is known as the [[📘 Markovian Dynamics|Markov property]] or the memory-less property. This is formalised as $\{ X_n \}_{n \in \mathbb{Z}^+}$ ,with a [[transition rate matrix]] $T$ which determines $\mathbb{P}[X_{n+1} = \alpha | X_n = \beta] = T(\beta, \alpha)$.