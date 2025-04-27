---
layout: page
title: Installation
permalink: /installation/
page_id: installation
parent: Getting Started
nav_order: 50
---

# Installing _Sharly Chess_

### Windows

1. Download the latest version of _Sharly Chess_ from the [releases page](https://github.com/Sharly-Chess/sharly-chess/releases).
2. Unzip the downloaded archive.
3. Inside, you’ll find a folder named after the version number. Move this folder to a location of your choice.
   We recommend placing it inside a parent folder named `SharlyChess` — this lets you keep multiple versions organized, and the automatic updater will install future versions into this same location.

### Linux and macOS

_Sharly Chess_ is not yet available on Linux or macOS. Support for these platforms is planned as soon as we [remove our dependency]({% link docs/getting-started/relation-to-papi.en.md %}) on the `.papi` file format (which relies on Microsoft Access, a Windows-only technology).

## Running _Sharly Chess_

To start the application, simply double-click the `.exe` file inside the version folder.

When run for the first time you'll be asked to choose your language and it will open your default web browser to display the _Sharly Chess_ interface with the opportunity to configure your preferences.

On subsequent runs, _Sharly Chess_ will open the home page, where you can either access the admin interface or the client interface — which can be used by other devices on your network to display tournament information.

## Uninstalling _Sharly Chess_

To uninstall _Sharly Chess_, simply delete the folder where you installed it.  _Sharly Chess_ doesn't install and extra files elsewhere and doesn't create any registry entries, so it will be completely removed from your system.

⚠️ Note however that your events will also be stored in this folder, so if you don't what to lose your event data, you'll need to move them to another location.
