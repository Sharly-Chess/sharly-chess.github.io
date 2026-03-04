---
layout: page
title: Installation sur Linux
permalink: /installation-linux/
page_id: installation-linux
parent: Bien démarrer
nav_order: 52
---

# Installer _Sharly Chess_ sur Linux (expérimental)

{: .warning }

> :warning: **FONCTIONNALITÉ EXPÉRIMENTALE !**<br/>
> Les bêta-testeurs ont rapporté des installations réussies sur Ubuntu et Mint, mais nous sommes encore loin d'une distribution stable et maîtrisée pour toutes les plateformes Linux.
> Par ailleurs, les développeurs _Sharly Chess_ ne sont pas en mesure d'apporter du support sur cette partie et recherche des experts Linux. Contactez-vous !

_Sharly Chess_ est également disponible pour [Windows]({% link docs/getting-started/installation-windows.fr.md %}) et [MacOS]({% link docs/getting-started/installation-mac.fr.md %}).

## Prérequis

- Un ordinateur Intel/AMD ou ARM avec une distribution Linux (voir les distributions testées ci-dessous).

## Installation de _Sharly Chess_

{: .text-center }
[Télécharger la dernière version de _Sharly Chess_ (v{{ site.latest_version }}) pour Intel/AMD x86_64]({{ site.github_url }}/releases/download/{{ site.latest_version }}/sharly-chess-{{ site.latest_version }}-linux-x86_64.zip){: .btn }

{: .text-center }
[Télécharger la dernière version de _Sharly Chess_ (v{{ site.latest_version }}) pour ARM® aarch64]({{ site.github_url }}/releases/download/{{ site.latest_version }}/sharly-chess-{{ site.latest_version }}-linux-arm64.zip){: .btn }

{: .note }

> :information_source: [Voir les modifications de la dernière version]({{ site.github_url }}/releases/latest)

1. Décompressez l’archive téléchargée ;
2. À l’intérieur, vous trouverez un dossier nommé selon le numéro de version. Déplacez ce dossier à l’emplacement de votre choix.
   Nous vous recommandons de le placer dans un dossier parent nommé `sharly-chess` — cela vous permet de garder plusieurs versions bien organisées, et le système de mise à jour automatique installera les futures versions dans ce même dossier.

{: .note }

> :information_source: [Voir les versions précédentes]({{ site.github_url }}/releases)

## Lancer _Sharly Chess_

Pour démarrer l’application, il suffit de double-cliquer sur le programme `SharlyChess.AppImage` situé dans le dossier de la version.

Lors du premier lancement, vous serez invité·e à choisir votre langue. Votre navigateur web par défaut s’ouvrira pour afficher l’interface de _Sharly Chess_ et vous permettre de configurer vos préférences.

Lors des exécutions suivantes, Sharly Chess ouvrira l’interface d’administration dans votre navigateur web par défaut.
