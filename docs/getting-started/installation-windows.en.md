---
layout: page
title: Installation on Windows
permalink: /installation-windows/
page_id: installation-windows
parent: Getting Started
nav_order: 50
---

# Installing _Sharly Chess_ on Windows

Sharly Chess is also available for [MacOS]({% link docs/getting-started/installation-mac.en.md %}) and [Linux]({% link docs/getting-started/installation-linux.en.md %}).

## Requirements

- Windows PC with up-to-date Windows 10+

## Installing _Sharly Chess_

{: .text-center }
[Download the latest release of _Sharly Chess_ (v{{ site.latest_version }})]({{ site.github_url }}/releases/download/{{ site.latest_version }}/sharly-chess-{{ site.latest_version }}-windows.zip){: .btn }

{: .note }

> :information_source: [See the changes of the latest release]({{ site.github_url }}/releases/latest)

1. Unzip the downloaded archive.
2. Inside, you’ll find a folder named after the version number. Move this folder to a location of your choice.
   We recommend placing it inside a parent folder named `sharly-chess` — this lets you keep multiple versions organized, and the automatic updater will install future versions into this same location.

{: .note }

> :information_source: [See the previous releases]({{ site.github_url }}/releases)

## Running _Sharly Chess_

To start the application, simply double-click the `.exe` file inside the version folder.

When run for the first time it will open your default web browser to display the _Sharly Chess_ interface with the opportunity to configure your preferences.

On subsequent runs, _Sharly Chess_ will open the admin interface in your default web browser.

## Updating _Sharly Chess_

Each time you start the application, _Sharly Chess_ checks if a more recent release is available.

When a new release is found, you are proposed to install it into the parent directory of the current version.

When you run the newer version of _Sharly Chess_, it will scan the parent folder for any previous versions and offer
copy across and update your previous data.

This allows you to keep multiple versions of _Sharly Chess_ installed on your system, and to easily switch between them
(although any changes you make to you data in newer version won't be reflected in older versions).

## Uninstalling _Sharly Chess_

To uninstall _Sharly Chess_, simply delete the folder where you installed it.
_Sharly Chess_ doesn't install any extra files elsewhere and doesn't create any registry entries, so it will be completely removed from your system.

{: .warning }

> :warning: Note however that your events are also be stored in this folder, so if you don't want to lose your event data, you'll need to move files `events/*.sce` to another location before removing the folder.
