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

| **ID** | Un identifiant unique pour le tournoi, utilisé dans les URL et en interne par _Sharly Chess_. |
| **Nom** | Un nom lisible utilisé à des fins d’affichage (par exemple sur les [Écrans]({% link docs/screens/index.fr.md %})). |
| **Rondes** | Le nombre de rondes du tournoi. |
| **Cadence** | Le type de cadence du tournoi — Classique, Rapide ou Blitz. |
| **Début / Fin** | Les dates de début et de fin du tournoi (optionnelles, par défaut les dates de l’événement). |
| **Lieu** | Le lieu du tournoi (optionnel, par défaut le lieu de l’événement). |
| **Handling of estimated rapid/blitz players** | Voir [l’entrée de la FAQ]({% link dev/faq.fr.md %}#standard-rating) pour plus de détails.
| **Cadence et incrément** | La cadence de jeu et l’incrément à la pendule (optionnels). |
| **Saisie des coups illégaux** | Permet de suivre les coups illégaux commis par joueur·euse. Un maximum peut être défini ici (optionnel, par défaut la valeur définie au niveau de l’événement). |
| **Lien vers le règlement** | Lien vers le document des règles du tournoi (optionnel, par défaut le règlement de l’événement). |
| **Nombre maximum de demi-points joker** | Nombre maximal de demi-points joker (byes) qu’un·e joueur·euse peut demander. |
| **Dernières rondes sans demi-points joker** | Nombre de rondes finales pendant lesquelles les demi-points joker ne sont pas autorisées. |

Des [plugins]({% link docs/plugins/index.fr.md %}) peuvent ajouter des champs supplémentaires au formulaire de création selon leurs fonctionnalités.

---

## Options du tournoi

Une fois un tournoi créé, il s’affiche dans l'onglet **Tournois**. Chaque tournoi propose plusieurs options accessibles, notamment :

- Modifier les champs définis lors de la création
- Télécharger les données du tournoi dans différents formats (y compris TRF)
- Mettre à jour les données des joueur·euses à partir des dernières bases FIDE ou fédérales locales
- Dupliquer ou supprimer le tournoi
