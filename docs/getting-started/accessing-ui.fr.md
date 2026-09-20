---
layout: page
title: Accéder à l’interface utilisateur
permalink: /interface-utilisateur/
page_id: accessing-ui
parent: Bien démarrer
nav_order: 60
---

## Un serveur web intégré

Pour rendre cela possible, _Sharly Chess_ intègre un serveur web auquel d’autres appareils peuvent se connecter.
En réalité, toute l’interface de _Sharly Chess_ est construite comme une page web — c’est pourquoi vous avez besoin d’un navigateur pour l’utiliser, même depuis votre propre machine.

{: .tip }
> :point_right: Pas d’inquiétude : aucune connaissance en développement web n’est nécessaire pour utiliser _Sharly Chess_.
Un serveur web n’est qu’un programme capable d’envoyer des pages à un navigateur connecté.

### Accéder à _Sharly Chess_

La façon la plus simple d’accéder à _Sharly Chess_ est de cliquer sur le bouton **« Ouvrir l’application (navigateur) »** dans la fenêtre principale de l’application.
Cela ouvrira votre navigateur par défaut et affichera l’interface de _Sharly Chess_.

Il est également possible d’accéder à l’interface _Sharly Chess_ depuis d’autres appareils du réseau. Vous trouverez plus d’informations à ce sujet dans la section [Réseau]({% link docs/network/index.fr.md %}).

## La fenêtre principale de l’application

La fenêtre qui s’ouvre au lancement de _Sharly Chess_ est le serveur lui-même : la fermer arrête _Sharly Chess_. Outre l’ouverture du navigateur, elle regroupe tout ce qui concerne l’application dans son ensemble plutôt qu’un évènement en particulier :

| **Accueil** | Ouvrir l’application dans le navigateur, et voir les adresses que les autres appareils peuvent utiliser pour s’y connecter. |
| **Réseaux** | Les réseaux auxquels votre ordinateur est connecté, et l’adresse de _Sharly Chess_ sur chacun d’eux (voir [Réseau]({% link docs/network/index.fr.md %})). |
| **Plug-ins** | Installer et désinstaller des [plug-ins]({% link docs/plugins/index.fr.md %}). |
| **Logs** | Le journal de l’application, utile pour signaler un problème. |
| **Paramètres** | La **langue**, la **fédération** par défaut et le **format de date** ; le lancement d’un navigateur au démarrage ; les fonctionnalités expérimentales ; le **dossier des données** (l’ouvrir, ou le déplacer) ; et les mises à jour (rechercher les mises à jour, inclure les versions bêta). |

{: .note }
> :information_source: Depuis la version 5.1, les paramètres de langue, de fédération et de format de date, ainsi que l’installation des plug-ins, se trouvent dans cette fenêtre et non plus dans l’interface du navigateur.
