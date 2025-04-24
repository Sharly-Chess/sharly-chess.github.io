---
layout: page
title: Screen Families
parent: Screens
permalink: screen-families/
page_id: screen-families
nav_order: 200
---

# Screen Families

If you have a large number of players and want to spread the display across multiple Screens, you could manually create several Screens and assign a subset of boards to each one.
However, that approach can be tedious and error-prone.

_Screen Families_ allow you to automate this process by automatically generating individual Screens for you.

---

## Creating a Screen Family

To create a Screen Family, go to the **Screen Families** page and click the **Create a Screen Family** button.

The following screen types are available for use in a Screen Family:

- **Results Entry** – Allows players to check in and enter their results from a shared device.
- **Pairings by Board** – Displays pairings ordered by board number.
- **Pairings by Player** – Displays pairings ordered alphabetically.
- **Rankings** – Displays the current tournament standings.

When creating a Screen Family, you’ll see the same options available when creating a standard Screen, but with an additional configuration:

You can choose either:

- The **number of Screens** to split the boards across, or
- The **number of boards per Screen** (in which case _Sharly Chess_ will automatically calculate how many Screens are needed)

{: .note }
> ⓘ It's not possible to add more than one tournament to a Screen Family.

---

## Accessing Screens in a Family

To access all Screens in a Family from a menu, use a special value like `@boards` in your menu configuration. This will automatically add a menu item for **each individual Screen** in the Family.

{: .tip }
> ☞ On the **Individual Screens** page, enable the **Families** toggle to view all Screens that have been auto-generated as part of a Family.
