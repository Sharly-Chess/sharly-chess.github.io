---
layout: page
title: Menus
parent: Écrans
permalink: /menus/
page_id: menus
nav_order: 250
---

# Menus

Un **menu** regroupe des écrans afin que les spectateur·rices puissent naviguer entre eux. Lorsqu’un écran appartient à un menu, une barre de navigation listant les autres écrans de ce menu s’affiche au-dessus de lui.

{: .note }
> :information_source: Les menus ne sont pas affichés par les écrans rotatifs ni par les pilotes d’afficheur.

---

## Menus prédéfinis

Chaque évènement démarre avec six menus prêts à l’emploi, un par type d’écran. Chacun liste simplement **tous les écrans de ce type** :

> <i class="bi-pencil" style="padding-right: 0.3rem"></i> **Saisie des résultats** – tous les écrans de saisie des résultats<br />
> <i class="bi-box-arrow-in-right" style="padding-right: 0.3rem"></i> **Pointage** – tous les écrans de pointage<br />
> <i class="bi-card-list" style="padding-right: 0.3rem"></i> **Appariements par échiquier** – tous les écrans d’appariements par échiquier<br />
> <i class="bi-people" style="padding-right: 0.3rem"></i> **Appariements par joueur·euse** – tous les écrans d’appariements par joueur·euse<br />
> <i class="bi-trophy" style="padding-right: 0.3rem"></i> **Classement** – tous les écrans de classement<br />
> <i class="bi-list-ol" style="padding-right: 0.3rem"></i> **Derniers résultats** – tous les écrans de derniers résultats<br />

Ces menus sont entièrement modifiables : vous pouvez les renommer, changer leur contenu ou les supprimer, comme tout menu que vous créez vous-même.

---

## Créer un menu

Pour créer un menu, allez dans le menu **Écrans → Menus** et cliquez sur le bouton **Créer un menu**.

Un menu possède une seule propriété, son **Nom**. Laissez-le vide (marque substitutive _Automatique_) pour qu’un nom soit dérivé automatiquement du contenu du menu.

---

## Définir le contenu d’un menu

Cliquez sur le bouton **Contenu** d’une carte de menu pour choisir ce qu’il contient. Vous pouvez ajouter trois types d’éléments :

- **Écrans** — des écrans simples individuels.
- **Écrans multiples** — un **écran multiple** entier ; il apparaît comme une entrée unique ouvrant un sous-menu de ses écrans générés.
- **Types d’écran** — tous les écrans d’un type donné d’un coup (affichés sous la forme _« Tous les écrans … »_).

Faites glisser les éléments pour les réordonner ; cet ordre est utilisé pour la barre de navigation.

{: .note }
> :information_source: Un écran ou un écran multiple ne peut appartenir qu’à **un seul menu**. Les éléments déjà utilisés ailleurs apparaissent grisés dans le sélecteur de contenu, avec une infobulle telle que _« Cet écran appartient déjà à un menu. »_

---

## Comment les menus apparaissent aux spectateur·rices

Un écran affiche automatiquement la barre de navigation du menu auquel il appartient — il n’y a pas de sélecteur de menu à définir sur l’écran lui-même ; il suffit de l’ajouter à un menu. La barre n’est affichée que lorsque le menu contient plus d’un écran visible par le·la spectateur·rice.

- Les **écrans multiples** apparaissent comme une entrée unique ouvrant un sous-menu de leurs écrans. Lorsqu’un menu ne contient qu’un seul écran multiple, aucun sous-menu n’est utilisé : ses écrans sont listés directement comme entrées de premier niveau.
- Le libellé de chaque entrée provient du champ **Libellé de menu** de l’écran ou de l’écran multiple (voir leur configuration). S’il est vide, un nom est dérivé automatiquement.

{: .note }
> :information_source: Pour un·e spectateur·rice public (non administrateur·rice), un menu ne liste que les écrans **publics** ; les écrans privés sont masqués.
