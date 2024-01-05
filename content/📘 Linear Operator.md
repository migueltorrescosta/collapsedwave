---
date: 2023-11-23
---
A linear operator is a map $\Omega: V \rightarrow V$  satisfying

1. $\Omega a\ket{V}= a \Omega \ket{V}$
2. $\Omega ( a\ket{V} + b \ket{W} ) = a \Omega \ket{V} + b \Omega \ket{W}$ 
3. $\bra{V} a \Omega = \bra{V} \Omega a$ 
4. $( \bra{V} a + \bra{W} b ) \Omega = a \bra{V} \Omega + b \bra{W} \Omega$ 

>[!info]-
> 1. $V,W$ are [[vector]]s
> 2. $a,b$ are [[scalar]]s in a [[field]]
> 3. $\bra{\cdot}$ and $\ket{\cdot}$ follow the [[braket notation]]

Operators are a generalisation of matrices: They act on vector spaces linearly, without being attached to any basis representation. When working with finite vector spaces, the choice of a basis allows us to represent the operator as a matrix. This won't be always possible: some operators do not have a matrix representation

# Operators

## Adjoint Operator
The adjoint $A^\star : H \rightarrow H$ of a matrix $A$ is defined by the relation $\braket{Ax, y} = \braket{x, A^\star y} \forall x,y \in H$. Uniqueness and existence of $A^\star$ are assured by [[Riesz Representation Theorem]].

>[!info]-
> 1. $H$ is an [[📘 Vector Space#Hilbert Space]] 
> 2. $\braket{ \cdot , \cdot }$ is an [[📘 Inner Product]] on $H$. We follow the Physics convention that an Inner Product is linear on the 2nd variable.
> 3. $A$ is an [[Operator]]
> 4. The adjoint might be written as $A^\star$ (maths) or $A^\dagger$ ( physics ). It might also be called the Hermitian Adjoint.

## Hermitian Operator
$A: A = A^*$, where $A$ is an operator over the complex [[📘 Vector field]] $\mathbb{C}$

## Anti-Hermitian Operator
$A: A = -A^*$

## Self Adjoint Operator
$A: \braket{Ax, y} = \braket{x, Ay}, \forall x,y \in H$

In other words, the [[📘 Linear Operator#Adjoint Operator]] $A^\star$ of $A$ is $A$.

Remark: Any [[📘 Linear Operator#Hermitian Operator]] is also a [[📘 Linear Operator#Self Adjoint Operator]]

## Unitary Operator
$A: A*A = AA* = AA^{-1} =I$

## Symmetric Operator
$A: \braket{Ax, y} = \braket{x, yA}, \forall x,y \in D(A)$
$D(A) \subset H$ is the Domain of $A$.

# Properties

## All Operators can be decomposed into an Hermitian and an Anti-hermitian sum

>[!success]
> 1. $A = \frac{A+A^*}{2} + \frac{A-A^*}{2}$
> 2. $\frac{A+A^*}{2}$ is an [[📘 Linear Operator#Definitions#Hermitian Operator]] by construction
> 3. $\frac{A-A^*}{2}$ is an [[📘 Linear Operator#Definitions#Anti-Hermitian Operator]] by construction
