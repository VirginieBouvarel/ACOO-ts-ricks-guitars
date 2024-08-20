<aside>
👉 On analyse notre conception et on cherche si on peut trouver des problèmes que des techniques OO permettraient d’améliorer.
Nous savons que le code est fait pour évoluer. Nous savons que le client voudra toujours faire des modifications.
Et c’est normal car un logiciel se construit pas itérations.
On peut donc anticiper ces changements en vérifiant si notre code pourrait les supporter sans que l’on ait à tout modifier partout.
On va donc pister les couplages forts, c’est à dire des éléments qui sont liés à d’autres inutilement.
Le code dupliqué que l’on pourrait encapsuler.
Les opérations qui ne sont pas dans les bons objets et dont les modifications impacteraient inutilement les objets concernés.
Cela rendra chaque partie de notre code plus indépendante, donc modifiable sans impact collatéral et aussi facilement réutilisable dans d’autres applications.
</aside>


# Amélioration 1 : Suppression de paramètres inutilisés et encapsulation de propriétés pour les rendre réutilisables

## Analyse du code
On voit que dans la guitare qui est passée en paramètre à la méthode `search` on a toujours le numéro de série et le prix qui restent nuls.
- d’une part, le client ne peux pas connaître et donc fournir ces informations,
- d’autre part, la méthode `search` n’en a pas besoin. 

Pour comparer les caractéristiques de la guitare recherchée avec les guitares existantes de l’inventaire, 
la méthode `search` n’a besoin que d’une liste de caractéristiques justement, pas d’une guitare complète.

## Amélioration possible
On pourrait créer un objet qui contiendrait juste les infos nécessaires pour la recherche 
et qui serait passé en paramètres à la méthode search → `GuitarSpec`

Pour éviter d’avoir suite à cela, deux endroits dans l’application où les caractéristiques d’une guitare seront définis 
(`Guitar` et `GuitarSpec`)
On pourrait réutiliser ce nouvel objet comme partie constituante d’une guitare 
rassemblant toutes les caractéristiques dans une seule propriété `spec`.

## Technique OO utilisée
On va donc **encapsuler les caractéristiques d’une guitare** dans un objet à part :
- pour l’utiliser à deux endroits sans avoir de duplication de code
- et éviter l’utilisation de paramètres inutiles dans la méthode search.

