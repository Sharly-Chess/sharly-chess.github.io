---
layout: page
title: ChessEvent
parent: For France
permalink: /plugins/france/chessevent
page_id: chessevent-plugin
nav_order: 500
---

# The ChessEvent Plugin

The **ChessEvent** plugin allows you to interface with the _ChessEvent_ registration platform operated by the Brittany Chess League.

## Accessing the ChessEvent Platform

Activating this plugin adds the following functionality to Sharly Chess:
- Retrieving tournament registrations from the _ChessEvent_ platform.

## Using the Plugin

To retrieve tournament registrations from the _ChessEvent_ platform, you must specify the following information in the tournament configuration:
- the username used to log in to the _ChessEvent_ platform;
- the password used to log in to the _ChessEvent_ platform;
- the _ChessEvent_ event ID (on the _ChessEvent_ platform);
- the tournament ID (on the _ChessEvent_ platform).

{: .note }
> :information_source: The _ChessEvent_ ID and password, as well as the event name on the _ChessEvent_ platform, can be defined in _Sharly Chess_ at event-level and used by default by all tournaments in the event.

## Exemple

{% figure [caption: "How to retrieve the necessary information on the ChessEvent platform"] %}
![How to retrieve the necessary information on the ChessEvent platform](/assets/images/chessevent/chessevent-example.jpg)
{% endfigure %}

For this tournament:

- the _ChessEvent_ ID is in the page URL (here `BRE_35_Bretagnejeunes2025`);
- the tournament ID is the text of the corresponding button (here `Tournoi U12`).
