---
layout: page
title: Accelerations
permalink: /accelerations/
page_id: accelerations
parent: Individual events
nav_order: 460
---

# Accelerated pairings

Acceleration is an option of the **[Swiss]({% link docs/running-an-event/pairing-systems.en.md %})**
system (Round-Robin and Keizer do not use it). In a large field played over few
rounds, an ordinary Swiss can take several rounds before the strongest players
meet, and the winner may only be decided by a single late game. Acceleration adds
**fictional points** to the top of the field in the early rounds, so leaders are
paired against each other sooner and the standings settle faster. The fictional
points are removed as the tournament goes on, so the final ranking is decided
entirely by real results.

You choose an accelerated system as the tournament's **variation**, on the same
form where you pick the pairing system.

---

## Methods

| Method | Notes |
|---|---|
| **Baku acceleration system** | The _FIDE_-standard acceleration (Dutch, 2026 rules). A good default. |
| **Haley system** | A classic two-group acceleration. |
| **Soft Haley system** | A gentler Haley that tapers the added points. |
| **Progressive accelerated system** | Uses three groups for a finer split of a large field. |
| **Custom accelerated system** | You define the acceleration yourself, round by round. |
| **Initial score accelerated system** | Seeds starting points, optionally carried over from another tournament. |

---

## Settings

The settings depend on the method:

- **Group-based methods** (Baku, Haley, Soft Haley use two groups; Progressive
  uses three) split the field into **Group A**, **Group B** (and **Group C**),
  each defined by a **minimum** and **maximum** starting rank. The top group
  carries the fictional points.
- **Custom accelerated system** — **Accelerated rounds**: a list of rules, each
  giving the fictional points to add and the range of rounds and pairing numbers
  it applies to.
- **Initial score accelerated system** — **Initial pairing scores**: the starting
  points to give players (see below).

{: .note }

> :information_source: Acceleration only affects **pairing**, not the score shown
> in the standings. Players never keep the fictional points.

---

## Initial score: chaining tournaments

The **Initial score** system gives players a starting number of pairing points.
These can be **carried over from another tournament** — choosing a source event
and tournament, a coefficient, and how missing players are filled.

Its main use is **chaining several independent tournaments** into one running
standing — for example a slow, a rapid and a blitz — where you want each leg's
result to feed the pairings of the next. Because the carried-over points are only
**virtual** pairing points, they do **not** stop two players meeting again in a
later leg.

{: .warning }

> :warning: Carrying scores across tournaments this way is **not** valid for
> official _FIDE_ events. Use it for club and festival formats, not rated
> competition that must follow _FIDE_ pairing rules.
