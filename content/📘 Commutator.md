---
date: 2022-10-14
tags:
  - definition
  - quantum-theory
---
$[A, B] := AB - BA$ is defined to be the commutator between $A$ and $B$.

# Properties
| Equation | Property |
| ---: | ---- |
| $[A, B] = - [B, A]$ | anti-commutativity |
| $[xA + yB, C] = x[A, C] + y[B,C]$ | Bilinearity |
| $[A, BC] = [A,B]C + B[A,C]$ | Distributivity |
| $[A, [B,C]] + [B, [C,A]] + [C, [A,B]] = 0$ | [[Jacobi identity]] |
>[!info]-
> $x,y \in \mathbb{C}$

## The commutator is [[anti-commutative]]
i.e. $[A, B] = - [B, A]$

>[!success] Proof
> $[A, B] = AB-BA = - (BA-AB) = - [B, A]$

## The commutator is bilinear

i.e. $[xA + yB, C] = x[A, C] + y[B,C]$
> [!success] Proof
> 
> | Equation | Reasoning |
> | --- | --- |
> |$[xA + yB, C]$ | Applying the definition of [[📘 Commutator]] |
> | $(xA+yB)C - C(xA+yB)$ | Expanding out the multiplications |
> | $xAC + yBC - xCA - yCB$ | Rearranging the algebraic expression |
> | $x(AC-CA) + y(BC-CB)$ | Applying the definition of [[📘 Commutator]] |
> | $x[A,C] + y[B,C]$ | |

## Multiplication is distributive over the commutation operator
i.e. $[A, BC] = [A,B]C + B[A,C]$

> [!success] Proof
> 
> | Equation | Reasoning |
> | --- | --- |
> | $[A,BC]$ | Applying the definition of [[📘 Commutator]] |
> | $ABC - BCA$ | Adding "zero" |
> | $ABC - BAC + BAC - BCA$ | Rearranging the expression |
> | $(AB - BA)C + B(AC-CA)$ | Applying the definition of [[📘 Commutator]] |
> | $[A,B]C + B[A,C]$ | |

## The commutator satisfies the [[Jacobi identity]]
i.e. $[A, [B,C]] + [B, [C,A]] + [C, [A,B]] = 0$

> [!success] Proof
> 
> | Equation                                                               | Reasoning |
> |------------------------------------------------------------------------| --- |
> | $[A, [B,C]] + [B, [C,A]] + [C, [A,B]]$                                 | Applying the definition of [[📘 Commutator]] |
> | $[A, BC-CB] + [B,CA-AC] + [C, AB-BA]$                                  | Again |
> | $A(BC-CB) - (BC-CB)A + B(CA-AC) - (CA-AC)B + C(AB-BA) - (AB-BA)C$      | Expanding the multiplications |
> | $ABC - ACB - BCA +CBA + BCA - BAC - CAB + ACB + CAB - CBA - ABC + BAC$ | Cancelling the repeated terms |
> | $0$                                                                    | |

