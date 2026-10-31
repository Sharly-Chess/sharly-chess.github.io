---
layout: page
title: Online check-in
parent: Sharly-Chess.com
permalink: /integration/check-in
page_id: integration-check-in
nav_order: 150
---

# _Sharly-Chess.com_ — Online check-in

The players of an event linked to _Sharly-Chess.com_ can check in from their own phone, instead of queuing at the desk. Their check-ins reach _Sharly Chess_ by themselves, alongside those you make at the desk.

{: .warning }
> :warning: Online check-in needs an internet connection, on the players' phones **and** on the computer running _Sharly Chess_, which fetches the check-ins from the site. Without a connection at the venue, check players in at the desk or on [input screens]({% link docs/running-an-event/check-in-process.en.md %}) as usual.

---

## Opening the online check-in

The online check-in of each tournament is opened and closed in either place:

- **on _Sharly-Chess.com_**, on the event's **Check-in** page of the organiser space: by hand, or with **Check-in Schedules** that open and close it at set times, and can email the players a reminder beforehand;
- **in _Sharly Chess_**, in the check-in dialog of the **Players** page: the **Sharly-Chess.com** column has a switch for each linked tournament, and a stopwatch whose tooltip shows its schedule, if any.

Players get a personal link to the check-in page, which needs no login, in their registration confirmation email, and again in the reminder of a schedule. Opening a check-in by hand sends no email.

---

## How players check in

Players open the check-in page of the event from:

- the personal link in their registration confirmation or reminder email;
- a QR code displayed at the venue: in the organiser space of _Sharly-Chess.com_, the **Print QR code** button of the event's **Check-in** page opens a poster to print, with the presence code if there is one;
- the event page, which shows a banner while the check-in is open, logging in or asking for a check-in link by email.

They then check in for each of their tournaments, and can undo it until the check-in closes.

### Proof of presence

To make sure players check in from the venue, not from home, you can set a **presence code** on the **Check-in** page of the event: players must then type it to check in. Without one, players can check in from anywhere. Display it at the venue; the printed QR code shows it too, and fills it in for the players who scan it.

### Players who must check in at the desk

A player's online check-in can be disabled (**Disable online check-in** in the player's details on the site): that player must then check in at the desk.

---

## In _Sharly Chess_

While an online check-in is open and **Auto-synchronisation** is on (see [Synchronisation]({% link docs/events/synchronisation.en.md %})), _Sharly Chess_ fetches the check-ins every minute, and whenever the check-in list is displayed. The players checked in online appear checked in, like those checked in at the desk, and a player checked in at the desk appears checked in on the site.

Closing the check-in and handling the players who did not check in is then done in _Sharly Chess_ as usual (see [The check-in process]({% link docs/running-an-event/check-in-process.en.md %})).
