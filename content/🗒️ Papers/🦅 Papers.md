---
tags:
  - "#dashboard"
---
See the [[🦅 Core Dashboard]] for other key information.

```dataview
TABLE WITHOUT ID
"[source](" + file.frontmatter.url + ") " + file.link + ": " + file.frontmatter.summary as Paper
FROM "🗒️ Papers"
WHERE !contains(file.name, "🦅")
SORT file.mtime DESC
```
