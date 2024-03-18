---
tags:
  - "#dashboard"
  - "#meta"
---
The dataview below allows me to see a summary of all seminars. See the [[🦅 Core Dashboard]] for other key information.

```dataview
TABLE WITHOUT ID
date as When,
file.link as Talk,
lecturer as By,
location as Where
FROM "🎤 Seminars"
WHERE date
sort date ASC
```
