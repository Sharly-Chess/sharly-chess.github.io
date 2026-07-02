---
layout: page
title: Menus
parent: Screens
permalink: /menus/
page_id: menus
nav_order: 250
---

# Menus

A **Menu** groups Screens together so that viewers can navigate between them. When a Screen belongs to a Menu, a navigation bar listing the other Screens of that Menu is shown on top of it.

{: .note }
> :information_source: Menus are not shown by Rotators or Display Controllers.

---

## Predefined Menus

Every event starts with six ready-to-use Menus, one per screen type. Each simply lists **all Screens of that type**:

> <i class="bi-pencil" style="padding-right: 0.3rem"></i> **Results entry** – all Results entry screens<br />
> <i class="bi-box-arrow-in-right" style="padding-right: 0.3rem"></i> **Check-in** – all Check-in screens<br />
> <i class="bi-card-list" style="padding-right: 0.3rem"></i> **Pairings by board** – all Pairings-by-board screens<br />
> <i class="bi-people" style="padding-right: 0.3rem"></i> **Pairings by player** – all Pairings-by-player screens<br />
> <i class="bi-trophy" style="padding-right: 0.3rem"></i> **Ranking** – all Ranking screens<br />
> <i class="bi-list-ol" style="padding-right: 0.3rem"></i> **Last results** – all Last-results screens<br />

These Menus are fully editable — you can rename them, change their content, or delete them like any Menu you create yourself.

---

## Creating a Menu

To create a Menu, go to the **Screens → Menus** menu and click the **Create a menu** button.

A Menu has a single property, its **Name**. Leave it empty (placeholder _Automatic_) to have a name derived automatically from the Menu's content.

---

## Defining a Menu's content

Click the **Content** button on a Menu card to choose what it contains. You can add three kinds of items:

- **Screens** — individual single Screens.
- **Multi-Screens** — a whole **Multi-Screen**; it appears as a single entry opening a submenu of its generated Screens.
- **Screen types** — every Screen of a given type at once (shown as _"All … screens"_).

Drag the items to reorder them; the order is used for the navigation bar.

{: .note }
> :information_source: A Screen or Multi-Screen can belong to **only one Menu**. Items already used elsewhere appear greyed-out in the content picker, with a tooltip such as _"This screen already belongs to a menu."_

---

## How Menus appear to viewers

A Screen automatically shows the navigation bar of the Menu it belongs to — there is no menu selector to set on the Screen itself; simply adding it to a Menu is enough. The bar is only shown when the Menu holds more than one Screen visible to the viewer.

- **Multi-Screens** are shown as a single entry that opens a submenu of their Screens. When a Menu contains only one Multi-Screen, no submenu is used — its Screens are listed directly as the top-level entries.
- The label of each entry comes from the **Menu label** field of the Screen or Multi-Screen (see their configuration). If left empty, a name is derived automatically.

{: .note }
> :information_source: To a public (non-admin) viewer, a Menu only lists **public** Screens; private Screens are hidden.
