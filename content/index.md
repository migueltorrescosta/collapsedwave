---
title: Home
date: 2023-11-13
---
Hey 👋 Collapsed Wave is a glossary of notes around Machine Learning and Quantum Theory. This is meant to make easy to look up any definitions and clarify concepts, as finding notes is easy using the Search Bar. This is not meant as to be a good way to learn these materials, if you're seeing them for the first time.
1. To learn these topics, I would recommend books such as [[📖 Quantum Theory for Mathematicians]]
2. To explore notes, the [[📕 Postulate 4 - Schrodinger Equation]] is as good as any to get started with.

This is a work in progress. You can see the ( many ) parts I still need to improve aggregated on a single note: [[Help me ❓]]

# 📳 RSS Feed

You can get notified of new notes as they are created by subscribing to CollapedWave's [RSS Feed](https://collapsedwave.com/index.xml).
# ❓ Note icons
All notes (should) have an icon before the title. This provides you with instant feedback about the contents of the note:

| Icon | Type                   |
| ---: | ---------------------- |
|   📕 | Axiom                  |
|   📘 | Definition             |
|   📗 | Proposition or Theorem |
|   📙 | Methodology            |
|  🗒️ | Papers                 |
|   🎓 | Classes                |
|  🗺️ | Miscellaneous          |

# 👩‍🔬 Advanced contributors  
By using this website and sharing it, you are already contributing. If there is missing content that should be added do submit a [Content Request](https://github.com/migueltorrescosta/collapsedwave/issues/new/choose).

You can also write the note you want to see in this webpage by submitting a PR in [GitHub](https://github.com/migueltorrescosta/collapsedwave), following the contribution guidelines written in the `README.md` file. Since this process only requires a review to be accepted, it leads to a much faster addition to these notes.

# 🖩 Notation choices

There is variability in the way authors write their mathematics and physics. In this webpage we've made some choices:

## Hat operators
Hat over operators, such as $\hat \rho$ and $\hat U_t^\dagger$, are often skipped in favour of $\rho$ and $U_t^\dagger$. I try to make operators clear from context, and writing the hat on top of every symbol is time consuming.

## Super / sub scripts
Indices are subscript, powers are superscripts.

It takes as much work to write $K_\alpha$ as it does $K^\alpha$. This standardisation allows me to immediately know that $K_\alpha$ is the $K$ operator indexed by $\alpha$, whereas $K^\alpha$ is $K$ to the power of $\alpha$. If we have multiple scripts, we can keep them ordered, for example as $K_{i, i', j, j'}$.

## Integrands
We always use $dt$ as one of the delimiters of the integrand, i.e. we always write $\int t^2dt$ and never $\int dt t^2$. This choice clarifies what the integrand is, for instance, $\int_0^t\rho ds$ is the integral with integrand $\rho(s)$, even though we decided to omit the parameterization of $\rho$ as a function of $s$.

## "Identity" function
I often use the function $\mathbb{I}_A =  \begin{cases}1 & \text{ if } x \in A \\0 & \text{ if } x \notin A \end{cases}$ in unusual places. This notation is very powerful as it is easy to memorise, and it replaces a lot of custom functions, such as: 

- Heaviside step function: $\theta(x) = \mathbb{I}_{x \geq 0}$
- Kronecker delta: $\delta_{ij} = \mathbb{I}_{ i = j }$ 
- Step function: $\mathbb{I}_{x \in [0,1]}$ 

It also come very handy as a way of preventing the branching of equations: I can write any equation $$f(x) = \begin{cases}g(x) & \text{ if } x \in B \\h(x) & \text{ if } x \in C \end{cases}$$ ( with $B \cap C = \varnothing$ ) as $f(x) = g(x)\mathbb{I}_{x \in B} + h(x)\mathbb{I}_{x \in C}$. I find the latter easier to reason with during algebraic manipulations.

# 🦅 Dataview Summary

I keep [[🦅 Core Dashboard]] to quickly see work in progress, broken tags and other useful information at a glance.