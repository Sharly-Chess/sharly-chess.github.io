---
layout: page
title: Tournaments over 30 days
permalink: /rating-periods/
page_id: rating-periods
parent: Running an Event
nav_order: 260
---

# Tournaments over 30 days

_FIDE_ rates a tournament as a single event only when it lasts **30 days or less**. A tournament that runs longer — a club championship over a season, an interclubs competition, a weekly open — is reported in **slices** of at most 30 days, and each slice is registered, submitted and rated as a tournament of its own.

_Sharly Chess_ calls those slices **periods**. You mark the round each one starts at, and everything else follows: the ratings the games are rated on, the files you export, and the uploads to the _FFE_ website.

---

## Splitting a tournament

The **Split for FIDE (max 30 days)** switch sits under the dates of the [tournament form]({% link docs/running-an-event/managing-tournaments.en.md %}), and appears only once those dates span more than 30 days.

With it on, the **Schedule** section shows one card per period, giving its rounds, its dates and its length. Each round carries the controls that move the boundaries:

| Control | What it does |
| --- | --- |
| ✂ | Starts a new period at this round |
| ↑ | Moves this round into the period above |
| ↓ | Moves this round into the period below |
| ✕ | Removes this period, merging it into the one above |

Round 1 always starts a period, so the first card has no ✕. Moving the only round of a period simply removes that period.

A period longer than 30 days is refused when you save, and the message names the first round played more than 30 days after that period started — the round it has to be cut before.

---

## Ratings

Each slice is rated on the ratings in force when it is played (_FIDE_ handbook `B.01` `1.1.4`: in a tournament lasting longer than 30 days, the opponents' ratings **and titles** are those applying when the games were played).

So a player may hold a different rating in each slice, and _Sharly Chess_ keeps one set per slice:

- Updating the ratings from the _FIDE_ database records them **against the slice being played**. The slices before it, and the files already submitted for them, stay as they were.
- The first round of a new period reminds you of this when you pair it.
- The player window edits the slice being played, and lists the earlier slices' ratings below the form, for reference.

Where a rating belongs to one game it is that game's slice; where it summarises the tournament it is the current one:

| Where | Rating shown |
| --- | --- |
| Pairings, results entry, board and pairing print-outs, public screens | the round's slice |
| Standings, crosstable, players list | the current slice |

Norms read each opponent as the round that was played knew them — their rating and their title.

---

## Tie-breaks

Rule `C.07:10` does not recommend rating-based tie-breaks in a tournament where a player may hold more than one rating, and a tie-break that reads a rating says so on its row in the tie-breaks window.

If you use one anyway, **Rating read by rating-based tie-breaks**, in that same window, decides which rating it reads:

- **First rating** — what the rule takes by default, and what _Sharly Chess_ uses unless you choose otherwise;
- **Each game's own period** — the rating the opponent held when the game was played;
- a period named outright.

---

## Exporting a slice

The export menu of the tournament lists a file per period below the whole-tournament entry, for the **TRF** and for the **Papi** alike.

A slice's file is the tournament's own file with the other rounds left empty: the same dates, the same number of rounds, the same players under the same numbers, and only that slice's games filled in. What belongs to the slice is what those games are worth — its points, its standings, and the ratings and titles it was played on. The TRF names itself after the rounds it fills in, so two files of one tournament are told apart.

This is the form the federations' own tools produce, and the rating server takes the results of the rounds that are filled in.

---

## The _FFE_ website

The _FFE_ gives **each tranche its own homologation number**, obtained in advance like any other tournament.

- The **first** tranche uses the tournament's own certification number and password, entered as usual in the tournament form. This is also where the complete results are published for the players.
- **Each following period** has its own certification number and password, on its card in the Schedule section.

Uploading the tournament sends it entire under the first registration, then sends the tranche being played under its own. On the data transfer window each tranche reports its own state — never sent, uploading, sent and when, or its own failure. A tranche already submitted can be sent again on its own, from **Upload period N** in the tournament's _FFE_ menu, which is what a correction to a rated tranche needs.

Only the tournament is made visible on the _FFE_ website; the tranches are registrations for rating, not pages for the players.

One thing to plan for: the _FFE_ closes a registration once its tranche has been sent to _FIDE_. Ask the federation to reopen the first one, so that the complete results of the tournament can go on being published there.
