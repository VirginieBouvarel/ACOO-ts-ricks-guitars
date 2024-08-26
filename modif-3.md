## Modification Client 3
Ajouter des Mandolines dans l'inventaire.

## Analyse de la situation
On peut commencer par voir si les guitares et les mandolines ont des points communs.
Cela nous permettrait de créer une super-classe Instrument qui contiendrait déjà la plupart des éléments d'une mandoline.
Ensuite il suffirait de créer Mandoline et de modifier Guitare qui seraient alors des sous-classes d'Instrument.
Et comme le système n'a pas l'utilité à ce stade d'avoir un objet Instrument concret (utilisable concrètement dans l'app),
on pourra rendre la classe Instrument abstraite.

Pour les quelques caracteristiques différentes entre une guitare et une mandoline, 
on pourrait créer une classe constituante `MandolinSpec`, comme on a déjà une classe `GuitarSpec`
afin d'encapsuler ces variations.
Et comme les deux classes auraient un contenu presque identique à part une ou deux propriétés, 
on pourrait ici aussi créer une super-classe abstraite `InstrumentSpec` que les deux autres étendraient.
De cette manière les parties conformes seraient regroupées dans la super-classe et les parties variables encapsulées dans les sous-classes.

Dans chaque sous-classe `MandolinSpec` et `GuitarSpec` on devra surcharger la définition de la méthode `matches`. 
On appellera la méthode du même nom de la super-classe pour faire la vérification sur les caracteristiques communes
et on ajoutera une implémentation dédiée pour traiter les caracteristiques différentielles.

On pourra du coup remplacer dans le code tous les appels aux implémentations `Guitar` et `GuitarSpec` existantes
par des appels à leurs généralisations respectives `Instrument` et `InstrumentSpec`.
De cette manière les conceptions à venir seront plus faciles et le logiciel plus souple.

Il faudra penser à créer un nouveau Type pour encapsuler la définition de la propriété styles des mandolines.

Pour finir, il faudra mettre à jour les classes `Inventory` et `FindGuitarTest`pour qu'elles continuent de fonctionner.


## Amélioration de la conception
On nettoye la liste des propriétés de chaque classe dans le diagramme UML, de tous les attributs désormais obtenus par relation

On crée une super-classe abstraite `Instrument`
On crée une classe `Mandoline` étendant `Instrument`
On modifie la classe `Guitare` pour qu'elle étende aussi `Instrument`

On crée une super-classe abstraite `InstrumentSpec`
On crée une classe `MandolinSpec`étendant `InstrumentSpec`
On modifie `GuitarSpec` pour qu'elle étende `InstrumentSpec`

On crée un nouveau Type énuméré : Styles 

On modifie tout le code appelant Guitare et `GuitarSpec` pour qu'il appelle désormais `Instrument` et `InstrumentSpec`

## Output attendu
Le fichier `FindGuitarTester` cherche toujours la même guitare, 
L’ajout possible de mandolines dans l’inventaire ne modifie pas la recherche d’Erin

## Problèmes restant
Puisque la classe `Instrument` est abstraite, on ne peut pas y faire directement appel dans la classe `Inventory`.
On se retrouve à devoir interroger le type de caracteristiques reçues pour créer l'objet `Instrument` correspondant.
Il faudra peut-être prévoir de rendre cette super-classe concrète pour pouvoir l'utiliser directement ici
et éviter d'avoir à faire du branching pour gérer tous les cas possibles, 
surtout si le client nous demande plus tard encore de nouveaux instruments !

Puisque la classe `InstrumentSpec` est abstraite, on ne peut pas y faire directement appel dans `Inventory`.
On se retrouve donc avec deux méthodes `search`, une pour chaque implémentation concrète de `InstrumentSpec`.
Il faudra peut-être prévoir de rendre cette super-classe concrète pour pouvoir l'utiliser directement ici 
et éviter d'avoir à créer une nouvelle méthode `search`pour chaque nouvel instrument à ajouter !

`Guitar` et `Mandolin` sont vides car leurs spécificités ont été encapsulées dans des classes dédiées 
(`MandolinSpec`et `GuitarSpec`) 
-> c'est OK dans ce temps de construction par itération de l'app, mais on ne pourra pas laisser cela ainsi

