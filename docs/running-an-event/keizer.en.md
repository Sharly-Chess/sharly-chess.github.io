---
layout: page
title: Keizer
permalink: /keizer/
page_id: keizer
parent: Individual events
nav_order: 470
---

# Keizer

**Keizer** is a pairing system for individual tournaments, designed for
**long-running club events** — a weekly evening championship over many rounds
where not everyone plays every week. It pairs the players who are **present** for
each round, tolerates absences, and keeps players facing opponents of similar
strength throughout.

---

## How it scores

Unlike a Swiss, a Keizer score is **not** a running count of game points. Each
player carries a **ranking value** derived from their current position in the
standings:

- Before any games, players are ranked by rating and given a value — the top
  player about three times the lowest, one less per rank.
- A **win** is worth the **opponent's** current value; a **draw**, half of it.
- Each player's score also includes **one instance of their own current value**
  (the own-value bonus). Because it follows the standings, a player who slips
  carries a smaller one — it is not a lasting rating head start.

Every value follows the standings, so **all past rounds are re-scored** after each
round: a win over a player who later collapses is worth less than a win over one
who climbs. This is what keeps the ranking a good estimate of strength, and the
next round is paired from that ranking, so players meet opponents of similar
strength.

---

## Presence and absences

Keizer pairs only the players marked **present** for the round (via
[check-in]({% link docs/running-an-event/check-in-process.en.md %}) when it is in
use). A player who is simply absent scores nothing that round. A player given an
**excused absence** (a requested bye) earns a configurable fraction of their own
value, so an occasional missed evening does not wreck their standing.

Late entries and withdrawals need no special handling — a player only scores the
rounds they actually played.

---

## Settings

| Setting | What it does |
|---|---|
| **Include own ranking value in score** | Adds the own-value bonus (standard Keizer). On keeps the standings, and the pairings, stable; off scores purely from results. Default **on**. |
| **Rounding of the Keizer points** | Whether fractional totals are kept or rounded — **Keep fractions**, **Round to a half point**, or **Round to a full point**. Default **Keep fractions**. |
| **Rounds before a rematch** | How many rounds must pass before two players may be paired again. Default is the full length of the tournament (avoid rematches until forced). |
| **Special points for an absence** | The share of a player's own value earned for an excused absence, as a percentage. Default **33%** (a third). |

{: .note }

> :information_source: Because every score is recomputed from the whole field on
> each round, Keizer settings can be changed at any time and the standings simply
> re-derive.
