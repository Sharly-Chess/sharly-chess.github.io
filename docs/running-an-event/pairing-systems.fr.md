---
layout: page
title: Systèmes d'appariement
permalink: /systemes-appariement-individuels/
page_id: individual-pairing-systems
parent: Événements individuels
nav_order: 450
---

# Systèmes d'appariement individuels

Un tournoi individuel utilise l'un des quatre systèmes d'appariement, choisi sur le
formulaire du tournoi (voir [Gérer les tournois]({% link docs/running-an-event/managing-tournaments.fr.md %})).
Chacun apparie des **joueur·euses** entre elles.

| Système | Idéal pour | Mode d'appariement |
|---|---|---|
| **Suisse** | Grands plateaux, moins de rondes que de joueur·euses | Apparie selon le classement à chaque ronde (système suisse néerlandais _FIDE_) |
| **Toutes‑rondes** | Petits plateaux où chacun·e doit rencontrer tout le monde | Calendrier toutes‑rondes fixe généré d'emblée |
| **[Système coupe]({% link docs/running-an-event/knockout.fr.md %})** | Coupes et barrages où le·la perdant·e est éliminé·e | Un tableau à têtes de série ; le·la vainqueur·e de chaque match continue |
| **[Keizer]({% link docs/running-an-event/keizer.fr.md %})** | Événements de club au long cours, avec présence variable | Système à valeur de classement qui apparie les présent·es de chaque ronde |

---

## Suisse

Les joueur·euses sont apparié·es ronde par ronde selon leur classement, de sorte
que celles et ceux de scores voisins se rencontrent. Il gère n'importe quel
nombre de participant·es et c'est le choix habituel lorsqu'il y a plus de
joueur·euses que de rondes.

- Les appariements utilisent le **système néerlandais _FIDE_**, avec un
  vérificateur de cohérence intégré.
- Avec un **nombre impair de joueur·euses**, une personne reçoit un **exempt
  d'appariement** (PAB) à chaque ronde. Des exempts à zéro, demi‑ ou un point
  peuvent aussi être attribués à la main.
- Les **appariements interdits** (même club, fédération ou équipe) peuvent être
  séparés, en règles strictes ou en règles souples qui se relâchent depuis le bas
  du plateau.

{: .warning }

> :warning: Les **appariements interdits** ne doivent **pas** être utilisés pour
> les événements officiels _FIDE_ — ils passent outre les règles d'appariement
> néerlandaises _FIDE_. À réserver aux formats de club et de festival.

_Variations :_

- **Système suisse standard** — apparie uniquement selon le classement.
- Six variations **accélérées** ajoutent des points fictifs au départ pour que les
  leaders se rencontrent plus tôt. Voir **[Accélérations]({% link docs/running-an-event/accelerations.fr.md %})**.

---

## Toutes‑rondes

Chaque joueur·euse rencontre tous les autres. Le calendrier complet est généré
d'emblée (les tables de Berger) : il n'y a donc aucune décision d'appariement
pendant l'événement, et **aucun exempt** — un plateau impair est géré par la table
elle‑même. Le calendrier étant fixe, on ne peut pas ajouter de joueur·euse une
fois les appariements créés.

_Variations :_

- **Berger** — toutes‑rondes simple : chaque paire se rencontre une fois.
- **Berger double ronde** — toutes‑rondes double : chaque paire se rencontre deux
  fois, couleurs inversées.

Toutes les rondes étant connues d'avance, le passage à la ronde suivante est une
étape explicite : lorsque vous naviguez au-delà de la ronde en cours, _Sharly
Chess_ vous demande s'il faut **terminer la ronde** (la suivante devient alors
la ronde en cours) ou simplement jeter un œil à la ronde suivante, et vous
prévient si des échiquiers sont encore sans résultat.

Le formulaire du tournoi propose la **règle de participation _FIDE_ 6.6** pour
les toutes‑rondes : un·e joueur·euse qui a abandonné ou a été exclu·e après
avoir disputé **moins de la moitié** de ses parties est retiré·e du classement
final et ses parties sont annulées — elles ne comptent plus dans les scores et
départages de ses adversaires (les résultats restent dans la grille américaine).

---

## Système coupe

Un format de **coupe** : les joueur·euses sont réparti·es dans un **tableau**
selon leur ordre de départ, le·la perdant·e de chaque match est éliminé·e et
le·la vainqueur·e continue, jusqu'à ce qu'il n'en reste qu'un·e. Le nombre de
rondes découle de la taille du plateau, les parties nulles sont tranchées par
des **départages de qualification** (ou par l'arbitre après un barrage), et le
classement se fait selon le tour atteint.

Voir **[Système coupe]({% link docs/running-an-event/knockout.fr.md %})** pour le
tableau, les réglages et la façon dont les matchs sont décidés.

_Variantes :_

- **Élimination simple** — une partie par match, une défaite et c'est fini.
- **Élimination simple — aller-retour** — chaque match en deux parties,
  couleurs inversées, décidé au cumul.
- **Double élimination** — une première défaite fait basculer dans un tableau
  inférieur ; une seconde élimine. Les vainqueur·es des deux tableaux se
  rencontrent en Grande finale.
- **Double élimination — aller-retour** — la double élimination avec des
  matchs en deux parties.

---

## Keizer

Un système à **valeur de classement** conçu pour les **tournois de club au long
cours** — un championnat en soirée sur de nombreuses rondes, où tout le monde ne
joue pas chaque semaine. Plutôt que de compter les points de partie, chaque
joueur·euse porte une valeur tirée de son classement actuel, et le système
apparie les personnes **présentes** à la ronde.

Voir **[Keizer]({% link docs/running-an-event/keizer.fr.md %})** pour son mode de
calcul et ses réglages.

_Variation :_ Keizer.

---

## Lequel choisir ?

- **Plus de joueur·euses que de rondes** → Suisse (ajoutez une [accélération]({% link docs/running-an-event/accelerations.fr.md %}) pour un grand plateau en peu de rondes).
- **Un petit plateau où chacun·e doit rencontrer tout le monde** → Toutes‑rondes.
- **Une coupe ou un barrage où le·la perdant·e est éliminé·e** → [Système coupe]({% link docs/running-an-event/knockout.fr.md %}).
- **Un championnat de club sur de nombreuses soirées, à présence variable** → [Keizer]({% link docs/running-an-event/keizer.fr.md %}).
