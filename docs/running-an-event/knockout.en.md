---
layout: page
title: Knock-out
permalink: /knockout/
page_id: knockout
parent: Individual events
nav_order: 480
---

# Knock-out

The **knock-out** (or cup) system pairs the field in a **bracket**: the loser of
each match is out, the winner moves on to the next round, and the last one
standing wins the tournament. It is available for both **individual** and
**team** events (as **Team Knock-out**), and comes in four variations:

| Variation | How a match is played | Eliminated after |
|---|---|---|
| **Single elimination** | One game | One loss |
| **Single elimination — two-game matches** | Two games, colours reversed | One lost match |
| **Double elimination** | One game | Two losses |
| **Double elimination — two-game matches** | Two games, colours reversed | Two lost matches |

The knock-out is chosen as the **pairing system** on the tournament form (see
[Managing Tournaments]({% link docs/running-an-event/managing-tournaments.en.md %})),
and the variation as the **pairing variation**.

---

## How the bracket is drawn

- **Seeding** — players are seeded by their **starting rank** (rating, then
  title…); teams by their **pairing number**. The two strongest seeds are
  placed in opposite halves of the bracket, so they can only meet in the final.
- **Byes** — when the number of participants is not a power of two (8, 16,
  32…), the bracket is padded up to the next one and the **top seeds skip round
  one**. There is no other kind of bye: the arbiter cannot assign zero- or
  half-point byes in a knock-out.
- **Number of rounds** — set automatically from the size of the field (four
  rounds for 9 to 16 players, five for 17 to 32, and so on; twice as many with
  two-game matches). The **Rounds** field of the tournament form is filled in
  for you and cannot be edited.
- Rounds are paired **one at a time** with the **Pair** button, once every match
  of the previous round has been decided.

{: .warning }
> :warning: Once round one is paired, the bracket is fixed: **no player (or
> team) can be added**, and the pairing settings below can no longer be
> changed.

---

## Deciding a match

A **decisive game** sends its winner through. When a game is **drawn** (or a
two-game match ends level on aggregate, or a team match ends level on game
points), the match is decided by the **advancement tie-breaks**.

In a knock-out, the tie-breaks configured for the tournament are **not** used
to rank the standings (a knock-out is ranked by the round reached, see below):
they decide **who advances from a level match**, in the order you list them.
Only tie-breaks that can separate two participants who reached the same stage
are offered — for instance the **rating**, the **pairing number**, the number
of **games won** (or won with Black), the **tournament performance rating**,
and, for teams, the **board count**, **top board results** or **bottom board
elimination**.

The special **Manual** tie-break lets you decide the match yourself, typically
after a **play-off** (Armageddon, blitz games…) played over the board: the
pairing row of a level match then shows a **Mark as winner** button next to
each side.

{: .note }
> :information_source: If the tie-breaks you configured cannot decide a level
> match, _Sharly Chess_ refuses to pair the next round and tells you so. Add
> the **Manual** tie-break — or other advancement tie-breaks — to the
> tournament's tie-break settings. Anything listed **after** Manual can never
> apply, since a play-off settles the match outright.

The pairing row of a level match shows the value of each advancement tie-break
for both sides, and which one decided the match.

---

## Variations

### Single elimination

The classic cup: one game per match, one loss and you are out.

### Single elimination — two-game matches

Each match is played over **two games**, with the colours reversed: the stronger
seed has White in the first game and Black in the second. The match is decided
on the **aggregate** of the two games; a level aggregate is decided by the
advancement tie-breaks, as above. The tournament has twice as many rounds.

### Double elimination

Two brackets run side by side:

- The **upper bracket** is a single elimination. A participant who loses there
  is not out: they drop into the lower bracket.
- The **lower bracket** gathers the upper-bracket losers. A loss there is the
  **second loss**, which eliminates.
- The **Grand Final** opposes the champion of each bracket.

With the **Grand final reset** option, the upper-bracket champion — who has
not lost yet — must be beaten **twice**: if the lower-bracket champion wins the
Grand Final, a **deciding second game** is played. The extra round is reserved
in the schedule (so that it can be given a date and time) but is skipped, and
the tournament ends early, when no reset is needed.

### Double elimination — two-game matches

Double elimination with every match played over two games with colours
reversed.

---

## Settings

The pairing settings depend on the variation:

| Setting | Variations | Meaning |
|---|---|---|
| **Third-place playoff** | Single elimination | Play a match for third place between the two losing semi-finalists, alongside the final. |
| **Grand final reset** | Double elimination | See above. |
| **Colour assignment** | One-game variations | How the colours of each match are decided (see below). Two-game matches have forced colours. |
| **Group by** | All | Seed the bracket by group, so that each group plays itself first (see below). |

### Colour assignment

- **Alternate colours** (default) — each participant takes the opposite colour
  to its previous round; when two participants who need the same colour meet,
  the higher seed alternates and the lower seed takes what is left.
- **Higher seed plays White** — the stronger seed has White in every match.
- **Drawing of lots** — colours are drawn at random for each match.

In a team match, the colour is that of the **first board** (the other boards
alternate as usual).

### Group by

Seeding by group — by **club** or **federation** for individuals, by
**affiliation** or **federation** for teams (plugins may add other criteria) —
lays the bracket out so that **each group is its own sub-bracket**: members of
a group play each other first, groups meet later, and the two strongest groups
can only meet in the final. Within a group, players are ordered by rating and
teams by pairing number; participants without a value join a single
"unaffiliated" group.

Every group is padded with byes to the same power-of-two size, so uneven groups
cost byes and rounds. The tournament form shows a **live preview** of the
groups, the size of the resulting bracket, its number of rounds and its byes
for the selected criterion, and warns you when the groups are so uneven that
most of the bracket would be byes. For best results, make the groups equal in
size — ideally 2, 4, 8 or 16 participants each.

---

## During the tournament

- The left column of the pairings screen lists who is **still in**, by bracket
  (upper and lower for a double elimination), and folds the eliminated away.
- The round navigation names each stage: **Round of 16**, **Quarterfinals**,
  **Semifinals**, **Final**, and the upper / lower bracket stages and Grand
  Final of a double elimination. The third-place playoff is played in the same
  round as the final.
- Results are entered as usual (see
  [Managing Pairings]({% link docs/running-an-event/managing-pairings.en.md %})),
  but a round becomes **read-only** once the next round has been paired from
  its results. To correct a result, unpair the following round first.
- The **ranking** is by the **round reached**, shown in plain language rather
  than as points: _Winner_, _Runner-up_, _Third place_ and _Fourth place_ (with
  a third-place playoff), _Out — round N_, or _Still in_ while the bracket is
  running.

---

## Documents

The **Knock-out Bracket** document, available for knock-out tournaments in the
[Documents]({% link docs/documents/index.en.md %}) dialog, prints the **bracket
diagram** with the results so far. Its **schedule** option prints the same
matches as a **chronological list**, round by round, with the date and time
of each round when they have been set.

---

## Team knock-out

A team knock-out works the same way, with **teams** in place of players: each
match is a team match, played on the boards of the two teams with the lineups
of the round (see [Running team rounds]({% link docs/team-tournaments/running-team-rounds.en.md %})),
and the team scoring the more **game points** advances. A level match is decided
by the team advancement tie-breaks, or by the arbiter with the **Manual**
tie-break.
