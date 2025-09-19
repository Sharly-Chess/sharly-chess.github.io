---
layout: page
title: Écrans simples
parent: Écrans
permalink: /ecrans-simples/
page_id: single-screens
nav_order: 100
---

# Écrans simples

Les écrans simples sont des pages web autonomes que vous pouvez configurer pour afficher des types d’informations spécifiques.
Pour créer un écran, allez sur le menu **Écrans → Écrans simples** et cliquez sur le bouton **Créer un écran**.

## Créer un écran

_Sharly Chess_ propose six types d’écrans parmi lesquels choisir :

> <i class="bi-pencil" style="padding-right: 0.3rem"></i> **Saisie des résultats** – Permet aux joueur·euses de se pointer et de saisir leurs résultats depuis un appareil mis à leur disposition.<br />
> <i class="bi-card-list" style="padding-right: 0.3rem"></i> **Appariements par échiquier** – Affiche les appariements d’un tournoi, triés par numéro d'échiquier'.<br />
> <i class="bi-people" style="padding-right: 0.3rem"></i> **Appariements par joueur·euse** – Affiche les appariements d’un tournoi, triés par ordre  alphabétique.<br />
> <i class="bi-1-square" style="padding-right: 0.3rem"></i> **Derniers résultats** – Affiche les derniers résultats enregistrés pour un tournoi.<br />
> <i class="bi-trophy" style="padding-right: 0.3rem"></i> **Classement** – Affiche le classement actuel d’un tournoi.<br />
> <i class="bi-image" style="padding-right: 0.3rem"></i> **Image** – Affiche une image issue d’un fichier de votre ordinateur.

{: .tip }
> :point_right: Lorsqu’un tournoi est en cours de pointage, les écrans d’appariement affichent l’interface de pointage.

---

La plupart des options de création d’écran sont explicites, mais certaines méritent un peu plus d’explications.

### Mise en page

Pour la plupart des types d’écrans, vous pouvez personnaliser la mise en page en indiquant le nombre de colonnes et en ajustant la taille de la police.

C’est particulièrement utile si vous avez légèrement trop de joueur·euses pour que tout tienne sur un seul écran — réduire la taille de la police permet souvent de tout faire rentrer.

### Message d’alerte

Un message d’alerte défilant peut s’avérer très utile, surtout lorsqu’il est projeté sur grand écran.
Par exemple : *« Les joueur·euses X et Y sont prié·es de saisir leurs résultats. »*

Ce message peut être défini au **niveau de l’événement**, ce qui signifie qu’il sera affiché sur tous les écrans liés à cet événement, mais vous pouvez aussi le personnaliser individuellement pour chaque écran.

### Menus

La section **Menus** vous permet de configurer les menus de navigation visibles sur l’écran.
Cela permet aux utilisateur·ices de passer facilement d’un écran à l’autre via l’interface publique.

Pour définir les écrans à inclure dans le menu, indiquez leurs **identifiants** (définis lors de la création de chaque écran), séparés par des virgules.

Vous pouvez également utiliser des valeurs spéciales pour inclure automatiquement certains types d’écrans :

- **@boards** – Tous les écrans d’appariement par table
- **@input** – Tous les écrans de saisie de résultats
- **@players** – Tous les écrans d’appariement par joueur·euse
- **@ranking** – Tous les écrans de classement

Note : Vous n’êtes pas obligé·e d’ajouter un menu sur tous les écrans. Par exemple, cela n’a généralement pas de sens sur un écran projeté destiné uniquement à l’affichage.

{% figure [caption: "Exemple de l’écran « Appariements par échiquier » avec 4 éléments de menu"] %}
![Exemple de l’écran « Appariements par échiquier » avec 4 éléments de menu](/assets/images/menus-3.jpg)
{% endfigure %}

---

## Sélection des échiquiers à afficher

Une fois votre écran créé, vous pouvez choisir les échiquiers à afficher (pour les types d’écrans qui le permettent).

Cliquez sur le bouton **Échiquiers** de l’écran concerné pour ouvrir la boîte de dialogue **Ensemble d'échiquiers**.
Vous pouvez y ajouter un ou plusieurs ensembles de tables — provenant d’un ou plusieurs tournois.

Cela vous offre une grande souplesse pour organiser vos écrans selon vos besoins.

Par exemple, si votre événement comprend **deux tournois distincts** et que vous disposez de **deux tablettes** pour la saisie des résultats :

- Vous pouvez configurer **chaque tablette** pour afficher les échiquiers des **deux tournois**, afin que les joueur·euses puissent faire défiler jusqu’à leur section pour saisir leur résultat.
- Ou bien, vous pouvez attribuer **une tablette par tournoi**, pour que chacun·e utilise celle correspondant à sa section.

Un autre cas fréquent : un événement avec **plusieurs petits tournois** (par exemple un championnat local avec des catégories d’âge distinctes).
Dans ce cas, vous pouvez configurer un **écran unique d’appariement** affichant **tous les échiquiers** de tous les tournois, parfait à projeter sur grand écran.

Cette flexibilité vous permet d’adapter votre configuration à votre espace, à votre matériel et à la structure de votre événement.

{% figure [caption: "Exemple de l’écran « Appariements par joueur·euse » avec 2 tournois et 2 colonnes"] %}
![Exemple de l’écran « Appariements par joueur·euse » avec 2 tournois et 2 colonnes](/assets/images/players-screen-multi.jpg)
{% endfigure %}
