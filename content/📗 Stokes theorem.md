---
date: 2023-10-13
tags:
  - theorem
---
$\int \int_{\Sigma} (\nabla \times F) \cdot d \Sigma = \oint_{\partial \Sigma} F \cdot d \Gamma$ 

The above can be made explicit as:

$\int \int_{\Sigma} \left ( \left ( \frac{\partial F_z}{\partial y} - \frac{\partial F_y}{\partial z} \right ) dydz + \left ( \frac{\partial F_x}{\partial z} - \frac{\partial F_z}{\partial x} \right ) dzdx + \left ( \frac{\partial F_y}{\partial x} - \frac{\partial F_x}{\partial y} \right ) dxdy \right ) = \oint_{\partial \Sigma} \left ( F_x dx + F_y dy + F_z dz \right )$

>[!info]-
> 1. $\Sigma$ is a smooth oriented surface in $\mathbb{R}^3$.
> 2. $\Gamma := \partial \Sigma$ is the boundary of $\Sigma$. 
> 3. $F(x) : \mathbb{R}^3 \rightarrow \mathbb{R}^3$  is a vector field

>[!tip]
> The integral of a vector field's divergence measures the flow through the surface under the given force, meaning that it matches the boundary integral of said force.

>[!success] Proof
> [[Help me❓]]
