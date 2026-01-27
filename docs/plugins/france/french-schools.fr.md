---
layout: page
title: Écoles françaises
parent: Pour la France
permalink: /plugins/france/ecoles-francaises
page_id: french-schools-plugin
nav_order: 500
---

# Module _Écoles françaises_

{: .note }
> :information_source: **Dépendance :** _FFE_

Le module **Écoles françaises** est conçu pour aider les arbitres et organisateurs·rices à gérer les tournois des **Championnats scolaires**.

Lorsqu’il est activé pour un évènement, il :

* Ajoute un nouveau type de base de données locale contenant tous les établissements scolaires et collèges de France (téléchargeable depuis _Sources de données_)
* Ajoute un champ **Établissement scolaire** pour chaque joueur·euse
* Remplace les colonnes _Fédération_, _Ligue_ et _Club_ par l’établissement scolaire dans les vues d’écran et les documents
* Ajoute une colonne **Établissement** à l’onglet _Joueurs·euses_ de l’interface d’administration
* Propose le tri **« Par établissement »** dans les documents
* Fournit un **critère de prix** par établissement scolaire
* Ajoute un document **Classement par établissement** pour lister les équipes d’établissement par ordre de classement
* Exporte l’établissement comme club lors de la génération des fichiers _Papi_
* Crée les établissements lors de l'import depuis ChessEvent et _Papi_
* Inclut l’établissement dans les exports vers le site web de la _FFE_

## Utilisation

Pour profiter pleinement de ce module, commencez par télécharger la **base de données des établissements scolaires** sur votre machine via la section **_Sources de données_** de la barre latérale.

Une fois la base installée, vous pourrez rechercher et associer les écoles par leur nom à l’aide du champ **Établissement scolaire** dans le formulaire des joueur·euses.
