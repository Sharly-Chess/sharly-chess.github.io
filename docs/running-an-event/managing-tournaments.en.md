---
layout: page
title: Managing Tournaments
permalink: /managing-tournaments/
page_id: managing-tournaments
parent: Running an Event
nav_order: 200
---

# Managing Tournaments

## Creating a Tournament

Once you've created an Event, you can add one or more Tournaments to it.
From the navigation menu, click **Tournaments** to open the Tournaments page, then click the **Create Tournament** button.

### Properties

| **Name** | A user-friendly name used for display purposes (e.g. on [Screens]({% link docs/screens/index.en.md %})).
| **Rounds** | The number of rounds in the tournament. |
| **Rating** | The rating type of the tournament — Standard, Rapid, or Blitz. |
| **Rating to use** | Specifies if tournaments will use FIDE or national ratings. |
| **Dates** | The tournament’s start and end dates (overrides the event-level values). |
| **Location** | The location of the tournament (overrides the event-level value). |

### Unrated Players

| **Seeding of unrated rapid/blitz** | See [the FAQ entry]({% link dev/faq.en.md %}#standard-rating) for details.

### Pairings

| **Pairing system** | Choose between swiss and round-robin pairings. |
| **Pairing variation** | Allow you to choose variants of the pairing system. |
| **First board number** | The first board number to use for pairings of this tournament. |
| **Max byes** | The maximum number of byes a player may request. |
| **Nb. final rounds without byes** | Number of final rounds in which byes are not permitted. |

### Time Control

You can define the time control for the tournament.  This will be added to the TRF export.

### Rules

| **Rules file location** | A link to the tournament rules document. |
| **Illegal move recording** | Enables tracking of illegal moves per player. You can define a maximum here. |
| **Point counting** | Choose between the standard 1-0.5-0 point system or the 3-1-0 system. |
| **Value of the pairing allocated bye** | The number of points awarded to a player receiving a pairing allocated bye |

[Plugins]({% link docs/plugins/index.en.md %}) may add extra fields to the tournament form depending on their functionality.

---

## Tournament options

Once you've created a tournament it's displayed on the Tournaments page. Each tournament has a number of options that can be accessed, such as:

- The ability to edit the fields set during creation
- The ability to download it in various formats (including TRF)
- Updating the player information from the latest database versions provided by the _FIDE_ or local federation
- Duplication and deletion
