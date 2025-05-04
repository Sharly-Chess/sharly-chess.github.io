---
layout: page
title: Client Controllers
parent: Screens
permalink: /client-controllers/
page_id: client-controllers
nav_order: 400
---

# Client Controllers

In many cases, you'll want users to choose which screen to display directly on the device they're using.
This is what the menu links are for — they allow users to navigate between screens from the device itself.

However, in cases where a device is used solely for display purposes (e.g. a projector showing pairings), it’s often more convenient for the arbiter to control what is shown remotely.
That’s exactly what **Client Controllers** are for.

{: .note }
> :information_source: A _client_, in this context, refers to the device or browser displaying the screen.

---

## Creating a Client Controller

To create a Client Controller, go to the **Screens → Client Controllers** menu and click the **Create a Client Controller** button.
You’ll be asked to choose a unique ID and a name for the controller — this name will help you identify the device later.

---

## Choosing a Screen to Display

Once your Client Controller is created, you can assign a screen to it in two ways:

- From the **Simple Screens** or **Rotator** pages:
  Find the screen or rotator you want to display, click the **Assign to Controller** button, and select the controller you want to update.

- From the **Client Controllers** page:
  Find the controller you'd like to update, click the **Assign Screen** button, and choose the screen or rotator you want to display.

{: .note }
> :information_source: You can assign **Simple Screens** and **Rotators** to a controller — but not **Screen Families** since they have multiple screens associated with them.
> To display a Screen Family, create a Rotator for the screens of this family and then assign the rotator to the controller.

---

## Setting Up the Display Device

From the device or browser you want to control (this could be a separate device or just another browser tab on your own machine):

1. Navigate to the event’s public interface.
2. Click **Client Controllers** in the navigation menu.
3. Select the controller you want this device to follow.

The browser will then display the screen currently assigned to that controller, and it will update automatically any time the arbiter changes the screen or rotator from the admin interface.

{: .tip }
> :point_right: You can of course have multiple devices displaying the same Client Controller.  When you update the screen that's assigned to the Client Controller, all devices will display the new screen.
