---
layout: page
title: Championships
permalink: /championships/
page_id: championship
nav_order: 360
---

# Championships

## Overview

A **Championship** is an aggregated ranking built from tournaments that belong to
several **independent events** — a season-long circuit, a grand prix, a schools
league. It owns no tournaments of its own: it **references** tournaments from
existing events and reads their results **live**, so the standings always reflect
the current state of every source.

Each championship is either **individual** or **team**. The type is chosen when
you create it and cannot be changed afterwards; every source tournament must match
it (an individual championship only accepts individual tournaments, a team
championship only team tournaments).

---

## The four tabs

A championship is organised into four tabs:

- **Configuration** — the name, the age-category reference date (individual) or
  team score basis (team), the ordered
  [scoring &amp; tie-break rules]({% link docs/championship/scoring-tie-breaks.en.md %}),
  and the ranking categories.
- **Sources** — the tournaments the ranking is built from, and their coefficients.
- **Players** / **Teams** — the reconciled competitors, matched across the sources.
- **Rankings** — the standings: the general ranking plus any category rankings.

---

## Sources

A **source** is one tournament, identified by its event and its tournament within
that event. Add sources on the **Sources** tab with **Add a tournament**: pick an
event, then one of its tournaments. Only tournaments of the championship's
competitor type are offered.

Each source has a **coefficient** (default **1**) that can weight that stage — so a
final can be made to count double, for example. Whether it actually applies is
decided **per scoring rule**: a rule may be set to multiply its value by the
coefficient, and only value-type rules (points, tie-break values) can be weighted (see
[scoring &amp; tie-break rules]({% link docs/championship/scoring-tie-breaks.en.md %})).

{: .note }
> :information_source: Sources keep a readable label even if the event or
> tournament is later removed or renamed. A source whose event or tournament can no
> longer be found — or whose competitor type no longer matches — is shown as
> **broken** and is left out of the ranking until you fix or remove it.

If you archive an event or delete a tournament that a championship uses, the
application warns you which championships will be affected first. The source
event and tournament are never deleted by removing a source from a championship.

---

## Competitors

On the **Players** or **Teams** tab, _Sharly Chess_ **reconciles** the competitors
across all sources: the same player or team appearing in several tournaments is
matched into a single line, by identity (FIDE ID, name and date of birth, or a
federation key). This is recomputed every time, because the sources are read live.

When the automatic match misses someone — a typo, a missing FIDE ID — you can
correct it by hand:

- **Merge** two or more competitors that are really the same person or team.
- **Unmerge** to undo a merge.

---

## Rankings and categories

The **General ranking** includes every competitor and is always available. On top
of it you can create **categories**: filtered rankings that show only the
competitors matching a set of **criteria** (age, gender, rating, and any criteria
your federation plugins add — the same vocabulary as prize categories). A
competitor must match **every** criterion in a category to appear in it.

For an individual championship, an **age-category reference date** fixes the age
each player is ranked at for the whole championship. It defaults to 1&nbsp;January
of the year of the earliest source tournament.

The standings on the **Rankings** tab show, for each competitor, the number of
counted stages with an information button that breaks the score down stage by
stage. How the score is built — and how ties are resolved — is set by the
[scoring &amp; tie-break rules]({% link docs/championship/scoring-tie-breaks.en.md %}).

For a team championship, the **team score basis** on the Configuration tab decides
which team score the ranking reads: each source tournament's own primary score, or
match points, or game points.

---

## Printing

The general ranking and any category rankings can be printed or exported from the
championship, the same way tournament rankings are.
