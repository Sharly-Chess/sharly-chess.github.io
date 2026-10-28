---
layout: page
title: Documents
permalink: /documents
page_id: documents
nav_order: 350
---

# Documents

The documents dialog can be accessed in two ways:

- Via the **"Documents"** menu of the sidebar navigation
- From the **Actions menu** on a tournament card (on the tournaments page). In this case, the tournament will be preselected in the documents dialog.

Sharly Chess can generate a wide variety of documents intended for display during a tournament.
The selected document will open in a new browser tab, allowing you to print it as you would any standard document.

Here’s a brief overview of the available document types.

---

## List of Players

In _FIDE_ tournaments, it is mandatory to display a full list of players. This document includes each player’s name, rating, age category, gender, federation, and club.

---

## Check-in List

Sharly Chess offers several ways to check players in before the start of a tournament. Arbiters can:

- Manually check players in using the _Sharly Chess_ interface
- Allow players to check themselves in via a [Screen]({% link docs/screens/single-screens.en.md %}) using a tablet or computer

Alternatively, you can opt for a more traditional approach with a printed check-in list. It includes:

- A checkbox for attendance
- The player’s name, rating, age category, gender, etc.
- Paid and due amounts
- And comments associated with the player

---

## Pairings

Once the tournament is running, you’ll likely want to display the pairings for each round. This listing includes all pairings for the selected round, showing board numbers and current points. The **Pairing style** option lists them board by board (**Boards**), or player by player (**Players**), which helps the players find their board.

---

## Berger Grid

Used in round-robin tournaments, this grid displays all pairings for every round.

---

## Round-robin Schedule

Available for round-robin tournaments, individual or team. Built from the Berger tables, it is available before the rounds are paired: one row per match, one column per round, with a legend mapping each Berger number or team letter to its name.

---

## Knock-out Bracket

Available for [knock-out]({% link docs/running-an-event/knockout.en.md %}) tournaments, this document draws the bracket with the results so far. Its **schedule** option lists the same matches chronologically, round by round, with the date and time of each round when they have been set.

---

## Acceleration Rules

Available for Swiss tournaments paired with an [accelerated system]({% link docs/running-an-event/accelerations.en.md %}). It describes the rules of the system, then how they apply to the tournament: the groups, the virtual points granted to each group, round by round, and the players with their group.

---

## Results

This listing is identical to the pairings list but includes the results of each game.

---

## Ranking

Displays the current tournament standings, including player scores and tie-break values.

---

## Individual Team Ranking

_Individual events only._ Ranks teams formed from the players of the tournament, by **Clubs** or by **Federations** (**Type of teams**). The options set the **Number of players per team**, the **Number of W/M per team** (women and men), the maximum number of teams per club or federation, and whether to **Include incomplete teams**.

---

## Crosstable

Provides a comprehensive overview of the current standings, including round-by-round results for each player.

---

## Round Performance Indicators

This document ranks players based on their performance in a **specific round** (_not_ the entire tournament).

The score reflects how well a player performed **relative to their own rating**, using a version of the rating change formula with a fixed K-factor of 20. It represents the number of rating points a player would gain or lose based on the result of that single game.

This system can be useful for awarding per-round prizes or for any other creative ideas that organisers may have.

{: .note }
> :information_source: This isn’t exactly the same as the official rating change a player would see in a _FIDE_-rated tournament.
> _FIDE_ caps the rating difference at 400 points, uses different K-factors for younger players and newcomers,
> rounds results to whole numbers, and does not calculate rating changes for unrated players.
> For this listing, we apply the same simplified system to all players in order to allow fair comparison across the board.

---

## Prize List

Presents the list of prizes defined for the tournament. According to _FIDE_ regulations, this list must be displayed no later than halfway through the event.

---

## Prize Assignment

Once the tournament is complete, you can generate the list of prize winners based on final standings.

---

## Prize Receipts

_Individual events only._ One receipt per prize won, with the payment method (cash, cheque or transfer) and a signature box for the winner or their proxy. Only the monetary prizes are included, unless **Include non-monetary prizes** is ticked.

---

## Statistics

The participation statistics of the selected tournaments: the number of players per tournament, the titled players, the rating types, the age categories, the genders, the federations and the clubs, and the rating ranges with the average rating. The **Club threshold** option hides the clubs with fewer players.

---

## Title Norms

Available for standard time control tournaments with norm-eligible titled players (see [_FIDE_ title norms]({% link docs/features.en.md %}#fide-title-norms)):

- **Tournament Norms Summary** — once the tournament is finished, every title norm achieved, with its performance figures. Once the last round is paired, it shows instead a forecast: what each player in contention needs in the last round to achieve each norm.
- **Norm Report** — the _FIDE_ IT1 form (_Certificate of Title Results_) of a player, also opened from the summary. The **1.4.3 exemption** option applies to national championship finals (1.4.3a) and national team championships (1.4.3b).

---

## Rating Achievement Certificate

Available for tournaments with _FIDE_-rated players. The certificate states the highest intermediate _FIDE_ rating the chosen **Player** reached during the tournament, as titles such as FM, CM, WFM and WCM are gained by a rating achieved at any time (_FIDE_ Title Regulations 1.3). It stops at the earliest finished round after which the intermediate rating is at its highest, and lists the games played until then with the opponent's rating, the result, the expected score and the difference, followed by the calculation of the rating change.

When the rating reaches the requirement of a title the player does not hold, in a standard time control tournament, the certificate names the title. The certificate is in English, to be sent to _FIDE_, and its text can be edited before it is printed or downloaded as a Word file.

---

## QR Code

A QR code to print and display: once connected to the chosen **Network**, the devices scan it to open the _Sharly Chess_ server. [Plugins]({% link docs/plugins/index.en.md %}) add other targets, such as the tournament on [_Chess-Results_]({% link docs/plugins/chess-results.en.md %}) or the event on [_Sharly-Chess.com_]({% link docs/events/index.en.md %}).

---

## Team Documents

Team events have their own documents: match sheets, team pairings, team rankings, team Berger grids, and the Molter and Scheveningen tables. See [Team documents & screens]({% link docs/team-tournaments/documents-and-screens.en.md %}).

---

## Place cards

_Sharly Chess_ offers three document options for creating place cards:

- **Player cards** add a touch of class to your event and make it easier for players to fill in their scoresheets.
- **Board cards** display the board numbers, helping players quickly locate their seats.
- **Pairing cards** combine both board numbers and player information for complete round visibility

Place cards are built from **templates**, which you can create and edit with the built-in editor — see the [Place Cards Customization Guide]({% link docs/documents/place-cards.en.md %}).

{: .tip }
> :point_right: Place cards show the players' names, ratings, clubs… as they stand in the event, so bring the players' ratings up to date first with **Update** › **Player ratings** (see [Ratings]({% link docs/running-an-event/ratings.en.md %}#checking-the-ratings-against-the-lists)). The place cards dialog reminds you to do so.

---

## Plugin Documents

[Plugins]({% link docs/plugins/index.en.md %}) add their own documents, for example:

- the **FFE forms** of the [_FFE_ plugin]({% link docs/plugins/france/ffe.en.md %}): T1 Cover page, T2 Minutes, T3 and T4 licence certificates, T5 Unjustified forfeit investigation, T6 Player exclusion, T7 Player reporting, Arbitration compensation and Cheating complaint;
- the **Chess960 positions** of the _Chess960_ plugin.
