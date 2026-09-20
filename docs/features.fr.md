---
layout: page
title: Fonctionnalités
permalink: /fonctionnalites/
page_id: features
nav_order: 150
---

# Fonctionnalités

Cette page présente les fonctionnalités de _Sharly Chess_, suite complète de gestion de compétitions d'échecs.

## Événements et tournois

- **Plusieurs tournois par événement** — regroupez les tournois comme vous le souhaitez (par exemple par tranches de classement) au sein d'un même événement. Voir [Créer un événement]({% link docs/running-an-event/creating-an-event.fr.md %}).
- **Événements individuels ou par équipes** — chaque événement est de l'un ou l'autre type, choisi à la création.
- **Répartition des joueur·euses** — répartissez en masse votre liste de joueur·euses entre les tournois d'un événement, par Elo ou selon les critères de chaque tournoi, avec groupes équilibrés et séparation des clubs.
- **Classement des événements** — étiquettes colorées pour organiser vos événements, pré-configurées et personnalisables.
- **Informations publiques et organisateur** — lieu, nom de l'organisateur, e-mail, directeur, site web, ainsi que les couleurs d'affichage public et les réglages des comptes à rebours.
- **Formats de tournoi** — Suisse, Toutes-Rondes, système coupe, Suisse par équipes, Toutes-Rondes par équipes, coupe par équipes, ainsi que les tables fixes (Molter) et les variantes Scheveningen. Voir [Gérer les tournois]({% link docs/running-an-event/managing-tournaments.fr.md %}).
- **Cadence et source de classement** — Standard / Rapide / Blitz par tournoi ; source _FIDE_ / nationale / estimée, avec dérogations possibles.
- **Programmation des rondes** — dates et heures par ronde.
- **Ajustements manuels de points** — bonus ou pénalités par joueur·euse et par équipe, chacun avec un motif, pris en compte dans les classements, les départages et l'export TRF.
- **Byes** — byes à zéro, demi ou un point, exemption, limitation du nombre de byes, et règle « pas de bye lors des N dernières rondes ».
- **Pointage** — marquez les joueur·euses (ou les équipes) présent·es, absent·es ou parti·es ; possibilité de les laisser pointer en autonomie. Voir [Processus de pointage]({% link docs/running-an-event/check-in-process.fr.md %}).
- **Enregistrement des coups illégaux** — avec un plafond configurable par partie.
- **Statistiques** — décomptes par genre, fédération, club, catégorie et type de classement, ainsi que les classements min / max / moyen.
- **Arbitres** — arbitre principal·e, adjoint·e et liste agrégée des arbitres.

## Appariements

- **Suisse conforme _FIDE_** — appariements par le système hollandais via le moteur _BbpPairings_, avec un vérificateur de cohérence intégré.
- **Toutes-Rondes et double Toutes-Rondes** — matchs simples ou aller-retour avec couleurs inversées, avec la règle de participation _FIDE_ 6.6.
- **Système coupe** — élimination simple ou double, matchs en une partie ou aller-retour, match pour la troisième place, tirage par groupes et départages de qualification, pour les joueur·euses comme pour les équipes. Voir [Système coupe]({% link docs/running-an-event/knockout.fr.md %}).
- **Appariements par équipes** — Suisse par équipes, Toutes-Rondes par équipes, double Berger par équipes, coupe par équipes, Scheveningen (standard et double) et tables Molter. Voir [Systèmes d'appariement par équipes]({% link docs/team-tournaments/pairing-systems.fr.md %}) et [Tables Molter]({% link docs/team-tournaments/molter-tables.fr.md %}).
- **Keizer** — appariements flexibles conçus pour les tournois internes de club de longue durée, en appariant à chaque ronde les joueur·euses disponibles tout en permettant des absences occasionnelles.
- **Appariements accélérés** — Baku (Dutch _FIDE_ 2026), Haley, Haley Soft, progressif, score initial et schémas personnalisés.
- **Contrôle manuel** — appariez, désappariez, permutez et échangez à la main à tout moment. Voir [Gérer les appariements]({% link docs/running-an-event/managing-pairings.fr.md %}).
- **Appariements interdits** — empêchez la rencontre de joueur·euses du même club, de la même fédération ou de la même équipe ; règles strictes, ou règles souples qui se relâchent depuis le bas du classement tout en protégeant les premiers échiquiers.
- **Mode sécurité** — les actions sont classées sûres, non sûres ou incompatibles _FIDE_, et conditionnées selon l'état de chaque ronde, pour éviter d'endommager par accident une ronde déjà appariée.

## Départages

Tous les départages _FIDE_ sont pris en charge, aussi bien pour les tournois individuels que par équipes — Buchholz et ses variantes, Sonneborn-Berger, Koya, confrontation directe, performances, et bien d'autres. Les modes d'écrêtage (aucun, Cut-1, Cut-2, Median-1, Median-2) et des ensembles recommandés prédéfinis (_Sharly Chess_ et _FIDE_) sont disponibles, et vous pouvez composer vos propres ensembles.

Voir [Score et départages par équipes]({% link docs/team-tournaments/scoring-tie-breaks.fr.md %}) pour les spécificités par équipes.

## Championnats et Grand Prix

Agrégez les classements de plusieurs tournois ou événements en un classement général, pour les championnats individuels comme par équipes. De nombreuses règles de score sont disponibles — points totaux, points pondérés, points selon le classement, points de classement avec bonus, points ou rang moyen, décompte des places ou des victoires, basé sur les départages, et manuel. Les joueur·euses sont mis·es en correspondance automatiquement entre les tournois sources.

Voir [Championnats]({% link docs/championship/index.fr.md %}) et [Score et départages des championnats]({% link docs/championship/scoring-tie-breaks.fr.md %}).

## Prix

Un module complet de gestion des prix :

- **Types de prix** — monétaire, non monétaire, ou hybride (monétaire plus une valeur complémentaire).
- **Partage ex æquo** — aucun, moyenne, ou système Hort.
- **Structure flexible** — prix construits à partir de filtres de joueur·euses réutilisables (genre, classement, âge, type de classement, club, fédération, et plus).

Voir [Liste des prix]({% link docs/running-an-event/prize-list.fr.md %}).

## Normes de titre _FIDE_

Détection et calcul automatiques des normes de GM, MI, GMF et MIF selon l'ensemble complet des règles _FIDE_ 1.4 — nombre minimum de parties, diversité des fédérations, part de titré·es, score minimum, planchers de classement et marges de performance. Inclut une piste d'audit par ronde pour le rapport IT1, un chercheur de sous-ensembles pour les parties pouvant être retirées, et un simulateur montrant les résultats encore nécessaires pour viser une norme.

## Joueur·euses et équipes

- **Fiches joueur·euse** — nom, date de naissance, sexe, coordonnées, fédération, club, identifiant _FIDE_ et numéro de table fixe, ainsi que les sommes dues et payées.
- **Double système de titres** — titres open (GM/MI/MF/CM) et titres féminins (GMF/MIF/MFF/CMF), affichés ensemble le cas échéant.
- **Classements** — classements par cadence avec un ordre de résolution défini, ainsi que les calculs de classement (estimation premier classement _FIDE_, coefficient K, performance par ronde et variation de classement).
- **Catégories de joueur·euses** — entièrement configurables par événement.
- **Gestion des joueur·euses** — tableau triable et filtrable avec recherche _FIDE_ (affinée par fédération, genre, catégorie d'âge et club) et import avec comparaison. Voir [Gérer les joueur·euses]({% link docs/running-an-event/managing-players.fr.md %}).
- **Gestion des équipes** — compositions avec plafonds d'effectif et réordonnancement, capitaines joueur·euses ou non, groupes d'équipes, alignements par ronde, numérotation stable des échiquiers, byes d'équipe, et score au point de match configurable (par exemple Olympiade 2/1/0). Voir [Événements par équipes]({% link docs/team-tournaments/index.fr.md %}) et [Dérouler les rondes par équipes]({% link docs/team-tournaments/running-team-rounds.fr.md %}).

## Écrans et affichage public

_Sharly Chess_ intègre un serveur web offrant un ensemble complet d'écrans pour l'affichage public et la saisie des résultats.

- **Types d'écran** — pointage, saisie des résultats, appariements par échiquier ou par joueur·euse, derniers résultats, classement et grille américaine, et images.
- **Rotateurs** — séquences d'écrans à défilement automatique pour les affichages sans surveillance. Voir [Rotateurs]({% link docs/screens/rotators.fr.md %}).
- **Menus** — voir [Menus]({% link docs/screens/menus.fr.md %}).
- **Contrôleurs d'affichage** — écrans physiques que vous pouvez affecter à distance à n'importe quel écran ou rotateur. Voir [Contrôleurs d'affichage]({% link docs/screens/display-controllers.fr.md %}).
- **Comptes à rebours** — minuteurs publics avec couleurs et délais configurables. Voir [Minuteurs]({% link docs/screens/timers.fr.md %}).
- **Chess 960** — affichage des positions de départ aux joueur·euses.

## Documents et impression

Une vaste bibliothèque de documents imprimables : listes de joueur·euses et de pointage, appariements, calendriers de Toutes-Rondes, tableaux de coupe, tables Molter et Scheveningen, feuilles de partie, résultats, classements individuels et par équipes, grilles américaines, grilles Berger, listes de prix et reçus, statistiques, rapports de normes, QR codes et cartons de table. Voir [Documents]({% link docs/documents/index.fr.md %}) pour la liste complète.

Les [chevalets de table]({% link docs/documents/place-cards.fr.md %}) — chevalets des joueur·euses, des échiquiers, des appariements et des équipes — sont construits à partir de modèles personnalisables — conçus dans l'éditeur visuel intégré, ou à la main — avec repères de coupe optionnels.

## Import, export et sources de données

- **Import** — prise en charge complète du TRF26 ; import direct des événements et des joueur·euses depuis notre [plateforme d'inscription aux tournois](https://events.sharly-chess.com) ; CSV ; et formats spécifiques aux fédérations via des plugins.
- **Export** — TRF26 (rapport de classement _FIDE_) et PGN ; export des joueur·euses en CSV, ODS, XLSX et vCard.
- **Sources de données** — recherchez les joueur·euses dans la base _FIDE_ locale et, via des plugins, des sources spécifiques aux fédérations (par exemple la _FFE_ en ligne et locale, et les écoles françaises). Voir [Sources de données]({% link docs/player-databases/index.fr.md %}).

## Réseau et contrôle d'accès

_Sharly Chess_ peut être accessible par d'autres arbitres sur le réseau local, avec un contrôle fin de qui peut faire quoi.

- **Niveaux d'accès** — une hiérarchie à dix niveaux, de l'administration jusqu'au spectateur, applicable à l'ensemble de l'application, à un événement ou à des tournois individuels. Voir [Niveaux d'accès]({% link docs/network/access-levels.fr.md %}).
- **Comptes du staff** — déléguez les tâches d'organisation et d'arbitrage. Voir [Comptes du staff]({% link docs/network/staff.fr.md %}).
- **Sécurité** — comptes protégés par mot de passe et accès par session. Voir [Sécurité]({% link docs/network/security.fr.md %}).

## Interface web

Un seul serveur s'adresse à trois publics à la fois :

- **Public / spectateur·ices** — vues d'écrans simples, d'écrans rotatifs et de contrôleur d'affichage en direct, mises à jour en temps réel.
- **Saisie sur site** — saisie et modification des résultats, auto-pointage des joueur·euses et des équipes, et enregistrement des coups illégaux.
- **Console organisateur** — administration complète des événements, tournois, joueur·euses, pointage, appariements et résultats, équipes, prix, championnats, écrans, minuteurs, comptes et documents. Elle s'adapte aux écrans de téléphone, pour saisir les résultats depuis un smartphone dans la salle de jeu.

Voir [Accéder à l'interface]({% link docs/getting-started/accessing-ui.fr.md %}).

## Plugins et intégrations

_Sharly Chess_ peut être étendu par des plugins pour les fédérations nationales et les besoins spécialisés. Voir [Plugins]({% link docs/plugins/index.fr.md %}).

- **[_FFE_]({% link docs/plugins/france/ffe.fr.md %})** (fédération française) — transfert _PAPI_, recherche de joueur·euses, envoi des résultats, licences, ligues françaises, départages, ensembles de règles et titres d'arbitre.
- **_Sharly-Chess.com_** — synchronisation bidirectionnelle avec notre plateforme en ligne pour le pointage, les joueur·euses, les résultats et l'import d'événements. Voir [_Sharly-Chess.com_]({% link docs/events/index.fr.md %}).
- **[Chess-Results.com]({% link docs/plugins/chess-results.fr.md %})** — envoyez vos résultats sur le portail international.
- **[ChessEvent]({% link docs/plugins/france/chessevent.fr.md %})** — téléchargez les inscriptions depuis la plateforme d'inscription française.
- **[Écoles françaises]({% link docs/plugins/france/french-schools.fr.md %})** — prise en charge des tournois scolaires français.
- **[Parties à handicap]({% link docs/plugins/handicap-games.fr.md %})** — les joueur·euses les plus fort·es disposent de moins de temps, avec des pendules par ronde modifiées par la différence de classement.
- **Envoi personnalisé** — envoyez les documents générés vers votre propre emplacement FTP.

## Plateforme

- **Multiplateforme** — fonctionne sous Windows, macOS et Linux, avec une interface identique.
- **Fonctionne hors-ligne** — aucune connexion internet n'est nécessaire pour gérer un tournoi.
- **Mise à jour automatique** — les nouvelles versions sont détectées automatiquement et peuvent être installées directement depuis Sharly Chess.
- **Multilingue** — anglais et français inclus, avec formats de date ISO, EU et US.
