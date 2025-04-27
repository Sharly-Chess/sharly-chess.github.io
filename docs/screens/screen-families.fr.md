---
layout: page
title: Familles d’écrans
parent: Écrans
permalink: /families-d-ecrans/
page_id: screen-families
nav_order: 200
---

# Familles d’écrans

Si vous avez un grand nombre de joueurs·euses et que vous souhaitez répartir l’affichage sur plusieurs écrans, vous pourriez créer manuellement plusieurs écrans et assigner un sous-ensemble de tables à chacun.

Mais cette méthode peut être fastidieuse et source d’erreurs.

Les **familles d’écrans** (_Screen Families_) permettent d’automatiser ce processus en générant automatiquement les écrans individuels nécessaires.

---

## Créer une famille d’écrans

Pour créer une famille d’écrans, allez sur la page **Familles d’écrans** et cliquez sur le bouton **Créer une famille d’écrans**.

Les types d’écrans suivants peuvent être utilisés dans une famille d’écrans :

- **Saisie des résultats** – Permet aux joueurs·euses de se pointer et de saisir leurs résultats depuis un appareil partagé.
- **Appariements par table** – Affiche les appariements triés par numéro de table.
- **Appariements par joueur·euse** – Affiche les appariements triés alphabétiquement.
- **Classement** – Affiche le classement actuel du tournoi.

Lors de la création d’une famille d’écrans, vous retrouverez les mêmes options que pour un écran individuel, avec une option supplémentaire :

Vous pouvez choisir :

- Le **nombre d’écrans** sur lesquels répartir les tables, ou
- Le **nombre de tables par écran** (dans ce cas, _Sharly Chess_ calcule automatiquement le nombre d’écrans nécessaires)

{: .note }
> ⓘ Il n’est pas possible d’ajouter plusieurs tournois à une même Famille d’écrans.

---

## Accéder aux écrans d’une famille

Pour accéder à tous les écrans générés par une famille depuis un menu, utilisez une valeur spéciale comme `@boards` dans la configuration du menu.
Cela ajoutera automatiquement un lien pour **chaque écran individuel** de la famille.

{: .tip }
> ☞ Sur la page **Écrans individuels**, activez l’option **Familles** pour afficher tous les écrans générés automatiquement par une famille.
