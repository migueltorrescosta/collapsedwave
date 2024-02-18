---
tags:
  - "#algebra"
---

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

