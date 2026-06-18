---
layout: page
title: Événements par équipes
permalink: /tournois-par-equipes/
page_id: team-tournaments
parent: Gérer un événement
nav_order: 500
---

# Événements par équipes

Un **événement** est soit un **événement par équipes**, soit un événement
individuel — jamais les deux. Dans un événement par équipes, les joueur·euses
concourent en **équipes**, les équipes sont appariées entre elles, et le
classement s'établit en scores d'équipe. Cette page est une vue d'ensemble ; voir
les pages filles pour le détail.

---

## Mettre en place les équipes

- Les **équipes** appartiennent à un événement et sont affectées à un tournoi.
  Chaque équipe a un nom, une **liste de joueur·euses** ordonnée et un·e
  **capitaine** facultatif·ve (un membre joueur ou un nom non‑joueur libre).
- Chaque équipe peut porter une **affiliation** facultative (club, ligue…),
  utilisée par le **Suisse par équipes** pour éviter d'apparier entre elles les
  équipes d'un même club ou d'une même ligue.
- La **composition** d'une équipe pour une ronde est, par défaut, les _N_
  premier·ères joueur·euses de la liste (où _N_ est le nombre d'échiquiers) ; vous
  pouvez la modifier ronde par ronde.
- Les équipes **pointent** en tant qu'unité avant de pouvoir être appariées.

---

## Systèmes d'appariement

Quatre systèmes apparient les équipes ; choisissez celui qui convient à votre
format :

- **Suisse par équipes** — apparie des équipes entières selon le classement à
  chaque ronde ; idéal pour les grands plateaux. Gère les exempts et la séparation
  des équipes apparentées.
- **Toutes‑rondes par équipes** (Berger) — chaque équipe rencontre toutes les
  autres ; calendrier fixe généré d'emblée.
- **Match en deux parties** — un face‑à‑face entre deux équipes avec alternance
  des couleurs.
- **[Molter]({% link docs/team-tournaments/molter-tables.fr.md %})** — un système à tableau fixe pour les **petits
  tournois par équipes en quelques rondes**, où tout le monde joue à chaque ronde
  et personne n'est exempt. _Sharly Chess_ génère les tableaux automatiquement.
  Voir **[Tableaux Molter]({% link docs/team-tournaments/molter-tables.fr.md %})**.

---

## Décompte des points

Les résultats d'équipe s'agrègent sur les échiquiers :

- **Points de partie (PP)** — la somme des résultats individuels des échiquiers.
  Toujours disponibles.
- **Points de match (PM)** — attribués selon l'issue du match (par ex. 2 / 1 / 0
  pour gain / nul / perte). Disponibles sur les **systèmes de match par équipes**
  (Suisse par équipes, Toutes‑rondes, Match en deux parties) — **pas** le Molter,
  qui se décompte uniquement en points de partie.

Vous choisissez le **score principal** pour le classement. Les égalités sont
tranchées par les départages que vous configurez — ceux‑ci peuvent inclure le
score secondaire ainsi qu'un mélange de départages **par équipes** et de départages
standards (Buchholz, Sonneborn‑Berger, confrontation directe…).

---

## Documents et écrans

Les tournois par équipes ajoutent les **classements par équipes**, les **feuilles
de match**, la **grille Berger** (toutes‑rondes), et à l'écran l'affichage du
**pointage des équipes**, des **matchs** et du **classement par équipes**.

{: .note }

> :information_source: Les plugins de fédération peuvent ajouter des jeux de
> règles, des règles de composition et des documents propres à chaque compétition,
> par‑dessus ces systèmes. Voir la page du plugin concerné pour le détail.
