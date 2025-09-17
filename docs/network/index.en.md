---
layout: page
title: Network
permalink: /network/
page_id: network
nav_order: 370
---

# Connecting devices to the server

_Sharly Chess_ can be used like traditional chess competition management software: the arbiter manages the competition alone, on their computer.

However, _Sharly Chess_ has always allowed other devices (computers, tablets, smartphones) to connect to the Sharly Chess server to:

- score players
- enter results
- view pairings, results, rankings, etc.

Since version 3.1, it is also possible to delegate other operations to network devices, thanks to _access levels_.

---

## Access levels

Access levels allow you to configure, in a very flexible and intuitive way, the operations that can be performed on devices connected to the Sharly Chess server via the network.

_Sharly Chess_ access levels are organized hierarchically:

<img class="no-border" src="../../assets/images/access-levels/access-levels-inheritance-en.jpg" alt="Inheritance of access levels">

- 🟢 “Basic” access levels are granted by default to all connected devices (they can be revoked).
- 🟡 To gain higher access levels, devices must be authenticated by logging in with an account.
- 🔴 The application's _Administration_ access level is reserved for the _Sharly Chess_ server.

{: .note }
> :information_source: [See the permissions of each access level]({% link docs/network/permissions.en.md %})

---

## Accounts

Accounts are declared on the _Sharly Chess_ server:
- a lastname (mandatory) and a firstname (optional);
- a password.

They allow connected devices to be granted certain access levels, except for the application's _Administration_ (reserved for the _Sharly Chess_ server).

It is possible to deactivate an account and reactivate it later.
