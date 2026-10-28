---
layout: page
title: Creating an Event
permalink: /creating-an-event/
page_id: creating-an-event
parent: Running an Event
nav_order: 100
---

# Creating an Event

Events are created from the arbiter’s home page by clicking the **Create event** button.

Only the **Name** is required: every other field has a default value, and can be changed later.

| **Public event** | Only allowed users can see private events. Relevant if you're using other devices on your [network]({% link docs/network/index.en.md %}) to display [Screens]({% link docs/screens/index.en.md %}): only events marked as _public_ will be accessible from those devices. |
| **Allow multi-tournament players** | Allow a player to take part in several tournaments of the event. Individual events only; it can't be turned off once the event has multi-tournament players. |
| **Federation** | The chess federation responsible for the event. This information will be included in the TRF export.  Note that the availablility of federation specific plugins also depend on this field.  You can set a default federation for all Events in your _Sharly Chess_ settings. |
| **Event type** | Whether this is an _individual_ event or a _team_ event. It is chosen here, at creation, and **cannot be changed afterwards** — it determines the pairing systems, documents and screens available. See [Team events]({% link docs/team-tournaments/index.en.md %}). |
| **Name** | Required. A user-friendly name, used for display purposes (e.g. on [Screens]({% link docs/screens/index.en.md %})). |
| **Rating retrieval by default** | The kind of rating the default sequence of the tournaments looks for first, and the one it falls back on, unless they [choose another sequence]({% link docs/running-an-event/managing-tournaments.en.md %}#ratings). |
| **Unrated players** | The rating of the players no list rates and for whom no value is typed, 1400 by default. Each tournament may set its own (see [Ratings]({% link docs/running-an-event/managing-tournaments.en.md %}#ratings)). When a federation plugin prescribes this rating, the field is disabled. |
| **Check the ratings against the lists** | On by default. Warns on the Players page when the rating lists give some players a different rating (see [Ratings]({% link docs/running-an-event/ratings.en.md %}#automatic-check)). |
| **Location** | The location of the event (e.g. city or venue). |
| **Tags** | Free labels to organise and filter the list of events. Tags are shared by all the events of this installation, and are removed when an event is exported or imported. |

The event has no dates of its own: it runs from the start of its first tournament to the end of its last one.

Two sections are collapsed by default:

| **Age categories** | The **Base date** on which the players' age categories are worked out, by default the start date of each tournament (useful for long events crossing two sporting seasons), and the **Start of the sporting season**, January by default. |
| **Organiser** | The **Organiser**, the **Home page**, the **Director** (the person in charge of the event) and the **Contact email**. The home page must be a valid URL and the email a valid address. |

You can also activate any plugins that you'll need for this event. Some ask for more information: for example, a ChessEvent user needs a password.

## Sharing Events

The preferred format for sharing events between _Sharly Chess_ users is the _SCE_ format (**S**harly **C**hess **E**vent).

Events can be:
- exported with the **Export** button, either on the event card of the home page or in the event's configuration window (the pencil icon on the event card)
- imported from the homepage (Create an event > Import an SCE file)

When exporting, you choose whether to include the players, their private data (emails, phone numbers…) and the credentials used to upload results.
