---
layout: page
title: Foire Aux Questions
permalink: /faq/
page_id: faq
nav_order: 800
---

# Foire Aux Questions

## Sharly-Chess.com

{% details id:sharly-chess-com caption:"Pourquoi utiliser une plateforme d’inscription dédiée aux échecs ?" %}
**Gain de temps massif pour l’arbitre**

*“Qu’est-ce que ça change concrètement ?”*

Les inscriptions ne sont pas seulement collectées, elles sont directement exploitables.

- les joueurs sont synchronisés avec notre application d’arbitrage
- plus besoin de ressaisir les données — aucune rupture entre inscription et gestion sportive
- l’arbitre travaille avec des données fiables dès le départ
- moins d’erreurs à corriger

Selon les pays, les joueurs peuvent s’inscrire en se recherchant dans une base de données, plutôt qu’en saisissant leurs informations manuellement, ce qui permet :

- une récupération automatique du nom, prénom, Elo, etc.
- une réduction des fautes de frappe
- la suppression de nombreux doublons

Au final, le temps gagné est considérable. C’est souvent plusieurs heures économisées.

---

**Liste des inscrits toujours à jour**

- chaque inscription apparaît immédiatement sur le site. L’expérience montre que les joueurs sont beaucoup plus susceptibles de s’inscrire rapidement lorsqu’ils voient que d’autres joueurs sont déjà inscrits
- les modifications sont prises en compte en temps réel
- les joueurs peuvent vérifier leur statut eux-mêmes

Une liste fiable en permanence facilite toute l’organisation.

---

**Expérience améliorée pour les joueurs**

Les joueurs bénéficient d’un accès simple et moderne :

- consultation des appariements personnalisés
- résultats et classements lisibles
- informations centralisées

Cela améliore la perception globale du tournoi.

---

**Travail en équipe facilité**

- accès partagé entre organisateurs
- messagerie centralisée consultable par l’équipe
- historique commun des échanges

L’organisation ne dépend plus d’une seule personne ni d’une boîte mail unique.

---

**Accès arbitre intégré**

L’arbitre peut être ajouté directement à l’événement :

- accès aux inscrits en temps réel
- synchronisation directe avec Sharly Chess
- préparation possible en amont sans manipulation supplémentaire

Cela améliore fortement la coordination entre organisateurs et arbitre, sans avoir à s’échanger des fichiers dans tous les sens.

---

**Affichage clair et de qualité des résultats et des appariements**

Synchronisation parfaite entre le logiciel d’arbitrage et les informations affichées sur Sharly-Chess.com :

- résultats garantis conformes à ceux affichés dans la salle de jeu
- plus aucune limite sur le type ou le nombre de départages affichés
- prise en charge de compétitions spécifiques, comme les tournois scolaires
- gestion des tournois démarrant à une table donnée

Par exemple, lorsqu’il y a plusieurs tournois, il est souvent difficile de numéroter les tables à l’avance, car on ne sait pas encore où un tournoi va se terminer et où le suivant va commencer. À moins d’avoir plus de tables que de joueurs — ce qui, soyons honnêtes, n’arrivera pas si vous utilisez Sharly Chess — il faut généralement attendre la fin du pointage pour tout organiser.

Avec Sharly Chess, il est possible de numéroter toutes les tables à la suite dès le départ, puis de définir simplement pour chaque tournoi son numéro de table de départ une fois les effectifs connus.

Cela évite toute réorganisation de dernière minute et fait gagner un temps précieux.

Ces détails font gagner un temps précieux le jour J.

---

**Un modèle qui permet de faire vivre le projet**

La petite commission sur les paiements permet :

- de maintenir la plateforme
- de développer de nouvelles fonctionnalités
- d’assurer un support continu

Mais surtout, c’est ce qui permet de faire vivre notre logiciel d'arbitrage.

Notre logiciel d’arbitrage est gratuit et open source, développé et maintenu par une très petite équipe d’arbitres passionnés, sur leur temps.

Cet outil transforme concrètement l’organisation des tournois :

- pour les organisateurs, qui gagnent un temps considérable
- pour les arbitres, qui travaillent dans de meilleures conditions
- pour les joueurs, qui bénéficient d’une expérience plus fluide

Si vous utilisez Sharly Chess et qu’il vous apporte de la valeur, cette plateforme est aujourd’hui la **meilleure façon** de soutenir son développement.

C’est ce qui permet de continuer à améliorer l’outil, à corriger rapidement les problèmes, et à faire évoluer le projet dans le bon sens.
{% enddetails %}

## L'application

{% details Peut-on restreindre l'accès à l'interface d'arbitrage ? %}
  L'interface d'administration, qui permet toutes les opérations sur le serveur, est accessible depuis le serveur seulement, sur l'URL locale (`http://localhost` ou `http://127.0.0.1`).

  Pour accéder depuis le serveur aux pages publiques comme depuis un client (pour le pointage et la saisie des résultats), connectez-vous à l'interface publique (`http://192.168.x.x`) et les pages d'arbitrage ne seront par défaut pas accessibles.

  Vous pouvez enfin déléguer certaines opérations d'arbitrage à des clients dans l'[onglet Staff]({% link docs/network/staff.fr.md %}).
{% enddetails %}

{% details id:standard-rating caption:"Pourquoi existe-t-il une option permettant d’utiliser le classement standard pour les joueur·euses non classé·es dans les tournois rapides et blitz ?"  %}

Les [Règlements du classement _FIDE_ pour les tournois rapides et blitz](https://handbook.fide.com/chapter/B02RBRegulations2024) indiquent, à l’Article 7.2.1 :

<div class="quote">
  Si un·e joueur·euse non classé·e possède un classement standard au début d’un tournoi rapide ou blitz, son classement standard est utilisé pour le calcul du classement. Ce·tte joueur·euse est considéré·e comme classé·e, et les articles 7.2.2 à 7.2.5 ci-dessous ne s’appliquent pas.
</div>

Un·e joueur·euse qui pense que son adversaire est non classé·e peut donc être surpris·e de découvrir que sa partie a influencé son propre classement !

Cette règle concerne **uniquement** le calcul des classements, et non pas les appariements. Cependant, le Manuel de l’arbitre _FIDE_ précise :

<div class="quote">
  Si aucun classement fiable n’est connue pour un·e joueur·euse, les arbitres doivent en faire une estimation aussi précise que possible.
</div>

Ainsi, l’arbitre est libre d’attribuer une estimation valable pour le classement des joueur·euses non classé·es.

Il est donc judicieux d’utiliser le classement standard pour les joueur·euses non classé·es dans les tournois rapides et blitz, car cela permet d’éviter des surprises désagréables.

Nous recommandons d’ajouter cette précision dans vos règlements. Un exemple se trouve dans les [Règlements des Championnats du Monde _FIDE_ de parties rapides et blitz 2025](https://handbook.fide.com/files/handbook/wrbc_regulations_2025_open.pdf), qui le mentionnent explicitement à l’Article 4.2.4.1 :

<div class="quote">
  Si un·e joueur·euse n’a pas de classement rapide, son classement standard sera utilisée pour la liste de départ, les appariements (voir Article 4.2.5) et le calcul des départages.
</div>

Ceci est encore plus important si vous utilisez un départage basé sur les classements, puisque les [Règlements _FIDE_ sur les départages](https://handbook.fide.com/chapter/TieBreakRegulations082024) précisent (section 10) :

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
  Par défaut, il est possible que le serveur web ne soit pas autorisé par le pare-feu du serveur, comme par exemple ici avec _Microsoft Defender_ :

  {: .text-center}
  ![Demande d'ouverture du pare-feu _Microsoft Defender_](/assets/faq/faq-system-defender-firewall-1.jpg)

  Selon votre pare-feu, le message pourra être différent et la méthode d'ouverture des ports nécessaires pourra également différer ;
  si nécessaire, contactez votre administrateur réseau pour ouvrir les flux entrants du serveur (par défaut le port `80` en `tcp/udp`, ci-dessous l'autorisation ).

  {: .text-center}
  ![Exemple d'autorisation du pare-feu _Microsoft Defender_ pour _Sharly Chess_](/assets/faq/faq-system-defender-firewall-2.jpg)
{% enddetails %}

{% details Avast refuse l'installation de _Sharly Chess_ %}
  Lors de l'extraction de l'archive `sharly-chess-<x.y.z>.zip`, Avast refuse d'installer l'exécutable `sharly-chess-<x.y.z>.exe` dans le répertoire `bin` avec le message suivant :

  {: .text-center}
  ![Message de _Avast_ à l'extraction de `sharly-chess-<x.y.z>.zip`](/assets/faq/faq-system-avast-1.jpg)

  Il s'agit d'un faux positif, que vous pouvez signaler à la société _Avast_ en cliquant sur le lien **Signaler en tant que faux positif** .

  En cliquant sur le lien **Ouvrir la quarantaine**, vous devez voir le fichier exécutable :

  {: .text-center}
  ![Fichier exécutable en quarantaine](/assets/faq/faq-system-avast-2.jpg)

  Cliquez sur le menu contextuel (`···`) puis sur **Restaurer et ajouter une exception** :

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

  Pour trouver l'application qui utilise déjà un port sur votre serveur, vous pouvez ouvrir un interpréteur de commande en mode administrateur et lancer la commande `netstat -ab` :

  {: .text-center}
  ![Examen des ports utilisés sur le serveur](/assets/faq/faq-system-netstat.jpg)

  (ici le port `80` est utilisé par un autre serveur web `httpd.exe`)
{% enddetails %}

<script>
  if (location.hash) {
    document.querySelector(location.hash)?.setAttribute("open", "");
  }
</script>
