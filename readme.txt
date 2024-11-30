Bonjour à tous et bienvenue!

Je m'appel Georges, j'ai commencer ma reconversion il y a maintenant 3 ans. Je suis papa de 2 garcon, un de 9 ans et un tout petit de 9 mois! La naissance du dernier n'a pas été facile non seulement parceque c'est pas le meme tempérament que le premier, mais en plus que je suis à 400kms de la maison et j'essaie de rester focus sur mon objectif professionel! lorsque j'étais derriere le finisseur à régler la planimetrie des enrobés, je me posais la questions de si j'allais pouvoir continuer a faire ca toute ma vie avec l'unique motivation de faire de beau revetement de sol... hmmm non pas sur! Au tout début moi je suis passionné de bidoulliage de partage et surtout d'ordinateur! Bref

Pour cette alternance j'ai été embauché chez Malakoff Humanis pour une durée de 2 ans, qui sont-ils? c'est un groupe de protection sociale paritaire et mutualiste à but non lucratif. 
Le groupe propose plusieur gamme de produits et services de protection sociale aux entreprises et aux particuliers, notament: mutuelle santé, prévoyance, épargne, retraite

C'est l'un des leaders de la protection sociale en France, avec plus de 5,5 millions de clients, 70 000 entreprises et 9000 collaborateurs.

J'ai été accueillit dans l'équipe CONTRAT GESTION INDIVIDUELLE ET SERVICE par Éric la VEILLE DE NOEL!, cette équipe ce concentre sur tous les sujet abordant les contrats des particuliers, leur identité, leur bénéficaires, les radiation, les échanges avec la sécu et pleins d'autre de l'application Pléiade. c'est de la gestion directe qui fait partie du pole MH TECH! 


Today, I’ll introduce the DataWiper project, a tool designed to ensure HM complies with GDPR requirements for secure data deletion. GDPR mandates that organizations must safely and efficiently remove outdated or sensitive data, which can be challenging given the complexity of HM’s databases.

DataWiper addresses this by offering a generic and automated solution capable of purging data from any database within HM. It respects table hierarchies, ensures dependencies are handled correctly, and uses advanced filtering to precisely target the data to delete.

This tool has streamlined HM’s compliance process, reducing risks, saving time, and ensuring all data purging operations are both efficient and secure, making it an essential part of HM's data governance strategy.


À présent, je vais vous parler de mes projets, principalement du DataWiper, mais afin de valider au maximum de compétences demandées, je vais évoquer succintivement quelques points des autres projets auquel j'ai pu participer, comme Pléiade, et le SQLTheque.

Commencons par Pléiade.
Pléiade est une solution propriétaire du groupe Malakoff Humanis pour la gestion des contrats.
C'est 1500 utilisateurs simultané qui interagissent avec l'application pour la gestion des contrats.
C'est 35 serveurs de productions virtualisés et plus de 5 millions de lignes de code.

** LECTURE DE LA PRESENTATION **

J'ai été amené à rediger des TNRA pour la partie PRODUIT. Des tests de non régression automatisé, ils garantissent la stabilité des fonctionnalités existantes en detectant rapidement les éventuelles régressions provoquées par de nouvelles modifications. pour cela il faut code 2 élément principale, une "X_Page" et une "X_Test".
La "Page" regroupe les déclarations nécessaires à l'éxécution des tests, notamement les composants et éléments qui seront ciblés, qui devra hérité de "PageBase" qui est une classe abstraite représentant un test et qui va aider dans le déroulement d'un test avec certaine méthodes.
La partie "Test" contient les étapes et instructions détaillées des scénarios de test à éxécuter, un "TestCategory" devra etre renseigner pour facilité le rangement sur Azure DevOps.
Nous pouvons récupérer des parametres dynamique via Azure DevOps.


Au tour de SQLTheque à l'origine, il y a parfois des solicitation de la MOA pour des données en BDD de la part des métiers ou autres, hors la MOA n'étant pas habilité a faire ces requetes doivent passer par la MOE, ou ce dépatouiller pour trouver les scripts qui donnerons les résultats demandées, ce qui crée une dépendance de la MOE pour certains taches réqurentes.
La solution à été de metre en place une application qui centraliserai toutes ses requetes avec des parametres et des environnement d'éxecutions.
Étant la nature du projet, cette application restera interne et n'aura donc pas autant de privilège que le datawiper.
Une maquette a quand meme été élaborer, dans un but d'organisation du contenu, nous l'avons faites sur Excel et cela tiens plutot bien la route pour une application de ce style.
Un autre sujet que je souhaiterai abordé c'est la création de base de donnée, comme je vous 







La méthode agile, offre quant à elle plus de souplesse dans le cycle de vie du projet. En effet, ce type d’approche repose sur la mise en place d’un processus itératif et incrémental. Ainsi, contrairement à la méthode de cycle en V, nous n’allons pas programmer, dans les moindres détails, la totalité du projet avant de le développer. Ici, à travers des courts objectifs, l’équipe projet va déployer le produit/service petit à petit et en prenant en considération les besoins / exigences du client à chaque étape du cycle de vie.

trois-tiers
presentation layer (Webapp, le MVC coté client)  -> buissness logic (Models et Domaine) -> data access layer (Persistance et Entite)


Les réalisations:

la base de donnée relationnelle , avec des optimisations pour garantir performance et fiabilité
Dans ce projet, j'ai travaillé sur plusieurs aspects clés, allant de la conception à la mise en production, en suivant une architecture modulaire et maintenable. 

Ces réalisations démontrent une maîtrise des différentes étapes du cycle de développement logiciel, de la conception technique à l'exploitation. Les sections suivantes détaillent chaque aspect.
