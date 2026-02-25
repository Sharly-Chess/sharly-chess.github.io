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
> Linux support is still experimental and may not work on all Linux distributions.<br/>
> Furthermore, the _Sharly Chess_ developers are unable to provide support for this aspect and are looking for Linux experts. Get in touch!

Sharly Chess is also available for [Windows]({% link docs/getting-started/installation-windows.en.md %}) and [MacOS]({% link docs/getting-started/installation-mac.en.md %}).

## Requirements

- An Intel/AMD or ARM computer with a Linux distribution (see below the tested distributions).

## Step 1: Install Flatpak

The Linux version of _Sharly Chess_ is distributed as a [Flatpak](https://flatpak.org) application. Flatpak may need to be installed first:

###  Fedora / Linux Mint / Pop!_OS

Flatpak is **already installed** by default. Skip to step 2.

### Ubuntu / Debian

```bash
sudo apt update && sudo apt install -y flatpak
```

### Arch Linux / Manjaro

```bash
sudo pacman -S flatpak
```

### openSUSE

```bash
sudo zypper install flatpak
```

### Other distributions

See [flathub.org/setup](https://flathub.org/setup) for your distribution.

## Step 2: Graphical integration (optional)

To install applications from the software centre and open `.flatpakrepo` files by double-clicking:

### GNOME (Ubuntu, Fedora Workstation)

```bash
sudo apt install gnome-software-plugin-flatpak    # Ubuntu/Debian
sudo dnf install gnome-software                   # Fedora (already included)
```

> On Ubuntu, this adds "Software" (blue/white icon), distinct from "Ubuntu Software" (Snap Store).

### KDE Plasma (Kubuntu, KDE Neon)

```bash
sudo apt install plasma-discover-backend-flatpak   # Ubuntu/Debian
sudo dnf install discover                          # Fedora (already included)
```

---

## Step 3: Enable Flathub

Flathub is **not configured by default** on most distributions. It must be added manually. Sharly Chess needs it to download its dependencies (GNOME runtime).

```bash
# Add Flathub in user mode (no sudo required)
flatpak remote-add --user --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo
```

Verify that Flathub has been added:

```bash
flatpak remotes --user
# Should show "flathub" in the list
```

> **Note:** If Flathub is already configured at system level (`flatpak remotes` without `--user`), it will work too. But adding with `--user` is preferred as it requires no administrator rights.

---

## Step 4: Restart (required)

If you have just installed Flatpak for the **first time**, you **must restart** your computer. Without this:

- Icons will not appear in the menu
- Environment variables will not be correct
- The software centre will not see the Flatpak plugin

---

## Step 5: Install Sharly Chess

```bash
flatpak remote-add --user --if-not-exists sharly-chess \
  https://flatpak.sharly-chess.com/sharly-chess.flatpakrepo

flatpak install --user sharly-chess com.sharlychess.SharlyChess
```

---

## Running _Sharly Chess_

You'll find _Sharly Chess_ in the start menu. Alternatively, from the terminal:

```bash
flatpak run com.sharlychess.SharlyChess
```

When run for the first time it will open your default web browser to display the _Sharly Chess_ interface with the opportunity to configure your preferences.

On subsequent runs, _Sharly Chess_ will open the admin interface in your default web browser.

---

## Updates

Sharly Chess updates automatically alongside your other Flatpak applications. To force an update:

```bash
flatpak update --user
```

---

## Rolling back to a previous version

### 1. List available versions

```bash
flatpak remote-info --user --log sharly-chess com.sharlychess.SharlyChess
```

Find the commit hash corresponding to the desired version (e.g. "Version 3.5.1 (x86_64)").

### 2. Roll back to that version

```bash
flatpak update --user --commit=FULL_HASH com.sharlychess.SharlyChess
```

### 3. Pin to prevent automatic updates

```bash
flatpak pin --user com.sharlychess.SharlyChess
```

To remove the pin:

```bash
flatpak pin --user --remove com.sharlychess.SharlyChess
```

---

## Data storage

Application data is stored in an isolated directory, with a sub-folder per version:

```
~/.var/app/com.sharlychess.SharlyChess/data/
└── sharly-chess-X.Y.Z/
    ├── events/          # Tournaments (.sce) and configuration (.scc)
    │   └── archives/    # Archived tournaments (.sca)
    ├── logs/            # Activity log
    ├── tmp/             # Temporary databases (FIDE, FFE, sessions)
    └── custom/          # Custom files
```

---

## Complete uninstall

```bash
# Remove the application (keep data)
flatpak uninstall --user com.sharlychess.SharlyChess

# Remove the application AND all data
flatpak uninstall --user --delete-data com.sharlychess.SharlyChess

# Remove the repository
flatpak remote-delete --user sharly-chess

# (Optional) Also remove the dev repository
flatpak remote-delete --user sharly-chess-dev
```
