---
layout: page
title: Features
permalink: /features/
page_id: features
nav_order: 150
---

# Features

This page presents the features of _Sharly Chess_, a complete chess competition management suite.

## Events & tournaments

- **Multiple tournaments per event** — group tournaments however you like (for example by rating range) within a single event. See [Creating an Event]({% link docs/running-an-event/creating-an-event.en.md %}).
- **Individual or team events** — each event is one or the other, chosen at creation.
- **Player distribution** — bulk-split your player pool across the tournaments in an event, by rating or by each tournament's criteria, with balanced groups and club separation.
- **Event categorisation** — colour-coded tags to organise your events; pre-configured and customisable.
- **Public & organiser details** — location, organiser name, email, director, homepage, plus public-display colours and timer settings.
- **Tournament formats** — Swiss, round robin, knock-out, team Swiss, team round robin, team knock-out, plus fixed-table (Molter) and Scheveningen variations. See [Managing Tournaments]({% link docs/running-an-event/managing-tournaments.en.md %}).
- **Rating cadence & source** — Standard / Rapid / Blitz per tournament; _FIDE_ / National / Estimated rating source, with overrides.
- **Round scheduling** — per-round dates and times.
- **Manual point adjustments** — per-player and per-team bonuses or penalties, each with a reason, folded into standings, tie-breaks and the TRF export.
- **Byes** — zero / half / full-point byes, pairing-allocated byes, a maximum-byes cap, and a "no byes in the last N rounds" rule.
- **Check-in** — mark players (or teams) present, absent or withdrawn; optionally let them check themselves in. See [Check-in Process]({% link docs/running-an-event/check-in-process.en.md %}).
- **Illegal-move recording** — with a configurable per-game cap.
- **Statistics** — gender, federation, club, category and rating-type counts, plus min / max / average rating.
- **Arbiters** — chief, deputy and the aggregated arbiter list.

## Pairings

- **_FIDE_-compliant Swiss** — Dutch-system pairings via the _BbpPairings_ engine, with a built-in consistency checker.
- **Round robin & double round robin** — all-play-all, singly or twice with reversed colours, with the _FIDE_ 6.6 participation rule.
- **Knock-out** — single and double elimination, one-game or two-game matches, third-place playoff, grouped seeding and advancement tie-breaks, for players and for teams. See [Knock-out]({% link docs/running-an-event/knockout.en.md %}).
- **Team pairings** — team Swiss, team round robin, team double round robin, team knock-out, Scheveningen (standard and double) and Molter tables. See [Team pairing systems]({% link docs/team-tournaments/pairing-systems.en.md %}) and [Molter tables]({% link docs/team-tournaments/molter-tables.en.md %}).
- **Keizer** — flexible pairings designed for long-running club tournaments, pairing the players available each round while allowing occasional absences.
- **Accelerated pairings** — Baku (_FIDE_ Dutch 2026), Haley, Haley Soft, Progressive, Initial-score and custom schemes.
- **Manual control** — pair, unpair, permute and swap by hand at any time. See [Managing Pairings]({% link docs/running-an-event/managing-pairings.en.md %}).
- **Prohibited pairings** — keep players from the same club, federation or team apart; hard rules, or soft rules that relax from the bottom of the field while protecting the top boards.
- **Safety mode** — actions are classified as safe, unsafe or _FIDE_-incompatible and gated according to each round's status, so you can't accidentally break a paired round.

## Tie-breaks

Every _FIDE_ tie-break is supported, for both individual and team tournaments — Buchholz and its variants, Sonneborn-Berger, Koya, direct encounter, performance ratings, and many more. Cutters (No Cut, Cut-1, Cut-2, Median-1, Median-2) and predefined recommended sets (_Sharly Chess_ and _FIDE_) are available, and you can build your own sets.

See [Team scoring & tie-breaks]({% link docs/team-tournaments/scoring-tie-breaks.en.md %}) for the team specifics.

## Championships & Circuits

Aggregate rankings from several tournaments or events into an overall standing, for both individual and team championships. A wide range of scoring rules is available — total points, scaled points, position-based points, ranking points with bonus, average points or rank, count of places or wins, tie-break based, and manual. Players are matched automatically across the source tournaments.

See [Championships]({% link docs/championship/index.en.md %}) and [Championship scoring & tie-breaks]({% link docs/championship/scoring-tie-breaks.en.md %}).

## Prizes

A comprehensive prize-management module:

- **Prize types** — monetary, non-monetary, or hybrid (monetary plus a complementary value).
- **Tied-prize sharing** — none, average, or the Hort system.
- **Flexible structure** — prizes built from reusable player filters (gender, rating, age, rating type, club, federation and more).

See [Prize List]({% link docs/running-an-event/prize-list.en.md %}).

## _FIDE_ title norms

Automatic detection and calculation of GM, IM, WGM and WIM norms following the full _FIDE_ 1.4 ruleset — minimum games, federation diversity, title-holder shares, minimum score, rating floors and performance margins. Includes a per-round audit trail for the IT1 report, a subset searcher for permitted game drops, and a what-if forecaster showing the results still needed to chase a norm.

## Players & teams

- **Player records** — name, date of birth, gender, contact details, federation, club, _FIDE_ ID and fixed-table number, plus amounts owed and paid.
- **Dual title system** — open titles (GM/IM/FM/CM) and women's titles (WGM/WIM/WFM/WCM), shown together where relevant.
- **Ratings** — per-cadence ratings with a defined resolution order, plus rating calculations (initial _FIDE_ rating estimate, K-factor, per-round performance and rating change).
- **Player categories** — fully configurable per event.
- **Managing players** — sortable, filterable table with _FIDE_ search (narrowed by federation, gender, age category and club) and import-with-diff. See [Managing Players]({% link docs/running-an-event/managing-players.en.md %}).
- **Teams** — rosters with size caps and reordering, playing or non-playing captains, team groups, per-round lineups, stable board numbering, team byes, and configurable match-point scoring (e.g. Olympiad 2/1/0). See [Team events]({% link docs/team-tournaments/index.en.md %}) and [Running team rounds]({% link docs/team-tournaments/running-team-rounds.en.md %}).

## Screens & public display

_Sharly Chess_ includes a built-in web server offering a full set of screens for public display and result entry.

- **Screen types** — check-in, results entry, pairings by board or by player, last results, ranking and cross-table, and images.
- **Rotators** — auto-cycling sequences for unattended displays. See [Rotators]({% link docs/screens/rotators.en.md %}).
- **Menus** — see [Menus]({% link docs/screens/menus.en.md %}).
- **Display controllers** — physical screens you can remotely assign to any screen or rotator. See [Display Controllers]({% link docs/screens/display-controllers.en.md %}).
- **Timers** — public countdown timers with configurable colours and delays. See [Timers]({% link docs/screens/timers.en.md %}).
- **Chess 960** — display start positions to the players.

## Documents & printing

A large library of printable documents: player and check-in lists, pairings, round robin schedules, knock-out brackets, Molter and Scheveningen tables, match sheets, results, individual and team rankings, cross-tables, Berger grids, prize lists and receipts, statistics, norm reports, QR codes and place cards. See [Documents]({% link docs/documents/index.en.md %}) for the full list.

[Place cards]({% link docs/documents/place-cards.en.md %}), available for players, boards, pairings and teams, are built from customisable templates — designed in the built-in visual editor, or by hand — with optional crop marks.

## Import, export & data sources

- **Import** — full TRF26 support; direct import of events and players from our [tournament registration platform](https://events.sharly-chess.com); CSV; and federation-specific formats via plugins.
- **Export** — TRF26 (_FIDE_ rating report) and PGN; player exports to CSV, ODS, XLSX and vCard.
- **Data sources** — look players up in the local _FIDE_ database and, via plugins, federation-specific sources (for example _FFE_ online and local, and French-schools). See [Data sources]({% link docs/player-databases/index.en.md %}).

## Network & access control

_Sharly Chess_ can be accessed by other arbiters over the local network, with fine-grained control over who can do what.

- **Access levels** — a ten-level hierarchy from administration down to spectator, scoped to the whole application, an event, or individual tournaments. See [Access levels]({% link docs/network/access-levels.en.md %}).
- **Staff accounts** — Delegate organisational and arbitration tasks. See [Staff Accounts]({% link docs/network/staff.en.md %}).
- **Security** — password-protected accounts and session-based access. See [Security]({% link docs/network/security.en.md %}).

## Web interface

One server serves three audiences at once:

- **Public / spectator** — live screen, rotator and display-controller views that update in real time.
- **On-site input** — result entry and editing, player and team self check-in, and illegal-move recording.
- **Organiser console** — full administration of events, tournaments, players, check-in, pairings and results, teams, prizes, championships, screens, timers, accounts and documents. It adapts to phone screens, so results can be entered from a smartphone in the playing hall.

See [Accessing the User Interface]({% link docs/getting-started/accessing-ui.en.md %}).

## Plugins & integrations

_Sharly Chess_ can be extended with plugins for national federations and specialised needs. See [Plugins]({% link docs/plugins/index.en.md %}).

- **[_FFE_]({% link docs/plugins/france/ffe.en.md %})** (French federation) — _PAPI_ transfer, player search, results upload, licences, French leagues, tie-breaks, rule sets and arbiter titles.
- **_Sharly-Chess.com_** — two-way sync with our online platform for check-in, players, results and event import. See [_Sharly-Chess.com_]({% link docs/events/index.en.md %}).
- **[Chess-Results.com]({% link docs/plugins/chess-results.en.md %})** — upload your results to the international portal.
- **[ChessEvent]({% link docs/plugins/france/chessevent.en.md %})** — download registrations from the French registration platform.
- **[French Schools]({% link docs/plugins/france/french-schools.en.md %})** — support for French scholastic tournaments.
- **[Handicap Games]({% link docs/plugins/handicap-games.en.md %})** — stronger players get less time, with per-round clocks derived from the rating difference.
- **Custom Upload** — upload generated documents to your own FTP location.

## Platform

- **Cross-platform** — runs on Windows, macOS and Linux, with a consistent interface across all three.
- **Works offline** — no internet connection is required to run a tournament.
- **Auto-update** — new releases are detected automatically and can be installed from within Sharly Chess.
- **Multilingual** — English and French included, with ISO, EU and US date formats.
