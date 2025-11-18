---
layout: page
title: Handicap Games
parent: Plugins
permalink: /plugins/handicap-games
page_id: plugins-handicap-games
nav_order: 210
---

The **Handicap Games** plugin is designed for **friendly or club tournaments** where weaker players are given a **time advantage** against stronger opponents.

When enabled, three additional fields become available on the **Tournament Settings** page:

- **Penalty (secs)** – The number of seconds subtracted from the stronger player’s clock.
  This value is multiplied by the number of *Elo steps* separating the two players.
- **Elo step** – The Elo rating difference that defines one handicap step.
  For example, if this is set to 100, a 300-point difference results in three handicap steps.
- **Minimum time (secs)** – The minimum time each player can have, regardless of the rating difference.

The adjusted times for both players are shown on the **Pairings** screen.

{: .note }
> :information_source: You must also supply the time control settings for the tournament.

{: .warning }
> :warning: This plugin is intended for informal or training tournaments only — it should **not** be used for official rated events where players are ranked by Elo.
