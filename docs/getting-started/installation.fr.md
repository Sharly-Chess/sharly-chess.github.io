---
layout: page
title: Installation
permalink: /installation/
page_id: installation
parent: Bien démarrer
nav_order: 50
---

# Installation de _Sharly Chess_

## Windows

### Requirements

- Windows 10+ à jour
- [La dernière version de Papi (3.3.8)](https://dna.ffechecs.fr/ressources/appariements/papi/)
- [Le pilote Access](https://www.microsoft.com/en-us/download/details.aspx?id=54920), nécessaire pour ouvrir les fichiers _Papi_

{: .note }
> :information_source: Pour une compatibilité 32/64bits compatibility du pilote Access driver, exécutez `accessdatabaseengine_X64.exe /passive`

### Installer _Sharly Chess_

{: .text-center }
[Télécharger Sharly Chess v{{ site.version }}]({{ site.download_url }}){: .btn }

> Notez que les versions précédentes sont également disponibles sur la [la page des versions](https://github.com/Sharly-Chess/sharly-chess/releases).

1. Décompressez l’archive téléchargée ;
2. À l’intérieur, vous trouverez un dossier nommé selon le numéro de version. Déplacez ce dossier à l’emplacement de votre choix.
   Nous vous recommandons de le placer dans un dossier parent nommé `sharly-chess` — cela vous permet de garder plusieurs versions bien organisées, et le système de mise à jour automatique installera les futures versions dans ce même dossier.

### Lancer _Sharly Chess_

Pour lancer l’application, il suffit de double-cliquer sur le fichier `.exe` dans le dossier de la version.

Lors du premier lancement, vous serez invité à choisir votre langue. Le logiciel ouvrira ensuite votre navigateur par défaut pour afficher l’interface de _Sharly Chess_, où vous pourrez configurer vos préférences.

Lors des lancements suivants, _Sharly Chess_ ouvrira la page d’accueil, depuis laquelle vous pourrez accéder soit à l’interface d’administration, soit à l’interface client — qui peut être utilisée par d’autres appareils sur votre réseau pour afficher les informations du tournoi.

### Mettre à jour _Sharly Chess_

À chaque lancement, _Sharly Chess_ vérifie si une version plus récente est disponible.

Lorsque c'est le cas, il vous est proposé d'installer cette version au même niveau que la version que vous utilisez.

### Désinstaller _Sharly Chess_

Pour désinstaller _Sharly Chess_, il suffit de supprimer le dossier dans lequel vous l’avez installé.
_Sharly Chess_ ne crée aucun fichier ailleurs sur votre système, ni d’entrée dans le registre — il sera donc complètement supprimé.

{: .warning }
> :warning: Veuillez noter que vos événements sont stockés dans ce dossier. Si vous ne souhaitez pas perdre vos données, pensez à déplacer les fichiers `events/*.db` vers un autre emplacement avant suppression.

## Linux et macOS

_Sharly Chess_ n’est pas encore disponible sur Linux ou macOS. Le support de ces plateformes est prévu dès que nous [supprimerons notre dépendance]({% link docs/getting-started/papi-and-sharly-chess.fr.md %}) au format de fichier `.papi` (qui repose sur Microsoft Access, une technologie uniquement disponible sous Windows).
