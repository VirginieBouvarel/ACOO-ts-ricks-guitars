# Modification Client 2 
Ajouter le nombre de cordes dans les caractéristiques d'une guitare et dans les critères possibles de recherche.

## Problème soulevé par cette mofification
Ajouter une nouvelle propriété implique des modifications dans la classe `GuitarSpec` :
 * ajouter la nouvelle propriété
 * ajouter un getter pour la propriété
Mais aussi des modifications dans la classe `Guitar`:
 * ajouter aussi la nouvelle propriété dans le constructeur de la classe qui construit un objet `GuitarSpec`pour l'utiliser
Et dans la classe `Inventory` :
 * ajouter la nouvelle propriété en paramètre de la méthode `addGuitar`
 * ajouter un nouveau critère de recherche pour la nouvelle propriété dans la méthode `search`

5 modifications éparpillées sur 3 classes pour l'ajout d'une simple propriété = notre application est mal conçue ! 

## Analyse de ce qui ne va pas
On ne devrait pas avoir à modifier `Guitar` et `Inventory` pour ajouter une propriété dans `GuitarSpec`.
Question : Que font des éléments appartenant à `GuitarSpec` dans `Guitar` et `Inventory` ?

`Guitar` ne devrait pas recevoir toutes les specs d'une guitare pour construire elle-même un objet `GuitarSpec`.
Elle devrait recevoir cet objet, déjà construit, en paramètre, et seulement l'utiliser pour définir sa propriété `spec`.

`Inventory` ne devrait pas s'occuper de comparer deux liste de specs de guitares.
En matière de specs de guitares c'est `GuitarSpec` qui détient les informations nécessaires, 
c'est donc `GuitarSpec` qui doit décider si deux listes de specs sont semblables ou non.
`Inventory` devrait juste recevoir le résultat de cette comparaison pour l'utiliser dans sa recherche.

## Amélioration de la conception
On va donc modifier notre conception pour que l'ajout de cette nouvelle propriété n'impacte QUE la classe `GuitarSpec`.
On va :
- ENCAPSULER tous les paramètres du constructeur de `Guitar` correspondant à des specs dans une seule propriété `spec` 
qui recevra un objet déjà construit de l'extérieur
- DELEGUER à la classe `GuitarSpec` l'opération de comparaison des specs de deux guitares dont `Inventory` ne récupèrera que le résultat

Et pour finir, on pourra ajouter notre nouvelle propriété, uniquement dans `GuitarSpec`.

