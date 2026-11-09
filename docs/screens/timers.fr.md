---
layout: page
title: Chronomètres
parent: Affichage
permalink: /chronometres/
page_id: timers
nav_order: 600
---

# Chronomètres

Les écrans, écrans paginés et écrans rotatifs peuvent afficher un compte à rebours — utile pour indiquer le temps restant avant la fin du pointage, avant le début de la prochaine ronde, etc.

---

## Créer un chronomètre

Dans l'onglet **Affichage → Chronomètres**, cliquez sur **Créer un chronomètre**.

Chaque chronomètre passe par **trois phases**, fixées par trois délais :

- Le chronomètre est **vert** jusqu'au premier délai avant l'heure prévue — _15 minutes_ par défaut. À partir de là, il devient progressivement **orange**.
- Il est **orange** à partir du deuxième délai avant l'heure prévue — _5 minutes_ par défaut — et devient progressivement **rouge**.
- Il est **rouge** une fois l'heure prévue atteinte, et le reste pendant le troisième délai — _10 minutes_ par défaut.
  Après cette période, le chronomètre passe automatiquement à l'heure suivante et redevient vert.

Les couleurs sont les mêmes sur tous les écrans et ne peuvent pas être modifiées. Les délais par défaut de l'évènement se modifient avec le bouton de paramètres de l'onglet **Chronomètres**.

---

## Programmer les horaires

Cliquez sur le bouton **Horaires** du chronomètre pour définir son programme. Chaque horaire a une date et une heure, et un texte affiché avant et après — par exemple _Début de la ronde 3 dans %s_, où `%s` est remplacé par le temps restant.

**Créer les horaires depuis un tournoi** remplit le programme à partir des horaires des rondes d'un tournoi, pour que le chronomètre fasse le compte à rebours avant chaque ronde.

---

## Afficher un chronomètre

Il y a deux façons de choisir où un chronomètre apparaît :

- depuis le chronomètre, avec son bouton **Écrans**, qui permet de choisir d'un coup tous les écrans, écrans paginés et écrans rotatifs qui l'affichent ;
- depuis un écran, un écran paginé ou un écran rotatif, en choisissant le chronomètre dans son champ **Chronomètre**.

Le chronomètre s'affiche alors sur ces écrans et se met à jour automatiquement selon son programme.
