---
layout: page
title: Réseau
permalink: /network/
page_id: network
nav_order: 370
---

# Utiliser _Sharly Chess_ sur un réseau

_Sharly Chess_ peut être utilisé comme un logiciel traditionnel de gestion de compétitions d’échecs : l’arbitre gère la compétition seul·e, sur son ordinateur.

Cependant, _Sharly Chess_ ne se limite pas à l’ordinateur de l’arbitre. D’autres appareils — ordinateurs portables, tablettes, smartphones — peuvent également se connecter au serveur pour :

* Afficher des écrans (appariements, classements, résultats, etc.)
* Permettre aux joueur·euses de pointer ou saisir leurs propres résultats
* Donner un accès aux arbitres adjoints ou aux membres du staff

## Qu’est-ce qu’un réseau ?

Un **réseau** est simplement un groupe d’appareils capables de communiquer entre eux.

* À la maison, votre routeur Wi-Fi crée un réseau afin que votre ordinateur, votre téléphone et votre imprimante puissent tous se connecter.
* Dans un club ou lors d’un tournoi, vous pouvez utiliser le Wi-Fi du lieu.

Une fois connectés au même réseau, les appareils peuvent « se voir » et échanger des informations — ce dont _Sharly Chess_ a précisément besoin.

## Comment obtenir un réseau

Il existe plusieurs façons de créer ou de rejoindre un réseau :

* **Utiliser le partage de connexion de votre téléphone**

  La plupart des smartphones peuvent créer un réseau Wi-Fi temporaire (« point d’accès »). Les autres appareils s’y connectent comme s’il s’agissait d’un routeur.

* **Utiliser une clé Wi-Fi ou un routeur de voyage**

  Ces petits appareils se branchent sur un ordinateur ou une prise murale et créent un réseau Wi-Fi privé pour votre tournoi.

* **Utiliser un Wi-Fi existant**

  Parfois, le lieu dispose déjà d’un Wi-Fi. Vous pouvez y connecter tous vos appareils, mais vous devez alors considérer qui d’autre y a accès (voir les [considérations de sécurité]({% link docs/network/security.fr.md %})).

## L’adresse IP du serveur

Depuis la fenêtre principale de _Sharly Chess_, cliquez sur **Afficher les réseaux** pour afficher la liste des adresses du serveur sur chacun des différents réseaux détectés (Wi-Fi, Ethernet, etc.).

{: .note }
> :information_source: Une adresse IP est simplement un numéro qui identifie votre serveur sur le réseau, par exemple :
> http://192.168.1.42

Tout autre appareil sur le **même** réseau peut taper cette adresse dans un navigateur pour se connecter à _Sharly Chess_.
Le QR code est un raccourci : en le scannant, l’adresse s’ouvre directement sur l’appareil.

## Que peuvent faire les appareils connectés ?

Par défaut, les appareils connectés **ne voient rien**.

Pour rendre un événement accessible, vous devez d’abord marquer l’événement comme **public**.
Même dans ce cas, les appareils ne verront du contenu que si vous créez un **Écran** marqué comme **public**.

{: .tip }
> :point_right: Les Écrans publics sont visibles par tous les appareils du réseau.
> Si un Écran est un **Écran de saisie**, les joueur·euses pourront l’utiliser pour **enregistrer leurs résultats ou confirmer leur présence**.

Un accès supplémentaire peut être donné aux membres du staff via des [Comptes]({% link docs/network/staff.fr.md %}).

## Dépannage

Si vous n’arrivez pas à vous connecter à _Sharly Chess_, voici quelques points à vérifier :

* **L’adresse du serveur est-elle correcte ?**

  Vérifiez bien l’adresse IP ou scannez le QR code affiché sur la page d’accueil du serveur.

* **Êtes-vous sur le même réseau ?**
  L’appareil utilisé doit être connecté au même réseau Wi-Fi ou filaire que le serveur.

* **Paramètres du pare-feu ou de l’antivirus**

  Un pare-feu sur l’ordinateur du serveur peut bloquer les connexions.
  Vérifiez les paramètres de votre système et autorisez _Sharly Chess_.

* **Restrictions du point d’accès mobile**

  Certains téléphones Android, par défaut, ne permettent qu’à **un seul appareil à la fois** de se connecter au partage de connexion.
  Si vous avez besoin de plus, cherchez une option dans les paramètres du point d’accès du téléphone.

* **Limites du routeur ou du point d’accès**

  Certains routeurs Wi-Fi limitent le nombre d’appareils connectés, ou les isolent afin qu’ils ne puissent pas communiquer entre eux (paramètre dit « isolation AP »).
  Assurez-vous que l’isolation des appareils est désactivée si vous souhaitez qu’ils puissent communiquer.

Malheureusement, nous ne pouvons pas couvrir toutes les configurations possibles ici.
Si vous avez encore des difficultés, il se peut que vous deviez demander de l’aide au technicien de votre club !
