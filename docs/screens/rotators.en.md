---
layout: page
title: Rotators
parent: Display
permalink: /rotators/
page_id: rotators
nav_order: 400
---

# Rotators

A **rotator** shows several screens on one device in turn, automatically — for example the pairings, then the ranking, then the last results on the projector of the playing hall.

---

## Creating a rotator

The [setup assistant]({% link docs/screens/setup-assistant.en.md %}) creates a rotator for you when the grids of several round robins are to turn by themselves.

To create one yourself, click **Create a rotator** on the **Display → Rotators** tab, or on the **Guide** tab. Its name is _Rotator_ to start with, then _Rotator (2)_ and so on; change it to something that tells you where it is shown. Besides its name, a rotator has:

- a **delay**, the number of seconds each screen is shown;
- a [timer]({% link docs/screens/timers.en.md %}), shown on all its screens;
- an **alert message**, shown on all its screens, or the alert message of each screen;
- the [channels]({% link docs/screens/display-controllers.en.md %}) it is **designed for**, which offer it first when choosing what they show.

Then click the rotator's **Screens** button to choose what it shows. The **+ Screens** button opens a single list holding the screens on one page and over several pages, grouped by screen type; each screen carries a badge for the channels it is designed for and, if it has several pages, its number of pages. Choose as many as you like — the same screen can even appear twice — and drag them to set their order.

When the rotator reaches a **screen over several pages**, it shows each of its pages in turn. Each page is shown for that screen's **seconds per page**, if it sets one, and otherwise for the rotator's delay.

{: .warning }
> :warning: Rotators are made for _displaying_ screens, not for _entering_ anything. Screens that accept input — results or check-ins — cannot be added to a rotator, so that they do not change under someone using them.

---

## Showing a rotator

A rotator can be opened directly with its <i class="bi-eye"></i> **view** button, on this computer or on a device on the network, or sent to a [channel]({% link docs/screens/display-controllers.en.md %}) with its <i class="bi-box-arrow-in-right"></i> button, so that every device following the channel goes through its screens.

