---
layout: page
title: Grands Prix
permalink: /grands-prix/
page_id: championship
nav_order: 360
---

# Grands Prix

## Vue d'ensemble

Un **Grand Prix** est un classement agrégé construit à partir de tournois
appartenant à plusieurs **événements indépendants** — un circuit sur une saison,
un grand prix, un championnat scolaire. Il ne possède aucun tournoi en propre : il
**référence** des tournois d'événements existants et lit leurs résultats **en
direct**, si bien que le classement reflète toujours l'état actuel de chaque
source.

Chaque Grand Prix est soit **individuel**, soit **par équipes**. Le type est choisi
à la création et ne peut plus être modifié ensuite ; chaque tournoi source doit lui
correspondre (un Grand Prix individuel n'accepte que des tournois individuels, un
Grand Prix par équipes que des tournois par équipes).

---

## Les quatre onglets

Un Grand Prix est organisé en quatre onglets :

- **Configuration** — le nom, la date de référence des catégories d'âge
  (individuel) ou la base de score par équipe (par équipes), les
  [règles de score et de départage]({% link docs/championship/scoring-tie-breaks.fr.md %})
  ordonnées, et les catégories de classement.
- **Sources** — les tournois à partir desquels le classement est construit, et
  leurs coefficients.
- **Joueurs** / **Équipes** — les compétiteurs rapprochés entre les sources.
- **Classements** — le classement : le classement général et les éventuels
  classements par catégorie.

---

## Sources

Une **source** est un tournoi, identifié par son événement et par le tournoi au
sein de cet événement. Ajoutez des sources dans l'onglet **Sources** avec
**Ajouter un tournoi** : choisissez un événement, puis l'un de ses tournois. Seuls
les tournois du type de compétiteur du Grand Prix sont proposés.

Chaque source possède un **coefficient** (par défaut **1**) qui peut pondérer cette
étape — ce qui permet par exemple de faire compter une finale double. Son
application se décide **par règle de score** : une règle peut être réglée pour
multiplier sa valeur par le coefficient, et seules les règles de type valeur
(points, valeurs de départage) peuvent être pondérées (voir
[règles de score et de départage]({% link docs/championship/scoring-tie-breaks.fr.md %})).

{: .note }
> :information_source: Les sources conservent un libellé lisible même si
> l'événement ou le tournoi est ensuite supprimé ou renommé. Une source dont
> l'événement ou le tournoi est introuvable — ou dont le type de compétiteur ne
> correspond plus — est signalée comme **rompue** et exclue du classement tant que
> vous ne l'avez pas corrigée ou retirée.

Si vous archivez un événement ou supprimez un tournoi utilisé par un Grand Prix,
l'application vous avertit d'abord des Grands Prix concernés. Retirer une source
d'un Grand Prix ne supprime jamais l'événement ni le tournoi source.

---

## Compétiteurs

Dans l'onglet **Joueurs** ou **Équipes**, _Sharly Chess_ **rapproche** les
compétiteurs de toutes les sources : un même joueur ou une même équipe apparaissant
dans plusieurs tournois est regroupé sur une seule ligne, par identité (identifiant
FIDE, nom et date de naissance, ou une clé de fédération). Ce calcul est refait à
chaque fois, puisque les sources sont lues en direct.

Lorsque le rapprochement automatique manque quelqu'un — une faute de frappe, un
identifiant FIDE absent —, vous pouvez le corriger à la main :

- **Fusionner** deux compétiteurs ou plus qui sont en réalité la même personne ou
  la même équipe.
- **Séparer** pour annuler une fusion.

---

## Classements et catégories

Le **classement général** inclut tous les compétiteurs et est toujours disponible.
Par-dessus, vous pouvez créer des **catégories** : des classements filtrés qui
n'affichent que les compétiteurs satisfaisant un ensemble de **critères** (âge,
sexe, classement Élo, ainsi que tous les critères ajoutés par vos plugins de
fédération — le même vocabulaire que les catégories de prix). Un compétiteur doit
satisfaire **tous** les critères d'une catégorie pour y figurer.

Pour un Grand Prix individuel, une **date de référence des catégories d'âge** fixe
l'âge auquel chaque joueur est classé pour tout le Grand Prix. Par défaut, il
s'agit du 1er janvier de l'année du tournoi source le plus ancien.

Le classement de l'onglet **Classements** indique, pour chaque compétiteur, le
nombre d'étapes comptées, avec un bouton d'information qui détaille le score étape
par étape. La façon dont le score est construit — et dont les égalités sont
départagées — est définie par les
[règles de score et de départage]({% link docs/championship/scoring-tie-breaks.fr.md %}).

Pour un Grand Prix par équipes, la **base de score par équipe** de l'onglet
Configuration détermine quel score d'équipe le classement utilise : le score
principal de chaque tournoi source, les points de match, ou les points de partie.

---

## Impression

Le classement général et les éventuels classements par catégorie peuvent être
imprimés ou exportés depuis le Grand Prix, comme les classements de tournoi.
