---
layout: page
title: Classements
permalink: /classements/
page_id: ratings
parent: Gérer un événement
nav_order: 350
---

# Classements

Chaque tournoi range ses joueur·euses selon un **classement du tournoi**, recherché dans les listes de classement choisies dans les [paramètres du tournoi]({% link docs/running-an-event/managing-tournaments.fr.md %}#classements) : la **Source du classement** (_FIDE_, national, ou une combinaison des deux) et les **Listes de classement** dans lesquelles les classements sont recherchés, dans l'ordre.

## Choix du classement

Pour chaque sorte de classement, dans l'ordre de la **Source du classement**, _Sharly Chess_ retient la valeur de la première liste de la séquence qui en contient une. Lorsqu'aucune liste ne classe le·la joueur·euse, la valeur saisie par l'arbitre est utilisée ; à défaut, la valeur prescrite par la fédération (par exemple l'estimation selon l'âge du [plug-in _FFE_]({% link docs/plugins/france/ffe.fr.md %})).

Par exemple, dans un tournoi rapide utilisant les classements _FIDE_ avec les listes par défaut _FIDE_ rapide → _FIDE_ standard → _FIDE_ blitz, un·e joueur·euse sans classement _FIDE_ rapide est rangé·e selon son classement _FIDE_ standard (voir [l'entrée FAQ correspondante]({% link dev/faq.fr.md %}#standard-rating)).

## Lire un classement

Partout où le classement d'un·e joueur·euse est affiché, une lettre indique sa provenance :

| **F** | Un classement _FIDE_. |
| **N** | Un classement national. |
| **E** | Aucune liste ne classe le·la joueur·euse : la valeur a été saisie par l'arbitre, ou prescrite par la fédération. |

Deux marques peuvent compléter la lettre :

- Une **étoile** (`F*`, `N*`) : l'arbitre a corrigé la valeur. Le classement garde sa source, et la valeur de la liste est conservée.
- Une **cadence** en exposant (<sup>STD</sup>, <sup>RPD</sup>, <sup>BTZ</sup>) : le classement est emprunté à une autre cadence. Par exemple, dans un tournoi standard, un·e joueur·euse rangé·e selon son classement _FIDE_ rapide est affiché·e `1700 F`<sup>RPD</sup>. Un classement _FIDE_ standard dans un tournoi rapide ou blitz ne porte aucune marque, puisque c'est le classement rapide ou blitz du·de la joueur·euse pour la _FIDE_ ; pas plus que le classement d'une liste nationale qui ne publie qu'un seul classement.

Dans le tableau des joueur·euses, survolez un classement pour voir sa provenance, par exemple _FIDE standard, 02/10/2026_ (la liste et la version dans laquelle il a été lu).

## Classement du tournoi et classement _FIDE_ officiel

Un·e joueur·euse a deux classements dans un tournoi :

- le **classement du tournoi** range les joueur·euses : il donne les numéros d'appariement et alimente les départages fondés sur les classements ;
- le **classement _FIDE_ officiel** est celui que la _FIDE_ déclare et sur lequel elle classe le tournoi : le classement _FIDE_ du·de la joueur·euse à la cadence du tournoi ou, dans un tournoi rapide ou blitz, son classement _FIDE_ standard s'il·elle n'en a pas.

Une correction de l'arbitre ne modifie que le classement du tournoi : le classement officiel reste celui de la liste.

## La fiche du·de la joueur·euse

La section **Classements** de la fiche du·de la joueur·euse affiche :

| **Classement du tournoi (cadence)** | Le classement du tournoi, avec sa lettre et, en dessous, sa provenance. Saisir une autre valeur que celle d'une liste la corrige (elle est alors affichée avec une étoile) ; vider le champ rétablit la valeur de la liste. Pour un·e joueur·euse qu'aucune liste ne classe, la valeur saisie est utilisée (**E**) ; vider le champ rétablit la valeur prescrite par la fédération. |
| **Classement retenu** | Affiché lorsque le·la joueur·euse a d'autres classements. Le premier choix, _« classement · selon les listes de classement »_, est le choix automatique ; les autres sont les autres classements du·de la joueur·euse, y compris ceux de listes qui ne font pas partie des listes du tournoi (_hors des listes de classement_). En choisir un fixe sa liste : le classement garde sa source et est actualisé depuis cette liste, et sa description indique _choisi par l'arbitre_. Si la liste ne contient plus de valeur, le choix automatique s'applique de nouveau. |
| **Classement FIDE officiel** | En lecture seule. Pour les joueur·euses ayant un classement _FIDE_, le champ **K** à sa droite contient leur coefficient _FIDE_ ; laissé vide, le coefficient affiché est estimé à partir du classement et de l'âge du·de la joueur·euse. |

{: .note }
> :information_source: Dans un tournoi déclaré à la _FIDE_ en plusieurs périodes, les classements affichés sont ceux de la période en cours.

## Vérifier les classements avec les listes

Le menu **Mettre à jour** de la page Joueur·euses (également dans le menu **Actions** › **Mettre à jour les joueur·euses** d'un tournoi) commence par **Classements des joueur·euses**, qui compare les classements de chaque joueur·euse, pour la période en cours, avec la liste _FIDE_ (par identifiant _FIDE_) et la liste nationale du·de la joueur·euse (par identifiant national).

En haut de la fenêtre, les listes consultées sont affichées avec leur dernière mise à jour. Lorsqu'une copie est obsolète, ou que sa source en a une version plus récente, un avertissement les énumère, avec un bouton **Mettre à jour les listes** pour les utilisateur·ices autorisé·es à gérer les sources de données. Sous **Listes de classement utilisées**, chaque liste que nomment les listes de classement des tournois est affichée avec son état : sa dernière mise à jour, _Non installée_, _Lue en ligne_ lorsque seule sa version en ligne est disponible, _base en ligne essayée en premier_ lorsqu'elle est ainsi réglée dans les [sources de données]({% link docs/player-databases/index.fr.md %}), ou les cadences qu'elle ne publie pas.

Les joueur·euses dont les classements diffèrent sont listé·es avec leur classement du tournoi et leur classement _FIDE_ officiel, avant et **Selon les listes**. Survolez un classement pour voir sa source.

| **Classements que les listes donnent désormais différemment** | Les listes donnent un autre classement à ces joueur·euses. Ces joueur·euses sont coché·es : les nouveaux classements sont appliqués. |
| **Classements saisis par l'arbitre** | L'arbitre a corrigé ces classements, ou saisi une valeur. Ces joueur·euses ne sont pas coché·es : ils·elles gardent la valeur de l'arbitre, sauf si vous les sélectionnez pour prendre la valeur des listes. Une valeur saisie qu'aucune liste ne donne affiche _Aucune liste ne classe le·la joueur·euse_. |

Un simple changement de source, de version ou de coefficient K, sans changement de classement, est appliqué sans confirmation ; la fenêtre indique le nombre de joueur·euses concerné·es. Les joueur·euses absent·es des listes sont nommé·es sous **Introuvables dans les listes**.

{: .tip }
> :point_right: Le rappel affiché avant l'appariement de la ronde 1, ou de la première ronde d'une nouvelle période, propose le même menu **Mettre à jour**.

### Vérification automatique

Lorsque **Vérifier les classements avec les listes** est activé dans les [paramètres de l'événement]({% link docs/running-an-event/creating-an-event.fr.md %}) (par défaut), la page Joueur·euses affiche un bandeau tel que _Les listes de classement donnent un classement différent à 3 joueur·euses._ **Examiner** ouvre la fenêtre décrite ci-dessus.

Cette vérification ne lit que les copies installées des listes, sans interroger aucun serveur. Elle s'effectue à la première ouverture de l'événement, après la mise à jour d'une liste et après une modification des joueur·euses. Fermer le bandeau le masque jusqu'à la prochaine mise à jour d'une liste.
