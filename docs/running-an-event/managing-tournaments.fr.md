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
Dans le menu de navigation, cliquez sur **Tournois** pour accéder à la page correspondante, puis cliquez sur le bouton **Créer un tournoi**.

| **ID** | Un identifiant unique pour le tournoi, utilisé dans les URL et en interne par _Sharly Chess_. |
| **Nom** | Un nom lisible utilisé à des fins d’affichage (par exemple sur les [Écrans]({% link docs/screens/index.fr.md %})). |
| **Rondes** | Le nombre de rondes du tournoi. |
| **Cadence** | Le type de cadence du tournoi — Classique, Rapide ou Blitz. |
| **Début / Fin** | Les dates de début et de fin du tournoi (écrasent les valeurs définies au niveau de l’événement). |
| **Lieu** | Le lieu du tournoi (écrase la valeur définie au niveau de l’événement). |
| **Dossier** | Dossier dans lequel le fichier _[Papi]({% link docs/getting-started/relation-to-papi.fr.md %})_ sera stocké (écrase la valeur définie au niveau de l’événement).
| **Nom du fichier** | Le nom du fichier _Papi_. S’il n’existe pas encore, _Sharly Chess_ peut le créer pour vous automatiquement. |
| **Cadence et incrément** | La cadence de jeu et l’incrément à la pendule pour chaque ronde. |
| **Saisie des coups illégaux** | Permet de suivre les coups illégaux commis par joueur·euse. Un maximum peut être défini ici (écrase la valeur définie au niveau de l’événement). |
| **Lien vers le règlement** | Lien vers le document des règles du tournoi (écrase la valeur définie au niveau de l’événement). |
| **Nombre maximum de dispenses** | Nombre maximal de dispenses (byes) qu’un·e joueur·euse peut demander. |
| **Dernières rondes sans dispenses** | Nombre de rondes finales pendant lesquelles les dispenses ne sont pas autorisées. |

Des [plugins]({% link docs/plugins/index.fr.md %}) peuvent ajouter des champs supplémentaires au formulaire de création selon leurs fonctionnalités.

---

## Options du tournoi

Une fois un tournoi créé, il s’affiche dans la page **Tournois**. Chaque tournoi propose plusieurs options accessibles depuis cette page, notamment :

- Modifier les champs définis lors de la création
- Télécharger les données du tournoi dans différents formats (y compris TRF)
- Mettre à jour les données des joueur·euses à partir des dernières bases FIDE ou fédérales locales
- Dupliquer ou supprimer le tournoi
