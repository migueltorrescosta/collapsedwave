---
tags:
  - "#metric-spaces"
---
$\{ f \in C^\infty ( \mathbb{R}^n, \mathbb{C} ) | \forall \alpha, \beta \in \mathbb{N}^n, \| f \|_{\alpha, \beta} < \infty\}$, where
- $\alpha, \beta \in \mathbb{R}^n$
- $C^\infty ( \mathbb{R}^n, \mathbb{C} )$ is the set of infinitely differentiable functions $f: \mathbb{R}^n \rightarrow \mathbb{C}$
- $\| f \|_{\alpha, \beta} := \sup_{x \in \mathbb{R}^n} | ( x^\alpha  D ^ \beta f ) ( x ) |$

Intuitively, all derivatives of $f$ decay to zero faster than any polynomial, as $| x | \rightarrow \infty$.