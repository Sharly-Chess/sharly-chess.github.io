---
layout: page
title: Documents
permalink: /documents
page_id: documents
nav_order: 350
---

# Impression

La fenêtre des documents est accessible de deux manières :

- Via l’option **« Documents »** dans le menu de navigation latéral
- Depuis le **menu d’actions** d’un tournoi (sur la page des tournois). Dans ce cas, le tournoi sera déjà sélectionné dans la fenêtre des documents.

_Sharly Chess_ peut générer une grande variété de documents destinés à être affichés ou imprimés lors d’un tournoi.
Le document choisi s’ouvre dans un nouvel onglet du navigateur, que vous pouvez afficher ou imprimer comme tout autre document.

Les différents types de documents disponibles sont les suivants.

---

## Liste des joueur·euses

Dans les tournois _FIDE_, il est obligatoire d’afficher la liste complète des joueur·euses.
Ce document inclut le nom, le classement, la catégorie d’âge, le genre, la fédération et le club de chaque joueur·euse.

---

## Liste de pointage

_Sharly Chess_ propose plusieurs façons de pointer les joueur·euses avant le début du tournoi. L’arbitre·e peut :

- Pointer les joueur·euses manuellement dans l’interface de _Sharly Chess_
- Permettre aux joueur·euses de s’auto-pointer via un [Écran]({% link docs/screens/single-screens.fr.md %}) sur tablette ou ordinateur

Vous pouvez également utiliser une méthode plus traditionnelle avec une liste de pointage imprimée. Celle-ci inclut :

- Une case à cocher pour chaque joueur·euse ;
- Le nom, le classement, la catégorie d’âge, le genre... ;
- Les montants payés et dus ;
- Les commentaires associés au·à la joueur·euse.

---

## Appariements

Une fois le tournoi lancé, vous voudrez probablement afficher les appariements de chaque ronde.
Cette liste affiche tous les appariements de la ronde sélectionnée, avec les numéros de table et les points des joueur·euses. L’option **Format d’appariement** les présente échiquier par échiquier (**Échiquiers**), ou joueur·euse par joueur·euse (**Joueur·euses**), ce qui aide chacun·e à trouver son échiquier.

---

## Grille Berger

Utilisée pour les tournois toutes rondes, cette grille affiche les appariements pour l’ensemble des rondes.

---

## Calendrier toutes-rondes

Disponible pour les tournois toutes-rondes, individuels ou par équipes. Construit à partir des tables de Berger, il est disponible avant que les rondes ne soient appariées : une ligne par rencontre, une colonne par ronde, avec une légende qui associe chaque numéro Berger ou lettre d’équipe à son nom.

---

## Tableau de la coupe

Proposé pour les tournois en [système coupe]({% link docs/running-an-event/knockout.fr.md %}), ce document dessine le tableau avec les résultats obtenus jusque-là. Son option **programme** liste les mêmes matchs chronologiquement, ronde par ronde, avec la date et l'heure de chaque ronde lorsqu'elles ont été définies.

---

## Règles d'accélération

Disponible pour les tournois suisses appariés avec un [système accéléré]({% link docs/running-an-event/accelerations.fr.md %}). Il décrit les règles du système, puis la façon dont elles s’appliquent au tournoi : les groupes, les points fictifs accordés à chaque groupe, ronde par ronde, et les joueur·euses avec leur groupe.

---

## Résultats

Cette liste est identique à celle des appariements, mais inclut les résultats des parties.

---

## Classement

Affiche le classement actuel du tournoi, avec les points et les départages des joueur·euses.

---

## Classement individuel par équipe

_Évènements individuels uniquement._ Classe des équipes formées à partir des joueur·euses du tournoi, par **Clubs** ou par **Fédérations** (**Type d'équipes**). Les options fixent le **Nombre de joueur·euses par équipe**, le **Nombre de F/H par équipe** (femmes et hommes), le nombre maximum d’équipes par club ou par fédération, et s’il faut **Inclure les équipes incomplètes**.

---

## Table de résultats croisés

Offre une vue détaillée du classement, avec les résultats de chaque ronde pour chaque joueur·euse.

---

## Indicateur de performance pour la ronde

Ce document classe les joueur·euses en fonction de leur performance lors d’une **ronde spécifique** (_et non sur l’ensemble du tournoi_).

Le score indique à quel point un·e joueur·euse a bien (ou mal) joué **par rapport à son propre classement**, en utilisant une version de la formule de changement de classement, avec un facteur K fixe de 20. Il représente donc le nombre de points Elo qu’il ou elle aurait gagnés ou perdus sur cette partie.

Ce système peut être utile pour récompenser les meilleures performances par ronde, ou pour toute autre idée originale des organisateur·ices.

{: .note }
> :information_source: Ce calcul ne correspond pas exactement au changement de classement officiel d’un tournoi homologué _FIDE_.
> Le système _FIDE_ plafonne la différence de classement à 400 points, utilise des facteurs K variables (plus élevés pour les jeunes et les débutant⋅es), arrondit les résultats à l’entier, et ne calcule aucun changement pour les joueur·euses non classé·es.
> Ici, nous appliquons un même système simplifié à tou·tes les participant·es afin de permettre une comparaison équitable des performances.

---

## Liste des prix

Affiche la liste des prix définis pour le tournoi.
Selon le règlement _FIDE_, cette liste doit être affichée au plus tard à mi-parcours du tournoi.

---

## Attribution des prix

Une fois le tournoi terminé, vous pouvez générer la liste des gagnant·es pour chaque prix, selon le classement final.

---

## Reçus financiers des prix

_Évènements individuels uniquement._ Un reçu par prix gagné, avec le mode de paiement (espèces, chèque ou virement) et un cadre de signature pour le ou la gagnant·e ou son mandataire. Seuls les prix monétaires sont inclus, sauf si **Inclure les prix non monétaires** est coché.

---

## Statistiques

Les statistiques de participation des tournois sélectionnés : le nombre de joueur·euses par tournoi, les titré·es, les types de classement, les catégories d’âge, les genres, les fédérations et les clubs, et les tranches de classement avec le classement moyen. L’option **Seuil pour les clubs** masque les clubs ayant moins de joueur·euses.

---

## Normes de titre

Disponibles pour les tournois en cadence standard comptant des titré·es permettant des normes (voir [Normes de titre _FIDE_]({% link docs/features.fr.md %}#normes-de-titre-fide)) :

- **Résumé des normes du tournoi** — une fois le tournoi terminé, toutes les normes de titre obtenues, avec leurs chiffres de performance. Dès que la dernière ronde est appariée, il présente à la place une prévision : ce dont chaque joueur·euse en course a besoin à la dernière ronde pour obtenir chaque norme.
- **Rapport de norme** — le formulaire IT1 de la _FIDE_ (_Certificate of Title Results_) d’un·e joueur·euse, également accessible depuis le résumé. L’option **Exemption 1.4.3** s’applique aux finales de championnat national (1.4.3a) et aux championnats nationaux par équipes (1.4.3b).

---

## Attestation de performance Elo

Disponible pour les tournois comptant des joueur·euses classé·es _FIDE_. L’attestation indique le classement _FIDE_ intermédiaire le plus élevé atteint pendant le tournoi par le·la **Joueur·euse** choisi·e, quel que soit l’usage qu’il·elle veut en faire. Elle s’arrête à la première ronde terminée après laquelle le classement intermédiaire est au plus haut, et liste les parties jouées jusque-là avec le classement de l’adversaire, le résultat, le score attendu et la différence, suivis du calcul de la variation de classement.

L’attestation est signée par l’arbitre principal·e du tournoi, sauf si un·e autre **Arbitre principal·e** est choisi·e. Elle tient sur une page et est en anglais, et son texte peut être modifié avant de l’imprimer ou de la télécharger au format Word.

---

## QR Code

Un QR code à imprimer et à afficher : une fois connectés au **Réseau** choisi, les appareils le scannent pour ouvrir le serveur _Sharly Chess_. Les [plug-ins]({% link docs/plugins/index.fr.md %}) ajoutent d’autres cibles, comme le tournoi sur [_Chess-Results_]({% link docs/plugins/chess-results.fr.md %}) ou l’évènement sur [_Sharly-Chess.com_]({% link docs/events/index.fr.md %}).

---

## Documents par équipes

Les évènements par équipes ont leurs propres documents : feuilles de match, appariements des équipes, classements par équipes, grilles Berger par équipes, et tables Molter et Scheveningen. Voir [Documents & écrans par équipes]({% link docs/team-tournaments/documents-and-screens.fr.md %}).

---

## Chevalets

_Sharly Chess_ offre trois documents spécifiques pour réaliser des chevalets de table :

- **chevalets des joueur·euses**, qui donne un standing aux évènements et facilitent le remplissage des feuilles de partie ;
- **chevalets d'échiquier**, avec simplement les numéros de table, qui permettent aux joueur·euses de se repérer facilement dans la salle ;
- **chevalets d'appariement**, qui permettent d'afficher sur les tables à la fois les numéros de table et les informations des joueur·euses. 

Les chevalets sont construits à partir de **modèles**, que vous pouvez créer et modifier avec l'éditeur intégré — voir le [Guide de personnalisation des chevalets]({% link docs/documents/place-cards.fr.md %}).

{: .tip }
> :point_right: Les chevalets affichent les noms, Elo, clubs… des joueur·euses tels qu'ils figurent dans l'évènement : mettez d'abord à jour les classements des joueur·euses avec **Mettre à jour** › **Classements des joueur·euses** (voir [Classements]({% link docs/running-an-event/ratings.fr.md %}#vérifier-les-classements-avec-les-listes)). La fenêtre des chevalets vous le rappelle.

---

## Documents des plug-ins

Les [plug-ins]({% link docs/plugins/index.fr.md %}) ajoutent leurs propres documents, par exemple :

- les **Formulaires FFE** du [plug-in _FFE_]({% link docs/plugins/france/ffe.fr.md %}) : T1 Page de garde, T2 Procès-verbal, T3 et T4 attestations de licence, T5 Enquête pour forfait injustifié, T6 Exclusion d'un·e joueur·euse, T7 Signalement d'un·e joueur·euse, Indemnités d'arbitrage et Dépôt de plainte pour suspicion de triche ;
- les **Positions Chess960** du plug-in _Chess960_.
