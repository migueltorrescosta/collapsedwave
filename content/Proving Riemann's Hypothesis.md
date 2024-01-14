---
draft: "true"
---
# Next steps
Both of the points below follow Andrea's email suggestion
1. Study how to use the Runge-Kutta methodology to solve differential equations. This will be needed to propagate the solution's of zeroes at $H_t$ backwards in time and find when do the zeroes collapse ( i.e. approximating the $Λ$ defined below )
2. Find numerical methods to approximate the zeroes of $H_t$ , for a given large $t$, i.e. $\geq .22$.
# Overview

1. Define these equations, describing the heat flow of the Riemann Equation 
	1. $H_t(z) := \int_{0}^{\infty}e^{tu^2}\phi (u) \cos (zu) du$
	2. $\Phi (u) := \sum_{n=1}^{\infty} (2 \pi^2n^4 e^{9u} - 3 \pi n^2 e^{5u}) \exp{(-\pi n^2 e^{4u})}$
2. $\exists Λ \in \mathbb{R}$ such that $\forall t \geq Λ$, the zeroes of ${H_t}$ are real. This is known as the [de Bruijn–Newman constant](https://en.wikipedia.org/wiki/De_Bruijn%E2%80%93Newman_constant).
3. $Λ \geq 0$ was [proved](https://arxiv.org/pdf/1801.05914.pdf) by Brad Rogers & Terence Tau.
4. $Λ > 0$ is equivalent to the Riemann Hypothesis.
5. $Λ \leq .22$ was [proved](https://github.com/km-git-acc/dbn_upper_bound/blob/master/Writeup/debruijn.pdf) as part of the polymath project.
6. $Λ \leq .2$ was later [proved](https://arxiv.org/abs/2004.09765) by Dave Platt and Tim Trudgian
7. $H_0(z) = \int_0^{\infty}\phi (u) cos(zu) du$ is the Fourier representation of $H_0(z)$
8. $H_0$ relates to the zeroes of Riemann's zeta function
9. $H_t$ is the evolution of $H_0$ under the backwards heat equation $\partial_tH_t(z) = - \partial_{zz}H_t(z)$. 

# Properties of the Riemann Zeta
1. $\zeta(s) = \sum_{n=1}^{\infty}\frac{1}{n^s}=\prod_{p}{[1-p^{-s}]^{-1}}$ 
2. $\zeta$ satisfies the functional equation $\pi^{-\frac{s}{2}}\Gamma({\frac{s}{2}})\zeta(s)=\pi^{-\frac{1-s}{2}}\Gamma(\frac{1-s}{2})\zeta(1-s))$

# Plan to bound $Λ$

1. Choose a $t \geq Λ$ ( $t>.2$ suffices for the time being )
2. Take $n$ zeroes $(x_1, x_2, \dots , x_n)$ of $H_t$
3. Computationally estimate how the $x_i$ evolve backwards in time (i.e. towards $t=0$, getting an estimate of the time $t_k$ at which the trajectories of the various $x_i$ converge to a single point
4. Reproduce the above with higher values for $n$, obtaining iteratively better estimates of $Λ$.
5. If
   1. $G \approx 0$, we proved nothing 😢.
   2. $G$ is statistically far from $0$, we have shown that Riemann's Hypothesis is likely true 🎉
  
# Pre-requisites
1. Do we have examples ( in code or books ) of approximating path trajectories using heatflow?
2. What are the best methods known to find zeroes of the Riemann Zeta, i.e. the $(x_1, x_2, ... , x_n)$