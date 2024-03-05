---
tags:
  - "#quantum-theory"
---
$\frac{d \rho_t}{dt} = \frac{1}{i \hbar} [ H, \rho_t ]$, for a [[📘 Statistical Operator]] $\rho_t = \ket{\psi_t}\bra{\psi_t}$ evolving according to the [[📕 Postulate 4 - Schrodinger Equation]] $i \hbar \frac{d }{dt} \ket{\psi_t} = H \ket{\psi_t}$.

# Proof

|                                                                                                | Action                                                                                           |
| ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| $\frac{d \rho_t}{dt}$                                                                          | By definition of $\rho_t$                                                                        |
| $\frac{d}{dt}( \ket{\psi}\bra{\psi} )$                                                         | By the product rule                                                                              |
| $\frac{d \ket{\psi}}{dt} \bra{\psi} + \ket{\psi} \frac{d \bra{\psi}}{dt}$                      | By plugging in [[📕 Postulate 4 - Schrodinger Equation]], and it's adjoint to the $\bra{\psi_t}$ |
| $\frac{1}{i \hbar} H \ket{\psi_t} \bra{\psi_t} - \frac{1}{i \hbar} \ket{\psi_t}\bra{\psi_t} H$ | Using the definition of $\rho_t$                                                                 |
| $\frac{1}{i \hbar} H \rho_t - \frac{1}{i \hbar} \rho_t H$                                      | Using the definition of [[📘 Commutator]]                                                        |
| $\frac{1}{i \hbar} [ H, \rho_t ]$                                                              |                                                                                                  |
