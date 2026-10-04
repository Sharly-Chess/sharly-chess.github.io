---
layout: page
title: Managing Players
permalink: /managing-players/
page_id: managing-players
parent: Running an Event
nav_order: 300
---

# Managing Players

The player list, accessible via the **Players** item in the navigation menu, displays all players added to the Event — across all Tournaments.

You can sort and filter the table using the column headers, making it easy to manage large lists of participants.

## Adding Players

Players can be added using the **Add Player** button.

While you can enter a player's details manually, it’s often quicker and more reliable to use the **_FIDE_ database** or a local federation database (provided via a
[plugin]({% link docs/plugins/index.en.md %})) to search and import existing player records. See the [Player Databases]({% link docs/player-databases/index.en.md %}) section for more details on installing and using these databases.

The search can be **narrowed** with the filter button next to the search field: by **federation**, **gender**, **age category** and **club** (plus licence and league for _FFE_ searches). The **Use a tournament's criteria** button fills the filters in one go from the [criteria]({% link docs/running-an-event/managing-tournaments.en.md %}#criteria) of any tournament of the event — handy when registering players section by section.

## Changing Tournaments and Teams

At the start of an event, it's common for players to switch between tournaments — for example, from an Open section to an under 1600 Elo section. You can update a player’s tournament assignment directly from the **Tournament** field in the Players table.

In a **team event** the same table instead offers a **Team** field, so you can move a player from one team to another the same way.

## Updating Players from the Latest Databases

To keep the players' information up to date, _Sharly Chess_ compares your player list with the latest versions of your [data sources]({% link docs/player-databases/index.en.md %}). The **Update** menu of the Players page (also in the **Actions** › **Update players** menu of a tournament) offers:

| **Player ratings** | Checks each player's ratings against the _FIDE_ list and their national list. See [Checking the ratings against the lists]({% link docs/running-an-event/ratings.en.md %}#checking-the-ratings-against-the-lists). |
| **Player data from:** _source_ | Updates the players' identity from the chosen source: name, _FIDE_ ID, national ID, title, women's title, category, gender, federation and club. The ratings are never changed here. |

In both cases, the differences found are shown for you to review and confirm before they are applied.

The ratings shown in the players table, and the **Ratings** section of the player form, are described on the [Ratings]({% link docs/running-an-event/ratings.en.md %}) page.
