---
layout: page
title: Papi et Sharly Chess
parent: Bien démarrer
permalink: /papi-et-sharly-chess/
page_id: papi-and-sharly-chess
nav_order: 100
---

# Papi et Sharly Chess

## La dépendance à _Papi_

_Sharly Chess_ a été [conçu à l’origine]({% link docs/history.fr.md %}) comme un complément au logiciel de gestion de tournoi _[Papi](https://www.echecs.asso.fr/Actu.aspx?Ref=142877)_, l’outil officiel de la _Fédération Française des Échecs_.

Bien que _Sharly Chess_ ait beaucoup évolué depuis ses débuts, il dépend encore actuellement de _Papi_ pour la génération des appariements, ainsi que pour le fichier de base de données qui stocke une partie des données du tournoi — notamment les joueur·euses, les appariements et les résultats.

Cette dépendance permet aux arbitres d’utiliser _Sharly Chess_ comme un complément à _Papi_, tout en gardant la possibilité de repasser à tout moment sur le logiciel officiel.

## L’avenir

Nous approchons rapidement du moment où **_Sharly Chess_ pourra être utilisé comme un outil totalement autonome**, sans aucun besoin de _Papi_.
_Sharly Chess_ intègre déjà toutes les fonctionnalités d’interface nécessaires pour gérer un tournoi en système suisse, et des versions expérimentales peuvent déjà générer les appariements de manière indépendante (le moteur d'appariement utilisé est _bbpPairings_).

Bientôt, la dépendance au fichier `.papi` sera complètement supprimée. _Sharly Chess_ pourra alors être utilisé partout, avec des fonctionnalités spécifiques à chaque fédération disponibles via un système de plugins.
Une démarche est en cours pour demander à la FIDE d’officialiser _Sharly Chess_ comme logiciel reconnu pour les tournois FIDE.

{: .tip }
> :point_right: Pour les arbitres en France : pas d’inquiétude ! Même lorsque _Sharly Chess_ ne générera plus directement de fichiers `.papi`, nous continuerons à prendre en charge les besoins spécifiques de la FFE. Grâce au système de plugins désormais intégré, notre **plugin FFE** pourra générer un fichier `.papi` parfaitement conforme pour l’envoi à la fédération.
Ò
