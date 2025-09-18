---
layout: page
title: Updates and Uninstallation
permalink: /update-uninstall/
page_id: update-uninstall
parent: Getting Started
nav_order: 65
---

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
