---
layout: page
title: Synchronisation
parent: Sharly-Chess.com
permalink: /integration/synchronisation
page_id: integration-synchronisation
nav_order: 200
---

# _Sharly-Chess.com_ — Synchronisation

Un événement créé sur _Sharly-Chess.com_ est importé dans _Sharly Chess_, qui maintient ensuite les deux à l’unisson : les inscriptions faites en ligne arrivent dans _Sharly Chess_, les modifications faites dans _Sharly Chess_ repartent vers le site, et les appariements et résultats y sont publiés au fil des tournois.

---

## Connecter un événement

Dans la liste des événements, **Importer depuis Sharly-Chess.com** ouvre le site dans votre navigateur. Connectez-vous, choisissez l’événement et autorisez _Sharly Chess_ : l’événement est créé avec ses tournois et leurs inscriptions.

Tout ce qui concerne le lien se trouve ensuite dans le menu **Transfert de données** de l’événement, sous **Sharly-Chess.com**.

---

## Ce qui est synchronisé

**Les joueur·euses**, dans les deux sens : inscriptions, données personnelles et pointages. Un·e joueur·euse inscrit·e en ligne apparaît dans _Sharly Chess_ ; un·e joueur·euse ajouté·e, modifié·e ou supprimé·e dans _Sharly Chess_ l’est aussi sur le site.

**Les tournois**, dans les deux sens : nom, dates, nombre de rondes, cadence et les autres réglages que le site connaît.

**Les appariements et résultats**, de _Sharly Chess_ vers le site seulement, sous **Mise en ligne des résultats**.

**Synchroniser les joueur·euses** synchronise immédiatement. Avec la **Synchronisation automatique**, _Sharly Chess_ synchronise toutes les 3 minutes, et toutes les minutes pendant un pointage ouvert.

Quand la même donnée d’un·e joueur·euse ou d’un tournoi a été modifiée des deux côtés depuis la dernière synchronisation, _Sharly Chess_ ne peut pas choisir entre les deux valeurs : **Résoudre les conflits de joueur·euses** ou **Résoudre les conflits de tournois** les présente côte à côte pour que vous en choisissiez une. Tout le reste continue de se synchroniser en attendant.

**Résoudre les doublons de joueur·euses** liste les joueur·euses qui existent d’un côté et n’ont pas pu être créé·es de l’autre parce qu’il·elles y étaient déjà, pour que l’un·e des deux soit supprimé·e.

---

## Plusieurs ordinateurs sur un même événement

Plusieurs ordinateurs peuvent être connectés au même événement en même temps : les organisateur·rices qui gèrent les inscriptions, les arbitres qui dirigent chacun·e leurs tournois. Un ordinateur peut contenir tous les tournois de l’événement, ou seulement certains.

**Connectez chaque ordinateur séparément**, avec **Importer depuis Sharly-Chess.com**, plutôt que de copier le fichier de l’événement de l’un à l’autre (voir [copier un événement](#copier-un-événement-sur-un-autre-ordinateur) plus bas). Un ordinateur qui ne dirige que certains tournois peut supprimer les autres une fois l’événement importé : leurs joueur·euses restent inscrit·es sur le site. **Importer un tournoi Sharly-Chess.com** permet d’en récupérer un plus tard.

Le site est le point de rencontre : chaque ordinateur envoie ce qu’il a modifié et reçoit ce que les autres ont modifié.

- **Chaque ordinateur n’envoie que les données qu’il a modifiées.** Une personne qui corrige le club d’un·e joueur·euse pendant qu’une autre pointe le·la même joueur·euse n’annule aucune des deux modifications.
- **La même donnée modifiée sur deux ordinateurs** avant leur synchronisation est un conflit, résolu sur l’ordinateur qui synchronise en second.
- **Un seul ordinateur apparie un tournoi et en met les résultats en ligne.** Les résultats mis en ligne depuis deux ordinateurs pour le même tournoi se remplacent l’un l’autre sur le site.

### Un·e joueur·euse retiré·e en ligne après avoir joué

Une inscription peut être annulée ou supprimée sur le site — par le·la joueur·euse, ou par un·e organisateur·rice sur un autre ordinateur — alors que le·la joueur·euse a déjà joué. L’ordinateur qui détient les appariements ne le·la retire pas de lui-même : le·la joueur·euse reste dans le tournoi tel·le quel·le, et **Joueur·euses retiré·es sur Sharly-Chess.com** le·la liste dans la fenêtre **Sharly-Chess.com**. Le menu **Transfert de données** affiche un badge d’erreur tant que chaque cas n’est pas traité :

- **Forfait définitif** déclare le·la joueur·euse forfait pour chaque ronde où rien n’est encore enregistré pour lui·elle ; les rondes déjà jouées, et les byes qu’il·elle avait demandés, sont conservés.
- **Conserver** laisse le·la joueur·euse dans le tournoi et l’inscrit de nouveau sur le site à la prochaine synchronisation.

Vérifiez cette liste avant d’apparier la ronde suivante.

### Un·e joueur·euse déplacé·e dans un autre tournoi

Quand un·e joueur·euse est déplacé·e, en ligne ou sur un autre ordinateur, dans un tournoi que cet ordinateur ne contient pas, il·elle quitte le tournoi de cet ordinateur. Un·e joueur·euse qui a déjà joué reste où il·elle est, et est replacé·e dans son tournoi sur le site.

### Les modifications refusées par le site

Si le site refuse une modification — une valeur qu’il n’accepte pas, ou une erreur passagère de son côté — la dernière synchronisation indique un échec, le menu **Transfert de données** affiche un badge d’erreur, et la modification est renvoyée à la prochaine synchronisation. Les logs indiquent quelle modification a été refusée et pourquoi.

---

## Copier un événement sur un autre ordinateur

La connexion à _Sharly-Chess.com_ appartient à l’ordinateur qui l’a établie. Quand le fichier d’un événement est copié sur un autre ordinateur, la copie n’utilise pas cette connexion : sa première synchronisation s’arrête sur _L’autorisation a échoué ou expiré_, et l’ordinateur d’origine continue comme avant.

Le bouton **Autorisation** de la fenêtre **Sharly-Chess.com** connecte la copie séparément, après quoi les deux ordinateurs se synchronisent. Si l’ordinateur d’origine n’en a plus besoin, le plus simple est de ne plus l’utiliser.
