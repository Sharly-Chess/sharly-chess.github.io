---
layout: page
title: Prohibited pairings
permalink: /prohibited-pairings/
page_id: prohibited-pairings
parent: Individual events
nav_order: 465
---

# Prohibited pairings

Prohibited pairings keep players, or teams in a team tournament, from meeting
each other: members of the same club, the same federation, the same affiliation,
or any group you put together by hand. They are an option of the **Swiss**
systems, individual and team.

## Setting them up

Click **Prohibited** on the pairings screen. The badge on the button shows how
many groups apply to the round.

- **Avoid pairing by** builds the groups automatically: every player (or team)
  sharing the chosen attribute, for instance the same club, ends up in the same
  group. The **Constraint** next to it applies to all these groups; **None**
  turns them off without forgetting the attribute.
- **Manual groups** let you add groups of your own, for instance members of the
  same family. Each manual group has its own constraint.

The constraint is **Strict**, **Soft: relaxed from the bottom of the
standings** or **Soft: avoided as much as the pairing rules allow** (see
below).

Once a round is paired, its groups are frozen: the modal shows the groups that
were used for that round, and changing the setting only affects the rounds still
to be paired.

## Constraints

A **strict** constraint is always enforced. If the round cannot be paired
without breaking it, _Sharly Chess_ refuses to pair the round and tells you so.

A **soft** constraint is kept _as far as possible_. The two soft constraints
differ in what gives way when it cannot be kept:

| Constraint | What gives way |
|---|---|
| Soft: relaxed from the bottom of the standings | the leaders always stay apart; when that is not possible for everyone, the lowest-ranked players are the first who may meet a member of their group. Keeping the leaders apart comes before score groups, colours and floaters |
| Soft: avoided as much as the pairing rules allow | members of the same group stay apart only if no Swiss criterion (colours, floaters…) suffers; otherwise they meet, whatever their ranking |

The groups of a round can mix the three constraints.

## Soft: relaxed from the bottom of the standings

When the field cannot be paired with every one of these constraints in place,
some of them are relaxed, just enough for the round to be paired, following one
simple principle: **an unavoidable clash goes to the players doing worst, never
to the leaders.**

### How the constraints are relaxed

Before each round, _Sharly Chess_ looks at the **standings entering the round**,
tie-breaks included. In the first round, when nobody has played yet, the
standings are simply the initial ranking.

It then picks a cut-off **N**, and protects the players (or teams) ranked
**1st to Nth**:

| Pair from the same group | Allowed? |
|---|---|
| both members ranked within the top N | no |
| one member within the top N, the other below | **no** |
| both members ranked below N | yes |

A protected player keeps _all_ their separations, including against the players
who have been released. Releasing a player does not let them meet anyone from
their group: it only lets them meet _another released player_ from their group.
A clash can therefore only happen between two players at the bottom of the
standings, never between a leader and a weaker player from the same club.

_Sharly Chess_ chooses the **largest** N for which the round can still be
paired, so the fewest players possible are released. If every soft constraint
can be kept, nobody is released at all.

The cut-off is worked out again **every round**, from the current standings. A
player released in one round may be protected in the next after a good result,
and the other way round.

After the round is paired, the **Prohibited** modal lists the players (or teams)
that were **freed from their soft constraints** for that round.

### Effect on the pairing

The constraints that survive are handed to the pairing engine as strict
prohibitions, before it applies the usual Swiss criteria. Keeping the protected
players apart therefore takes priority over keeping everyone in their score
group: a player may meet an opponent from a lower score group because every
player of their own score group is a protected club-mate.

The engine itself then applies the _FIDE_ criteria unchanged among the pairings
that remain possible: score differences, colours, and the usual tie-breaks
between equivalent pairings.

### A worked example

A team Swiss over three rounds has ten teams. Six of them, **A1** to **A6**,
come from the same club, A; two, **B1** and **B2**, from club B; **C** and
**D** from two other clubs. Club A and club B are each a group relaxed from the
bottom of the standings.

**Round 1.** Six club A teams and only four teams from other clubs: at least one
match between two club A teams is unavoidable. Protecting everyone is
impossible, and so is protecting everyone but A6, the lowest-ranked team (A6
could only meet a protected A team). The largest possible cut-off releases the
two lowest-ranked A teams, A5 and A6, who play each other; every other A team
meets a team from another club.

**Round 2.** The standings entering the round are:

| Rank | Team | Points |
|---|---|---|
| 1 | A2 | 3 |
| 2 | A1 | 3 |
| 3 | A3 | 3 |
| 4 | B1 | 3 |
| 5 | A6 | 2 |
| 6 | A5 | 2 |
| 7 | D | 1 |
| 8 | A4 | 1 |
| 9 | C | 1 |
| 10 | B2 | 1 |

- Protecting the top 6 would leave five club A teams (A2, A1, A3, A6, A5) for
  only four outside opponents: impossible.
- Protecting the top 5 works: A2, A1, A3 and A6 each meet a team from another
  club, and B1 is kept apart from B2.
- A5 and A4 are released. A4–A5 is the only club A match allowed, and the
  pairing uses it.

A6 drew in round 1 and moved up to 5th, inside the cut-off; A4 lost and dropped
to 8th, outside it. That is why A4 meets A5 rather than A6, even though A4 has
the better initial ranking.

The top score group (A1, B1, A2, A3) shows the effect on the pairing: it holds
three protected club A teams and a single outside team, so only one of them can
play B1. The other two meet teams from the score group below: the result is
B1–A3, B2–A1 and C–A2.

## Soft: avoided as much as the pairing rules allow

This constraint is the pairing engine's **lowest-priority criterion**. The
engine first applies every _FIDE_ criterion: score groups, floaters and colours.
Only among the pairings that these criteria rank as equally good does it pick
the one with the fewest pairs from the same group, ahead of the order in which
the rules would otherwise try them.

Keeping a group apart therefore never makes the pairing worse on any criterion:
if the only way to avoid a club match leaves a player without the colour they
are due, or makes more players float, the club match is played. The standings
play no part either: an unavoidable clash can fall on the leaders as well as on
the players doing worst. Nobody is released, and the **Prohibited** modal does
not list anyone after the round is paired.

For example, six teams play the first round of a Swiss: A1, A2 and A3 from club
A, B1 and B2 from club B, and C1, ranked A1, A2, B1, C1, A3, B2. The standard
pairing would be A1–C1, A2–A3 and B1–B2. Since nobody has played yet, the rules
rank the pairings of the top half against the bottom half as equally good, so
the constraint picks A1–C1, A2–B2 and B1–A3: no club match.

In the TRF export, these groups are written as `SCS` records, an extension read
by the pairing engine of _Sharly Chess_. Other programs, and _FIDE_ pairing
checkers, ignore them: they may report a round where the constraint changed the
pairing as a deviation.

If you prefer another pairing that the regulations allow, you can always adjust
the round by hand: see **[Managing pairings]({% link docs/running-an-event/managing-pairings.en.md %})**.
