---
date: 2023-11-23
tags:
  - definition
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
> I want to write this proof neatly, but I haven't decided yet on the best way to do so ([[Help me❓]]). In the meantime, see [the Wikipedia proofs](https://en.wikipedia.org/wiki/Cauchy%E2%80%93Schwarz_inequality#Proofs)

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
# Quantum Hilbert Space

The Quantum Hilbert Space is the [[📘 Vector Space#Hilbert Space]] used to represent [[quantum system state]]s.

## Position and Momentum basis

In classical mechanics we keep track of a particle's position and momentum directly. In quantum mechanics particle's are described by their [[wave function]]. The [[wave function]] can be expressed in different orthonormal basis. Two commonly used basis are the position basis and the momentum basis. Both of these basis are continuous, represented by the $x$ and $p$ variables respectively, and in both cases taking values in $\mathbb{R}$.

## Properties

The results below are frequently useful when manipulating algebraic expressions related to quantum spaces

| Result | Comments |
| ---: | --- |
| $\ket{\psi} = \int_{\infty}^{\infty}\ket{x}\braket{x \mid \psi}dx$ | Representation of a [[wave function]] $\psi$ in the position basis |
| $\ket{\psi} = \int_{\infty}^{\infty}\ket{p}\braket{p \mid \psi}dp$ | Representation of a [[wave function]] $\psi$ in the momentum basis |
| $\braket{x \mid p} = \frac{1}{\sqrt{2 \pi \hbar}}\exp{(\frac{i}{\hbar}px)}$ | Transformation between the position and momentum basis |
| $X \ket{x} = x \ket{x}$ | $\ket{x}$ is an eigenstate of $X$ with eigenvalue $x$ |
| $P \ket{p} = p \ket{p}$ | $\ket{p}$ is an eigenstate of $P$ with eigenvalue $p$ |


>[!info]-
> - $\ket{p}$ is the eigenstate associated with a definite momentum $p$
> - $\ket{x}$ is the eigenstate associated with a definite momentum $x$
> - $\ket{\psi}$ is a generic [[quantum state vector]]
> - $\hbar$ is [[Plancks reduced constant]]
> - $X$ is the [[📘 Position Operator]]
> - $P$ is the [[📘 Momentum Operator]]




