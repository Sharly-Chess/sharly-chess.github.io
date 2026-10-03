---
layout: page
title: Data sources
permalink: /data-sources/
page_id: data-sources
nav_order: 400
---

# Data sources

Data sources are used to find players when adding them to a tournament, to import them from a file by their identifier, and to update their data (ratings, titles, club…) from the latest lists.

Two kinds of sources exist:

- **local databases**, downloaded on your machine and searched without an internet connection during the event: the _FIDE_ list and the rating lists of national federations;
- **online sources**, queried live: for example the _FFE_ website, provided by its [plugin]({% link docs/plugins/index.en.md %}).

## Available databases

The **_FIDE_ database** is built from the list _FIDE_ publishes every month: every registered player, with their identifier, federation, titles, standard, rapid and blitz ratings and K factors.

The lists of the following federations are also converted by _Sharly Chess_ from the files the federations publish:

| Federation | Database | Rate of play | Also carries |
|---|---|---|---|
| Canada | CFC | standard, quick (rapid and blitz) | _FIDE_ id |
| Czech Republic | LOK | standard, rapid | _FIDE_ id, club, date of birth, gender |
| Denmark | DSU | standard, rapid, blitz | _FIDE_ id, club, year of birth |
| England | ECF | standard, rapid, blitz | _FIDE_ id, club, gender |
| Finland | SELO | standard | club |
| France | FFE | standard, rapid, blitz | licence, league, club, date of birth, gender (via the _FFE_ plugin) |
| Germany | DSB | standard (DWZ) | _FIDE_ id and ratings, club, year of birth, gender |
| Indonesia | Percasi | standard, rapid, blitz | _FIDE_ id, province, gender |
| Italy | FSI | standard | _FIDE_ id and ratings, date of birth, gender |
| Japan | JCF | standard, rapid | |
| Malaysia | MCF | standard | _FIDE_ id, state, year of birth, gender |
| Netherlands | KNSB | standard, rapid, blitz | title, year of birth, gender |
| New Zealand | NZCF | standard, rapid | _FIDE_ id, club, year of birth |
| Russia | CFR | standard, rapid, blitz | _FIDE_ id, region, year of birth, gender |
| South Africa | CHESSA | standard, rapid, blitz | regional federation, date of birth, gender |
| Ukraine | UCF | standard | _FIDE_ id, region, date of birth, gender |

When a player found in a national list has a _FIDE_ identifier, their _FIDE_ ratings, titles and federation are completed from the _FIDE_ database.

Names are searched without regard to accents or case, and a list written in Cyrillic is searched from a Latin keyboard as well.

## Choosing your data sources

Only the sources you use are shown in the application. The **Data sources** window, opened from the navigation menu, lists the active ones; the **Add a data source** button offers the others, and the bin button of a source withdraws it (and deletes its database).

Some sources are activated for you:

- the _FIDE_ database is active from the start and installed when the application first runs;
- the sources of a federation are activated when you create the first event of that federation (or choose it as your default federation);
- a plugin activates the sources it needs.

## Keeping the databases up to date

For each local database, the window tells how many players it holds and lets you choose to:

- **update automatically** when the database is outdated, after the delay you define (daily, weekly, on the first day of the month…);
- **receive a warning** instead: the "Data sources" option of the menu then shows a warning sign;
- **update manually** at any time — especially handy on the morning of a tournament.

The **Update all** button updates every active list at once.

A list that also has an online version, such as the _FFE_ database, appears once, in the search bar as everywhere else. Its row shows whether the online database can be reached, and lets you choose **Try the installed copy first** (the default) or **Try the online database first**. Every search, every player added from another list (the _FIDE_ one, say) and every ratings check then reads the one you chose first, and the other one when the first cannot be reached, is not installed or finds nothing. The ratings read online say so in their description, for example _FFE online rapid, 03/10/2026_.

The _FIDE_ list is checked every day against _FIDE_'s server. The date on which _FIDE_ published the list is recorded, and shown as the version of the ratings read from it (for the other lists, the version is the day they were fetched). See [Ratings]({% link docs/running-an-event/ratings.en.md %}) for how these versions appear on the players' ratings.

While a database is being installed or updated, its button shows the progress (download, players stored, indexing).

When a federation's file cannot be downloaded by the application (a login is needed), download it yourself and install it with the folder button of the database.

## National identifiers

A player found in a national list keeps the identifier of their federation (the _FFE_ licence number, the KNSB relation number…) next to their _FIDE_ identifier. It is shown on the player form, on the player's record with a link to their page on the federation's website when there is one, and it can be printed on [place cards]({% link docs/documents/place-cards.en.md %}), imported and exported in the players' datasheet, and used to update the players from the federation's list.
