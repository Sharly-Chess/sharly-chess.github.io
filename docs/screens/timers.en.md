---
layout: page
title: Timers
parent: Screens
permalink: /timers/
page_id: timers
nav_order: 500
---

# Timers

Single Screens and Multi-Screens support displaying a countdown timer — useful for things like showing how much time remains before check-in, when the next round begins, and more.

---

## Creating a Timer

To create a new timer, go to the **Timers** page and click the **Create a Timer** button.

Each timer goes through **three phases**, set by three delays:

- The timer is **green** until the first delay before the scheduled time — _15 minutes_ by default. From that point, it turns gradually **orange**.
- It is **orange** from the second delay before the scheduled time — _5 minutes_ by default — and turns gradually **red**.
- It is **red** once the scheduled time is reached, and stays red for the third delay — _10 minutes_ by default.
  After this period, the timer automatically rolls forward to the next scheduled time in the set and turns green again.

The colours are the same on every screen and cannot be changed. The default delays of the event can be changed with the settings button of the **Timers** page.

After confirming the timer's parameters, you’ll be able to define a schedule of specific date/time entries to associate with the timer.

---

## Displaying a Timer

To show a timer on a screen or multi-screen:

1. Edit the screen (or family) where you want the timer to appear.
2. Choose the desired timer from the **Timer** dropdown menu.

The timer will then be displayed on that screen and update automatically according to the schedule you defined.
