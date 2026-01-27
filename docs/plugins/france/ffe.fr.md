---
layout: page
title: FFE
parent: Pour la France
permalink: /plugins/france/ffe
page_id: ffe-plugin
nav_order: 400
---

# Le plug-in _FFE_

{: .note }
> :information_source: Dépendances : Appariements accélérés

Le plug-in _FFE_ fournit des fonctionnalités utiles pour organiser des tournois rattachés à la _**F**édération **F**rançaise des **É**checs_.

{: .note }
> :information_source: Le plug-in _FFE_ est automatiquement activé pour les tournois de la fédération « FRA ».

L’activation de ce plugin ajoute plusieurs fonctionnalités à _Sharly Chess_ :

- Possibilité de définir le numéro d’homologation _FFE_ du tournoi et le mot de passe associé.
- Envoi automatique des résultats du tournoi sur le site de la _FFE_.
- Envoi manuel des résultats sur le site de la _FFE_.
- Import et export de fichiers PAPI.
- Recherche de joueur·euses depuis la base de données en ligne fournie par la _FFE_.
- Téléchargement et recherche locale dans la base de données joueur·euses de la _FFE_.
- Informations supplémentaires sur les joueur·euses : numéro de licence _FFE_, statut de licence, ligue d’appartenance.
- Estimation du classement des joueurs non classés selon les règles de la _FFE_.
- Les catégories d’âge sont mises à jour le 1er septembre (au lieu du 1er janvier). Le calcul reste basé sur l’âge du·de la joueur·euse au 1er janvier de l’année en cours.
- Accès facile aux actions sur le site de la _FFE_ : dépôt du règlement, gestion de la visibilité du tournoi et téléchargement des droits.
- Calculs de départages spécifiques à la _FFE_, pour assurer la compatibilité avec _Papi_ et les départages affichés sur le site fédéral.
- Critères de prix supplémentaires pour les ligues.
- Génération des formulaires de la _FFE_ nécessaires à la gestion des tournois en France.

## Affichage des tournois sur le site de la _FFE_

Les affichages des tournois dans _Sharly Chess_ et sur le site de la _FFE_ peuvent différer :
- _Sharly Chess_ enregistre les numéros des échiquiers lors de l'appariement des rondes et les appariements manuels ultérieurs, alors que le site de la _FFE_ calcule les numéros des échiquiers à chaque affichage ; de ce fait, les numéros et l'ordre des échiquiers peuvent être différents.
- _Sharly Chess_ utilise les numéros d'appariement des joueur·euses pour constituer les groupes d'accélération, alors que le site de la _FFE_ utilise des seuils Elo ; de ce fait, les numéros et l'ordre des échiquiers et les points virtuels affichés peuvent être différents.
- _Sharly Chess_ permet l'utilisation de tous les départages autorisés par la _FIDE_ (en plus de ceux de la _FFE_), mais certains de ces départages ne peuvent être affichés sur le site web de la _FFE_.

Dans tous les cas, le classement affiché par _Sharly Chess_ et celui du site web de la _FFE_ sont strictement les mêmes. 

## Foire Aux Questions

{% details Pourquoi les classements des joueur·euses ne correspondent-ils pas entre la base _FFE_ en ligne et la base _FFE_ locale ? %}

  Il y a effectivement un différentiel entre les types des classements (_FIDE_, nationaux et estimés) dans les deux bases fédérales, comme on le voit sur les images ci-dessous.

  {: .text-center}
  ![Différences de classements entre la base _FFE_ en ligne et la base _FFE_ locale](/assets/faq/faq-ffe-rankings.fr.jpg)

  Ce problème existe depuis plusieurs années (il a été signalé plusieurs fois à la _FFE_ mais n'a jamais été corrigé). Contrairement à _Papi_, _Sharly Chess_ affiche les différences constatées avant de les appliquer et c'est pour cela que les arbitres ne découvrent ce problème qu'aujourd'hui.

  Pratiquement, **il est conseillé de se référer à la base _FFE_ en ligne et n'utiliser la base _FFE_ locale qu'en secours** (lorsque la base _FFE_ n'est pas accessible ou sans connexion à internet).
{% enddetails %}

{% details Comment met-on en ligne les résultats sur le site _FFE_ ? %}

  Une fois le plug-in activé, la mise en ligne des résultats se fait dans l'onglet Mettre en ligne (cartouche de gauche) :

  {: .text-center}
  ![Onglet Mettre en ligne](/assets/faq/faq-ffe-upload-1.fr.jpg)

  {: .text-center}
  ![Mise en ligne des tournois sur le site _FFE_](/assets/faq/faq-ffe-upload-2.fr.jpg)

  La mise en ligne automatique peut-être activée pour chaque tournoi dont on a renseigné les identifiants _FFE_ :

  {: .text-center}
  ![Activation de la mise en ligne automatique pour un tournoi](/assets/faq/faq-ffe-upload-3.fr.jpg)

  {: .text-center}
  ![Mise en ligne automatiques activée](/assets/faq/faq-ffe-upload-4.fr.jpg)

  La configuration par défaut des tournois se fait au niveau de l'évènement :

  {: .text-center}
  ![Configuration de la mise en ligne automatique par défaut](/assets/faq/faq-ffe-upload-5.fr.jpg)

{% enddetails %}

<script>
  if (location.hash) {
    document.querySelector(location.hash)?.setAttribute("open", "");
  }
</script>
