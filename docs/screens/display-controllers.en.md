---
layout: page
title: Channels
parent: Display
permalink: /channels/
page_id: display-controllers
nav_order: 100
---

# Channels

A device can show a screen, a rotator or a menu by simply opening it. But to change what it shows, you then have to go to the device — which is not convenient for a projector on the ceiling or a television at the other end of the hall.

A **channel** solves this. A device opens the channel once, and from then on you decide from the arbiter's computer what the channel shows: a screen, one page of a screen over several pages, a rotator or a menu. Every device following the channel shows the same thing, and changes when you change it: all the televisions of the playing hall, for example, or all the tablets used for result entry.

A channel is not a way of connecting a device. Any device can follow a channel, whether it is a projector or a monitor plugged into the computer running _Sharly Chess_, which needs no network, or a tablet, a television or a computer on the network. A common setup is the projector of the playing hall, plugged into the arbiter's computer and driven through a channel.

Channels are optional, and many events don't need one. When you do use them, it is often a good idea to start with them: create one channel per kind of device — _Projector_, _Tablets_ — and then create the screens they need.

---

## Creating a channel

On the **Display → Channels** tab, click **Create a channel** and give it a name that will help you recognise the device, such as _iPad_, _Projector_, _Hall_, _Entrance_ or _Arbiters_. The name starts empty, and the examples are shown in the field until you type one.

A channel can be **public** or private. A private channel can only be followed by a device signed in with an account that is allowed to see the private screens.

The **Screens designed for this channel** field lists the screens, rotators and menus meant for this device. They are offered first when choosing what the channel shows, which keeps the list short; anything else can still be sent to it. Nothing is sent to the channel by this field. The same choice is available from each screen, rotator and menu, in its **Designed for** field, and is kept when one of them is duplicated.

What is designed for a channel carries a badge with the channel's name wherever it is listed or chosen: in the lists, the cards and the previews of the **Screens**, **Rotators** and **Menus** tabs, when choosing the content of a rotator or a menu, in the **Designed for** field of a channel, when choosing the screens of a timer, and in the send menu of the channels, where the badges show which other channels each item is designed for.

---

## Connecting a device

For a projector or a monitor plugged into this computer, open the channel with its <i class="bi-eye"></i> **Go to the channel** button, then move the window to the projector and show it full screen. No network is needed.

For a device on the network, click the channel's <i class="bi-qr-code"></i> **Connect a device** button. It shows the channel's address on each of your computer's networks, with a QR code: open the address on the device, or scan the code. Use as many devices as you like: they all show whatever you send to the channel.

The device then shows _Connected. Waiting for a screen…_ until something is sent to the channel. A channel keeps what it is showing when you edit it. Its <i class="bi-x-lg"></i> **Remove the screen from the channel** button takes back what it shows, and its devices return to the waiting page.

Players and spectators can also find the public channels on the event's [Display page]({% link docs/screens/index.en.md %}#visitors), where choosing a channel opens it straight away.

---

## Choosing what a channel shows

A channel shows one thing at a time, and what you send decides how it behaves:

- a **screen on one page** stays on the device;
- a **screen over several pages** goes through its pages in turn, at its seconds per page or every 15 seconds;
- a **single page** of a screen over several pages stays on the device. If that page no longer exists, for example because the tournament has fewer players, the channel goes back to its waiting page;
- a **rotator** goes through its screens in turn;
- a **menu** lets people tap between its screens, which suits the tablets.

There are two ways to send something to a channel:

- from the **Channels** tab, with the channel's <i class="bi-box-arrow-in-right"></i> **Send a screen to this channel** button. The menu lists what is designed for the channel first, grouped by screen type, and everything else under **Other screens**; when nothing is designed for the channel, everything is listed directly. A screen over several pages opens a submenu: **All pages in turn**, or one of its pages. A screen over several pages on which results or check-ins are entered cannot be sent as a whole, since its pages must not change under someone using them: its submenu only lists its pages;
- from the **Screens**, **Rotators** or **Menus** tab, with the <i class="bi-box-arrow-in-right"></i> button of what you want to show, which lists the channels. A single page of a screen over several pages is sent from that screen's details.

Every device following the channel changes within a few seconds.

---

## Watching the channels

The **Channels** tab can show the channels as a **list**, as **cards**, or as **previews**: a live miniature of what each channel is currently showing, which lets you check all the devices of the hall from the arbiter's table.

