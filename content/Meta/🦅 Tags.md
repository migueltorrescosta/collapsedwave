---
tags:
  - "#dashboard"
---

```dataview
TABLE WITHOUT ID
tags + " (" + length(rows.rows) + ")" as "All Tags"
WHERE tags
FLATTEN tags
GROUP BY tags
SORT length(rows) DESC
```

