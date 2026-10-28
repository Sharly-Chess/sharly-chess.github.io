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
From the navigation menu, click **Tournaments** to open the Tournaments page, then click the **Create a tournament** button.

Only the **Name** is always required. The **Rounds** are required too, except for the systems that work out their own number of rounds, as is the **Variation**, unless a rule set chooses it. In a team event, so are the **Players per team match**. Every other field has a default value.

### Properties

| **Name** | Required, and unique within the event. A user-friendly name used for display purposes (e.g. on [Screens]({% link docs/screens/index.en.md %})). |
| **Rounds** | The number of rounds. The systems that work out their own number of rounds — a round-robin from its entrants, a knock-out from its bracket — show **Automatic** instead; the field is required for the others. Once the tournament is paired, it can't be set below the last paired round. |
| **Time control** | Standard, Rapid or Blitz: the time control whose ratings the tournament is played on (see [Ratings](#ratings) below). It can't be changed once the tournament has started. Below it, **Specify the time control** opens the editor of the exact time control: number of moves, duration and increment of each period, possibly **Different for White / Black**. Once set, it is summarised in a compact notation (for example 90'+30", or 100'x40+30" → 15'+30") with an **Edit** link, and included in the TRF export. When the _FIDE_ classification of the exact time control (the time each player has for a 60-move game: blitz up to 10 minutes, rapid under 60, standard otherwise) differs from the one chosen, a warning says so; the choice is never changed automatically. |
| **Unrated players** | The rating of the players no list rates and for whom no value is typed. Left empty, the event's [**Unrated players**]({% link docs/running-an-event/creating-an-event.en.md %}) value applies. When a federation plugin prescribes this rating, the field is disabled (see for example the [_FFE_ plugin]({% link docs/plugins/france/ffe.en.md %}#ratings)). |
| **Rating retrieval** | The ratings looked for, in order of priority: a player is ranked on the first one they hold. Each rating is named by its list, its kind and its cadence. The first option, **Default - …**, is the federation's sequence for the cadence (see below), following the event's [**Rating retrieval by default**]({% link docs/running-an-event/creating-an-event.en.md %}). The **Highest of _FIDE_ and national** and **Lowest of _FIDE_ and national** options compare the first _FIDE_ rating and the first national rating a player holds. |
| **Dates** | Left empty, the tournament takes the dates of the event, which runs from the start of its first tournament to the end of its last (today, for the first tournament of the event). Dates more than 30 days apart offer to split the tournament into [rating periods]({% link docs/running-an-event/rating-periods.en.md %}). |
| **Location** | Left empty, the event's location applies. |
| **Rule set** | Shown only when a plugin offers rule sets (for example the [_FFE_ plugin]({% link docs/plugins/france/ffe.en.md %})). Optional: it pre-configures the tournament for an official rule set (federation cup, etc.), and may add its own fields. |

### Ratings

The **Time control**, **Unrated players** and **Rating retrieval** fields decide the rating each player is ranked on.

Within a list, › separates the ratings looked for one after the other, and → leads to the next list. For example, _FIDE list: rapid › standard → FFE: FIDE rapid › FIDE standard › national rapid_ looks for the rapid then the standard rating of the _FIDE_ list, then the _FIDE_ rapid and standard ratings that the _FFE_ list gives, then the national rapid rating of the _FFE_ list. A national list may give the _FIDE_ ratings of its players besides their national ratings; the options only name the ratings the lists publish: a national list that publishes only a standard rating offers no national rapid rating, and a list that gives no _FIDE_ ratings offers none.

_FIDE_'s default sequences are:

| **Standard** | _FIDE_ list: standard › rapid › blitz |
| **Rapid** | _FIDE_ list: rapid › standard › blitz |
| **Blitz** | _FIDE_ list: blitz › standard › rapid |

A player who holds none of the ratings looked for is ranked on the value typed by the arbiter; failing that, on the value prescribed by the federation, if any, then on the **Unrated players** value of the tournament or, failing that, of the event (1400 by default). See [Ratings]({% link docs/running-an-event/ratings.en.md %}) for how the ratings are shown and checked.

The tournament card shows the sequence under **Rating retrieval**.

{: .note }
> :information_source: Federation plugins may impose their federation's sequences, which then cannot be changed (see for example the [_FFE_ plugin]({% link docs/plugins/france/ffe.en.md %})).

### Pairings

| **Pairing system** | Choose the tournament's [pairing system]({% link docs/running-an-event/pairing-systems.en.md %}). In a team event these are the [team pairing systems]({% link docs/team-tournaments/pairing-systems.en.md %}) instead of swiss / round-robin. It can't be changed once the tournament is paired. |
| **Variation** | Required, unless a rule set chooses it. Some variations (for example the [knock-out]({% link docs/running-an-event/knockout.en.md %}) ones) add their own settings below this field. |
| **Starting rank ties** | _Individual events only, for the systems that use it._ How the players with the same rating and title are ordered in the starting rank. It can't be changed once the tournament has started. |
| **First board number** | The first board number to use for pairings of this tournament. |
| **Max byes** | _Systems that allow byes only (Swiss, Keizer)._ The maximum number of byes a player may request. |
| **No. final rounds without byes** | _Systems that allow byes only._ Number of final rounds in which byes are not permitted. |
| **Illegal moves recording** | The maximum number of illegal moves that can be recorded per round for a player, from 0 to 3. |
| **Drop players that completed less than 50% of their games (FIDE 6.6)** | _Round-robins only._ A player (or team) who withdrew or was expelled having completed less than half of their games is not ranked, and their games are annulled: they no longer count in the opponents' scores and tie-breaks. |
| **FIDE mode** | _Swiss only._ Keeps the tournament within the _FIDE_ regulations: see [FIDE mode]({% link docs/running-an-event/fide-mode.en.md %}). On by default; turning it off once the first round is paired is final. |

### Team competition

_Team events only_ (see [Team events]({% link docs/team-tournaments/index.en.md %})).

| **Players per team match** | Required. The number of boards in each team match. |
| **Maximum roster size** | The largest number of players a team may have on its roster, at least the number of players per team match. Leave blank for no limit. |
| **Primary score** | The score the ranking is based on: match points or game points (see [Scoring and tie-breaks]({% link docs/team-tournaments/scoring-tie-breaks.en.md %})). |
| **Colour pattern** | _Systems that use one._ The colour of the first team on each board. |
| **Use game points for colour allocation** | _Systems with colour preferences._ When two teams have the same score, the one with the better secondary score has its colour preference applied first. |
| **Colour rule** | _Systems with colour preferences._ Type A uses simple White/Black preferences, while type B distinguishes between strong and mild preferences. |
| **Warn on lineup out of roster order** | Shows a warning when a lineup places players in a different order than the roster. The lineup can still be reordered freely. |

### Point attribution

This section is collapsed by default, and absent from Keizer tournaments. It sets the points of a **Win** (1), a **Draw** (0.5), a **Loss** (0), an **Absence** (the loss value) and a **PAB**, the pairing allocated bye (the win value). In a team event, the game points and the match points are set separately; a team's PAB is worth a drawn match by default.

A win must be worth at least a draw, and a draw at least a loss; two draws cannot be worth more than a win and a loss. A PAB cannot be worth more than a win, and with the standard 1-0.5-0 scoring, it is worth 1, 0.5 or 0.

### Criteria

The **Criteria** section, collapsed by default, describes who is eligible for the tournament: **gender**, **rating** range, age **category**, **club** and **federation**. The criteria are not enforced when adding players, but they drive the [distribution of players]({% link docs/running-an-event/managing-tournaments.en.md %}#distributing-players-among-tournaments) among the tournaments and can fill the [player search]({% link docs/running-an-event/managing-players.en.md %}#adding-players) filters in one click.

[Plugins]({% link docs/plugins/index.en.md %}) may add extra fields to the tournament form depending on their functionality.

### Schedule

The **Schedule** section, collapsed by default, sets the date and time of each round once the number of rounds is known. Each round must fall within the dates of the tournament, after the previous one. A tournament split into [rating periods]({% link docs/running-an-event/rating-periods.en.md %}) shows its periods here.

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
