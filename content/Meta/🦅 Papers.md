---
tags:
  - "#dashboard"
  - "#meta"
---
See the [[🦅 Core Dashboard]] for other key information.

```dataview
TABLE WITHOUT ID
tag as Tag,
map(rows, (it) => it.file.link + ": " + it.file.frontmatter.summary) as Files
FROM "🗒️ Papers"
WHERE !contains(file.name, "🦅")
FLATTEN tags as tag
GROUP BY tag
SORT file.mtime DESC
```
