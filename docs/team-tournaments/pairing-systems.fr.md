---
layout: page
title: Systèmes d'appariement
permalink: /systemes-appariement-equipes/
page_id: team-pairing-systems
parent: Événements par équipes
nav_order: 100
---

# Systèmes d'appariement par équipes

Un tournoi par équipes utilise l'un des cinq systèmes d'appariement, choisi sur
le formulaire du tournoi. Chacun apparie des **équipes** entre elles ; le résultat
d'un match est l'agrégat de ses échiquiers individuels.

| Système | Idéal pour | Mode d'appariement |
|---|---|---|
| **Suisse par équipes** | Grands plateaux, peu de rondes | Apparie les équipes selon le classement à chaque ronde, comme un suisse individuel |
| **Toutes‑rondes par équipes** | Petits plateaux, chaque équipe rencontre toutes les autres | Calendrier toutes‑rondes fixe généré d'emblée |
| **[Coupe par équipes]({% link docs/running-an-event/knockout.fr.md %})** | Coupes et barrages où l'équipe perdante est éliminée | Un tableau à têtes de série ; l'équipe gagnante continue |
| **Match par équipes en deux parties** | Un face‑à‑face unique entre deux équipes | Deux parties avec couleurs inversées |
| **[Molter]({% link docs/team-tournaments/molter-tables.fr.md %})** | Petits plateaux, quelques rondes, sans exempt | Tableau fixe d'échiquiers entre équipes |

---

## Suisse par équipes

Les équipes sont appariées ronde par ronde selon leur classement, comme un suisse
individuel. Il gère n'importe quel nombre d'équipes et c'est le choix habituel
lorsqu'il y a plus d'équipes que de rondes.

- Avec un **nombre impair d'équipes**, une équipe reçoit un **exempt d'appariement**
  (PAB) à chaque ronde.
- C'est le seul système par équipes qui applique la **protection par affiliation** :
  les équipes de même affiliation (club, ligue…) sont séparées dans la mesure du
  possible.

_Variation :_ Standard.

---

## Toutes‑rondes par équipes

Chaque équipe rencontre toutes les autres. Le calendrier complet, quelles équipes
se rencontrent à chaque ronde, est fixé avant le début du tournoi : aucune
décision d'appariement pendant l'épreuve. Les joueur·euses restent apparié·es
ronde par ronde, avec **Apparier**, pour que chaque équipe puisse changer sa
composition entre les rondes. On ne peut plus ajouter d'équipe une fois une
ronde appariée.

_Variations :_

- **Berger** — toutes‑rondes simple selon les tables de Berger : chaque paire
  d'équipes se rencontre une fois.
- **Double Berger** — toutes‑rondes double selon les tables de Berger : chaque
  paire se rencontre deux fois, couleurs inversées.
- **Calendrier personnalisé** — toutes‑rondes simple sur un calendrier que vous
  établissez vous‑même.
- **Calendrier personnalisé aller-retour** — toutes‑rondes double sur un
  calendrier que vous établissez vous‑même.

Un tournoi Berger suit les tables de Berger ; une fois une ronde appariée,
**Modifier le calendrier** dans l'onglet des appariements permet de changer son
calendrier. L'onglet des appariements d'un tournoi personnalisé s'ouvre
directement sur son calendrier tant qu'il n'est pas enregistré ; **Modifier le
calendrier** permet ensuite de le changer. Le calendrier s'établit ronde par
ronde, avec une liste pour chaque équipe de chaque match, et se modifie et se
vérifie comme pour les toutes‑rondes individuels (voir
[Le calendrier]({% link docs/running-an-event/pairing-systems.fr.md %}#le-calendrier)),
à ceci près qu'une ronde dont les matchs sont appariés est entièrement
verrouillée : désappariez‑la pour la modifier. **Apparier** apparie ensuite
chaque ronde d'après le calendrier enregistré.
Quand une équipe rejoint ou quitte un tournoi personnalisé avant qu'il soit
apparié, son calendrier revient à sa modification, en conservant ce qui reste
valable.

Le formulaire du tournoi propose la **règle de participation _FIDE_ 6.6** : une
équipe qui a abandonné ou a été exclue après avoir disputé **moins de la
moitié** de ses matchs est retirée du classement final et ses matchs sont
annulés — ils ne comptent plus dans les scores et départages des autres équipes
(les résultats restent dans la grille américaine).

---

## Coupe par équipes

Un format de **coupe** : les équipes sont réparties dans un **tableau** selon
leur numéro d'appariement, l'équipe perdante de chaque match est éliminée et la
gagnante continue, jusqu'à ce qu'il n'en reste qu'une. Chaque match est décidé
aux **points de parties** ; un match à égalité est tranché par les **départages
de qualification** (nombre d'échiquiers, résultats des premiers échiquiers…) ou
par l'arbitre avec le départage **Manuel** après un barrage. Le nombre de
rondes découle du nombre d'équipes, et le classement se fait selon le tour
atteint.

Voir **[Système coupe]({% link docs/running-an-event/knockout.fr.md %})** pour le
tableau, les réglages (match pour la troisième place, couleur du premier
échiquier, groupement par affiliation…) et la façon dont les matchs sont
décidés.

_Variantes :_

- **Élimination simple** — un match par ronde, une défaite et l'équipe est
  éliminée.
- **Élimination simple — aller-retour** — chaque confrontation se joue en deux
  matchs, couleurs inversées, décidée au cumul.
- **Double élimination** — une première défaite fait basculer l'équipe dans un
  tableau inférieur ; une seconde l'élimine. Les équipes gagnantes des deux tableaux se
  rencontrent en Grande finale.
- **Double élimination — aller-retour** — la double élimination avec des
  confrontations en deux matchs.

---

## Match par équipes en deux parties

Un match unique entre **deux équipes**, joué en deux parties avec les couleurs
inversées. À utiliser pour un face‑à‑face ponctuel (amical, manche de barrage…)
plutôt que pour un événement à plusieurs équipes.

_Variation :_ Standard.

---

## Molter

Un système à **tableau fixe** pour les **petits tournois par équipes en quelques
rondes** où l'on veut que tout le monde joue à chaque ronde, sans exempt. Au lieu
d'apparier des équipes entières, le Molter apparie des **échiquiers individuels
entre équipes** à partir d'un tableau pré‑calculé. _Sharly Chess_ génère le tableau
automatiquement.

Voir **[Tableaux Molter]({% link docs/team-tournaments/molter-tables.fr.md %})**
pour savoir quand et pourquoi l'utiliser.

_Variation :_ Molter standard.

---

## Lequel choisir ?

- **Beaucoup d'équipes, quelques rondes** → Suisse par équipes.
- **Peu d'équipes et chacune doit rencontrer toutes les autres** → Toutes‑rondes.
- **Une coupe ou un barrage où l'équipe perdante est éliminée** → [Coupe par équipes]({% link docs/running-an-event/knockout.fr.md %}).
- **Seulement deux équipes** → Match en deux parties.
- **Peu d'équipes, peu de rondes, sans exempt, tout le monde joue** → Molter.
