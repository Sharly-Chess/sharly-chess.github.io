---
layout: page
title: Prize List
permalink: /prize-list/
page_id: prize-list
parent: Running an Event
nav_order: 600
---

# Prize Lists

Sharly Chess offers a powerful and flexible prize management system to handle a wide variety of tournament prize structures.

## Core Concepts

### Prize Categories

Prizes are grouped into _Prize Categories_ (e.g. U12, Best Female, Rating 1000-200, etc). Each category can:

* Have one or more places (1st, 2nd, etc.)
* Include criteria to filter eligible players

By combining criteria you can create prizes that are specific to your needs, such as "Best Female U12", or "Best unrated player in the league".

One category may be marked as the _Main Prize Category_. It has no criteria and is used for general tournament rankings. You can choose how prizes in this category are awarded in case of ties in the number of points:

- No sharing
- Equal sharing
- Hort system

### Prize Groups

_Prize Categories_ are organized into _Prize Groups_. Players can only win **one prize per group**, but may win prizes in multiple groups.

Players are awarded the **most valuable** prize they qualify for within each group. If two prizes have the same value, the system uses the category order to determine priority.

## Criteria Options for Categories

You can add one or more filters to each category to limit eligibility:

- **Gender**: Male or Female
- **Elo Rating**: Minimum and/or maximum
- **Age Category**: Specify the age categories concernced (e.g. U12), and optionally include all lower or higher age brackets
- **Rating Type**: FIDE, national, or estimated
- **Clubs**: Limit the category to specific clubs
- **Federations**: Limit the category to specific national federations

{: .note }
> :information_source: Plugins may offer additional criteria.

## Prize Types and Values

Each prize can be:

- **Monetary**: If checked, this indicates a cash prize
- **Non-monetary**: Used for trophies, books, etc.

All prizes (monetary or not) should have a value assigned for fair comparison during prize resolution.

{: .tip }
> :point_right: Monetary prizes do not take precedence over non-monetary ones. For example, a player will receive a non-monetary prize valued at 60 instead of a monetary prize of €50, if both are in the same _Prize Group_.  This gives you complete control over the prize structure.

## Viewing and Exporting Results

Once prizes are configured, you can view and print the prize allocations from the Print dialog (via the print icon on the top right of the screen).
