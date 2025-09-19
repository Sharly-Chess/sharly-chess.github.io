---
layout: page
title: Installation on macOS
permalink: /installation-mac/
page_id: installation-mac
parent: Getting Started
nav_order: 51
---

# Installing _Sharly Chess_ on Mac

Sharly Chess is also available for [Windows]({% link docs/getting-started/installation-windows.en.md %}).

## Requirements

- Apple silicon based Mac (intel-based Macs are not supported)

## Installing _Sharly Chess_

{: .text-center }
[Download the latest release of _Sharly Chess_ (v{{ site.latest_version }})]({{ site.github_url }}/releases/download/{{ site.latest_version }}/sharly-chess-{{ site.latest_version }}-macos.dmg){: .btn }

{: .note }

> :information_source: [See the changes of the latest release]({{ site.github_url }}/releases/latest)

1. Inside the DMG, you’ll find a folder named after the version number. Move this folder to a **writable** location of your choice.
   We recommend placing it inside a parent folder named `sharly-chess` — this lets you keep multiple versions organized, and the automatic updater will install future versions into this same location.

{: .warning }

> :warning: Don't install into the _Applications_ folder, as _Sharly Chess_ needs to be able to write into this folder,
> and the _Applications_ folder is read-only.

{: .note }

> :information_source: [See the previous releases]({{ site.github_url }}/releases)

## Running _Sharly Chess_

To start the application, simply double-click the _Sharly Chess_ applications inside the version folder.

When run for the first time it will open your default web browser to display the _Sharly Chess_ interface with the opportunity to configure your preferences.

On subsequent runs, _Sharly Chess_ will open the admin interface in your default web browser.
