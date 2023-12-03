---
date: 2023-10-12
tags:
  - theorem
---
$E(x, \dot x) = \frac{1}{2}m \| \dot x \|^2 + V(x)$ is a [[📘 Constant of Motion]] $\Leftrightarrow v \cdot F_2(x,\dot x)=0$

>[!info]-
> 1. $E(x, \dot x) = \frac{1}{2}m \| \dot x \|^2 + V(x)$ , the [[Energy function]] aka the [[📘 Total Energy]]
> 2. $V(x) : \mathbb{R}^n \rightarrow \mathbb{R}^n$ , a smooth function representing the [[📘 Potential energy]]
> 3. $F(x,v) := - \nabla V(x) + F_2(x,v)$ , the velocity-dependent [[force]]
> 4. $F_2 : \mathbb{R}^n \times \mathbb{R}^n \rightarrow \mathbb{R}^n$, the [[force]] component not explained by the [[📘 Potential energy]]
> 5. $v = \dot x$ is the velocity

>[!success]
>
> $$ \frac{d}{dt} \left ( \frac{1}{2}m \| \dot x \|^2 + V(x(t)) \right ) = m \sum_{j=1}^{n}\dot x_j(t)\ddot x_j(t) + \sum_{j=1}^{n}\frac{\partial V}{\partial x_j}\dot x_j(t) = \dot x(t) \cdot \left [ m \ddot x(t) + \nabla V \right ] $$
> 
> Since the force $m \ddot x = F(x, v)$ is decomposed as $F(x,v) = - \nabla V + F_2(x,v)$ , we get
> 
> $$ \frac{d}{dt} \left ( \frac{1}{2}m \| \dot x \|^2 + V(x(t)) \right ) = \dot x(t) \cdot \left [ F(x) + \nabla V \right ] = \dot x(t) \cdot [ - \nabla V + F_2(x,v) + \nabla V ] = \dot x(t) \cdot F_2(x,v) $$
> 
> Hence the Energy is constant iff $F_2$ is orthogonal to the velocity $v = \dot x$ .
