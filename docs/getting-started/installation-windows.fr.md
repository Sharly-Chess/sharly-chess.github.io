---
layout: page
title: Installation sur Windows
permalink: /installation-windows/
page_id: installation-windows
parent: Bien démarrer
nav_order: 50
---

# Installation de _Sharly Chess_ sur Windows

_Sharly Chess_ est également disponible pour [MacOS]({% link docs/getting-started/installation-mac.fr.md %}) et [Linux]({% link docs/getting-started/installation-linux.fr.md %}).

## Pré-requis

- Windows 10+ à jour

## Installation de _Sharly Chess_

{: .text-center }
[Télécharger la dernière version de _Sharly Chess_ (v{{ site.latest_version }})]({{ site.github_url }}/releases/download/{{ site.latest_version }}/sharly-chess-{{ site.latest_version }}-windows.zip){: .btn }

{: .note }

> :information_source: [Voir les changements de la dernière version]({{ site.github_url }}/releases/latest)

1. Décompressez l’archive téléchargée ;
2. À l’intérieur, vous trouverez un dossier nommé selon le numéro de version. Déplacez ce dossier à l’emplacement de votre choix.
   Nous vous recommandons de le placer dans un dossier parent nommé `sharly-chess` — cela vous permet de garder plusieurs versions bien organisées, et le système de mise à jour automatique installera les futures versions dans ce même dossier.

{: .note }

> :information_source: [Voir les versions précédentes]({{ site.github_url }}/releases)

## Lancer _Sharly Chess_

Pour lancer l’application, il suffit de double-cliquer sur le fichier `.exe` dans le dossier de la version.

Lors du premier lancement, vous serez invité à choisir votre langue. Le logiciel ouvrira ensuite votre navigateur par défaut pour afficher l’interface de _Sharly Chess_, où vous pourrez configurer vos préférences.

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
