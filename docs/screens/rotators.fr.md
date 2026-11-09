---
layout: page
title: Écrans rotatifs
parent: Affichage
permalink: /ecrans-rotatifs/
page_id: rotators
nav_order: 400
---

# Écrans rotatifs

Un **écran rotatif** affiche plusieurs écrans à tour de rôle sur un même appareil, automatiquement — par exemple les appariements, puis le classement, puis les derniers résultats sur le vidéoprojecteur de la salle de jeu.

---

## Créer un écran rotatif

Dans l'onglet **Affichage → Écrans rotatifs**, ou dans le **Guide**, cliquez sur **Créer un écran rotatif**. Son nom est d'abord _Écran rotatif_, puis _Écran rotatif (2)_ et ainsi de suite ; remplacez-le par un nom qui indique où il est affiché. En plus de son nom, un écran rotatif a :

- un **délai**, le nombre de secondes pendant lesquelles chaque écran est affiché ;
- un [chronomètre]({% link docs/screens/timers.fr.md %}), affiché sur tous ses écrans ;
- un **message d'alerte**, affiché sur tous ses écrans, ou le message d'alerte de chaque écran ;
- les [canaux]({% link docs/screens/display-controllers.fr.md %}) pour lesquels il est **conçu**, qui le proposent en premier quand vous choisissez ce qu'ils affichent.

Cliquez ensuite sur le bouton **Écrans** de l'écran rotatif pour choisir ce qu'il affiche. Le bouton **+ Écrans** ouvre une liste unique regroupant les écrans sur une page et sur plusieurs pages, par type d'écran ; chaque écran porte un badge pour les canaux pour lesquels il est conçu et, s'il a plusieurs pages, son nombre de pages. Choisissez-en autant que vous voulez — le même écran peut même apparaître deux fois — et faites-les glisser pour fixer leur ordre.

Quand l'écran rotatif arrive à un **écran sur plusieurs pages**, il affiche chacune de ses pages à tour de rôle. Chaque page est affichée pendant les **secondes par page** de cet écran, s'il en fixe, et sinon pendant le délai de l'écran rotatif.

{: .warning }
> :warning: Les écrans rotatifs servent à _afficher_ des écrans, pas à _saisir_ quoi que ce soit. Les écrans qui acceptent la saisie — résultats ou pointages — ne peuvent pas être ajoutés à un écran rotatif, pour qu'ils ne changent pas sous les yeux de la personne qui les utilise.

---

## Afficher un écran rotatif

Un écran rotatif peut être ouvert directement avec son bouton <i class="bi-eye"></i> **voir**, sur cet ordinateur ou sur un appareil du réseau, ou envoyé à un [canal]({% link docs/screens/display-controllers.fr.md %}) avec son bouton <i class="bi-box-arrow-in-right"></i>, pour que chaque appareil qui suit le canal affiche ses écrans à tour de rôle.

