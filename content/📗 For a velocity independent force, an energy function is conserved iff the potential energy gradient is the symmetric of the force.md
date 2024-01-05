---
date: 2023-10-12
---
$E(x, \dot x) = \frac{1}{2}m \| \dot x \|^2 + V(x)$ is a [[📘 Constant of Motion]] $\Leftrightarrow - \nabla V = F$

>[!info]-
> 1. $E(x, \dot x) = \frac{1}{2}m \| \dot x \|^2 + V(x)$ is the [[Energy function]] aka the [[📘 Total Energy]]
> 2. $V(x) : \mathbb{R}^n \rightarrow \mathbb{R}^n$ is the [[📘 Potential energy]]
> 3. $F(x(t)) = m\ddot x$ is the velocity-independent [[force]]

>[!success]
> We differentiate the potential energy to get
> $$ \frac{d}{dt} \left ( \frac{1}{2}m \| \dot x \|^2 + V(x) \right ) = m \sum_{j=1}^{n}\dot x_j\ddot x_j + \sum_{j=1}^{n}\frac{\partial V}{\partial x_j}\dot x_j = \dot x \cdot \| m \ddot x + \nabla V \| = \dot x \cdot \| F(x) + \nabla V \| $$
> The derivative is zero iff $0=\dot x(t) . | F(x) + \nabla V | \Rightarrow F(x) + \nabla V = 0$
