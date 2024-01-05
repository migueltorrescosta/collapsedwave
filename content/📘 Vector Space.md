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


# Banach Space
A [[📘 Vector Space#Banach Space]] is a complete vector space equipped with a [[📘 Norm]]. Complete means that limits of any [[cauchy sequence]] has a limit in the space.

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




