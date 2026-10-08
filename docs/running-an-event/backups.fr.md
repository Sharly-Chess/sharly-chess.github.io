---
layout: page
title: Sauvegardes
permalink: /sauvegardes/
page_id: backups
parent: Gérer un événement
nav_order: 150
---

# Sauvegardes

_Sharly Chess_ sauvegarde vos évènements au fil de votre travail, pour qu'une erreur — une ronde appariée trop tôt, un import qui écrase les mauvais joueur·euses, un fichier qui devient illisible — vous coûte quelques minutes plutôt que la soirée.

Rien n'est à configurer : les sauvegardes sont actives, et chacune est une copie complète de l'évènement, non une différence par rapport à une autre. En restaurer une rend l'évènement exactement tel qu'il était à ce moment-là.

---

## Quand une sauvegarde est effectuée

**Au fil des modifications.** Chaque modification enregistrée dans un évènement demande une sauvegarde. Les modifications d'une même série sont regroupées, et une sauvegarde automatique est effectuée au plus toutes les cinq minutes : saisir cinquante résultats à la suite laisse une copie, pas cinquante.

**Avant une étape de l'évènement**, sur le champ et avant toute écriture :

- avant qu'une ronde soit appariée, désappariée, ou qu'on passe à la suivante ;
- avant un import de joueur·euses, ou leur répartition entre les tournois ;
- avant toute modification d'une ronde depuis laquelle les suivantes ont été appariées — un résultat, un bye, les couleurs d'un échiquier, un appariement manuel, une renumérotation, le nombre de rondes, les départages ;
- avant la mise à jour de l'évènement vers une nouvelle version de _Sharly Chess_ ;
- avant la restauration d'une sauvegarde, pour que la restauration elle-même puisse être annulée.

**Quand vous le demandez**, avec le bouton **Sauvegarder maintenant**.

---

## Trouver et restaurer une sauvegarde

Les sauvegardes d'un évènement sont accessibles depuis l'icône d'horloge sur sa carte ou sa ligne dans la liste des évènements, et depuis le bouton **Sauvegardes** de sa fenêtre de configuration.

Chaque sauvegarde est présentée avec le moment où elle a été effectuée, sa raison, l'état de l'évènement — chaque tournoi, la ronde en cours, les résultats saisis — et sa taille. C'est l'état qui distingue deux sauvegardes lorsque leurs raisons ne le font pas.

Deux retours en arrière :

| **Restaurer** | Remplace l'évènement par la sauvegarde, en conservant son nom et son identifiant : les écrans, les pages de saisie et les configurations des plug-ins continuent de fonctionner. L'état remplacé est d'abord sauvegardé, l'opération peut donc être annulée. |
| **Restaurer comme nouvel évènement** | Crée un second évènement à partir de la sauvegarde et laisse le premier intact. Pour consulter un état passé plutôt que d'y revenir. |

Le nouvel évènement n'est lié à rien de ce à quoi l'original l'était : rien n'en est envoyé ni synchronisé, et ses détails indiquent qu'il a été restauré depuis une sauvegarde, afin de distinguer les deux évènements.

{: .note }
> :information_source: Un évènement dont le fichier ne peut plus être lu reste listé, et ses sauvegardes restent accessibles : en restaurer une remplace le fichier, ce qui ramène l'évènement.

---

## Évènements liés à un site

La restauration ramène ce que _Sharly Chess_ détient. Elle ne ramène pas ce que vous avez déjà envoyé ailleurs.

Pour un évènement lié à [_Sharly-Chess.com_]({% link docs/events/index.fr.md %}), les rondes et les résultats reviennent à l'état de la sauvegarde et sont transmis au site au prochain envoi. Les joueur·euses, non : c'est le site qui fait foi pour la liste des inscriptions, et la prochaine synchronisation en rapporte les inscriptions, les pointages et les données telles qu'elles y sont — y compris celles ajoutées, modifiées ou supprimées depuis la sauvegarde. Les corrections portant sur les joueur·euses sont à refaire après la restauration, ou à faire sur le site.

La restauration conserve le lien lui-même, les identifiants donnés par le site à l'évènement et à ses tournois, ainsi que les suppressions que le site n'a pas encore confirmées : rien n'est envoyé deux fois et rien n'est oublié.

---

## Où sont conservées les sauvegardes, et combien de temps

Par défaut, _Sharly Chess_ les conserve dans un dossier qui lui est propre, en dehors de votre dossier de données. C'est volontaire : le dossier de données est souvent synchronisé (OneDrive, Google Drive, Dropbox), et un client de synchronisation est libre de laisser un ancien fichier dans le nuage plutôt que sur le disque — ce qui est précisément là où une sauvegarde ne sert à rien, sur un lieu de compétition sans réseau.

Dans la section **Sauvegardes** des paramètres de _Sharly Chess_, vous pouvez :

- désactiver les sauvegardes automatiques — celles déjà effectuées sont conservées et restent restaurables ;
- choisir votre propre dossier, par exemple sur une clé USB. Les sauvegardes déjà effectuées y sont déplacées.

Les sauvegardes sont abandonnées en vieillissant, les plus anciennes d'abord, celles effectuées avant une étape de l'évènement étant conservées plus longtemps que les automatiques, et la plus récente de chaque évènement l'étant toujours. Un évènement supprimé conserve ses sauvegardes avec son archive, et les retrouve si l'archive est restaurée.

---

## Lorsqu'une sauvegarde ne peut pas être écrite

Un dossier devenu inaccessible — une clé USB retirée, un partage déconnecté, des droits modifiés — est signalé là où vous travaillez : la page de l'évènement indique qu'il n'est plus sauvegardé, avec un lien vers le panneau, et le panneau indique ce qui s'est passé.

L'évènement n'est jamais retenu par une sauvegarde qui échoue : c'est la sauvegarde qui attend, pas votre travail.
