---
layout: page
title: Creating an Event
permalink: /creating-an-event/
page_id: creating-an-event
parent: Running an Event
nav_order: 100
---

# Creating an Event

Events are created from the arbiter’s home page by clicking the **Create Event** button.

Some basic information is required to set up an event, but most fields can be left with their default values and filled in later.

| **Public Event** | Relevant only if you're using other devices on your [network]({% link docs/network/index.en.md %}) to display [Screens]({% link docs/screens/index.en.md %}). Only events marked as _public_ will be accessible from those devices. |
| **Federation** | The chess federation responsible for the event. This information will be included in the TRF export.  Note that the availablility of federation specific plugins also depend on this field.  You can set a default federation for all Events in your _Sharly Chess_ settings. |
| **Event type** | Whether this is an _individual_ event or a _team_ event. It is chosen here, at creation, and **cannot be changed afterwards** — it determines the pairing systems, documents and screens available. See [Team events]({% link docs/team-tournaments/index.en.md %}). |
| **Name** | A user-friendly name, used for display purposes (e.g. on [Screens]({% link docs/screens/index.en.md %})).
| **Dates** | The start and end dates of the event. Used for sorting events and included in the TRF export. |
| **Location** | The location of the event (e.g. city or venue). |
| **Rating source by default** | The kind of rating the tournaments rank their players on, unless they [override it]({% link docs/running-an-event/managing-tournaments.en.md %}#ratings): _FIDE_; National; _FIDE_, then national; National, then _FIDE_; Highest of _FIDE_ and national; Lowest of _FIDE_ and national. |
| **Check the ratings against the lists** | On by default. Warns on the Players page when the rating lists give some players a different rating (see [Ratings]({% link docs/running-an-event/ratings.en.md %}#automatic-check)). |

You can also activate any plugins that you'll need for this event.

## Sharing Events

The preferred format for sharing events between _Sharly Chess_ users is the _SCE_ format (**S**harly **C**hess **E**vent).

Events can be:
- exported with the **Export** button, either on the event card of the home page or in the event's configuration window (the pencil icon on the event card)
- imported from the homepage (Create an event > Import an SCE file)

When exporting, you choose whether to include the players, their private data (emails, phone numbers…) and the credentials used to upload results.
