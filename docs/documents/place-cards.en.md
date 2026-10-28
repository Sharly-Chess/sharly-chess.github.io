---
layout: page
title: Place Cards
parent: Documents
permalink: /place-cards/
page_id: place-cards
nav_order: 352
---

# Place Cards Customization Guide

_Sharly Chess_ allows you to generate standard **place cards** that help organize and enhance your tournament setup:

- **Player cards** add a touch of class to your event and make it easier for players to complete their scoresheets.
- **Board cards** display the board numbers, helping players quickly find their assigned tables.
- **Pairing cards** combine both board numbers and player information, providing full visibility for each round.

This page explains how to create and customize your own place card templates.

---

## The place card editor

Place card templates are managed from the **Templates** button next to the template selector, in the place cards section of the [Documents]({% link docs/documents/index.en.md %}) dialog. Templates are shared by all events.

The **template library** lists the **built-in templates**, which cannot be edited, and your **custom templates**. From there you can:

- create a **new template** (choose a name and a type: player, board or pairing cards);
- **duplicate** any template — the usual way to start from a built-in design;
- **import** a template shared by someone else (a `.zip` file) or **export** yours;
- **delete** a custom template;
- **open the editor** on a custom template.

The **editor** shows the card at its real proportions, with **example data** in place of the placeholders so you can preview the result (and switch between several sample players). You can:

- add **text** items and **images** (uploaded from the editor), then drag them into place and drag their edges to set their width;
- set the **card properties**: name, unit (mm or inches), width, height, padding, and whether the card is **two-sided** (foldable);
- set each item's properties in the side panel: the text and its **fields** (with an optional prefix and suffix shown only when the field has a value), the font, size, style (bold, italic, underline, strikethrough, all caps), alignment, colours, opacity, borders, anchor position and stacking order;
- **undo** and **redo**, zoom, and show or hide the item outlines.

Changes are saved to the template as you go: the next generation of place cards uses them.

{: .note }
> :information_source: Content that uses advanced Jinja expressions is shown as-is in the editor and cannot be edited with the block editor.

---

## Foldable cards

To print the same content on both halves of the card, so that it can be folded in two, tick **Foldable (mirrored top)** in the Documents dialog.

For different content on each side, make the template **Two-sided (foldable)** in the editor: the editor then shows both faces, and an item dragged onto the other face moves there.

## Exporting place cards

If you want to share your generated place cards (for example, with someone printing them), simply save the produced **HTML file**.
All resources — including images and fonts — are embedded within a single, self-contained file.

## Place Cards Library

The library below includes standard _Sharly Chess_ place cards and a few examples. Feel free to contribute by sending us your best cards!

{% include_relative place-cards-library-en.md %}
