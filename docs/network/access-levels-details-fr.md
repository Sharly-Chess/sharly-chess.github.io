<!-- Ne pas éditer ce tableau manuellement, utiliser plutôt le script generate_access_levels_doc.py. -->

{% details ![admin](../../assets/images/access-levels/lock-admin-small.png) ADM Administration %}
**Inclut tous les autres rôles et donne un accès complet à l'application ; ce niveau d'accès est donné seulement en accédant à Sharly Chess sur l'ordinateur sur lequel est lancé le serveur (à aucun autre appareil du réseau).**
{% enddetails %}

{% details ![account](../../assets/images/access-levels/lock-account-small.png) ORG Organisation %}
**Autorise l'attribution et la révocation du niveau d'accès « Arbitrage en chef·fe » et l'édition des évènements ; inclut les persmissions du niveau d'accès « Gestion de l'affichage ».**
- ÉVÈNEMENTS
  - Update events
  - Voir la configuration de l'évènement
- CONTRÔLE D'ACCÈS _(toutes les permissions)_
- TOURNOIS
  - Télécharger les droits d'homologation
- ÉCRANS _(toutes les permissions)_
{% enddetails %}

{% details ![account](../../assets/images/access-levels/lock-account-small.png) ÉCR Gestion de l'affichage %}
**Autorise la gestion des écrans et la gestion des comptes et appareils qui peuvent s'y connecter.**
- CONTRÔLE D'ACCÈS _(toutes les permissions)_
- ÉCRANS _(toutes les permissions)_
{% enddetails %}

{% details ![account](../../assets/images/access-levels/lock-account-small.png) ARB Arbitrage en chef·fe %}
**Autorise l'attribution et la révocation du niveau d'accès « Arbitrage adjoint », l'édition des évènements et la gestion des tournois ; inclut les persmissions du niveau d'accès « Gestion de l'affichage ».**
- ÉVÈNEMENTS
  - Update events
  - Voir la configuration de l'évènement
- CONTRÔLE D'ACCÈS _(toutes les permissions)_
- TOURNOIS _(toutes les permissions)_
- JOUEUR·EUSES _(toutes les permissions)_
- POINTAGE _(toutes les permissions)_
- APPARIEMENTS _(toutes les permissions)_
- CLASSEMENTS _(toutes les permissions)_
- RÉSULTATS _(toutes les permissions)_
- ÉCRANS _(toutes les permissions)_
- PRIX _(toutes les permissions)_
- IMPRESSION _(toutes les permissions)_
{% enddetails %}

{% details ![account](../../assets/images/access-levels/lock-account-small.png) ADJ Arbitrage adjoint %}
**Ce rôle permet de gérer les joueur·euses, les résultats (y compris les résultats spéciaux et la modification des résultats), le pointage, les appariements et les affichages ; il hérite des rôles « Arbitrage de secteur », « Appariement des tournois », « Pointage des joueur·euses » et « Saisie des résultats » pour certains tournois (ou tous les tournois) de l'évènement.**
- ÉVÈNEMENTS
  - Voir la configuration de l'évènement
- TOURNOIS
  - Voir l'onglet Tournois
  - Modifier les tournois
  - Publier les résultats
  - Publier les règles
  - Télécharger les droits d'homologation
- JOUEUR·EUSES _(toutes les permissions)_
- POINTAGE _(toutes les permissions)_
- APPARIEMENTS _(toutes les permissions)_
- CLASSEMENTS _(toutes les permissions)_
- RÉSULTATS _(toutes les permissions)_
- ÉCRANS _(toutes les permissions)_
- PRIX _(toutes les permissions)_
- IMPRESSION _(toutes les permissions)_
{% enddetails %}

{% details ![account](../../assets/images/access-levels/lock-account-small.png) APP Appariement %}
**Autorise l'appariement des joueur·euses, en utilisant un moteur d'appariement ou manuellement.**
- ÉVÈNEMENTS
  - Voir la configuration de l'évènement
- JOUEUR·EUSES
  - Voir l'onglet Joueur·euses
  - Modifier l'historique des joueur·euses
- POINTAGE _(toutes les permissions)_
- APPARIEMENTS
  - Voir l'onglet Appariements
  - Utiliser les moteurs d'appariement
  - Appairer des joueur·euses manuellement
  - Désapparier tous les échiquiers d'une ronde
  - Désapparier un échiquier
  - Permuter les échiquiers
  - Changer la ronde courante
  - Noter des absences
  - Allouer des demi-points joker
  - Voir les appariement avant publication
  - Publier les appariements
- CLASSEMENTS _(toutes les permissions)_
- RÉSULTATS
  - Entrer des résultats
  - Modifier les résultats
  - Noter les coups illégaux
- ÉCRANS
  - Voir les écrans publics
{% enddetails %}

{% details ![account](../../assets/images/access-levels/lock-account-small.png) SEC Arbitrage de secteur %}
**Autorise l'accès à l'interface des joueur·euses et des appariements, la modification des coups illégaux et des résultats.**
- ÉVÈNEMENTS
  - Voir la configuration de l'évènement
- JOUEUR·EUSES
  - Voir l'onglet Joueur·euses
  - Modifier l'historique des joueur·euses
- POINTAGE
  - Pointer les joueur·euses
- APPARIEMENTS
  - Voir l'onglet Appariements
- RÉSULTATS
  - Entrer des résultats
  - Modifier les résultats
  - Noter les coups illégaux
- ÉCRANS
  - Voir les écrans publics
{% enddetails %}

{% details ![no-account](../../assets/images/access-levels/lock-no-account-small.png) POI Pointage sur écrans publics %}
**Autorise le pointage des joueur·euses sur des écrans publics.**
- JOUEUR·EUSES
  - Modifier l'historique des joueur·euses
- POINTAGE
  - Pointer les joueur·euses
- ÉCRANS
  - Voir les écrans publics
{% enddetails %}

{% details ![no-account](../../assets/images/access-levels/lock-no-account-small.png) RÉS Saisie des résultats sur écrans publics %}
**Autorise la saisie des résultats sur des écrans publics.**
- RÉSULTATS
  - Entrer des résultats
- ÉCRANS
  - Voir les écrans publics
{% enddetails %}

{% details ![no-account](../../assets/images/access-levels/lock-no-account-small.png) SPE Visualisation %}
**Permet l'accès aux écrans publics.**
- ÉCRANS
  - Voir les écrans publics
{% enddetails %}

<!-- Généré par le script generate_access_levels_doc.py (2025-09-17 16:20) -->
