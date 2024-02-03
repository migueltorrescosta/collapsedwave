---
title: Home
date: 2023-11-13
---
Hey 👋 Collapsed Wave is a glossary of notes around Machine Learning and Quantum Theory. Finding notes is easy using the Search Bar. If this is your first time, the [[📕 Postulates of Quantum Mechanics]] are a decent starting point.

When on a note, you can
1. Follow the links to see relevant content.
2. Follow the back links to find mentions of a page. Some concepts such as [[📘 Potential energy]] and [[📘 Vector Space#Hilbert Space]]s are mentioned frequently.
3. Use the graph view to navigate see an overview of linked notes without leaving the page
4. Setup [Obsidian](https://obsidian.md) in order to explore these notes in your local laptop.

# 🗝️ Keywords
As I study through the topic, the following keywords became relevant. To understand a keyword we wouldn't need any of the keywords after it, but we'll likely need a few of the keywords listed before. This "rule" might be broken on occasion.

[[📘 Harmonic Oscillator]]

[[📘 Trajectory]], Hooke's law, [[📘 Harmonic Oscillator]], Frequency of Oscillation, [[📘 Kinetic energy]], [[📘 Potential energy]], [[📘 Constant of Motion]] aka Conserved Quantity, [[Implicit Function Theorem]], Integral of Motion, Damped Harmonic Oscillator, [[📘 Conservative force]], [[📘 Gradient]], [[📘 Curl]], [[📗 Stokes theorem]], center of mass, angular momentum, Kepler's 2nd Law, [[📘 Poisson bracket]], [[Diffeomorphism]], [[📘 Flow]], Complete Flow, Sympletic Form, Symplectomorphism, Canonical Transformation, Hamiltonian flow, Hamiltonian generator, Hamiltonian generator of rotations, joint level, [[Riesz Representation Theorem]], Symmetric Operator, Self-adjoint Operator, Unbounded Operator, Bounded Linear Transformation Theorem, [[📘 Quantum Hilbert Space#Position Operator]], [[📘 Quantum Hilbert Space#Momentum Operator]], De Broglie Hypothesis, Superposition, Canonical Commutation Relation, [[📘 Commutator]].

# 📳 RSS Feed

You can follow new notes from this webpage as they are being created by subscribing to our [RSS Feed](https://collapsedwave.com/index.xml).

# ❓ Note icons
All notes have an icon before the title. This provides you with instant feedback about the contents of the note:

| Icon | Type                   |  
|-----:|------------------------|  
|   📕 | Axiom                  |  
|   📘 | Definition             |  
|   📗 | Proposition or Theorem |  
|   📙 | Methodology            |  
|   🗺️ | Miscellaneous          |

# 👩‍🔬 Advanced contributors  
By using this website and sharing it, you are already contributing. If there is missing content that should be added do submit a [Content Request](https://github.com/migueltorrescosta/collapsedwave/issues/new/choose).

You can also write the note you want to see in this webpage by submitting a PR in [GitHub](https://github.com/migueltorrescosta/collapsedwave), following the contribution guidelines written in the `README.md` file. Since this process only requires a review to be accepted, it leads to a much faster addition to these notes.
# 🗒️ Banners

For easier read, we will often include the banners below.

>[!success] Success / Proofs
>Success sessions show proofs. Being able to prove statements is a strong metric of success

>[!info] Info / Notation
>Info sections describe the notation used. They are essential to understand the rest of the note, but can be ignored by the familiar reader. As such they are collapsed by default.

>[!tip] Tips / Intuition
> Tips section provide intuition about the rest of the note

>[!quote]
> Quotes to external webpages

# 🦅 DataView

The section below allows the easy visualisation of all notes in the Obsidian editor. It does not work well on a browser. Viewing the results uses the DataView plugin while using [Obsidian](https://obsidian.md).

## 🗒️ Recent notes


```dataview
TABLE rows.file.link as File SORT file.ctime DESC LIMIT 20 GROUP BY file.cday as Date
```

# ⚒️ Work in progress

There are many notes that can be improved. I keep those labelled by linking to the [[Help me❓]] note.

```dataview
TABLE rows.file.link as File WHERE contains(file.outlinks.file.name, "Help me") GROUP BY file.cday as Date
```
