---
tags:
  - "#quantum-theory"
---
i.e. $\braket{X^2}_\psi \geq \braket{X}_\psi^2$ , where $\braket{X}_\psi$ is the [[📘 Expectation]] of a measurement.

# Proof

We will expand the positive scalar $\braket{ ( \braket{X}_\psi - X )^2 }_\psi$ , from which the original statement follows.

|                                                                                                  | Action                                                                        |
| ------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------- |
| $\braket{ ( \braket{X}_\psi - X )^2 }_\psi$                                                      | Expand the square                                                             |
| $\braket{ \braket{X}_\psi^2 - 2 X \braket{X}_\psi + X^2 }_\psi$                                  | Applying the linearity of expectations                                        |
| $\braket{ \braket{X}_\psi^2 }_\psi - 2 \braket { X \braket{X}_\psi }_\psi + \braket{ X^2 }_\psi$ | Since the expectation operator is a projection we can simplify the first term |
| $\braket{X}_\psi^2 - 2 \braket { X \braket{X}_\psi }_\psi + \braket{ X^2 }_\psi$                 | Since $\braket{X}_\psi$ is a scalar we can extract it in the middle term      |
| $\braket{X}_\psi^2 - 2 \braket{X}_\psi^2 + \braket{ X^2 }_\psi$                                  | Cancelling common terms                                                       |
| $\braket{X}_\psi^2 - \braket{X}_\psi^2$                                                          |                                                                               |
Since $0 \geq \braket{ ( \braket{X}_\psi - X )^2 }_\psi = \braket{X}_\psi^2 - \braket{X}_\psi^2$, we get the desired result.