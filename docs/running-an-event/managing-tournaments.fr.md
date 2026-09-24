---
layout: page
title: Gérer les tournois
permalink: /gerer-les-tournois/
page_id: managing-tournaments
parent: Gérer un événement
nav_order: 200
---

# Gérer les tournois

## Créer un tournoi

Une fois un événement créé, vous pouvez y ajouter un ou plusieurs tournois.
Dans le menu de navigation, accédez à l'onglet **Tournois**, puis cliquez sur le bouton **Créer un tournoi**.

### Propriétés

| **Nom** | Un identifiant unique pour le tournoi, utilisé dans les URL et en interne par _Sharly Chess_.  |
| **Rondes** | Le nombre de rondes du tournoi. |
| **Joueur·euses par équipe** | _Événements par équipes uniquement._ Le nombre d’échiquiers alignés par chaque équipe. |
| **Cadence** | Le type de cadence du tournoi — Classique, Rapide ou Blitz. |
| **Classement utilisé** | Indique si le tournoi utilise le classement FIDE ou national. |
| **Dates** | Les dates de début et de fin du tournoi (remplacent celles de l’événement). |
| **Lieu** | Le lieu du tournoi (remplace celui défini au niveau de l’événement). |

### Joueurs non classés

| **Classement des joueur·euses sans classement FIDE rapide/blitz** | Voir [l’entrée FAQ correspondante]({% link dev/faq.fr.md %}#standard-rating) pour plus de détails. |

### Appariements

| **Système d’appariement** | Permet de choisir le [système d’appariement]({% link docs/running-an-event/pairing-systems.fr.md %}) du tournoi. Dans un événement par équipes, ce sont les [systèmes d’appariement par équipes]({% link docs/team-tournaments/pairing-systems.fr.md %}) qui sont proposés, au lieu du suisse / toutes-rondes. |
| **Variante d’appariement** | Permet de sélectionner des variantes du système choisi. Certaines variantes (par exemple celles du [système coupe]({% link docs/running-an-event/knockout.fr.md %})) ajoutent leurs propres réglages sous ce champ. |
| **Numéro de la première table** | Le numéro de table à utiliser pour la première table de ce tournoi. |
| **Nombre maximum de demi-points joker** | Nombre maximal de demi-points joker (byes) qu’un·e joueur·euse peut demander. |
| **Dernières rondes sans demi-points joker** | Nombre de rondes finales pendant lesquelles les demi-points joker ne sont pas autorisées. |

### Cadence de jeu

Vous pouvez définir la **cadence de jeu** du tournoi.
Cette information sera incluse dans l’export **TRF**.

### Règlement

| **Emplacement du règlement** | Lien vers le document de règlement du tournoi. |
| **Saisie des coups illégaux** | Permet de suivre les coups illégaux commis par joueur·euse. Un maximum peut être défini ici. |
| **Comptage des points** | Permet de choisir entre le système standard 1–0,5–0 ou le système 3–1–0. |
| **Valeur du forfait** | Le nombre de points attribués à un joueur recevant un forfait. |
| **Exclure les joueur·euses ayant disputé moins de 50 % de leurs parties (FIDE 6.6)** | _Toutes-rondes uniquement._ Un·e joueur·euse (ou une équipe) qui a abandonné ou a été exclu·e après avoir disputé moins de la moitié de ses parties n'est pas classé·e, et ses parties sont annulées : elles ne comptent plus dans les scores et départages de ses adversaires. |

### Critères

La section **Critères** décrit qui peut participer au tournoi : **genre**, fourchette d'**Elo**, **catégorie** d'âge, **club** et **fédération**. Les critères ne sont pas imposés lors de l'ajout des joueur·euses, mais ils pilotent la [répartition des joueur·euses]({% link docs/running-an-event/managing-tournaments.fr.md %}#répartir-les-joueureuses-dans-les-tournois) dans les tournois et peuvent remplir en un clic les filtres de la [recherche de joueur·euses]({% link docs/running-an-event/managing-players.fr.md %}#ajouter-des-joueureuses).

Les [modules]({% link docs/plugins/index.fr.md %}) peuvent ajouter des champs supplémentaires au formulaire de tournoi selon leurs fonctionnalités.

---

## Options du tournoi

Une fois le tournoi créé, il apparaît dans la page **Tournois**.
Chaque tournoi dispose de plusieurs options accessibles, notamment :

- Modifier les champs définis lors de la création
- Télécharger le tournoi sous différents formats (y compris **TRF**)
- Mettre à jour les informations des joueurs depuis les dernières bases de données de la **FIDE** ou de la fédération nationale
- Dupliquer ou supprimer le tournoi

---

## Répartir les joueur·euses dans les tournois

Le bouton **Répartir les joueur·euses dans les tournois** (sur la page Tournois, et dans le menu **Actions** de la page Joueur·euses) répartit **tou·tes les joueur·euses de l'évènement** entre ses tournois en une seule opération, quel que soit le tournoi dans lequel ils·elles se trouvent. La répartition n'est possible que dans les évènements individuels, avant le début de tout tournoi, et lorsque tous les tournois ont la même cadence (Classique, Rapide ou Blitz).

{: .tip }
> :point_right: Une façon pratique d'organiser les inscriptions consiste à créer un unique **tournoi d'attente** qui recueille toutes les inscriptions — manuellement, depuis un fichier ou depuis [_Sharly-Chess.com_]({% link docs/events/index.fr.md %}) — puis à répartir les joueur·euses dans les vrais tournois une fois les inscriptions closes. Attribuez 0 joueur·euse au tournoi d'attente (**Classement décroissant**) ou ne le sélectionnez pas (**Selon les critères de chaque tournoi**) ; une fois vidé, il peut être supprimé.

Deux types de répartition sont proposés :

| **Classement décroissant** | Trie les joueur·euses par Elo décroissant et vous laisse choisir combien vont dans chaque tournoi, de la section la plus forte à la plus faible. |
| **Selon les critères de chaque tournoi** | Affecte chaque joueur·euse au premier tournoi dont il·elle remplit les critères (catégorie d'âge, Elo, genre…). |

Avec le type **classement décroissant**, vous pouvez aussi :

- **Définir des groupes équilibrés** — sélectionnez plusieurs tournois (cliquer-glisser) pour former un groupe. Les joueur·euses sont distribué·es aux tournois du groupe **un·e par un·e**, de sorte que les sections aient des **Elo équilibrés** plutôt qu'une section la plus forte et une la plus faible.
- **Séparer les joueur·euses du même club** — répartit les joueur·euses d'un même club entre les tournois équilibrés, autant que possible, pour que les membres d'un même club ne se rencontrent pas.

{: .tip }
> :point_right: La répartition repose sur les Elo : mettez d'abord à jour les informations des joueur·euses depuis les dernières listes de classement (voir [Gérer les joueur·euses]({% link docs/running-an-event/managing-players.fr.md %})). La fenêtre de répartition vous le rappelle.
