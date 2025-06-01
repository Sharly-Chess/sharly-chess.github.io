---
layout: page
title: Changelog
permalink: /changelog/
page_id: changelog
nav_order: 600
separator: true
---

# Changelog

## Version 2.7.2 - June 1st, 2025
- Removed a warning at server startup
- Fixed a bug on screen creation

## Version 2.7.1 - May 31, 2025
- Forbid access to arbiters' pages for unauthorized clients
- Normalized ChessEvent players' names
- Fixed and added columns to the players ODS export
- Reduced reaction times when entering results on the Pairings tab
- Fixed a bug caused by screen families with zero items

## :point_right: Version 2.7.0 - May 28, 2025
- Integration of the FFE operations to the web UI
- Removal of script `ffe.bat`
- Instant notifications on Players and Pairings tabs for new checkins or results from user screens
- Optimized the load time of the events page
- Added the lottery
- Added PGN and TRF 16 exports
- Alignment of performance calculation with Papi’s in the case of players with a full-point or half-point bye
- Fixed ChessEvent birth dates prior to 1970-01-01

## Version 2.6.4 - May 25, 2025
- Fixed a bug on updating the fixed tables of players
- Added a missing translation on the display controller cards

## Version 2.6.3 - May 19, 2025
- Fixed a bug on the refresh of rotators and family screens
- Improved exception handling

## Version 2.6.2 - May 17, 2025
- Added the Berger grid print view
- Fixed a bug on FFE password input
- Fixed a bug on tournament import from ChessEvent

## Version 2.6.1 - May 14, 2025
- Fixed a bug on the display of screen families
- Fixed a bug on tournament import from ChessEvent

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
- Utilities which were in `bin/`` are now in ``tools/`
- _Added PGN and TRF16 export (experimental)_
- Added help links from the app to our documentation website
- Improved the auto-upgrade feature
- Improved logging
- Fixed a bug on the creation of tournaments defaults screens
- Fixed a bug on results input screens refresh
- Fixed a bug on the application settings

## Version 2.5.9 - May 9, 2025
- Fixed a bug on the titles and rating types of the players imported from ChessEvent

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
- Fixed a bug initializing players from ChessEvent

## Version 2.5.2 - April 8, 2025
- Fixed a bug recovering previous versions
- Fixed a bug connecting to the FFE SQL Server
- Fixed the `bin/ffe.bat` script
- Fixed missing translations in `bin/ffe.bat`` and ``bin/chessevent.bat` scripts

## Version 2.5.1 - April 8, 2025
- Fixed a bug starting the application

## :point_right: Version 2.5.0 - April 7, 2025
- Switched to multilingual (English and French)
- Complete redesign of the web interface
- Add/edit/remove players, tournament changes
- Import and update players from the FIDE and FFE databases
- Manage attendances/absences and joker points
- Full check-in management (open, check-in, close)
- Removed the "ChessEvent" tab (connection configuration is now at the event and tournament level)
- Added a federation to events
- Support for the HEAD method for dynamic displays
- Removed `papi_web.ini` and web-configured the application
- Calculation of tiebreaks and player rankings
- Printing and displaying rankings and cross tables
- Printing pairings and results
- Reduced application startup time
- Added the ability to change font sizes on display screens
- Fixed the calculation of virtual points in the Accelerated Swiss System
- Fixed a bug uploading tournaments to the FFE website
- Fixed a bug duplicating screens, families, and tournaments
- Fixed a bug preventing screen display and editing when the first board number exceeds the number of boards
- Improved logging and archiving to disk

## Version 2.4.18 - December 23, 2024
- Added default screens when creating a tournament
- Fixed a bug managing ChessEvent connections
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
- Fixed a bug displaying rankings and cross tables on the federal site for _Papi_ files generated by ChessEvent
- Fixed color display issues on alphabetical pairings
- Disallowed the `/` character in screen and tournament IDs

## Version 2.2.1 - March 28, 2024
- Fixed a configuration bug

## :point_right: Version 2.2.0 - March 27, 2024
- Lightened the web engine (replaced _Django_ with _Litestar_) (#24)
- Displayed player check-in statuses
- Recorded illegal moves (option `record_illegal_moves`)
- Updated the ChessEvent URL following the platform move

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
- Automatically forfeited players who were not checked-in on ChessEvent in _Papi_ files

## Version 2.1.2 - January 21, 2024
- Added ChessEvent approval number to _Papi_ files

## Version 2.1.1 - December 10, 2023
- Ability to set the number of boards or players per screen
- Ability to work fully offline on a local network (embedded CSS and JavaScript libraries)

## :point_right: Version 2.1.0 - December 9, 2023
- Created _Papi_ files for tournaments based on ChessEvent online registrations
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
- Always downloaded files before displaying them on the FFE website

## Version 1.13 - November 10, 2018
- Displayed board numbers

## Version 1.12 - October 30, 2018
- Support for handicap tournaments

## Version 1.11 - October 27, 2018
- Support for the Accelerated Swiss System (SAD)
- Support for Haley acceleration

## Version 1.10 - October 26, 2018
- Ability to test access codes for the FFE website
- Ability to make data visible on the FFE website
- Ability to download tournament approval invoices from the FFE website
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
