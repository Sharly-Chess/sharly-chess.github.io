---
layout: page
title: ChessEvent
parent: For France
permalink: /plugins/france/chessevent
page_id: chessevent-plugin
nav_order: 500
---

# The _ChessEvent_ Plugin

The **ChessEvent** plugin allows you to interface with the _ChessEvent_ registration platform operated by the Brittany Chess League.
Activating this plugin allows you to import tournament registrations from the _ChessEvent_ platform.

## Using the Plugin

To retrieve tournament registrations from the _ChessEvent_ platform, you must specify the following information in the _Event_ configuration:

- the username used to log in to the _ChessEvent_ platform
- the password used to log in to the _ChessEvent_ platform
- the _ChessEvent_ event ID (on the _ChessEvent_ platform)

## Exemple

{% figure [caption: "Example event on the _ChessEvent_ platform"] %}
![Example event on the _ChessEvent_ platform](/assets/images/chessevent/chessevent-example.jpg)
{% endfigure %}

For this tournament the _ChessEvent_ ID is in the page URL (here `BRE_35_Bretagnejeunes2025`);

Once set up, you can import a tournament via the **Import a Tournament** button on the _Tournaments_ page.
But default the username, password and _ChessEvent_ event will be those that you just configured at the _Event_ level, although you can override them if necessary.  You'll also be asked for the tournament ID (`Tournoi U12` in the example above).

This will create a new tournament with the players from the _ChessEvent_ platform.

Once all the tournaments have been imported, the option **Synchronize with ChessEvent** of the _Actions_ menu on the tournaments page allows you to update your tournaments with the latest data from _ChessEvent_.

{: .warning }
> :warning: Synchronizing a tournament will delete all existing players and replace them with the new list.
