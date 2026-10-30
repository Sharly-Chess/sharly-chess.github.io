---
layout: page
title: Changelog
permalink: /changelog/
page_id: changelog
nav_order: 600
separator: true
---

# Changelog

## :point_right: Version 5.2.0 - TBD
*With version 5.2, Sharly Chess is ready to be submitted to the FIDE for compliance testing as soon as the FIDE opens to new submissions. It keeps Swiss tournaments within the FIDE regulations, logs every change that falls outside the FIDE rules or recommendations, and produces the TRF files the FIDE expects.*

### FIDE compliance

- [_FIDE_ mode]({% link docs/running-an-event/fide-mode.en.md %}) for Swiss tournaments, on by default: actions prohibited by the _FIDE_ regulations are refused unless the tournament leaves _FIDE_ mode; once the first round is paired, a tournament that leaves _FIDE_ mode can never return to it
- A log of every change that falls outside the _FIDE_ rules or recommendations, such as a result corrected after the next round was paired or pairings edited by hand, and of the settings changed during the tournament; it is shown on the pairings page and written as comments in the TRF
- In _FIDE_ mode, each correction to the previous round is confirmed and logged, and older rounds cannot be changed; a wrong result in an older round can still be corrected in the rating report, without changing the pairings or the standings
- Team Swiss tournaments log the corrections to rounds already paired from and the changes to the number of rounds and the tie-breaks, each change asking only for a confirmation
- After a TRF import, each imported round is checked against the pairing engine, and the rounds that differ are listed and logged
- Manual pairings warn about repeated games, prohibited pairings, colour rules and ineligible pairing-allocated byes
- Players can be marked as not eligible for byes (_FIDE_ C.05:6.7.4): no half-point bye can then be assigned to them
- Buchholz tie-breaks can no longer be selected for team round robins, as for individual round robins

### Ratings and data sources

- [National rating lists]({% link docs/player-databases/index.en.md %}): besides the _FIDE_ list, the lists of fifteen federations are downloaded and converted on your machine, to be searched without an internet connection: Canada (CFC), Czech Republic (LOK), Denmark (DSU), England (ECF), Finland (SELO), Germany (DSB), Indonesia (Percasi), Italy (FSI), Japan (JCF), Malaysia (MCF), Netherlands (KNSB), New Zealand (NZCF), Russia (CFR), South Africa (CHESSA) and Ukraine (UCF)
  - A player found in a national list with a _FIDE_ ID gets their _FIDE_ ratings, titles and federation from the _FIDE_ list
  - Names are searched regardless of accents and case, and lists written in Cyrillic can be searched from a Latin keyboard
  - Players keep the identifier of their federation (_FFE_ licence number, KNSB relation number…) next to their _FIDE_ ID; it is shown on the player form and record, with a link to the federation's website, can be printed on place cards, and is imported and exported with the players
  - Only the data sources you use are shown: those of a federation are activated with its first event, and the others can be added from the Data sources window
  - A database the application cannot download (a login is needed) can be installed from a file you downloaded yourself
  - The _FIDE_ list is checked daily, to stay within a day of the one the _FIDE_ publishes
- New rating selection: each tournament ranks its players on the first rating they hold in a sequence of ratings tried, chosen among ready-made options, _FIDE_'s defaults first
  - A sequence can try the _FIDE_ list, the _FIDE_ rating a national list gives, or the national rating, at the tournament's rate of play or another one; two options take the highest or the lowest of the _FIDE_ and national ratings instead
  - Each rating records the list and the date it came from; the tournament shows its kind (_FIDE_, national or estimated), and whether it was corrected or borrowed from another rate of play
  - The arbiter can rank a player on any other rating they hold
  - Players with no rating in any list are ranked on the rating a plugin prescribes (by age for the _FFE_), else on the tournament's or the event's Unrated players value, 1400 by default
  - Update › Player ratings checks the players' ratings against the lists and shows what would change, to apply for the players you choose; a banner on the players tab reports the differences
  - The TRF gives the source of each rating used to rank the players
- [Tournaments over 30 days]({% link docs/running-an-event/rating-periods.en.md %}) can be split into periods of at most 30 days, each rated on the ratings in force when it is played and reported as a tournament of its own

### Publishing rounds

- New pairings can be checked, corrected and printed before anyone sees them: they only reach the screens and the online services when the arbiter publishes the round
  - Until then, the screens and the online services (_Sharly-Chess.com_, _Chess-Results_, _FFE_, custom uploads) stay on the previous round
  - A round can be published once the rounds before it are finished, and unpublished as long as it has no results
  - In round robins and fixed-table tournaments (Molter, Scheveningen), the online services receive the pairings of every round as soon as they are made; publishing a round moves the screens on to it and makes its results public. Publishing replaces the End round button of round robins
  - When the tournament is shown on screens or sent to online services, the pairings page warns that a round is waiting to be published

### Round robins

- Round robins, individual and team, can be paired from a schedule set by hand (the new custom schedule variations) or edited after pairing from the Berger tables
  - The schedule is checked against the round-robin rules before it is saved (each pair meeting once, or twice, and no three games in a row with the same colour)
  - Once results are entered, games played at the wrong boards can be corrected, and a schedule breaking the rules saved anyway, the log and the TRF listing the rules it breaks for as long as it does
- Double round robins can choose whether the last two rounds of the first cycle are reversed, as recommended by _FIDE_ to avoid three games in a row with the same colour
- A player or team that withdrew is dropped from the standings, and their games annulled, as soon as they can no longer complete half of their games, instead of only once the last round has a result

### Results and exports

- Games can be recorded as adjourned in Swiss and round-robin tournaments: they count as draws until their result is entered, which can be done at any time; the standings say they are provisional, and the TRF gives the games as unknown results. In _FIDE_ mode, and in team Swiss tournaments, a result other than a draw entered after the next round is paired asks for confirmation and is logged
- The TRF export is named after its use: _TRF26 (ITDX)_ for a partial file while the tournament is not finished or games have no result, where those games are unknown results; _TRF26 (final)_ for the final report, which alone carries the corrections made for the rating report
- A new _PGN (all rounds)_ export gives the games of every paired round in a single file, and both PGN exports now carry the results of the games, forfeits included, with the round dates, the players' _FIDE_ IDs and teams, and the time control

### Tournaments and prizes

- The exact time control is summarised under the time control of the tournament, in the compact notation of the _FFE_ reports (90'+30", 100'x40+30" → 15'+30")
- Prize brackets can be copied to the other tournaments of the event, and prize categories to any prize bracket of the event, the copy of a main category becoming a regular category when the target bracket already has one; the criteria selecting individual players stay with their own tournament
- Cloning a tournament keeps the ranking basis of the prize categories and the complementary value of the prizes
- The previous and next tournament buttons are back beside the tournament selector of the pairings tab

### Players

- A name format setting (Last First / Last, First / First Last / First, Last), with an option to display last names in capitals, sets how players' names are displayed, whatever the language
- In individual Swiss tournaments, the players with the same rating and title can be ordered in the starting rank by drawing of lots instead of alphabetically

### Tie-breaks and documents

- The rating-based tie-breaks (ARO, TPR, APRO, PTP, APPO and RTNG) can give players without a _FIDE_ or national rating a fixed rating, 1400 by default, instead of their estimated rating
- The rules of the accelerated systems can be printed, from the documents or from the pairing settings: the rules of the system, the groups, the virtual points granted round by round and the players of each group
- Pairing place cards are no longer generated for pairing-allocated byes
- Documents have buttons at the top of the page to print them and to download them as PDF files; the documents with fields to fill in, such as the _FFE_ forms and the norm report, can also be downloaded as Word files, with the values entered in the fields
- A new rating achievement certificate states the highest intermediate _FIDE_ rating a player reached during the tournament, game by game; it is certified by the chief arbiter of the tournament or by the arbiter chosen, and the arbiter can edit its text before printing it or downloading it as a Word file
- Fixed PDFs saved from Firefox, whose text could not be copied: the text of the _FFE_ forms, the _FFE_ pairing sheet and the Chess960 positions can now be copied and pasted

### _Sharly-Chess.com_

- Improved synchronisation with _Sharly-Chess.com_ when several computers run the same event: each sends only the changes it made, a player removed on the site after playing is kept until the arbiter withdraws or keeps them, a player moved to a tournament held on another computer is no longer deleted, conflicts no longer stop the synchronisation, changes the site refuses are reported, and a copied event asks to be connected again instead of disconnecting the original
- The registration fees and the amounts paid on _Sharly-Chess.com_ are imported with the players, and kept up to date when they change on the site; payments recorded at the desk are kept until then
- The payment column of the players tab can be shown even before any player has fees

### Application

- Events are backed up automatically at key moments (before a round is paired or unpaired, a result is changed, players are distributed, or the application is updated), so that the arbiter can quickly return an event to an earlier state if needed; a backup can be restored over the event or beside it, the backups are kept beside the data folder rather than inside it, so either folder can be moved without the other, and you can choose your own backup folder
- Only one _Sharly Chess_ runs on a data folder: starting it again opens the running one in the browser instead of starting a second server on another port, which would write to the same events
- On Windows, the data is stored in the local application data (`%LOCALAPPDATA%\Sharly Chess\data`) instead of the Documents, which cloud services such as OneDrive can synchronise and so block the events while _Sharly Chess_ writes to them
  - The data of the former default folder is moved on the first start, the previous folder being deleted once the copy has been checked
  - A folder chosen in OneDrive, Google Drive, Dropbox or iCloud Drive is moved if the user agrees
- The update settings of the main application window have moved to a new About tab
- Closing the main application window while the server is running asks for a confirmation, since the browsers, the screens and the other computers can no longer reach the application

### _FFE_ (French Chess Federation)

- The _FFE_ T2 minutes open with the events logged for the chosen tournaments
- _FFE_ arbiter titles follow the 2026 reform (Young, Match, Club and Open Arbiter); the _FIDE_ arbiter title (FA or IA) is filled in from the _FFE_ database, and existing accounts are converted following the transition rules of the DNA, the former Elite arbiters becoming _FIDE_ or International Arbiters
- Faster searches in the online _FFE_ database, especially with the federation filter, and much faster matching of imported players; players whose names the _FFE_ database cut or abbreviated (such as `MERCIER-PIQUEM.` for Mercier-Piquemal) are found from their full names, by the online and installed searches and when matching imported players

## Version 5.1.8 - October 19, 2026
- Tournaments with accelerated pairings can be sent to the _FFE_ website again
- When a penalty such as the forfeit penalty of the _FFE_ cups changes the winner of a team match, the next round is now paired on the corrected result, as the standings already showed

## Version 5.1.7 - October 18, 2026
- Update acceleration pairing settings when adding/deleting/updating players to keep existing pairing groups unchanged
- Keep the seed colour undecided when editing the pairing settings without pairing

## Version 5.1.6 - October 14, 2026
- Saving the tournament properties no longer switches off the protection of players of the same club (or any other prohibited-pairings setting) or resets the order of the teams
- Individual round robins (single and double) can be paired with only two players, as team round robins already could with two teams

## Version 5.1.5 - October 12, 2026
- On Linux, the language, federation and date format settings are kept when _Sharly Chess_ is updated, and the application no longer adds lines to `~/.bashrc` each time it starts
- With the Baku acceleration, group A is now always computed from the players entered at the time of the first pairing, even if the pairing settings were saved before more players were entered
- A pairing-allocated bye worth half a point or nothing now counts as a downfloat when pairing, and at its value in Sonneborn-Berger
- Pairing place cards can show the round number, and the tournament start date printed on place cards is no longer the end date
- The _FFE_ practical training certificates (_attestations de stage pratique_) follow the new arbiter titles: AFMatch, AFClub and AFOpen

## Version 5.1.4 - October 7, 2026
- Importing a TRF file of a tournament in progress no longer marks every player as withdrawn: the rounds not paired yet stay unpaired, with the byes already requested for them
- Keizer tournaments can be sent to _Sharly-Chess.com_, with each player's Keizer score shown on the pairings and in the standings
- The standings sent to _Sharly-Chess.com_ show the ranking criteria as in _Sharly Chess_: the points appear once, where they stand among the tie-breaks, the first criterion is in bold, and tied players share a rank
- New soft constraint for prohibited pairings, avoided as much as the pairing rules allow, used by the _FFE_ team cups to keep teams of the same club apart~~~~
- New "Team pairings" document listing the round's team matches on a single table, with each team's points and the match score, without the players
- Pairings-by-board screens of team events can display the matches only, without the players, so team captains find their match at a glance; match headers now show each team's points and the match score

## Version 5.1.3 - October 4, 2026
- On Linux, the server starts again without a display (on a headless server), in console mode
- Direct encounter tie-breaks with games missing between the tied players now follow _FIDE_ Art. 6.3, and AOB is shown to three decimals
- The French School Championship now covers high schools: a category (primary schools, middle schools, high schools) is chosen in the tournament properties, high schools playing on 4 boards with a roster of up to 5 pupils including at least 1 girl and 1 boy; departmental team finals can be chosen as a phase
- Updating the ratings from the reminder shown before pairing the first round no longer skips the window asking what to do with absent players, who were then paired

## Version 5.1.2 - October 1, 2026
- Requested byes (half-point, full-point and zero-point) are now sent to _Sharly-Chess.com_, whose crosstables showed an empty cell and a wrong total for those rounds
- The "All absent" button of the team check-in window is no longer labelled "Toutes présentes" in French
- Unpairing a board no longer renumbers the other tables of the round in compact table numbering

## Version 5.1.1 - September 29, 2026
- Tournaments can be imported from TRF06 and TRF16 files; the import dialog lists every adjustment made to fill in what these older formats lack
- Scoring systems in which two draws are worth more than a win and a loss are refused, as are pairing-allocated byes worth more than a win or, with the standard scoring system, worth anything other than 1, ½ or 0
- Team names with characters the _FFE_ website does not store, such as the "œ" of "Sacré Cœur", no longer make the upload of team competitions fail
- The French School Championship is sent to the school competitions of the _FFE_ website, with the national finals division pre-selected for the national final
- Players removed by the deletion of unpaired players, or by an import replacing the existing players, are now also deleted on _Sharly-Chess.com_, instead of being brought back by the next synchronisation; re-imported players stay linked to their _Sharly-Chess.com_ registration
- The _FFE_ player update now finds players whose licence number is wrong or unknown, by their _FIDE_ ID or else by their name and date (or year) of birth, and proposes the correct licence number; names are compared regardless of case and accents; players still not found despite their licence number (or FIDE ID for the FIDE database) are highlighted in the update window
- Players without a _FIDE_ ID in the _FFE_ database, or with a _FIDE_ ID of 0 in an imported file, no longer prevent the synchronisation with _Sharly-Chess.com_
- Long club names on ranking screens are cut short with an ellipsis instead of wrapping
- The championship rankings show the players' club, on screen and printed, and their year of birth on screen
- The players' year of birth is now shown on _Chess-Results_

## :point_right: Version 5.1.0 - September 24, 2026
- Knock-out pairing system, for individual and team events
  - Single and double elimination, with one-game or two-game (colours reversed) matches
  - Third-place playoff, grand final reset, colour assignment rules (alternate, higher seed White, drawing of lots)
  - Grouped seeding by club, federation or affiliation, with a live preview of the bracket
  - Level matches decided by advancement tie-breaks, or by the arbiter after a play-off
  - Ranking by the round reached; new **Knock-out Bracket** document (diagram or schedule)
- Place cards can now be designed with an embedded visual editor
  - Template library: create, duplicate, import and export templates, shared by all events
  - Templates are accessed from the Documents dialog
- The language, federation and date format settings have moved from the browser to the main application window
- Plugins are now installed and uninstalled from the main application window
- The event export (SCE) has been moved to the event's configuration window
- The administration interface adapts to phone screens
- Team competitions can be uploaded to the _FFE_ website: teams and match reports are filled in from the tournament with the group account, for the competition, division and group chosen in the tournament properties
- Team tournaments can be exported to the _Papi_ format, which describes them as individual Swiss tournaments
- The player search can be narrowed by federation, gender, age category and club (plus licence and league for _FFE_ searches), and the filters can be filled in one go from the criteria of any tournament of the event
- Players of the same club are separated, as much as possible, when distributing players on balanced tournaments
- A reminder to update player data is shown before distributing players across tournaments and before generating place cards
- Exclusion of players (or teams) who have not completed 50% of their games (or matches) in round robins, in accordance with _FIDE_ 6.6
- Ask whether a round should be marked as completed when moving on to the next round of an individual round robin
- Results entered on an administration pairings screen now notify the other administration screens immediately
- The rating difference is now sent to _Chess-Results_ (the _FIDE_ K factor is stored with the player)
- Team tournaments paired on fixed tables (Molter) print the pairings document, with its options, in place of the match sheets
- Bonus / penalty points can no longer be given to an individual player of a team event: team events adjust whole teams
- The team size limit is enforced when importing players from a CSV file, and teams left empty by an overwriting import are deleted
- Fix: the team ranking of fixed-table tournaments (Molter) now shows the game points and the tie-breaks, which were all displayed as zero

## Version 5.0.4 - September 10, 2026
- Improve the compacted sidebar on the home page
- Remove mentions to "modals" in translations
- The match points scored by an absent team can now be set
- The team ranking counts the rounds a team was absent for in a new **F** column
- Fix: Molter tournaments no longer ask for match-point values they never use
- Fix: the lineup editor groups the rounds sharing a lineup again
- Fix: a round taking the previous round's lineup now takes the one it played
- A team can be set to field nobody for a round before it is paired
- Fix: the "warn on lineup out of roster order" setting is honoured again
- Fix: the forfeit column was missing from the ranking screens
- Fix: a team's bye is worth the same to the tie-breaks as to its ranking row
- Fix: a forfeited match counts as unplayed in the tie-breaks, for both teams

## Version 5.0.3 - September 4, 2026
- Fix error status not cleared after reauthentication with _Sharly-Chess.com_
- Fix _Papi_ export to no longer warns that tie-break values will be missing on the _FFE_ website when the points criterion leads the ranking
- A clear indication is now given in the case that an event file becomes locked by another application (anti-virus, drive synchronization, etc.)
- Display a clearer error message when the pairing engine fails to produce pairings
- Improved the display of fixed table numbers
- Base clients on the server date to display the timers
- Improved timer display
- Network clients can now open screens, rotators, and display controllers by clicking anywhere on their card or list row
- The edit pencil on editable table columns is now always visible instead of only appearing on hover
- Fix: searching or importing players no longer crashes when the local _FIDE_ database has not yet been updated to the version 5 format
- Fix: the pairing-system warning icon in the tournament list view now shows its explanation on hover

## Version 5.0.2 - August 28, 2026
- Fixed access to rotators and display controllers from the network
- The player search results now close when clicking outside them
- When creating several players in a row, only the tournament and team are now carried over to the next player
- Fixed a bug concerning the handling of the player's own Keizer score

## Version 5.0.1 - August 27, 2026
- Fixed error trying to recover events from 4.2.8
- Fix place cards documents

## :point_right: Version 5.0.0 - August 26, 2026

- Team event support (Swiss, Round-Robin, Scheveningen and Molter pairings)
- Championship support - aggregates results across independent tournaments
- Desktop application reorganized into tabs
- Added list views to card-based administration pages, with key information in columns and expandable details
- Significantly improved speed of the application
- _FIDE_ title compliance
  - Separate _FIDE_ open and women's titles
  - Intelligent display of _FIDE_ titles (both shown when they matter, women title hidden when the open title supersedes it)
  - Automatic _FIDE_ title population from the _FIDE_ database
- Improved pairing and acceleration management
  - Keizer pairing system - perfect for club tournaments
  - Custom accelerations (acceleration defined round by round)
  - Initial-score accelerated system (virtual points individually granted to players)
  - Pairing settings can be prepared prior to pairing and viewed at any time
  - Warn when top acceleration groups have an odd number of players in round #1
- Improved ranking management
  - Game points are now a ranking criterion in their own right, listed alongside the tie-breaks
  - Bonus/penalty points can be given to players (TRF26 299 record)
- Better handling of fixed tables
  - Tables normally assigned to players are no longer left empty
  - Assign any table number as a fixed table without creating duplicate tables
  - Changing fixed table assignments mid-tournament is now correctly handled, keeping previous round table assignments
  - Sort the admin pairings view, the pairings document and the user pairings screens by pairing order or board number
- FFE-specific fixed tables features (for compatibility with the pairings displayed on the _FFE_ website)
- Custom tags can be created and added to events for easier filtering
- Event creation allowed for access level "Organization"
- Added Curaçao (CUR) federation
- Assign Staff members as arbiters, separately from chief and deputy arbiter roles, included in tournament documents and _Chess-Results_ exports
- Improved prizes management
  - Added a quick way to generate prize categories for age categories and rating ranges
  - Duplicated prize categories are now added immediately after the original
  - Duplicate prizes when duplicating a tournament
- Screen families have been renamed "Multi-Screens"
- Menu support completely redesigned for a better experience
- Improvement of existing screens
  - Check-in screens now correctly use the configured column count
  - Display vertical lines between columns
- New Chess960 plugin for displaying starting positions
- Improved norm reports
  - Norm reports generated before the end of the tournament now assume that players will play the remaining rounds for the purposes of displaying 1.5.6a and 1.4.3d
  - Title norm calculations now take women titles into account: opponents holding a WGM or WIM title are correctly counted towards the 1.4.5 and 1.4.3d requirements, even when they also hold an open title
- Added an option to the pairings document to include a federation column
- Upload custom HTML documents.

## Version 4.2.8 - August 11, 2026
- Fixed _FFE_ export of the Sonneborn-Berger tie-break on 3 points for a win tournaments
- Prevent from adding and importing players with invalid ratings

## Version 4.2.7 - August 1, 2026
- Enable upgrading to version 5

## Version 4.2.6 - July 22, 2026
- Fixed tournament creation when FFE plugin is disabled
- Allow rating based tie-breaks on Round-Robin tournaments

## Version 4.2.5 - July 13, 2026
- Fix previous version recovery freeze
- Norm reports for WGM title holders now include the IM norm

## Version 4.2.4 - July 1, 2026
- Fixed double form submission using the `Enter` key
- Remove trailing spaces from club names
- Fixed `Withdraw from tournament` button absent from the players record modal

## Version 4.2.3 - June 27, 2026
- Fixed player distribution by criteria
- Escape special characters in timer texts
- Fixed players' display on players screens before pairing

## Version 4.2.2 - June 18, 2026
- Fixed export of fixed tables in Papi on not started tournaments

## Version 4.2.1 - June 16, 2026
- Clarify actions on absent players if over half absent players
- Fixed default global background color
- Fixed display controller redirection on results or check-in input
- Fixed tournament import of schools tournaments from _Sharly-Chess.com_
- Fixed import of Papi tie-breaks in TRF26

## :point_right: Version 4.2.0 - June 3, 2026
- Added a new document to get a summary of norms achieved, or a forecast of norms that can be achieved for the final round
- Added options to the norm document for the number of rounds and the event type
- Added detailed calculations for the norm report to allow for easy validation
- Added automatic removal of specific played games in order to try to fulfil the norm requirements
- Fixed a norm calculation bug that incorrectly considered CM and WCM as title-holders
- Added support for norm exemption 1.4.2c (last round forfeit as loss)
- TRF26 import / export
- Added custom team ranking documents
- Improved detection of internet connectivity
- Added missing timeouts to _Sharly-Chess.com_ synchronization
- Prevent moving players from a synced tournament to a not-synced tournament on _Sharly_Chess.com_
- Clarified the _FFE_ rules upload

## Version 4.1.4 - May 13, 2026
- Use category range for age criterion of prizes
- Fixed error 500 before pairing on Results Entry screens with fixed boards

## Version 4.1.3 - May 9, 2026
- Fixed pairing number used instead of rank in rankings table of the Pairings tab

## Version 4.1.2 - May 8, 2026
- Fixed direct encounter bug

## Version 4.1.1 - May 8, 2026
- Fixed redirect when editing players from the Pairings tab
- Set the highest board number when both players have a fixed board
- Fixed players' default check-in value of not started tournaments

## :point_right: Version 4.1.0 - May 7, 2026
- Make check-in system permanent
- Added player check-in and French school to the _Sharly-Chess.com_ synchronization
- Open / close the online check-in from the check-in modal
- New tie-breaks: STD, TPN and RTNG
- Update tie-breaks BH, FB and SB dummy scores according to _FIDE_ Handbook C07.16
- Simplify the tournament criteria, now included in the edit form
- Add simple prize criteria creation from the category modal

## Version 4.0.6 - May 3, 2026
- Fixed keyboard shortcuts
- Search for _GitHub_ updates every hour only
- Also revert the result when permuting board colors
- Fixed schools with no UAI code replacing each other

## Version 4.0.5 - April 23, 2026
- Fixed _Chess-Results.com_ round schedule upload
- Added _check_in_ column to CSV export
- Download _FIDE_ database from _GitHub_
- Speedup _FFE_ database update
- Download _FRA Schools_ database from _GitHub_

## Version 4.0.4 - April 18, 2026
- Fixed error when changing the date multiple times on tournament creation
- Fixed Round-Robin tournament round navigation
- Added new player fields to the _Sharly-Chess.com_ synchronisation (federation, _FFE_ league, _FFE_ licence, comment)

## Version 4.0.3 - April 8, 2026
- Fixed scrolling the first error into view on long forms
- Added event duplication options to include pairings and define a start date
- Fixed tournament schedule dates not selected by default
- Fixed Koya tie-break calculation
- Prevent duplicating prize criteria
- Set rank as the default sort option for Berger grids
- Ensure consistent prize criteria order

## Version 4.0.2 - April 6, 2026
- Invalidate players' year of birth < 1900
- Always export the players' year of birth in CSV export
- Clean display of pairing exceptions
- Fixed prize assignment on multiple main category override
- Fixed tournament still uploadable to _Sharly-Chess.com_ after manual upload
- Fixed unique constraint violation on tournament names on _Sharly-Chess.com_ import

## Version 4.0.1 - April 3, 2026
- Fixed disabled fields behavior in event modal
- Fixed player update
- Fixed player search keyboard selection

## :point_right: Version 4.0.0 - April 2, 2026
- _Sharly-Chess.com_ integration
- Improved the navigation with keyboard shortcuts
- Added round schedule to tournaments
- Improved the _FFE_ and _Chess-Results_ upload modal
- Use Flatpak for Linux build
- Rename _Upload_ menu to _Data Transfer_
- Automatically calculate event dates from tournament dates
- Added an option to allow players in multiple tournaments
- Added _rating_ and _rating_type_ CSV columns
- Clarify gender naming
- Display absent players on top of unpaired players on the Pairings tab
- Added a reminder to update the players' ratings before pairings on round #1 and for tournaments lasting on multiple FIDE periods
- Added owed/paid totals to the check-in list
- Added a sort option to the players list document
- Moved the auto-upload options to the upload modal
- Relocate the rules upload to a group button on the _FFE_ modal
- Moved the _ChessEvent_ synchronize button to the _Data Transfer_ menu
- Added time control handicap info to tournament cards

## Version 3.6.8 - March 29, 2026
- Fixed DE tie-break calculation of double round-robin tournaments
- Fixed time pickers on Firefox-based browsers
- Fixed white flashes on refresh for Firefox-based browsers
- Fixed incoherent forms after an error

## Version 3.6.7 - March 24, 2026
- Fixed player ODS export
- Use UTF-8 encoding for CSV exports
- Return to tournament at the first round with no pairings
- Fixed players list document when players have no club

## Version 3.6.6 - March 15, 2026
- Fixed player check-in on already started tournaments
- Fixed manual tie-break on the Rankings page
- Fixed error message when pairing is impossible

## Version 3.6.5 - March 6, 2026
- Minimized federation flags
- Speed up the update of the local _FFE_ player database

## Version 3.6.4 - March 3, 2026
- Fixed slowness on player search
- Fixed search removed from the Pairings tab after manual result input
- Fixed norm report document access
- Fixed error when accessing database before fully generated

## Version 3.6.3 - February 24, 2026
- Fixed rotators always public
- Restrict document options to the ones that can be generated
- Fixed slowness after document generation
- Added missing fields to the _FFE_ arbiter compensation form

## Version 3.6.2 - February 20, 2026
- Fixed CSV player import with one column
- Fixed player norms computation
- Added a note that norms are only computed based on completed games
- Fixed inaccessible Woman title documents

## Version 3.6.1 - February 19, 2026
- Fixed access to _FFE_ upload modal
- Fixed invalid type on account _FFE_ arbiter title
- Only take into account the players with games played for the ranking by school
- Fixed the number of titled players on norm reports

## :point_right: Version 3.6.0 - February 18, 2026
- Upgrade _bbpPairings_ engine to v6.0.0
- Import events from SCE files
- Push forward SCE export
- Import players from CSV files
- Delete all unpaired players at once
- Display player history on crosstable document
- Distribute the players among the tournaments
- Added criteria type Comment
- Improved the prizes documents
- Added missing link on the family screens card
- Fixed T2 and arbiter compensation _FFE_ forms

## Version 3.5.2 - February 7, 2026
- Remove table header transparency
- Fixed tombola with no players
- Fixed the _All / In play_ button of the Pairings tab

## Version 3.5.1 - January 28, 2026
- Fixed the pairings by player document
- Use score instead of result in history popover

## :point_right: Version 3.5.0 - January 26, 2026
- Renamed menu "Printing" to "Documents"
- Rework of the Players tab
  - All the columns are now sortable
  - Search by name and club is globalized
  - Dynamic columns handling to match the usage
  - Downloading now takes effect on the search results
- Improved plugin _FFE_
  - Added FFE forms to the documents
  - Update FFE players by _FFE_ licence number, _FIDE_ ID (new), then name/DOB
- Improved plugin _FRA Schools_
  - Allow updating the schools data after creation
  - Added schools to the statistics
  - Added an option to show only the complete teams on the schools ranking document
  - Added an overall ranking to the schools ranking document
  - Added option to hide the schools UAI codes on the FFE upload
  - Save the school data for batch player creation
- New type of prizes _Hybrid_
- Improved player filtering on the Players tab
- Deletion of archived events
- Added options to Players Screens to display more pairings with minimal information
- Improve error message when executing from a directory without write permissions
- Display the unpaired players by default on screens and families
- Fixed the creation of player category sets
- Fixed deleted ratings not taken into account during player update
- Fixed the text of player norm tooltips
- Fixed the display of first and last players on family card

## Version 3.4.7 - January 14, 2026
- Use menu links by default for new screen families
- Prevent timeout when updating many players with no licence from the _FFE_ online database

## Version 3.4.6 - January 13, 2026
- Fixed rotator timers display from display controllers
- Enable the _FFE_ plugin by default when switching event federation
- Refresh the networks on the console

## Version 3.4.5 - January 8, 2026
- Update the console after recovering the configuration of a previous version
- Allow batch updating the dates of timer hours
- Fixed PGN exports with Pairing Allocated Bye

## Version 3.4.4 - January 3, 2026
- Fixed login/logout permission error
- Grant the anonymous account's permissions to new accounts
- Add a warning tooltip on the ranking table when no games played on the board
- Update the players with new _FFE_ licences during the player update
- Fixed the update of account roles
- Fixed tournament based permissions applied on all tournaments
- Change the session language when updated from the config
- Use rotator messages prior to screen messages
- Add plugins to the events card
- Display the card of events with disabled plugins

## Version 3.4.3 - December 21, 2025
- Improve error display on upgrade failures
- Fixed the statistics document
- Fixed player search on the local FFE database
- Fixed the display of pairings on the _FFE_ website for accelerated tournaments
- Allow pairing groups to be edited for acceleration systems other than Baku

## Version 3.4.2 - December 17, 2025
- Fixed ordering of events with the same start and stop dates
- Fixed the default age category change month for _FFE_ events
- Fixed `U0` category displayed in default category set

## Version 3.4.1 - December 15, 2025
- Fixed application startup
- Fixed Linux bundles

## :point_right: Version 3.4.0 - December 15, 2025
- Configurable age categories
- Export of events for sharing purposes
- Improved the timer UI
- Added timers to rotators
- Added an option to specify the base date for the age categories
- Prize receipts
- Added "State" field to the _Chess-Results_ export for certain federations
- Both a player's year of birth or the full date of birth and now accepted
- Try to avoid browsers automatically translating the UI
- Fixed late entries ZPBs
- Fixed FIDE ID display on player update
- Linux experimental support
- Recover archived events on upgrade
- Improved upgrade experience

## Version 3.3.6 - December 5, 2025
- Fixed _Papi_ export of unpaired rounds
- Fixed unauthorized error on logout
- Fixed the tie-break search
- Removed `Background image` Screen option default checkbox
- Fixed data sources update

## Version 3.3.5 - December 1, 2025
- Fixed the usage of the `School Competitions` plugin
- Fixed _FFE_ upload of Berger tournament with odd players

## Version 3.3.4 - November 29, 2025
- Make the date format configurable
- Increase the timeout of database download requests
- Prevent manual reordering of 1 tournament
- Fixed the navigation to the current round on the Pairings tab
- Fixed no licence considered as expired licences on _Papi_ import
- Fixed the upload of the `REP` tie-break to _Chess_Results.com_

## Version 3.3.3 - November 24, 2025
- Fixed duplication of staff members
- Prevent double-click on results modal
- Fixed `Display exit button`, `Display unpaired players` and `Display opponents` options always activated
- Fixed `Display unpaired players` option hiding all the players

## Version 3.3.2 - November 21, 2025
- Fixed printing of the player table with multiple tournaments
- Fixed clipping of tables when printed
- Fixed timer translation
- Tag tournaments with the time control type (Standard, Rapid, Blitz) on _Chess-Results.com_

## Version 3.3.1 - November 19, 2025
- Manual ordering of tournaments
- Added colleges (in French: `Lycée`) to the list schools

## :point_right: Version 3.3.0 - November 18, 2025
- Streamlined the user interface
- Printable place cards
- Plugin for French school competitions
- Arbiter declaration (via the Staff tab)
- Organiser information can be added to the Events (and uploaded to _Chess-Results.com_)
- _FIDE_ rating change estimation (via the player's record)
- Moved the handicap feature to a plugin
- Added a QR-code print option to access a tournament on _Chess-Results.com_

## Version 3.2.6 - November 9, 2025
- Fixed PGN export for players with no _FIDE_ rating

## Version 3.2.5 - November 8, 2025
- Fixed the modification of the PAB player's result when withdrawing a player
- Restore player contact data deletion on the _FFE_ upload
- Fixed the league player filter

## Version 3.2.4 - November 6, 2025
- Fixed various issues regarding the Round-Robin tournaments
- Fixed the display of the unsafe mode
- Add _Round_ option for the results print view
- Fixed the Berger grid print view

## Version 3.2.3 - November 1, 2025
- Fixed alphabetical screens display
- Force _FIDE_ rating for _FFE_ events
- When adding rounds, Add ZPBs to withdraw players for these new rounds
- Fixed the player history modal at last round

## Version 3.2.2 - October 30, 2025
- Fixed _Chess-Results_ upload

## Version 3.2.1 - October 30, 2025
- Fixed the player history modal before round 1
- Fixed rounding issues in norm calculations

## :point_right: Version 3.2.0 - October 29, 2025
- Activation of the _FFE_ module only for tournaments held in France (i.e., when the event federation is "FRA")
- Enable/disable plugins per event
- Separate management of _FIDE_ and national ratings (tournament settings specify the rating type to use)
- Availability of all standard _FIDE_ tie-breaks
- Availability of the Baku acceleration system
- Definition of the acceleration pairing groups via pairing numbers replacing rating thresholds
- Publication of results to _Chess-Results.com_ (many thanks to Heinz Herzog for making this possible)
- Printing of player norm certificates, complete with automatic verification of all norm criteria
- Definition of the value of the Pairing Allocated Bye
- Simplified application/event management UI
- Access to the player record from the Pairings tab
- Fixed the display of the score of the current round on the player's history modal
- Support for _Papi_ incompatible tie-breaks in the _Papi_ export and the _FFE_ upload
- Fixed a validation issue which allowed to players with the same FFE licence number to be added to the same tournament
- Ability to note a player's withdraw/re-entry from the player record modal
- Removed the background image option for Screens
- Clarify the error message in case of unknown federation in _ChessEvent_
- Fixed Result entry Screens with illegal moves recording
- Moved the log options to the console

## Version 3.1.7 - October 20, 2025
- Fixed custom image picker
- Fixed the display of board numbers on screen cards
- Fixed the display of fixed board numbers
- Improved the display of player long names on screens
- Allow player search with any whitespace

## Version 3.1.6 - October 12, 2025
- Define the rating type of when importing tournaments from TRF files
- Fixed the _PAPI_ export of players without _FFE_ ID

## Version 3.1.5 - October 8, 2025
- Fixed the display of players with no first name
- Fixed the ChessEvent plugin activation

## Version 3.1.4 - October 6, 2025
- Fixed events import from versions ≤ 2.4.18
- Fixed _PAPI_ export of Round-Robin double Berger tournaments

## Version 3.1.3 - October 5, 2025
- Tournament synchronization with _ChessEvent_

## Version 3.1.2 - October 3, 2025
- Fixed _ChessEvent_ and TRF re-import issue
- Improved player search
- Fixed screen uniq ID update

## Version 3.1.1 - October 1, 2025
- Fixed the player search without tournament
- Added year of birth to search results
- Fixed terminal flashing during the _FFE_ upload
- Restore the app signature
- Fixed TRF import with no games

## :point_right: Version 3.1.0 - September 30, 2025

- Delegation by access level for clients connected to the server
- Tournaments may now have player criteria associated with them
- Dedicated console window
- Improved player search UI and results
- Option to replace an incorrect player with another one
- Improved navigation on the Pairings tab
- Rotator screens can now be reordered
- Importing of tournaments from a TRF file
- Exporting of tournaments to TRF format
- Statistics print view
- QR code print view
- Support for servers with multiple IP addresses
- Multiple tournaments can now be selected for several print views: Players List, Check-in List, Prize List and Assignment, and Statistics
- Import _ChessEvent_ tournament from the web interface (remplaces script `tools/chessevent.bat`)
- Display the check-in status on check-in lists

## Version 3.0.11 - September 26, 2025
- Fix _Papi_ export and _FFE_ upload

## Version 3.0.10 - September 26, 2025
- Fixed estimated ratings for manually created players

## Version 3.0.9 - September 24, 2025
- Fixed the renumbering of duplicated objects

## Version 3.0.8 - September 23, 2025
- Prevent downloading outdated local databases continuously when there is no connexion
- Fixed the "All" / "In play" button of the Pairings tab
- Fixed recovery of the plugin state from a previous version

## Version 3.0.7 - September 16, 2025
- Fixed the tombola
- Increased the timeout of _FFE_ online searches

## Version 3.0.6 - September 13, 2025
- Fixed a bug preventing results upload

## Version 3.0.5 - September 13, 2025
- Fixed the import of the _Papi_ homologation number
- Optimized the write queries in the database

## Version 3.0.4 - September 9, 2025
- Fixed a data difference on rankings in the _Papi_ export

## Version 3.0.3 - September 7, 2025
- Fixed players sort with no firstname
- Fixed the display of rotators when no screen is selected
- Fixed player search on split names
- Re-added board #1 players to pairings in alphabetical order

## Version 3.0.2 - September 5, 2025
- Fixed player search on the Pairings tab
- Accents handling for local _FFE_ database search
- Fixed _Papi_ tournament import
- Fixed export buttons exporting the wrong tournament
- Fixed printing of pairings in alphabetical order

## Version 3.0.1 - September 2nd, 2025
- Fixed previous versions recovering
- Fixed _FFE_ upload after _ChessEvent_ update
- Fixed the display of timers on rotators and display controllers

## :point_right: Version 3.0.0 - September 1st, 2025
- Remove _Papi_ Access storage
- Create tournaments from _Papi_ files
- Export tournaments to _Papi_ format
- Native macOS support (Apple Silicon Macs only)
- Windows version is now recognised as signed by Microsoft Defender
- Removed automatic renumbering of boards when manually pairing
- Allow overriding of unrated rapid/blitz ratings by standard ratings
- Display pairing information: groups, floaters, history and colour preferences
- Added a ranking view on the Pairings tab after the last round of the tournament
- Added player search on the Pairings tab
- Improved UI response times
- Improved alphabetical pairings printing
- Added board IDs in case of fixed boards on screens
- Added tie-breaks to Berger grids
- Added a manual tie-break option
- Added tie-breaks not compatible with _Papi_ (experimental)
- Interactive time control editor
- Added _FIDE_ titles on prize assignments printing
- Restoring of archived events
- Entry of unrated and penalty results
- Removed the 10-character limit on players' phone numbers
- Hide unique IDs

## Version 2.8.9 - August 17, 2025
- Fixed import of players with _FIDE_ Candidate titles from the _FFE_ online server

## Version 2.8.8 - August 12, 2025
- Fixed errors related to activating the _ChessEvent_ plugin

## Version 2.8.7 - August 10, 2025
- Fixed a previous pairings duplication error in case of a BbpPairings error

## Version 2.8.6 - August 6, 2025
- Added alphabetical pairings print document
- Fixed invalid _FIDE_ IDs in _Papi_ files
- Fixed the display of exit button on input screens
- Fixed the names of the default screens
- Added a button to create events from the Archives page

## Version 2.8.5 - August 2, 2025
- Fixed a bug on event creation

## Version 2.8.4 - July 25, 2025
- Fixed the display of points on screens

## Version 2.8.3 - July 24, 2025
- Fixed tournament editing form
- Fixed PGN export players' title
- _Papi_ compatibility for using tie-break Performance for round-robin tournaments
- Omit _FFE_/_ChessEvent_ credentials when duplicating tournaments
- Improved player filtering on players' name and club

## Version 2.8.2 - July 9, 2025
- Fixed the manual results upload to the _FFE_ website
- Fixed deletion of results

## Version 2.8.1 - July 8, 2025
- Fixed navigation between rounds on the Pairings tab
- Reload static resources after upgrading

## :point_right: Version 2.8.0 - July 7, 2025
- Official support for the internal pairing engine
- Complementary pairings generation
- Unsafe operations execution when switching to unsafe mode
- Added the definition and calculation of prizes
- Updated user interface with a sidebar for navigation
- Added a QR code to ease the connection of devices
- Simplified the usage of externals data sources
- Added a "check-in list" print option
- Added a "relative performance" print option
- Added logging parameters and dynamically update the logging configuration
- Removed the `--experimental` option and activate the experimental features from the web UI
- Added the gender on the player views
- Updated federation flags
- Simplified the first startup of the application
- Recover the players database files when upgrading
- 'Create and add another' buttons added to reduce click count when creating objects
- Calculation of the players' category relative to the date of the tournament
- Added the possibility not to show the opponents on pairings screens by alphabetical order

## Version 2.7.10 - July 1, 2025
- Fixed the creation of players with no _FFE_ ID

## Version 2.7.9 - June 18, 2025
- Fixed the duplication of tournament tie-breaks
- Fixed the allocation of byes

## Version 2.7.8 - June 16, 2025
- Fixed the indices of the players databases
- Fixed the display of the Pairings tab when no tournament
- Fixed the board numbering
- Fixed the refresh of results screens
- Restrained the characters that can be used in event IDs
- Fixed the upload to the _FFE_ website from the _ChessEvent_ script

## Version 2.7.7 - June 10, 2025
- Fixed a bug on player creation
- Fixed _FFE_ online search
- Improved exception handling
- Fixed a bug on player creation
- Fixed _FFE_ online search
- Fixed searching _FFE_ players by their _FIDE_ ID
- Fixed adding _FIDE_ players when not present in the _FFE_ database
- Take into account the number of the first board of the tournaments

## Version 2.7.6 - June 8, 2025
- Improved exception handling
- Fixed a bug on event editing

## Version 2.7.5 - June 6, 2025
- Update players when rating types differ in data sources
- Request the _FFE_ SQL server when augmenting players created from the _FIDE_ database
- Fixed the colors of the players update modal
- Fixed entering results with keyboard shortcuts on fixed boards
- Removed pairing settings modal when not accurate

## Version 2.7.4 - June 3, 2025
- Fixed _FFE_ auth test on the tournament editing form
- Fixed the _ChessEvent_ players' Estimated/National rating type

## Version 2.7.3 - June 2, 2025
- Fixed the display of non-_FIDE_ players when updating the players from _FFE_ or _FIDE_ databases
- Fixed a bug on _FFE_ results upload

## Version 2.7.2 - June 1st, 2025
- Removed a warning at server startup
- Fixed a bug on screen creation

## Version 2.7.1 - May 31, 2025
- Forbid access to arbiters' pages for unauthorized clients
- Normalized _ChessEvent_ players' names
- Fixed and added columns to the players ODS export
- Reduced reaction times when entering results on the Pairings tab
- Fixed a bug caused by screen families with zero items

## :point_right: Version 2.7.0 - May 28, 2025
- Integration of the _FFE_ operations to the web UI
- Removal of script `ffe.bat`
- Instant notifications on Players and Pairings tabs for new checkins or results from user screens
- Optimized the load time of the events page
- Added the lottery
- Added PGN and TRF 16 exports
- Alignment of performance calculation with _Papi_’s in the case of players with a full-point or half-point bye
- Fixed _ChessEvent_ birth dates prior to 1970-01-01

## Version 2.6.4 - May 25, 2025
- Fixed a bug on updating the fixed tables of players
- Added a missing translation on the display controller cards

## Version 2.6.3 - May 19, 2025
- Fixed a bug on the refresh of rotators and family screens
- Improved exception handling

## Version 2.6.2 - May 17, 2025
- Added the Berger grid print view
- Fixed a bug on _FFE_ password input
- Fixed a bug on tournament import from _ChessEvent_

## Version 2.6.1 - May 14, 2025
- Fixed a bug on the display of screen families
- Fixed a bug on tournament import from _ChessEvent_

## :point_right: Version 2.6.0 - May 13, 2025
- Significantly improved performance
- Updated all documentation
- Our website https://sharly-chess.com is now online
- Added the Pairings tab
- Added the possibility to manual pair players
- Added Round-Robin and Double Round-Robin
- _Added Swiss Dutch pairings (experimental)_
- Added display controllers
- Simplified the main menu
- Utilities which were in `bin/` are now in `tools/`
- _Added PGN and TRF16 export (experimental)_
- Added help links from the app to our documentation website
- Improved the auto-upgrade feature
- Improved logging
- Fixed a bug on the creation of tournaments defaults screens
- Fixed a bug on results input screens refresh
- Fixed a bug on the application settings

## Version 2.5.9 - May 9, 2025
- Fixed a bug on the titles and rating types of the players imported from _ChessEvent_

## Version 2.5.8 - April 30, 2025
- Fixed a bug in retrieving registration fees

## Version 2.5.7 - April 20, 2025
- Fixed a printing bug

## Version 2.5.6 - April 17, 2025
- Fixed a display bug for multi-column screens (#416)

## Version 2.5.5 - April 13, 2025
- Fixed a display bug for pairing screens (#401)
- Fixed a bug when deleting a result

## Version 2.5.4 - April 12, 2025
- Fixed a bug filtering clubs and federations in the Players tab

## Version 2.5.3 - April 11, 2025
- Recovered the application configuration from a previous version
- Changed the encoding of log files
- Fixed a bug displaying rounds on pairing screens
- Fixed a bug initializing players from _ChessEvent_

## Version 2.5.2 - April 8, 2025
- Fixed a bug recovering previous versions
- Fixed a bug connecting to the _FFE_ SQL Server
- Fixed the `bin/ffe.bat` script
- Fixed missing translations in `bin/ffe.bat` and `bin/chessevent.bat` scripts

## Version 2.5.1 - April 8, 2025
- Fixed a bug starting the application

## :point_right: Version 2.5.0 - April 7, 2025
- Switched to multilingual (English and French)
- Complete redesign of the web interface
- Add/edit/remove players, tournament changes
- Import and update players from the _FIDE_ and _FFE_ databases
- Manage attendances/absences and joker points
- Full check-in management (open, check-in, close)
- Removed the "_ChessEvent_" tab (connection configuration is now at the event and tournament level)
- Added a federation to events
- Support for the HEAD method for dynamic displays
- Removed `papi_web.ini` and web-configured the application
- Calculation of tiebreaks and player rankings
- Printing and displaying rankings and cross tables
- Printing pairings and results
- Reduced application startup time
- Added the ability to change font sizes on display screens
- Fixed the calculation of virtual points in the Accelerated Swiss System
- Fixed a bug uploading tournaments to the _FFE_ website
- Fixed a bug duplicating screens, families, and tournaments
- Fixed a bug preventing screen display and editing when the first board number exceeds the number of boards
- Improved logging and archiving to disk

## Version 2.4.18 - December 23, 2024
- Added default screens when creating a tournament
- Fixed a bug managing _ChessEvent_ connections
- Improved ergonomics of arbitration screens

## Version 2.4.17 - December 15, 2024
- Hid all password entry fields
- Fixed a bug displaying tournament status

## Version 2.4.16 - December 5, 2024
- Added alert banners to quickly communicate information on public screens

## Version 2.4.15 - December 1, 2024
- Fixed an error handling bug
- Fixed a bug creating example databases

## Version 2.4.14 - November 29, 2024
- Fixed a bug entering background images for events

## Version 2.4.13 - November 24, 2024
- Added the ability to upload tournament regulations to the federal website
- Fixed a bug displaying menus on public screens

## Version 2.4.12 - November 22, 2024
- Added regulations for events and tournaments
- Simplified transmission of customization files for integration into the distribution
- Fixed a bug duplicating families

## Version 2.4.11 - November 18, 2024
- Fixed a bug entering results
- Added ability to recover configuration from a previous version

## Version 2.4.10 - November 17, 2024
- Fixed a bug displaying upcoming private tournaments

## Version 2.4.9 - November 17, 2024
- Fixed a bug uploading tournaments to the federal website

## Version 2.4.8 - November 16, 2024
- Added the option not to use a background image
- Fixed a bug displaying federation flags on check-in screens of rotating displays
- Fixed a bug preventing alphabetical display of pairings

## Version 2.4.7 - November 15, 2024
- Displayed federation flags on referee check-in screens
- Fixed a bug recovering events from previous versions

## Version 2.4.6 - November 14, 2024
- (On demand) update to the latest stable version when available
- Displayed player licenses on referee check-in screens (#45)
- Fixed a bug uploading tournaments to the federal website

## Version 2.4.5 - November 12, 2024
- Optimized Access database access (#48)
- Reduced client/server traffic (#49)

## Version 2.4.4 - November 11, 2024
- Added a modal window for player check-in (#46)
- Added the option to hide exit buttons on entry screens

## Version 2.4.3 - November 6, 2024
- Fixed a bug updating databases (#43)

## Version 2.4.2 - November 4, 2024
- Optimized refresh times for result entry pages
- Added the ability to delete or correct wrongly entered results (#29)
- Added a parameter for result screens to limit the age of displayed results (#27)

## Version 2.4.1 - November 3, 2024
- Fixed a bug displaying rotating screens (#41)

## :point_right: Version 2.4.0 - October 30, 2024
- Dropped INI format, declared all objects via the web interface (#37)
- Added automatic creation of example tournaments
- Smoother navigation (HTMX) (#31)
- Hid all application URLs
- Added configurable ability to delete wrongly entered results
- Added the ability to specify fixed tables on pairing screens
- Added the ability to specify which tournaments are displayed on result screens (#27)
- Displayed round numbers on result screens
- Simplified the homepage of the web interface
- Presented events and screens as tiles
- Improved authentication on entry screens
- Added the ability to restrict visibility of certain events, screens, screen families, and rotating screens
- Added support for multiple timers (#26)
- Added fixed screens to insert images into rotating displays
- Removed CSS customization, replaced with background image and color
- Worked around a federal site bug affecting ranking display (forfeits removed in absence of pairings) (#14)

## Version 2.3.2 - April 15, 2024
- Fixed a bug displaying pairings alphabetically

## Version 2.3.1 - April 14, 2024
- Fixed a bug with configuration file encoding

## :point_right: Version 2.3.0 - April 8, 2024
- Displayed players alphabetically before pairing
- Added check-in on entry screens
- Added the [Frequently Asked Questions]({% link dev/faq.en.md %})
- Fixed a bug displaying rankings and cross tables on the federal site for _Papi_ files generated by _ChessEvent_
- Fixed color display issues on alphabetical pairings
- Disallowed the `/` character in screen and tournament IDs

## Version 2.2.1 - March 28, 2024
- Fixed a configuration bug

## :point_right: Version 2.2.0 - March 27, 2024
- Lightened the web engine (replaced _Django_ with _Litestar_) (#24)
- Displayed player check-in statuses
- Recorded illegal moves (option `record_illegal_moves`)
- Updated the _ChessEvent_ URL following the platform move

## Version 2.1.8 - February 16, 2024
- Removed ODBC pooling

## Version 2.1.7 - February 13, 2024
- Documentation corrections and improvements

## Version 2.1.6 - February 4, 2024
- Displayed ODBC drivers on the homepage

## Version 2.1.5 - January 24, 2024
- Simplified event configuration:
  - For a template: no longer mandatory to specify `[template.<template_id>.boards]`/`[template.<template_id>.players]` when the event has only one tournament
  - For a family: default to the template with the same name
  - For a rotating screen: default to the family with the same name

## Version 2.1.4 - January 23, 2024
- Added the `show_unpaired` option to limit alphabetical pairing displays to paired players only

## Version 2.1.3 - January 22, 2024
- Automatically forfeited players who were not checked-in on _ChessEvent_ in _Papi_ files

## Version 2.1.2 - January 21, 2024
- Added _ChessEvent_ approval number to _Papi_ files

## Version 2.1.1 - December 10, 2023
- Ability to set the number of boards or players per screen
- Ability to work fully offline on a local network (embedded CSS and JavaScript libraries)

## :point_right: Version 2.1.0 - December 9, 2023
- Created _Papi_ files for tournaments based on _ChessEvent_ online registrations
- Removed players’ personal data before uploading to the federal site

## Version 2.0.3 - November 19, 2023
- Minimized tournament uploads to the federal site
- Improved detection of configuration file encodings

## :point_right: Version 2.0.0 - November 10, 2023
- Delivered as a standalone executable (no longer needs XAMPP)
- Configured events using INI files (simpler than PHP)
- Improved homepage
- Added a page per event
- Added alphabetical pairing display screens
- Added rotating displays
- Simplified screen configuration using templates and families
- Added a delay before transferring _Papi_ files to the federal site
- Published source code

## Version 1.19 - January 22, 2023
- Fixed a bug protecting result entry pages

## Version 1.18 - February 4, 2020
- Fixed a bug displaying the latest results
- Fixed a bug transmitting results to the federal site

## Version 1.17 - October 4, 2019
- Fixed a concurrency bug (result entry from multiple screens)
- Fixed a bug displaying players before pairing

## Version 1.16 - August 31, 2019
- Fixed a bug displaying the timer

## Version 1.15 - August 31, 2019
- Compatibility with _Papi_ 3.3.6
- Support for the Haley Accelerated Swiss system
- Support for "bye" rounds
- Added the timer
- Improved page refresh speeds
- Renamed property `no-banner` to `no_banner`

## Version 1.14 - April 9, 2019
- Added result display screens
- Added latest result display screens
- Added automatic refresh to entry screens
- Improved response times
- Simplified screen URLs
- Always downloaded files before displaying them on the _FFE_ website

## Version 1.13 - November 10, 2018
- Displayed board numbers

## Version 1.12 - October 30, 2018
- Support for handicap tournaments

## Version 1.11 - October 27, 2018
- Support for the Accelerated Swiss System (SAD)
- Support for Haley acceleration

## Version 1.10 - October 26, 2018
- Ability to test access codes for the _FFE_ website
- Ability to make data visible on the _FFE_ website
- Ability to download tournament approval invoices from the _FFE_ website
- Renamed script `upload.bat` to `ffe.bat`

## Version 1.9 - October 23, 2018
- Fixed online tournament publication to the federal site

## Version 1.8 - September 1, 2018
- Improved transitions between queries

## Version 1.7 - August 31, 2018
- Automatic update checking

## Version 1.6 - August 30, 2018
- Wrote documentation
- Distributed as an archive
- Improved participant display before pairings
- Improved CSS styles (standardization)
- Obfuscated PHP sources

## Version 1.5 - August 3, 2018
- Added CSS customizations
- Improved display (top banner always visible)

## Version 1.4 - July 28, 2018
- Managed multiple entry screens

# Version Numbering Policy (`x.y.z`)

- `x`: major number (major software changes)
- `y`: minor number (configuration changes and functional updates)
- `z`: patch number (code changes)
