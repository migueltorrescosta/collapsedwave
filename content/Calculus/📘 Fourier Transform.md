---
date: 2023-11-25
---

$$\hat f ( t ) := \int_{- \infty}^{\infty} f(x) e^{-2 \pi i t x  } dx$$

>[!info]-
> $f \in L^1 ( \mathbb{R})$ is an [[integrable function]] with respect to the [[Lebesgue measure]].

# Inverting the Fourier Transform

Given the Fourier Transform $\hat f$ of a function $f$, we are able to retrieve the original function by applying the result $$f ( x ) := \int_{- \infty}^{\infty} \hat f( t ) e^{2 \pi i t x  } d t$$
# Properties
- [[📗 Fourier Uncertainty Principle]]

The usefulness of the Fourier transform comes from the results below

| | $f(x)$ | $\bar f ( t )$ |
| ---: | --- | --- |
| Definition | $f(x)$ | $\int_{- \infty}^{\infty} f(x) e^{-2 \pi i t x  } dx$ |
| Inverse | $\int_{- \infty}^{\infty} \hat f( t ) e^{2 \pi i t x  } d t$ | $\bar f ( t )$ |
| Linearity | $a f(x) + g(x)$ | $a \bar{f}( t ) + \bar{g}( t )$ |
| Shift | $g(x-x_0)$ | $\bar g(t) e^{-2 \pi i t x_0 }$ |
| Convolution | $\int_{- \infty}^{\infty} f(x) g(x-y) dy$ | $\bar f \bar g$ |
| Product | $f(x)g(x)$ | $\int_{\infty}^{\infty} \bar f (x) \bar g (t -x)dx$   |
| Scaling | $f(ax)$ | $\|a\|^{-1} f ( \frac{t}{a})$ |
| Differentiation | $\frac{d}{dx}f(x)$ | $2\pi i t \bar f ( t )$ |
| Integration | $\int_{- \infty}^{x} f(z)dz$ | $\frac{\bar f ( t )}{2 \pi i t}$ |

# Look up table

Below we list frequently needed Fourier transforms

| | $f(x)$ | $\hat f(t)$ |
| ---: | --- | :--- |
| Dirac | $\delta (x)$ | 1 |
| Constant | 1 | $\delta ( t )$ |
| Cosine | $\cos(2 \pi A x)$ | $\frac{1}{2} (\delta( t - A) + \delta( t + A) )$ |
| Sine | $\sin(2 \pi A x)$ | $\frac{1}{2i} (\delta( t - A) - \delta( t + A) )$ |
| Step function | $\mathbb{1}_{x \geq 0}$ | $\frac{1}{2 \pi i t }$ |
