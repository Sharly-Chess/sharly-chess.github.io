---
layout: page
title: Feuille de route
permalink: /roadmap/
page_id: roadmap
nav_order: 700
---

# Feuille de route

## Feuille de route macroscopique

| Version | Date | Fonctionnalités |
|:---:|:---:|---|
| Papi-web 1.x | 2013–2023 | Version initiale |
| Papi-web 2.0 | Nov 2023 | Amélioration des écrans d'affichage |
| Papi-web 2.1 | Déc 2023 | Connexion à ChessEvent |
| Papi-web 2.2 | Mars 2024 | Amélioration des performances, coups illégaux |
| Papi-web 2.3 | Avril 2024 | Pointage |
| Papi-web 2.4 | Oct 2024 | Logiciel libre<br/>Support multilingue<br/>Configuration web<br/>Stockage SQLite |
| Papi-web 2.5 | Avril 2025 | Amélioration de l'interface<br/>Gestion des joueurs·euses<br/>Calcul, affichage et impression des classements |
| Papi-web 2.x | 2025 | **Iso-fonctionnalité avec Papi 3.3.8**<br/>Appariements suisse, toutes rondes et manuel, brouillon/publié<br/>Calcul des prix<br/>Calcul des normes et certificats<br/>Statistiques, performances FIDE, import/export TRF, chevalets |
| Sharly Chess 3.0 | 2025 | **Ajout des fonctionnalités non supportées par Papi**<br/>Abandon du format Access<br/>Résultats, départages |

## Feuille de route détaillée

- LAN = usage en réseau local (serveur local)
- SaaS = usage en ligne (serveur distant)

|  | PW 1.19<br>janv. 2023 | PW 2.0<br>nov. 2023 | PW 2.1<br>déc. 2023 | PW 2.2<br>mars 2024 | PW 2.3<br>avr. 2024 | PW 2.4<br>oct. 2024 | PW 2.5<br>avr. 2025 | PW 2.x<br>2025 | SC 3.0<br>2025 |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **LAN** | **PW 1.19** | **PW 2.0** | **PW 2.1** | **PW 2.2** | **PW 2.3** | **PW 2.4** | **PW 2.5** | **PW 2.x** | **SC 3.0** |
| Open source | ✖︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ |
| Logiciel libre | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✔︎ AGPL | ✔︎ AGPL | ✔︎ AGPL | ✔︎ AGPL |
| Serveur web inclus | ✖︎ XAMPP | ✔︎ Django | ✔︎ Django | ✔︎ Litestar | ✔︎ Litestar | ✔︎ Litestar | ✔︎ Litestar | ✔︎ Litestar | ✔︎ Litestar |
| Pilote BDD inclus | ✖︎ ODBC | ✖︎ ODBC | ✖︎ ODBC | ✖︎ ODBC | ✖︎ ODBC | ✖︎ ODBC | ✖︎ ODBC | ✖︎ ODBC | ✔︎ SQLite |
| Support Windows | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ |
| Exécutable Windows | ✖︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ |
| Signature exécutable Windows | - | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ? | ? |
| Support Linux | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✔︎ |
| Support Mac | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✔︎ |
| Config. Papi-web | ✖︎ PHP | ✔︎ INI | ✔︎ INI | ✔︎ INI | ✔︎ INI | ✔︎ INI | ✔︎ INI | ✔︎ INI | ✔︎ INI/SQLite |
| Config. événements | ✖︎ PHP | ✖︎ INI | ✖︎ INI | ✖︎ INI | ✖︎ INI | ✔︎ web | ✔︎ web | ✔︎ web | ✔︎ web |
| Stockage tournois | ✖︎ Access | ✖︎ Access | ✖︎ Access | ✖︎ Access | ✖︎ Access | ✖︎ Access | ✖︎ Access | ✖︎ Access | ✔︎ SQLite |
| Stockage événements | - | ✖︎ Fichier | ✖︎ Fichier | ✖︎ Fichier | ✖︎ Fichier | ✔︎ SQLite | ✔︎ SQLite | ✔︎ SQLite | ✔︎ SQLite |

| **SAAS** | **PW 1.19** | **PW 2.0** | **PW 2.1** | **PW 2.2** | **PW 2.3** | **PW 2.4** | **PW 2.5** | **PW 2.x** | **SC 3.0** |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Disponibilité | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ? |
| Open source | - | - | - | - | - | - | - | - | ? |
| Logiciel libre | - | - | - | - | - | - | - | - | ? |
| Stockage | - | - | - | - | - | - | - | - | ? |

| **APPARIEMENTS** | **PW 1.19** | **PW 2.0** | **PW 2.1** | **PW 2.2** | **PW 2.3** | **PW 2.4** | **PW 2.5** | **PW 2.x** | **SC 3.0** |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Appariement suisse | ✔︎<br/>Papi 3.3.6 | ✔︎<br/>Papi 3.3.6 | ✔︎<br/>Papi 3.3.7 | ✔︎<br/>Papi 3.3.7 | ✔︎<br/>Papi 3.3.7 | ✔︎<br/>Papi 3.3.8 | ✔︎<br/>Papi 3.3.8 | ✔︎<br/>bbp 5.0.1 | ✔︎<br/>bbp 5.0.1 |
| Conformité FIDE Handbook C.04 | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✔︎ PW 2.5 | ✔︎ PW 2.6 | ✔︎ SC 3.0 |
| Appariement toutes rondes | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ |
| Appariements manuels | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ |
| Statut brouillon/publié | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✔︎ | ✔︎ |
| Import/export TRF16 | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✔︎ |
| Import/export TRF25 | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✔︎ |

| **CLASSEMENTS** | **PW 1.19** | **PW 2.0** | **PW 2.1** | **PW 2.2** | **PW 2.3** | **PW 2.4** | **PW 2.5** | **PW 2.x** | **SC 3.0** |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Calcul des classements | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ |
| Conformité FIDE parties non jouées | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✖︎ | ✖︎ | ✔︎ | ✔︎ | ✔︎ |
| Conformité FIDE performances | ✖︎ | ✖︎ | ✔︎ | ✔︎ | ✖︎ | ✖︎ | ✖︎ | ✔︎ | ✔︎ |

| **INTERNATIONALISATION** | **PW 1.19** | **PW 2.0** | **PW 2.1** | **PW 2.2** | **PW 2.3** | **PW 2.4** | **PW 2.5** | **PW 2.x** | **SC 3.0** |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| FR | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ |
| Support multilingue | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✔︎ 2.4.19 | ✔︎ | ✔︎ | ✔︎ |
| EN | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✔︎ 2.4.19 | ✔︎ | ✔︎ | ✔︎ |

| **HOMOLOGATION FIDE** | **PW 1.19** | **PW 2.0** | **PW 2.1** | **PW 2.2** | **PW 2.3** | **PW 2.4** | **PW 2.5** | **PW 2.x** | **SC 3.0** |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
|  | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ? | ✔︎ |

| **UTILISATION** | **PW 1.19** | **PW 2.0** | **PW 2.1** | **PW 2.2** | **PW 2.3** | **PW 2.4** | **PW 2.5** | **PW 2.x** | **SC 3.0** |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| HTMX | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ |
| Multi-écrans | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ |
| Multi-colonnes | ✖︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ |
| Appariements alphabétiques | ✖︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ |
| Écrans rotatifs | ✖︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ |
| Enregistrement coups illégaux | ✖︎ | ✖︎ | ✖︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ |
| Pointage | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ |
| Modification des résultats | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ |
| FFE - Envoi tournois | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ |
| FFE - Protection données | ✖︎ | ✖︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ |
| ChessEvent - Téléchargement données | ✖︎ | ✖︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ |
| Gestion des joueurs·euses | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✔︎ | ✔︎ | ✔︎ |
| Impression des appariements | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✔︎ | ✔︎ | ✔︎ |
| Impression des classements | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✔︎ | ✔︎ | ✔︎ |
| Impression des grilles américaines | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✔︎ | ✔︎ | ✔︎ |
| Performances FIDE | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✔︎ | ✔︎ |
| Calcul des prix | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✔︎ | ✔︎ |
| Calcul des normes joueur·euses | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✔︎ | ✔︎ |
| Chevalets | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✔︎ | ✔︎ |
| Tombola | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ? | ? |
| Certificats normes arbitrage | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ? |
| Compétitions par équipe | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ✖︎ | ? |
