---
layout: page
title: Assistant de création
parent: Affichage
permalink: /assistant-de-creation/
page_id: setup-assistant
nav_order: 50
---

# Assistant de création

L'**assistant de création** construit un affichage pas à pas. Vous dites ce que vous voulez mettre en place, il pose une question à la fois, et il crée tout en une seule fois : les écrans, un [menu]({% link docs/screens/menus.fr.md %}) ou un [écran rotatif]({% link docs/screens/rotators.fr.md %}) quand il y a plusieurs écrans entre lesquels passer, et le [canal]({% link docs/screens/display-controllers.fr.md %}) de l'appareil auquel il est destiné. C'est le moyen le plus rapide de commencer, et il montre au fil des questions comment s'articulent les écrans, les menus et les canaux.

Ouvrez-le depuis :

- le bouton **Assistant de création** de l'onglet **Guide**, à côté de son titre ;
- le bouton **Assistant de création** de l'onglet **Écrans**, à côté de **Créer un écran** ;
- le bouton **Lancer l'assistant de création** de l'onglet **Écrans**, tant que l'évènement n'a encore aucun écran.

Le menu **Créer un écran** ouvre toujours le formulaire habituel de l'écran, qui donne accès à toutes les options d'un coup.

---

## Choisir ce que vous mettez en place

L'assistant commence par le choix d'un objectif :

{: .icon-list }
> - <i class="bi-check-square"></i> **Afficher l'état du pointage** – la liste des joueur·euses pointé·es et non pointé·es.
> - <i class="bi-pencil-square"></i> **Permettre aux joueur·euses de pointer** – sur un ordinateur ou une tablette en libre accès pour les joueur·euses.
> - <i class="bi-card-list"></i> **Afficher les appariements par échiquier** – triés par numéro d'échiquier.
> - <i class="bi-people"></i> **Afficher les appariements par ordre alphabétique** – pour que les joueur·euses trouvent leur échiquier.
> - <i class="bi-pencil-square"></i> **Permettre aux joueur·euses de saisir leurs résultats** – sur un ordinateur ou une tablette en libre accès pour les joueur·euses.
> - <i class="bi-trophy"></i> **Afficher le classement** – le classement, la grille américaine ou, pour les toutes-rondes, la grille.

Les écrans d'appariements par ordre alphabétique n'existent pas dans un évènement par équipes : cet objectif n'y est donc pas proposé. Sous les objectifs, l'assistant cite les autres types d'écrans — les derniers résultats, l'image, et ceux qu'ajoutent les plugins —, qui se créent directement depuis le menu **Créer un écran**.

---

## Répondre aux questions

L'assistant pose ensuite ses questions une à une. À gauche, les étapes — **Contenu**, **Présentation**, **Canal**, **Créer** — montrent la question posée sous son étape, et rassemblent les réponses déjà données : cliquez sur l'une d'elles pour revenir à sa question, ou utilisez **Retour**. Depuis la première question, **Retour** ramène au choix de l'objectif. Les réponses sont formulées en mots quand elles ne diraient pas seules à quoi elles répondent : _Joueur·euses non apparié·es masqué·es_ plutôt que _Non_, _3 pages_ plutôt que _3_.

### Afficher des informations

Pour les objectifs qui affichent des informations sur un écran, l'assistant demande :

- **ce qu'il faut afficher** : un ou plusieurs tournois sur une page, ou un seul tournoi sur plusieurs pages ;
- pour un écran sur plusieurs pages, **comment passer d'une page à l'autre** : les pages tournent toutes seules, ce qui convient à un vidéoprojecteur, ou un [menu]({% link docs/screens/menus.fr.md %}) permet à chacun·e de choisir sa page ;
- **comment découper les pages** : un nombre fixe de lignes sur chaque page, _Sharly Chess_ calculant le nombre de pages nécessaires, ou un nombre fixe de pages. Chaque colonne contient le nombre de lignes indiqué : avec 20 lignes et 2 colonnes, chaque page affiche 40 entrées ;
- le nombre de **colonnes** et, si l'évènement a des [chronomètres]({% link docs/screens/timers.fr.md %}), le **chronomètre** à afficher.

Les objectifs d'appariements ajoutent quelques questions qui leur sont propres, comme le format d'affichage des joueur·euses ou, dans un évènement par équipes, l'affichage des seules rencontres.

### Afficher le classement

L'objectif de classement demande d'abord **ce qu'il faut montrer** :

- **le classement**, ou **la grille américaine**, qui se poursuivent avec les questions ci-dessus ;
- **la grille toutes-rondes**, proposée quand l'évènement a un tournoi toutes-rondes. La grille demande les toutes-rondes à afficher, puis l'ordre des joueur·euses : **par numéro d'appariement**, pour que chacun·e garde sa ligne pendant tout le tournoi, ou **par classement**, pour mettre les premier·ères en tête. Une grille tient toujours sur une seule page.

Avec plusieurs toutes-rondes, l'assistant demande **comment afficher les grilles** : toutes sur une seule page, l'une au-dessus de l'autre ; une page par grille, qui tournent toutes seules, ce qui crée un [écran rotatif]({% link docs/screens/rotators.fr.md %}) qui les affiche à tour de rôle ; ou une page par grille, avec un menu pour choisir la grille.

### Permettre aux joueur·euses de saisir

Pour les objectifs où les joueur·euses pointent ou saisissent leurs résultats, l'assistant demande :

- **quels tournois** l'écran couvre ;
- s'il y en a plusieurs, **comment les joueur·euses accèdent à leur tournoi** : avec un menu, où l'on choisit d'abord son tournoi et où chaque tournoi a sa page, ou avec tout sur une seule page que l'on fait défiler ;
- pour un seul tournoi, si l'écran tient **sur une seule page** ou s'étend **sur plusieurs pages, avec un menu pour choisir la page**. Les pages d'un écran de saisie ne tournent jamais toutes seules, pour que l'écran ne change pas sous les doigts de la personne qui l'utilise.

Quand l'évènement n'a qu'un tournoi, l'assistant saute les questions sur les tournois, et les objectifs commencent directement par une page ou plusieurs.

### Choisir le canal

Chaque objectif se termine par le [canal]({% link docs/screens/display-controllers.fr.md %}) pour lequel l'écran est conçu. Un canal est une adresse que vous ouvrez une seule fois sur un affichage — un vidéoprojecteur, une télévision, une tablette —, après quoi vous choisissez depuis _Sharly Chess_ ce que l'affichage montre, sans retourner à l'appareil. Vous pouvez :

- choisir l'un des canaux existants, chacun présenté avec ce qu'il affiche actuellement ;
- en créer un nouveau, en le nommant d'après le lieu, comme _Grande salle_, ou d'après l'appareil, comme _iPad_ ;
- ou ne créer aucun canal, et sélectionner vous-même l'écran sur votre affichage.

Ce que crée l'assistant est marqué comme **conçu pour** le canal : il est proposé en premier quand vous choisissez ce qu'affiche le canal. Le canal lui-même n'est pas modifié — choisissez ce qu'il affiche depuis l'onglet **Canaux**, au moment voulu.

---

## Tout créer

La dernière étape liste ce que les réponses vont créer : d'abord un nouveau canal, avec son nom, puis les écrans et les tournois qu'ils affichent, le menu ou l'écran rotatif avec son nom, et lequel d'entre eux est conçu pour le canal. À côté de **Retour** :

- **Créer** crée le tout en une seule fois, et vous emmène à ce qui a été créé — le menu dans l'onglet **Menus**, l'écran rotatif dans l'onglet **Écrans rotatifs**, ou l'écran dans l'onglet **Écrans** —, la page défilant jusqu'à lui et le mettant brièvement en évidence ;
- **Créer et modifier** fait de même, puis ouvre le formulaire de ce qui a été créé : l'écran quand un seul a été créé, sinon le menu ou l'écran rotatif qui mène aux écrans.

Un menu ou un écran rotatif créé par l'assistant porte le nom de ce qu'il contient, comme _Saisie des résultats_, _Pointage_ ou _Grilles toutes-rondes_, puis _Pointage (2)_ si le nom est déjà pris.

Tout ce qu'il crée est un écran, un menu, un écran rotatif ou un canal ordinaire : affinez-le ensuite depuis son propre onglet, comme n'importe quel autre.
