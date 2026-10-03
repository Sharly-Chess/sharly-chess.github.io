---
layout: page
title: Tournois de plus de 30 jours
permalink: /tournois-longs/
page_id: rating-periods
parent: Gérer un événement
nav_order: 260
---

# Tournois de plus de 30 jours

La _FIDE_ n'homologue un tournoi comme un seul événement que s'il dure **30 jours au plus**. Un tournoi plus long — un championnat de club sur une saison, un interclubs, un open hebdomadaire — est déclaré en **tranches** d'au plus 30 jours, chacune enregistrée, soumise et homologuée comme un tournoi à part entière.

_Sharly Chess_ appelle ces tranches des **périodes**. Vous cochez la ronde qui commence chacune d'elles, et tout le reste en découle : les classements avec lesquels les parties sont homologuées, les fichiers exportés et les envois vers le site de la _FFE_.

---

## Découper un tournoi

Le bouton **Découper pour la FIDE (30 jours maximum)** se trouve sous les dates du [formulaire du tournoi]({% link docs/running-an-event/managing-tournaments.fr.md %}), et n'apparaît que lorsque ces dates s'étendent sur plus de 30 jours.

Une fois activé, la section **Calendrier** affiche une carte par période, avec ses rondes, ses dates et sa durée. Chaque ronde porte les boutons qui déplacent les limites :

| Bouton | Effet |
| --- | --- |
| ✂ | Commence une nouvelle période à cette ronde |
| ↑ | Déplace cette ronde vers la période précédente |
| ↓ | Déplace cette ronde vers la période suivante |
| ✕ | Supprime cette période, qui rejoint la précédente |

La ronde 1 commence toujours une période : la première carte n'a donc pas de ✕. Déplacer l'unique ronde d'une période supprime simplement cette période.

Une période de plus de 30 jours est refusée à l'enregistrement, et le message nomme la première ronde jouée plus de 30 jours après le début de cette période — celle avant laquelle il faut la couper.

---

## Classements

Chaque tranche est homologuée avec les classements en vigueur au moment où elle est jouée (manuel _FIDE_ `B.01` `1.1.4` : dans un tournoi de plus de 30 jours, les classements **et les titres** des adversaires sont ceux applicables lorsque les parties ont été jouées).

Un·e joueur·euse peut donc avoir un classement différent dans chaque tranche, et _Sharly Chess_ en conserve un jeu par tranche :

- Mettre à jour les classements depuis la base _FIDE_ les enregistre **sur la tranche en cours**. Les tranches précédentes, et les fichiers déjà soumis pour elles, restent tels quels.
- La première ronde d'une nouvelle période vous le rappelle au moment de l'apparier.
- La fenêtre du·de la joueur·euse modifie la tranche en cours, et liste en dessous les classements des tranches précédentes, pour information.

Lorsqu'un classement se rapporte à une partie, c'est celui de la tranche de cette partie ; lorsqu'il résume le tournoi, c'est celui de la tranche en cours :

| Où | Classement affiché |
| --- | --- |
| Appariements, saisie des résultats, impressions des échiquiers et des appariements, écrans publics | la tranche de la ronde |
| Classement, grille américaine, liste des joueur·euses | la tranche en cours |

Les normes lisent chaque adversaire tel·le que la ronde jouée l'a connu·e : son classement et son titre.

---

## Départages

La règle `C.07:10` déconseille les départages au classement dans un tournoi où un·e joueur·euse peut avoir plusieurs classements, et un départage qui lit un classement le signale sur sa ligne dans la fenêtre des départages.

Si vous en utilisez un malgré tout, **Classement utilisé par les départages**, dans cette même fenêtre, décide du classement lu :

- **Premier classement** — celui que la règle retient par défaut, et celui que _Sharly Chess_ utilise sauf choix contraire ;
- **La période de chaque partie** — le classement de l'adversaire au moment de la partie ;
- une période désignée explicitement.

---

## Exporter une tranche

Le menu d'export du tournoi propose un fichier par période sous l'entrée du tournoi entier, aussi bien pour le **TRF** que pour le **Papi**.

Le fichier d'une tranche est celui du tournoi avec les autres rondes laissées vides : les mêmes dates, le même nombre de rondes, les mêmes joueur·euses sous les mêmes numéros, et seules les parties de cette tranche renseignées. Ce qui appartient à la tranche, c'est ce que valent ces parties — ses points, son classement, et les classements et titres avec lesquels elle a été jouée. Le TRF porte le nom des rondes qu'il renseigne, afin de distinguer deux fichiers d'un même tournoi.

C'est la forme que produisent les logiciels des fédérations, et le serveur d'homologation prend en compte les résultats des rondes renseignées.

---

## Le site de la _FFE_

La _FFE_ attribue **un numéro d'homologation par tranche**, à demander à l'avance comme pour tout autre tournoi.

- La **première** tranche utilise le numéro et le mot de passe du tournoi, saisis comme d'habitude dans le formulaire du tournoi. C'est aussi là que les résultats complets sont publiés pour les joueur·euses.
- **Chaque période suivante** a son propre numéro et son mot de passe, sur sa carte dans la section Calendrier.

L'envoi du tournoi transmet le tournoi entier sous la première homologation, puis la tranche en cours sous la sienne. Dans la fenêtre de transfert des données, chaque tranche indique son propre état — jamais envoyée, envoi en cours, envoyée et quand, ou son propre échec. Une tranche déjà soumise peut être renvoyée seule, par **Envoyer la période N** dans le menu _FFE_ du tournoi : c'est ce qu'il faut pour corriger une tranche déjà homologuée.

Seul le tournoi est rendu visible sur le site de la _FFE_ ; les tranches sont des homologations pour le classement, pas des pages pour les joueur·euses.

Un point à prévoir : la _FFE_ ferme une homologation une fois sa tranche envoyée à la _FIDE_. Demandez à la fédération de rouvrir la première, afin de pouvoir continuer à y publier les résultats complets du tournoi.
