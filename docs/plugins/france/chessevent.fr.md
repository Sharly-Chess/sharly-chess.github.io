---
layout: page
title: ChessEvent
parent: Pour la France
permalink: /plugins/france/chessevent
page_id: chessevent-plugin
nav_order: 500
---

# Le plugin _ChessEvent_

{: .note }
> :information_source: Dépendances : _FFE_

Le plug-in **ChessEvent** permet d’interfacer _Sharly Chess_ avec la plateforme d’inscription _ChessEvent_ opérée par la Ligue de Bretagne des Échecs.
En activant ce plug-in, vous pouvez importer les inscriptions de tournois depuis la plateforme _ChessEvent_.

## Utilisation

Pour récupérer les inscriptions d’un tournoi depuis la plateforme _ChessEvent_, vous devez renseigner les informations suivantes dans la configuration de l’_Événement_ :

- le nom d’utilisateur utilisé pour se connecter à la plateforme _ChessEvent_ ;
- le mot de passe utilisé pour se connecter à la plateforme _ChessEvent_ ;
- l’ID de l’événement _ChessEvent_ (sur la plateforme _ChessEvent_).

## Exemple

{% figure [caption: "Exemple d’événement sur la plateforme _ChessEvent_"] %}
![Exemple d’événement sur la plateforme _ChessEvent_](/assets/images/chessevent/chessevent-example.jpg)
{% endfigure %}

Pour ce tournoi, l’ID _ChessEvent_ se trouve dans l’URL de la page (ici `BRE_35_Bretagnejeunes2025`).

Une fois la configuration effectuée, vous pouvez importer un tournoi via le bouton **Importer un tournoi** sur la page _Tournois_.
Par défaut, le nom d’utilisateur, le mot de passe et l’événement _ChessEvent_ seront ceux que vous avez définis au niveau de l’_Événement_, mais vous pouvez les modifier si nécessaire.
Il vous sera également demandé l’ID du tournoi (`Tournoi U12` dans l’exemple ci-dessus).

Cela créera un nouveau tournoi avec les joueur·euses de la plateforme _ChessEvent_.

Une fois tous les tournois importés, l'option **Synchroniser avec ChessEvent** du menu _Actions_ de la page des tournois vous permet de mettre à jour vos tournois avec les dernières données de _ChessEvent_.

{: .warning }
> :warning: Synchroniser un tournoi supprimera tous les joueur·euses existant·es et les remplacera par la nouvelle liste.
