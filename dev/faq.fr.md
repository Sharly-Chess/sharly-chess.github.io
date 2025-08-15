---
layout: page
title: Foire Aux Questions
permalink: /faq/
page_id: faq
nav_order: 800
---

# Foire Aux Questions

## L'application

{% details Peut-on restreindre l'accès à l'interface d'arbitrage ? %}
  L'interface d'arbitrage est accessible depuis le serveur seulement, sur l'URL locale (`http://localhost` ou `http://127.0.0.1`).

  Si la saisie des résultats est effectuée sur le serveur web, ouvrez l'interface publique (`http://192.168.x.x`) et les pages d'arbitrage ne seront pas accessibles.
{% enddetails %}

{% details Les clients affichent des horaires différents %}
L'heure des chronomètres affichée sur les clients est l'heure des clients (pas celle du serveur), il faut donc synchroniser tous les clients sur un même serveur de temps.
{% enddetails %}

## Problèmes sous Windows


{% details _Microsoft Defender Smartscreen_ a empêché le démarrage d'une application non reconnue %}
  {: .text-center}
  ![Message d'erreur de _Microsoft Defender SmartScreen_](/assets/faq/faq-system-defender-smartscreen.jpg)

  Dans la version actuelle de _Sharly Chess_, _Microsoft Defender SmartScreen_ affiche l'erreur ci-dessus.

  Le seul moyen de contourner cette erreur est de cliquer sur **Informations complémentaires** puis **Exécuter quand même**.
{% enddetails %}

{% details Blocage du serveur web par le pare-feu du serveur %}
  Par défaut, il est possible que le serveur web ne soit pas autorisé par le pare-feu du serveur, comme par exemple ici avec _Microsoft Defender_ :

  {: .text-center}
  ![Demande d'ouverture du pare-feu _Microsoft Defender_](/assets/faq/faq-system-defender-firewall-1.jpg)

  Selon votre pare-feu, le message pourra être différent et la méthode d'ouverture des ports nécessaires pourra également différer ;
  si nécessaire, contactez votre administrateur réseau pour ouvrir les flux entrants du serveur (par défaut le port `80` en `tcp/udp`, ci-dessous l'autorisation ).

  {: .text-center}
  ![Exemple d'autorisation du pare-feu _Microsoft Defender_ pour Sharly Chess](/assets/faq/faq-system-defender-firewall-2.jpg)
{% enddetails %}

{% details Avast refuse l'installation de _Sharly Chess_ %}
  Lors de l'extraction de l'archive `sharly-chess-<x.y.z>.zip`, Avast refuse d'installer l'exécutable `sharly-chess-<x.y.z>.exe` dans le répertoire `bin` avec le message suivant :

  {: .text-center}
  ![Message de _Avast_ à l'extraction de `sharly-chess-<x.y.z>.zip`](/assets/faq/faq-system-avast-1.jpg)

  Il s'agit d'un faux positif, que vous pouvez signaler à la société _Avast_ en cliquant sur le lien **Signaler en tant que faux positif** .

  En cliquant sur le lien **Ouvrir la quarantaine**, vous devez voir le fichier exécutable :

  {: .text-center}
  ![Fichier exécutable en quarantaine](/assets/faq/faq-system-avast-2.jpg)

  Cliquez sur le menu contextuel (`···`) puis sur **Restaurer et ajouter une exception** :

  {: .text-center}
  ![Restaurer et ajouter une exception](/assets/faq/faq-system-avast-3.jpg)

  {: .text-center}
  ![Demande de confirmation pour la sortie de quarantaine](/assets/faq/faq-system-avast-4.jpg)

  {: .text-center}
  ![Confirmation de la sortie de quarantaine](/assets/faq/faq-system-avast-5.jpg)

  Vérifiez que le fichier a bien été restauré à la racine du répertoire de _Sharly Chess_.
{% enddetails %}

{% details Tous les ports candidats [`80`, `81`, `8080`, `8081`] sont déjà utilisés, impossible de démarrer le serveur web %}
  La serveur de _Sharly Chess_ utilise plusieurs ports prédéfinis pour répondre aux requêtes des clients (affichage des écrans, saisie des scores...).

  Si le serveur _Sharly Chess_ vous indique au démarrage que tous les ports sont utilisés, vous devez essayer de trouver les applications qui utilisent les ports sur votre serveur et les arrêter avant de relancer le serveur _Sharly Chess_.

  Pour trouver l'application qui utilise déjà un port sur votre serveur, vous pouvez ouvrir un interpréteur de commande en mode administrateur et lancer la commande `netstat -ab` :

  {: .text-center}
  ![Examen des ports utilisés sur le serveur](/assets/faq/faq-system-netstat.jpg)

  (ici le port `80` est utilisé par un autre serveur web `httpd.exe`)
{% enddetails %}
