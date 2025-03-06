# TP1 MONGODB - Indexation et optimisation des performances

## Introduction

Ce rapport présente les résultats des tests de performance réalisés dans le cadre du TP1 portant sur l'indexation et l'optimisation des performances en MongoDB. L'objectif était d'analyser l'impact des index sur les performances des requêtes, de créer et configurer différents types d'index, et de comprendre les compromis entre lecture et écriture.

## 1. Analyse des performances sans index

Avant d'ajouter des index, nous avons effectué plusieurs requêtes sur la collection `livres` et analysé leurs performances à l'aide de `explain("executionStats")`. Les résultats sont les suivants :

| Requête                          | Temps d'exécution (ms) | Documents examinés | Type d'étape |
| -------------------------------- | ---------------------- | ------------------ | ------------ |
| Recherche par titre              | 9 ms                   | 11 000             | COLLSCAN     |
| Recherche par auteur             | 6 ms                   | 11 000             | COLLSCAN     |
| Recherche par prix (10-20€)      | 18 ms                  | 11 000             | COLLSCAN     |
| Recherche par genre/langue + tri | 14 ms                  | 11 000             | COLLSCAN     |

L'ensemble des requêtes a effectué un **parcours complet** de la collection (`COLLSCAN`), rendant les requêtes lentes et inefficaces.

## 2. Indexation et impact sur les performances

Afin d'améliorer les performances, nous avons créé les index suivants :

```js
db.livres.createIndex({ titre: 1 });
db.livres.createIndex({ auteur: 1 });
db.livres.createIndex({ prix: 1 });
db.livres.createIndex({ genre: 1, langue: 1, note_moyenne: -1 });
```

Après ajout des index, nous avons répété les mêmes requêtes et obtenu les résultats suivants :

| Requête                          | Temps d'exécution (ms) | Documents examinés | Type d'étape |
| -------------------------------- | ---------------------- | ------------------ | ------------ |
| Recherche par titre              | 0 ms                   | 1                  | IXSCAN       |
| Recherche par auteur             | 0 ms                   | 1                  | IXSCAN       |
| Recherche par prix (10-20€)      | 4 ms                   | 1                  | IXSCAN       |
| Recherche par genre/langue + tri | 12 ms                  | 1                  | IXSCAN       |

L'ajout d'index a réduit considérablement le **temps d'exécution** et le **nombre de documents examinés**.

## 3. Index spécialisés

Nous avons également testé des index avancés :

- **Index texte** sur `titre` et `description` pour optimiser les recherches textuelles.

```js
db.livres.createIndex({ titre: "text", description: "text" });
```

- **Index TTL** sur une collection `sessions_utilisateurs` pour supprimer automatiquement les sessions inactives après 30 minutes.

```js
db.sessions_utilisateurs.createIndex(
  { derniere_activite: 1 },
  { expireAfterSeconds: 1800 }
);
```

- **Index partiel** pour indexer uniquement les livres disponibles.

```js
db.livres.createIndex(
  { titre: 1 },
  { partialFilterExpression: { disponible: true } }
);
```

## 4. Optimisations avancées

Nous avons exploré d'autres techniques d'optimisation :

- **Requêtes couvertes** pour éviter l'examen de documents complets.
- **Suppression des index redondants** afin d'éviter une surcharge inutile.
- **Profiling MongoDB** pour identifier les requêtes lentes.

```js
db.setProfilingLevel(1, 100);
```

## Conclusion

L'ajout d'index a permis d'améliorer les performances des requêtes. Nous avons constaté que :

- Les **index simples** suffisent pour des recherches uniques.
- Les **index composés** sont plus efficaces pour les requêtes avec plusieurs critères.
- L'utilisation d'index avancés comme **TTL**, **text** et **partiels** permet d'optimiser encore davantage les performances.

**Recommandation :**
Dans une application de production, il est important de choisir les index en fonction des requêtes les plus fréquentes et d'utiliser `explain()` pour ajuster l'indexation en fonction des performances observées.

# TP2

## Exercice 2.2

1.

```js
db.utilisateurs
  .find({
    "adresse.localisation": {
      $near: {
        $geometry: {
          type: "Point",
          coordinates: [2.3522, 48.8566],
        },
        $maxDistance: 2000,
        $minDistance: 0,
      },
    },
  })
  .limit(5);
```

2.

```js
db.bibliotheques.findOne({
  localisation: {
    $near: {
      $geometry: {
        type: "Point",
        coordinates: [2.3522, 48.8566], // Cooordonnée de l'utilisateur
      },
    },
  },
});
```

3.

```js
db.bibliotheques.aggregate([
  {
    $geoNear: {
      near: {
        type: "Point",
        coordinates: [2.37, 48.83],
      },
      distanceField: "distance",
      distanceMultiplier: 0.001,
      spherical: true,
      key: "localisation",
    },
  },
  {
    $sort: { distance: 1 },
  },
]);
```

## Exercice 2.3

1.

# TP3

## 3.1

1.

```js
db.livres.aggregate([
  {
    $group: {
      _id: "$genre",
      nb_livre: { $sum: "$stock" },
      note_moy: { $avg: "$note_moyenne" },
      prix_moy: { $avg: "$prix" },
      prix_min: { $min: "$prix" },
      prix_max: { $max: "$prix" },
    },
  },
]);
```
