---
layout: page
title: Screen Families
parent: Screens
permalink: /screen-families/
page_id: screen-families
nav_order: 200
---

# Screen Families

If you have a large number of players and want to spread the display across multiple Screens, you could manually create several Screens and assign a subset of boards to each one.
However, that approach can be tedious and error-prone.

_Screen Families_ allow you to automate this process by automatically generating simple Screens for you.

{% figure [caption: "Example of the 'Pairings by Player' screen family split across 12 screens"] %}
![Example of the 'Pairings by Player' screen family split across 12 screens](/assets/images/players-screen.jpg)
{% endfigure %}

---

## Creating a Screen Family

To create a Screen Family, go to the **Screens → Screen Families** menu and click the **Create a Screen Family** button.

The following screen types are available for use in a Screen Family:

> <i class="bi-pencil" style="padding-right: 0.3rem"></i> **Results Entry** – Allows players to check in and enter their results from a shared device.<br />
> <i class="bi-card-list" style="padding-right: 0.3rem"></i> **Pairings by Board** – Displays pairings ordered by board number.<br />
> <i class="bi-people" style="padding-right: 0.3rem"></i> **Pairings by Player** – Displays pairings ordered alphabetically.<br />
> <i class="bi-trophy" style="padding-right: 0.3rem"></i> **Rankings** – Displays the current tournament standings.<br />

When creating a Screen Family, you’ll see the same options available when creating a standard Screen, but with an additional configuration:

You can choose either:

- The **number of Screens** to split the boards across, or
- The **number of boards per Screen** (in which case _Sharly Chess_ will automatically calculate how many Screens are needed)

{: .note }
> :information_source: It's not possible to add more than one tournament to a Screen Family.

---

## Accessing Screens in a Family

To access all Screens in a Family from one screen of this family, use the special value `@family` in your menu configuration. This will automatically add a menu item for **each simple Screen** in the Family.

{: .tip }
> :point_right: On the **Simple Screens** page, enable the **Families** toggle to view all Screens that have been auto-generated as part of a Family.
