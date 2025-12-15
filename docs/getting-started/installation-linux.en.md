---
layout: page
title: Installation on Linux
permalink: /installation-linux/
page_id: installation-linux
parent: Getting Started
nav_order: 52
---

# Installing _Sharly Chess_ on Linux (experimental)

{: .warning }

> :warning: **EXPERIMENTAL FEATURE!**<br/>
> Beta testers have reported successful installations on Ubuntu and Mint, but we are still far from a stable and fully supported distribution for all Linux platforms.
> Furthermore, the _Sharly Chess_ developers are unable to provide support for this aspect and are looking for Linux experts. Get in touch!

Sharly Chess is also available for [Windows]({% link docs/getting-started/installation-windows.en.md %}) and [MacOS]({% link docs/getting-started/installation-mac.en.md %}).

## Requirements

- An Intel/AMD or ARM computer with a Linux distribution (see below the tested distributions).

## Installing _Sharly Chess_

{: .text-center }
[Download the latest release of _Sharly Chess_ (v{{ site.latest_version }}) for Intel/AMD x86_64]({{ site.github_url }}/releases/download/{{ site.latest_version }}/sharly-chess-{{ site.latest_version }}-linux-x86_64.zip){: .btn }

{: .text-center }
[Download the latest release of _Sharly Chess_ (v{{ site.latest_version }}) for ARM® aarch64]({{ site.github_url }}/releases/download/{{ site.latest_version }}/sharly-chess-{{ site.latest_version }}-linux-arm64.zip){: .btn }

{: .note }

> :information_source: [See the changes of the latest release]({{ site.github_url }}/releases/latest)

1. Unzip the downloaded archive.
2. Inside, you’ll find a folder named after the version number. Move this folder to a location of your choice.
   We recommend placing it inside a parent folder named `sharly-chess` — this lets you keep multiple versions organized, and the automatic updater will install future versions into this same location.

{: .note }

> :information_source: [See the previous releases]({{ site.github_url }}/releases)

## Running _Sharly Chess_

To start the application, simply double-click the `SharlyChess.AppImage` application inside the version folder.

When run for the first time it will open your default web browser to display the _Sharly Chess_ interface with the opportunity to configure your preferences.

On subsequent runs, _Sharly Chess_ will open the admin interface in your default web browser.
