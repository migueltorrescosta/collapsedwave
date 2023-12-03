---
date: 2023-10-22
tags:
  - theorem
---

$p(x) > 0 \forall x \in X$ 

>[!info]-
> 1.  $X$ is a [[📘 Vector field]]
> 2. $p$ is a [[📘 Norm]]

>[!success]
> Since a norm satisfies the [[triangle inequality]], $p(0) \leq p(x) + p(-x)$.
> By [[absolute homogeneity]] , $p(-x) = \| 1 \| p(x) = p(x)$ 
> By [[absolute homogeneity]] , $p(0) = \| 0 \| p(0) = 0$ 
> Joining results, $0=p(0) \leq p(x) + p(-x) = 2p(x)$, so $p(x) \geq 0$
