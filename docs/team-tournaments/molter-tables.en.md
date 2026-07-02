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

Those tables are now changing. Working closely with the _Fédération Française
des Échecs_, the _Sharly Chess_ team defined the hard criteria and quality
requirements expected of a good modern Molter table. _Sharly Chess_ now provides
validated tables for every supported configuration, so the correct table is
selected for you automatically.

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
- and you want a fixed schedule rather than pairings driven by standings.

Odd team counts are the original hard case: a naive schedule would force someone
to sit out each round, and **Molter is designed precisely to avoid byes**. Even
team counts are supported too; in that case the table keeps players on their own
board number and no floater is needed.

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
- Over the schedule each player meets a **distinct opposing team** each round,
  and **colours remain tightly balanced**.
- With an **odd number of teams**, one player "floats" to the neighbouring board
  so that nobody is left without an opponent — the **floater** — and this duty is
  shared evenly across the teams.

The result is a balanced, complete schedule with **no byes and no pairing
decisions to make** during the event — the table is fixed in advance.

{: .note }

> :information_source: Choose the number of rounds you intend to play. _Sharly
> Chess_ will use the Molter table validated for that exact event length, while
> keeping individual colours and floater duties balanced as closely as possible.

---

## Validity and quality

Every shipped Molter recipe is checked before it is used. A table is rejected if
it breaks the hard rules:

- every player appears **exactly once per round**;
- no player faces a **team-mate**;
- no player faces the **same opposing team twice**;
- player colours stay within bounded drift and never repeat three times in a row;
- floaters, when needed, are only between neighbouring boards and do not repeat
  the same role for the same player.

Among valid tables, _Sharly Chess_ then prefers the best quality it can obtain:

- **opponent spread**: teams should meet as many different teams as possible early
  in the event;
- **floater balance**: ascending and descending floaters should be balanced by
  team;
- **floater spread**: the descending duty should be shared evenly;
- **round-pair balance**: a team should not be asked to float too often within
  the same pair of rounds;
- **per-round spread**: a team's boards should not all be concentrated against
  the same opponent when a better spread is possible;
- **team colours**: exact per-round team colour balance is kept when it does not
  damage the stronger opponent and floater objectives.

The current recipe set is deliberately capped in the app to keep this quality
high.

{: .note }

> :information_source: Behind the scenes, the current tables come from a
> reproducible research process that tries several construction and optimisation
> methods, then keeps the best validated results found. This is a practical
> approach, not a claim that the final mathematical construction has been
> discovered. If you are a combinatorics or graph-theory specialist and want to
> help improve the Molter algorithm further, please contact the _Sharly Chess_
> team.

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
3. _Sharly Chess_ **selects the table automatically** for the chosen size
   (currently 3–20 teams, with an even number of players per team up to 12).
4. Generate each round's pairings as usual; you can still adjust a team's
   line‑up between rounds.

{: .note }

> :information_source: The tables are **deterministic**: the same
> _(teams, players per team, rounds)_ always produces the same table, reproducible
> anywhere. A federation can also supply its own **official table** for a specific
> size through a rule set — for example the _Coupe Jean‑Claude Loubatière_ of the
> _Fédération Française des Échecs_. If a shape is outside the validated recipe
> range, _Sharly Chess_ does not offer Molter for that tournament.
