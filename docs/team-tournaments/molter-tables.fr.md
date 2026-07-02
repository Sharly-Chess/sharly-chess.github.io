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

Ces tableaux changent aujourd'hui. En lien étroit avec la _Fédération Française
des Échecs_, l'équipe _Sharly Chess_ a défini les critères durs et les exigences
de qualité attendus d'un bon tableau Molter moderne. _Sharly Chess_ propose
désormais des tableaux validés pour chaque configuration prise en charge, afin
que le bon tableau soit sélectionné pour vous automatiquement.

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
- et vous souhaitez un calendrier fixe plutôt qu'un appariement guidé par le
  classement.

Les nombres impairs d'équipes sont le cas difficile historique : avec un
calendrier naïf, quelqu'un serait exempt à chaque ronde, et **le Molter est
conçu précisément pour éviter les exempts**. Les nombres pairs d'équipes sont
aussi pris en charge ; dans ce cas, les joueur·euses restent sur leur propre
numéro d'échiquier et aucun flotteur n'est nécessaire.

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
  distincte** à chaque ronde, et les **couleurs restent fortement équilibrées**.
- Avec un **nombre impair d'équipes**, un·e joueur·euse « flotte » vers
  l'échiquier voisin pour que personne ne reste sans adversaire — le **flotteur**
  — et ce rôle est réparti équitablement entre les équipes.

On obtient un calendrier complet et équilibré, **sans exempt et sans décision
d'appariement** à prendre pendant l'épreuve — le tableau est fixé à l'avance.

{: .note }

> :information_source: Choisissez le nombre de rondes que vous souhaitez jouer.
> _Sharly Chess_ utilisera le tableau Molter validé pour cette durée précise,
> tout en équilibrant au mieux les couleurs individuelles et les rôles de
> flotteur.

---

## Validité et qualité

Chaque recette Molter embarquée est vérifiée avant d'être utilisée. Un tableau
est rejeté s'il enfreint une règle dure :

- chaque joueur·euse apparaît **exactement une fois par ronde** ;
- personne ne joue contre un·e **coéquipier·ère** ;
- personne ne rencontre **deux fois la même équipe adverse** ;
- les couleurs restent dans une dérive bornée et ne se répètent jamais trois
  fois de suite ;
- les flotteurs, lorsqu'ils sont nécessaires, ne relient que des échiquiers
  voisins et ne font pas répéter le même rôle au même joueur ou à la même
  joueuse.

Parmi les tableaux valides, _Sharly Chess_ privilégie ensuite la meilleure
qualité possible :

- **répartition des adversaires** : les équipes doivent rencontrer autant
  d'équipes différentes que possible dès le début de l'épreuve ;
- **équilibre des flotteurs** : les flotteurs montants et descendants doivent
  être équilibrés par équipe ;
- **répartition des descendants** : le rôle descendant doit être partagé
  équitablement ;
- **équilibre par paire de rondes** : une équipe ne doit pas flotter trop souvent
  dans une même paire de rondes ;
- **répartition dans la ronde** : les échiquiers d'une équipe ne doivent pas être
  concentrés inutilement contre le même adversaire ;
- **couleurs par équipe** : l'équilibre exact des couleurs à chaque ronde est
  conservé lorsqu'il ne dégrade pas les objectifs plus importants sur les
  adversaires et les flotteurs.

La plage de recettes proposée dans l'application est volontairement limitée afin
de conserver ce niveau de qualité.

{: .note }

> :information_source: En coulisses, les tableaux actuels proviennent d'un
> processus de recherche reproductible qui essaie plusieurs méthodes de
> construction et d'optimisation, puis conserve les meilleurs résultats validés.
> C'est une approche pratique, pas l'affirmation que la construction
> mathématique définitive a été trouvée. Si vous êtes spécialiste de combinatoire
> ou de théorie des graphes et souhaitez aider à améliorer encore l'algorithme
> Molter, contactez l'équipe _Sharly Chess_.

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
3. _Sharly Chess_ **sélectionne le tableau automatiquement** pour la taille
   choisie (actuellement 3 à 20 équipes, avec un nombre pair de joueur·euses par
   équipe jusqu'à 12).
4. Générez les appariements de chaque ronde comme d'habitude ; vous pouvez
   toujours ajuster la composition d'une équipe entre les rondes.

{: .note }

> :information_source: Les tableaux sont **déterministes** : la même configuration
> _(équipes, joueur·euses par équipe, rondes)_ produit toujours le même tableau,
> reproductible partout. Une fédération peut aussi fournir son propre **tableau
> officiel** pour une taille donnée via un jeu de règles — par exemple la _Coupe
> Jean‑Claude Loubatière_ de la _Fédération Française des Échecs_. Si une forme
> n'appartient pas à la plage de recettes validées, _Sharly Chess_ ne propose pas
> le Molter pour ce tournoi.
