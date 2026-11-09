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

On the **Display → Rotators** tab, click **Create a rotator**. Besides its name, a rotator has:

- a **delay**, the number of seconds each screen is shown;
- a **timer**, shown on all its screens;
- an **alert message**, shown on all its screens, or the alert message of each screen.

Then click the rotator's **Screens** button to choose what it shows. The **+ Screens** button opens a single list holding both the screens and the paged screens, grouped by screen type; a paged screen carries its number of pages. Choose as many as you like — the same screen can even appear twice — and drag them to set their order.

When the rotator reaches a **paged screen**, it shows each of its pages in turn. Each page is shown for the paged screen's **seconds per page**, if it sets one, and otherwise for the rotator's delay.

{: .warning }
> :warning: Rotators are made for _displaying_ screens, not for _entering_ anything. Screens that accept input — results or check-ins — cannot be added to a rotator, so that they do not change under someone using them.

---

## Showing a rotator

A rotator can be opened directly with its <i class="bi-eye"></i> **view** button, or sent to a [feed]({% link docs/screens/display-controllers.en.md %}) with its <i class="bi-box-arrow-in-right"></i> button, so that every device following the feed goes through its screens.
