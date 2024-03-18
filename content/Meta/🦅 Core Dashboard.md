---
tags:
  - "#dashboard"
  - "#meta"
---
[Dataview](https://blacksmithgu.github.io/obsidian-dataview/) is an [Obsidian](https://obsidian.md/) Plugin that summarises my notes in a tabular form. This is very valuable locally, however it does not render nicely on the website.

```dataview
TABLE WITHOUT ID
file.link as Dashboards
WHERE contains(file.name, "🦅")
```

# The tables below should be empty

## Tasks
```tasks

```

## WIP
Pages that link to [[Help me ❓]]

```dataview
TABLE WITHOUT ID
file.link as "Work in Progress",
file.cday as "Last edited"
SORT file.ctime DESC
WHERE contains(file.outlinks.file.name, "Help me")
```

## No links
The tables below are disconnected from the rest of the graph. Tags are ignored in this view

```dataview
TABLE WITHOUT ID
file.link as "No links present"
WHERE !file.outlinks and !file.inlinks
```
## Sub-links
I am avoiding having concepts nested in a single note. The view below lists mentions to sub-links.

```dataview
TABLE without id 
out AS "Sublinks",
file.link as "Origin"
FLATTEN file.outlinks as out
WHERE contains(meta(out).display, " > ")
SORT length(rows.file.link) DESC
LIMIT 10
```

## I still need to add notes on the topics below

I need to review the concepts below.

- [ ] Heisenberg picture
- [ ] Schrodinger picture
- [ ] Fermi Golden Rule
- [ ] Dense coding,
- [ ] Spin
- [ ] Stern-Gerlach Experiment
- [ ] gamma matrix
- [ ] Lie Group
- [ ] Moyal bracket
- [ ] Weyl Quantization
- [ ] Rabi oscillations
- [ ] Infinitesimal Generator ( of a one parameter unitary group )

Also,
- [ ] Remove the collapsed info sections. I thought it was a good idea at 1st, but it is not