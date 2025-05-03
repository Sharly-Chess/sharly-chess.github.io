---
layout: page
title: Pilotes d’écrans
parent: Écrans
permalink: /pilotes-d-ecrans/
page_id: client-controllers
nav_order: 400
---

# Pilotes d’écrans

Dans de nombreux cas, vous souhaiterez que les utilisateur·ices choisissent eux-mêmes l’écran à afficher sur leur appareil.
C’est exactement à cela que servent les liens de menu — ils permettent de naviguer entre les écrans directement depuis l’appareil utilisé.

Cependant, lorsqu’un appareil est utilisé uniquement à des fins d’affichage (par exemple un vidéoprojecteur montrant les appariements), il est souvent plus pratique que l’arbitre puisse contrôler à distance ce qui y est affiché.
C’est précisément le rôle des **pilotes d’écrans**.

---

## Créer un pilote d’écran

Pour créer un pilote d’écran, allez sur le menu **Écrans > Pilotes d’écrans** et cliquez sur le bouton **Créer un pilote d’écran**.
Il vous sera demandé de choisir un identifiant unique ainsi qu’un nom — ce nom vous aidera à reconnaître facilement le pilote concerné.

---

## Choisir un écran à afficher

Une fois le pilote créé, vous pouvez lui attribuer un écran de deux manières :

- Depuis les menus **Écrans > Écrans simples** ou **Écrans > Écrans rotatifs** :
  Trouvez l’écran (ou l’écran rotatif) à afficher, cliquez sur **Attribuer à un pilote**, et sélectionnez le pilote que vous souhaitez mettre à jour.

- Depuis la page **Pilotes d’écrans** :
  Trouvez le pilote que vous souhaitez mettre à jour, cliquez sur **Attribuer un écran**, et choisissez l’écran ou l’écran rotatif à afficher.

{: .note }
> :information_source: Vous pouvez attribuer des **écrans simples** et des **écrans rotatifs** à un pilote, mais pas des **familles d’écrans**, car celles-ci contiennent plusieurs écrans.
> Pour afficher une famille d’écrans, créez un **écran rotatif** pour les écrans de cette famille puis créez un pilote pour cet écran rotatif.

---

## Configuration de l’appareil d’affichage

Depuis le navigateur de l’appareil que vous souhaitez contrôler (cela peut être un autre appareil ou simplement un autre onglet de votre navigateur) :

1. Accédez à l’interface publique de l’événement.
2. Cliquez sur **Pilotes d’écrans** dans le menu de navigation.
3. Sélectionnez le pilote que vous souhaitez suivre sur cet appareil.

Le navigateur affichera alors l’écran actuellement attribué à ce pilote, et il se mettra à jour automatiquement dès qu’un nouvel écran ou écran rotatif lui sera assigné depuis l’interface de l’arbitre.

{: .tip }
> :point_right: Vous pouvez bien sûr avoir plusieurs appareils qui affichent le même **pilote d’écrans**.
> Lorsque vous modifiez l’écran assigné à ce pilote, tous les appareils afficheront automatiquement le nouvel écran.
