---
layout: page
title: Pairing systems
permalink: /individual-pairing-systems/
page_id: individual-pairing-systems
parent: Individual events
nav_order: 450
---

# Individual pairing systems

An individual tournament uses one of four pairing systems, chosen on the
tournament form (see [Managing Tournaments]({% link docs/running-an-event/managing-tournaments.en.md %})).
Each pairs **players** against each other.

| System | Best for | How it pairs |
|---|---|---|
| **Swiss** | Larger fields, fewer rounds than players | Pairs players by standings each round (_FIDE_ Dutch system) |
| **Round-Robin** | Small fields where everyone should meet everyone | A fixed all-play-all schedule generated up front |
| **[Knock-out]({% link docs/running-an-event/knockout.en.md %})** | Cups and play-offs where the loser is out | A seeded bracket; the winner of each match moves on |
| **[Keizer]({% link docs/running-an-event/keizer.en.md %})** | Long-running club events with changing attendance | A ranking-value system that pairs whoever is present each round |

---

## Swiss

Players are paired round by round according to their current standings, so that
players on similar scores meet. It handles any number of players and is the usual
choice when there are more players than rounds.

- Pairings use the **_FIDE_ Dutch system**, with a built-in consistency checker.
- With an **odd number of players**, one player receives a **pairing-allocated
  bye** (PAB) each round. Zero-, half- and full-point byes can also be assigned by
  hand.
- **Prohibited pairings** (same club, federation or team) can be kept apart, as
  hard rules or as soft rules that relax from the bottom of the field.

{: .warning }

> :warning: **Prohibited pairings** must **not** be used for official _FIDE_
> events — they override the _FIDE_ Dutch pairing rules. Reserve them for club and
> festival formats.

_Variations:_

- **Standard swiss system** — pairs purely on the standings.
- Six **accelerated** variations add fictional points early on so the leaders
  meet sooner. See **[Accelerations]({% link docs/running-an-event/accelerations.en.md %})**.

---

## Round-Robin

Every player meets every other player. The full schedule is generated up front
(the Berger tables), so there are no pairing decisions during the event, and
there are **no byes** — an odd field is handled by the table itself. Because the
schedule is fixed, players cannot be added once pairings exist.

_Variations:_

- **Berger** — single round-robin: each pair of players meets once.
- **Double-round Berger** — double round-robin: each pair meets twice, with the
  colours reversed.

Because every round is known in advance, moving on to the next round is an
explicit step: when you navigate past the current round, _Sharly Chess_ asks
whether to **end the round** (making the next one the current round) or just
take a look at the next round, and warns you if boards are still without a
result.

The tournament form offers the **_FIDE_ 6.6 participation rule** for
round-robins: a player who withdrew or was expelled having completed **less
than half** of their games is dropped from the final standings and their games
are annulled — they no longer count in the opponents' scores and tie-breaks
(the results stay in the crosstable).

---

## Knock-out

A **cup** format: the players are seeded into a **bracket**, the loser of each
match is out and the winner moves on, until one player is left. The number of
rounds follows from the size of the field, drawn games are decided by
**advancement tie-breaks** (or by the arbiter after a play-off), and the
ranking is by the round reached.

See **[Knock-out]({% link docs/running-an-event/knockout.en.md %})** for the
bracket, the settings and how matches are decided.

_Variations:_

- **Single elimination** — one game per match, one loss and you are out.
- **Single elimination — two-game matches** — each match over two games with
  colours reversed, decided on aggregate.
- **Double elimination** — a first loss drops the player into a lower bracket;
  a second loss eliminates. The two bracket winners meet in a Grand Final.
- **Double elimination — two-game matches** — double elimination with two-game
  matches.

---

## Keizer

A **ranking-value** system built for **long-running club tournaments** — a weekly
evening championship over many rounds, where not everyone plays every week. Rather
than count game points, each player carries a value derived from their current
standing, and pairs the players who are **present** for the round.

See **[Keizer]({% link docs/running-an-event/keizer.en.md %})** for how it scores
and its settings.

_Variation:_ Keizer.

---

## Which one should I use?

- **More players than rounds** → Swiss (add an [acceleration]({% link docs/running-an-event/accelerations.en.md %}) for a large field over few rounds).
- **A small field where everyone should meet everyone** → Round-Robin.
- **A cup or play-off where the loser is out** → [Knock-out]({% link docs/running-an-event/knockout.en.md %}).
- **A club championship over many evenings with changing attendance** → [Keizer]({% link docs/running-an-event/keizer.en.md %}).
