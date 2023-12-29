---
date: 2023-10-22
tags:
  - definition
---
$p: X \rightarrow \mathbb{R}$ such that
- The [[triangle inequality]] is satisfied: $p(x+y) \leq p(x) + p(y) \forall x,y \in X$ 
- We have [[absolute homogeneity]]: $p(sx) = \| s \| p(x) \forall x \in X, \forall s \in F$
- We have [[point separation]]: $p(x)=0 \implies x=0$ 

>[!info]-
> 1. $X$ is a [[📘 Vector space]]
> 2. $F$ is a [[subfield]] of the [[complex numbers]] $\mathbb{C}$ 
> 3. $\| \cdot \| : F \rightarrow \mathbb{R}^+_0$ is the usual norm on $\mathbb{C}$, given by $\| a + bi \| = a^2 + b^2$ 

# Properties

## All norms are non-negative

More specifically, $\forall x \in X$ we have that $p(x) > 0$ 

>[!success] Proof
> Since a norm satisfies the [[triangle inequality]], $p(0) \leq p(x) + p(-x)$.
> By [[absolute homogeneity]] , $p(-x) = \| 1 \| p(x) = p(x)$ 
> By [[absolute homogeneity]] , $p(0) = \| 0 \| p(0) = 0$ 
> Joining results, $0=p(0) \leq p(x) + p(-x) = 2p(x)$, so $p(x) \geq 0$


## Inner products define a canonical norm

[[📘 Inner Product]]s $\braket{\cdot,\cdot}$ define a canonical  $p: X \rightarrow \mathbb{R}$  via $p(x) := \sqrt{\braket{x,x}}$ 

>[!success] Proof
> We need to show that  $p(x) := \sqrt{\braket{x,x}}$ satisfies all properties of a [[📘 Norm]].
>
> 1. $p(x+y)^2=\braket{x+y,x+y}=\braket{x,x}+\braket{y,y}+\braket{x,y}+\braket{y,x}=p(x)^2+p(y)^2+2|\braket{x,y}| \leq p(x)^2+p(y)^2+2p(x)p(y) = (p(x)+p(y))^2$, where the inequality is the result of using the [[📗 Cauchy-Schwarz inequality]] . This gives us the [[triangle inequality]].
> 2. $p(sx)=\sqrt{\braket{sx,sx}}=\sqrt{s\overline{s}\braket{x,x}}= \| s \|s \sqrt{x,x} = \| s \| p(x)$, showing us that we have [[absolute homogeneity]]
> 3. $p(x)=0 \Rightarrow \sqrt{\braket{x,x}}=0 \Rightarrow \braket{x,x}=0 \Rightarrow x=0$, giving us [[point separation]] 