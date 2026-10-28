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

Seul le **Nom** est toujours obligatoire. Les **Rondes** le sont aussi, sauf pour les systèmes qui déterminent eux-mêmes leur nombre de rondes, ainsi que la **Variante**, sauf si un jeu de règles la choisit. Dans un évènement par équipes, les **Joueur·euses par match d'équipe** le sont également. Tous les autres champs ont une valeur par défaut.

### Propriétés

| **Nom** | Obligatoire, et unique dans l’évènement. Un nom lisible, utilisé à des fins d’affichage (par exemple sur les [Écrans]({% link docs/screens/index.fr.md %})). |
| **Rondes** | Le nombre de rondes. Les systèmes qui déterminent eux-mêmes leur nombre de rondes — un toutes-rondes d’après ses participant·es, un système coupe d’après son tableau — affichent **Automatique** à la place ; le champ est obligatoire pour les autres. Une fois le tournoi apparié, il ne peut pas être inférieur à la dernière ronde appariée. |
| **Cadence** | Standard, Rapide ou Blitz : la cadence dont les classements sont utilisés pour le tournoi (voir [Classements](#classements) ci-dessous). Elle ne peut plus être modifiée une fois le tournoi commencé. En dessous, **Préciser la cadence** ouvre l’éditeur de la cadence exacte : nombre de coups, durée et incrément de chaque période, éventuellement **Différent pour Blancs / Noirs**. Une fois définie, elle est résumée en notation compacte (par exemple 90'+30", ou 100'x40+30" → 15'+30") avec un lien **Modifier**, et incluse dans l’export TRF. Lorsque la classification _FIDE_ de la cadence exacte (le temps dont dispose chaque joueur·euse pour une partie de 60 coups : blitz jusqu’à 10 minutes, rapide en dessous de 60, standard au-delà) diffère de celle choisie, un avertissement le signale ; le choix n’est jamais modifié automatiquement. |
| **Non classé·es** | Le classement des joueur·euses qu’aucune liste ne classe et pour qui aucune valeur n’est saisie. Laissé vide, la valeur [**Non classé·es**]({% link docs/running-an-event/creating-an-event.fr.md %}) de l’événement s’applique. Lorsqu’un plug-in fédéral prescrit ce classement, le champ est désactivé (voir par exemple le [plug-in _FFE_]({% link docs/plugins/france/ffe.fr.md %}#classements)). |
| **Récupération du classement** | Les classements recherchés, par ordre de priorité : un·e joueur·euse est rangé·e selon le premier qu’il·elle possède. Chaque classement est désigné par sa liste, sa sorte et sa cadence. La première option, **Par défaut – …**, est la séquence de la fédération pour la cadence (voir ci-dessous), selon les [**Récupération du classement par défaut**]({% link docs/running-an-event/creating-an-event.fr.md %}) de l’événement. Les options **Le plus élevé du FIDE et du national** et **Le plus bas du FIDE et du national** comparent le premier classement _FIDE_ et le premier classement national que possède un·e joueur·euse. |
| **Dates** | Laissées vides, le tournoi prend les dates de l’évènement, qui va du début de son premier tournoi à la fin de son dernier (aujourd’hui, pour le premier tournoi de l’évènement). Des dates distantes de plus de 30 jours proposent de découper le tournoi en [périodes de classement]({% link docs/running-an-event/rating-periods.fr.md %}). |
| **Lieu** | Laissé vide, le lieu de l’évènement s’applique. |
| **Jeu de règles** | Affiché seulement lorsqu’un plug-in propose des jeux de règles (par exemple le [plug-in _FFE_]({% link docs/plugins/france/ffe.fr.md %})). Facultatif : il préconfigure le tournoi pour un règlement officiel (coupe fédérale, etc.), et peut ajouter ses propres champs. |

### Classements

Les champs **Cadence**, **Non classé·es** et **Récupération du classement** déterminent le classement selon lequel chaque joueur·euse est rangé·e.

Dans une liste, › sépare les classements recherchés l’un après l’autre, et → mène à la liste suivante. Par exemple, _Liste FIDE : rapide › standard → FFE : FIDE rapide › FIDE standard › national rapide_ recherche le classement rapide puis standard de la liste _FIDE_, puis les classements _FIDE_ rapide et standard que donne la liste _FFE_, puis le classement national rapide de la liste _FFE_. Une liste nationale peut donner les classements _FIDE_ de ses joueur·euses en plus de leurs classements nationaux ; les options ne citent que les classements que publient les listes : une liste nationale qui ne publie qu’un classement standard ne propose pas de classement national rapide, et une liste qui ne donne pas de classements _FIDE_ n’en propose aucun.

Les séquences par défaut de la _FIDE_ sont :

| **Standard** | Liste _FIDE_ : standard › rapide › blitz |
| **Rapide** | Liste _FIDE_ : rapide › standard › blitz |
| **Blitz** | Liste _FIDE_ : blitz › standard › rapide |

Un·e joueur·euse qui ne possède aucun des classements recherchés est rangé·e selon la valeur saisie par l’arbitre ; à défaut, selon la valeur prescrite par la fédération, s’il y en a une, puis selon la valeur **Non classé·es** du tournoi ou, à défaut, de l’événement (1400 par défaut). Voir [Classements]({% link docs/running-an-event/ratings.fr.md %}) pour l’affichage et la vérification des classements.

La carte du tournoi indique la séquence sous **Récupération du classement**.

{: .note }
> :information_source: Les plug-ins fédéraux peuvent imposer les séquences de leur fédération, qui ne peuvent alors pas être modifiées (voir par exemple le [plug-in _FFE_]({% link docs/plugins/france/ffe.fr.md %})).

### Appariements

| **Système d'appariements** | Permet de choisir le [système d’appariement]({% link docs/running-an-event/pairing-systems.fr.md %}) du tournoi. Dans un évènement par équipes, ce sont les [systèmes d’appariement par équipes]({% link docs/team-tournaments/pairing-systems.fr.md %}) qui sont proposés, au lieu du suisse / toutes-rondes. Il ne peut plus être modifié une fois le tournoi apparié. |
| **Variante** | Obligatoire, sauf si un jeu de règles la choisit. Certaines variantes (par exemple celles du [système coupe]({% link docs/running-an-event/knockout.fr.md %})) ajoutent leurs propres réglages sous ce champ. |
| **Ex æquo du classement initial** | _Évènements individuels uniquement, pour les systèmes qui l’utilisent._ L’ordre des joueur·euses de même classement et de même titre dans le classement initial. Il ne peut plus être modifié une fois le tournoi commencé. |
| **Numéro du premier échiquier** | Le numéro du premier échiquier à utiliser pour les appariements de ce tournoi. |
| **Nombre maximum de byes** | _Systèmes qui autorisent les byes uniquement (Suisse, Keizer)._ Le nombre maximum de byes qu’un·e joueur·euse peut demander. |
| **Dernières rondes sans bye** | _Systèmes qui autorisent les byes uniquement._ Le nombre de rondes finales pendant lesquelles les byes ne sont pas autorisés. |
| **Enregistrement des coups illégaux** | Le nombre maximum de coups illégaux pouvant être enregistrés par ronde pour un·e joueur·euse, de 0 à 3. |
| **Exclure les joueur·euses ayant disputé moins de 50 % de leurs parties (FIDE 6.6)** | _Toutes-rondes uniquement._ Un·e joueur·euse (ou une équipe) qui a abandonné ou a été exclu·e après avoir disputé moins de la moitié de ses parties n'est pas classé·e, et ses parties sont annulées : elles ne comptent plus dans les scores et départages de ses adversaires. |
| **Mode FIDE** | _Suisse uniquement._ Maintient le tournoi dans le cadre du règlement _FIDE_ : voir [Mode FIDE]({% link docs/running-an-event/fide-mode.fr.md %}). Activé par défaut ; le désactiver une fois la première ronde appariée est définitif. |

### Compétition par équipes

_Évènements par équipes uniquement_ (voir [Événements par équipes]({% link docs/team-tournaments/index.fr.md %})).

| **Joueur·euses par match d'équipe** | Obligatoire. Le nombre d’échiquiers de chaque match d’équipe. |
| **Taille maximum de l'effectif** | Le plus grand nombre de joueur·euses qu’une équipe peut avoir dans son effectif, au moins égal au nombre de joueur·euses par match d’équipe. Laisser vide pour ne pas fixer de limite. |
| **Score principal** | Le score sur lequel se fonde le classement : points de match ou points de partie (voir [Décompte & départages par équipes]({% link docs/team-tournaments/scoring-tie-breaks.fr.md %})). |
| **Motif des couleurs** | _Systèmes qui en utilisent un._ La couleur de la première équipe sur chaque échiquier. |
| **Utiliser les points de parties pour l'attribution des couleurs** | _Systèmes avec préférences de couleur._ Lorsque deux équipes ont le même score, celle qui a le meilleur score secondaire voit sa préférence de couleur appliquée en premier. |
| **Règle des couleurs** | _Systèmes avec préférences de couleur._ Le type A utilise de simples préférences Blancs/Noirs, tandis que le type B distingue les préférences fortes et faibles. |
| **Avertir des compositions mal ordonnées** | Affiche un avertissement lorsqu’une composition place les joueur·euses dans un ordre différent de celui de l’effectif. La composition peut toujours être réordonnée librement. |

### Attribution des points

Cette section est repliée par défaut, et absente des tournois Keizer. Elle fixe les points d’une **Victoire** (1), d’une **Nulle** (0,5), d’une **Défaite** (0), d’une **Absence** (la valeur de la défaite) et de l’**Exempt**, le bye attribué par l’appariement (la valeur de la victoire). Dans un évènement par équipes, les points de partie et les points de match sont fixés séparément ; l’exempt d’une équipe vaut par défaut un match nul.

Une victoire doit valoir au moins une nulle, et une nulle au moins une défaite ; deux nulles ne peuvent pas valoir plus qu’une victoire et une défaite. Un exempt ne peut pas valoir plus qu’une victoire, et avec le décompte standard 1-0,5-0, il vaut 1, 0,5 ou 0.

### Critères

La section **Critères**, repliée par défaut, décrit qui peut participer au tournoi : **genre**, fourchette d'**Elo**, **catégorie** d'âge, **club** et **fédération**. Les critères ne sont pas imposés lors de l'ajout des joueur·euses, mais ils pilotent la [répartition des joueur·euses]({% link docs/running-an-event/managing-tournaments.fr.md %}#répartir-les-joueureuses-dans-les-tournois) dans les tournois et peuvent remplir en un clic les filtres de la [recherche de joueur·euses]({% link docs/running-an-event/managing-players.fr.md %}#ajouter-des-joueureuses).

Les [modules]({% link docs/plugins/index.fr.md %}) peuvent ajouter des champs supplémentaires au formulaire de tournoi selon leurs fonctionnalités.

### Horaires

La section **Horaires**, repliée par défaut, fixe la date et l’heure de chaque ronde une fois le nombre de rondes connu. Chaque ronde doit se tenir dans les dates du tournoi, après la précédente. Un tournoi découpé en [périodes de classement]({% link docs/running-an-event/rating-periods.fr.md %}) y affiche ses périodes.

---

## Options du tournoi

Une fois le tournoi créé, il apparaît dans la page **Tournois**.
Chaque tournoi dispose de plusieurs options accessibles, notamment :

- Modifier les champs définis lors de la création
- Télécharger le tournoi sous différents formats (y compris **TRF**)
- Mettre à jour les classements et les données des joueur·euses depuis les dernières listes (**Actions** › **Mettre à jour les joueur·euses**, voir [Classements]({% link docs/running-an-event/ratings.fr.md %}#vérifier-les-classements-avec-les-listes))
- Dupliquer ou supprimer le tournoi

---

## Répartir les joueur·euses dans les tournois

Le bouton **Répartir les joueur·euses dans les tournois** (sur la page Tournois, et dans le menu **Actions** de la page Joueur·euses) répartit **tou·tes les joueur·euses de l'évènement** entre ses tournois en une seule opération, quel que soit le tournoi dans lequel ils·elles se trouvent. La répartition n'est possible que dans les évènements individuels, avant le début de tout tournoi, et lorsque tous les tournois ont la même cadence (Classique, Rapide ou Blitz).

{: .tip }
> :point_right: Une façon pratique d'organiser les inscriptions consiste à créer un unique **tournoi d'attente** qui recueille toutes les inscriptions — manuellement, depuis un fichier ou depuis [_Sharly-Chess.com_]({% link docs/events/index.fr.md %}) — puis à répartir les joueur·euses dans les vrais tournois une fois les inscriptions closes. Attribuez 0 joueur·euse au tournoi d'attente (**Classement décroissant**) ou ne le sélectionnez pas (**Selon les critères de chaque tournoi**) ; une fois vidé, il peut être supprimé.

Deux types de répartition sont proposés :

| **Classement décroissant** | Trie les joueur·euses par Elo décroissant et vous laisse choisir combien vont dans chaque tournoi, de la section la plus forte à la plus faible. |
| **Selon les critères de chaque tournoi** | Affecte chaque joueur·euse au premier tournoi dont il·elle remplit les critères (catégorie d'âge, Elo, genre…). |

Avec le type **classement décroissant**, vous pouvez aussi :

- **Définir des groupes équilibrés** — sélectionnez plusieurs tournois (cliquer-glisser) pour former un groupe. Les joueur·euses sont distribué·es aux tournois du groupe **un·e par un·e**, de sorte que les sections aient des **Elo équilibrés** plutôt qu'une section la plus forte et une la plus faible.
- **Séparer les joueur·euses du même club** — répartit les joueur·euses d'un même club entre les tournois équilibrés, autant que possible, pour que les membres d'un même club ne se rencontrent pas.

{: .tip }
> :point_right: La répartition repose sur les Elo : vérifiez d'abord les classements des joueur·euses avec **Mettre à jour** › **Classements des joueur·euses** (voir [Classements]({% link docs/running-an-event/ratings.fr.md %}#vérifier-les-classements-avec-les-listes)). La fenêtre de répartition vous le rappelle.
