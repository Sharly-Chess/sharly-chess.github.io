---
layout: page
title: FIDE mode
permalink: /fide-mode/
page_id: fide-mode
parent: Running an Event
nav_order: 250
---

# FIDE mode

In **FIDE mode**, _Sharly Chess_ keeps a tournament within the _FIDE_ regulations: it refuses the actions they prohibit, warns before the ones they do not describe, and logs every event that breaches the integrity of the pairings, both in the application and in the TRF file of the tournament.

FIDE mode is available for **Swiss** tournaments, and is on by default. Other pairing systems do not have it.

**Team Swiss** tournaments have no FIDE mode, but keep the [log](#the-log): each change to a round the next ones were paired from asks for a confirmation and is logged, as are the changes to the number of rounds and the tie-breaks. Nothing is refused, the settings are not fixed, and the pairings edited by hand are not checked against the pairing engine.

---

## Turning FIDE mode on or off

FIDE mode is a switch in the **Pairings** section of the [tournament form]({% link docs/running-an-event/managing-tournaments.en.md %}).

- **Before the first round is paired**, you can turn it on or off freely.
- **Once the first round is paired**, turning it off takes a two-step confirmation, and is **final**: the tournament can never return to FIDE mode. The TRF records the round FIDE mode was left at, from which the data of the tournament can no longer be trusted.

A tournament that has left FIDE mode shows a red **Not in FIDE mode** badge next to the page title and on its tournament card.

A tournament imported from a TRF file starts in FIDE mode.

---

## Warnings

The warnings follow the levels defined by the _FIDE_ Technical Commission, and cannot be turned off:

| Level | When | What you see |
| --- | --- | --- |
| 2 | An action the regulations do not describe | A notice to acknowledge |
| 3 | An action that does not comply with the regulations, but does no harm | A warning, to confirm or cancel |
| 4 | An action that does not comply, but may be needed | Two successive warnings, the second spelling out the consequences |
| 5 | An action the regulations prohibit | Refused, unless the tournament leaves FIDE mode |

For example, changing a result of a round older than the previous one is prohibited: _Sharly Chess_ offers to leave FIDE mode, through the level 4 double warning, before letting you do it.

---

## Correcting the previous round

The current round was paired from the results of the previous one, so each change to the previous round — a result, a bye, a colour or a pairing — asks for confirmation, one change at a time, and is logged as a **correction**. This applies to the keyboard shortcuts too.

Rounds older than the previous one cannot be changed in FIDE mode.

---

## Correcting a game for the rating report

An error found after the end of the next round is corrected after the tournament, for the rating report only (_FIDE_ C.04.2:4.3): the pairings and the standings keep the game as it was recorded.

In a Swiss tournament, for a round older than the previous one, the board window has a **Rating report correction** section: choose who had white and the right result. The result then shows an asterisk (`*`), whose tooltip gives the correction, and:

- The TRF export gives the game as corrected in the player records, with a comment (`###`) saying what the pairings and the standings used.
- The points and the ranks of the players stay those of the standings.
- The Papi export, and so the results sent to the _FFE_ website, give the game as corrected too: the standings shown there may differ from those of the tournament.
- The correction is listed in the **Log**, and in the _FFE_ **T2 minutes**.

Choosing the game as it was recorded, or **Remove the correction**, removes it.

---

## Manual pairing

The first manual change to the pairings of the current or next round — pairing a player by hand, unpairing a board, swapping colours, or complementary pairings — starts a **manual pairing** of that round, after a confirmation.

While a round is being edited:

- A banner above the pairings shows it, with the **Validate pairings** and **Cancel editing** buttons.
- Results can still be entered, but the next round cannot be paired.
- Pairing two players who already played each other, who must not be paired together, or who would break the colour rules asks for confirmation; so does giving the pairing-allocated bye to a player who cannot have it.
- A notice tells you when both players get the colour opposite to the one they should have.

**Validate pairings** compares your changes with the pairings of the engine. When they match, the round simply leaves editing. When they differ, a double warning shows the engine's pairings next to yours: you can go back to editing, or validate anyway, and the difference is logged.

**Cancel editing** puts the pairings back as they were before your first change, keeping the results entered meanwhile on the boards left unchanged.

---

## Settings that are fixed

Once the tournament has started, in FIDE mode:

- **Points**: the points given to each result, and to the pairing-allocated bye, cannot change. Leave FIDE mode in the same form to change them.
- **Number of rounds**: changing it takes a double warning, and is logged. When the last paired round becomes, or stops being, the final round, its pairings are checked again against the engine.
- **Tie-breaks**: they are locked; a double warning unlocks them, and each change is logged with the former list.
- **Prohibited pairings**: they are announced before the first round, and cannot change once it is paired.

Setting a **maximum number of byes** above one — the _FIDE_ regulations allow one half-point bye per tournament — asks for confirmation, at any time.

---

## Importing a TRF file

After a TRF file is imported, _Sharly Chess_ pairs each imported round again, from the rounds before it, and compares the result with the imported pairings. The rounds that differ are listed, and logged. When the file had to be completed to be imported (older TRF formats), the list of what was filled in is shown too, as a wrong assumption can make a round differ.

---

## The log

Every event that breaches the integrity of the pairings, and every change to the fixed settings, is logged:

- The **Log** button of the pairings page lists them, one sentence each, with the round and the date.
- The TRF export writes them as comments (`###`), in the formats recommended by the _FIDE_ Technical Commission.
- The _FFE_ **T2 minutes** document opens with them, in French.

The log names the players, whatever becomes of their pairing numbers later.
