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

A timer holds a list of **hours**. Before each hour it counts down to it ("Round 3 starts in 4 minutes"), then shows for a while how long ago it was reached ("Round 3 started 2 minutes ago"), and moves on to the next hour.

---

## Creating a timer

On the **Display → Timers** tab, or on the **Guide** tab, click **Create a timer**. Its name is _Timer_ to start with, then _Timer (2)_ and so on. The window also lists the screens and rotators of the event: tick those that should show the timer. A screen or rotator shows one timer at a time, so ticking one that showed another timer moves it to this one.

When the event has no timer yet and a tournament has a schedule, the **Timers** tab also offers to create a timer from that schedule in one click: the timer is named after the tournament and has an hour for each scheduled round.

---

## Colours and delays

Around each hour, a timer goes through three colours:

- it is **green**, then turns gradually **orange** over the first delay — _15 minutes_ by default;
- it then turns gradually **red** over the second delay — _5 minutes_ by default — and is red when the hour is reached;
- it **stays red** after the hour for the third delay — _10 minutes_ by default — then moves on to the next hour.

With the default delays, a timer is green until 20 minutes before the hour. A delay may be 0: for example, a third delay of 0 makes the timer disappear as soon as the hour is reached.

The delays are written in sentences, over a bar coloured as the timer will be, with a black mark at the hour. The default delays of the event are set with the settings button of the **Timers** tab. A timer can have delays of its own, under **Colours and delays of this timer** in its window; a delay left empty takes the event's. The colours are the same on every screen and cannot be changed.

---

## Scheduling the hours

Click the number of hours of a timer to see its list of hours, grouped by day. Each row shows the time, what the hour is, and the wording the screens will show before and after it.

### Adding an hour

Click **Add**. An hour is one of two kinds:

- **Start of a round**: give the round number. The wording is automatic: "Round 3 starts in 4 minutes", then "Round 3 started 2 minutes ago". An optional label is shown before the round, for example _Opens A–D_ for "Opens A–D: round 3 starts in 4 minutes".
- **Something else**: give a label, such as _Check-in closes_, for "Check-in closes in 4 minutes", then "Check-in closes (2 minutes ago)".

The window previews what the screens will show. To write the texts yourself, open **Customise wording**: write `%s` where the time goes, and leave a text empty to keep the automatic wording.

While the event is running, a new hour starts at the next quarter of an hour. An hour can be set on any day from today to the last day of the event, so a countdown can run while the event is being set up. Two hours of the same timer cannot share the same time, since a timer shows one hour at a time.

### Copying a tournament's schedule

**Copy a schedule** compares the round times of a tournament with the round hours of the timer, matched by their round number. Each round is marked:

- **New**: the round is not in the timer yet and will be added;
- **Moved**: the round is in the timer at another time, shown crossed out, and will be moved; its label and wording are kept;
- **Already in the timer**: nothing to do;
- **Taken**: another hour of the timer is already at that time, and the round is left out.

Untick the rounds you do not want, then click **Copy**. The timer is not linked to the tournament: when the tournament's schedule changes, copy it again to bring the timer up to date. Since rounds are matched by their number, a timer that counts down to several tournaments starting at the same times needs the schedule of only one of them; tournaments played at different times are best given a timer each.

### Postponing

When a round starts late, click **Postpone** on its hour. Choose 5, 10, 15 or 30 minutes, or type another number. The later hours of the same day are postponed with it unless you untick that box. An hour cannot be postponed onto the time of another hour that stays where it is.

---

## Quick countdown

To show "Next round in 10 minutes" without preparing anything, click **Quick countdown**, on the **Timers** tab or in the bar of the other Display tabs. Give a label — _Next round_ by default — then choose 5, 10, 15 or 30 minutes, or a time of the day. Tick the timers to add it to: by default, those already shown on a screen or a rotator. **A new timer** creates a timer for it, whose screens are chosen next.

The countdown is an ordinary hour of each timer chosen, which goes back to its own hours afterwards. It stays in the list of hours, where it can be edited, postponed or deleted.

---

## Displaying a timer

There are three ways to choose where a timer appears:

- when creating the timer, by ticking its screens and rotators;
- from the list of timers, with the **Displayed on** column or the **Screens** button of the card, which lets you choose all the screens and rotators that show it at once. The window groups the screens by screen type, screens on one page and over several pages together, and each carries a badge for the channels it is designed for and, if it has several pages, its number of pages;
- from a screen or a rotator, by choosing the timer in its **Timer** field.

The timer is then displayed on those screens and updates automatically according to its hours.
