---
layout: page
title: ChessEvent
parent: Plugins (extensions)
permalink: /chessevent-plugin
page_id: chessevent-plugin
nav_order: 500
---

# Le plugin ChessEvent

Le plugin **ChessEvent** permet de s'interfacer avec la plateforme d'inscription _ChessEvent_ opérée par la Ligue de Bretagne des Échecs.

- [Accéder à la plateforme ChessEvent](https://chessevent.echecs-bretagne.fr)

L’activation de ce plugin ajoute la fonctionnalité suivante à _Sharly Chess_ :

- récupération des inscriptions aux tournois depuis la plateforme _Chess Event_.

## Utilisation du plugin

Pour récupérer les inscriptions d'un tournoi depuis la plateforme _Chess Event_, il faut dans la configuration du tournoi indiquer les informations suivantes :

- l'identifiant utilisé pour la connexion à la plateforme ChessEvent ;
- le mot de passe utilisé pour la connexion à la plateforme ChessEvent ;
- l'identifiant de l'évènement ChessEvent (sur la plateforme Chess Event) ;
- l'identifiant du tournoi (sur la plateforme ChessEvent).

## Exemple

![Comment récupérer les informations nécessaires sur la plateforme ChessEvent](/assets/images/chessevent/chessevent-example.jpg)

Pour ce tournoi :

- l'identifiant de l'évènement ChessEvent est dans l'URL de la page (ici `BRE_35_Bretagnejeunes2025`) ;
- l'identifiant du tournoi est le texte du bouton correspondant (ici `Tournoi U12`).
