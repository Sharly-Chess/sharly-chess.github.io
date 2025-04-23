---
layout: page
title: Timers
parent: Screens
permalink: timers/
nav_order: 500
lang: en
---

# Timers

Indivual Screens and Screen Families support displaying a countdown timer — useful for things like showing how much time remains before check-in, when the next round begins, and more.

---

## Creating a Timer

To create a new timer, go to the **Timers** page and click the **Create a Timer** button.

Each timer includes **three phases**, each with its own delay and color:

- **Color #1** (green by default) is displayed until the first delay threshold is reached — _15 minutes_ by default before the scheduled time. From that point, the timer transitions gradually toward **Color #2**.
- **Color #2** (orange by default) is then used during the second phase — starting _5 minutes_ by default before the target time — and transitions toward **Color #3**.
- **Color #3** (red by default) is shown once the target time is reached and remains active for _10 minutes_ by default.
  After this period, the timer automatically rolls forward to the next scheduled time in the set and reverts to **Color #1**.

After confirming the timer's parameters, you’ll be able to define a schedule of specific date/time entries to associate with the timer.

---

## Displaying a Timer

To show a timer on a screen or screen family:

1. Edit the screen (or family) where you want the timer to appear.
2. Choose the desired timer from the **Timer** dropdown menu.

The timer will then be displayed on that screen and update automatically according to the schedule you defined.
