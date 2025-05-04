---
layout: page
title: Familles d’écrans
parent: Écrans
permalink: /familles-d-ecrans
page_id: screen-families
nav_order: 200
---

# Familles d’écrans

Si vous avez un grand nombre de joueur·euses et que vous souhaitez répartir l’affichage sur plusieurs écrans, vous pouvez créer manuellement plusieurs écrans et assigner un sous-ensemble de tables à chacun.

Cette méthode peut être fastidieuse et source d’erreurs.

Les **familles d’écrans** (_Screen Families_) permettent d’automatiser ce processus en générant automatiquement les écrans simples nécessaires.

{% figure [caption: "Exemple de la famille d’écrans « Appariements par joueur·euse » répartie sur 12 écrans."] %}
![Exemple de la famille d’écrans « Appariements par joueur·euse » répartie sur 12 écrans.](/assets/images/players-screen.jpg)
{% endfigure %}

---

## Créer une famille d’écrans

Pour créer une famille d’écrans, allez dans le menu **Écrans → Familles d’écrans** et cliquez sur le bouton **Créer une famille d’écrans**.

Les types d’écrans suivants peuvent être utilisés dans une famille d’écrans :

> <i class="bi-pencil" style="padding-right: 0.3rem"></i> **Saisie des résultats** – Permet aux joueur·euses de se pointer et de saisir leurs résultats depuis un appareil partagé.<br />
> <i class="bi-card-list" style="padding-right: 0.3rem"></i> **Appariements par échiquier** – Affiche les appariements triés par numéro de table.<br />
> <i class="bi-people" style="padding-right: 0.3rem"></i> **Appariements par joueur·euse** – Affiche les appariements triés alphabétiquement.<br />
> <i class="bi-trophy" style="padding-right: 0.3rem"></i> **Classement** – Affiche le classement actuel du tournoi.<br />

Lors de la création d’une famille d’écrans, vous retrouverez les mêmes options que pour un écran simple, avec une option supplémentaire :

Vous pouvez choisir :

- Le **nombre d’écrans** sur lesquels répartir les tables, ou
- Le **nombre de tables par écran** (dans ce cas, _Sharly Chess_ calcule automatiquement le nombre d’écrans nécessaires)

{: .note }
> :information_source: Il n’est pas possible d’ajouter plusieurs tournois à une même Famille d’écrans.

---

## Accéder aux écrans d’une famille

Pour accéder depuis un écran d'une famile à tous les écrans de cette famille, utilisez la valeur spéciale `@family` dans la configuration du menu.
Cela ajoutera automatiquement un lien pour **chaque écran simple** de la famille.

{: .tip }
> :point_right: Sur la page **Écrans simples**, activez l’option **Familles** pour afficher tous les écrans générés automatiquement par une famille.
