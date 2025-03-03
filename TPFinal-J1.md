## Partie 2

1. Listez tous les livres disponibles

```js
db.livres.find({ disponible: true });
```

2. Trouvez les livres publiés après l'an 1950 en vu de la base de données

```js
db.livres.find({ annee_publication: { $gt: 1950 } });
```

3. Trouvez les livres d'un auteur spécifique
4. Trouvez les livres qui ont une note moyenne supérieure à 4
5. Listez tous les utilisateurs habitant dans une ville spécifique
6. Trouvez les livres qui appartiennent à un genre spécifique
7. Trouvez les livres qui ont à la fois un prix inférieur à 15€ et une note moyenne supérieure à 4
8. Trouvez les utilisateurs qui ont emprunté un livre spécifique (par titre)
