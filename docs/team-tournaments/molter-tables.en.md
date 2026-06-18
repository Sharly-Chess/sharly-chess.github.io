---
layout: page
title: Molter tables
permalink: /molter-tables/
page_id: molter-tables
parent: Team events
nav_order: 300
---

# Molter tables

The **Molter system** is a pairing method for **team tournaments played over a
small number of rounds**. It takes its name from **Charles Molter**, who
set the idea down in documents dating from 1978. The tables French arbiters have
relied on ever since were drawn up in November 1991 by international arbiter
**Jean-Claude Templeur**, from Molter's originals and under his supervision, and
have been distributed by the _Fédération Française des Échecs_ since.

Those tables are now changing. Wanting _Sharly Chess_ to produce Molter tables on
demand rather than carry a fixed, hand-transcribed set, the team worked with the
_Fédération Française des Échecs_ to develop an algorithm that **generates valid
tables** for any supported
size. Little known outside France until now, the system is open to everyone — and
the tables are generated for you, automatically.

---

## What problem does it solve?

Imagine a small team event — a handful of clubs, four players each, two or three
rounds in an afternoon. You want:

- **everyone playing every round** (nobody sits out),
- **balanced colours** for each player,
- each team to meet a **fair spread of opponents**,
- and you'd rather not run a full Swiss engine or an all-play-all.

Molter answers this with a **fixed table**: a precomputed schedule that says, for
every round, which player faces which — board by board, across the teams.

Unlike **Team Swiss** (which pairs whole teams by standings) or **Round-Robin**
(every team meets every other), Molter pairs **individual boards across teams**
from that fixed table. Each team lines up its players on boards 1…P (board 1 =
strongest), and the table decides who plays whom.

---

## When should you use it?

Molter is the right choice when:

- the **number of teams is small relative to the number of rounds**;
- each team has an **even number of players**;
- and — most often — there is an **odd number of teams**.

That last point is the heart of it: with an odd number of teams a naive schedule
would force someone to sit out each round, and **Molter is designed precisely to
avoid byes**. Every player gets a game every round.

{: .note }

> :information_source: Typical example: a 3-team club cup with 4 players per team
> over 2–3 rounds, or a 5-team phase. If you instead have many teams, or you want
> pairing driven by running standings, use **Team Swiss**; if every team must meet
> every other, use **Round-Robin**.

---

## How it works

- Each team fields **P players on boards 1…P**, board 1 being the strongest.
- For each round the table fixes, **board by board, who faces whom** — always a
  player from a _different_ team, never a team-mate.
- Over the schedule each player meets a **distinct opposing team** every round,
  and **colours balance out** (as many Whites as Blacks).
- With an **odd number of teams**, one player "floats" to the neighbouring board
  so that nobody is left without an opponent — the **floater** — and this duty is
  shared evenly across the teams.

The result is a balanced, complete schedule with **no byes and no pairing
decisions to make** during the event — the table is fixed in advance.

{: .note }

> :information_source: **Prefer an even number of rounds.** Molter schedules are
> built in round-pairs — that is how each player's colours balance out. An odd
> count leaves one leftover round, which is filled by repeating an earlier round
> (recoloured); an even count avoids the repeat and keeps colours evenly balanced.

---

## A small example

Take **3 teams (A, B, C) of 4 players** over 2 rounds. Each round has 6 games,
written _White – Black_ (so `A1` is team A's board-1 player):

| Round 1 | Round 2 |
|:---:|:---:|
| A1 – C1 | B1 – A1 |
| C2 – B1 | C1 – B2 |
| B2 – A2 | A2 – C2 |
| B3 – A3 | C3 – B3 |
| A4 – C3 | A3 – C4 |
| C4 – B4 | B4 – A4 |

A few things to notice:

- **Everyone plays in both rounds** — even with an odd number of teams, nobody
  sits out.
- **No one is paired with a team-mate** — the two teams in a game are always
  different.
- **Colours even out**: A1 has White in round 1 and Black in round 2.
- Because 3 is odd, a game sometimes pairs players from neighbouring boards
  (`C2 – B1`): that's the **floater** at work, and it's what lets everyone have a
  game.

_Sharly Chess_ produces this table for you — you don't transcribe anything.

---

## Using Molter in _Sharly Chess_

1. Create a **team tournament** and choose the **Molter** pairing system.
2. Set the **players per team** and the **number of rounds**.
3. _Sharly Chess_ **generates the table automatically** for the chosen size
   (3–13 teams) — there are no hand‑copied tables to maintain.
4. Generate each round's pairings as usual; you can still adjust a team's
   line‑up between rounds.

{: .note }

> :information_source: The tables are computed **deterministically**: the same
> _(teams, players per team, rounds)_ always produces the same table, reproducible
> anywhere. A federation can also supply its own **official table** for a specific
> size through a rule set — for example the _Coupe Jean‑Claude Loubatière_ of the _Fédération Française des Échecs_.
