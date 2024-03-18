---
tags:
  - "#dashboard"
---
The dataview below allows me to quickly see work that needs to be done. See the [[🦅 Core Dashboard]] for other key information.

# Tasks
```tasks
group by priority
```

```dataview
TABLE WITHOUT ID
tag,
rows.file.link as "Links to the Help Me page",
rows.file.cday as "Last edited"
SORT file.ctime DESC
WHERE contains(file.outlinks.file.name, "Help me")
FLATTEN tags as tag
GROUP BY tag
SORT length(rows) DESC
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

## Manually added tasks

I need to review the concepts below.

- [ ] gamma matrix
- [ ] Moyal bracket
- [ ] Weyl Quantization
- [ ] Rabi oscillations

Also,
- [ ] Remove the collapsed info sections. I thought it was a good idea at 1st, but it is not