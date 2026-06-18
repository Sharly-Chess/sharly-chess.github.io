---
layout: page
title: Team events
permalink: /team-tournaments/
page_id: team-tournaments
parent: Running an Event
nav_order: 500
---

# Team events

An **event** is either a **team event** or an individual one — not both. In a
team event, players compete in **teams**, teams are paired against each other, and
standings are kept in team scores. This page is an overview; see the child pages
for detail.

---

## Setting up teams

- **Teams** belong to an event and are assigned to a tournament. Each team has a
  name, an ordered **roster**, and an optional **captain** (a playing member or a
  free-typed non-playing name).
- Each team can carry an optional **affiliation** (club, league, …), used by
  **Team Swiss** to avoid pairing teams from the same club or league against each
  other.
- A team's **line-up** for a round is, by default, the first _N_ players of the
  roster (where _N_ is the number of boards); you can override it per round.
- Teams **check in** as a unit before they can be paired.

---

## Pairing systems

Four systems pair teams; pick the one that fits your format:

- **Team Swiss** — pairs whole teams by standings each round; best for larger
  fields. Supports byes and keeping related teams apart.
- **Team Round-Robin** (Berger) — every team meets every other; a fixed schedule
  generated up front.
- **Team Two-Game Match** — a head-to-head between two teams with alternating
  colours.
- **[Molter]({% link docs/team-tournaments/molter-tables.en.md %})** — a fixed-table system for **small team events over
  a few rounds**, where everyone plays every round and nobody sits out. _Sharly
  Chess_ generates the tables automatically. See **[Molter tables]({% link docs/team-tournaments/molter-tables.en.md %})**.

---

## Scoring

Team results aggregate across the boards:

- **Game points (GP)** — the sum of the individual board results. Always
  available.
- **Match points (MP)** — awarded for the match outcome (e.g. 2 / 1 / 0 for
  win / draw / loss). Available on the **team-match systems** (Team Swiss,
  Round-Robin, Two-Game Match) — **not** Molter, which scores by game points
  only.

You choose the **primary score** for the standings. Ties are broken by the
tie-breaks you configure — these may include the secondary score and a mix of
**team** tie-breaks and standard ones (Buchholz, Sonneborn-Berger, direct
encounter, …).

---

## Documents and screens

Team events add **team rankings**, **match sheets**, the **Berger grid**
(round-robin), and on-screen **team check-in**, **team matches** and **team
ranking** displays.

{: .note }

> :information_source: Federation plugins can layer competition-specific rule
> sets, roster rules and documents on top of these systems. See the plugin's own
> page for what it adds.
