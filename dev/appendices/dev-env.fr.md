---
layout: page
title: Environnement de dév.
parent: Annexes techniques
permalink: /dev-env
page_id: dev-env
nav_order: 300
---

# Annexe technique - Configuration d'un environnement de développement

Vous pouvez utiliser _PyCharm_ 2024.3.1.1 (_Community Edition_) sur un système Windows 11 à jour.

Clonez le dépôt _GitHub_ https://github.com/sharly-chess/sharly-chess et commencez à jouer ;-)

## Lancement des scripts depuis l'environnement de développement

### Lancement du serveur web

```
python src/papi_web.py
```

Utilisez option `--experimental` pour activer les fonctionnalités expérimentales :

```
python src/papi_web.py --experimental
```

{: .warning }
> :warning: UTILISEZ LES FONCTIONNALITÉS EXPÉRIMENTALES À VOS PROPRES RISQUES !

### Lancement de l'interface avec le serveur FFE

```
python src/papi_web.py --ffe
```

### Lancement de l'interface avec la plateforme ChessEvent

```
python src/papi_web.py --chessevent
```

## Configuration de l'authentification sur le serveur FFE

Le fichier `src/plugins/ffe/.credentials`, utilisé pour se connecter au site fédéral, n'est pas stocké sur le dépôt _GitHub_.

Il doit être généré dans l'environnement de chaque développeur·euse (demander les codes de connexions aux autres développeur·euses) :

```
python scripts/ffe/generate_ffe_sql_server_credentials.py
```

## Création de l'exécutable Windows

L'exécutable _Windows_ est produit automatiquement par une action _GitHub_, déclenchée par l'arrivée d'un tag sur le dépôt _GitHub_.

- [Voir l'action _GitHub_](https://github.com/sharly-chess/sharly-chess/actions/workflows/export.yml)

Une version non publiée (brouillon) est automatiquement créée par l'action avec les notes de la version (https://github.com/Sharly-Chess/sharly-chess/blob/dev/RELEASE_NOTES.md) et doit être validée avant publication.

## Installation des outils et des bibliothèques

À partir de la version 2.6 les librairies ne sont plus stockées sur le dépôt _GitHub_ et sont installées :
- automatiquement dans l'environnement des développeurs au premier lancement du serveur ;
- manuellement en lançant le script `install_libs.py`.

```
python scripts/libs/install_libs.py
```

## Mise à jour des drapeaux des fédérations

Les drapeaux des fédérations sont stockés sur le dépôt _GitHub_ et peuvent être mis à jour à l'aide du script `download_federation_flags.py` :

```
python scripts/federation_flags/download_federation_flags.py
```