---
layout: page
title: Protections d'appariement
permalink: /protections-appariement/
page_id: prohibited-pairings
parent: Événements individuels
nav_order: 465
---

# Protections d'appariement

Les protections d'appariement empêchent certain·es joueur·euses, ou certaines
équipes dans un tournoi par équipes, de se rencontrer : membres d'un même club,
d'une même fédération, d'une même affiliation, ou de tout groupe que vous
constituez vous-même. Elles sont une option des systèmes **suisses**,
individuels et par équipes.

## Configuration

Cliquez sur **Protections** dans l'écran des appariements. Le badge du bouton
indique le nombre de groupes appliqués à la ronde.

- **Éviter d'apparier par** construit les groupes automatiquement : tous les
  joueur·euses (ou toutes les équipes) qui partagent l'attribut choisi, par
  exemple le même club, forment un groupe. La **Contrainte** à côté s'applique
  à tous ces groupes ; **Aucune** les désactive sans oublier l'attribut.
- Les **groupes manuels** vous permettent d'ajouter vos propres groupes, par
  exemple les membres d'une même famille. Chaque groupe manuel a sa propre
  contrainte.

La contrainte est **Stricte**, **Souple : relâchée depuis le bas du
classement** ou **Souple : évitée autant que les règles d'appariement le
permettent** (voir ci-dessous).

Une fois une ronde appariée, ses groupes sont figés : la fenêtre affiche les
groupes utilisés pour cette ronde, et un changement de réglage ne concerne que
les rondes restant à apparier.

## Contraintes

Une contrainte **stricte** est toujours respectée. Si la ronde ne peut pas être
appariée sans l'enfreindre, _Sharly Chess_ refuse d'apparier la ronde et vous
l'indique.

Une contrainte **souple** est respectée _autant que possible_. Les deux
contraintes souples diffèrent par ce qui cède lorsqu'elle ne peut pas l'être :

| Contrainte | Ce qui cède |
|---|---|
| Souple : relâchée depuis le bas du classement | les premier·ères du classement restent toujours séparé·es ; lorsque ce n'est pas possible pour tout le monde, les moins bien classé·es sont les premier·ères à pouvoir rencontrer un membre de leur groupe. La séparation des premier·ères passe avant les groupes de points, les couleurs et les flotteurs |
| Souple : évitée autant que les règles d'appariement le permettent | les membres d'un même groupe ne restent séparé·es que si aucun critère du système suisse (couleurs, flotteurs…) n'en pâtit ; sinon, ils·elles se rencontrent, quel que soit leur classement |

Les groupes d'une ronde peuvent mêler les trois contraintes.

## Souple : relâchée depuis le bas du classement

Lorsque l'appariement est impossible avec toutes ces contraintes, certaines sont
levées, juste ce qu'il faut pour que la ronde puisse être appariée, selon un
principe simple : **une rencontre inévitable revient aux moins bien classé·es,
jamais aux premier·ères du classement.**

### Comment les contraintes sont levées

Avant chaque ronde, _Sharly Chess_ consulte le **classement à l'entrée de la
ronde**, départages compris. À la première ronde, personne n'ayant encore joué,
ce classement est simplement l'ordre initial.

Il choisit ensuite un seuil **N** et protège les joueur·euses (ou équipes)
classé·es **de la 1re à la Ne place** :

| Paire issue d'un même groupe | Autorisée ? |
|---|---|
| les deux membres classés dans les N premiers | non |
| un membre dans les N premiers, l'autre en dessous | **non** |
| les deux membres classés en dessous de N | oui |

Un·e joueur·euse protégé·e conserve _toutes_ ses séparations, y compris face
aux joueur·euses libéré·es. Être libéré·e ne permet pas de rencontrer n'importe
quel membre de son groupe : seulement un·e _autre libéré·e_ de son groupe. Une
rencontre interne au groupe ne peut donc avoir lieu qu'entre deux membres du bas
du classement, jamais entre un·e premier·ère du classement et un·e joueur·euse
plus faible du même club.

_Sharly Chess_ retient le **plus grand** N pour lequel la ronde peut encore être
appariée, afin de libérer le moins de joueur·euses possible. Si toutes les
contraintes souples peuvent être respectées, personne n'est libéré.

Le seuil est recalculé **à chaque ronde**, à partir du classement du moment. Un·e
joueur·euse libéré·e à une ronde peut être protégé·e à la suivante après un bon
résultat, et inversement.

Une fois la ronde appariée, la fenêtre **Protections** liste les joueur·euses
(ou équipes) **libéré·es de leurs contraintes souples** pour cette ronde.

### Effet sur l'appariement

Les contraintes maintenues sont transmises au moteur d'appariement comme des
interdictions strictes, avant qu'il n'applique les critères habituels du système
suisse. La séparation des joueur·euses protégé·es passe donc avant le maintien de
chacun·e dans son groupe de points : un·e joueur·euse peut rencontrer un·e
adversaire d'un groupe de points inférieur parce que tous les autres membres de son
groupe de points sont des membres protégé·es de son club.

Le moteur applique ensuite les critères _FIDE_ sans modification parmi les
appariements encore possibles : écarts de points, couleurs, et départage habituel
entre appariements équivalents.

### Un exemple détaillé

Un système suisse par équipes en trois rondes réunit dix équipes. Six d'entre
elles, **A1** à **A6**, viennent du même club A ; deux, **B1** et **B2**, du club
B ; **C** et **D** de deux autres clubs. Le club A et le club B forment chacun un
groupe relâché depuis le bas du classement.

**Ronde 1.** Six équipes du club A et seulement quatre équipes d'autres clubs :
au moins un match entre deux équipes du club A est inévitable. Protéger tout le
monde est impossible, et protéger tout le monde sauf A6, l'équipe la moins bien
classée, l'est aussi (A6 ne pourrait rencontrer qu'une équipe A protégée). Le
plus grand seuil possible libère les deux équipes A les moins bien classées, A5
et A6, qui se rencontrent ; toutes les autres équipes A affrontent une équipe
d'un autre club.

**Ronde 2.** Le classement à l'entrée de la ronde est le suivant :

| Place | Équipe | Points |
|---|---|---|
| 1 | A2 | 3 |
| 2 | A1 | 3 |
| 3 | A3 | 3 |
| 4 | B1 | 3 |
| 5 | A6 | 2 |
| 6 | A5 | 2 |
| 7 | D | 1 |
| 8 | A4 | 1 |
| 9 | C | 1 |
| 10 | B2 | 1 |

- Protéger les 6 premières laisserait cinq équipes du club A (A2, A1, A3, A6,
  A5) pour seulement quatre adversaires extérieurs : impossible.
- Protéger les 5 premières fonctionne : A2, A1, A3 et A6 rencontrent chacune une
  équipe d'un autre club, et B1 reste séparée de B2.
- A5 et A4 sont libérées. A4–A5 est le seul match interne au club A autorisé, et
  l'appariement l'utilise.

A6 a fait match nul à la ronde 1 et remonte à la 5e place, dans le seuil ; A4 a
perdu et descend à la 8e place, hors du seuil. C'est pourquoi A4 rencontre A5
plutôt qu'A6, bien qu'A4 ait un meilleur classement initial.

Le groupe de tête (A1, B1, A2, A3) montre l'effet sur l'appariement : il compte
trois équipes protégées du club A et une seule équipe extérieure, si bien
qu'une seule d'entre elles peut jouer B1. Les deux autres rencontrent des équipes
du groupe de points inférieur : on obtient B1–A3, B2–A1 et C–A2.

## Souple : évitée autant que les règles d'appariement le permettent

Cette contrainte est le **critère de plus faible priorité** du moteur
d'appariement. Le moteur applique d'abord tous les critères _FIDE_ : groupes de
points, flotteurs et couleurs. Ce n'est que parmi les appariements que ces
critères jugent équivalents qu'il retient celui qui compte le moins de paires
d'un même groupe, avant l'ordre dans lequel les règles les essaieraient sinon.

Séparer un groupe ne dégrade donc jamais l'appariement sur aucun critère : si le
seul moyen d'éviter un match entre membres d'un même club prive un·e joueur·euse
de la couleur qui lui revient, ou fait flotter plus de joueur·euses, le match a
lieu. Le classement n'intervient pas non plus : une rencontre inévitable peut
concerner les premier·ères du classement comme les moins bien classé·es.
Personne n'est libéré·e, et la fenêtre **Protections** ne liste personne une
fois la ronde appariée.

Par exemple, six équipes jouent la première ronde d'un système suisse : A1, A2
et A3 du club A, B1 et B2 du club B, et C1, classées A1, A2, B1, C1, A3, B2.
L'appariement standard serait A1–C1, A2–A3 et B1–B2. Personne n'ayant encore
joué, les règles jugent équivalents les appariements de la moitié haute contre
la moitié basse, si bien que la contrainte retient A1–C1, A2–B2 et B1–A3 : aucun
match entre membres d'un même club.

Dans l'export TRF, ces groupes sont écrits sous forme d'enregistrements `SCS`,
une extension lue par le moteur d'appariement de _Sharly Chess_. Les autres
logiciels, et les vérificateurs d'appariements _FIDE_, les ignorent : ils
peuvent signaler comme un écart une ronde où la contrainte a changé
l'appariement.

Si vous préférez un autre appariement autorisé par le règlement, vous pouvez
toujours modifier la ronde à la main : voir
**[Gérer les appariements]({% link docs/running-an-event/managing-pairings.fr.md %})**.
