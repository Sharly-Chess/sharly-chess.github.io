---
layout: page
title: Installation
permalink: /installation/
page_id: installation
parent: Bien démarrer
nav_order: 50
---

# Installer _Sharly Chess_

### Windows

1. Téléchargez la dernière version de _Sharly Chess_ depuis la [page des versions](https://github.com/Sharly-Chess/sharly-chess/releases).
2. Décompressez l’archive téléchargée.
3. À l’intérieur, vous trouverez un dossier nommé selon le numéro de version. Déplacez ce dossier à l’emplacement de votre choix.
   Nous vous recommandons de le placer dans un dossier parent nommé `SharlyChess` — cela vous permet de garder plusieurs versions bien organisées, et le système de mise à jour automatique installera les futures versions dans ce même dossier.

### Linux et macOS

_Sharly Chess_ n’est pas encore disponible sur Linux ou macOS. Le support de ces plateformes est prévu dès que nous [supprimerons notre dépendance]({% link docs/getting-started/relation-to-papi.fr.md %}) au format de fichier `.papi` (qui repose sur Microsoft Access, une technologie uniquement disponible sous Windows).

## Lancer _Sharly Chess_

Pour lancer l’application, il suffit de double-cliquer sur le fichier `.exe` dans le dossier de la version.

Lors du premier lancement, vous serez invité à choisir votre langue. Le logiciel ouvrira ensuite votre navigateur par défaut pour afficher l’interface de _Sharly Chess_, où vous pourrez configurer vos préférences.

Lors des lancements suivants, _Sharly Chess_ ouvrira la page d’accueil, depuis laquelle vous pourrez accéder soit à l’interface d’administration, soit à l’interface client — qui peut être utilisée par d’autres appareils sur votre réseau pour afficher les informations du tournoi.

## Désinstaller _Sharly Chess_

Pour désinstaller _Sharly Chess_, il suffit de supprimer le dossier dans lequel vous l’avez installé.
_Sharly Chess_ ne crée aucun fichier ailleurs sur votre système, ni d’entrée dans le registre — il sera donc complètement supprimé.

⚠️ Attention toutefois : vos événements sont également stockés dans ce dossier. Si vous ne souhaitez pas perdre vos données, pensez à déplacer ces fichiers vers un autre emplacement avant suppression.
