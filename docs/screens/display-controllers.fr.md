---
layout: page
title: Flux
parent: Affichage
permalink: /flux/
page_id: display-controllers
nav_order: 100
---

# Flux

Un appareil peut afficher un écran en ouvrant simplement son adresse. Mais pour changer ce qu'il affiche, il faut alors aller jusqu'à l'appareil — ce qui n'est pas pratique pour un vidéoprojecteur au plafond ou une télévision à l'autre bout de la salle.

Un **flux** règle ce problème. Vous ouvrez le flux une fois sur l'appareil, puis vous choisissez ce qu'il affiche depuis l'ordinateur de l'arbitre. Autant d'appareils que vous le souhaitez peuvent suivre le même flux : toutes les télévisions de la salle de jeu, par exemple, ou toutes les tablettes de saisie des résultats.

Les flux ne sont pas obligatoires, et beaucoup d'évènements s'en passent. Mais il est souvent judicieux de commencer par eux : créez un flux par type d'appareil — _Vidéoprojecteur_, _Tablettes_ — puis créez les écrans dont ils ont besoin.

---

## Créer un flux

Dans l'onglet **Affichage → Flux**, cliquez sur **Créer un flux** et donnez-lui un nom qui vous aidera à reconnaître l'appareil, comme _Vidéoprojecteur_.

Un flux peut être **public** ou privé. Un flux privé ne peut être suivi que par un appareil connecté avec un compte autorisé à voir les écrans privés.

Le champ **Écrans conçus pour ce flux** liste les écrans, écrans paginés, écrans rotatifs et menus destinés à cet appareil. Ils sont proposés en premier quand vous choisissez ce que le flux affiche, ce qui garde la liste courte ; tout le reste peut quand même lui être envoyé. Le même choix est disponible depuis chaque écran, dans son champ **Conçu pour**.

---

## Connecter un appareil

Cliquez sur le bouton **Connecter un appareil** du flux. Il affiche l'adresse du flux sur chacun des réseaux de votre ordinateur, avec un QR code : ouvrez l'adresse sur l'appareil, ou scannez le code. L'appareil affiche alors _Connecté. En attente d'un écran…_ jusqu'à ce que quelque chose soit envoyé au flux.

Les joueur·euses et les spectateur·ices trouvent aussi les flux publics sur la [page Affichage]({% link docs/screens/index.fr.md %}#visitors) de l'évènement, où choisir un flux l'ouvre immédiatement.

---

## Choisir ce qu'affiche un flux

Un flux affiche une seule chose à la fois, et ce que vous envoyez détermine son comportement :

- un **écran** reste affiché sur l'appareil ;
- un **écran paginé** affiche ses pages à tour de rôle, selon ses secondes par page ou toutes les 15 secondes ;
- une **seule page** d'un écran paginé reste affichée sur l'appareil ;
- un **écran rotatif** affiche ses écrans à tour de rôle ;
- un **menu** permet de naviguer entre ses écrans en touchant l'écran, ce qui convient aux tablettes.

Il y a deux façons d'envoyer quelque chose à un flux :

- depuis l'onglet **Flux**, avec le bouton <i class="bi-box-arrow-in-right"></i> **Envoyer un écran à ce flux**. Le menu liste d'abord ce qui est conçu pour le flux, groupé par catégorie, puis tout le reste sous **Autres écrans**. Un écran paginé ouvre un sous-menu : **Toutes les pages à tour de rôle**, ou l'une de ses pages ;
- depuis l'onglet **Écrans**, **Écrans rotatifs** ou **Menus**, avec le bouton <i class="bi-box-arrow-in-right"></i> de ce que vous voulez afficher, qui liste les flux. Une seule page d'un écran paginé s'envoie depuis les détails de l'écran paginé.

Chaque appareil qui suit le flux change en quelques secondes.

---

## Surveiller les flux

L'onglet **Flux** peut afficher les flux sous forme de **liste**, de **cartes** ou d'**aperçus** : une miniature en direct de ce que chaque flux affiche, qui vous permet de vérifier tous les appareils de la salle depuis la table d'arbitrage.
