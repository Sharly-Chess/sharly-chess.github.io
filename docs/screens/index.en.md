---
layout: page
title: Screens
permalink: screens/
page_id: screens
nav_order: 300
---

# Screens

One of _Sharly Chess_'s flagship features is the ability to display pairings and live results during a tournament. These can be shown on a projector or a screen attached directly to the arbiter’s machine, or even on other devices connected to the local network.

## A Built-in Web Server

To make this possible, _Sharly Chess_ includes a built-in web server that other devices can connect to.
In fact, the entire interface is built using web pages — which is why you need a browser to access it, even on your local machine.

Don’t be put off by the technical terms — you don’t need to know anything about web development to use _Sharly Chess_.  A web server is simply a program that sends web pages to browsers that connect to it.

### Accessing _Sharly Chess_ – the URL

The URL is the address you enter into your browser's address bar to access the _Sharly Chess_ interface.  On the machine where _Sharly Chess_ is running, the URL for the home page is:

```
http://127.0.0.1
```

If you’re only using one machine, you can simply open a new browser window and enter the **local URL** to view the _Sharly Chess_ interface.
Typically, you’ll want to navigate to the **public** interface where you can access and display the Screen's you've configured — and then move that browser window to the connected screen or projector so players can see the Screen.

If you'd like to access _Sharly Chess_ from other devices on the network, open a browser on that device and enter the **LAN/WAN URL**.

To find the LAN/WAN URL, visit the home page of _Sharly Chess_ on your machine.

{: .note }
> ⓘ The admin interface is only accessible via the **local URL**.

### The Local Network

To access the _Sharly Chess_ server from other devices, all devices must be on the same local network.
If the venue has Wi-Fi, then simply connect all devices to that Wi-Fi network.

If no Wi-Fi is available, here are a few options:

- Share your mobile phone’s internet connection to create a temporary Wi-Fi network.
- Bring your home router with you (the box that gives you your internet access). It doesn’t need to be connected to the internet at the venue — devices just need to connect to it's Wi-Fi network.
- If you’re technically inclined, you can configure your main computer to act as a Wi-Fi hotspot and let other devices connect directly to it.
