---
layout: page
title: Check-in Process
permalink: /check-ins/
page_id: check-ins
parent: Running an Event
nav_order: 400
---

# The Check-in Process

Using _Sharly Chess_ to manage player check-ins helps ensure your tournament gets off to a smooth, organized start.

You have several ways to handle check-ins:

- You can check-in players directly from the admin interface.
- If you have tablets or computers available for player use, players can check themselves in via a dedicated input screen.
- Alternatively, if you have multiple machines but prefer to restrict player access, staff or volunteers can use input screens on those devices to assist with check-ins and help distribute the workload.

{: .tip }
> :point_right: If you have a projector at the venue, consider displaying a live list of players and their check-in status. This gives participants immediate visual feedback.

## Opening the Check-in Process

To begin check-in, go to the **Players** page in the admin interface and click the **Check-in** button. You can choose which tournament(s) to open check-in for.

Once active, each player's check-in status will be shown in the table:
- <i class="bi-circle-fill" style="color: #ffc107"></i> not yet checked in
- <i class="bi-circle-fill" style="color: #198754"></i> checked in
- <i class="bi-ban" style="color: #6c757d"></i> absent

Click the icon to toggle a player's status.

{: .tip }
> :point_right: Use the filter option to display only players who haven't checked in yet. This helps quickly identify who’s missing.

To manage check-ins from other devices (like tablets or secondary computers), see the [Screens]({% link docs/screens/index.en.md %}) section.

{: .tip }
> :point_right: You'll need to refresh your browser from time to time to see the changes from other devices.

## Closing the Check-in

When you're ready to start the tournament, close the check-in process by clicking the **Check-in** button again. If any players haven’t checked in, you’ll be asked how to handle them:

- Assign a **zero-point bye** for the upcoming round, or
- Assign **zero-point byes for all remaining rounds** in the tournament.

{: .note }
> :information_source: This action updates the _Papi_ database directly. Affected players will appear greyed out in _Papi_ and will no longer be paired — a major time-saver compared to managing this manually using _Papi_ directly.

## Re-opening Check-in

For multi-day events for which only checked-in players are paired at each round, you may want to re-open check-in at the start of each round. 
When re-opened, all players’ statuses are reset — they’ll need to check in again.
