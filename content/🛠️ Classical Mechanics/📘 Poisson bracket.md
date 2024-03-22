---
date: 2023-10-13
tags:
  - "#algebra"
  - "#classical-mechanics"
---
$\{ f, g \} := \sum_{i=i}^{n} \left ( \frac{\partial f}{\partial q_i} \frac{\partial g}{\partial p_i} - \frac{\partial f}{\partial p_i} \frac{\partial g}{\partial q_i}\right )$ is the Poisson bracket expressed using [[canonical coordinates]]. It is
- [[anti-commutative]] : $\{ f, g \} = - \{ g, f \}$
- [[bilinear]] : $\{ af + bg, h \} = a\{ f, h \} + b \{ g, h \}$
- follows the [[Leibniz rule]] : $\{ fg,h \} = \{ f, h \} g + f \{ g,h \}$
- follows the [[📘 Jacobi identity]]: $\{ f, \{ g,h \} \} + \{ g, \{ h,f \} \} + \{ h, \{ f,g \} \} = 0$

In the above we had
- $p, q \in \mathbb{R}^n$ as coordinates in the [[📘 Phase Space]]
- $f,g,h: \mathbb{R}^{2n+1} \rightarrow \mathbb{R}$ as real valued [[scalar field]]s, with inputs $p,q \in \mathbb{R}^n$ and $t \in \mathbb{R}$ 

# Intuition
( based on [this quora answer](https://www.quora.com/What-is-an-intuitive-way-of-explaining-the-Poisson-bracket))

For a [[force]] $F$, and by the definition of [[📘 Hamilton's Equations of Motion]], we have:
$$
\begin{array}{rll}
\dot F(p_i,q_i) &= \frac{\partial F}{\partial{q_i}}\dot q_i + \frac{\partial F}{\partial{p_i}}\dot p_i & \text{Using Hamilton's Equations of Motion} \\
&= \frac{\partial F}{\partial{q_i}}\frac{\partial H}{\partial p_i} - \frac{\partial F}{\partial{p_i}}\frac{\partial H}{\partial q_i} & \text{By the definition of the Poisson Bracket} \\
&= \{ F, H\} \\
\end{array}
$$

This makes the [[📘 Poisson bracket]] an analytically simple way of understanding and working with [[force]]s. Most of the results applicable to Poisson brackets extend to [[📘 Commutator]] results in [[quantum theory]].