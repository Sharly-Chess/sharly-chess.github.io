---
layout: page
title: Chevalets
parent: Impression
permalink: /place-cards/
page_id: place-cards
nav_order: 352
---

# Personalisation des chevalets

Par défaut, _Sharly Chess_ offre trois impressions spécifiques pour réaliser des chevalets de table :

- **chevalets d'échiquier**, avec simplement les numéros de table, qui permettent aux joueur·euses de se repérer facilement dans la salle ;
- **chevalets des joueur·euses**, qui donne un standing aux évènements et facilitent la saisie des feuilles de partie ;
- **chevalets d'appariement**, qui permettent d'afficher sur les tables à la fois les numéros de table et les informations des joueur·euses. 

Pour chaque type de chevalet, un modèle par défaut est proposé.

Il est également possible de personnaliser les chevalets, au niveau du texte et des images.

## Par où commencer ?

Pour imprimer un jeu de chevalets personnalisés, il faut :
- créer le dossier `place_cards/` dans le dossier `custom`
- créer un dossier dans `custom/place_cards`, par exemple `custom/place_cards/essai`
- créer un fichier avec l'extension `.template` dans ce dossier, par exemple `custom/place_cards/essai/echiquiers.template`.

Ce fichier au format TOML va vous permettre une personnalisation complète à l'aide de directives très simples.

Il est enfin possible de s'inspirer des modèles proposés par défaut par _Sharly Chess_ :

- [chevalets de joueur·euse (`type = "player"`)](https://raw.githubusercontent.com/Sharly-Chess/sharly-chess/refs/heads/dev/src/web/templates/admin/print/place_cards/player.template)
- [chevalets d'échiquier (`type = "board"`)](https://raw.githubusercontent.com/Sharly-Chess/sharly-chess/refs/heads/dev/src/web/templates/admin/print/place_cards/board.template)
- [chevalets d'appariement (`type = "pairing"`)](https://raw.githubusercontent.com/Sharly-Chess/sharly-chess/refs/heads/dev/src/web/templates/admin/print/place_cards/pairing.template)

## Propriétés générales des chevalets

| Nom             | Signification                                                                                                                                                           |
|-----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `type`          | Le type de chevalet :<ul><li>`player` (chevalet de joueur·euse, par défaut)</li><li>`board` (chevalet d'échiquier)</li><li>`pairing` (chevalet d'appariement)</li></ul> |
| `name`          | Le nom du modèle, utilisé pour choisir par mi les modèles existants (par défaut le nom du fichier de modèle).                                                           |
| `creator`       | Le créateur du modèle, visible dans la description du modèle.                                                                                                           |
| `unit`          | L'unité de mesure : `mm` (millimètre, par défaut) ou `in` (pouce).                                                                                                      |
| `padding`       | L'espace intérieur des chevalets (pour faciliter la découpe), par ex. `2.5`.                                                                                            |
| `cutting_marks` | Les marques de coupe : `corners` (par défaut), `border` ou `none`.                                                                                                      |
| `font`          | Un fichier de police TrueType (ce fichier doit être présent dans le dossier `custom/place_cards/fonts`.                                                                 |
| `css`           | Do code CSS additionnel.                                                                                                                                                |
| `js`            | Do code JavaScript additionnel.                                                                                                                                         |

Toutes les propriétés sont optionnelles, on utilisera par exemple :

```
type = "player"
name = "Chevalets de joueur·euses"
creator = "Moi <moi@home.org>"
unit = "mm"
padding = 2.5
cutting_marks = "corners"
font = "my_font.ttf"
css = "body { background-color: #ddd }"
js = "alert('Vive Sharly Chess !')"
```

Ou plus simplement :

```
type = "player"
name = "Chevalets nominatifs"
```

{: .warning }
> :warning: L'utilisation des propriétés `css` et `javascript` est réservée aux utilisateur·ices avancé·es.

## Éléments des chevalets

Un chevalet est composé d'un ensemble d'éléments, tous configurables :

- des textes formatés (`text = "..."`) ;
- des images (`image = "..."`).

Chaque élément est défini dans une section à son nom (lettres, chiffres et tirets, ci-dessous `elo`) :

```
[elo]
text = "{{ player.rating }}{{ player.rating_type }}"
bold = true
h_align = "right"
```

### Éléments textuels

Les élements textuels peuvent afficher les informations des joueur·euses, ainsi que d'autres informations sur l'échiquier (pour les chevalets d'échiquier et d'appariement), le tournoi et l'évènement :

| Information              | Signification                                                                      |     Disponibilité      |
|--------------------------|------------------------------------------------------------------------------------|:----------------------:|
| `event.name`             | Le nom de l'évènement                                                              |        toujours        |
| `event.start`            | La date de début de l'évènement (utiliser `event.start.year\|month\|day`)          |        toujours        |
| `event.stop`             | La date de fin de l'évènement (utiliser `event.stop.year\|month\|day`)             |        toujours        |
| `tournament.name`        | Le nom du tournoi                                                                  |        toujours        |
| `tournament.start`       | La date de début du tournoi (utiliser `tournament.start.year\|month\|day`)         |        toujours        |
| `tournament.stop`        | La date de fin du tournoi (utiliser `tournament.stop.year\|month\|day`)            |        toujours        |
| `board.number`           | Le numéro de l'échiquier                                                           |   `board`, `pairing`   |
| `board.white_player`     | Le joueur avec les Blancs                                                          |       `pairing`        |
| `board.black_player`     | Le joueur avec les Noirs                                                           |       `pairing`        |
| `player.fullname`        | Le nom complet du·de la joueur·euse (dépendant de la langue)                       |        `player`        |
| `player.firstname`       | Le prénom du·de la joueur·euse                                                     |        `player`        |
| `player.lastname`        | Le nom de famille du·de la joueur·euse                                             |        `player`        |
| `player.rating`          | Le classement du·de la joueur·euse, utilisé pour les appariements du tournoi       |        `player`        |
| `player.rating_type`     | Le type de classement du·de la joueur·euse (`F`=FIDE, `N`=National, `E`=Estimated) |        `player`        |
| `player.year_of_birth`   | L'année de naissance du·de la joueur·euse (chaine de caractères)                   |        `player`        |
| `player.gender`          | Le genre du·de la joueur·euse, sur une lettre                                      |        `player`        |
| `player.title`           | Le titre FIDE du·de la joueur·euse, le cas échéant                                 |        `player`        |
| `player.federation`      | : La fédération du·de la joueur·euse, sur trois lettres                            |        `player`        |
| `player.federation_flag` | Le drapeau de la fédération du·de la joueur·euse (balise `<img>`)                  |        `player`        |
| `player.club`            | Le club du·de la joueur·euse, le cas échéant                                       |        `player`        |
| `player.category`        | La catégorie du·de la joueur·euse (chaine de caractères)                           |        `player`        |

{: .note }
> :information_source: Il est possible d'accéder aux informations des joueur·euses `board.white_player` et `board.black_player` pour les chevalets d'appariement, par exemple `board.white_player.fullname`.  

{: .note }
> :information_source: Les plug-ins peuvent ajouter des informations supplémentaires à celles proposées ci-dessus.  

### Images

Des images peuvent être ajoutées sur les chevalets, par exemple :

```
[logo]
image = "logo.jpg"
width = 20
h_align = "right"
v_align = "bottom"
```

{: .note }
> :information_source: Les images doivent être stockées dans un dossier `images` au même niveau que le fichier de modèle.

## Formatage des chevalets

### Styles par défaut (`[default]`)

Des styles par défaut peuvent être appliqués à tous les éléments des chevalets à l'aide de la section `[default]` :

```
[default]
font_size = 14.0
bold = false
italic = false
h_align = "left"
v_align = "top"
h_pos = 0.0
v_pos = 0.0
```

### Impression recto-verso en miroir

Pour des chevalets symétriques recto-verso, il suffit de cocher la case correspondante dans le dialogue d'impression et les éléments entrés seront automatiquement dupliqués et imprimés de chaque côté du chevalet.

### Impression recto-verso différenciée

Pour des chevalets recto-verso différenciés, il suffit d'indiquer pour les éléments à imprimer sur le verso la propriété `side = back` (par défaut, la valeur est `side = front`).

## Référence des propriétés des éléments

### Référence (styles par défaut et élements)

| Nom                | Signification                                                               |
|--------------------|-----------------------------------------------------------------------------|
| `font_size`        | La taille de la police (unité : `pt`).                                      |
| `bold`             | `true` pour une police grasse, `false` sinon.                               |
| `italic`           | `true` pour une police penchée, `false` sinon.                              |
| `h_align`          | L'alignement horizontal : `left` (par défaut), `center` ou `right`.         |
| `v_align`          | L'alignement vertical : `top` (par défaut), `middle` ou `bottom`.           |
| `h_pos`            | Le positionnement horizontal (par rapport à la marge ou au center).         |
| `v_pos`            | Le positionnement vertical (par rapport à la marge ou au milieu).           |
| `v_pos`            | Le positionnement vertical (par rapport à la marge ou au milieu).           |
| `opacity`          | L'opacité, de `0.0` (transparent) à `1.0` (totalement opaque).              |
| `background_color` | La couleur de fond (`#nnn`, `#nnnnnn`, `color`, `rbg(nnn, nnn, nnn)`, ...). |
| `color`            | La couleur (texte seulement)).                                              |

### Référence (élements seulement)

| Nom         | Signification                                                                         |
|-------------|---------------------------------------------------------------------------------------|
| `display`   | `true` pour afficher l'élément, `false` pour la cacher.                               |
| `width`     | La largeur de l'élément.                                                              |
| `height`    | La hauteur de l'élément.                                                              |
| `max_width` | La largeur maximale.                                                                  |
| `text`      | Le texte de l'élément.                                                                |
| `image`     | Le nom du fichier d'image (doit être dans le sous-dossier `images`).                  |
| `side`      | `front` pour faire figurer l'élément sur le recto (par défaut), `back` pour le verso. |

## Export des chevalets

Si vous souhaitez envoyer les chevalets que vous avez générés (par exemple pour les confier à quelqu'un pour l'impression), il suffit d'enregistrer le fichier HTML produit (tous les éléments y compris les images et les polices sont contenues dans un seul fichier HTML). 
