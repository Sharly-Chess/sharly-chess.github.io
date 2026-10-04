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
| **Dates** | The tournament’s start and end dates (overrides the event-level values). Dates more than 30 days apart offer to split the tournament into [rating periods]({% link docs/running-an-event/rating-periods.en.md %}). |
| **Location** | The location of the tournament (overrides the event-level value). |

### Ratings

| **Rating used** | The cadence of the tournament — Standard, Rapid, or Blitz: the time control whose ratings the tournament is played on. |
| **Ratings tried** | The ratings the players are ranked on, tried in this order: a player is given the first one they hold. Each rating is named by its list, its kind and its cadence. The first option, **Default - …**, is the federation's sequence for the cadence (see below), following the event's [**Ratings tried by default**]({% link docs/running-an-event/creating-an-event.en.md %}). The **Highest of _FIDE_ and national** and **Lowest of _FIDE_ and national** options compare the first _FIDE_ rating and the first national rating a player holds. |

Within a list, › separates the ratings tried one after the other, and → leads to the next list. For example, _FIDE list: rapid › standard → FFE: FIDE rapid › FIDE standard › national rapid_ tries the rapid then the standard rating of the _FIDE_ list, then the _FIDE_ rapid and standard ratings that the _FFE_ list gives, then the national rapid rating of the _FFE_ list. A national list may give the _FIDE_ ratings of its players besides their national ratings; the options only name the ratings the lists publish: a national list that publishes only a standard rating offers no national rapid rating, and a list that gives no _FIDE_ ratings offers none.

_FIDE_'s default sequences are:

| **Standard** | _FIDE_ list: standard › rapid › blitz |
| **Rapid** | _FIDE_ list: rapid › standard › blitz |
| **Blitz** | _FIDE_ list: blitz › standard › rapid |

A player who holds none of the ratings tried is given the value typed by the arbiter; failing that, the value prescribed by the federation. See [Ratings]({% link docs/running-an-event/ratings.en.md %}) for how the ratings are shown and checked.

The tournament card shows the ratings tried (**Ratings tried → …**).

{: .note }
> :information_source: Federation plugins may impose their federation's sequences, which then cannot be changed (see for example the [_FFE_ plugin]({% link docs/plugins/france/ffe.en.md %})).

### Pairings

| **Pairing system** | Choose the tournament's [pairing system]({% link docs/running-an-event/pairing-systems.en.md %}). In a team event these are the [team pairing systems]({% link docs/team-tournaments/pairing-systems.en.md %}) instead of swiss / round-robin. |
| **Pairing variation** | Allow you to choose variants of the pairing system. Some variations (for example the [knock-out]({% link docs/running-an-event/knockout.en.md %}) ones) add their own settings below this field. |
| **First board number** | The first board number to use for pairings of this tournament. |
| **Max byes** | The maximum number of byes a player may request. |
| **Nb. final rounds without byes** | Number of final rounds in which byes are not permitted. |
| **FIDE mode** | _Swiss only._ Keeps the tournament within the _FIDE_ regulations: see [FIDE mode]({% link docs/running-an-event/fide-mode.en.md %}). On by default; turning it off once the first round is paired is final. |

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

The **Distribute the players among the tournaments** button (on the Tournaments page, and in the **Actions** menu of the Players page) redistributes **all the players of the event** among its tournaments in one go, whichever tournament they are currently in. Distribution is only possible in individual events, before any tournament has started, and when all the tournaments use the same rating type (Standard, Rapid or Blitz).

{: .tip }
> :point_right: A convenient way to organise registrations is to create a single **holding tournament** that collects all the entries — manually, from a file or from [_Sharly-Chess.com_]({% link docs/events/index.en.md %}) — and then to distribute the players among the real sections once registrations are closed. Give the holding tournament 0 players (**Descending rating**) or leave it unselected (**Based on each tournament's criteria**); once empty, it can be deleted.

Two distribution types are available:

| **Descending rating** | Sort the players by descending rating and choose how many go into each tournament, from the strongest section down. |
| **Based on each tournament's criteria** | Allocate each player to the first tournament whose criteria (age category, rating, gender…) they meet. |

With the **descending rating** type, you can also:

- **Define balanced groups** — select several tournaments (click and drag) to form a group. The players are dealt to the tournaments of the group **one at a time**, so that the sections end up with **balanced ratings** rather than a strongest and a weakest section.
- **Separate players from the same club** — spread the players of the same club across the balanced tournaments, as much as possible, so that club-mates do not meet.

{: .tip }
> :point_right: The ratings drive the distribution, so check the players' ratings first with **Update** › **Player ratings** (see [Ratings]({% link docs/running-an-event/ratings.en.md %}#checking-the-ratings-against-the-lists)). The distribution dialog reminds you to do so.
