---
layout: page
title: Tableaux Molter
permalink: /tableaux-molter/
page_id: molter-tables
parent: Événements par équipes
nav_order: 300
---

# Tableaux Molter

Le **système Molter** est une méthode d'appariement pour les **tournois par
équipes se déroulant en un nombre réduit de rondes**. Il tient son nom de **Charles
Molter**, qui en a posé l'idée dans des documents datant de 1978. Les tableaux que
les arbitres français utilisent depuis ont été établis en novembre 1991 par
l'arbitre international **Jean-Claude Templeur**, à partir des originaux de Molter
et sous son contrôle, et sont diffusés depuis par la _Fédération Française des
Échecs_.

Ces tableaux changent aujourd'hui. Souhaitant que _Sharly Chess_ produise les
tableaux Molter à la demande plutôt que d'embarquer un jeu fixe recopié à la main,
l'équipe a travaillé avec la _Fédération Française des Échecs_ pour mettre au point un algorithme qui **génère
des tableaux valides** pour toute taille prise en charge. Peu connu hors de France
jusqu'ici, le système est ouvert à toutes et tous — et les tableaux sont générés
pour vous, automatiquement.

---

## Quel problème résout-il ?

Imaginez un petit tournoi par équipes — quelques clubs, quatre joueur·euses
chacun, deux ou trois rondes dans l'après-midi. Vous voulez :

- que **tout le monde joue à chaque ronde** (personne n'est exempt) ;
- des **couleurs équilibrées** pour chaque joueur·euse ;
- que chaque équipe rencontre une **répartition équitable d'adversaires** ;
- et vous préférez éviter un appariement suisse complet ou un toutes‑rondes.

Le Molter répond à cela par un **tableau fixe** : un calendrier pré‑calculé qui
indique, pour chaque ronde, qui affronte qui — échiquier par échiquier, entre les
équipes.

Contrairement au **système suisse par équipes** (qui apparie des équipes entières
selon le classement) ou au **toutes‑rondes** (chaque équipe rencontre toutes les
autres), le Molter apparie des **échiquiers individuels entre équipes** à partir
de ce tableau fixe. Chaque équipe aligne ses joueur·euses sur les échiquiers 1…P
(l'échiquier 1 étant le plus fort), et le tableau décide des oppositions.

---

## Quand l'utiliser ?

Le Molter est pertinent lorsque :

- le **nombre d'équipes est restreint par rapport au nombre de rondes** ;
- chaque équipe compte un **nombre pair de joueur·euses** ;
- et — le plus souvent — le **nombre d'équipes est impair**.

Ce dernier point est l'essentiel : avec un nombre impair d'équipes, un calendrier
naïf obligerait quelqu'un à être exempt à chaque ronde, et **le Molter est conçu
précisément pour éviter les exempts**. Chaque joueur·euse a une partie à chaque
ronde.

{: .note }

> :information_source: Exemple typique : une coupe de clubs à 3 équipes de 4
> joueur·euses sur 2–3 rondes, ou une phase à 5 équipes. Si vous avez au contraire
> beaucoup d'équipes, ou si vous voulez un appariement guidé par le classement,
> utilisez le **suisse par équipes** ; si chaque équipe doit rencontrer toutes les
> autres, utilisez le **toutes‑rondes**.

---

## Comment ça marche

- Chaque équipe aligne **P joueur·euses sur les échiquiers 1…P**, l'échiquier 1
  étant le plus fort.
- Pour chaque ronde, le tableau fixe, **échiquier par échiquier, qui affronte
  qui** — toujours un·e joueur·euse d'une _autre_ équipe, jamais un·e
  coéquipier·ère.
- Sur l'ensemble du calendrier, chaque joueur·euse rencontre une **équipe adverse
  distincte** à chaque ronde, et les **couleurs s'équilibrent** (autant de blancs
  que de noirs).
- Avec un **nombre impair d'équipes**, un·e joueur·euse « flotte » vers
  l'échiquier voisin pour que personne ne reste sans adversaire — le **flotteur**
  — et ce rôle est réparti équitablement entre les équipes.

On obtient un calendrier complet et équilibré, **sans exempt et sans décision
d'appariement** à prendre pendant l'épreuve — le tableau est fixé à l'avance.

{: .note }

> :information_source: **Préférez un nombre pair de rondes.** Les tableaux Molter se
> construisent par paires de rondes — c'est ainsi que les couleurs de chaque
> joueur·euse s'équilibrent. Un nombre impair laisse une ronde en trop, comblée par
> la reprise d'une ronde précédente (recoloriée) ; un nombre pair évite cette
> reprise et garde les couleurs équilibrées.

---

## Un petit exemple

Prenons **3 équipes (A, B, C) de 4 joueur·euses** sur 2 rondes. Chaque ronde compte
6 parties, notées _blancs – noirs_ (ainsi `A1` est le·la joueur·euse d'échiquier 1
de l'équipe A) :

| Ronde 1 | Ronde 2 |
|:---:|:---:|
| A1 – C1 | B1 – A1 |
| C2 – B1 | C1 – B2 |
| B2 – A2 | A2 – C2 |
| B3 – A3 | C3 – B3 |
| A4 – C3 | A3 – C4 |
| C4 – B4 | B4 – A4 |

À remarquer :

- **Tout le monde joue lors des deux rondes** — même avec un nombre impair
  d'équipes, personne n'est exempt.
- **Personne n'est apparié à un·e coéquipier·ère** — les deux équipes d'une partie
  sont toujours différentes.
- **Les couleurs s'équilibrent** : A1 a les blancs à la ronde 1 et les noirs à la
  ronde 2.
- Comme 3 est impair, une partie oppose parfois des joueur·euses d'échiquiers
  voisins (`C2 – B1`) : c'est le **flotteur** en action, ce qui permet à chacun·e
  d'avoir une partie.

_Sharly Chess_ produit ce tableau pour vous — vous ne recopiez rien.

---

## Utiliser le Molter dans _Sharly Chess_

1. Créez un **tournoi par équipes** et choisissez le système d'appariement
   **Molter**.
2. Indiquez le **nombre de joueur·euses par équipe** et le **nombre de rondes**.
3. _Sharly Chess_ **génère le tableau automatiquement** pour la taille choisie
   (3 à 13 équipes) — aucun tableau recopié à la main à maintenir.
4. Générez les appariements de chaque ronde comme d'habitude ; vous pouvez
   toujours ajuster la composition d'une équipe entre les rondes.

{: .note }

> :information_source: Les tableaux sont calculés de manière **déterministe** : la
> même configuration _(équipes, joueur·euses par équipe, rondes)_ produit toujours
> le même tableau, reproductible partout. Une fédération peut aussi fournir son
> propre **tableau officiel** pour une taille donnée via un jeu de règles — par
> exemple la _Coupe Jean‑Claude Loubatière_ de la _Fédération Française des Échecs_.
