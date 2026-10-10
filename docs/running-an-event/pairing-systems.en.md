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
| **Round-Robin** | Small fields where everyone should meet everyone | A fixed all-play-all schedule, from the Berger tables or your own |
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

Every player meets every other player. The whole schedule, who meets whom and
with which colours in every round, is set before the tournament starts, so there
are no pairing decisions during the event. There are **no byes**: with an odd
number of players, one player rests in each round.

_Variations:_

- **Berger** — single round-robin from the Berger tables: each pair of players
  meets once.
- **Double-round Berger** — double round-robin from the Berger tables: each pair
  meets twice, with the colours reversed.
- **Custom schedule** — single round-robin on a schedule you build yourself.
- **Double-round custom schedule** — double round-robin on a schedule you build
  yourself.

### The schedule

A Berger tournament is paired with **Pair tournament**, which pairs every round
from the Berger tables, following the Berger numbers set in the pairing
settings. Until the first result is entered, **Unpair tournament** removes the
pairings. Once the tournament is paired, **Edit schedule** lets you change the
schedule.

A custom tournament has nothing to be paired from until its schedule is set, so
its pairings tab opens directly on the schedule, empty. Saving the schedule pairs
every round; afterwards, **Edit schedule** lets you change it.

While the schedule is edited, the tab shows the selected round with one line per
table, and a list for each seat; with an odd number of players, a last line
names the player who rests. Each list offers first the players who have no seat
yet in the round, then, under **Paired**, those who have one: choosing one of
them moves them and leaves their previous seat empty. The arrow button in the
middle of a line swaps the colours. Move from round to round with the usual
round controls. On an empty schedule, **Fill from the Berger tables** gives you a
starting point; otherwise **Clear**, once confirmed, empties every seat whose
game has not been played.

A banner lists every rule the schedule breaks, each with a link to the round
concerned:

- every seat of every round is filled, and no player sits twice in a round;
- each pair of players meets exactly once (twice in a double round-robin), and
  with an odd number of players, each player rests once (twice);
- no player has the same colour three rounds in a row, and in a double
  round-robin, the second game of each pair reverses the colours of the first.

The colour rule does not apply to the Berger tables themselves: without the last
two rounds of the first cycle reversed, a double Berger schedule gives some
players the same colour three rounds in a row.

**Save the schedule** is only available once the schedule keeps every rule.
Saving it pairs every round again, keeping the games already played, which are
shown locked and cannot be moved. **Cancel editing** leaves the schedule as it
was. When the schedule of a Berger tournament no longer follows the Berger
tables, saving it turns the tournament into a custom one.

Once results are entered, a round may have been played otherwise than planned,
for example when players sat at the wrong boards. **Unlock the games played**
then lets you change the games already played, to set them as they were really
played: their results are kept when the two players' results agree, and you are
told which rounds need their results entered again. Should the schedule then
break the rules, **Save anyway** saves it all the same, after a confirmation.
The log and the TRF then list each rule the saved schedule breaks, for as long
as it breaks it: saving a schedule that keeps the rules again clears them. A
seat left empty, or a player seated twice in a round, can never be saved.

Players can join a Berger tournament until it is paired; they take the next
Berger numbers, and the number of rounds follows the field.

A custom tournament takes players until its first result is entered. Its
pairings are then removed and its schedule goes back to its editing, the number
of rounds following the field. A player who joins an odd field is already
seated against the player who was due to rest in each round; otherwise every
game that still fits is kept, and only the new seats and rounds are left to
fill.

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
