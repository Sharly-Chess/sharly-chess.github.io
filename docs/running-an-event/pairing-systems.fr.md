---
layout: page
title: Systèmes d'appariement
permalink: /systemes-appariement-individuels/
page_id: individual-pairing-systems
parent: Événements individuels
nav_order: 450
---

# Systèmes d'appariement individuels

Un tournoi individuel utilise l'un des quatre systèmes d'appariement, choisi sur le
formulaire du tournoi (voir [Gérer les tournois]({% link docs/running-an-event/managing-tournaments.fr.md %})).
Chacun apparie des **joueur·euses** entre elles.

| Système | Idéal pour | Mode d'appariement |
|---|---|---|
| **Suisse** | Grands plateaux, moins de rondes que de joueur·euses | Apparie selon le classement à chaque ronde (système suisse néerlandais _FIDE_) |
| **Toutes‑rondes** | Petits plateaux où chacun·e doit rencontrer tout le monde | Calendrier toutes‑rondes fixe, selon les tables de Berger ou le vôtre |
| **[Système coupe]({% link docs/running-an-event/knockout.fr.md %})** | Coupes et barrages où le·la perdant·e est éliminé·e | Un tableau à têtes de série ; le·la vainqueur·e de chaque match continue |
| **[Keizer]({% link docs/running-an-event/keizer.fr.md %})** | Événements de club au long cours, avec présence variable | Système à valeur de classement qui apparie les présent·es de chaque ronde |

---

## Suisse

Les joueur·euses sont apparié·es ronde par ronde selon leur classement, de sorte
que celles et ceux de scores voisins se rencontrent. Il gère n'importe quel
nombre de participant·es et c'est le choix habituel lorsqu'il y a plus de
joueur·euses que de rondes.

- Les appariements utilisent le **système néerlandais _FIDE_**, avec un
  vérificateur de cohérence intégré.
- Avec un **nombre impair de joueur·euses**, une personne reçoit un **exempt
  d'appariement** (PAB) à chaque ronde. Des exempts à zéro, demi‑ ou un point
  peuvent aussi être attribués à la main.
- Les **appariements interdits** (même club, fédération ou équipe) peuvent être
  séparés, en règles strictes ou en règles souples qui se relâchent depuis le bas
  du plateau.

{: .warning }

> :warning: Les **appariements interdits** ne doivent **pas** être utilisés pour
> les événements officiels _FIDE_ — ils passent outre les règles d'appariement
> néerlandaises _FIDE_. À réserver aux formats de club et de festival.

_Variations :_

- **Système suisse standard** — apparie uniquement selon le classement.
- Six variations **accélérées** ajoutent des points fictifs au départ pour que les
  leaders se rencontrent plus tôt. Voir **[Accélérations]({% link docs/running-an-event/accelerations.fr.md %})**.

---

## Toutes‑rondes

Chaque joueur·euse rencontre tous les autres. Le calendrier complet, qui
rencontre qui et avec quelles couleurs à chaque ronde, est fixé avant le début
du tournoi : il n'y a donc aucune décision d'appariement pendant l'événement. Il
n'y a **pas de bye** : avec un nombre impair de joueur·euses, un·e joueur·euse est
exempt·e à chaque ronde.

_Variations :_

- **Berger** — toutes‑rondes simple selon les tables de Berger : chaque paire se
  rencontre une fois.
- **Berger aller-retour** — toutes‑rondes double selon les tables de Berger :
  chaque paire se rencontre deux fois, couleurs inversées.
- **Calendrier personnalisé** — toutes‑rondes simple sur un calendrier que vous
  établissez vous‑même.
- **Calendrier personnalisé aller-retour** — toutes‑rondes double sur un
  calendrier que vous établissez vous‑même.

### Le calendrier

Un tournoi Berger s'apparie avec **Apparier le tournoi**, qui apparie toutes les
rondes selon les tables de Berger, d'après les numéros de Berger fixés dans les
paramètres d'appariement. Tant qu'aucun résultat n'est saisi, **Désapparier le
tournoi** retire les appariements. Une fois le tournoi apparié, **Modifier le
calendrier** permet de changer le calendrier.

Un tournoi personnalisé n'a rien d'après quoi être apparié tant que son
calendrier n'est pas établi : son onglet des appariements s'ouvre donc
directement sur le calendrier, vide. L'enregistrement du calendrier apparie
toutes les rondes ; ensuite, **Modifier le calendrier** permet de le changer.

Pendant la modification, l'onglet affiche la ronde choisie, une ligne par
échiquier, avec une liste pour chaque place ; avec un nombre impair de
joueur·euses, une dernière ligne désigne l'exempt·e. Chaque liste propose
d'abord les joueur·euses qui n'ont pas encore de place dans la ronde, puis, sous
**Apparié·es**, celles et ceux qui en ont une : en choisir un·e le ou la déplace
et laisse vide sa place précédente. Le bouton fléché au milieu d'une ligne
inverse les couleurs. Passez d'une ronde à l'autre avec les contrôles de ronde
habituels. Sur un calendrier vide, **Remplir avec les tables de Berger** fournit
un point de départ ; sinon **Vider**, après confirmation, libère toutes les
places dont la partie n'a pas été jouée.

Un bandeau liste chaque règle enfreinte par le calendrier, avec un lien vers la
ronde concernée :

- toutes les places de toutes les rondes sont attribuées, et personne n'est
  placé deux fois dans une ronde ;
- chaque paire de joueur·euses se rencontre exactement une fois (deux fois en
  aller-retour) et, avec un nombre impair de joueur·euses, chacun·e est
  exempt·e une fois (deux fois) ;
- personne n'a la même couleur trois rondes de suite et, en aller-retour, la
  seconde partie de chaque paire inverse les couleurs de la première.

La règle des couleurs ne s'applique pas aux tables de Berger elles‑mêmes : sans
inversion des deux dernières rondes du premier cycle, un calendrier Berger
aller-retour donne à certain·es joueur·euses la même couleur trois rondes de
suite.

**Enregistrer le calendrier** n'est possible qu'une fois toutes les règles
respectées. L'enregistrement apparie à nouveau toutes les rondes en conservant
les parties déjà jouées, qui sont verrouillées et ne peuvent pas être déplacées.
**Annuler la modification** laisse le calendrier tel qu'il était. Quand le
calendrier d'un tournoi Berger ne suit plus les tables de Berger, son
enregistrement fait du tournoi un tournoi personnalisé.

Une fois des résultats saisis, une ronde peut avoir été jouée autrement que
prévu, par exemple quand des joueur·euses se sont trompé·es d'échiquier.
**Déverrouiller les parties jouées** permet alors de modifier les parties déjà
jouées, pour les rétablir telles qu'elles ont réellement été jouées : leurs
résultats sont conservés quand ceux des deux joueur·euses concordent, et les
rondes dont les résultats sont à saisir à nouveau sont indiquées. Si le
calendrier enfreint alors les règles, **Enregistrer malgré tout** l'enregistre
quand même, après confirmation. Le journal et le TRF listent alors chaque règle
enfreinte par le calendrier enregistré, tant qu'elle l'est : enregistrer à
nouveau un calendrier qui respecte les règles les fait disparaître. Une place
vide, ou un·e joueur·euse placé·e deux fois dans une ronde, ne peut jamais être
enregistré.

Des joueur·euses peuvent rejoindre un tournoi Berger tant qu'il n'est pas
apparié ; ils et elles prennent les numéros de Berger suivants, et le nombre de
rondes suit le plateau.

Un tournoi personnalisé accepte des joueur·euses jusqu'à la saisie du premier
résultat. Ses appariements sont alors retirés et son calendrier revient à sa
modification, le nombre de rondes suivant le plateau. Un·e joueur·euse qui
rejoint un plateau impair est déjà placé·e, à chaque ronde, face à la personne
qui devait être exempte ; sinon, toutes les parties encore valables sont
conservées, et seules les nouvelles places et rondes restent à remplir.

Toutes les rondes étant connues d'avance, le passage à la ronde suivante est une
étape explicite : lorsque vous naviguez au-delà de la ronde en cours, _Sharly
Chess_ vous demande s'il faut **terminer la ronde** (la suivante devient alors
la ronde en cours) ou simplement jeter un œil à la ronde suivante, et vous
prévient si des échiquiers sont encore sans résultat.

Le formulaire du tournoi propose la **règle de participation _FIDE_ 6.6** pour
les toutes‑rondes : un·e joueur·euse qui a abandonné ou a été exclu·e après
avoir disputé **moins de la moitié** de ses parties est retiré·e du classement
final et ses parties sont annulées — elles ne comptent plus dans les scores et
départages de ses adversaires (les résultats restent dans la grille américaine).

---

## Système coupe

Un format de **coupe** : les joueur·euses sont réparti·es dans un **tableau**
selon leur ordre de départ, le·la perdant·e de chaque match est éliminé·e et
le·la vainqueur·e continue, jusqu'à ce qu'il n'en reste qu'un·e. Le nombre de
rondes découle de la taille du plateau, les parties nulles sont tranchées par
des **départages de qualification** (ou par l'arbitre après un barrage), et le
classement se fait selon le tour atteint.

Voir **[Système coupe]({% link docs/running-an-event/knockout.fr.md %})** pour le
tableau, les réglages et la façon dont les matchs sont décidés.

_Variantes :_

- **Élimination simple** — une partie par match, une défaite et c'est fini.
- **Élimination simple — aller-retour** — chaque match en deux parties,
  couleurs inversées, décidé au cumul.
- **Double élimination** — une première défaite fait basculer dans un tableau
  inférieur ; une seconde élimine. Les vainqueur·es des deux tableaux se
  rencontrent en Grande finale.
- **Double élimination — aller-retour** — la double élimination avec des
  matchs en deux parties.

---

## Keizer

Un système à **valeur de classement** conçu pour les **tournois de club au long
cours** — un championnat en soirée sur de nombreuses rondes, où tout le monde ne
joue pas chaque semaine. Plutôt que de compter les points de partie, chaque
joueur·euse porte une valeur tirée de son classement actuel, et le système
apparie les personnes **présentes** à la ronde.

Voir **[Keizer]({% link docs/running-an-event/keizer.fr.md %})** pour son mode de
calcul et ses réglages.

_Variation :_ Keizer.

---

## Lequel choisir ?

- **Plus de joueur·euses que de rondes** → Suisse (ajoutez une [accélération]({% link docs/running-an-event/accelerations.fr.md %}) pour un grand plateau en peu de rondes).
- **Un petit plateau où chacun·e doit rencontrer tout le monde** → Toutes‑rondes.
- **Une coupe ou un barrage où le·la perdant·e est éliminé·e** → [Système coupe]({% link docs/running-an-event/knockout.fr.md %}).
- **Un championnat de club sur de nombreuses soirées, à présence variable** → [Keizer]({% link docs/running-an-event/keizer.fr.md %}).
