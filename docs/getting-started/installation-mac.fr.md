---
layout: page
title: Installation sur macOS
permalink: /installation-mac/
page_id: installation-mac
parent: Bien démarrer
nav_order: 51
---

# Installer _Sharly Chess_ sur Mac

_Sharly Chess_ est également disponible pour [Windows]({% link docs/getting-started/installation-windows.fr.md %}) et [Linux]({% link docs/getting-started/installation-linux.fr.md %}).

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

Pour démarrer l’application, il suffit de double-cliquer sur l’application _Sharly Chess_ dans le dossier de la version.

Lors du premier lancement, votre navigateur web par défaut s’ouvrira pour afficher l’interface de _Sharly Chess_ et vous permettre de configurer vos préférences.

Lors des exécutions suivantes, Sharly Chess ouvrira l’interface d’administration dans votre navigateur web par défaut.

## Mettre à jour _Sharly Chess_

À chaque démarrage, _Sharly Chess_ vérifie si une version plus récente est disponible.

Lorsqu’une nouvelle version est trouvée, il vous est proposé de l’installer dans le dossier parent de la version actuelle.

Lorsque vous lancez la nouvelle version de _Sharly Chess_, celle-ci analyse le dossier parent pour détecter les versions précédentes et vous propose de copier et mettre à jour vos données existantes.

Cela vous permet de conserver plusieurs versions de _Sharly Chess_ installées sur votre système et de passer facilement de l’une à l’autre
(mais notez que les modifications apportées à vos données dans une version plus récente ne seront pas reflétées dans les versions plus anciennes).

## Désinstaller _Sharly Chess_

Pour désinstaller _Sharly Chess_, il suffit de supprimer le dossier dans lequel vous l’avez installé.
_Sharly Chess_ n’installe aucun fichier supplémentaire ailleurs et ne crée aucune entrée dans le registre, il sera donc complètement supprimé de votre système.

{: .warning }

> :warning: Notez toutefois que vos tournois sont également stockés dans ce dossier. Si vous ne voulez pas perdre vos données, vous devrez déplacer les fichiers `events/*.sce` vers un autre emplacement avant de supprimer le dossier.
