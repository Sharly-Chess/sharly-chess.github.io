<!-- Ne pas éditer ce tableau manuellement, utiliser plutôt le script generate_access_levels_doc.py. -->

### 🔴 ADM Administration
Inclut tous les autres rôles et donne un accès complet à l'application ; ce niveau d'accès est donné seulement en accédant à Sharly Chess sur l'ordinateur sur lequel est lancé le serveur (à aucun autre appareil du réseau).

### 🟡 ORG Organisation
Autorise l'attribution et la révocation du niveau d'accès « Arbitrage en chef » et l'édition de l'évènement (héritage : Gestion de l'affichage).

### 🟡 ÉCR Gestion de l'affichage
Autorise la gestion des écrans et des comptes qui peuvent s'y connecter (héritage : Visualisation).

### 🟡 ARB Arbitrage en chef
Autorise l'attribution et la révocation du niveau d'accès « Arbitrage adjoint », l'édition de l'évènement et la gestion des tournois (héritage : Arbitrage adjoint).

### 🟡 ADJ Arbitrage adjoint
Autorise la gestion des joueur·euses, la saisie de résultats spéciaux, la modification des résultats et la gestion du pointage, des appariements et des affichages (héritage : Appariement).

### 🟡 APP Appariement
Autorise l'appariement des joueur·euses, en utilisant un moteur d'appariement ou manuellement (héritage : Arbitrage de secteur).

### 🟡 SEC Arbitrage de secteur
Autorise l'accès à l'interface des joueur·euses et des appariements, la modification des coups illégaux et des résultats (héritage : Pointage sur écrans publics, Saisie des résultats sur écrans publics).

### 🟢 POI Pointage sur écrans publics
Autorise le pointage des joueur·euses sur des écrans de saisie publics (héritage : Visualisation).

### 🟢 RÉS Saisie des résultats sur écrans publics
Autorise la saisie des résultats sur des écrans de saisie publics (héritage : Visualisation).

### 🟢 SPE Visualisation
Autorise l'accès aux écrans publics.

<!-- Généré par le script generate_access_levels_doc.py (2026-03-14 13:58) -->
