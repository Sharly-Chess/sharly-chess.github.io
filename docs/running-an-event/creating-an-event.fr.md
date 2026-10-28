---
layout: page
title: Créer un événement
permalink: /creer-un-evenement/
page_id: creating-an-event
parent: Gérer un événement
nav_order: 100
---

# Créer un événement

Les événements se créent depuis la page d’accueil de l’arbitre en cliquant sur le bouton **Créer un évènement**.

Seul le **Nom** est obligatoire : tous les autres champs ont une valeur par défaut, et peuvent être modifiés plus tard.

| **Évènement public** | Seul·es les utilisateur·ices autorisé·es voient les évènements privés. Pertinent si vous utilisez d'autres appareils sur votre [réseau]({% link docs/network/index.fr.md %}) pour afficher des [Écrans]({% link docs/screens/index.fr.md %}) : seuls les évènements marqués comme _publics_ seront accessibles depuis ces appareils. |
| **Autoriser les joueur·euses multi-tournois** | Permet à un·e joueur·euse de participer à plusieurs tournois de l’évènement. Évènements individuels uniquement ; ne peut plus être désactivé une fois que l’évènement a des joueur·euses multi-tournois. |
| **Fédération** | La fédération d’échecs responsable de l’événement. Cette information sera incluse dans l’export TRF. Vous pouvez définir une fédération par défaut pour tous les événements dans les paramètres de _Sharly Chess_. |
| **Type d’événement** | Indique si l’événement est **individuel** ou **par équipes**. Ce choix se fait ici, à la création, et **ne peut plus être modifié ensuite** — il détermine les systèmes d’appariement, les documents et les écrans disponibles. Voir [Événements par équipes]({% link docs/team-tournaments/index.fr.md %}). |
| **Nom** | Obligatoire. Un nom lisible, utilisé à des fins d’affichage (par exemple sur les [Écrans]({% link docs/screens/index.fr.md %})). |
| **Récupération du classement par défaut** | La sorte de classement que la séquence par défaut des tournois recherche d’abord, et celle à laquelle elle se rabat, sauf s’ils [choisissent une autre séquence]({% link docs/running-an-event/managing-tournaments.fr.md %}#classements). |
| **Non classé·es** | Le classement des joueur·euses qu’aucune liste ne classe et pour qui aucune valeur n’est saisie, 1400 par défaut. Chaque tournoi peut définir le sien (voir [Classements]({% link docs/running-an-event/managing-tournaments.fr.md %}#classements)). Lorsqu’un plug-in fédéral prescrit ce classement, le champ est désactivé. |
| **Vérifier les classements avec les listes** | Activé par défaut. Avertit dans la page Joueur·euses lorsque les listes de classement donnent un classement différent à certain·es joueur·euses (voir [Classements]({% link docs/running-an-event/ratings.fr.md %}#vérification-automatique)). |
| **Lieu** | Le lieu de l’événement (par exemple : ville ou salle). |
| **Étiquettes** | Des libellés libres pour organiser et filtrer la liste des évènements. Les étiquettes sont communes à tous les évènements de cette installation, et sont retirées lorsqu’un évènement est exporté ou importé. |

L’évènement n’a pas de dates propres : il va du début de son premier tournoi à la fin de son dernier.

Deux sections sont repliées par défaut :

| **Catégories d'âge** | La **Date de référence** à laquelle sont calculées les catégories d’âge des joueur·euses, par défaut la date de début de chaque tournoi (utile pour les évènements longs à cheval sur deux saisons sportives), et le **Début de la saison sportive**, janvier par défaut. |
| **Organisateur·ice** | L’**Organisateur·ice**, le **Site web**, le **Directeur·ice** (la personne responsable de l’évènement) et le **Mél de contact**. Le site web doit être une URL valide et le mél une adresse valide. |

Vous pouvez aussi activer les plug-ins dont vous aurez besoin pour cet évènement. Certains demandent des informations supplémentaires : par exemple, un identifiant ChessEvent demande un mot de passe.

## Partage des évènements

Le format privilégié pour partager des évènements entre utilisateurs de _Sharly Chess_ est le format _SCE_ (**S**harly **C**hess **E**vent).

Les évènements peuvent ainsi être :

- exportés avec le bouton **Exporter**, soit depuis la carte de l'évènement sur la page d'accueil, soit depuis la fenêtre de configuration de l'évènement (icône crayon sur la carte) ;
- importés depuis la page d'accueil (Créer un évènement > Importer un fichier SCE).

Lors de l'export, vous choisissez d'inclure ou non les joueur·euses, leurs données privées (e-mails, numéros de téléphone…) et les identifiants utilisés pour l'envoi des résultats.
