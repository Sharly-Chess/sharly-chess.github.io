---
layout: page
title: Canaux
parent: Affichage
permalink: /canaux/
page_id: display-controllers
nav_order: 100
---

# Canaux

Un appareil peut afficher un écran, un écran rotatif ou un menu en l'ouvrant simplement. Mais pour changer ce qu'il affiche, il faut alors aller jusqu'à l'appareil — ce qui n'est pas pratique pour un vidéoprojecteur au plafond ou une télévision à l'autre bout de la salle.

Un **canal** règle ce problème. Un appareil ouvre le canal une fois, puis c'est depuis l'ordinateur de l'arbitre que vous décidez de ce qu'affiche le canal : un écran, une page d'un écran sur plusieurs pages, un écran rotatif ou un menu. Tous les appareils qui suivent le canal affichent la même chose, et changent quand vous la changez : toutes les télévisions de la salle de jeu, par exemple, ou toutes les tablettes de saisie des résultats.

Un canal n'est pas un moyen de connecter un appareil. Tout appareil peut suivre un canal, qu'il s'agisse d'un vidéoprojecteur ou d'un écran branché sur l'ordinateur où tourne _Sharly Chess_, sans aucun réseau, ou d'une tablette, d'une télévision ou d'un ordinateur sur le réseau. Une configuration courante est le vidéoprojecteur de la salle de jeu, branché sur l'ordinateur de l'arbitre et piloté par un canal.

Les canaux ne sont pas obligatoires, et beaucoup d'évènements s'en passent. Quand vous les utilisez, il est souvent judicieux de commencer par eux : créez un canal par type d'appareil — _Vidéoprojecteur_, _Tablettes_ — puis créez les écrans dont ils ont besoin.

---

## Créer un canal

Dans l'onglet **Affichage → Canaux**, cliquez sur **Créer un canal** et donnez-lui un nom qui vous aidera à reconnaître l'appareil, comme _iPad_, _Vidéoprojecteur_, _Salle_, _Entrée_ ou _Arbitres_. Le nom est vide au départ, et ces exemples s'affichent dans le champ tant que vous n'en avez pas saisi un.

Un canal peut être **public** ou privé. Un canal privé ne peut être suivi que par un appareil connecté avec un compte autorisé à voir les écrans privés.

Le champ **Écrans conçus pour ce canal** liste les écrans, écrans rotatifs et menus destinés à cet appareil. Ils sont proposés en premier quand vous choisissez ce qu'affiche le canal, ce qui garde la liste courte ; tout le reste peut quand même lui être envoyé. Ce champ n'envoie rien au canal. Le même choix est disponible depuis chaque écran, écran rotatif et menu, dans son champ **Conçu pour**, et il est conservé quand l'un d'eux est dupliqué.

Ce qui est conçu pour un canal porte un badge au nom du canal partout où il est listé ou choisi : dans les listes, les cartes et les aperçus des onglets **Écrans**, **Écrans rotatifs** et **Menus**, lors du choix du contenu d'un écran rotatif ou d'un menu, dans le champ **Conçu pour** d'un canal, lors du choix des écrans d'un chronomètre, et dans le menu d'envoi des canaux, où les badges indiquent pour quels autres canaux chaque élément est conçu.

---

## Connecter un appareil

Pour un vidéoprojecteur ou un écran branché sur cet ordinateur, ouvrez le canal avec son bouton <i class="bi-eye"></i> **Aller au canal**, puis déplacez la fenêtre sur le vidéoprojecteur et affichez-la en plein écran. Aucun réseau n'est nécessaire.

Pour un appareil sur le réseau, cliquez sur le bouton <i class="bi-qr-code"></i> **Connecter un appareil** du canal. Il affiche l'adresse du canal sur chacun des réseaux de votre ordinateur, avec un QR code : ouvrez l'adresse sur l'appareil, ou scannez le code. Utilisez autant d'appareils que vous le souhaitez : ils affichent tous ce que vous envoyez au canal.

L'appareil affiche alors _Connecté. En attente d'un écran…_ jusqu'à ce que quelque chose soit envoyé au canal. Un canal garde ce qu'il affiche quand vous le modifiez. Son bouton <i class="bi-x-lg"></i> **Retirer l'écran du canal** reprend ce qu'il affiche, et ses appareils reviennent à la page d'attente.

Les joueur·euses et les spectateur·ices trouvent aussi les canaux publics sur la [page Affichage]({% link docs/screens/index.fr.md %}#visitors) de l'évènement, où choisir un canal l'ouvre immédiatement.

---

## Choisir ce qu'affiche un canal

Un canal affiche une seule chose à la fois, et ce que vous envoyez détermine son comportement :

- un **écran sur une page** reste affiché sur l'appareil ;
- un **écran sur plusieurs pages** affiche ses pages à tour de rôle, selon ses secondes par page ou toutes les 15 secondes ;
- une **seule page** d'un écran sur plusieurs pages reste affichée sur l'appareil. Si cette page n'existe plus, par exemple parce que le tournoi a moins de joueur·euses, le canal revient à sa page d'attente ;
- un **écran rotatif** affiche ses écrans à tour de rôle ;
- un **menu** permet de naviguer entre ses écrans en touchant l'écran, ce qui convient aux tablettes.

Il y a deux façons d'envoyer quelque chose à un canal :

- depuis l'onglet **Canaux**, avec le bouton <i class="bi-box-arrow-in-right"></i> **Envoyer un écran à ce canal**. Le menu liste d'abord ce qui est conçu pour le canal, groupé par type d'écran, puis tout le reste sous **Autres écrans** ; quand rien n'est conçu pour le canal, tout est listé directement. Un écran sur plusieurs pages ouvre un sous-menu : **Toutes les pages à tour de rôle**, ou l'une de ses pages. Un écran sur plusieurs pages où l'on saisit des résultats ou des pointages ne peut pas être envoyé en entier, car ses pages ne doivent pas changer sous les yeux de la personne qui l'utilise : son sous-menu ne liste que ses pages ;
- depuis l'onglet **Écrans**, **Écrans rotatifs** ou **Menus**, avec le bouton <i class="bi-box-arrow-in-right"></i> de ce que vous voulez afficher, qui liste les canaux. Une seule page d'un écran sur plusieurs pages s'envoie depuis les détails de cet écran.

Chaque appareil qui suit le canal change en quelques secondes.

---

## Surveiller les canaux

L'onglet **Canaux** peut afficher les canaux sous forme de **liste**, de **cartes** ou d'**aperçus** : une miniature en direct de ce que chaque canal affiche, qui vous permet de vérifier tous les appareils de la salle depuis la table d'arbitrage.

