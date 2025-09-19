---
layout: page
title: Sécurité
parent: Réseau
permalink: /security/
page_id: security
nav_order: 373
---

# Sécurité

Sur un réseau partagé, un utilisateur malveillant pourrait essayer de :

* deviner ou voler des identifiants de connexion ;
* se connecter au serveur et interférer avec votre compétition.

Plus la compétition est importante, plus le risque est élevé.
Il est donc essentiel d’avoir conscience de ce danger et de prendre des mesures pour protéger votre réseau.

---

## Sécuriser vos comptes

* N’accordez aux comptes du staff que les niveaux d'accès dont ils ont réellement besoin.
* Utilisez des mots de passe forts et uniques.

---

## Contrôler votre réseau

* **Idéal** : créez votre propre Wi-Fi (partage de connexion du téléphone ou routeur de voyage) avec un mot de passe solide, afin que vous seul·e puissiez vous y connecter.
* **Acceptable** : utilisez un autre réseau Wi-Fi protégé par mot de passe, mais assurez-vous de faire confiance à toutes les personnes qui disposent de ce mot de passe.
* **Risque élevé** : évitez les Wi-Fi publics/ouverts, sauf si vous ajoutez une couche de protection supplémentaire comme un VPN…

### Utiliser un VPN

Si votre seule solution est d’utiliser un réseau public, la meilleure option est d’employer un **VPN**.

Un **VPN** (_Virtual Private Network_ ou réseau privé virtuel) est un outil qui sécurise votre connexion réseau, même sur un Wi-Fi public.
Il crée un « tunnel » privé et chiffré entre vos appareils, empêchant toute autre personne présente sur le même Wi-Fi de voir ou de modifier vos données.
Grâce au VPN, seuls les appareils que vous choisissez peuvent se connecter en toute sécurité au serveur.

Bien que notre raison principale de recommander un VPN soit la **sécurité sur les réseaux publics**, il offre également un autre avantage : vos appareils peuvent se connecter à _Sharly Chess_ même lorsqu’ils sont sur des **réseaux différents** (par exemple, un téléphone en 4G et un ordinateur portable sur le Wi-Fi de la maison).

Si cela vous intéresse, nous recommandons vivement _[Tailscale](https://tailscale.com/)_.
_Tailscale_ rend la création d’un VPN aussi simple que possible. Avec un compte gratuit, vous pouvez connecter jusqu’à 100 appareils au même réseau privé.

La configuration complète dépasse le cadre de cette documentation, mais voici l’essentiel :

1. Créez un nouveau compte sur _[Tailscale](https://login.tailscale.com/admin/welcome)_.
2. Installez le client _Tailscale_ sur votre ordinateur ainsi que sur tous les autres appareils que vous souhaitez connecter au serveur.
3. Connectez-vous à _Tailscale_ sur chaque appareil.
4. Sur le serveur _Sharly Chess_, la page d’accueil devrait désormais afficher l’adresse IP de votre ordinateur sur le réseau _Tailscale_. Utilisez cette adresse pour vous connecter au serveur depuis vos autres appareils.
