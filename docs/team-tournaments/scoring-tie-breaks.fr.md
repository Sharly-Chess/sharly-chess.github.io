---
layout: page
title: Décompte & départages
permalink: /decompte-equipes/
page_id: team-scoring
parent: Événements par équipes
nav_order: 200
---

# Décompte & départages par équipes

Le résultat d'une équipe dans un match se construit à partir de ses échiquiers
individuels. Deux scores peuvent être tenus.

## Points de partie et points de match

- **Points de partie (PP)** — la somme des résultats individuels des échiquiers
  (1 / ½ / 0). Toujours disponibles, sur tous les systèmes.
- **Points de match (PM)** — attribués selon l'issue du match entier. Disponibles
  sur le **Suisse par équipes**, le **Toutes‑rondes par équipes** et le **Match en
  deux parties**. Le **Molter** se décompte **uniquement en points de partie** — il
  n'a pas de volet points de match.

Les valeurs des points de match sont configurables par tournoi. Les valeurs par
défaut sont **2 / 1 / 0** pour gain / nul / perte. La valeur d'un **exempt
d'appariement** est aussi configurable (par défaut un nul en Suisse par équipes,
un gain sinon).

---

## Score principal

Vous choisissez le **score principal** du classement — points de match ou points
de partie. Par défaut, ce sont les **points de match** (sur les systèmes qui en
ont). L'autre est le **score secondaire** ; il ne tranche pas les égalités à lui
seul — vous décidez de l'utiliser ou non comme départage (voir ci‑dessous).

---

## Départages

À égalité de score principal, _Sharly Chess_ applique les départages que vous avez
configurés, dans l'ordre choisi. Deux familles sont disponibles.

**Départages spécifiques aux équipes :**

- **Points de match vs points de partie** — le score secondaire (celui qui n'est
  pas principal). Disponible uniquement sur les systèmes ayant des points de match.
- **Sonneborn‑Berger étendu** — un Sonneborn‑Berger pondéré par les scores des
  adversaires, en quatre variantes selon que l'on utilise les points de match ou de
  partie pour son propre résultat et pour la pondération.
- **Scores + force du calendrier (SSSC)** — combine le score d'une équipe et la
  force de son calendrier.
- **Confrontation directe étendue** — les résultats entre les équipes à égalité.

**Départages standards** — beaucoup des départages individuels s'appliquent aussi
aux équipes : Buchholz (et ses variantes), Sonneborn‑Berger, Koya, confrontation
directe, scores progressifs, et d'autres.

{: .note }

> :information_source: Les départages pertinents dépendent du système : ceux qui
> font référence aux points de match (comme _Points de match vs points de partie_)
> ne sont proposés que là où les points de match existent — donc pas pour le Molter.
