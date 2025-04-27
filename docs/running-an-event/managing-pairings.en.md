---
layout: page
title: Managing Pairings
permalink: /managing-pairings/
page_id: managing-pairings
parent: Running an Event
nav_order: 500
---

# Managing Pairings

Currently, it’s not possible to generate pairings directly from _Sharly Chess_. For now, pairings should continue to be generated manually using _Papi_.
However, once the pairings have been generated, they can be fully managed from the **Pairings** page in the admin interface.

{: .note }
> ⓘ An experimental version of _Sharly Chess_ can generate pairings directly using an open-source library called [bbpPairings](https://github.com/BieremaBoyzProgramming/bbpPairings) — the same library used by several FIDE-endorsed tournament managers.
> Official support for integrated pairing generation is coming soon.

---

## The Pairings Interface

The pairing interface is split into two sections:
- **Left side**: Unpaired players and those who have been assigned a bye (if there are any such players).
- **Right side**: Confirmed pairings for the round.

Navigation controls allow you to switch between tournaments and rounds. You can also toggle between showing all boards or only those still in play.

---

## Manual Pairing

To manually pair players (typically late arrivals), click the pairing button next to a player's name in the unpaired list (left side).
- If there is already a player assigned a pairing-allocated bye and ready to play, you can pair the new player as black against them.
- If not, the player will be assigned a pairing-allocated bye until a suitable opponent is manually paired.

{: .warning }
> ⚠️ Manually pairing players will reassign all the board numbers for the round.  It is **highly** recommended to wait for the end of the round before pairing players manually.
> This is due to a restriction in _Papi_ and will be resolved in a future version once we move to a fully independent database.

---

## Managing Byes

To assign a bye, click the bye button next to a player's name. You’ll be able to:
- Give a **zero-point bye** for the current round.
- Give a **half-point bye** (if allowed).
- Mark the player as **withdrawn** (which assigns a zero-point bye for all remaining rounds).

{: .note }
> ⓘ Depending on tournament settings, you may not be able to assign a half-point bye if the player has already used the maximum allowed, or if the tournament is in its final rounds.

{: .note }
> ⓘ Full-point byes are deprecated by FIDE and not available from the pairings interface. If needed, you can still assign one manually via the **Players** page by viewing the player's tournament _Record_.

---

## Entering Results

Each pairing row includes a button to:
- Enter or edit a result.
- Permute the colours player (if the player's played the wrong colours by mistake).
- Unassign a pairing (if the player's played the wrong opponent by mistake!).

{: .tip }
> ☞ If you have a projector, you can display live results. This allows players to verify that their game was recorded correctly — reducing errors and questions.

---

### Quick Entry Mode

This is ideal for entering many results quickly — especially from a printed list. To use it:

1. Select **Overwrite mode** for keyboard shortcuts.
2. Click on a board row to select it (not the button).
3. Use the following keyboard shortcuts:
   - **1** – White wins
   - **2** – Black wins
   - **3** – Draw
   - **0** – Clear result

Each time a result is entered, the next board will be selected automatically for fast input.

---

### Quick Verification Mode

After entering all results, you can verify them efficiently:

1. Switch to **Highlight mode**.
2. Click a board row to select it.
3. Re-enter results using the same keyboard shortcuts.

If the re-entered result matches, the next board is selected.
If it doesn’t match, the row is highlighted in red and input is paused until you manually select a new board — helping to catch errors quickly.

---

## Self-entry by Players

Instead of entering results yourself, you can provide a device (tablet or laptop) for players to enter the results themselves.
This reduces workload and helps avoid errors. See the [Screens]({% link docs/screens/index.en.md %}) section for setup details.

{: .tip }
> ☞ You’ll need to refresh your browser occasionally to see changes made from other devices.

---

## Correcting Results

You can correct any result using the edit button on the pairing row.

To avoid accidental changes, _Sharly Chess_ will warn you when editing a past round. You’ll have the option to enter **unsafe mode**, which suppresses warnings for further changes to the same round.

Navigating to another round will automatically exit this mode.
