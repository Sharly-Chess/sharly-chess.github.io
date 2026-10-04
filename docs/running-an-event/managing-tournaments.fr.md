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
| **Dates** | Les dates de début et de fin du tournoi (remplacent celles de l’événement). Des dates distantes de plus de 30 jours proposent de découper le tournoi en [périodes de classement]({% link docs/running-an-event/rating-periods.fr.md %}). |
| **Lieu** | Le lieu du tournoi (remplace celui défini au niveau de l’événement). |

### Classements

| **Classement utilisé** | La cadence du tournoi — Standard, Rapide ou Blitz : la cadence dont les classements sont utilisés pour le tournoi. |
| **Classements essayés** | Les classements selon lesquels les joueur·euses sont rangé·es, essayés dans cet ordre : un·e joueur·euse reçoit le premier qu’il·elle possède. Chaque classement est désigné par sa liste, sa sorte et sa cadence. La première option, **Par défaut – …**, est la séquence de la fédération pour la cadence (voir ci-dessous), selon les [**Classements essayés par défaut**]({% link docs/running-an-event/creating-an-event.fr.md %}) de l’événement. Les options **Le plus élevé du FIDE et du national** et **Le plus bas du FIDE et du national** comparent le premier classement _FIDE_ et le premier classement national que possède un·e joueur·euse. |

Dans une liste, › sépare les classements essayés l’un après l’autre, et → mène à la liste suivante. Par exemple, _Liste FIDE : rapide › standard → FFE : FIDE rapide › FIDE standard › national rapide_ essaie le classement rapide puis standard de la liste _FIDE_, puis les classements _FIDE_ rapide et standard que donne la liste _FFE_, puis le classement national rapide de la liste _FFE_. Une liste nationale peut donner les classements _FIDE_ de ses joueur·euses en plus de leurs classements nationaux ; les options ne citent que les classements que publient les listes : une liste nationale qui ne publie qu’un classement standard ne propose pas de classement national rapide, et une liste qui ne donne pas de classements _FIDE_ n’en propose aucun.

Les séquences par défaut de la _FIDE_ sont :

| **Standard** | Liste _FIDE_ : standard › rapide › blitz |
| **Rapide** | Liste _FIDE_ : rapide › standard › blitz |
| **Blitz** | Liste _FIDE_ : blitz › standard › rapide |

Un·e joueur·euse qui ne possède aucun des classements essayés reçoit la valeur saisie par l’arbitre ; à défaut, la valeur prescrite par la fédération. Voir [Classements]({% link docs/running-an-event/ratings.fr.md %}) pour l’affichage et la vérification des classements.

La carte du tournoi indique les classements essayés (**Classements essayés → …**).

{: .note }
> :information_source: Les plug-ins fédéraux peuvent imposer les séquences de leur fédération, qui ne peuvent alors pas être modifiées (voir par exemple le [plug-in _FFE_]({% link docs/plugins/france/ffe.fr.md %})).

### Appariements

| **Système d’appariement** | Permet de choisir le [système d’appariement]({% link docs/running-an-event/pairing-systems.fr.md %}) du tournoi. Dans un événement par équipes, ce sont les [systèmes d’appariement par équipes]({% link docs/team-tournaments/pairing-systems.fr.md %}) qui sont proposés, au lieu du suisse / toutes-rondes. |
| **Variante d’appariement** | Permet de sélectionner des variantes du système choisi. Certaines variantes (par exemple celles du [système coupe]({% link docs/running-an-event/knockout.fr.md %})) ajoutent leurs propres réglages sous ce champ. |
| **Numéro de la première table** | Le numéro de table à utiliser pour la première table de ce tournoi. |
| **Nombre maximum de demi-points joker** | Nombre maximal de demi-points joker (byes) qu’un·e joueur·euse peut demander. |
| **Dernières rondes sans demi-points joker** | Nombre de rondes finales pendant lesquelles les demi-points joker ne sont pas autorisées. |
| **Mode FIDE** | _Suisse uniquement._ Maintient le tournoi dans le cadre du règlement _FIDE_ : voir [Mode FIDE]({% link docs/running-an-event/fide-mode.fr.md %}). Activé par défaut ; le désactiver une fois la première ronde appariée est définitif. |

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
- Mettre à jour les classements et les données des joueur·euses depuis les dernières listes (**Actions** › **Mettre à jour les joueur·euses**, voir [Classements]({% link docs/running-an-event/ratings.fr.md %}#vérifier-les-classements-avec-les-listes))
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
> :point_right: La répartition repose sur les Elo : vérifiez d'abord les classements des joueur·euses avec **Mettre à jour** › **Classements des joueur·euses** (voir [Classements]({% link docs/running-an-event/ratings.fr.md %}#vérifier-les-classements-avec-les-listes)). La fenêtre de répartition vous le rappelle.
