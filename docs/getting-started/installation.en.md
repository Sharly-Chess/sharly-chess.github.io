---
layout: page
title: Installation
permalink: /installation/
page_id: installation
parent: Getting Started
nav_order: 50
---

# Installing _Sharly Chess_

## Windows

### Requirements

- Up to date Windows 10+
- [The last release of Papi (3.3.8)](https://dna.ffechecs.fr/ressources/appariements/papi/)
- [The Access driver](https://www.microsoft.com/en-us/download/details.aspx?id=54920), needed to open _Papi_ files

{: .note }
> :information_source: For 32/64bits compatibility of the Access driver, run `accessdatabaseengine_X64.exe /passive` ([details](https://learn.microsoft.com/en-us/archive/msdn-technet-forums/57aee87f-a2e0-4804-a452-7c69f1d32957)) or `accessdatabaseengine_X64.exe /quiet` ([details](https://github.com/Sharly-Chess/sharly-chess/issues/614)).

### Installing _Sharly Chess_

{: .text-center }
[Download the latest release of _Sharly Chess_ (v{{ site.latest_version }})]({{ site.github_url }}/releases/download/{{ site.latest_version }}/sharly-chess-{{ site.latest_version }}.zip){: .btn }

{: .note }
> :information_source: [See the changes of the latest release]({{ site.github_url }}/releases/latest)

1. Unzip the downloaded archive.
2. Inside, you’ll find a folder named after the version number. Move this folder to a location of your choice.
We recommend placing it inside a parent folder named `sharly-chess` — this lets you keep multiple versions organized, and the automatic updater will install future versions into this same location.

{: .note }
> :information_source: [See the previous releases]({{ site.github_url }}/releases)

### Running _Sharly Chess_

To start the application, simply double-click the `.exe` file inside the version folder.

When run for the first time you'll be asked to choose your language and it will open your default web browser to display the _Sharly Chess_ interface with the opportunity to configure your preferences.

On subsequent runs, _Sharly Chess_ will open the home page, where you can either access the admin interface or the client interface — which can be used by other devices on your network to display tournament information.

### Updating _Sharly Chess_

Each time you start the application, _Sharly Chess_ checks if a more recent release is available.

When a new release is found, you are proposed to install it into the parent directory of the current version.

### Uninstalling _Sharly Chess_

To uninstall _Sharly Chess_, simply delete the folder where you installed it.  _Sharly Chess_ doesn't install and extra files elsewhere and doesn't create any registry entries, so it will be completely removed from your system.

{: .warning }
> :warning: Note however that your events are also be stored in this folder, so if you don't want to lose your event data, you'll need to move files `events/*.db` to another location before removing the folder.

## Linux and macOS

_Sharly Chess_ is not yet available on Linux or macOS. Support for these platforms is planned as soon as we [remove our dependency]({% link docs/getting-started/papi-and-sharly-chess.en.md %}) on the `.papi` file format (which relies on Microsoft Access, a Windows-only technology).
