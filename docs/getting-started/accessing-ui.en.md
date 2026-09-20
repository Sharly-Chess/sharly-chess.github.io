---
layout: page
title: Accessing the User Interface
permalink: /accessing-ui/
page_id: accessing-ui
parent: Getting Started
nav_order: 60
---

# Accessing the User Interface

_Sharly Chess_ includes a built-in web server that other devices can connect to.
In fact, the entire interface is built using web pages — which is why you need a browser to access it, even on your local machine.

{: .tip }
> :point_right: Don’t be put off by the technical terms — you don’t need to know anything about web development to use _Sharly Chess_.
> A web server is simply a program that sends web pages to browsers that connect to it.

### Accessing _Sharly Chess_

The easiest way to access _Sharly Chess_ is to click the **Open application (browser)** button in the application's main window.  This will open your default web browser and display the _Sharly Chess_ interface.

It's also possible to access the _Sharly Chess_ interface from other devices on the network.  You can read more about this in the [Network]({% link docs/network/index.en.md %}) section.

## The main application window

The window that opens when you launch _Sharly Chess_ is the server itself: closing it stops _Sharly Chess_. Besides opening the browser, it groups everything that concerns the application as a whole rather than a particular event:

| **Home** | Open the application in the browser, and see the addresses other devices can use to reach it. |
| **Networks** | The networks your computer is connected to, and the address of _Sharly Chess_ on each of them (see [Network]({% link docs/network/index.en.md %})). |
| **Plugins** | Install and uninstall [plugins]({% link docs/plugins/index.en.md %}). |
| **Logs** | The application log, useful when reporting a problem. |
| **Settings** | The **language**, the default **federation** and the **date format**; whether to launch a browser on startup; the experimental features; the **data folder** (open it, or move it elsewhere); and the updates (search for updates, include beta versions). |

{: .note }
> :information_source: Since version 5.1, the language, federation and date format settings, as well as the installation of plugins, are found in this window rather than in the browser interface.
