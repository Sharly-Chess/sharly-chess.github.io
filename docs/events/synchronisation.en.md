---
layout: page
title: Synchronisation
parent: Sharly-Chess.com
permalink: /integration/synchronisation
page_id: integration-synchronisation
nav_order: 200
---

# _Sharly-Chess.com_ — Synchronisation

An event created on _Sharly-Chess.com_ is imported into _Sharly Chess_, which then keeps the two in step: registrations made online arrive in _Sharly Chess_, changes made in _Sharly Chess_ go back to the site, and the pairings and results are published there as the tournaments go on.

---

## Connecting an event

On the list of events, **Import from Sharly-Chess.com** opens the site in your browser. Sign in, choose the event and authorise _Sharly Chess_: the event is created with its tournaments and their registrations.

Everything about the link is then found in the **Data transfer** menu of the event, under **Sharly-Chess.com**.

---

## What is synchronised

**Players**, both ways: registrations, player details and check-ins. A player registered online appears in _Sharly Chess_; a player added, changed or deleted in _Sharly Chess_ is added, changed or deleted on the site.

**Tournaments**, both ways: their name, dates, number of rounds, time control and the other settings the site holds.

**Pairings and results**, from _Sharly Chess_ to the site only, under **Results upload**.

**Synchronize players** synchronises at once. With **Auto-synchronisation** on, _Sharly Chess_ synchronises every 3 minutes, and every minute while a check-in is open.

When the same detail of a player or of a tournament has been changed on both sides since the last synchronisation, _Sharly Chess_ cannot choose between the two values: **Resolve player conflicts** or **Resolve tournament conflicts** shows them side by side so you can pick one. Everything else goes on synchronising in the meantime.

**Resolve duplicated players** lists the players that exist on one side and could not be created on the other because they were already there, so that one of the two can be deleted.

---

## Several computers on one event

Several computers can be connected to the same event at the same time: the organisers handling registrations, the arbiters each running their tournaments. A computer can hold every tournament of the event, or only some of them.

**Connect each computer on its own**, with **Import from Sharly-Chess.com**, rather than copying the event file from one to the other (see [copying an event](#copying-an-event-to-another-computer) below). A computer that only runs some of the tournaments can delete the others once the event is imported: their players stay registered on the site. **Import a Sharly-Chess.com tournament** brings one back later.

The site is the meeting point: each computer sends what it changed and receives what the others changed.

- **Each computer only sends the details it changed.** One person correcting a player's club while another checks the same player in does not undo either change.
- **The same detail changed on two computers** before they synchronise is a conflict, resolved on the computer that synchronises second.
- **Only one computer pairs a tournament and uploads its results.** Results uploaded from two computers for the same tournament replace each other on the site.

### A player removed online after playing

A registration may be cancelled or deleted on the site — by a player, or by an organiser on another computer — once the player has already played. The computer that holds the pairings does not drop the player on its own: the player stays in the tournament as they are, and **Players removed on Sharly-Chess.com** lists them in the **Sharly-Chess.com** window. The **Data transfer** menu shows an error badge until each is dealt with:

- **Withdraw** gives the player a zero-point bye in every round that holds nothing for them yet; the rounds already played, and any bye they had asked for, are kept.
- **Keep** leaves the player in the tournament and registers them on the site again at the next synchronisation.

Check this list before pairing the next round.

### A player moved to another tournament

When a player is moved, online or on another computer, to a tournament this computer does not hold, the player leaves this computer's tournament. A player who has already played stays where they are, and is moved back on the site.

### Changes the site refuses

If the site refuses a change — a value it does not accept, or a momentary error on its side — the last synchronisation shows a failure, the **Data transfer** menu shows an error badge, and the change is sent again at the next synchronisation. The logs say which change was refused and why.

---

## Copying an event to another computer

The connection to _Sharly-Chess.com_ belongs to the computer that made it. When an event file is copied to another computer, the copy does not use that connection: its first synchronisation stops with _Authorisation failed or expired_, and the original computer carries on as before.

The **Authorisation** button of the **Sharly-Chess.com** window connects the copy on its own, after which both computers synchronise. If the original no longer needs to, it is simpler to stop using it.
