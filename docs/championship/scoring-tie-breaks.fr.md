---
layout: page
title: Score & départages
permalink: /grand-prix-departages/
page_id: championship-scoring
parent: Grands Prix
nav_order: 100
---

# Score et départages du Grand Prix

Le classement d'un Grand Prix est construit à partir d'une **liste ordonnée de
règles**. Le classement se fait par **raffinements successifs** : tout le monde
part à égalité, la première règle trie les compétiteurs, et chaque règle suivante
ne départage que les égalités laissées par les précédentes. La première règle est
donc le **score principal** ; les suivantes sont des départages.

Comme les règles sont appliquées dans l'ordre, vous pouvez combiner un cumul, un
décompte et une règle de confrontation dans l'ordre exigé par votre règlement — par
exemple *points totaux → nombre de victoires → confrontation directe*.

Configurez les règles dans l'onglet **Configuration**, sous **Règles de score et de
départage**. Ajoutez-les, modifiez-les, supprimez-les et faites-les glisser pour
les ordonner.

---

## Meilleures étapes

La plupart des règles peuvent être limitées aux **N meilleures étapes** d'un
compétiteur au lieu de toutes (laissez le champ vide pour toutes les compter).
C'est ainsi que fonctionnent les circuits « meilleurs 5 résultats de la saison ».

Les meilleures étapes sont choisies par la **chaîne de règles configurée
elle-même** : les étapes d'un compétiteur sont ordonnées comme le classement
ordonne les compétiteurs, et les N premières sont retenues. Ainsi, une règle
*points totaux, meilleures 5* retient les cinq étapes les mieux marquées, tandis
qu'une règle *classement moyen, meilleures 5* retient les cinq mieux placées.

---

## Coefficient d'étape

Les règles de type valeur (points et valeurs de départage) peuvent être pondérées
par le [coefficient]({% link docs/championship/index.fr.md %}) de chaque source.
L'interrupteur **Appliquer le coefficient du tournoi** l'active ou le désactive par
règle. Les règles ordinales ou de décompte (une place à l'arrivée, un nombre de
victoires) ne sont jamais pondérées — une place ou un décompte ne se multiplie pas.

---

## Types de règles

**Basées sur le score**

- **Points totaux** — la somme des points marqués sur les étapes comptées.
- **Points moyens** — la moyenne des points sur les étapes comptées.
- **Score positionnel** — chaque étape est mise à l'échelle pour que le vainqueur
  obtienne 1 et le dernier 0, puis sommée. Compense les étapes de tailles
  différentes.
- **Points selon la place** — des points fixes par place à l'arrivée (p. ex. 25
  pour le premier, 18 pour le deuxième…), sommés. Les places au-delà du barème ne
  rapportent rien ; le barème est modifiable.

**Place et décompte**

- **Classement moyen** — la place moyenne à l'arrivée sur les étapes comptées ;
  plus la valeur est basse, mieux c'est.
- **Nombre de places** — combien de fois le compétiteur a terminé à une place
  choisie (p. ex. nombre de premières places).
- **Nombre de victoires** — le total des parties gagnées sur les étapes comptées.

**Départage agrégé**

- **Somme d'un départage** / **Moyenne d'un départage** — la somme, ou la moyenne,
  de **n'importe quel** départage (Buchholz, Sonneborn-Berger, etc.) sur les étapes
  comptées. La valeur est **calculée à partir des parties de chaque étape**, si bien
  que n'importe quel départage peut être agrégé — les événements sources n'ont pas
  besoin d'en avoir été dotés. Choisissez le départage et ses options exactement
  comme sur un tournoi ; le sélecteur liste d'abord ceux déjà utilisés dans les
  tournois sources, puis tous les autres départages compatibles. Les étapes qui ne
  peuvent pas fournir le départage sont ignorées.

**Confrontation et manuel**

- **Confrontation directe** — les résultats des parties que les compétiteurs à
  égalité ont jouées entre eux. Elle utilise **toutes** leurs rencontres sur toutes
  les étapes, et est ignorée s'ils ne se sont jamais rencontrés. Les rencontres
  répétées sont moyennées.
- **Départage manuel** — permet d'ordonner **à la main** les compétiteurs encore à
  égalité, en les faisant glisser dans le classement. Il ne déplace que les
  compétiteurs laissés à égalité par les règles précédentes.

---

## Affichage des égalités

Dans l'onglet **Classements**, chaque règle est une colonne. Une valeur est
affichée en gras quand cette règle a effectivement départagé le compétiteur des
autres, et en grisé quand une règle précédente avait déjà résolu l'égalité. Le
détail des étapes (le bouton d'information à côté du nombre d'étapes) liste chaque
étape comptée avec sa valeur pour chaque règle de score et de départage de la
chaîne.
