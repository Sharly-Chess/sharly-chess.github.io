---
layout: page
title: Managing Tournaments
permalink: /managing-tournaments/
page_id: managing-tournaments
parent: Running an Event
nav_order: 200
---

# Managing Tournaments

## Creating a Tournament

Once you've created an Event, you can add one or more Tournaments to it.
From the navigation menu, click **Tournaments** to open the Tournaments page, then click the **Create Tournament** button.

### Properties

| **Name** | A user-friendly name used for display purposes (e.g. on [Screens]({% link docs/screens/index.en.md %})).
| **Rounds** | The number of rounds in the tournament. |
| **Players per team** | _Team events only._ The number of boards each team fields. |
| **Dates** | The tournament’s start and end dates (overrides the event-level values). |
| **Location** | The location of the tournament (overrides the event-level value). |

### Ratings

| **Rating used** | The cadence of the tournament — Standard, Rapid, or Blitz: the time control whose ratings the tournament is played on. |
| **Rating source** | The kind of rating the players are ranked on, and the one used when they have none: _FIDE_; National; _FIDE_, then national; National, then _FIDE_; Highest of _FIDE_ and national; Lowest of _FIDE_ and national. **Use default - …** takes the event's [setting]({% link docs/running-an-event/creating-an-event.en.md %}). |
| **Rating lists** | The lists the ratings are looked up in, in this order. The first option, **Default - …**, is the federation's sequence for the cadence (see below). The options only name lists that can give a rating: a national list that publishes only a standard rating offers no national rapid option. |

_FIDE_'s default lists are:

| **Standard** | _FIDE_ standard → _FIDE_ rapid → _FIDE_ blitz |
| **Rapid** | _FIDE_ rapid → _FIDE_ standard → _FIDE_ blitz |
| **Blitz** | _FIDE_ blitz → _FIDE_ standard → _FIDE_ rapid |

For each kind of rating, in the order of the **Rating source**, a player is given the value of the first list holding one; failing that, the value typed by the arbiter, then the value prescribed by the federation. See [Ratings]({% link docs/running-an-event/ratings.en.md %}) for how the ratings are shown and checked.

The tournament card shows the lists in use (**Rating lists → …**).

{: .note }
> :information_source: Federation plugins may set their own default lists, and lock the **Rating source** (see for example the [_FFE_ plugin]({% link docs/plugins/france/ffe.en.md %})).

### Pairings

| **Pairing system** | Choose the tournament's [pairing system]({% link docs/running-an-event/pairing-systems.en.md %}). In a team event these are the [team pairing systems]({% link docs/team-tournaments/pairing-systems.en.md %}) instead of swiss / round-robin. |
| **Pairing variation** | Allow you to choose variants of the pairing system. Some variations (for example the [knock-out]({% link docs/running-an-event/knockout.en.md %}) ones) add their own settings below this field. |
| **First board number** | The first board number to use for pairings of this tournament. |
| **Max byes** | The maximum number of byes a player may request. |
| **Nb. final rounds without byes** | Number of final rounds in which byes are not permitted. |

### Time Control

You can define the time control for the tournament.  This will be added to the TRF export.

### Rules

| **Rules file location** | A link to the tournament rules document. |
| **Illegal move recording** | Enables tracking of illegal moves per player. You can define a maximum here. |
| **Point counting** | Choose between the standard 1-0.5-0 point system or the 3-1-0 system. |
| **Value of the pairing allocated bye** | The number of points awarded to a player receiving a pairing allocated bye |
| **Drop players that completed less than 50% of their games (FIDE 6.6)** | _Round-robins only._ A player (or team) who withdrew or was expelled having completed less than half of their games is not ranked, and their games are annulled: they no longer count in the opponents' scores and tie-breaks. |

### Criteria

The **Criteria** section describes who is eligible for the tournament: **gender**, **rating** range, age **category**, **club** and **federation**. The criteria are not enforced when adding players, but they drive the [distribution of players]({% link docs/running-an-event/managing-tournaments.en.md %}#distributing-players-among-tournaments) among the tournaments and can fill the [player search]({% link docs/running-an-event/managing-players.en.md %}#adding-players) filters in one click.

[Plugins]({% link docs/plugins/index.en.md %}) may add extra fields to the tournament form depending on their functionality.

---

## Tournament options

Once you've created a tournament it's displayed on the Tournaments page. Each tournament has a number of options that can be accessed, such as:

- The ability to edit the fields set during creation
- The ability to download it in various formats (including TRF)
- Updating the players' ratings and data from the latest lists (**Actions** › **Update players**, see [Ratings]({% link docs/running-an-event/ratings.en.md %}#checking-the-ratings-against-the-lists))
- Duplication and deletion

---

## Distributing players among tournaments

When the players of an event are registered without a tournament — for example imported from a file or from [_Sharly-Chess.com_]({% link docs/events/index.en.md %}) — the **Distribute the players among the tournaments** button (on the Tournaments page, and in the **Actions** menu of the Players page) splits the whole pool in one go. Two distribution types are available:

| **Descending rating** | Sort the players by descending rating and choose how many go into each tournament, from the strongest section down. |
| **Based on each tournament's criteria** | Allocate each player to the first tournament whose criteria (age category, rating, gender…) they meet. |

With the **descending rating** type, you can also:

- **Define balanced groups** — select several tournaments (click and drag) to form a group. The players are dealt to the tournaments of the group **one at a time**, so that the sections end up with **balanced ratings** rather than a strongest and a weakest section.
- **Separate players from the same club** — spread the players of the same club across the balanced tournaments, as much as possible, so that club-mates do not meet.

{: .tip }
> :point_right: The ratings drive the distribution, so check the players' ratings first with **Update** › **Player ratings** (see [Ratings]({% link docs/running-an-event/ratings.en.md %}#checking-the-ratings-against-the-lists)). The distribution dialog reminds you to do so.
