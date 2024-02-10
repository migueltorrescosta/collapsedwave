---
date: 2023-11-23
---
A non empty set $V$ over a [[field]] $F$ satisfying with 2 [[binary operation]]s, commonly denoted as $+$ and $\times$, satisfying:

| Axiom | Description |
| ---: | --- |
| $u+(v+w)=(u+v)+w$ | addition of vectors is associative |
| $u+v=v+u$ | Addition is commutative |
| $\exists 0 \in V : v+0 = v \forall v \in V$ | There is an additive identity vector $0 \in V$ |
| $\forall v \in V \exists (-v) : (-v)+v = 0$ | All vectors have an additive inverse |
| $a(bv) = (ab)v$ | Scalar multiplications is associative with field multiplication |
| $1v=v$ | There is a multiplicative identity scalar $1 \in F$ |
| $a(u+v) = au + av$ | Scalar multiplication is distributive over vector addition |
| $(a+b)V = av + bv$ | Scalar multiplication is distributive over field addition |

>[!info]-
> 1. $u,v,w \in V$ are [[vector]]s
> 2. $a,b \in F$ are [[scalar]]s

# Norm
A norm is a function $p: X \rightarrow \mathbb{R}$ satisfying
- The [[triangle inequality]]: $p(x+y) \leq p(x) + p(y) \forall x,y \in X$ 
- [[absolute homogeneity]]: $p(sx) = \| s \| p(x) \forall x \in X, \forall s \in F$
- [[point separation]]: $p(x)=0 \implies x=0$ 

>[!info]-
> 1. $X$ is a [[📘 Vector Space]]
> 2. $F$ is a [[subfield]] of the [[complex numbers]] $\mathbb{C}$ 
> 3. $\| \cdot \| : F \rightarrow \mathbb{R}^+_0$ is the usual norm on $\mathbb{C}$, given by $\| a + bi \| = a^2 + b^2$ 

## All norms are non-negative

More specifically, $\forall x \in X$ we have that $p(x) > 0$ 

>[!success] Proof
> Since a norm satisfies the [[triangle inequality]], $p(0) \leq p(x) + p(-x)$.
> By [[absolute homogeneity]] , $p(-x) = \| 1 \| p(x) = p(x)$ 
> By [[absolute homogeneity]] , $p(0) = \| 0 \| p(0) = 0$ 
> Joining results, $0=p(0) \leq p(x) + p(-x) = 2p(x)$, so $p(x) \geq 0$

## Cauchy-Schwarz inequality
$\| \braket{v,w} \| \leq \| v \| \| w \|$ 

>[!info]-
> 1. $\braket{ \cdot, \cdot }$ is an [[📘 Inner Product]]
> 2. $v,w$ are vectors
> 3. $\| v \| := \sqrt{\braket{v,v}}$ is the [[📘 Vector Space#Norm]] induced by the [[📘 Inner Product]]

>[!success] Proof
> I want to write this proof neatly, but I haven't decided yet on the best way to do so ([[Help me ❓]]). In the meantime, see [the Wikipedia proofs](https://en.wikipedia.org/wiki/Cauchy%E2%80%93Schwarz_inequality#Proofs)

## Inner products define a canonical norm

[[📘 Inner Product]]s $\braket{\cdot,\cdot}$ define a canonical  $p: X \rightarrow \mathbb{R}$  via $p(x) := \sqrt{\braket{x,x}}$ 

>[!success] Proof
> We need to show that  $p(x) := \sqrt{\braket{x,x}}$ satisfies all properties of a [[📘 Vector Space#Norm]].
>
> 1. $p(x+y)^2=\braket{x+y,x+y}=\braket{x,x}+\braket{y,y}+\braket{x,y}+\braket{y,x}=p(x)^2+p(y)^2+2|\braket{x,y}| \leq p(x)^2+p(y)^2+2p(x)p(y) = (p(x)+p(y))^2$, where the inequality is the result of using the [[📘 Vector Space#Cauchy-Schwarz inequality]] . This gives us the [[triangle inequality]].
> 2. $p(sx)=\sqrt{\braket{sx,sx}}=\sqrt{s\overline{s}\braket{x,x}}= \| s \|s \sqrt{x,x} = \| s \| p(x)$, showing us that we have [[absolute homogeneity]]
> 3. $p(x)=0 \Rightarrow \sqrt{\braket{x,x}}=0 \Rightarrow \braket{x,x}=0 \Rightarrow x=0$, giving us [[point separation]] 


# Banach Space
A [[📘 Vector Space#Banach Space]] is a complete vector space equipped with a [[📘 Vector Space#Norm]]. Complete means that limits of any [[cauchy sequence]] has a limit in the space.

# Hilbert Space
A [[📘 Vector Space#Hilbert Space]] is a [[📘 Vector Space#Banach Space]] equipped with an [[📘 Inner Product]] $\langle \cdot , \cdot \rangle$. $\| x\| := \langle \cdot , \cdot \rangle$.

# Phase Space
For a particle $x$ moving through space in $\mathbb{R}^n$, the associated phase space is given by the vector $(x, \dot x) \in \mathbb{R}^{2n}$. Phase space allow us to describe the movement of a set of particles without requiring knowledge of it's past and future.

>[!quote] Interactive tutorial
> [Intro to Phase Space singularity analysis](https://colab.research.google.com/github/migueltorrescosta/tutor/blob/master/Phase_Planes.ipynb), using a Google Colab notebook


