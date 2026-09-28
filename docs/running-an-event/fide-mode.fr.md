---
layout: page
title: Mode FIDE
permalink: /mode-fide/
page_id: fide-mode
parent: Gérer un événement
nav_order: 250
---

# Mode FIDE

En **mode FIDE**, _Sharly Chess_ maintient le tournoi dans le cadre du règlement _FIDE_ : il refuse les actions que le règlement interdit, avertit avant celles qu'il ne prévoit pas, et consigne chaque atteinte à l'intégrité des appariements, dans l'application comme dans le fichier TRF du tournoi.

Le mode FIDE concerne les tournois **suisses**, pour lesquels il est activé par défaut. Les autres systèmes d'appariement ne le proposent pas.

Les tournois **suisses par équipes** n'ont pas de mode FIDE, mais conservent le [journal](#le-journal) : chaque modification d'une ronde d'après laquelle les suivantes ont été appariées demande une confirmation et est consignée, de même que les modifications du nombre de rondes et des départages. Rien n'est refusé, les paramètres ne sont pas figés, et les appariements modifiés à la main ne sont pas comparés à ceux du moteur.

---

## Activer ou quitter le mode FIDE

Le mode FIDE est un interrupteur de la section **Appariements** du [formulaire du tournoi]({% link docs/running-an-event/managing-tournaments.fr.md %}).

- **Avant l'appariement de la première ronde**, vous pouvez l'activer ou le désactiver librement.
- **Une fois la première ronde appariée**, le désactiver demande une double confirmation, et c'est **définitif** : le tournoi ne pourra plus revenir en mode FIDE. Le TRF indique la ronde à laquelle le mode FIDE a été quitté, à partir de laquelle les données du tournoi ne sont plus fiables.

Un tournoi qui a quitté le mode FIDE affiche un badge rouge **Hors mode FIDE** à côté du titre de la page et sur sa carte.

Un tournoi importé depuis un fichier TRF est en mode FIDE.

---

## Les avertissements

Les avertissements suivent les niveaux définis par la Commission technique de la _FIDE_, et ne peuvent pas être désactivés :

| Niveau | Quand | Ce que vous voyez |
| --- | --- | --- |
| 2 | Une action que le règlement ne prévoit pas | Une information à prendre en compte |
| 3 | Une action non conforme au règlement, mais sans conséquence | Un avertissement, à confirmer ou annuler |
| 4 | Une action non conforme, mais qui peut être nécessaire | Deux avertissements successifs, le second détaillant les conséquences |
| 5 | Une action interdite par le règlement | Refusée, sauf si le tournoi quitte le mode FIDE |

Par exemple, modifier un résultat d'une ronde antérieure à la ronde précédente est interdit : _Sharly Chess_ propose de quitter le mode FIDE, avec la double confirmation de niveau 4, avant de vous laisser le faire.

---

## Corriger la ronde précédente

La ronde en cours a été appariée d'après les résultats de la ronde précédente : chaque modification de la ronde précédente — un résultat, une exemption, une couleur ou un appariement — demande une confirmation, une modification à la fois, et est consignée comme une **correction**. C'est aussi le cas avec les raccourcis clavier.

Les rondes antérieures à la ronde précédente ne peuvent pas être modifiées en mode FIDE.

---

## Corriger une partie pour le rapport Elo

Une erreur découverte après la fin de la ronde suivante est corrigée après le tournoi, pour le rapport Elo uniquement (_FIDE_ C.04.2:4.3) : les appariements et le classement conservent la partie telle qu'elle a été saisie.

Dans un tournoi suisse, pour une ronde antérieure à la ronde précédente, la fenêtre de l'échiquier comporte une section **Correction pour le rapport Elo** : choisissez qui avait les blancs et le bon résultat. Le résultat est alors suivi d'un astérisque (`*`), dont l'info-bulle donne la correction, et :

- L'export TRF donne la partie corrigée dans les fiches des joueur·euses, avec un commentaire (`###`) indiquant ce qu'ont utilisé les appariements et le classement.
- Les points et les rangs des joueur·euses restent ceux du classement.
- L'export Papi, et donc les résultats envoyés sur le site de la _FFE_, donnent aussi la partie corrigée : le classement qui y est affiché peut différer de celui du tournoi.
- La correction figure dans le **Journal**, et dans le **procès-verbal (T2)** _FFE_.

Choisir la partie telle qu'elle a été saisie, ou **Supprimer la correction**, la supprime.

---

## Appariement manuel

La première modification manuelle des appariements de la ronde en cours ou de la ronde suivante — apparier un·e joueur·euse à la main, désapparier un échiquier, inverser les couleurs ou lancer un appariement complémentaire — ouvre un **appariement manuel** de cette ronde, après confirmation.

Pendant la modification d'une ronde :

- Un bandeau au-dessus des appariements l'indique, avec les boutons **Valider les appariements** et **Annuler la modification**.
- Les résultats peuvent toujours être saisis, mais la ronde suivante ne peut pas être appariée.
- Apparier deux joueur·euses qui se sont déjà rencontré·es, qui ne doivent pas être apparié·es ensemble, ou qui enfreindraient les règles de couleurs demande une confirmation ; de même pour donner l'exemption attribuée par l'appariement à un·e joueur·euse qui ne peut pas la recevoir.
- Une information vous prévient quand les deux joueur·euses reçoivent la couleur opposée à celle qu'ils ou elles devraient avoir.

**Valider les appariements** compare vos modifications aux appariements du moteur. S'ils sont identiques, la ronde sort simplement de la modification. S'ils diffèrent, une double confirmation affiche les appariements du moteur à côté des vôtres : vous pouvez reprendre la modification, ou valider quand même, et la différence est consignée.

**Annuler la modification** rétablit les appariements tels qu'ils étaient avant votre première modification, en gardant les résultats saisis entre-temps sur les échiquiers inchangés.

---

## Les paramètres figés

Une fois le tournoi commencé, en mode FIDE :

- **Points** : les points attribués à chaque résultat, et à l'exemption attribuée par l'appariement, ne peuvent plus changer. Quittez le mode FIDE dans le même formulaire pour les modifier.
- **Nombre de rondes** : le modifier demande une double confirmation, et est consigné. Quand la dernière ronde appariée devient, ou cesse d'être, la dernière ronde du tournoi, ses appariements sont à nouveau comparés à ceux du moteur.
- **Départages** : ils sont verrouillés ; une double confirmation les déverrouille, et chaque modification est consignée avec la liste précédente.
- **Appariements interdits** : ils sont annoncés avant la première ronde, et ne peuvent plus changer une fois celle-ci appariée.

Fixer un **nombre maximum de demi-points joker** supérieur à un — le règlement _FIDE_ n'en autorise qu'un par tournoi — demande une confirmation, à tout moment.

---

## Importer un fichier TRF

Après l'import d'un fichier TRF, _Sharly Chess_ apparie à nouveau chaque ronde importée, d'après les rondes précédentes, et compare le résultat aux appariements importés. Les rondes qui diffèrent sont listées et consignées. Quand le fichier a dû être complété pour être importé (anciens formats TRF), la liste de ce qui a été ajouté est aussi affichée, car une hypothèse erronée peut expliquer qu'une ronde diffère.

---

## Le journal

Chaque atteinte à l'intégrité des appariements, et chaque modification des paramètres figés, est consignée :

- Le bouton **Journal** de la page des appariements les liste, une phrase chacune, avec la ronde et la date.
- L'export TRF les inscrit en commentaire (`###`), dans les formats recommandés par la Commission technique de la _FIDE_.
- Le document _FFE_ **procès-verbal (T2)** commence par elles.

Le journal nomme les joueur·euses, quels que soient leurs numéros d'appariement par la suite.
