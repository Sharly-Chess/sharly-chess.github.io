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
| **Cadence** | Le type de cadence du tournoi — Classique, Rapide ou Blitz. |
| **Classement utilisé** | Indique si le tournoi utilise le classement FIDE ou national. |
| **Dates** | Les dates de début et de fin du tournoi (remplacent celles de l’événement). |
| **Lieu** | Le lieu du tournoi (remplace celui défini au niveau de l’événement). |

### Joueurs non classés

| **Classement des joueur·euses sans classement FIDE rapide/blitz** | Voir [l’entrée FAQ correspondante]({% link dev/faq.fr.md %}#standard-rating) pour plus de détails. |

### Appariements

| **Système d’appariement** | Permet de choisir entre un système suisse ou toutes-rondes. |
| **Variante d’appariement** | Permet de sélectionner des variantes du système choisi. |
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

Les [modules]({% link docs/plugins/index.fr.md %}) peuvent ajouter des champs supplémentaires au formulaire de tournoi selon leurs fonctionnalités.

---

## Options du tournoi

Une fois le tournoi créé, il apparaît dans la page **Tournois**.
Chaque tournoi dispose de plusieurs options accessibles, notamment :

- Modifier les champs définis lors de la création
- Télécharger le tournoi sous différents formats (y compris **TRF**)
- Mettre à jour les informations des joueurs depuis les dernières bases de données de la **FIDE** ou de la fédération nationale
- Dupliquer ou supprimer le tournoi
