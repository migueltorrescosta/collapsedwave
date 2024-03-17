---
date: 2023-10-13
tags:
  - "#quantum-theory"
  - "#algebra"
---
$\{ f, g \} := \sum_{i=i}^{n} \left ( \frac{\partial f}{\partial q_i} \frac{\partial g}{\partial p_i} - \frac{\partial f}{\partial p_i} \frac{\partial g}{\partial q_i}\right )$ is the Poisson bracket expressed using [[canonical coordinates]]. It is
- [[anti-commutative]] : $\{ f, g \} = - \{ g, f \}$
- [[bilinear]] : $\{ af + bg, h \} = a\{ f, h \} + b \{ g, h \}$
- follows the [[Leibniz rule]] : $\{ fg,h \} = \{ f, h \} g + f \{ g,h \}$
- follows the [[📘 Jacobi identity]]: $\{ f, \{ g,h \} \} + \{ g, \{ h,f \} \} + \{ h, \{ f,g \} \} = 0$

In the above we had
- $p, q \in \mathbb{R}^n$ as coordinates in the [[📘 Phase Space]]
- $f,g,h: \mathbb{R}^{2n+1} \rightarrow \mathbb{R}$ as real valued [[scalar field]]s, with inputs $p,q \in \mathbb{R}^n$ and $t \in \mathbb{R}$ 

I don't have an intuitive explanation of what the Poisson bracket represents. [[Help me ❓]]