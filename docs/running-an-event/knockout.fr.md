---
layout: page
title: Système coupe
permalink: /systeme-coupe/
page_id: knockout
parent: Événements individuels
nav_order: 480
---

# Système coupe

Le **système coupe** (élimination directe) apparie les participant·es dans un
**tableau** : le·la perdant·e de chaque match est éliminé·e, le·la gagnant·e
passe au tour suivant, et le·la dernier·ère en lice remporte le tournoi. Il est
disponible pour les événements **individuels** comme **par équipes** (sous le
nom **Coupe par équipes**), en quatre variantes :

| Variante | Déroulement d'un match | Élimination après |
|---|---|---|
| **Élimination simple** | Une partie | Une défaite |
| **Élimination simple — aller-retour** | Deux parties, couleurs inversées | Un match perdu |
| **Double élimination** | Une partie | Deux défaites |
| **Double élimination — aller-retour** | Deux parties, couleurs inversées | Deux matchs perdus |

Le système coupe se choisit comme **système d'appariement** sur le formulaire du
tournoi (voir [Gérer les tournois]({% link docs/running-an-event/managing-tournaments.fr.md %})),
et la variante comme **variante d'appariement**.

---

## Tirage du tableau

- **Têtes de série** — les joueur·euses sont classé·es selon leur **ordre de
  départ** (Elo, puis titre…), les équipes selon leur **numéro d'appariement**.
  Les deux meilleures têtes de série sont placées dans des moitiés opposées du
  tableau, et ne peuvent donc se rencontrer qu'en finale.
- **Exempts** — lorsque le nombre de participant·es n'est pas une puissance de
  deux (8, 16, 32…), le tableau est complété jusqu'à la suivante et les
  **meilleures têtes de série sautent le premier tour**. Il n'existe aucun autre
  type d'exempt : l'arbitre ne peut pas attribuer de bye ni de demi-point joker
  dans une coupe.
- **Nombre de rondes** — déterminé automatiquement d'après la taille du plateau
  (quatre rondes de 9 à 16 joueur·euses, cinq de 17 à 32, etc. ; le double en
  aller-retour). Le champ **Rondes** du formulaire du tournoi est rempli pour
  vous et ne peut pas être modifié.
- Les rondes sont appariées **une à une** avec le bouton **Apparier**, une fois
  tous les matchs de la ronde précédente décidés.

{: .warning }
> :warning: Dès que la première ronde est appariée, le tableau est figé : **plus
> aucun·e joueur·euse (ni équipe) ne peut être ajouté·e**, et les réglages
> d'appariement ci-dessous ne peuvent plus être modifiés.

---

## Décider un match

Une **partie décisive** qualifie son·sa vainqueur·e. Lorsqu'une partie est
**nulle** (ou qu'un match aller-retour se termine à égalité au cumul, ou qu'un
match par équipes à égalité de points de parties), le match est décidé par les
**départages de qualification**.

Dans une coupe, les départages configurés pour le tournoi ne servent **pas** à
classer les participant·es (une coupe se classe selon le tour atteint, voir
plus bas) : ils décident **qui se qualifie à l'issue d'un match à égalité**,
dans l'ordre où vous les listez. Seuls les départages capables de séparer deux
participant·es parvenu·es au même stade sont proposés — par exemple l'**Elo**,
le **numéro d'appariement**, le nombre de **parties gagnées** (ou gagnées avec
les Noirs), la **performance**, et, pour les équipes, le **nombre
d'échiquiers**, les **résultats des premiers échiquiers** ou l'**élimination du
dernier échiquier**.

Le départage spécial **Manuel** vous permet de décider le match vous-même,
typiquement après un **match de barrage** (Armageddon, parties de blitz…) joué
sur l'échiquier : la ligne d'appariement d'un match à égalité affiche alors un
bouton **Désigner comme vainqueur·e** à côté de chaque camp.

{: .note }
> :information_source: Si les départages configurés ne permettent pas de
> décider un match à égalité, _Sharly Chess_ refuse d'apparier la ronde
> suivante et vous l'indique. Ajoutez le départage **Manuel** — ou d'autres
> départages de qualification — dans les réglages de départage du tournoi.
> Tout départage listé **après** Manuel ne pourra jamais s'appliquer, puisqu'un
> barrage tranche définitivement le match.

La ligne d'appariement d'un match à égalité affiche la valeur de chaque
départage de qualification pour les deux camps, et lequel a décidé le match.

---

## Variantes

### Élimination simple

La coupe classique : une partie par match, une défaite et c'est fini.

### Élimination simple — aller-retour

Chaque match se joue en **deux parties**, couleurs inversées : la meilleure tête
de série a les Blancs à l'aller et les Noirs au retour. Le match est décidé au
**cumul** des deux parties ; une égalité au cumul est tranchée par les
départages de qualification, comme ci-dessus. Le tournoi compte deux fois plus
de rondes.

### Double élimination

Deux tableaux se déroulent en parallèle :

- Le **tableau supérieur** est une élimination simple. Y perdre n'élimine pas :
  le·la perdant·e bascule dans le tableau inférieur.
- Le **tableau inférieur** accueille les perdant·es du tableau supérieur. Y
  perdre constitue la **seconde défaite**, qui élimine.
- La **Grande finale** oppose les vainqueur·es des deux tableaux.

Avec l'option **Belle de grande finale**, le·la vainqueur·e du tableau
supérieur — qui n'a pas encore perdu — doit être battu·e **deux fois** : si
le·la vainqueur·e du tableau inférieur remporte la Grande finale, une **belle**
est jouée. Cette ronde supplémentaire est réservée dans le calendrier (pour
pouvoir lui donner une date et une heure) mais est sautée, et le tournoi se
termine plus tôt, lorsqu'aucune belle n'est nécessaire.

### Double élimination — aller-retour

La double élimination avec chaque match joué en deux parties, couleurs
inversées.

---

## Réglages

Les réglages d'appariement dépendent de la variante :

| Réglage | Variantes | Signification |
|---|---|---|
| **Match pour la troisième place** | Élimination simple | Jouer un match pour la troisième place entre les deux demi-finalistes battu·es, en même temps que la finale. |
| **Belle de grande finale** | Double élimination | Voir ci-dessus. |
| **Attribution des couleurs** | Variantes en une partie | Comment les couleurs de chaque match sont décidées (voir ci-dessous). En aller-retour, les couleurs sont imposées. |
| **Grouper par** | Toutes | Répartir le tableau par groupe, de sorte que chaque groupe se joue d'abord en interne (voir ci-dessous). |

### Attribution des couleurs

- **Alterner les couleurs** (par défaut) — chaque participant·e prend la couleur
  opposée à celle de son tour précédent ; lorsque deux participant·es qui
  devraient avoir la même couleur se rencontrent, la meilleure tête de série
  alterne et l'autre prend la couleur restante.
- **La meilleure tête de série joue les Blancs** — la meilleure tête de série a
  les Blancs à chaque match.
- **Tirage au sort** — les couleurs sont tirées au sort à chaque match.

Dans un match par équipes, la couleur est celle du **premier échiquier** (les
autres échiquiers alternent comme d'habitude).

### Grouper par

Le tirage par groupe — par **club** ou **fédération** pour les individuel·les,
par **affiliation** ou **fédération** pour les équipes (les plug-ins peuvent
ajouter d'autres critères) — dispose le tableau de sorte que **chaque groupe
forme son propre sous-tableau** : les membres d'un groupe se rencontrent
d'abord entre eux, les groupes se rencontrent ensuite, et les deux groupes les
plus forts ne peuvent se rencontrer qu'en finale. Au sein d'un groupe, les
joueur·euses sont classé·es par Elo et les équipes par numéro d'appariement ;
les participant·es sans valeur forment un unique groupe « sans affiliation ».

Chaque groupe est complété par des exempts jusqu'à une même taille (puissance
de deux) : des groupes inégaux coûtent donc des exempts et des rondes. Le
formulaire du tournoi affiche un **aperçu en direct** des groupes, de la taille
du tableau obtenu, de son nombre de rondes et d'exempts pour le critère choisi,
et vous prévient lorsque les groupes sont si inégaux que la majeure partie du
tableau serait constituée d'exempts. Pour un meilleur résultat, constituez des
groupes de même taille — idéalement 2, 4, 8 ou 16 participant·es chacun.

---

## Pendant le tournoi

- La colonne de gauche de l'écran d'appariement liste qui est **en lice**, par
  tableau (supérieur et inférieur en double élimination), et replie les
  éliminé·es.
- La navigation entre les rondes nomme chaque tour : **8es de finale**,
  **Quarts de finale**, **Demi-finales**, **Finale**, ainsi que les tours des
  tableaux supérieur et inférieur et la Grande finale en double élimination. Le
  match pour la troisième place se joue lors de la même ronde que la finale.
- Les résultats se saisissent comme d'habitude (voir
  [Gérer les appariements]({% link docs/running-an-event/managing-pairings.fr.md %})),
  mais une ronde devient **en lecture seule** dès que la ronde suivante a été
  appariée d'après ses résultats. Pour corriger un résultat, désappariez d'abord
  la ronde suivante.
- Le **classement** se fait selon le **tour atteint**, exprimé en clair plutôt
  qu'en points : _Vainqueur·e_, _Finaliste_, _Troisième place_ et _Quatrième
  place_ (avec un match pour la troisième place), _Éliminé·e — tour N_, ou _En
  lice_ tant que le tableau est en cours.

---

## Documents

Le document **Tableau de la coupe**, proposé pour les tournois en coupe dans la
fenêtre [Documents]({% link docs/documents/index.fr.md %}), imprime le **tableau**
avec les résultats obtenus jusque-là. Son option **programme** imprime les mêmes
matchs sous forme de **liste chronologique**, ronde par ronde, avec la date et
l'heure de chaque ronde lorsqu'elles ont été définies.

---

## Coupe par équipes

Une coupe par équipes fonctionne de la même façon, avec des **équipes** à la
place des joueur·euses : chaque match est un match par équipes, joué sur les
échiquiers des deux équipes avec les compositions de la ronde (voir
[Dérouler les rondes par équipes]({% link docs/team-tournaments/running-team-rounds.fr.md %})),
et l'équipe qui marque le plus de **points de parties** se qualifie. Un match à
égalité est décidé par les départages de qualification par équipes, ou par
l'arbitre avec le départage **Manuel**.
