---
layout: page
title: Ratings
permalink: /ratings/
page_id: ratings
parent: Running an Event
nav_order: 350
---

# Ratings

Each tournament ranks its players on a **tournament rating**, the first of the **Ratings tried** chosen in the [tournament settings]({% link docs/running-an-event/managing-tournaments.en.md %}#ratings) that the player holds.

## How a rating is chosen

_Sharly Chess_ tries the ratings of the sequence in order and takes the first one the player holds; the highest and lowest options compare the first _FIDE_ rating and the first national rating instead. When the player holds none of them, the value typed by the arbiter is used; failing that, the value prescribed by the federation (for example the age-based estimate of the [_FFE_ plugin]({% link docs/plugins/france/ffe.en.md %})).

For example, in a rapid tournament with _FIDE_'s default sequence _FIDE list: rapid › standard › blitz_, a player without a _FIDE_ rapid rating is ranked on their _FIDE_ standard rating (see [the FAQ entry]({% link dev/faq.en.md %}#standard-rating)).

## Reading a rating

Wherever a player's rating is shown, a letter tells where it comes from:

| **F** | A _FIDE_ rating. |
| **N** | A national rating. |
| **E** | No list rates the player: the value was typed by the arbiter, or prescribed by the federation. |

Two markers may complete the letter:

- A **star** (`F*`, `N*`): the arbiter corrected the value. The rating keeps its source, and the value of the list is remembered.
- A **cadence** in superscript (<sup>STD</sup>, <sup>RPD</sup>, <sup>BTZ</sup>): the rating was borrowed from another cadence. For example, in a standard tournament, a player ranked on their _FIDE_ rapid rating is shown as `1700 F`<sup>RPD</sup>. A _FIDE_ standard rating in a rapid or blitz tournament carries no marker, since it is the player's rapid or blitz rating for _FIDE_; neither does the rating of a national list that publishes a single rating.

In the players table, hover a rating to see where it came from, for example _FIDE standard, 02/10/2026_ (the list and the version it was read from).

## Tournament rating and official _FIDE_ rating

A player has two ratings in a tournament:

- the **tournament rating** ranks the players: it gives the pairing numbers and feeds the rating-based tie-breaks;
- the **official _FIDE_ rating** is the one _FIDE_ reports and rates the tournament on: the player's _FIDE_ rating of the tournament's cadence or, in a rapid or blitz tournament, their _FIDE_ standard rating when they have none.

A correction by the arbiter changes the tournament rating only: the official rating remains the one of the list.

## The player form

The **Ratings** section of the player form shows:

| **Tournament rating (cadence)** | The tournament rating, with its letter and, below, where it came from. Typing over a value from a list corrects it (it is then shown with a star); emptying the field restores the value of the list. For a player no list rates, the typed value is used (**E**); emptying the field falls back on the value prescribed by the federation. |
| **Rating chosen** | Shown when the player holds other ratings. The first choice, _"rating · from the rating lists"_, is the automatic one; the others are the player's other ratings, including those the tournament does not try (_not among the ratings tried_). Choosing one pins it: the rating keeps its source and is refreshed from that list, and its description says _chosen by the arbiter_. If the list no longer holds a value, the automatic choice applies again. |
| **Official FIDE rating** | Read-only. For players with a _FIDE_ rating, the **K** field on its right holds their _FIDE_ coefficient; when left empty, the coefficient shown is estimated from the rating and the age of the player. |

{: .note }
> :information_source: In a tournament reported to _FIDE_ in several periods, the ratings shown are those of the period being played.

## Checking the ratings against the lists

The **Update** menu of the Players page (also in the **Actions** › **Update players** menu of a tournament) starts with **Player ratings**, which compares each player's ratings, for the period being played, with the _FIDE_ list (by _FIDE_ ID) and the player's national list (by national ID).

At the top of the window, the lists consulted are shown with their last update. When a copy is outdated, or its source has a newer version, a warning lists them, with an **Update the lists** button for the users allowed to manage the data sources. Under **Rating lists used**, each list whose ratings the tournaments try is shown, with the ratings tried in it, with its state: its last update, _Not installed_, _Read online_ when only its online version is available, _online database tried first_ when it is set so in the [data sources]({% link docs/player-databases/index.en.md %}), or the ratings it does not publish.

The players whose ratings differ are listed with their tournament rating and official _FIDE_ rating, before and **With the lists**. Hover a rating to see its source.

| **Ratings the lists now give differently** | The lists give these players another rating. They are ticked: the new ratings are applied. |
| **Ratings set by the arbiter** | The arbiter corrected these ratings, or typed a value. They are not ticked: these players keep the arbiter's value unless you select them to take the value of the lists. A typed value that no list gives shows _No list rates the player_. |

A change of source, version or K coefficient alone, without a change of rating, is applied without asking; the window counts these players. Players missing from the lists are named under **Not found in the lists**.

{: .tip }
> :point_right: The reminder shown before pairing round 1, or the first round of a new period, offers the same **Update** menu.

### Automatic check

When **Check the ratings against the lists** is on in the [event settings]({% link docs/running-an-event/creating-an-event.en.md %}) (the default), the Players page shows a banner such as _The rating lists give 3 players a different rating._ **Review** opens the window described above.

This check reads the installed copies of the lists only, without asking any server, whatever the setting of the lists. It runs when the event is first opened, after a list is updated, and after players change. Closing the banner hides it until a list is updated.
