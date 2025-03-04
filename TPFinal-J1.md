## Partie 2

1. Listez tous les livres disponibles

```js
db.livres.find({ disponible: true });
```

2. Trouvez les livres publiés après l'an 2000

Dans notre exemple nous fixerons cette date à 1950 pour avoir un résultat.

```js
db.livres.find({ annee_publication: { $gt: 1950 } });
```

3. Trouvez les livres d'un auteur spécifique

```js
db.livres.find({ auteur: "George Orwell" });
```

4. Trouvez les livres qui ont une note moyenne supérieure à 4

```js
db.livres.find({ note_moyenne: { $gt: 4 } });
```

5. Listez tous les utilisateurs habitant dans une ville spécifique

```js
db.utilisateurs.find({ "adresse.ville": "Bordeaux" });
```

6. Trouvez les livres qui appartiennent à un genre spécifique

```js
db.livres.find({ genre: { $all: ["Aventure"] } });
```

7. Trouvez les livres qui ont à la fois un prix inférieur à 15€ et une note moyenne supérieure à 4

```js
db.livres.find({ prix: { $lt: 15 }, note_moyenne: { $gt: 4 } });
```

8. Trouvez les utilisateurs qui ont emprunté un livre spécifique (par titre)

```js
db.utilisateurs.find({ livres_empruntes: { $elemMatch: { titre: "Dune" } } });
```

## Partie 3

1. Mettez à jour le titre d'un livre spécifique

```js
db.livres.updateOne(
  { titre: "Harry Potter à l'école des sorciers" },
  { $set: { titre: "Harry Potter à l'école des sorciers - Tome 1" } }
);
```

2. Ajoutez un champ `stock` à tous les livres avec une valeur par défaut de 5

```js
db.livres.updateMany({}, { $set: { stock: 5 } });
```

3. Marquez un livre comme indisponible (disponible = false)

```js
db.livres.updateOne(
  { _id: ObjectId("67c5d0bd46a12c9406c7356b") },
  { $set: { disponible: false } }
);
```

4. Ajoutez un nouvel emprunt dans la liste `livres_empruntes` d'un utilisateur

```js
db.utilisateurs.updateOne(
  { _id: ObjectId("67c5d1c3c453148353b73996") },
  {
    $push: {
      livres_empruntes: {
        livre_id: ObjectId("67c5d0bd46a12c9406c7356b"),
        titre: "1984",
        date_emprunt: new Date(2025 - 03 - 04),
        date_retour_prevue: new Date(2025 - 04 - 15),
      },
    },
  }
);
```

5. Changez l'adresse d'un utilisateur

```js
db.utilisateurs.updateOne(
  { _id: ObjectId("67c5d1c3c453148353b73997") },
  {
    $set: {
      adresse: {
        rue: "97 Rue des Romans",
        ville: "Marseille",
        code_postal: "13006",
      },
    },
  }
);
```

6. Ajoutez un nouveau tag à un utilisateur

```js
db.utilisateurs.updateOne(
  { _id: ObjectId("67c5d1c3c453148353b73997") },
  { $push: { tags: "fiction" } }
);
```

7. Mettez à jour la note moyenne d'un livre

```js
db.livres.updateOne(
  { _id: ObjectId("67c5d0bd46a12c9406c7356f") },
  { $set: { note_moyenne: 4.9 } }
);
```

## Partie 4

1. Supprimez un livre spécifique par son titre

```js
db.livres.deleteOne({ titre: "L'Héritier" });
```

2. Supprimez tous les livres d'un auteur spécifique

```js
db.livres.deleteMany({ auteur: "Frank Herbert" });
```

3. Supprimez un utilisateur par son email

```js
db.utilisateurs.deleteOne({ email: "thomas.lemoine@example.com" });
```

## Partie 5

1. Listez tous les livres triés par note moyenne (ordre décroissant)

```js
db.livres.find().sort({ note_moyenne: -1 });
```

2. Trouvez les 3 livres les plus anciens

```js
db.livres.find().sort({ annee_publication: 1 }).limit(3);
```

3. Comptez le nombre de livres par auteur

```js
db.livres.find({ auteur: "J.K. Rowling" }).count();
```

4. Affichez uniquement le titre, l'auteur et la note moyenne des livres (sans l'id)

```js
db.livres.find({}, { _id: 0, titre: 1, auteur: 1, note_moyenne: 1 });
```

5. Trouvez les utilisateurs qui ont emprunté plus d'un livre

```js
db.utilisateurs.find({ $expr: { $gt: [{ $size: "$livres_empruntes" }, 1] } });
```

6. Recherchez les livres dont le titre contient un mot spécifique (utilisez $regex)
   **On note que le mot rechercher peut être partiel ou complet**

```js
db.livres.find({ titre: { $regex: "des" } });
```

7. Trouvez les livres dont le prix est entre 10€ et 20€

```js
db.livres.find({
  prix: { $gte: 10, $lte: 20 },
});
```

## Partie 6

### 6.1 Modèle embarqué vs référence

1. Créez une nouvelle collection `emprunts` qui utilise des références vers les livres et les utilisateurs
2. Insérez au moins 3 emprunts dans cette collection
3. Comparez cette approche avec celle où les emprunts sont directement intégrés dans le document utilisateur

Modèle pour la collection `emprunts` :

```js
{
  utilisateur_id: ObjectId("..."),
  livre_id: ObjectId("..."),
  date_emprunt: new Date("2023-02-20"),
  date_retour_prevue: new Date("2023-03-20"),
  date_retour_effective: null,
  statut: "en cours" // en cours, retourné, en retard
}
```

### 6.2 Réflexion sur la modélisation

Répondez aux questions suivantes :

1. Quels sont les avantages et inconvénients de chaque approche ?

#### Tableau Comparatif

| Critère                    | Collection `emprunts` séparée                          | Emprunts intégrés dans `utilisateurs`                     |
| -------------------------- | ------------------------------------------------------ | --------------------------------------------------------- |
| **Facilité de requêtage**  | Facile pour chercher un emprunt spécifique             | Facile pour récupérer tous les emprunts d'un utilisateur  |
| **Mises à jour**           | Faciles et indépendantes                               | Complexes (besoin de `$set` et `$elemMatch`)              |
| **Scalabilité**            | Meilleure gestion des grands volumes                   | Peut devenir trop volumineux                              |
| **Suppression**            | Nécessite de supprimer les emprunts séparément         | Suppression automatique avec l’utilisateur                |
| **Performance en lecture** | Requiert `$lookup` pour joindre utilisateurs et livres | Plus rapide pour récupérer un utilisateur et ses emprunts |

2. Quelle approche privilégieriez-vous pour une application réelle et pourquoi ?

L'utilisation de la collection emprunts sera privilégier dans le cas d'une application qui gère beaucoup d’emprunts (bibliothèque réelle avec milliers d’emprunts). Une meilleure scalabilité et des requêtes plus efficaces semble donc la meilleurs approche.

3. Comment modéliseriez-vous les cas où un même livre peut exister en plusieurs exemplaires ?

Il est possible d'utiliser la même approche qu'avec les emprunts, et de renseigné tout les exemplaire avec l'id du livre dans une nouvelle collection. Cela apporterai les même avantages : une meilleur scalabilité, et des mise à jour plus faciles.
