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

{% details id:standard-rating caption:"Pourquoi existe-t-il une option permettant d’utiliser le classement standard pour les joueur·euses non classé·es dans les tournois rapides et blitz ?"  %}

Les [Règlements du classement FIDE pour les tournois rapides et blitz](https://handbook.fide.com/chapter/B02RBRegulations2024) indiquent, à l’Article 7.2.1 :

<div class="quote">
  Si un·e joueur·euse non classé·e possède un classement standard au début d’un tournoi rapide ou blitz, son classement standard est utilisé pour le calcul du classement. Ce·tte joueur·euse est considéré·e comme classé·e, et les articles 7.2.2 à 7.2.5 ci-dessous ne s’appliquent pas.
</div>

Un·e joueur·euse qui pense que son adversaire est non classé·e peut donc être surpris·e de découvrir que sa partie a influencé son propre classement !

Cette règle concerne **uniquement** le calcul des classements, et non pas les appariements. Cependant, le Manuel de l’arbitre FIDE précise :

<div class="quote">
  Si aucun classement fiable n’est connue pour un·e joueur·euse, les arbitres doivent en faire une estimation aussi précise que possible.
</div>

Ainsi, l’arbitre est libre d’attribuer une estimation valable pour le classement des joueur·euses non classé·es.

Il est donc judicieux d’utiliser le classement standard pour les joueur·euses non classé·es dans les tournois rapides et blitz, car cela permet d’éviter des surprises désagréables.

Nous recommandons d’ajouter cette précision dans vos règlements. Un exemple se trouve dans les [Règlements des Championnats du Monde FIDE de parties rapides et blitz 2025](https://handbook.fide.com/files/handbook/wrbc_regulations_2025_open.pdf), qui le mentionnent explicitement à l’Article 4.2.4.1 :

<div class="quote">
  Si un·e joueur·euse n’a pas de classement rapide, son classement standard sera utilisée pour la liste de départ, les appariements (voir Article 4.2.5) et le calcul des départages.
</div>

Ceci est encore plus important si vous utilisez un départage basé sur les classements, puisque les [Règlements FIDE sur les départages](https://handbook.fide.com/chapter/TieBreakRegulations082024) précisent (section 10) :

<div class="quote">
  Ces départages doivent être retirés de la liste des départages d’un tournoi lorsqu’il y a des joueur·euses non classé·es, sauf si des règles détaillées concernant la gestion de ces joueur·euses sont incluses dans les règlements du tournoi ou établies et publiées par l’arbitre principal avant le début du tournoi.
</div>

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

<script>
  if (location.hash) {
    document.querySelector(location.hash)?.setAttribute("open", "");
  }
</script>
