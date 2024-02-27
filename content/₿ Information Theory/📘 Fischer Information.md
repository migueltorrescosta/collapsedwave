---
tags:
  - "#information-theory"
---
$\mathcal{I}_X(\theta) := \mathbb{E} [ ( \frac{\partial}{\partial \theta} \log ( f_\theta(X) )^2 | \theta]$, where

- $X$ is a [[random variable]]
- $\theta$ is a vector of scalars
- $f_\theta$ is a [[probability distribution function]] for $X$. This function depends on $\theta$.
- $\mathbb{E}$ is the [[expectation operator]]

# Intuition
Fischer information measures how much information do the observations we made of a random variable $X$ give us about the correct values of the underlying $\theta$. 