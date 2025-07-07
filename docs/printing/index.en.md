---
layout: page
title: Printing
permalink: /printing
page_id: printing
nav_order: 350
---

## Printing

The print dialog can be accessed in two ways:

- Via the **"Print"** option in the sidebar navigation
- From the **actions menu** on a tournament card (on the tournaments page). In this case, the tournament will be preselected in the print dialog.

Sharly Chess can generate a wide variety of documents intended for display during a tournament.
The selected document will open in a new browser tab, allowing you to print it as you would any standard document.

Here’s a brief overview of the available document types:

---

### List of Players

In FIDE tournaments, it is mandatory to display a full list of players. This document includes each player’s name, rating, age category, gender, federation, and club.

---

### Check-in List

Sharly Chess offers several ways to check players in before the start of a tournament. Arbiters can:

- Manually check players in using the Sharly Chess interface
- Allow players to check themselves in via a [Screen]({% link docs/screens/single-screens.en.md %}) using a tablet or computer

Alternatively, you can opt for a more traditional approach with a printed check-in list. It includes:

- A checkbox for attendance
- The player’s name, rating, age category, gender, etc.
- Paid and due amounts
- And comments associated with the player

---

### Pairings

Once the tournament is running, you’ll likely want to display the pairings for each round. This listing includes all pairings for the selected round, showing board numbers and current points.

---

### Berger Grid

Used in round-robin tournaments, this grid displays all pairings for every round.

---

### Results

This listing is identical to the pairings list but includes the results of each game.

---

### Ranking

Displays the current tournament standings, including player scores and tie-break values.

---

### Crosstable

Provides a comprehensive overview of the current standings, including round-by-round results for each player.

---

### Round Performance Indicators

This document ranks players based on their performance in a **specific round** (_not_ the entire tournament).

The score reflects how well a player performed **relative to their own rating**, using a version of the rating change formula with a fixed K-factor of 20. It represents the number of rating points a player would gain or lose based on the result of that single game.

This system can be useful for awarding per-round prizes or for any other creative ideas that organisers may have.

{: .note }
> :information_source: This isn’t exactly the same as the official rating change a player would see in a FIDE-rated tournament.
> FIDE caps the rating difference at 400 points, uses different K-factors for younger players and newcomers,
> rounds results to whole numbers, and does not calculate rating changes for unrated players.
> For this listing, we apply the same simplified system to all players in order to allow fair comparison across the board.

---

### Prize List

Prints the list of prizes defined for the tournament. According to FIDE regulations, this list must be displayed no later than halfway through the event.

---

### Prize Assignment

Once the tournament is complete, you can generate the list of prize winners based on final standings.
