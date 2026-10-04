---
layout: page
title: Gérer les joueur·euses
permalink: /gerer-les-joueureuses/
page_id: managing-players
parent: Gérer un événement
nav_order: 300
---

# Gérer les joueur·euses

La liste des joueur·euses, accessible sur l'onglet **Joueur·euses**, affiche toutes les personnes ajoutées à l’événement — tous tournois confondus.

Vous pouvez trier et filtrer le tableau en utilisant les en-têtes de colonnes, ce qui facilite la gestion des participant·es dans les évènements à forte affluence.

## Ajouter des joueur·euses

Les joueur·euses peuvent être ajouté·es en cliquant sur le bouton **Ajouter un·e joueur·euse**.

Vous pouvez saisir les informations d’un·e joueur·euse manuellement, mais il est souvent plus rapide et plus fiable d’utiliser la **base _FIDE_** ou une base fédérale locale (disponible via un [plug-in]({% link docs/plugins/index.fr.md %})) pour rechercher et importer les fiches existantes. 
Consultez la section [Bases de données joueur·euses]({% link docs/player-databases/index.fr.md %}) pour plus de détails sur l’installation et l’utilisation de ces bases.

La recherche peut être **affinée** grâce au bouton de filtre à côté du champ de recherche : par **fédération**, **genre**, **catégorie d'âge** et **club** (plus la licence et la ligue pour les recherches _FFE_). Le bouton **Utiliser les critères d'un tournoi** remplit les filtres en une seule fois à partir des [critères]({% link docs/running-an-event/managing-tournaments.fr.md %}#critères) de n'importe quel tournoi de l'événement — pratique pour inscrire les joueur·euses section par section.

## Changer de tournoi ou d’équipe

Au début d’un événement, il est courant que certain·es joueur·euses souhaitent changer de tournoi — par exemple, passer de la section Open à celle des moins de 1600 Elo.
Vous pouvez faire passer les joueur·euses d’un tournoi à un autre directement dans la colonne **Tournoi** du tableau des joueur·euses.

Dans un **événement par équipes**, ce même tableau propose à la place une colonne **Équipe**, ce qui permet de déplacer un·e joueur·euse d’une équipe à une autre de la même façon.

## Mettre à jour les joueur·euses depuis les bases récentes

Pour garder à jour les informations des joueur·euses, _Sharly Chess_ compare votre liste avec les versions les plus récentes de vos [sources de données]({% link docs/player-databases/index.fr.md %}). Le menu **Mettre à jour** de la page Joueur·euses (également dans le menu **Actions** › **Mettre à jour les joueur·euses** d’un tournoi) propose :

| **Classements des joueur·euses** | Vérifie les classements de chaque joueur·euse avec la liste _FIDE_ et sa liste nationale. Voir [Vérifier les classements avec les listes]({% link docs/running-an-event/ratings.fr.md %}#vérifier-les-classements-avec-les-listes). |
| **Données des joueur·euses depuis :** _source_ | Met à jour l’identité des joueur·euses depuis la source choisie : nom, identifiant _FIDE_, identifiant national, titre, titre féminin, catégorie, genre, fédération et club. Les classements ne sont jamais modifiés ici. |

Dans les deux cas, les différences détectées vous sont présentées pour validation avant d’être appliquées.

Les classements affichés dans le tableau des joueur·euses, et la section **Classements** de la fiche du·de la joueur·euse, sont décrits dans la page [Classements]({% link docs/running-an-event/ratings.fr.md %}).
