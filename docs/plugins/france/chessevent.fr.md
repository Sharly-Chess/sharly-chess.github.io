---
layout: page
title: ChessEvent
parent: Pour la France
permalink: /plugins/france/chessevent
page_id: chessevent-plugin
nav_order: 500
---

# Le plugin ChessEvent

Le plugin **ChessEvent** permet de s'interfacer avec la plateforme d'inscription _ChessEvent_ opérée par la Ligue de Bretagne des Échecs.

- [Accéder à la plateforme _ChessEvent_](https://chessevent.echecs-bretagne.fr)

L’activation de ce plugin ajoute la fonctionnalité suivante à _Sharly Chess_ :

- récupération des inscriptions aux tournois depuis la plateforme _ChessEvent_.

## Utilisation du plugin

Pour récupérer les inscriptions d'un tournoi depuis la plateforme _ChessEvent_, il faut dans la configuration du tournoi indiquer les informations suivantes :

- l'identifiant utilisé pour la connexion à la plateforme _ChessEvent_ ;
- le mot de passe utilisé pour la connexion à la plateforme _ChessEvent_ ;
- l'identifiant de l'évènement _ChessEvent_ (sur la plateforme _ChessEvent_) ;
- l'identifiant du tournoi (sur la plateforme _ChessEvent_).

{: .note }
> :information_source: L'identifiant et le mot de passe de connexion à la plateforme _ChessEvent_, ainsi que le nom de l'évènement sur le plateforme _ChessEvent_ peuvent être définis au niveau de l'évènement _Sharly Chess_ et utilisés par défaut par tous les tournois de l'évènement.

## Exemple

{% figure [caption: "Exemple d’événement sur la plateforme ChessEvent"] %}
![Exemple d’événement sur la plateforme ChessEvent](/assets/images/chessevent/chessevent-example.jpg)
{% endfigure %}

Pour ce tournoi :

- l'identifiant de l'évènement _ChessEvent_ est dans l'URL de la page (ici `BRE_35_Bretagnejeunes2025`) ;
- l'identifiant du tournoi est le texte du bouton correspondant (ici `Tournoi U12`).
