---
layout: page
title: Keizer
permalink: /keizer-fr/
page_id: keizer
parent: Événements individuels
nav_order: 470
---

# Keizer

**Keizer** est un système d'appariement pour tournois individuels, conçu pour les
**événements de club au long cours** — un championnat en soirée sur de nombreuses
rondes, où tout le monde ne joue pas chaque semaine. Il apparie les joueur·euses
**présent·es** à chaque ronde, tolère les absences et maintient des adversaires de
force voisine tout au long.

---

## Mode de calcul

Contrairement à un suisse, un score Keizer n'est **pas** un cumul de points de
partie. Chaque joueur·euse porte une **valeur de classement** tirée de sa position
actuelle :

- Avant toute partie, les joueur·euses sont classé·es par Elo et reçoivent une
  valeur — la personne en tête environ trois fois la plus basse, un point de moins
  par rang.
- Une **victoire** vaut la valeur **actuelle de l'adversaire** ; une **nulle**, la
  moitié.
- Le score de chacun·e inclut aussi **une fois sa propre valeur actuelle** (le
  bonus de valeur propre). Comme il suit le classement, une personne qui recule en
  porte un plus petit — ce n'est pas une avance de classement durable.

Chaque valeur suit le classement : **toutes les rondes passées sont donc
recalculées** après chaque ronde. Une victoire sur quelqu'un qui s'effondre
ensuite vaut moins qu'une victoire sur quelqu'un qui progresse. C'est ce qui
maintient le classement comme bonne estimation de la force, et la ronde suivante
est appariée à partir de ce classement : les joueur·euses rencontrent donc des
adversaires de force voisine.

---

## Présence et absences

Keizer n'apparie que les joueur·euses marqué·es **présent·es** à la ronde (via le
[pointage]({% link docs/running-an-event/check-in-process.fr.md %}) lorsqu'il est
utilisé). Une personne simplement absente ne marque rien à cette ronde. Une
personne en **absence excusée** (un exempt demandé) gagne une fraction
paramétrable de sa propre valeur : une soirée manquée de temps à autre ne ruine
donc pas son classement.

Les entrées tardives et les retraits ne demandent aucun traitement particulier —
on ne marque que les rondes réellement jouées.

---

## Réglages

| Réglage | Rôle |
|---|---|
| **Inclure la valeur de classement du joueur dans le score** | Ajoute le bonus de valeur propre (Keizer standard). Activé, il stabilise le classement et donc les appariements ; désactivé, le score ne vient que des résultats. Par défaut **activé**. |
| **Arrondi des points Keizer** | Conserver les fractions ou arrondir — **Garder les fractions**, **Arrondir au demi‑point** ou **Arrondir au point entier**. Par défaut **Garder les fractions**. |
| **Rondes avant une revanche** | Nombre de rondes avant que deux joueur·euses puissent être réapparié·es. Par défaut, la durée totale du tournoi (éviter les revanches tant que rien ne l'impose). |
| **Points spéciaux pour une absence** | La part de sa propre valeur gagnée pour une absence excusée, en pourcentage. Par défaut **33 %** (un tiers). |

{: .note }

> :information_source: Comme chaque score est recalculé sur l'ensemble du plateau à
> chaque ronde, les réglages Keizer peuvent être modifiés à tout moment : le
> classement se recalcule simplement.
