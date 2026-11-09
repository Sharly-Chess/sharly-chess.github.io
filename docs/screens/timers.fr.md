---
layout: page
title: Chronomètres
parent: Affichage
permalink: /chronometres/
page_id: timers
nav_order: 600
---

# Chronomètres

Les écrans, sur une page ou sur plusieurs pages, et les écrans rotatifs peuvent afficher un compte à rebours — utile pour indiquer le temps restant avant la fin du pointage, avant le début de la prochaine ronde, etc.

Un chronomètre contient une liste d'**horaires**. Avant chaque horaire, il fait le compte à rebours (« Début de la ronde 3 dans 4 minutes »), puis indique pendant un moment depuis combien de temps l'horaire est passé (« Ronde 3 commencée depuis 2 minutes »), et passe à l'horaire suivant.

---

## Créer un chronomètre

Dans l'onglet **Affichage → Chronomètres**, ou dans le **Guide**, cliquez sur **Créer un chronomètre**. Son nom est d'abord _Chronomètre_, puis _Chronomètre (2)_ et ainsi de suite. La fenêtre liste aussi les écrans et écrans rotatifs de l'évènement : cochez ceux qui doivent afficher le chronomètre. Un écran ou un écran rotatif affiche un seul chronomètre : en cocher un qui en affichait un autre remplace ce dernier.

Quand l'évènement n'a pas encore de chronomètre et qu'un tournoi a un calendrier, l'onglet **Chronomètres** propose aussi d'en créer un à partir de ce calendrier en un clic : le chronomètre porte le nom du tournoi et a un horaire pour chaque ronde programmée.

---

## Couleurs et délais

Autour de chaque horaire, un chronomètre passe par trois couleurs :

- il est **vert**, puis passe progressivement à l'**orange** pendant le premier délai — _15 minutes_ par défaut ;
- il passe ensuite progressivement au **rouge** pendant le deuxième délai — _5 minutes_ par défaut — et il est rouge à l'horaire ;
- il **reste rouge** après l'horaire pendant le troisième délai — _10 minutes_ par défaut — puis passe à l'horaire suivant.

Avec les délais par défaut, un chronomètre est vert jusqu'à 20 minutes avant l'horaire. Un délai peut valoir 0 : par exemple, un troisième délai de 0 fait disparaître le chronomètre dès que l'horaire est atteint.

Les délais s'écrivent dans des phrases, au-dessus d'une barre colorée comme le sera le chronomètre, avec un trait noir à l'horaire. Les délais par défaut de l'évènement se règlent avec le bouton de paramètres de l'onglet **Chronomètres**. Un chronomètre peut avoir ses propres délais, sous **Couleurs et délais de ce chronomètre** dans sa fenêtre ; un délai laissé vide prend celui de l'évènement. Les couleurs sont les mêmes sur tous les écrans et ne peuvent pas être modifiées.

---

## Programmer les horaires

Cliquez sur le nombre d'horaires d'un chronomètre pour voir sa liste d'horaires, groupés par jour. Chaque ligne indique l'heure, ce qu'est l'horaire, et les textes que les écrans afficheront avant et après.

### Ajouter un horaire

Cliquez sur **Ajouter**. Un horaire est de l'un de deux types :

- **Début d'une ronde** : indiquez le numéro de la ronde. Les textes sont automatiques : « Début de la ronde 3 dans 4 minutes », puis « Ronde 3 commencée depuis 2 minutes ». Un libellé facultatif s'affiche avant la ronde, par exemple _Opens A à D_ pour « Opens A à D : début de la ronde 3 dans 4 minutes ».
- **Autre chose** : indiquez un libellé, comme _Fin du pointage_, pour « Fin du pointage dans 4 minutes », puis « Fin du pointage (depuis 2 minutes) ».

La fenêtre montre un aperçu de ce qu'afficheront les écrans. Pour écrire les textes vous-même, ouvrez **Personnaliser les textes** : écrivez `%s` à l'endroit de la durée, et laissez un texte vide pour garder le texte automatique.

Pendant l'évènement, un nouvel horaire commence au quart d'heure suivant. Un horaire peut être fixé n'importe quel jour entre aujourd'hui et le dernier jour de l'évènement, pour qu'un compte à rebours puisse tourner pendant la préparation de l'évènement. Deux horaires d'un même chronomètre ne peuvent pas avoir la même heure, puisqu'un chronomètre affiche un horaire à la fois.

### Copier le calendrier d'un tournoi

**Copier un calendrier** compare les horaires des rondes d'un tournoi avec les horaires de rondes du chronomètre, reconnus par leur numéro de ronde. Chaque ronde est marquée :

- **Nouveau** : la ronde n'est pas encore dans le chronomètre et sera ajoutée ;
- **Déplacé** : la ronde est dans le chronomètre à une autre heure, barrée, et sera déplacée ; son libellé et ses textes sont conservés ;
- **Déjà dans le chronomètre** : rien à faire ;
- **Occupé** : un autre horaire du chronomètre est déjà à cette heure, et la ronde est laissée de côté.

Décochez les rondes que vous ne voulez pas, puis cliquez sur **Copier**. Le chronomètre n'est pas lié au tournoi : quand le calendrier du tournoi change, copiez-le à nouveau pour mettre le chronomètre à jour. Comme les rondes sont reconnues par leur numéro, un chronomètre qui fait le compte à rebours de plusieurs tournois commençant aux mêmes heures n'a besoin que du calendrier de l'un d'eux ; mieux vaut donner un chronomètre à chacun des tournois joués à des heures différentes.

### Reporter

Quand une ronde commence en retard, cliquez sur **Reporter** sur son horaire. Choisissez 5, 10, 15 ou 30 minutes, ou saisissez un autre nombre. Les horaires suivants du même jour sont reportés avec lui, sauf si vous décochez cette case. Un horaire ne peut pas être reporté à l'heure d'un autre horaire qui ne bouge pas.

---

## Compte à rebours rapide

Pour afficher « Ronde suivante dans 10 minutes » sans rien préparer, cliquez sur **Compte à rebours rapide**, dans l'onglet **Chronomètres** ou dans la barre des autres onglets d'Affichage. Indiquez un libellé — _Ronde suivante_ par défaut — puis choisissez 5, 10, 15 ou 30 minutes, ou une heure de la journée. Cochez les chronomètres auxquels l'ajouter : par défaut, ceux déjà affichés sur un écran ou un écran rotatif. **Un nouveau chronomètre** en crée un pour lui, dont les écrans sont choisis ensuite.

Le compte à rebours est un horaire ordinaire de chaque chronomètre choisi, qui revient ensuite à ses propres horaires. Il reste dans la liste des horaires, où il peut être modifié, reporté ou supprimé.

---

## Afficher un chronomètre

Il y a trois façons de choisir où un chronomètre apparaît :

- à la création du chronomètre, en cochant ses écrans et écrans rotatifs ;
- depuis la liste des chronomètres, avec la colonne **Affiché sur** ou le bouton **Écrans** de la carte, qui permet de choisir d'un coup tous les écrans et écrans rotatifs qui l'affichent. La fenêtre groupe les écrans par type d'écran, écrans sur une page et sur plusieurs pages ensemble, et chacun porte un badge pour les canaux pour lesquels il est conçu et, s'il a plusieurs pages, son nombre de pages ;
- depuis un écran ou un écran rotatif, en choisissant le chronomètre dans son champ **Chronomètre**.

Le chronomètre s'affiche alors sur ces écrans et se met à jour automatiquement selon ses horaires.
