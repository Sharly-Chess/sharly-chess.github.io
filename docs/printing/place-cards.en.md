---
layout: page
title: Place Cards
parent: Printing
permalink: /place-cards/
page_id: place-cards
nav_order: 352
---

## Place Cards Customization Guide

_Sharly Chess_ allows you to print standard **place cards** that help organize and enhance your tournament setup:

- **Player cards** add a touch of class to your event and make it easier for players to complete their scoresheets.
- **Board cards** display the board numbers, helping players quickly find their assigned tables.
- **Pairing cards** combine both board numbers and player information, providing full visibility for each round.

This page explains how to create and customize your own place card templates.

---

## Getting Started

To create a set of custom place cards:

1. Create a folder named `place_cards/` inside the `custom` folder.
2. Inside that folder, create a subfolder for your design — for example:
   `custom/place_cards/test/`
3. Add a template file (with the `.template` extension) inside that folder, e.g.:
   `custom/place_cards/test/boards.template`.

This TOML file defines all the visual and layout properties of your custom place cards.

You can use the default _Sharly Chess_ templates as a starting point — they can be downloaded, modified, and reused (see the **Place Cards Library** at the bottom of this page).

---

## General Properties

| Name          | Description                                                                                        |
|----------------|---------------------------------------------------------------------------------------------------|
| `type`         | The place card type: `player` (default), `board` or `pairing`.                                    |
| `name`         | The template name, used to select it from the available templates (defaults to the filename).     |
| `unit`         | The unit for sizing and positioning elements: `mm` (default) or `in`.                             |
| `padding`      | The card padding, e.g. `2.5`.                                                                     |
| `crop_marks`   | The crop mark style: `corners` (default), `border`, or `none`.                                    |
| `font`         | The name of a TrueType font (place the font file in `custom/place_cards/test/fonts`).             |
| `css`          | Additional CSS styling. (Advanced users only.)                                                    |

All properties are optional. Example:

```toml
type = "player"
name = "My Player Cards"
unit = "mm"
padding = 2.5
crop_marks = "corners"
font = "my_font.ttf"
css = "body { background-color: #ddd }"
```

Or more simply:

```
type = "player"
name = "Named cards"
```

{: .warning }
> :warning: The use of the `css` property is reserved for advanced users.

## Card items

A place card is composed of a set of items to be included in the card, all of which are configurable.
The items are either text (having the `text` property defined) or images (having the `image` property defined).

Each item is defined in a section with a name of your choice (composed of letters, numbers, or dashes, e.g. `elo`):

```
[elo]
text = "{{ player.rating }}{{ player.rating_type }}"
bold = true
h_align = "right"
```

### Text items

Text items can display player information as well as details about the board (for board and pairing cards), the tournament, and the event:

| Information              | Meaning                                                                    | Availability       |
|---------------------------|----------------------------------------------------------------------------|:------------------:|
| `event.name`             | The event name                                                             | any                |
| `event.start`            | The event start date (`event.start.year\|month\|day`)                      | any                |
| `event.stop`             | The event end date (`event.stop.year\|month\|day`)                         | any                |
| `tournament.name`        | The tournament name                                                        | any                |
| `tournament.start`       | The tournament start date (`tournament.start.year\|month\|day`)            | any                |
| `tournament.stop`        | The tournament end date (`tournament.stop.year\|month\|day`)               | any                |
| `board.number`           | The board number                                                           | `board`, `pairing` |
| `board.white_player`     | The white player                                                           | `pairing`          |
| `board.black_player`     | The black player                                                           | `pairing`          |
| `player.full_name`       | The player’s full name (localized according to language)                   | `player`           |
| `player.first_name`      | The player’s first name                                                    | `player`           |
| `player.last_name`       | The player’s last name                                                     | `player`           |
| `player.rating`          | The player’s rating (used for pairings)                                    | `player`           |
| `player.rating_type`     | The rating type (`F` = FIDE, `N` = National, `E` = Estimated)              | `player`           |
| `player.year_of_birth`   | The player’s year of birth                                                 | `player`           |
| `player.gender`          | The player’s gender (single letter)                                        | `player`           |
| `player.title`           | The player’s _FIDE_ title, if any                                          | `player`           |
| `player.federation`      | The player’s federation (three-letter code)                                | `player`           |
| `player.federation_flag` | The flag of the player’s federation                                        | `player`           |
| `player.club`            | The player’s club, if any                                                  | `player`           |
| `player.category`        | The player’s category                                                      | `player`           |

{: .note }
> :information_source: On pairing cards, you can also access data from `board.white_player` and `board.black_player`, for example `board.white_player.full_name`.

{: .note }
> :information_source: Plugins can extend the available information with additional fields.

### Images

Images can also be added to place cards, for example:

```
[logo]
image = "logo.jpg"
width = 20
h_align = "right"
v_align = "bottom"
```

{: .note }
> :information_source: Images must be placed in the folder `images` next to the template file.

## Formatting place cards

### Styles

Styles can be applied:
- globally to all items (declared in the TOML file header)
- or individually to each item (inside its own section)

```
font_size = 14.0
bold = false
italic = false
h_align = "left"
v_align = "top"
h_pos = 0.0
v_pos = 0.0
```

### Foldable (double-sided) cards

For foldable cards, simply check the corresponding box in the print dialog.
The items will be automatically duplicated and printed on both halves of the card so that it can be folded neatly in two.

### Foldable cards with different sides

If you want different content on the front and back, set the property `side = "back"` for the items to appear on the reverse.
By default, items use `side = "front"`.

## Item properties reference

### Styles (templates and items)

| Name               | Meaning                                                                     |
|--------------------|-----------------------------------------------------------------------------|
| `font_size`        | The font size in points.                                                    |
| `bold`             | `true` for bold text, `false` otherwise.                                    |
| `italic`           | `true` for italic text, `false` otherwise.                                  |
| `h_align`          | Horizontal alignment: `left` (default), `center`, or `right`.               |
| `v_align`          | Vertical alignment: `top` (default), `middle`, or `bottom`.                 |
| `h_pos`            | Horizontal offset.                                                          |
| `v_pos`            | Vertical offset.                                                            |
| `opacity`          | Opacity value between `0.0` (transparent) and `1.0` (opaque).               |
| `background_color` | Background color (`#nnn`, `#nnnnnn`, color name, or `rgb(nnn, nnn, nnn)`).  |
| `color`            | Text color.                                                                 |
| `width`            | Width of the place card or item.                                            |
| `height`           | Height of the place card or item.                                           |

### Items only

| Name           | Meaning                                                                          |
|----------------|----------------------------------------------------------------------------------|
| `display`      | `true` to show the item, `false` to hide it.                                     |
| `max_width`    | The maximum width of the item.                                                   |
| `rotate`       | The rotation angle of the item (in degrees).                                     |
| `text`         | The text content of the item.                                                    |
| `preview_text` | The text used in preview mode.                                                   |
| `image`        | The image filename (must be placed in the `images` folder).                      |
| `side`         | `front` to display the item on the front (default), `back` for the reverse side. |

## Exporting place cards

If you want to share your generated place cards (for example, with someone printing them), simply save the produced **HTML file**.
All resources — including images and fonts — are embedded within a single, self-contained file.

## Place Cards Library

The library below includes standard _Sharly Chess_ place cards and a few examples. Feel free to contribute by sending us your best cards!

{% include_relative place-cards-library-en.md %}
