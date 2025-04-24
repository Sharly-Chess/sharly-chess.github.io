---
layout: page
title: Gérer les appariements
permalink: gerer-les-appariements/
page_id: managing-pairings
parent: Gérer un événement
nav_order: 500
---

# Gérer les appariements

Il n’est pas encore possible de générer directement les appariements depuis _Sharly Chess_. Pour le moment, ils doivent encore être créés manuellement avec _Papi_.
Cependant, une fois générés, ils peuvent être entièrement gérés depuis la page **Appariements** de l’interface d’administration.

{: .note }
> ⓘ Une version expérimentale de _Sharly Chess_ permet déjà de générer les appariements automatiquement grâce à une bibliothèque open source appelée [bbPairings](https://github.com/BieremaBoyzProgramming/bbpPairings), également utilisée par plusieurs logiciels homologués par la FIDE.
> La prise en charge officielle de cette fonctionnalité est prévue très prochainement.

---

## L’interface d’appariement

L’interface d’appariement est divisée en deux parties :
- **À gauche** : les joueurs·euses non apparié·e·s et ceux·celles ayant reçu un bye (si c’est le cas).
- **À droite** : les appariements confirmés pour la ronde.

Des contrôles de navigation permettent de changer de tournoi ou de ronde. Vous pouvez aussi filtrer pour n’afficher que les parties en cours.

---

## Apparier manuellement

Pour apparier manuellement un·e joueur·euse (souvent une arrivée tardive), cliquez sur le bouton d’appariement à côté de son nom dans la liste à gauche.
- S’il y a un·e joueur·euse déjà affecté·e à un bye, vous pouvez les appairer directement ensemble.
- Sinon, le·la joueur·euse recevra un bye jusqu’à ce qu’un·e adversaire compatible soit ajouté·e.

{: .warning }
> ⚠︎ Appariement manuel réattribue **tous les numéros de table** pour la ronde en cours.
> Il est **fortement recommandé** d’attendre la fin de la ronde avant d’utiliser cette fonction.
> Cela est dû à une limitation de _Papi_ qui sera levée lorsque nous passerons à une base de données indépendante.

---

## Gérer les byes

Pour attribuer un bye, cliquez sur le bouton correspondant à côté du nom du joueur·euse. Vous pouvez choisir de :
- Donner un **bye à 0 point** pour la ronde en cours.
- Donner un **bye à 0,5 point** (si autorisé).
- Marquer le·la joueur·euse comme **retiré·e**, ce qui lui attribue 0 point pour toutes les rondes restantes.

{: .note }
> ⓘ Selon les paramètres du tournoi, il se peut que vous ne puissiez pas attribuer un bye à 0,5 point si le·la joueur·euse a déjà atteint la limite autorisée, ou si le tournoi est dans ses dernières rondes.

{: .note }
> ⓘ Les byes à 1 point sont déconseillés par la FIDE et ne peuvent pas être attribués depuis l’interface d’appariement.
> Si nécessaire, vous pouvez encore les ajouter depuis la page **Joueurs·euses** via l'historique du·de la joueur·euse.

---

## Entrer les résultats

Chaque ligne d’appariement comprend un bouton permettant de :
- Saisir ou modifier un résultat.
- Permuter les couleurs si les joueur·euse·s ont joué du mauvais côté.
- Supprimer un appariement en cas d’erreur d’adversaire.

{: .tip }
> ☞ Si vous avez un vidéoprojecteur, vous pouvez afficher les résultats en direct. Cela permet aux joueurs·euses de vérifier que leur score a bien été pris en compte.

---

### Saisie rapide

Parfaite pour saisir de nombreux résultats rapidement, notamment depuis une feuille imprimée. Pour l’utiliser :

1. Activez le mode **Remplacement** dans les raccourcis clavier.
2. Cliquez sur une ligne d’appariement (hors du bouton) pour la sélectionner.
3. Utilisez les raccourcis suivants :
   - **1** : victoire des Blancs
   - **2** : victoire des Noirs
   - **3** : partie nulle
   - **0** : effacer le résultat

Le tableau passera automatiquement à la ligne suivante après chaque saisie.

---

### Vérification rapide

Pour valider les résultats après les avoir saisis :

1. Activez le mode **Surbrillance**.
2. Cliquez sur une ligne d’appariement pour la sélectionner.
3. Réentrez les résultats avec les mêmes raccourcis.

Si la saisie correspond, le tableau passe à la ligne suivante. En cas d’erreur, la ligne est surlignée en rouge et la saisie est bloquée jusqu’à ce que vous cliquiez manuellement sur une nouvelle ligne.

---

## Saisie par les joueur·euse·s

Plutôt que d’entrer vous-même les résultats, vous pouvez fournir une tablette ou un ordinateur aux joueur·euse·s pour qu’ils·elles les saisissent directement.
Cela réduit la charge de travail et les erreurs. Voir la section [Écrans]({% link docs/screens/index.fr.md %}) pour les détails de configuration.

{: .tip }
> ☞ Pensez à rafraîchir votre navigateur de temps en temps pour voir les résultats saisis depuis d’autres appareils.

---

## Corriger un résultat

Vous pouvez corriger un résultat à tout moment via le bouton d’édition dans la ligne d’appariement.

Pour éviter les modifications involontaires, _Sharly Chess_ vous alertera en cas de changement sur une ronde précédente.
Vous aurez la possibilité d’activer le **mode non sécurisé** afin de désactiver les alertes pour les autres modifications sur la même ronde.

Ce mode sera automatiquement désactivé dès que vous changerez de ronde.
