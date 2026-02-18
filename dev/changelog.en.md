---
layout: page
title: Changelog
permalink: /changelog/
page_id: changelog
nav_order: 600
separator: true
---

# Changelog

## Version 3.6.0 - February 18, 2026
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

- `x`: major number (full software changes)
- `y`: minor number (configuration changes and functional updates)
- `z`: patch number (code changes)
