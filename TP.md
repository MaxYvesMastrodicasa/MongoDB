## 1. Exercice : Création d’un jeu de données

### 1.1 Création d'une collection "ecommerce_produits"

1. Dans MongoDB Compass, créer la collection **ecommerce_produits**.

### 1.2 Insertion de produits

1. Structure des documents :

   - Nom, description, prix, stock
   - Catégorie, sous-catégorie
   - Caractéristiques techniques (objet imbriqué)
   - Commentaires/Avis (tableau d'objets)
   - Tags (tableau simple)

2. Exemple de données JSON inséré :

   ```json
   [
     {
       "nom": "Ordinateur Portable",
       "description": "PC performant",
       "prix": 1200,
       "stock": 15,
       "categorie": "Informatique",
       "sous_categorie": "Ordinateurs",
       "caracteristiques_techniques": {
         "processeur": "Intel Core i7",
         "ram": "16 Go"
       },
       "commentaires": [
         { "auteur": "Alice", "note": 5, "commentaire": "Super rapide !" }
       ],
       "tags": ["ordinateur", "gaming"]
     }
   ]
   ```

3. Importation des données via Compass.

### 2 Requetes de lecture

1.  Récupérer tous les produits d'une catégorie.
    - **Produits de la catégorie "Informatique"** :
      ```json
      db.ecommerce_produits.find({ "categorie": "Informatique" })
      ```
2.  Trouver tous les produits dont le prix est entre 50€ et 200€.

    - **Prix entre 50€ et 200€** :
      ```json
      db.ecommerce_produits.find({
      $and: [
      {"prix": {"$gte": 50}},
      {"prix": {"$lte": 200}}
      ]
      })
      ```

3.  Lister les produits en stock (>0).

    - **Produits en stock > 0** :

    ```json
    db.ecommerce_produits.find({ "stock": { "$gt": 0 } })
    ```

4.  Trouver les produits avec au moins 3 avis.
    - **commentaires >= 3**
    ```json
    db.ecommerce_produits.find({
    "$expr": {
    "$gte": [{ "$size": "$commentaires" }, 3]}
    })
    ```

### 3 Mise à jour

1. Augmenter le prix de tous les produits d'une catégorie.
   - **Augmenté de 5% les articles audio**
   ```js
   db.ecommerce_produits.updateMany(
     { categorie: "Audio" },
     { $mul: { prix: 1.05 } }
   );
   ```
2. Ajouter un champ "promotion" à certains
   produits. - **Ajout du champs promotions**

   ```js
   db.ecommerce_produits.updateMany(
     { categorie: "Accessoires" },
     { $set: { promotions: true } }
   );
   ```

3. Ajouter un nouveau tag à tous les produits
   d’une catégorie. - **Augmenté de 5% les articles audio**

   ```js
   db.ecommerce_produits.updateMany(
     { categorie: "Audio" },
     { $mul: { prix: 1.05 } }
   );
   ```

4. Mettre à jour le stock après une "vente". - **Mise à jour du stock**
   ```js
   db.ecommerce_produits.updateMany(
     { _id: ObjectId("67c58d6a9dc140db4c61e1fc") },
     { $inc: { stock: -1 } }
   );
   ```

### 4 Requetes complexe

1. Trouver les produits disponibles avec tag1 ET tag2
   - **Trouvé les articles qui ont les tags "gaming" et "RGB"**
   ```js
   db.ecommerce_produits.find({
     $and: [{ tags: "gaming" }, { tags: "RGB" }],
   });
   ```
2. Lister les produits premium avec un stock faible (<5)
   produits.

   - **Recherche des produits premium avec un stock inférieur à 5**

   ```js
   db.ecommerce_produits.find({
     $and: [{ premium: true }, { stock: { $lt: 5 } }],
   });
   ```

3. Rechercher les produits ayant reçu au moins un avis 5 étoiles.

   - **Recherche un produit qui contient au moins un commentaires avec une note de 5**

   ```js
   db.ecommerce_produits.find({
     commentaires: {
       $elemMatch: { note: { $eq: 5 } },
     },
   });
   ```

4. Trouver les produits d’une catégorie, triés par prix décroissant, limités aux 5 premiers
   - **Mise à jour du stock**
   ```js
   db.ecommerce_produits
     .find({ categorie: "Informatique" })
     .limit(5)
     .sort({ prix: -1 });
   ```

---
