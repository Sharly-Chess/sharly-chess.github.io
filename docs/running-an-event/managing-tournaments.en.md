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

| **ID** | A unique identifier for the tournament, used for URLs and internally by _Sharly Chess_. |
| **Name** | A user-friendly name used for display purposes (e.g. on [Screens]({% link docs/screens/index.en.md %})).
| **Rounds** | The number of rounds in the tournament. |
| **Rating** | The rating type of the tournament — Standard, Rapid, or Blitz. |
| **Start/End** | The tournament’s start and end dates (overrides the event-level values). |
| **Location** | The location of the tournament (overrides the event-level value). |
| **Directory** | Directory where the _[Papi]({% link docs/getting-started/papi-and-sharly-chess.en.md %})_ file will be stored (overrides the event-level value).
| **Filename** | The name of the _Papi_ file. If it doesn't exist yet, you can have Sharly Chess create it for you by clicking the option to create the file. |
| **Time control and increment** | The clock time control and increment for each round. |
| **Illegal move recording** | Enables tracking of illegal moves per player. You can define a maximum here (overrides the event-level value). |
| **Rules file location** | A link to the tournament rules document (overrides the event-level value). |
| **Max byes** | The maximum number of byes a player may request. |
| **Nb. final rounds without byes** | Number of final rounds in which byes are not permitted. |

[Plugins]({% link docs/plugins/index.en.md %}) may add extra fields to the tournament form depending on their functionality.

---

## Tournament options

Once you've created a tournament it's displayed on the Tournaments page.  Each tournament has a number of options that can be accessed, such as:

- The ability to edit the fields set during creation
- The ability to download it in various formats (including TRF)
- Updating the player information from the latest database versions provided by the FIDE or local federation
- Duplication and deletion
