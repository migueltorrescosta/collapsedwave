---
tags:
  - "#dashboard"
---
The dataview below allows me to organise note tags. See the [[🦅 Core Dashboard]] for other key information.

# Tag usage counts
It's good to avoid both tag over use, and tag under use.

```dataview
TABLE WITHOUT ID
count as Count,
join(rows.tags, ", ") as Tags
WHERE tags
FLATTEN tags
GROUP BY tags
GROUP BY length(rows.rows) as count
SORT count DESC
```

# File tag counts
There should be no files with no tags

```dataview
TABLE WITHOUT ID
count as Count,
join(rows.file.link, ", ") as Files
GROUP BY length(file.tags) as count
WHERE (count < 2 OR count > 3)
```
