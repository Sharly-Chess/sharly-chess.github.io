---
layout: page
title: Security
parent: Network
permalink: /security/
page_id: security
nav_order: 373
---

# Security

On a shared network, a malicious user could try to:

* Guess or steal login credentials
* Connect to the server and interfere with your competition

The more important the competition, the greater the risk.  It's very important to be aware of this danger and to take steps to protect your network.

---

## Secure your accounts

* Give staff accounts only the access levels they need.
* Use strong, unique passwords.

---

## Control your network

* **Best**: create your own Wi-Fi (phone hotspot or travel router) with a strong password so that only you can connect.
* **Acceptable**: use another password-protected Wi-Fi network, but make sure you trust everyone who has the password.
* **Risky**: avoid public/open Wi-Fi unless you add another layer of protection such as a VPN...

### Using a VPN

If your only solution is to use a public network then the best option is to use a **VPN**.

A **VPN** (Virtual Private Network) is a tool that makes your network connection secure, even if you are using a public Wi-Fi.
It creates a private, encrypted “tunnel” between your devices so that nobody else on the same Wi-Fi can see or interfere with your data.
By using a VPN, only devices you choose can connect securely to the server.

Although our main reason for suggesting a VPN is **security on public networks**, it also has another advantage: devices will be able connect to _Sharly Chess_ even when they are on **different networks** (for example, a phone on mobile data and a laptop on home Wi-Fi).

If you're interested in this, we highly recommend using _[Tailscale](https://tailscale.com/)_.
_Tailscale_ makes creating a VPN as simple as possible. With a free account, you can connect up to 100 devices to the same private network.

Setting this up goes beyond the scope of this documentation, but here are the essentials:

1. Create a new account on _[Tailscale](https://login.tailscale.com/admin/welcome)_.
2. Install the _Tailscale_ client on your computer and on any other devices you want to connect to the server.
3. Log in and connect to _Tailscale_ on each device.
4. On the _Sharly Chess_ server, the home page should now display the IP address of your computer on the _Tailscale_ network. Use this address to connect to the server from your other devices.
