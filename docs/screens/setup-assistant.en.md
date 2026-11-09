---
layout: page
title: Setup assistant
parent: Display
permalink: /setup-assistant/
page_id: setup-assistant
nav_order: 50
---

# Setup assistant

The **setup assistant** builds a display step by step. You say what you want to put up, it asks one question at a time, and it creates everything in one go: the screens, a [menu]({% link docs/screens/menus.en.md %}) or a [rotator]({% link docs/screens/rotators.en.md %}) when there are several screens to go between, and the [channel]({% link docs/screens/display-controllers.en.md %}) of the device it is for. It is the quickest way to get started, and it shows how the screens, menus and channels fit together as you go.

Open it from:

- the **Setup assistant** button of the **Guide** tab, beside its heading;
- the **Setup assistant** button of the **Screens** tab, beside **Create a screen**;
- the **Start the setup assistant** button of the **Screens** tab, while the event has no screen yet.

The **Create a screen** menu still opens the usual screen form, which gives you every option at once.

---

## Choosing what to put up

The assistant starts with a choice of goals:

{: .icon-list }
> - <i class="bi-check-square"></i> **Show the check-in status** – the players checked in and those not yet checked in.
> - <i class="bi-pencil-square"></i> **Let the players check in** – on a computer or tablet the players walk up to.
> - <i class="bi-card-list"></i> **Show the pairings by board** – sorted by board number.
> - <i class="bi-people"></i> **Show the pairings by player** – in alphabetical order, for the players to find their board.
> - <i class="bi-pencil-square"></i> **Let the players enter their results** – on a computer or tablet the players walk up to.
> - <i class="bi-trophy"></i> **Show the standings** – the ranking, the cross-table or, for the round robins, the grid.

The pairings by player screens do not exist in a team event, so that goal is not offered there. Below the goals, the assistant lists the other kinds of screens — the last results, the image, and those added by plugins — which are created directly from the **Create a screen** menu.

---

## Answering the questions

The assistant then asks its questions one at a time. On the left, the stage rail — **Content**, **Layout**, **Channel**, **Create** — shows the question being asked under its stage, and gathers the answers given so far: click one to go back to its question, or use **Back**. Back from the first question returns to the goals. The answers are put in words when they would not say what they answer on their own: _Unpaired players hidden_ rather than _No_, _3 pages_ rather than _3_.

### Showing something

For the goals that show information on a display, the assistant asks:

- **what to display**: one or more tournaments on one page, or one tournament over several pages;
- for a screen over several pages, **how people move between the pages**: the pages turn by themselves, which suits a projector, or a [menu]({% link docs/screens/menus.en.md %}) lets people pick their page;
- **how to split it into pages**: a fixed number of rows on each page, and _Sharly Chess_ works out how many pages are needed, or a fixed number of pages. Each column holds the number of rows given: with 20 rows and 2 columns, 40 entries fit on each page;
- the number of **columns** and, if the event has [timers]({% link docs/screens/timers.en.md %}), the **timer** to show.

The pairings by player and pairings by board goals add a few questions of their own, such as the display format of the players, or, in a team event, whether to show the team matches only.

### Showing the standings

The standings goal first asks **what to show**:

- **the ranking**, or **the cross-table**, which then go on with the questions above;
- **the round-robin grid**, offered when the event has a round robin. The grid takes the round robins to show, then whether to order the players **by pairing number**, so that each keeps their row all through the tournament, or **by rank**, to bring the leaders to the top. A grid always fits on one page.

With several round robins, the assistant asks **how to show the grids**: all on one page, one above the other; one page per grid, turning by themselves, which creates a [rotator]({% link docs/screens/rotators.en.md %}) showing them in turn; or one page per grid, with a menu to pick the grid.

### Letting the players enter something

For the goals where players check in or enter their results, the assistant asks:

- **which tournaments** the screen covers;
- when there are several, **how the players reach their tournament**: with a menu, where they pick their tournament first and each tournament has its own page, or with everything on one page that they scroll through;
- for a single tournament, whether the screen fits **on one page** or runs **over several pages, with a menu to pick the page**. The pages of a screen taking input never turn by themselves, so that the screen does not change under someone using it.

When the event has a single tournament, the assistant skips the questions about tournaments, and the goals start directly with one page or several.

### Choosing the channel

Every goal ends with the [channel]({% link docs/screens/display-controllers.en.md %}) the screen is designed for. A channel is an address you open once on a display — a projector, a television, a tablet — after which you choose what the display shows from _Sharly Chess_, without going back to the display. You can:

- pick one of the existing channels, each shown with what it is currently showing;
- create a new one, naming it after the place, such as _Main hall_, or the device, such as _iPad_;
- or create no channel, and select the screen on your display yourself.

What the assistant creates is marked as **designed for** the channel: it comes first when choosing what the channel shows. The channel itself is not changed — choose what it shows from the **Channels** tab, when you are ready.

---

## Creating everything

The last step lists what the answers will create: a new channel first, with its name, then the screens and the tournaments they show, the menu or the rotator with its name, and which of them is designed for the channel. Beside **Back**:

- **Create** creates it all in one go, and takes you to what was created — the menu on the **Menus** tab, the rotator on the **Rotators** tab, or the screen on the **Screens** tab — scrolled into view and briefly highlighted;
- **Create and edit** does the same, then opens the form of what was created: the screen when a single one was created, otherwise the menu or the rotator leading to the screens.

A menu or a rotator created by the assistant is named after what it holds, such as _Result entry_, _Check-in_ or _Round-robin grids_, then _Check-in (2)_ if the name is taken.

Everything it creates is an ordinary screen, menu, rotator or channel: refine it afterwards from its own tab, like any other.
