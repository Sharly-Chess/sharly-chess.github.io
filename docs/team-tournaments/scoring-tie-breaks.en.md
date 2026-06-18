---
layout: page
title: Scoring & tie-breaks
permalink: /team-scoring/
page_id: team-scoring
parent: Team events
nav_order: 200
---

# Team scoring & tie-breaks

A team's result in a match is built from its individual boards. Two scores can be
kept.

## Game points and match points

- **Game points (GP)** — the sum of the individual board results (1 / ½ / 0).
  Always available, on every system.
- **Match points (MP)** — awarded for the outcome of the whole match. Available on
  **Team Swiss**, **Team Round-Robin** and **Two-game team match**. **Molter**
  scores by **game points only** — it has no match-points side.

The match-point values are configurable per tournament. Defaults are **2 / 1 / 0**
for win / draw / loss. The value of a **pairing-allocated bye** is also
configurable (it defaults to a draw under Team Swiss, a win otherwise).

---

## Primary score

You choose the **primary score** for the standings — match points or game points.
It defaults to **match points** (on systems that have them). The other is the
**secondary score**; it does not break ties on its own — you decide whether to use
it as a tie-break (see below).

---

## Tie-breaks

When teams are level on the primary score, _Sharly Chess_ applies the tie-breaks
you have configured, in the order you set. Two families are available.

**Team-specific tie-breaks:**

- **Match points vs game points** — the secondary score (the one not used as
  primary). Available only on systems that have match points.
- **Extended Sonneborn-Berger** — a Sonneborn-Berger weighted by opponents'
  scores, with four variants depending on whether match points or game points are
  used for your own result and for the weighting.
- **Scores + Schedule Strength (SSSC)** — combines a team's score with the
  strength of its schedule.
- **Extended Direct Encounter** — results between the tied teams.

**Standard tie-breaks** — many of the individual tie-breaks can also be applied to
teams: Buchholz (and its variants), Sonneborn-Berger, Koya, direct encounter,
progressive scores, and others.

{: .note }

> :information_source: Which tie-breaks make sense depends on the system: those
> that reference match points (such as _Match points vs game points_) are offered
> only where match points exist — so not for Molter.
