# Modification Client 4 

Ajouter encore de nouveaux instruments dans l'inventaire.
Des Banjos, des Dobros, des Basses et des Violons.

# I. MODIFICATION

## Analyse de la situation

Comme on vient de le faire pour ajouter une mandoline dans l'inventaire,
l'ajout de 4 nouveaux instruments entraînerait beaucoup de modifications très répétitives :
* Ajouter 4 classes : Banjo, Dobro, Basse et Violon étendant `Instrument` (qui resteront des classes vides comme `Guitar` et `Mandolin` !!)
* Ajouter 4 classes :  BanjoSpec, DobroSpec, BasseSpec et ViolonSpec étendant `InstrumentSpec`
* Ajouter 4 méthodes searchXXX dédiées dans `Inventory` 
* Ajouter 4 traitements spécifiques pour chaque nouvel instrument dans la méthode `addInstrument` de `Inventory`
2 classes, une méthode et un traitement spécifique par nouvel instrument ajouté !!! -> la conception n'est pas du tout assez souple pour accueillir ces modifications !!!

Il va d'abord falloir revoir la conception, pour pouvoir ensuite ajouter facilement autant de nouveaux instruments que souhaité par le client.


# II. AMELIORATION

## Analyse de la situation

* Actuellement, on doit **créer une nouvelle sous-classe** de `Instrument` pour représenter chaque nouvel instrument afin d'encapsuler ce qui le différencie des autres
	-> Tous les instruments ont un numéro de série, un prix et une liste de propriété, 
	-> ce qui différencie un instrument est le contenu de sa liste de propriétés mais avoir une liste de propriétés est un point commun à tous les instruments. 
	-> La liste de propriétés est déjà encapsulée dans les sous-classes de `InstrumentSpec` dédiées à chaque instrument.
	-> On pourrait donc passer directement une classe `InstrumentSpec` à la propriété spec du constructeur de `Instrument` si ces deux classes étaient instanciables, c'est-à-dire concrètes :
	-> pas besoin d'un objet `Guitar` si on peut avoir un objet `Instrument` avec des spec de guitare.
	-> Cela permettrait de supprimer toutes les sous-classes de `Instrument` devenues inutiles

* Pour clarifier leur utilisation on pourrait ajouter une propriété type dans chaque `Instrument` et un type `InstrumentType` pour encapsuler la définition des types possibles	

* Actuellement, on doit **ajouter un traitement particulier dans addInstrument** en fonction du type d'instrument à ajouter 
	-> Mais si on rend la classe `Instrument` concrète on pourra l'utiliser à la place de ses implémentations
	-> On aura donc plus besoin de savoir de quel type d'instrument il s'agit pour l'ajouter à l'inventaire, puisqu'on ajoutera simplement "un" `Instrument` avec ses caractéristiques propres

* Actuellement on doit **créer une nouvelle sous-classe de InstrumentSpec** pour chaque nouvel instrument afin d'encapsuler sa liste de propriétés personnelle.
	-> On pourrait utiliser directement `InstrumentSpec` (si on la rend instanciable, c'est-à-dire concrète) mais en passant une liste de propriétés différente à chaque fois à son constructeur :
	-> pas besoin d'une classe `MandolinSpec` si on peut avoir une classe `InstrumentSpec` avec la liste de propriétés d'une mandoline.
	-> Cela permettrait de supprimer toutes les sous-classes existantes de `InstrumentSpec` devenues inutiles 
	-> car elles ne faisaient que stocker des listes de propriétés (et pas encapsuler un comportement ou une fonctionnalité).
	-> La structure de données Map se prète beaucoup mieux à cet objectif d'encapsuler une liste de propriétés variables
	-> Le dynamisme permit évite d'avoir à créer de nombreux objets
	
* Actuellement, on doit **créer une méthode search** pour chaque sous-classe d'`InstrumentSpec` 
	-> Si on rend `InstrumentSpec` concrète on pourra l'utiliser directement à la place de ses implémentations 
	-> et ainsi ne plus avoir besoin que d'une seule méthode `search` qui fonctionnerait avec toutes les specs possibles

## Amélioration de la conception

- Rendre `InstrumentSpec` concrète et modifier la méthode `search` pour la simplifier
- Rendre `Instrument` concrète et modifier `addInstrument` pour la simplifier
- Créer un type `InstrumentType` et supprimer toutes les sous-classes de `Instrument`
- Modifier `InstrumentSpec` pour qu'elle n'ait plus qu'une seule propriété `spec` de type Map, supprimer toutes les sous-classes de `InstrumentSpec` et modifier `FindGuitarTester` pour qu'il continue de fonctionner sans les classes supprimées

## Tests des nouvelles fonctionnalités

- Ajouter de nouveaux instruments dans l'inventaire pour tester la nouvelle version de l'application
- Ajouter une nouvelle recherche dans `FindGuitarTester` sans spécifier de type d'instrument
- Modifier l'output de la méthode `search` pour présenter les données de manière adaptée aux modifications


# III. RETOUR A LA MODIFICATION

Après cette amélioration de la conception de l’application, on peut se remettre sur la modification demandée par le client.

## Analyse de la situation

Il n'y a plus rien à faire !!!
Aucune modification du code n'est nécessaire pour que l'inventaire puisse accueillir de nouveaux instruments.

Pour le vérifier on modifie l’inventaire en ajoutant une mandoline et un banjo.
Puis on lance une nouvelle recherche sans préciser le type d’instrument recherché, 
mais en indiquant seulement que l’on cherche un instrument en érable fabriqué par Gibson.
La recherche nous renvoie une guitare, une mandoline et un banjo  
→  Tous les instruments de l’inventaire correspondant aux critères de recherche !

L'application est devenue tellement souple qu'on peut d'emblée ajouter n'importe quel instrument possédant n'importe quelle liste de propriétés !!!
Notre conception est souple et notre logiciel bien conçu !