---
layout: page
title: Pairing systems
permalink: /team-pairing-systems/
page_id: team-pairing-systems
parent: Team events
nav_order: 100
---

# Team pairing systems

A team tournament uses one of four pairing systems, chosen on the tournament
form. Each pairs **teams** against each other; the result of a match is the
aggregate of its individual boards.

| System | Best for | How it pairs |
|---|---|---|
| **Team Swiss** | Larger fields, few rounds | Pairs teams by standings each round, like an individual Swiss |
| **Team Round-Robin** | Small fields, every team meets every other | A fixed all-play-all schedule generated up front |
| **Two-game team match** | A single head-to-head between two teams | Two games with the colours reversed |
| **[Molter]({% link docs/team-tournaments/molter-tables.en.md %})** | Small fields over a few rounds, no byes | A fixed cross-team board table |

---

## Team Swiss

Teams are paired round by round according to their current standings, the same
way individual Swiss works. It handles any number of teams and is the usual
choice when there are more teams than rounds.

- With an **odd number of teams**, one team receives a **pairing-allocated bye**
  (PAB) each round.
- It is the only team system that honours **affiliation protection**: teams that
  share an affiliation (club, league, …) are kept apart where possible.

_Variation:_ Standard.

---

## Team Round-Robin

Every team meets every other team. The full schedule is generated up front (the
Berger tables), so there are no pairing decisions during the event. Because the
schedule is fixed, teams cannot be added once pairings exist.

_Variations:_

- **Berger** — single round-robin: each pair of teams meets once.
- **Double Berger** — double round-robin: each pair meets twice, with colours
  reversed.

---

## Two-game team match

A single match between **two teams**, played as two games with the colours
reversed between them. Use it for a one-off head-to-head (a friendly, a play-off
leg, …) rather than a multi-team event.

_Variation:_ Standard.

---

## Molter

A **fixed-table** system for **small team events over a few rounds** where you
want everyone playing every round and nobody sitting out. Instead of pairing whole
teams, Molter pairs **individual boards across teams** from a precomputed table.
_Sharly Chess_ generates the table automatically.

See **[Molter tables]({% link docs/team-tournaments/molter-tables.en.md %})** for
when and why to use it.

_Variation:_ Standard Molter.

---

## Which one should I use?

- **Many teams, a handful of rounds** → Team Swiss.
- **Few teams and you want everyone to meet everyone** → Team Round-Robin.
- **Just two teams** → Two-game team match.
- **Few teams, few rounds, no byes, everyone plays every round** → Molter.
