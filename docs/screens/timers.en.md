---
layout: page
title: Timers
parent: Display
permalink: /timers/
page_id: timers
nav_order: 600
---

# Timers

Screens, on one page or over several pages, and rotators can show a countdown timer — useful for showing how much time remains before check-in closes, before the next round begins, and more.

---

## Creating a timer

On the **Display → Timers** tab, or on the **Guide** tab, click **Create a timer**. Its name is _Timer_ to start with, then _Timer (2)_ and so on.

Each timer goes through **three phases**, set by three delays:

- The timer is **green** until the first delay before the scheduled time — _15 minutes_ by default. From that point, it turns gradually **orange**.
- It is **orange** from the second delay before the scheduled time — _5 minutes_ by default — and turns gradually **red**.
- It is **red** once the scheduled time is reached, and stays red for the third delay — _10 minutes_ by default.
  After this period, the timer automatically rolls forward to the next scheduled time and turns green again.

The colours are the same on every screen and cannot be changed. The default delays of the event can be changed with the settings button of the **Timers** tab.

---

## Scheduling the hours

Click the timer's **Hours** button to define its schedule. Each hour has a date and time, and a text shown before and after it — for example _Start of round 3 in %s_, where `%s` is replaced by the time left.

**Create hours from tournament** fills in the schedule from the round times of a tournament, so that the timer counts down to each round.

---

## Displaying a timer

There are two ways to choose where a timer appears:

- from the timer, with its **Screens** button, which lets you choose all the screens and rotators that show it at once. The window groups the screens by screen type, screens on one page and over several pages together, and each carries a badge for the channels it is designed for and, if it has several pages, its number of pages;
- from a screen or a rotator, by choosing the timer in its **Timer** field.

The timer is then displayed on those screens and updates automatically according to its schedule.

