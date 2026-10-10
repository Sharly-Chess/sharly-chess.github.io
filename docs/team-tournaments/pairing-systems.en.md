---
layout: page
title: Pairing systems
permalink: /team-pairing-systems/
page_id: team-pairing-systems
parent: Team events
nav_order: 100
---

# Team pairing systems

A team tournament uses one of five pairing systems, chosen on the tournament
form. Each pairs **teams** against each other; the result of a match is the
aggregate of its individual boards.

| System | Best for | How it pairs |
|---|---|---|
| **Team Swiss** | Larger fields, few rounds | Pairs teams by standings each round, like an individual Swiss |
| **Team Round-Robin** | Small fields, every team meets every other | A fixed all-play-all schedule generated up front |
| **[Team Knock-out]({% link docs/running-an-event/knockout.en.md %})** | Cups and play-offs where the losing team is out | A seeded bracket; the winning team moves on |
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

Every team meets every other team. The whole schedule, which teams meet in every
round, is set before the tournament starts, so there are no pairing decisions
during the event. The players are still paired round by round, with **Pair**,
so that each team can change its lineup between rounds. Teams cannot be added
once a round is paired.

_Variations:_

- **Berger** — single round-robin from the Berger tables: each pair of teams
  meets once.
- **Double Berger** — double round-robin from the Berger tables: each pair meets
  twice, with colours reversed.
- **Custom schedule** — single round-robin on a schedule you build yourself.
- **Double-round custom schedule** — double round-robin on a schedule you build
  yourself.

A Berger tournament follows the Berger tables; once a round is paired, **Edit
schedule** on the pairings tab lets you change its schedule. A custom
tournament's pairings tab opens directly on its schedule until it is saved;
**Edit schedule** then lets you change it. The schedule is set round by round,
with a list for each team of each match, and is edited and checked as for
individual round-robins (see
[The schedule]({% link docs/running-an-event/pairing-systems.en.md %}#the-schedule)),
except that a round whose matches are paired is locked as a whole: unpair it to
change it. **Pair** then pairs each round from the saved schedule.
When a team joins or leaves a custom tournament before it is paired, its
schedule goes back to its editing, keeping what still fits.

The tournament form offers the **_FIDE_ 6.6 participation rule**: a team that
withdrew or was expelled having completed **less than half** of its matches is
dropped from the final standings and its matches are annulled — they no longer
count in the other teams' scores and tie-breaks (the results stay in the
crosstable).

---

## Team Knock-out

A **cup** format: the teams are seeded into a **bracket** by pairing number,
the losing team of each match is out and the winner moves on, until one team is
left. Each match is decided on **game points**; a level match is decided by the
**advancement tie-breaks** (board count, top board results…) or by the arbiter
with the **Manual** tie-break after a play-off. The number of rounds follows
from the number of teams, and the ranking is by the round reached.

See **[Knock-out]({% link docs/running-an-event/knockout.en.md %})** for the
bracket, the settings (third-place playoff, colour of board one, grouping by
affiliation…) and how matches are decided.

_Variations:_

- **Single elimination** — one match per round, one loss and the team is out.
- **Single elimination — two-game matches** — each pairing of teams is played
  over two matches with colours reversed, decided on aggregate.
- **Double elimination** — a first loss drops the team into a lower bracket; a
  second loss eliminates. The two bracket winners meet in a Grand Final.
- **Double elimination — two-game matches** — double elimination with two-match
  ties.

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
- **A cup or play-off where the losing team is out** → [Team Knock-out]({% link docs/running-an-event/knockout.en.md %}).
- **Just two teams** → Two-game team match.
- **Few teams, few rounds, no byes, everyone plays every round** → Molter.
