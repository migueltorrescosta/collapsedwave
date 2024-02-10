---
date: 2023-10-12
---
A [[force]] $F$ is called conservative iff $\exists V: F = - \nabla V$

>[!info]-
> 1. $V$ is the associated [[📘 Potential energy]]
> 2. $\nabla V$ is the [[📘 Del or Nabla]] of $V$

>[!tip]
> For a [[force]] $F(x) : \mathbb{R}^n \rightarrow \mathbb{R}^n$ with no dependency on the [[velocity]] $v = \dot x$, [[📘 Total Energy]] is constant only if the [[force]] is conservative

# Properties

## A force is conservative iff the partial derivatives commute

$F$ is a conservative force iff $\frac{\delta F_j}{\delta x_k} = \frac{\delta F_k}{\delta x_j}$ for the domain $U$ of $F$ 

>[!info]-
> 1. $U$ is a simply connected domain in $\mathbb{R}^n$ 
> 2. $F: U \rightarrow \mathbb{R}^n$ is a smooth function
> 3. $V$ is the [[📘 Potential energy]] associated with the force $F$.

>[!success]
> If $F$ is conservative, $\exists V : F = -\nabla V$ . Hence $$\frac{\partial F_j}{\partial x_k} = \frac{\partial^2 V}{\partial x_k \partial x_j} = \frac{\partial^2 V}{\partial x_j \partial x_k} = \frac{\partial F_k}{\partial x_j}$$
Conversely, If $F$ satisfies $\frac{\partial F_j}{\partial x_k} = \frac{\partial F_k}{\partial x_j}$ we can use path integrals to define $V$, and use [[📗 Stokes theorem]] to show that the integral is independent of the choice of paths.
