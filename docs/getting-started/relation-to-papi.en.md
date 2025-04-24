---
layout: page
title: Relation to Papi
parent: Getting Started
permalink: relation-to-papi/
page_id: relation-to-papi
nav_order: 100
---

# Relation to Papi

## A Bit of History

_Sharly Chess_ began life as **PapiWeb**, created by Pascal Aubry in 2013 as a companion to the tournament management software **[Papi](https://www.echecs.asso.fr/Actu.aspx?Ref=142877)**, the official tool of the _French Chess Federation_. PapiWeb provided two major features that _Papi_ lacks: the ability to display pairings on external screens, and the option for players to enter their own results.

## The Dependency on Papi

Although _Sharly Chess_ has evolved significantly since its early days, it still currently relies on _Papi_ for generating pairings, and for providing the database file for storing some of the tournament data — including players, pairings, and results. This dependency allows arbiters to use _Sharly Chess_ as a complement to _Papi_, with the flexibility to return to the official software at any time.

## The Future

We’re now rapidly approaching the point where **_Sharly Chess_ can be used as a fully standalone tool**, with no need for _Papi_. _Sharly Chess_ already includes all the interface features required to run a Swiss-system tournament, and experimental versions can also generate pairings independently.

Soon, we’ll eliminate the dependency on the _Papi_ file entirely. _Sharly Chess_ will be usable anywhere, with federation-specific features provided through a plugin system.  Once we reach this stage we'll apply for FIDE endorsement.

For arbiters in France — no worries: even once _Sharly Chess_ stops writing directly to `.papi` files, we’ll continue to support FFE workflows. _Sharly Chess_ now includes plugin support, and our **FFE plugin** will be able to generate a valid `.papi` file for submission to the federation.
