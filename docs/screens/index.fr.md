---
layout: page
title: Écrans
permalink: screens/
nav_order: 300
lang: fr
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
Au démarrage de l’application, **deux lignes** s’affichent dans la fenêtre du terminal, par exemple :

```
URL locale : http://127.0.0.1
URL LAN/WAN : http://10.211.55.3
```

Si vous utilisez uniquement un seul ordinateur, il suffit d’ouvrir une nouvelle fenêtre de navigateur et d’entrer l’**URL locale** pour accéder à l’interface.
En général, vous souhaiterez aller vers l’interface **publique**, où vous pourrez configurer et afficher les Écrans créés.
Vous pouvez ensuite déplacer cette fenêtre vers l’écran ou le vidéoprojecteur pour que les joueurs·euses puissent voir les informations.

Si vous souhaitez accéder à _Sharly Chess_ depuis d’autres appareils du réseau, ouvrez un navigateur sur cet appareil et entrez l’**URL LAN/WAN**.

{: .note }
> ⚠︎ L’interface d’administration n’est accessible **que via l’URL locale**.

### Le réseau local

Pour accéder au serveur _Sharly Chess_ depuis d’autres appareils, ils doivent tous être connectés au **même réseau local**.
Si le lieu du tournoi dispose du Wi-Fi, il suffit que tous les appareils s’y connectent.

Si aucun Wi-Fi n’est disponible, voici quelques solutions alternatives :

- Partager la connexion internet de votre téléphone mobile pour créer un réseau Wi-Fi temporaire.
- Apporter votre routeur personnel (la “box” de votre domicile). Il n’a pas besoin d’être connecté à Internet sur place — les appareils doivent seulement se connecter au réseau Wi-Fi qu’il fournit.
- Si vous avez des compétences techniques, vous pouvez configurer votre ordinateur principal pour qu’il agisse comme un point d’accès Wi-Fi, et permettre à d’autres appareils de s’y connecter directement.
