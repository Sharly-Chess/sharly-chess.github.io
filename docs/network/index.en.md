---
layout: page
title: Network
permalink: /network/
page_id: network
nav_order: 370
---

# Using _Sharly Chess_ on a Network

_Sharly Chess_ can be used like traditional chess competition management software: the arbiter manages the competition alone, on their computer.

However, _Sharly Chess_ isn’t limited to the arbiter’s computer. Other devices — laptops, tablets, smartphones — can also connect to the server to:

* Display screens (pairings, standings, results, etc.)
* Allow players to check-in or enter their own results
* Give access to assistant arbiters or staff

## What is a network?

A network is simply a group of devices that can talk to each other.

* At home, your Wi-Fi _router_ creates a network so your computer, phone, and printer can all connect.
* At a club or tournament, you might use the venue’s Wi-Fi.

Once devices are on the same network, they can “see” each other and exchange information — which is exactly what _Sharly Chess_ needs.

## How to get a network

There are several ways to create or join a network:

* **Use your phone’s hotspot**

  Most smartphones can create a temporary Wi-Fi network (“hotspot”). Other devices connect to your phone as if it were a router.

* **Use a Wi-Fi dongle or travel router**

  These small devices plug into a computer or wall socket and create a private Wi-Fi network for your tournament.

* **Use an existing Wi-Fi network**

  Sometimes the venue already has Wi-Fi. You can connect all devices to it, but you must consider who else has access (see [security considerations]({% link docs/network/security.en.md %})).

## The server’s IP address

From the _Sharly Chess_ main window, click **See Networks** to display the list of the server's address on each of the different networks detected (Wifi, Ethernet, etc).

{: .note }
> :information_source: An IP address is just a number that identifies your server on the network, for example:
> http://192.168.1.42

Any other device on the **same** network can type that address into a browser to connect to _Sharly Chess_.
The QR code is a shortcut: scanning it opens the address directly on that device.

## What can connected devices do?

By default, connected devices **cannot see anything**.

To make an event accessible, you must first mark the event as **public**.
Even then, devices will only see content if you also create a _Screen_ that is marked as **public**.

{: .tip }
> :point_right: Public Screens are visible to everyone on the network. If a Screen is an _Input Screen_, players will be able to use it to **enter their results or to check-in**.

Extra access can be given to staff members through [Staff Accounts]({% link docs/network/staff.en.md %}).

## Troubleshooting

If you can’t connect to _Sharly Chess_, here are some things to check:

* **Is the server address correct?**

  Double-check the IP address or scan the QR code shown on the server’s home page.

* **Are you on the same network?**

  The device you’re using must be connected to the same Wi-Fi or wired network as the server.

* **Firewall or antivirus settings**

  A firewall on the server computer may be blocking connections.
  Check your system’s firewall settings and allow _Sharly Chess_.

* **Mobile hotspot restrictions**

  Some Android phones, by default, only allow **one device at a time** to connect to the hotspot.
  If you need more, look for an option in the phone’s hotspot settings.

* **Router or access point limits**

  Some Wi-Fi routers restrict the number of connected devices, or may isolate them so they cannot see each other (“AP isolation” setting).
  Make sure device isolation is disabled if you want devices to communicate.

Unfortunately, we can’t cover all possible configurations here.
If you’re still having trouble, you may need to ask your club’s technician for help!
