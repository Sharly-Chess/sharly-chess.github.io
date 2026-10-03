---
layout: page
title: Sources de données
permalink: /sources-de-donnees
page_id: data-sources
nav_order: 400
---

# Sources de données

Les sources de données servent à rechercher les joueur·euses lors de leur ajout à un tournoi, à les importer depuis un fichier par leur identifiant, et à mettre à jour leurs données (classements, titres, club…) depuis les dernières listes.

Il en existe deux sortes :

- les **bases de données locales**, téléchargées sur votre machine et interrogées sans connexion internet pendant l'événement : la liste _FIDE_ et les listes de classement des fédérations nationales ;
- les **sources en ligne**, interrogées en direct : par exemple le site de la _FFE_, fourni par son [plug-in]({% link docs/plugins/index.fr.md %}).

## Bases de données disponibles

La **base de données _FIDE_** est construite à partir de la liste publiée chaque mois par la _FIDE_ : tou·tes les joueur·euses enregistré·es, avec leur identifiant, leur fédération, leurs titres, leurs classements standard, rapide et blitz et leurs coefficients K.

Les listes des fédérations suivantes sont également converties par _Sharly Chess_ depuis les fichiers publiés par les fédérations :

| Fédération | Base | Cadences | Contient aussi |
|---|---|---|---|
| Afrique du Sud | CHESSA | standard, rapide, blitz | fédération régionale, date de naissance, genre |
| Allemagne | DSB | standard (DWZ) | identifiant et classements _FIDE_, club, année de naissance, genre |
| Angleterre | ECF | standard, rapide, blitz | identifiant _FIDE_, club, genre |
| Canada | CFC | standard, quick (rapide et blitz) | identifiant _FIDE_ |
| Danemark | DSU | standard, rapide, blitz | identifiant _FIDE_, club, année de naissance |
| Finlande | SELO | standard | club |
| France | FFE | standard, rapide, blitz | licence, ligue, club, date de naissance, genre (via le plug-in _FFE_) |
| Indonésie | Percasi | standard, rapide, blitz | identifiant _FIDE_, province, genre |
| Italie | FSI | standard | identifiant et classements _FIDE_, date de naissance, genre |
| Japon | JCF | standard, rapide | |
| Malaisie | MCF | standard | identifiant _FIDE_, état, année de naissance, genre |
| Nouvelle-Zélande | NZCF | standard, rapide | identifiant _FIDE_, club, année de naissance |
| Pays-Bas | KNSB | standard, rapide, blitz | titre, année de naissance, genre |
| République tchèque | LOK | standard, rapide | identifiant _FIDE_, club, date de naissance, genre |
| Russie | CFR | standard, rapide, blitz | identifiant _FIDE_, région, année de naissance, genre |
| Ukraine | UCF | standard | identifiant _FIDE_, région, date de naissance, genre |

Lorsqu'un·e joueur·euse trouvé·e dans une liste nationale possède un identifiant _FIDE_, ses classements, titres et fédération _FIDE_ sont complétés depuis la base _FIDE_.

Les noms sont recherchés sans tenir compte des accents ni de la casse, et une liste en cyrillique se recherche aussi depuis un clavier latin.

## Choisir ses sources de données

Seules les sources que vous utilisez apparaissent dans l'application. La fenêtre **Sources de données**, ouverte depuis le menu de navigation, liste les sources actives ; le bouton **Ajouter une source de données** propose les autres, et le bouton corbeille d'une source la retire (et supprime sa base).

Certaines sources sont activées pour vous :

- la base _FIDE_ est active d'emblée et installée au premier lancement de l'application ;
- les sources d'une fédération sont activées à la création du premier événement de cette fédération (ou lorsque vous la choisissez comme fédération par défaut) ;
- un plug-in active les sources dont il a besoin.

## Garder les bases à jour

Pour chaque base locale, la fenêtre indique le nombre de joueur·euses qu'elle contient et vous permet de choisir :

- de l'**actualiser automatiquement** lorsqu'elle est obsolète, après le délai que vous définissez (chaque jour, chaque semaine, le premier jour du mois…) ;
- de **recevoir une alerte** à la place : l'option « Sources de données » du menu affiche alors un signe d'avertissement ;
- de l'**actualiser manuellement** à tout moment — particulièrement utile le matin d'un tournoi.

Le bouton **Tout mettre à jour** met à jour toutes les listes actives en une seule fois.

Une liste qui a aussi une source en ligne, comme la base _FFE_, propose sur sa ligne le choix entre **Joueur·euses et classements depuis la copie installée** (par défaut) et **depuis la source en ligne**. Ce choix décide où sont lus les classements de la liste lorsque des joueur·euses sont ajouté·es depuis une autre liste (la liste _FIDE_ par exemple) et lorsque les classements sont vérifiés ; une recherche dans la source en ligne elle-même la lit toujours. Les classements lus en ligne le disent dans leur description, par exemple _FFE en ligne rapide, 03/10/2026_.

La liste _FIDE_ est vérifiée chaque jour auprès du serveur de la _FIDE_. La date à laquelle la _FIDE_ a publié la liste est enregistrée, et affichée comme version des classements qui en sont lus (pour les autres listes, la version est le jour de leur téléchargement). Voir [Classements]({% link docs/running-an-event/ratings.fr.md %}) pour l'affichage de ces versions sur les classements des joueur·euses.

Pendant l'installation ou la mise à jour d'une base, son bouton indique l'avancement (téléchargement, joueur·euses enregistré·es, indexation).

Lorsque le fichier d'une fédération ne peut pas être téléchargé par l'application (une connexion à un compte est nécessaire), téléchargez-le vous-même et installez-le avec le bouton dossier de la base.

## Identifiants nationaux

Un·e joueur·euse trouvé·e dans une liste nationale conserve l'identifiant de sa fédération (le numéro de licence _FFE_, le numéro de relation KNSB…) à côté de son identifiant _FIDE_. Il est affiché sur le formulaire du·de la joueur·euse, sur sa fiche avec un lien vers sa page sur le site de la fédération lorsqu'il en existe une, et il peut être imprimé sur les [chevalets]({% link docs/documents/place-cards.fr.md %}), importé et exporté dans la feuille de données des joueur·euses, et utilisé pour mettre à jour les joueur·euses depuis la liste de la fédération.
