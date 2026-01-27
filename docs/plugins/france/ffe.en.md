---
layout: page
title: FFE
parent: For France
permalink: /plugins/france/ffe
page_id: ffe-plugin
nav_order: 400
---

# The _FFE_ Plugin

{: .note }
> :information_source: Dependencies: Accelerated pairings

The _FFE_ plugin provides functionality that's useful for running tournaments associated with the **French Chess Federation** (the _**F**édération **F**rançaise des **É**checs_).

{: .note }
> :information_source: The _FFE_ plugin is automatically activated for tournaments of federation "FRA".

Enabling the plugin adds a number of a features to _Sharly Chess_:

- The ability to define the tournament's _FFE_ certification number and password.
- Automatic upload the tournament results to the _FFE_ site.
- Uploading of the tournament results to the _FFE_ site.
- Import and export of PAPI files.
- Player search from the online database provided by the _FFE_.
- Downloading and local search of the player database provided by the _FFE_.
- Extra player information including the player's _FFE_ number and license status, and their league.
- Rating estimation for unrated players based on the _FFE_ rules.
- Age categories are updated on 1 September (instead of 1 January). Calculation is still based on the player’s age as of 1 January of the current year.
- Easy access to actions on the _FFE_ website: submitting regulations, managing tournament visibility, and downloading fees.
- _FFE_ specific tie-breaks calculations for compatibility with _Papi_ and the tie-break calculations that are displayed on the _FFE_ site.
- Extra prize criteria for leagues.
- Generating _FFE_ forms needed to manage French tournaments.

## Tournament Display on the _FFE_ Website

Tournament displays in Sharly Chess and on the _FFE_ website may differ:
- _Sharly Chess_ saves board numbers during round pairing and subsequent manual pairings, while the _FFE_ website calculates board numbers each time the tournament is displayed; therefore, the board numbers and order may differ.
- _Sharly Chess_ uses player pairing numbers to create acceleration groups, while the _FFE_ website uses Elo rating thresholds; therefore, the board numbers, order, and the players' virtual points displayed may differ.
- _Sharly Chess_ allows the use of all tiebreaks authorized by _FIDE_ (in addition to those of the _FFE_), but some of these tiebreaks cannot be displayed on the _FFE_ website.

In all cases, the ranking displayed by _Sharly Chess_ and on the _FFE_ website are exactly the same.

## Frequently Asked Questions

{% details Why do the player rankings not match between the online and the local _FFE_ databases? %}

  There is indeed a difference between the types of rankings (_FIDE_, national and estimated) in the two federal databases (see below).

  {: .text-center}
  ![Ranking differences between the online and local _FFE_ databases](/assets/faq/faq-ffe-rankings.en.jpg)

  This problem has existed for several years (it has been reported to the _FFE_ several times but has never been fixed). Unlike _Papi_, _Sharly Chess_ displays the observed differences before applying them, which is why arbiters are only now discovering this problem.

  In practice, **it is advisable to refer to the online _FFE_ database and only use the local _FFE_ database as a backup** (when the _FFE_ database is not available or there is no internet connection). 
{% enddetails %}

{% details How do we upload results to the _FFE_ website? %}

  Once the plugin is activated, results can be uploaded thanks to the Upload tab (left panel):

  {: .text-center}
  ![Upload tab](/assets/faq/faq-ffe-upload-1.en.jpg)

  {: .text-center}
  ![Uploading tournaments to the _FFE_ website](/assets/faq/faq-ffe-upload-2.en.jpg)

  Automatic upload can be enabled for each tournament for which _FFE_ credentials have been entered:

  {: .text-center}
  ![Enabling automatic upload for a tournament](/assets/faq/faq-ffe-upload-3.en.jpg)

  {: .text-center}
  ![Automatic upload enabled](/assets/faq/faq-ffe-upload-4.en.jpg)

  The default tournament configuration is done at the event level:

  {: .text-center}
  ![Configuring the default automatic upload](/assets/faq/faq-ffe-upload-5.en.jpg)

{% enddetails %}

<script>
  if (location.hash) {
    document.querySelector(location.hash)?.setAttribute("open", "");
  }
</script>
