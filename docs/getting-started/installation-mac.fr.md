---
layout: page
title: Installation sur macOS
permalink: /installation-mac/
page_id: installation-mac
parent: Bien démarrer
nav_order: 51
---

# Installer _Sharly Chess_ sur Mac

_Sharly Chess_ est également disponible pour [Windows]({% link docs/getting-started/installation-windows.fr.md %}).

## Prérequis

- Mac équipé d’une puce Apple Silicon (les Mac à processeur Intel ne sont pas pris en charge)

## Installation de _Sharly Chess_

{: .text-center }
[Télécharger la dernière version de _Sharly Chess_ (v{{ site.latest_version }})]({{ site.github_url }}/releases/download/{{ site.latest_version }}/sharly-chess-{{ site.latest_version }}-macos.dmg){: .btn }

{: .note }

> :information_source: [Voir les modifications de la dernière version]({{ site.github_url }}/releases/latest)

1. À l’intérieur du DMG, vous trouverez un dossier portant le numéro de version. Déplacez ce dossier vers un emplacement **accessible en écriture** de votre choix.
   Nous recommandons de le placer dans un dossier parent nommé `sharly-chess` — cela vous permet de conserver plusieurs versions organisées, et la mise à jour automatique installera les futures versions dans ce même emplacement.

{: .warning }

> :warning: **Ne l’installez pas dans le dossier _Applications_**, car _Sharly Chess_ doit pouvoir écrire dans ce dossier,
> et le dossier _Applications_ est en lecture seule.

{: .note }

> :information_source: [Voir les versions précédentes]({{ site.github_url }}/releases)

## Lancer _Sharly Chess_

Pour démarrer l’application, il suffit de double-cliquer sur le fichier `Launch Sharly Chess.app` situé dans le dossier de la version.

Lors du premier lancement, vous serez invité·e à choisir votre langue. Votre navigateur web par défaut s’ouvrira pour afficher l’interface de _Sharly Chess_ et vous permettre de configurer vos préférences.

Lors des lancements suivants, _Sharly Chess_ ouvrira la page d’accueil, depuis laquelle vous pourrez accéder soit à l’interface administrateur, soit à l’interface client — utilisable par d’autres appareils de votre réseau pour afficher les informations du tournoi.
