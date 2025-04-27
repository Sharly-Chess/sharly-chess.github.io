---
layout: page
title: Écrans
permalink: /ecrans/
page_id: screens
nav_order: 300
---

# Écrans

L’une des fonctionnalités phares de _Sharly Chess_ est la possibilité d’afficher les appariements et les résultats en direct pendant un tournoi.
Ces informations peuvent être projetées sur un écran ou un vidéoprojecteur connecté directement à l’ordinateur de l’arbitre, ou encore sur d’autres appareils reliés au réseau local.

## Un serveur web intégré

Pour rendre cela possible, _Sharly Chess_ intègre un serveur web auquel d’autres appareils peuvent se connecter.
En réalité, toute l’interface de _Sharly Chess_ est construite comme une page web — c’est pourquoi vous avez besoin d’un navigateur pour l’utiliser, même depuis votre propre machine.

Pas d’inquiétude : aucune connaissance en développement web n’est nécessaire pour utiliser _Sharly Chess_.
Un serveur web n’est qu’un programme capable d’envoyer des pages à un navigateur connecté.

### Accéder à _Sharly Chess_ – l’URL

L’URL est l’adresse que vous devez saisir dans la barre d’adresse de votre navigateur pour accéder à l’interface de _Sharly Chess_.
Sur la machine où _Sharly Chess_ est en cours d’exécution, l’URL de la page d’accueil est :

```
http://127.0.0.1
```

Si vous utilisez un seul ordinateur, il vous suffit d’ouvrir une nouvelle fenêtre de navigateur et de saisir l’**URL locale** pour afficher l’interface de _Sharly Chess_.
En général, vous souhaiterez accéder à l’**interface publique**, qui vous permet d’afficher les Écrans que vous avez configurés — vous pourrez alors déplacer cette fenêtre vers l’écran ou le vidéoprojecteur pour que les joueur·euses puissent la consulter.

Si vous souhaitez accéder à _Sharly Chess_ depuis d’autres appareils sur le réseau, ouvrez un navigateur sur cet appareil et entrez l’**URL LAN/WAN**.

Pour connaître l’URL LAN/WAN, il suffit de visiter la page d’accueil de _Sharly Chess_ sur votre machine.

{: .note }
> :information_source: L’interface d’administration n’est accessible **que via l’URL locale**.

### Le réseau local

Pour accéder au serveur _Sharly Chess_ depuis d’autres appareils, ils doivent tous être connectés au **même réseau local**.
Si le lieu du tournoi dispose du Wi-Fi, il suffit que tous les appareils s’y connectent.

Si aucun Wi-Fi n’est disponible, voici quelques solutions alternatives :

- Partager la connexion internet de votre téléphone mobile pour créer un réseau Wi-Fi temporaire.
- Apporter votre routeur personnel (la “box” de votre domicile). Il n’a pas besoin d’être connecté à Internet sur place — les appareils doivent seulement se connecter au réseau Wi-Fi qu’il fournit.
- Si vous avez des compétences techniques, vous pouvez configurer votre ordinateur principal pour qu’il agisse comme un point d’accès Wi-Fi, et permettre à d’autres appareils de s’y connecter directement.
