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

| **Visibility** | Relevant only if you're using other devices on your [network]({% link docs/network/index.en.md %}) to display [Screens]({% link docs/screens/index.en.md %}). Only events marked as _public_ will be accessible from those devices. |
| **Federation** | The chess federation responsible for the event. This information will be included in the TRF export. Note that you can set a default federation for all Events in your _Sharly Chess_ settings. |
| **Name** | A user-friendly name, used for display purposes (e.g. on [Screens]({% link docs/screens/index.en.md %})).
| **Start/End** | The start and end dates of the event. Used for sorting events and included in the TRF export. |
| **Location** | The location of the event (e.g. city or venue). |
| **Currency** | The currency used for display prizes. |
| **Handling of estimated rapid/blitz players** | See [the FAQ entry]({% link dev/faq.en.md %}#standard-rating) for details.
| **Passwords for result entry** | Only relevant if players will enter their results via other devices. The first connection from each device will require this password — useful if you're on an open or shared network. |
| **Illegal move recording** | Allows you to track the number of illegal moves per player. You can define a maximum number here, which can be overridden per tournament. |
| **Rules file location** | A link to the tournament rules document. This can be customized for each tournament. |
| **Alert message color and text** | If you’re using [Screens]({% link docs/screens/index.en.md %}), you can define a scrolling message to appear across the bottom.
