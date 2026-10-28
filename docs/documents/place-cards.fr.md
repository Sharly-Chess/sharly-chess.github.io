---
layout: page
title: Chevalets
parent: Documents
permalink: /chevalets/
page_id: place-cards
nav_order: 352
---

# Guide de personnalisation des chevalets

_Sharly Chess_ offre la possibilité de générer des chevalets de table standards :

- **chevalets d'échiquier**, avec simplement les numéros de table, qui permettent aux joueur·euses de se repérer facilement dans la salle ;
- **chevalets des joueur·euses**, qui donne un standing aux évènements et facilitent la saisie des feuilles de partie ;
- **chevalets d'appariement**, qui permettent d'afficher sur les tables à la fois les numéros de table et les informations des joueur·euses. 

Cette page explique comment personnaliser les chevalets.

## L'éditeur de chevalets

Les modèles de chevalets se gèrent depuis le bouton **Modèles** situé à côté du sélecteur de modèle, dans la section chevalets de la fenêtre [Documents]({% link docs/documents/index.fr.md %}). Les modèles sont communs à tous les évènements.

La **bibliothèque de modèles** liste les **modèles intégrés**, qui ne peuvent pas être modifiés, et vos **modèles personnalisés**. Depuis cette page, vous pouvez :

- créer un **nouveau modèle** (en choisissant un nom et un type : chevalets de joueur·euses, d'échiquier ou d'appariement) ;
- **dupliquer** n'importe quel modèle — la façon habituelle de partir d'un modèle intégré ;
- **importer** un modèle partagé par quelqu'un d'autre (un fichier `.zip`) ou **exporter** les vôtres ;
- **supprimer** un modèle personnalisé ;
- **ouvrir l'éditeur** sur un modèle personnalisé.

L'**éditeur** affiche le chevalet à ses proportions réelles, avec des **données d'exemple** à la place des champs pour prévisualiser le résultat (et passer d'un·e joueur·euse d'exemple à un·e autre). Vous pouvez :

- ajouter des éléments de **texte** et des **images** (téléversées depuis l'éditeur), puis les déplacer à la souris et ajuster leur largeur en tirant sur leurs bords ;
- définir les **propriétés du chevalet** : nom, unité (mm ou pouces), largeur, hauteur, marge intérieure, et s'il est **recto verso** (pliable) ;
- définir les propriétés de chaque élément dans le panneau latéral : le texte et ses **champs** (avec un préfixe et un suffixe optionnels, affichés seulement si le champ a une valeur), la police, la taille, le style (gras, italique, souligné, barré, capitales), l'alignement, les couleurs, l'opacité, les bordures, le point d'ancrage et l'ordre d'empilement ;
- **annuler** et **rétablir**, zoomer, et afficher ou masquer les contours des éléments.

Les modifications sont enregistrées dans le modèle au fur et à mesure : la prochaine génération de chevalets les utilise.

{: .note }
> :information_source: Un contenu utilisant des expressions Jinja avancées est affiché tel quel dans l'éditeur et ne peut pas être modifié avec l'éditeur de blocs.

---

## Chevalets recto-verso

Pour imprimer le même contenu sur les deux moitiés du chevalet, afin de pouvoir le plier en deux, cochez **Miroir (recto-verso)** dans le dialogue des documents.

Pour un contenu différent sur chaque face, rendez le modèle **Recto verso (pliable)** dans l'éditeur : l'éditeur affiche alors les deux faces, et un élément glissé sur l'autre face y est déplacé.

## Export des chevalets

Si vous souhaitez envoyer les chevalets que vous avez générés (par exemple pour les confier à quelqu'un pour l'impression), il suffit d'enregistrer le fichier HTML produit (tous les éléments y compris les images et les polices sont contenues dans un seul fichier HTML). 

## Bibliothèque de chevalets

la bibliothèque ci-dessous comprend les chevalets standards de _Sharly Chess_ et quelques exemples. N'hésitez pas à contribuer en nous envoyant vos plus beaux chevalets !

{% include_relative place-cards-library-fr.md  %}
