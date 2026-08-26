---
layout: page
title: Scoring & tie-breaks
permalink: /championship-scoring/
page_id: championship-scoring
parent: Championships
nav_order: 100
---

# Championship scoring & tie-breaks

A championship's standings are built from an **ordered list of rules**. Ranking is
done by **successive refinement**: everyone starts tied, the first rule sorts them,
and each later rule only ever breaks the ties the earlier rules left. The first
rule is therefore the **main score**; the rest are tie-breaks.

Because rules are applied in order, you can mix a running total, a count and a
head-to-head rule in whatever order your regulations require — for example *total
points → number of wins → direct encounter*.

Configure the rules on the **Configuration** tab, under **Scoring and tie-break
rules**. Add, edit, delete and drag them into order.

---

## Best stages

Most rules can be scoped to a competitor's **best N stages** instead of all of
them (leave the field empty to count every stage). This is how "best 5 results of
the season" circuits work.

The best stages are chosen by the **configured rule chain itself**: a competitor's
stages are ordered the same way the ranking orders competitors, and the top N are
kept. So a *total points, best 5* rule keeps the five highest-scoring stages, while
an *average ranking, best 5* rule keeps the five best-placed ones.

---

## Stage coefficient

Value-type rules (points and tie-break values) can be weighted by each source's
[coefficient]({% link docs/championship/index.en.md %}). The **Apply tournament's
coefficient** switch turns this on or off per rule. Ordinal and count rules (a
finishing position, a number of wins) are never weighted — a place or a count is
not multiplied.

---

## Rule types

**Score-based**

- **Total points** — the sum of the points scored across the counted stages.
- **Average points** — the mean of the points over the counted stages.
- **Positional score** — each stage rescaled so the winner scores 1 and the
  last-placed 0, then summed. Evens out stages with different field sizes.
- **Position-based points** — fixed points per finishing position (e.g. 25 for
  first, 18 for second …), summed. Positions beyond the table score nothing; the
  table is editable.

**Position and count**

- **Average ranking** — the mean finishing position over the counted stages;
  lower is better.
- **Number of placings** — how many times the competitor finished in a chosen
  position (e.g. number of first places).
- **Number of wins** — total games won across the counted stages.

**Aggregated tie-break**

- **Sum of a tie-break** / **Average of a tie-break** — the sum, or the mean, of
  **any** tie-break (Buchholz, Sonneborn-Berger, and so on) across the counted
  stages. The value is **computed from each stage's games**, so any tie-break can
  be aggregated — the source events need not have been configured with it. Pick
  the tie-break and its options exactly as you would on a tournament; the picker
  lists those already used in the source tournaments first, then every other
  compatible tie-break. Stages that cannot provide the tie-break are skipped.

**Head-to-head and manual**

- **Direct encounter** — the results of the games the tied competitors played
  against each other. It uses **all** their meetings across every stage, and is
  skipped when they never met. Repeated meetings are averaged.
- **Manual tie-break** — lets you order the still-tied competitors **by hand**, by
  dragging them in the ranking. It only moves competitors that earlier rules left
  tied.

---

## How ties are shown

On the **Rankings** tab, each rule is a column. A value is shown in bold when that
rule actually separated the competitor from the others, and greyed when an earlier
rule had already resolved the tie. The stage breakdown (the information button by
the stage count) lists each counted stage with its value under every score and
tie-break rule in the chain.
