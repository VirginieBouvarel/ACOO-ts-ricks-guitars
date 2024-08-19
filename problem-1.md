# Problème 1 : Le moteur de recherche ne fonctionne pas correctement

Il devrait faire correspondre les préférences d'Erin :  `"", 0, "fender", "stratocaster", "electric", "alder", "alder"`
Avec cette guitare présente dans l'inventaire : `"V95963", 1499.95, "Fender", "Stratocaster", "electric", "alder", "alder"`
Mais il renvoie: "Désolé Erin, nous n'avons rien pour vous"

## Analyse :
Les préférences sont écrites en minuscules `"fender"`alors que certaines propriétés des guitares sont écrites avec une majuscule `"Fender"`.
La différence de casse rend les deux objets différents et le match ne s'opère pas.
Ici, la manipulation de chaînes magiques dans le code est responsable du problème.

On pourrait ajouter des `toLowercase()` partout pour régler rapidement le problème.
OU 
On pourrait régler le problème de manière plus intelligente en évitant de créer de nouveaux problèmes qui seront à régler plus tard 
-> enlever tous ces `toLowercase()` au profit d'une solution plus robuste et facile à maintenir

## Solution :
On choisit de créer des types énumérés (enums) pour supprimer la manipulation de chaînes magiques 
dans la définition des propriétés d'une guitare à chaque fois que c'est possible : 
`Builder`, `Type`, `Wood` OK
`serialNumber` et `price` sont des valeurs uniques
`model` n'est pas une série **limitée** de valeurs, il y a trop de possibilités, un enum n'est pas utilisable

## Principes OO utilisés
Création de types énumérés pour supprimer la manipulation de chaînes magiques
Encapsulation de chaînes magiques dans des définitions types
