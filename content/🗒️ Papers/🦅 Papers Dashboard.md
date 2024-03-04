---
tags:
  - "#dashboard"
---
```dataview
TABLE WITHOUT ID
file.link as Papers,
file.frontmatter.url as "ArXiV URL"
FROM "🗒️ Papers"
SORT file.mtime DESC
```
