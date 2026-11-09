---
layout: page
title: Screens
parent: Display
permalink: /single-screens/
page_id: single-screens
nav_order: 200
---

# Screens

A screen is a web page showing one kind of information: the pairings, the last results, the ranking, the check-in, a round-robin grid or an image. It shows it either on one page, which can hold several tournaments, or over several pages for a single tournament. Screens are created and listed on the **Display → Screens** tab.

A screen can be shown on its own, in any number of [rotators]({% link docs/screens/rotators.en.md %}) and [menus]({% link docs/screens/menus.en.md %}), and through [channels]({% link docs/screens/display-controllers.en.md %}). See [How it fits together]({% link docs/screens/index.en.md %}#how-it-fits-together).

---

## Screen types

_Sharly Chess_ offers seven screen types:

{: .icon-list }
> - <i class="bi-check-square"></i> **Check-in** – the players of a tournament, who can check in themselves if the screen allows it.
> - <i class="bi-card-list"></i> **Pairings by board** – the pairings of the round, ordered by board number.
> - <i class="bi-people"></i> **Pairings by player** – the pairings of the round, in alphabetical order of the players.
> - <i class="bi-1-square"></i> **Last results** – the most recent results, most recent first.
> - <i class="bi-trophy"></i> **Ranking** – the current standings, optionally as a cross-table.
> - <i class="bi-grid-3x3"></i> **Round-robin grid** – every player of a round robin against every other, with the results and the rounds still to play.
> - <i class="bi-image"></i> **Image** – an image from a file or from the web.

The pairings and ranking screens of a tournament that has not started yet wait for its first round. To set them up before then, use the [fake data]({% link docs/screens/index.en.md %}#fake-data).

---

## One page or several pages {#one-page-or-several-pages}

A screen is shown in one of two ways, chosen at the top of the window when it is created:

- **One page, several tournaments** — you choose what goes on the page, and it can mix tournaments: for example Open A and Open B, one above the other. Use it when everything fits on one page.
- **One tournament over several pages** — one tournament is split automatically into as many pages as you ask for, and the pages turn by themselves unless the screen accepts input. Use it when one tournament is too long for one page. Such a screen is called a **paged screen** in the application.

Both are listed together on the **Screens** tab, and both can be used wherever a screen can. Screens over several pages are available for the **Check-in**, **Pairings by board**, **Pairings by player** and **Ranking** types.

---

## Creating a screen

To be guided, click **Setup assistant**, beside **Create a screen**: the [setup assistant]({% link docs/screens/setup-assistant.en.md %}) asks what you want to put up and creates the screen, along with a menu, a rotator and a channel if needed.

To set every option yourself, click **Create a screen**, on the **Screens** or **Guide** tab, choose the screen type and, for the types that can be split, choose between **One or more tournaments, on one page** and **One tournament, over several pages** at the top of the window. Then choose the **tournaments** to show — a screen over several pages shows a single tournament.

Most of the options are self-explanatory, but a few deserve more detail.

### Layout

- **Designed for** — the [channels]({% link docs/screens/display-controllers.en.md %}) this screen is meant for, such as the projector or the tablets. The screen is then offered first when choosing what these channels show, and carries a badge with the name of each of them wherever it is listed or chosen. Nothing is sent to the channels: it only helps you find the right screen later.
- **Columns** and **Font size adjustment** — useful when there are just slightly too many players to fit comfortably on the screen: an extra column or a slightly smaller font is often enough.

### Accepting input {#accepting-input}

The check-in, pairings by board and pairings by player screens can also be used to **enter something** from a shared device, such as a tablet in the playing hall:

- on a **check-in** screen, turn on **Players can check in on this screen** to let players check themselves in;
- on a **pairings** screen, turn on **Results can be entered on this screen** to let players enter their results. On the pairings by board screen, they tap their board; on the pairings by player screen, they tap their own name, which opens the result of their board. If the tournament records illegal moves, they can be entered from the pairings by board screen as well.

When the switch is on, you also choose whether the screen shows its **exit button**, which leaves the screen for the event's **Display** page. Leave it off on a tablet dedicated to result entry, so that the players stay on the screen.

A screen that accepts input carries a **Result entry** or **Check-in** badge in the lists, on its card and in its preview. A screen of one of these three types with the switch off carries a **View only** badge instead, so that you can tell at a glance which screens take input.

{: .note }
> :information_source: A screen that accepts input cannot go through a [rotator]({% link docs/screens/rotators.en.md %}), and a screen over several pages that accepts input stays on its page instead of turning them, so that the screen does not change under someone using it. Such a screen therefore has no **Seconds per page** setting.

Results can be entered on a public screen by anyone on the network, so think about who can reach the device. The [access levels]({% link docs/network/access-levels.en.md %}) let you decide whether results and check-ins can be entered through the public screens at all.

### Columns displayed {#columns-displayed}

Ranking screens, on one page or over several pages, have a checkbox for each column that can be hidden: the rating, the category, the gender, the federation and the club, the columns added by plugins, the first tie-break and the other tie-breaks. Unticking columns leaves room for the players on a screen showing a long ranking, especially when it is split over several columns. The choice applies to the cross-table too; on team tournaments, only the tie-breaks can be hidden.

A ranking screen always says after which round it ranks the players, such as _After round 5_: the last round played, unless you choose a round.

### Menu label

The label used for this screen in the [menus]({% link docs/screens/menus.en.md %}) that hold it. If left empty, the name of the tournament is used; a screen over several pages adds the range of each page.

### Timer

A [timer]({% link docs/screens/timers.en.md %}) to show on the screen, for example to count down to the next round.

### Alert message

An alert message is shown in a yellow band along the bottom of the screen, and scrolls across it if it is too long to fit. It is a powerful tool on a large screen: *"Would players X and Y please enter their result!"*

A default message for the whole event, along with the background colour of the screens, is set with the <i class="bi-gear-fill"></i> settings button of the **Screens** tab; each screen can use it or show its own.

---

## One page, several tournaments {#one-page}

Once a screen on one page is created, its **Boards** button (or **Players**, depending on the type) opens the list of its **sets**. Each set shows part of a tournament — for example all its boards, or boards 1 to 20 — and a screen can show several sets, from the same tournament or from different ones. Drag the sets to choose their order.

This gives you a lot of flexibility. For example, with two tournaments and two tablets for result entry, you can:

- show the boards of **both tournaments** on each tablet, so that players use whichever is free;
- or show **one tournament per tablet**, so that each tournament has its own.

If your event has several small tournaments, such as a youth championship with one section per age, a single **pairings screen showing all the boards** of all the sections is perfect for a projector.

{% figure [caption: "The 'Pairings by Player' screen with 2 tournaments and 2 columns"] %}
![The 'Pairings by Player' screen with 2 tournaments and 2 columns](/assets/images/players-screen-multi.en.jpg)
{% endfigure %}

---

## Round-robin grids {#round-robin-grids}

A round-robin grid shows a round-robin tournament, individual or team, whether it follows the Berger tables or a schedule of its own: one row and one column per player, or per team. Each square holds the result of their game once it is played and published, and until then the round it is played in, such as _R 4_. On the right come the points, the tie-breaks and the rank.

On a grid of players, each square is coloured white or black for the colour the player of its row has, or will have, in that game. In a double round robin, where two games share a square, the square is split in two, one half per game. A grid of teams is not coloured, since a match has no colour of its own; detailed by player, each player's games are coloured as above.

- The grid is ordered by **pairing number**, so that every player keeps their row and column all through the tournament, or by **rank**, to bring the leaders to the top.
- The rating, the federation and the tie-breaks can be hidden with the **Columns displayed** checkboxes, to make room for a large grid.
- A team grid can be **detailed by player**: one row per player, grouped by team, with the results of their games. Lineups change from round to round, so it shows the games played only.

Only round-robin tournaments can be shown on a round-robin grid, and a new round robin gets one among its default screens. A grid stays on one page: for a long tournament, adjust the font size so that it fits the screen.

---

## One tournament over several pages {#paged-screens}

When a tournament has too many players for one page, you could create several screens and give each a part of the boards — but that is tedious, and has to be redone whenever the number of players changes. A screen over several pages, or paged screen, does it for you.

{% figure [caption: "The 'Pairings by Player' paged screen split over 12 pages"] %}
![The 'Pairings by Player' paged screen split over 12 pages](/assets/images/players-screen.en.jpg)
{% endfigure %}

Besides the options of every screen, a screen over several pages has:

- the **first** and **last** board (or player, or team) to show, if you only want part of the tournament;
- for pairings by board, the **board selection**: by board number, or in the order of the pairings;
- the **number of pages**, or the **number of boards per page** (or players, or teams) — in which case _Sharly Chess_ works out how many pages are needed;
- the **seconds per page**: how long each page is shown when the pages turn, on a channel or in a rotator. Left empty, a channel shows each page for 15 seconds, and a [rotator]({% link docs/screens/rotators.en.md %}) uses its own delay. This setting is not offered when the screen accepts input, since its pages do not turn.

Unless it accepts input, a screen over several pages goes through its pages wherever it is shown:

- opened with its <i class="bi-eye"></i> **view** button, or sent to a [channel]({% link docs/screens/display-controllers.en.md %}), it shows its pages in turn;
- in a [rotator]({% link docs/screens/rotators.en.md %}), its pages are shown one after the other, among the rotator's other screens;
- in a [menu]({% link docs/screens/menus.en.md %}), it appears as a single entry opening a submenu of its pages, or as one entry per page, depending on the menu's settings.

To show **one page only** on a device — for example the boards of the first page on a screen next to those boards — open the screen's details: each page has its own <i class="bi-eye"></i> view button and its own button to send that page to a channel.

---

## The list of screens

The **Screens** tab shows the screens on one page and the screens over several pages together. The chips above the list filter it by screen type, and the buttons at its top right show it as a **list**, as **cards**, or as **previews** — a live miniature of each screen, which is the quickest way to check them all at a glance. In the previews, a screen over several pages is drawn as a stack of pages, with its number of pages.

A screen left without a name is named after its tournaments: the name of the tournament, or of both for two tournaments; _All tournaments_ when it shows every tournament it can; otherwise the name of its first tournament and the number of the others, such as _Open A and 3 other tournaments_. A name too long for the list is cut short — hover over it to read it in full.

Beside its name, each screen carries its badges: the channels it is designed for, its number of pages if it has several, and **Result entry**, **Check-in** or **View only** for the types that can take input.

Each screen has buttons to:

- <i class="bi-eye"></i> **view** the screen, in a new tab of your browser;
- <i class="bi-box-arrow-in-right"></i> **send** it to a [channel]({% link docs/screens/display-controllers.en.md %}), so that the devices following the channel show it;
- **edit**, **duplicate** or **delete** it.

Turn on **Details** to see the full configuration of each screen in the list; for a screen over several pages, the details list its pages with the range each one shows.

{: .tip }
> :point_right: A screen's address can be opened directly on a device. A screen opened that way shows only itself: to let people move between screens, open a [menu]({% link docs/screens/menus.en.md %}) instead.
