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

> :warning: **FONCTIONNALITÉ EXPÉRIMENTALE !**<br/>
> La prise en charge Linux est encore expérimentale et peut ne pas fonctionner sur toutes les distributions Linux.<br/>
> Par ailleurs, les développeurs de _Sharly Chess_ ne sont pas en mesure d'apporter du support sur cette partie et recherchent des experts Linux. Contactez-nous !

_Sharly Chess_ est également disponible pour [Windows]({% link docs/getting-started/installation-windows.fr.md %}) et [MacOS]({% link docs/getting-started/installation-mac.fr.md %}).

## Prérequis

- Un ordinateur Intel/AMD ou ARM avec une distribution Linux (voir les distributions testées ci-dessous).

## Étape 1 : Installer Flatpak

La version Linux de _Sharly Chess_ est distribuée en tant qu'application [Flatpak](https://flatpak.org). Flatpak doit peut-être être installé au préalable :

###  Fedora / Linux Mint / Pop!_OS

Flatpak est **déjà installé** par défaut. Passez à l'étape 2.

### Ubuntu / Debian

```bash
sudo apt update && sudo apt install -y flatpak
```

### Arch Linux / Manjaro

```bash
sudo pacman -S flatpak
```

### openSUSE

```bash
sudo zypper install flatpak
```

### Autres distributions

Consultez [flathub.org/setup](https://flathub.org/setup) pour votre distribution.

## Étape 2 : Intégration graphique (optionnel)

Pour installer des applications depuis le centre de logiciels et ouvrir les fichiers `.flatpakrepo` par double-clic :

### GNOME (Ubuntu, Fedora Workstation)

```bash
sudo apt install gnome-software-plugin-flatpak    # Ubuntu/Debian
sudo dnf install gnome-software                   # Fedora (déjà inclus)
```

> Sur Ubuntu, cela ajoute « Logiciels » (icône bleue/blanche), distinct de « Ubuntu Software » (Snap Store).

### KDE Plasma (Kubuntu, KDE Neon)

```bash
sudo apt install plasma-discover-backend-flatpak   # Ubuntu/Debian
sudo dnf install discover                          # Fedora (déjà inclus)
```

---

## Étape 3 : Activer Flathub

Flathub n'est **pas configuré par défaut** sur la plupart des distributions. Il doit être ajouté manuellement. Sharly Chess en a besoin pour télécharger ses dépendances (environnement GNOME).

```bash
# Ajouter Flathub en mode utilisateur (sans sudo)
flatpak remote-add --user --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo
```

Vérifiez que Flathub a été ajouté :

```bash
flatpak remotes --user
# Devrait afficher « flathub » dans la liste
```

> **Remarque :** Si Flathub est déjà configuré au niveau système (`flatpak remotes` sans `--user`), cela fonctionnera aussi. Mais l'ajout avec `--user` est préférable car il ne nécessite pas de droits administrateur.

---

## Étape 4 : Redémarrer (obligatoire)

Si vous venez d'installer Flatpak pour la **première fois**, vous **devez redémarrer** votre ordinateur. Sans cela :

- Les icônes n'apparaîtront pas dans le menu
- Les variables d'environnement ne seront pas correctes
- Le centre de logiciels ne verra pas le plugin Flatpak

---

## Étape 5 : Installer Sharly Chess

```bash
flatpak remote-add --user --if-not-exists sharly-chess \
  https://flatpak.sharly-chess.com/sharly-chess.flatpakrepo

flatpak install --user sharly-chess com.sharlychess.SharlyChess
```

---

## Lancer _Sharly Chess_

Vous trouverez _Sharly Chess_ dans le menu de démarrage. Vous pouvez également le lancer depuis le terminal :

```bash
flatpak run com.sharlychess.SharlyChess
```

Lors du premier lancement, votre navigateur web par défaut s'ouvrira pour afficher l'interface de _Sharly Chess_ et vous permettre de configurer vos préférences.

Lors des exécutions suivantes, Sharly Chess ouvrira l'interface d'administration dans votre navigateur web par défaut.

---

## Mises à jour

Sharly Chess se met à jour automatiquement en même temps que vos autres applications Flatpak. Pour forcer une mise à jour :

```bash
flatpak update --user
```

---

## Revenir à une version précédente

### 1. Lister les versions disponibles

```bash
flatpak remote-info --user --log sharly-chess com.sharlychess.SharlyChess
```

Trouvez le hash de commit correspondant à la version souhaitée (ex. : « Version 3.5.1 (x86_64) »).

### 2. Revenir à cette version

```bash
flatpak update --user --commit=HASH_COMPLET com.sharlychess.SharlyChess
```

### 3. Épingler pour empêcher les mises à jour automatiques

```bash
flatpak pin --user com.sharlychess.SharlyChess
```

Pour retirer l'épinglette :

```bash
flatpak pin --user --remove com.sharlychess.SharlyChess
```

---

## Stockage des données

Les données de l'application sont stockées dans un répertoire isolé, avec un sous-dossier par version :

```
~/.var/app/com.sharlychess.SharlyChess/data/
└── sharly-chess-X.Y.Z/
    ├── events/          # Tournois (.sce) et configuration (.scc)
    │   └── archives/    # Tournois archivés (.sca)
    ├── logs/            # Journal d'activité
    ├── tmp/             # Bases de données temporaires (FIDE, FFE, sessions)
    └── custom/          # Fichiers personnalisés
```

---

## Désinstallation complète

```bash
# Supprimer l'application (conserver les données)
flatpak uninstall --user com.sharlychess.SharlyChess

# Supprimer l'application ET toutes les données
flatpak uninstall --user --delete-data com.sharlychess.SharlyChess

# Supprimer le dépôt
flatpak remote-delete --user sharly-chess

# (Optionnel) Supprimer également le dépôt de développement
flatpak remote-delete --user sharly-chess-dev
```
