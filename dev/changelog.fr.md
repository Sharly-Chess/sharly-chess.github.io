---
layout: page
title: Changelog
permalink: /changelog/
page_id: changelog
nav_order: 600
separator: true
---

# Changelog

## :point_right: Version 3.2.0 - 29 octobre 2025
- Activation du module _FFE_ uniquement pour les tournois organisés en France (c’est-à-dire lorsque la fédération de l'évènement est « FRA »)
- Activation/désactivation des modules par évènement
- Gestion séparée des classements _FIDE_ et nationaux (les paramètres du tournoi précisent le type de classement à utiliser)
- Disponibilité des tous les départages _FIDE_ standards
- Disponibilité du système d’accélération de Bakou
- Définition des groupes d’accélération à partir des numéros d’appariement plutôt que des seuils de classement
- Publication des résultats vers _Chess-Results.com_ (un grand merci à Heinz Herzog pour avoir rendu cela possible)
- Impression des certificats de norme, avec vérification automatique de tous les critères de norme
- Définition de la valeur des points attribués en cas d’exemption
- Simplification des interface de gestion de l'application et des évènements
- Accès à la fiche du joueur depuis l’onglet Appariements
- Correction de l'affichage du score de la ronde courante sur l'historique des joueur·euses
- Support des départages non-compatibles avec _Papi_ lors de l'export _Papi_ et du téléversement _FFE_
- Correction d’un problème de validation qui permettait d’ajouter deux joueurs avec le même numéro de licence FFE dans un même tournoi
- Possibilité de noter l'abandon/le retour d'un·e joueur·euse depuis la modale d'historique des joueur·eses
- Suppression de l’option d’image de fond des écrans
- Clarification du message d'erreur en cas de fédération inconnue dans _ChessEvent_
- Correction des écrans de saisie avec enregistrement de coups illégaux
- Déplacement des options de log vers la console

## Version 3.1.7 - 20 octobre 2025
- Correction de la selection des images de fond personnalisées
- Correction de l'affichage numéros des échiquiers sur les cartes des écrans
- Correction de l'affichage des numéros des échiquiers fixes
- Amélioration de l'affichage des noms longs sur les écrans
- Autorisation de la recherche des joueur·euses avec des tabulations

## Version 3.1.6 - 12 octobre 2025
- Correction de l'export _PAPI_ des joueur·euses sans identifiant _FFE_
- Définition du type de classement des tournois importés depuis le format TRF

## Version 3.1.5 - 8 octobre 2025
- Correction de l'affichage des joueur·euses sans prénom
- Correction de l'activation du plugin ChessEvent

## Version 3.1.4 - 6 octobre 2025
- Correction de l'import d'évènements depuis une version ≤ 2.4.18
- Correction de l'export _PAPI_ des tournois toutes rondes en Berger aller-retour

## Version 3.1.3 - 5 octobre 2025
- Synchronisation des tournois avec _ChessEvent_

## Version 3.1.2 - 3 octobre 2025
- Correction du problème de réimportation _ChessEvent_ et TRF
- Amélioration de la recherche des joueur·euses
- Correction de la mise à jour de l'identifiant unique des écrans

## Version 3.1.1 - 1er octobre 2025
- Correction de la recherche sans tournoi
- Ajout de l’année de naissance aux résultats de recherche
- Correction de l'apparition d'un terminal lors du téléversement _FFE_
- Restauration de la signature de l'application
- Correction de l'import TRF sans partie

## :point_right: Version 3.1.0 - 30 septembre 2025

- Délégation par niveau d'accès pour les clients connectés au serveur
- Critères sur les joueur·euses pour l'inscription aux tournois
- Fenêtre de console dédiée
- Amélioration de l’interface de recherche des joueurs et des résultats
- Option de remplacer un joueur incorrect par un autre
- Amélioration de la navigation de l'onglet Appariements
- Réorganisation des écrans composant les écrans rotatifs
- Import de tournois au format TRF
- Export des tournois au format TRF
- Vue imprimable des statistiques des joueur·euses
- Vue imprimable des QR codes
– Prise en charge des serveurs avec plusieurs adresses IP
– Sélection de plusieurs tournois pour différents aperçus d’impression : liste des joueur·euses, liste de pointage, liste et attribution des prix et les statistiques
- Import de tournois _ChessEvent_ depuis l'interface web (remplace le script `tools/chessevent.bat`)
- Affichage du statut pointé/non-pointé des joueur·euses sur les listes de pointage

## Version 3.0.11 - 26 septembre 2025
- Correction des classements estimés dans l'export _Papi_ et pour le téléversement FFE

## Version 3.0.10 - 26 septembre 2025
- Correction du classement estimé des joueur·euses créé·es manuellement

## Version 3.0.9 - 24 septembre 2025
- Correction de la renumérotation des objets dupliqués

## Version 3.0.8 - 23 septembre 2025
- Éviter de télécharger continuellement les bases locales plus valides lorsqu'il n'y a pas de connexion
- Correction du bouton « Tous / En jeu »
- Correction de la récupération de l'état du plugin depuis une version précédente

## Version 3.0.7 - 16 septembre 2025
- Correction de la tombola
- Augmentation du temps d'attente des recherches _FFE_ en ligne

## Version 3.0.6 - 13 septembre 2025
- Correction du téléversement des résultats sur le site fédéral

## Version 3.0.5 - 13 septembre 2025
- Optimisation des requêtes d'écriture dans la base de données
- Correction de l'import du numéro d'homologation depuis _Papi_

## Version 3.0.4 - 9 septembre 2025
- Correction des données de classement utilisées lors de l'export _Papi_

## Version 3.0.3 - 7 septembre 2025
- Correction du tri des joueur·euses sans prénom
- Correction de l'affichage des écrans rotatifs lorsqu'aucun écran n'est sélectionné
- Correction de la recherche des joueur·euses avec des prénoms multiples
- Affichage des joueur⋅euses de la table 1 dans l'impression des appariements par ordre alphabétique

## Version 3.0.2 - 5 septembre 2025
- Correction de la recherche des joueur·euses sur l'onglet Appariements
- Prise en compte des accents dans la recherche dans la base locale _FFE_
- Correction de l'import de tournois _Papi_
- Correction des boutons d'export exportant le mauvais tournoi

## Version 3.0.1 - 2 septembre 2025
- Correction de la récupération des versions précédentes
- Correction du téléversement _FFE_ après mise à jour _ChessEvent_
- Correction de l'affichage des chronomètres sur les écrans rotatifs et les pilotes d'afficheurs

## :point_right: Version 3.0.0 - 1er septembre 2025
- Suppression du format de stockage Access de _Papi_
- Création des tournois par import d'un fichier _Papi_
- Export des tournois au format _Papi_
- Support de macOS (Apple Silicon Macs seulement)
- La version Windows est désormais reconnue comme signée par Microsoft Defender
- Suppression de la renumérotation automatique des échiquiers en cas d'appariement manuel
- Permettre le remplacement des classements estimés rapide/blitz par les classements standards
- Affichage des informations d'appariement : groupes, flotteurs, historiques et préférences couleurs
- Ajout d’une vue du classement dans l’onglet Appariements après la dernière ronde du tournoi
- Ajout de la recherche de joueur·euse sur l'onglet Appariements
- Amélioration des temps de réponses de l'interface utilisateur
- Amélioration de l'impression des appariements par ordre alphabétique
- Ajout du numéro dans le cas des échiquiers fixes sur les écrans
- Ajout des départages dans les grilles Berger
- Ajout d’une option de départage manuel
- Ajout de départages non compatibles avec _Papi_ (expérimental)
- Éditeur interactif de cadence de jeu
- Ajout des titres _FIDE_ dans l'impression des attributions de prix
- Restauration des évènements archivés
- Masquage des identifiants uniques
- Saisie des résultats non comptabilisés et des pénalités
- Suppression de la limite à 10 caractères des numéros de téléphone des joueur·euses

## Version 2.8.9 - 17 août 2025
- Correction de l'importation des joueur·euses avec titres _FIDE_ de candidat·e depuis le serveur _FFE_ en ligne

## Version 2.8.8 - 12 août 2025
- Correction d'erreurs liées à l'activation du plugin _ChessEvent_

## Version 2.8.7 - 10 août 2025
- Correction d'une erreur de duplication d'anciens appariements en cas d'erreurs de BbpPairings

## Version 2.8.6 - 6 août 2025
- Correction des identifiants _FIDE_ invalides dans les fichiers _Papi_
- Correction de l'affichage des boutons de sortie sur les écrans de saisie
- Correction du nom des écrans par défaut
- Ajout d'un bouton pour créer les évènements depuis la page des archives

## Version 2.8.5 - 2 août 2025
- Correction d'un bug à la création des évènements

## Version 2.8.4 - 25 juillet 2025
- Correction de l'affichage des points sur les écrans

## Version 2.8.3 - 20 juillet 2025
- Correction des titres _FIDE_ des joueur·euses dans les exports PGN
- Correction du formulaire d'édition des tournois
- Compatibilité _Papi_ pour l'utilisation de la performance en départage des tournois toutes-rondes
- Non copie des informations _FFE_/_ChessEvent_ lors de la duplication de tournois
- Amélioration du filtrage sur le nom et le club

## Version 2.8.2 - 9 juillet 2025
- Correction de l'envoi manuel des résultats vers le site _FFE_
- Correction de la suppression des résultats

## Version 2.8.1 - 8 juillet 2025
- Correction de la navigation entre les rondes
- Rechargement des ressources statiques après les mises à jour

## :point_right: Version 2.8.0 - 7 juillet 2025
- Support officiel du moteur interne d'appariements
- Génération d'appariements complémentaires
- Exécution des opérations non-sécurisées lors du passage en mode non-sécurisé
- Ajout de la définition et du calcul des prix
- Amélioration de l'interface utilisateur avec une barre latérale de navigation
- Ajout d'un QR code sur la page d'accueil pour faciliter la connexion des clients
- Simplification de l'usage des sources de données externes
- Ajout d’une option d’impression de la liste de pointage
- Ajout d’une option d’impression pour la performance relative
- Ajout de paramètres de log et mise à jour dynamique de la configuration
- Suppression de l'option `--experimental` et activation des fonctionnalités expérimentales depuis l'interface web
- Ajout du genre sur les impressions des joueur·euses
- Mise à jour des drapeaux des fédérations
- Simplification du premier lancement de l'application
- Récupération des bases de données des joueur·euses lors des mises à jour
- Ajout de boutons « Créer et ajouter à nouveau » pour réduire le nombre de clics lors de la création d'objets
- Calcul de la catégorie des joueur·euses relativement à la date du tournoi
- Ajout de la possibilité de ne pas afficher les adversaires sur les écrans d'appariements par ordre alphabétique

## Version 2.7.10 - 1er juillet 2025

- Correction de l'ajout de joueur·euses sans identifiant _FFE_

## Version 2.7.9 - 18 juin 2025
- Correction de la duplication des tie-breaks des tournois
- Correction de l'allocation des points-joker

## Version 2.7.8 - 16 juin 2025
- Correction des index des bases de données des joueur·euses
- Correction de l'affichage de l'onglet Appariements en l'absence de tournois
- Correction de la numérotation des échiquiers
- Correction du rafraichissement des écrans de résultats
- Restriction des caractères utilisables dans les identifiants des évènements
- Correction de la mise à jour sur le site _FFE_ depuis le script _ChessEvent_

## Version 2.7.7 - 10 juin 2025
- Correction d'un bug à la création des joueur·euses
- Correction de la recherche _FFE_ en ligne
- Amélioration de la gestion des exceptions
- Correction d'un bug à la création des joueur·euses
- Correction de la recherche _FFE_ en ligne
- Correction de la recherche des joueur·euses _FFE_ par leur identifiant _FIDE_
- Correction de l'ajout de joueur·euses _FIDE_ non présent·es dans la base _FFE_
- Prise en compte du numéro du premier échiquier des tournois

## Version 2.7.6 - 8 juin 2025
- Amélioration de la gestion des exceptions
- Correction d'un bug sur l'édition des évènements

## Version 2.7.5 - 6 juin 2025
- Correction de la mise à jour des classements des joueur·euses depuis la base de joueur·euses _FFE_
- Utilisation de la base de données du serveur fédéral lors de la création des joueur·euses à partir de la base _FIDE_
- Correction des couleurs du modal de mise à jour des joueur·euses
- Correction de l'entrée de résultats au clavier sur des échiquiers fixes
- Suppression du modal de configuration de l'appariement lorsque non opportun

## Version 2.7.4 - 3 juin 2025
- Correction du test des identifiants _FFE_ lors de l'édition des tournois
- Correction du type de classement Estimé/National des joueur·euses importé·es depuis _ChessEvent_

## Version 2.7.3 - 2 juin 2025
- Correction de l'affichage des joueur·euses non-_FIDE_ lors de la mise à jour depuis les bases de données _FIDE_ et _FFE_
- Correction d'un bug de mise en ligne des résultats sur le site _FFE_

## Version 2.7.2 - 1er juin 2025
- Suppression d'un avertissement au lancement du programme
- Correction d'un bug à la création des écrans

## Version 2.7.1 - 31 mai 2025
- Interdiction de l'accès aux pages d'arbitrage pour les clients non autorisés
- Normalisation des noms des joueur·euses _ChessEvent_
- Correction et ajout de champs dans l'export des joueur·euses au format ODS
- Diminution des temps de réaction lors de la saisie des résultats sur l'onglet Appariements
- Correction d'un bug sur les familles d'écran sans joueur·euse

## :point_right: Version 2.7.0 - 28 mai 2025
- Intégration des opérations sur le site _FFE_ sur l'interface web
- Suppression du script `ffe.bat`
- Ajout de notifications instantanées dans les onglets Joueur·euses et Appariements lors de nouveaux pointages ou résultats
- Optimisation du temps de chargement de la page des évènements
- Ajout de la tombola
- Ajout des exports PGN et TRF 16
- Alignement du calcul de performance avec celui de _Papi_ en cas de joueur·euses avec demi-point joker
- Correction des dates de naissance _ChessEvent_ antérieures au 01/01/1970

## Version 2.6.4 - 25 mai 2025
- Correction d'un bug sur la mise à jour des tables fixes des joueur·euses
- Ajout d'une traduction manquante sur les cartes des pilotes d'afficheurs

## Version 2.6.3 - 19 mai 2025
- Correction d'un bug de mise à jour des écrans rotatifs et des écrans de familles
- Amélioration de la gestion des exceptions

## Version 2.6.2 - 17 mai 2025
- Ajout de l'impression des tables de Berger
- Correction d'un bug de saisie sur le mot de passe _FFE_
- Correction de bugs d'import des tournois depuis _ChessEvent_

## Version 2.6.1 - 14 mai 2025
- Correction d'un bug d'affichage des familles d'écrans
- Correction d'un bug d'import des tournois depuis _ChessEvent_

## :point_right: Version 2.6.0 - 13 mai 2025
- Amélioration significative des performances
- Mise à jour de toute la documentation
- Mise en ligne du site web https://sharly-chess.com
- Ajout de l'onglet Appariements
- Ajout de la gestion des appariements manuels
- Ajout de l'appariement toutes rondes par grilles de Berger, simple et aller-retour
- _Ajout de l'appariement suisse classique et accéléré (expérimental)_
- Ajout des pilotes d'afficheurs
- Simplification du menu principal
- Déplacement des utilitaires de `bin/` vers `tools/`
- _Ajout des exports PGN et TRF16 (expérimental)_
- Ajout de liens d'aide de l'application vers le site web
- Amélioration de la mise à jour de l'application
- Amélioration des logs
- Correction d'un bug sur la création des écrans par défaut des tournois
- Correction d'un bug de rafraîchissement des écrans de saisie
- Correction d'un bug de configuration de l'application

## Version 2.5.9 - 9 mai 2025
- Correction d'un bug sur les titres et les types de classement des joueur·euses importé·es de _ChessEvent_

## Version 2.5.8 - 30 avril 2025
- Correction d'un bug de récupération des droits d'inscriptions

## Version 2.5.7 - 20 avril 2025
- Correction d'un bug d'impression

## Version 2.5.6 - 17 avril 2025
- Correction d'un bug d'affichage des écrans multi-colonnes (#416)

## Version 2.5.5 - 13 avril 2025
- Correction d'un bug d'affichage des écrans d'appariements (#401)
- Correction d'un bug lors de la suppression d'un résultat

## Version 2.5.4 - 12 avril 2025
- Correction d'un bug de filtrage des clubs et fédérations dans l'onglet Joueur·euses

## Version 2.5.3 - 11 avril 2025
- Récupération de la configuration de l'application depuis une version antérieure
- Modification de l'encodage des fichiers de log
- Correction d'un bug d'affichage des rondes sur les écrans d'appariements
- Correction d'un bug d'initialisation des joueur·euses depuis _ChessEvent_

## Version 2.5.2 - 8 avril 2025
- Correction d'un bug à la récupération des versions antérieures
- Correction d'un bug de connexion au serveur SQL de la _FFE_
- Correction du script `bin/ffe.bat`
- Correction de l'absence de traductions dans les scripts `bin/ffe.bat` et `bin/chessevent.bat`

## Version 2.5.1 - 8 avril 2025
- Correction d'un bug au lancement de l'application

## :point_right: Version 2.5.0 - 7 avril 2025
- Passage en multilingue français/anglais
- Refonte complète de l'interface web
- Ajout/suppression/modification des joueur·euses, changements de tournoi
- Import et mise à jour des joueur·euses depuis les bases _FIDE_ et _FFE_
- Gestion des présences/absences et des points joker
- Gestion complète du pointage (ouverture, pointage, fermeture)
- Suppression de l'onglet « _ChessEvent_ » (configuration des connexions désormais au niveau des événements et tournois)
- Ajout d'une fédération sur les événements
- Support de la méthode HEAD pour les afficheurs dynamiques
- Suppression du fichier `papi_web.ini` et configuration de l'application via l'interface web
- Calcul des départages et classement des joueur·euses
- Impression et affichage du classement et de la grille américaine
- Impression des appariements et résultats
- Réduction du temps de démarrage de l'application
- Ajout de la possibilité de modifier la taille des polices sur les écrans d'affichage
- Correction du calcul des points virtuels en Système Accéléré Dégressif
- Correction d'un bug de mise en ligne des tournois sur le site _FFE_
- Correction d'un bug sur la duplication des écrans, familles et tournois
- Correction d'un bug empêchant l'affichage et la modification des écrans lorsque le numéro du premier échiquier est supérieur au nombre d'échiquiers
- Amélioration des logs et archivage sur disque

## Version 2.4.18 - 23 décembre 2024
- Ajout des écrans par défaut à la création d'un tournoi
- Correction d'un bug dans la gestion des connexions à _ChessEvent_
- Amélioration de l'ergonomie des écrans d'arbitrage

## Version 2.4.17 - 15 décembre 2024
- Masquage de tous les champs de saisie des mots de passe
- Correction d'un bug dans l'affichage du statut des tournois

## Version 2.4.16 - 5 décembre 2024
- Ajout de bandeaux d'alerte pour transmettre rapidement des informations sur les écrans publics

## Version 2.4.15 - 1ᵉʳ décembre 2024
- Correction d'un bug dans la gestion des erreurs
- Correction d'un bug dans la création des bases d'exemples

## Version 2.4.14 - 29 novembre 2024
- Correction d'un bug de saisie des images de fond des événements

## Version 2.4.13 - 24 novembre 2024
- Ajout de l'envoi du règlement des tournois sur le site fédéral
- Correction d'un bug d'affichage des menus sur les écrans publics

## Version 2.4.12 - 22 novembre 2024
- Ajout du règlement des événements et des tournois
- Facilitation de la transmission des fichiers de personnalisation pour intégration dans la distribution
- Correction d'un bug de duplication des familles

## Version 2.4.11 - 18 novembre 2024
- Correction d'un bug lors de la saisie des résultats
- Ajout de la possibilité de récupérer la configuration d'une version antérieure

## Version 2.4.11 - 18 novembre 2024
- Correction d'un bug lors de la saisie des résultats
- Ajout de la possibilité de récupérer la configuration d'une version antérieure

## Version 2.4.10 - 17 novembre 2024
- Correction d'un bug sur l'affichage des tournois privés à venir

## Version 2.4.9 - 17 novembre 2024
- Correction d'un bug sur le téléchargement des tournois vers le site fédéral

## Version 2.4.8 - 16 novembre 2024
- Ajout de la possibilité de ne pas utiliser d'image de fond
- Correction d'un bug sur l'affichage des drapeaux de fédérations sur les écrans de pointage des écrans rotatifs
- Correction d'un bug empêchant l'affichage des appariements par ordre alphabétique

## Version 2.4.7 - 15 novembre 2024
- Affichage des drapeaux de fédérations sur les écrans de pointage des arbitres
- Correction d'un bug sur la récupération des événements des versions précédentes

## Version 2.4.6 - 14 novembre 2024
- Mise à jour (à la demande) vers la dernière version stable disponible
- Affichage de la licence des joueur·euses sur les écrans de pointage des arbitres (#45)
- Correction d'un bug sur le téléchargement des tournois vers le site fédéral

## Version 2.4.5 - 12 novembre 2024
- Optimisation des accès aux bases Access (#48)
- Réduction du trafic client/serveur (#49)

## Version 2.4.4 - 11 novembre 2024
- Ajout d'une fenêtre modale pour le pointage des joueur·euses (#46)
- Ajout de la possibilité de cacher les boutons de sortie des écrans de saisie

## Version 2.4.3 - 6 novembre 2024
- Correction d'un bug sur la mise à jour des bases de données (#43)

## Version 2.4.2 - 4 novembre 2024
- Optimisation des temps de rafraîchissement des pages de saisie des résultats
- Ajout de la possibilité d'effacer ou de corriger un résultat mal saisi (#29)
- Ajout d'un paramètre pour limiter l'âge des résultats affichés sur les écrans de résultats (#27)

## Version 2.4.1 - 3 novembre 2024
- Correction d'un bug sur l'affichage des écrans rotatifs (#41)

## :point_right: Version 2.4.0 - 30 octobre 2024
- Abandon du format INI, déclaration de tous les objets via l'interface web (#37)
- Ajout de la création automatique de tournois d'exemple
- Fluidification de la navigation (HTMX) (#31)
- Masquage de toutes les URL de l'application
- Ajout de la possibilité (configurable) de supprimer un résultat mal saisi
- Ajout de la possibilité de fixer des tables sur les écrans d'appariements
- Ajout de la possibilité de spécifier les tournois affichés sur les écrans de résultats (#27)
- Affichage du numéro de ronde sur les écrans de résultats
- Simplification de la page d'accueil de l'interface web
- Présentation des événements et des écrans sous forme de tuiles
- Amélioration de l'authentification sur les écrans de saisie
- Ajout de la possibilité de restreindre la visibilité de certains événements, écrans, familles d’écrans et écrans rotatifs
- Ajout de la possibilité d'utiliser plusieurs chronomètres (#26)
- Ajout d'écrans fixes permettant d'insérer des images dans les écrans rotatifs
- Suppression de la personnalisation CSS remplacée par une image et une couleur de fond
- Contournement d'un bug du site fédéral sur l'affichage des classements (suppression des forfaits en l'absence d'appariement) (#14)

## Version 2.3.2 - 15 avril 2024
- Correction d'un problème d'affichage des appariements par ordre alphabétique

## Version 2.3.1 - 14 avril 2024
- Correction d'un problème d'encodage des fichiers de configuration

## :point_right: Version 2.3.0 - 8 avril 2024
- Affichage des joueur·euses par ordre alphabétique avant appariement
- Ajout du pointage sur les écrans de saisie
- Ajout de la [Foire aux Questions]({% link dev/faq.fr.md %})
- Correction d'un problème d'affichage du classement et de la grille américaine sur le site fédéral pour les fichiers _Papi_ générés depuis _ChessEvent_
- Correction d'un problème de couleurs sur les appariements par ordre alphabétique
- Interdiction du caractère `/` dans les identifiants des écrans et des tournois

## Version 2.2.1 - 28 mars 2024
- Correction d'un bug de configuration

## :point_right: Version 2.2.0 - 27 mars 2024
- Allègement du moteur web (remplacement de _Django_ par _Litestar_) (#24)
- Affichage du pointage des joueur·euses
- Enregistrement des coups illégaux (option `record_illegal_moves`)
- Mise à jour de l'URL de _ChessEvent_ suite à son déménagement

## Version 2.1.8 - 16 février 2024
- Suppression du pooling ODBC

## Version 2.1.7 - 13 février 2024
- Corrections et améliorations de la documentation

## Version 2.1.6 - 4 février 2024
- Affichage des pilotes ODBC sur la page d'accueil

## Version 2.1.5 - 24 janvier 2024
- Simplification de la configuration des événements :
  - Pour un modèle : suppression de l'obligation de préciser la rubrique `[template.<template_id>.boards]`/`[template.<template_id>.players]` quand l'événement n'a qu'un seul tournoi
  - Pour une famille : utilisation par défaut du modèle portant le même nom
  - Pour un écran rotatif : utilisation par défaut de la famille portant le même nom

## Version 2.1.4 - 23 janvier 2024
- Ajout de l'option `show_unpaired` pour limiter l'affichage des appariements par ordre alphabétique aux joueur·euses apparié·es

## Version 2.1.3 - 22 janvier 2024
- Mise en forfait général des joueur·euses non pointé·es dans _ChessEvent_ dans les fichiers _Papi_

## Version 2.1.2 - 21 janvier 2024
- Ajout du numéro d'homologation _ChessEvent_ dans les fichiers _Papi_

## Version 2.1.1 - 10 décembre 2023
- Possibilité de fixer le nombre d'échiquiers ou de joueur·euses par écran
- Possibilité de fonctionner en réseau local sans connexion Internet (intégration des bibliothèques CSS et JavaScript)

## :point_right: Version 2.1.0 - 9 décembre 2023
- Création des fichiers _Papi_ des tournois depuis la plateforme d'inscription en ligne _ChessEvent_
- Suppression des données personnelles des joueur·euses avant téléchargement sur le site fédéral

## Version 2.0.3 - 19 novembre 2023
- Réduction minimale des téléchargements de tournois vers le site fédéral
- Amélioration de la détection de l'encodage des fichiers de configuration

## :point_right: Version 2.0.0 - 10 novembre 2023
- Livraison sous forme d'un exécutable autonome (plus besoin de XAMPP)
- Configuration des événements au format INI (plus simple que PHP)
- Amélioration de la page d'accueil
- Ajout d'une page par événement
- Ajout d'écrans d'appariements par ordre alphabétique
- Ajout des écrans rotatifs
- Simplification de la configuration des écrans grâce aux modèles et familles d'écrans
- Ajout d'une temporisation pour le transfert des fichiers _Papi_ vers le site fédéral
- Publication des sources

## Version 1.19 - 22 janvier 2023
- Correction d'un bug de protection des pages de saisie des résultats

## Version 1.18 - 4 février 2020
- Correction d'un bug d'affichage des derniers résultats
- Correction d'un bug de transmission sur le site fédéral

## Version 1.17 - 4 octobre 2019
- Correction d'un bug d'accès concurrent (saisie des résultats sur plusieurs écrans)
- Correction d'un bug d'affichage des joueurs avant appariement

## Version 1.16 - 31 août 2019
- Correction d'un bug d'affichage du chronomètre

## Version 1.15 - 31 août 2019
- Compatibilité avec _Papi_ 3.3.6
- Support du système de Haley dégressif
- Support du "bye"
- Ajout du chronomètre
- Amélioration du rafraîchissement des pages
- Renommage de la propriété `no-banner` en `no_banner`

## Version 1.14 - 9 avril 2019
- Ajout des écrans d'affichage des résultats
- Ajout des écrans d'affichage des derniers résultats
- Ajout du rafraîchissement automatique des écrans de saisie
- Amélioration des temps de réponse
- Simplification des URL des écrans
- Téléchargement systématique des fichiers avant affichage sur le site _FFE_

## Version 1.13 - 10 novembre 2018
- Affichage des numéros d'échiquiers

## Version 1.12 - 30 octobre 2018
- Support des tournois à handicap

## Version 1.11 - 27 octobre 2018
- Support du Système Accéléré Dégressif (SAD)
- Support de l'accélération de Haley

## Version 1.10 - 26 octobre 2018
- Possibilité de tester les codes d'accès au site _FFE_
- Possibilité de rendre les données visibles sur le site _FFE_
- Possibilité de télécharger les factures d'homologation depuis le site _FFE_
- Renommage du script `upload.bat` en `ffe.bat`

## Version 1.9 - 23 octobre 2018
- Correction de la mise en ligne sur le site fédéral

## Version 1.8 - 1ᵉʳ septembre 2018
- Amélioration des transitions entre les requêtes

## Version 1.7 - 31 août 2018
- Recherche automatique des mises à jour

## Version 1.6 - 30 août 2018
- Rédaction de la documentation
- Diffusion sous forme d'archive
- Amélioration de l'affichage des participants avant appariements
- Amélioration des styles CSS (normalisation)
- Obfuscation des sources PHP

## Version 1.5 - 3 août 2018
- Ajout de la personnalisation CSS
- Amélioration de l'affichage (bandeau supérieur toujours visible)

## Version 1.4 - 28 juillet 2018
- Gestion de plusieurs écrans de saisie

# Politique de numérotation des versions (`x.y.z`)

- `x` : numéro majeur (changements complets du logiciel)
- `y` : numéro mineur (modifications de configuration et évolutions fonctionnelles)
- `z` : numéro de correctif (modifications du code)
