# TP SIMPLIFIÉ MONGODB - JOUR 1 : GESTION D'UNE BIBLIOTHÈQUE

**Formation MongoDB UA3-14 ISITECH**


## Présentation du projet

Dans ce TP, vous allez créer et manipuler une base de données MongoDB pour gérer une petite bibliothèque en ligne. Vous pratiquerez les opérations CRUD de base et les requêtes simples vues lors du premier jour de formation.

## Données

Vous avez deux options pour les données :

### Option 1 : Générer vos propres données

Créez vos propres données de livres et d'utilisateurs en vous inspirant des modèles fournis dans les instructions.

### Option 2 : Utiliser le dataset Amazon Books Reviews

Téléchargez le dataset "Books and Book Reviews" de Kaggle :
- Lien : [https://www.kaggle.com/datasets/mohamedbakhet/amazon-books-reviews](https://www.kaggle.com/datasets/mohamedbakhet/amazon-books-reviews)
- Pour ce TP, utilisez uniquement le fichier `books_data.csv` et limitez-vous aux 50 premiers enregistrements

Si vous choisissez cette option, vous devrez :
1. Télécharger le fichier CSV
2. N'utiliser que les 50 premières lignes pour faciliter la manipulation
3. L'importer dans MongoDB via Compass ou mongoimport
4. Créer manuellement la collection d'utilisateurs selon le modèle fourni

## Partie 1 : Configuration et création de la base de données

### 1.1 Configuration de l'environnement

1. Connectez-vous à votre instance MongoDB (Atlas ou locale) via MongoDB Compass
2. Créez une nouvelle base de données nommée `bibliotheque_amazon`
3. Créez deux collections initiales : `livres` et `utilisateurs`

### 1.2 Insertion de documents (Create)

#### Collection `livres`

Si vous créez vos propres données, insérez au moins 5 livres selon le modèle suivant :

```javascript
{
  titre: "Le Petit Prince",
  auteur: "Antoine de Saint-Exupéry",
  annee_publication: 1943,
  editeur: "Gallimard",
  genre: ["Conte", "Philosophie"],
  nombre_pages: 96,
  langue: "Français",
  disponible: true,
  stock: 3,
  note_moyenne: 4.8,
  description: "Un pilote d'avion, qui s'est écrasé dans le désert du Sahara, rencontre un jeune prince venu d'une autre planète...",
  prix: 7.50,
  isbn: "9782070612758",
  date_ajout: new Date("2023-01-15")
}
```

Si vous utilisez le dataset Amazon, importez les données puis adaptez les noms de champs si nécessaire pour les faire correspondre au modèle ci-dessus.

#### Collection `utilisateurs`

Insérez au moins 3 utilisateurs selon le modèle suivant :

```javascript
{
  nom: "Dupont",
  prenom: "Marie",
  email: "marie.dupont@example.com",
  age: 28,
  adresse: {
    rue: "123 Avenue des Livres",
    ville: "Lyon",
    code_postal: "69002"
  },
  date_inscription: new Date("2022-12-10"),
  livres_empruntes: [
    {
      livre_id: ObjectId("..."), // à remplacer par un vrai ID de votre collection de livres
      titre: "Le Petit Prince",
      date_emprunt: new Date("2023-02-15"),
      date_retour_prevue: new Date("2023-03-15")
    }
  ],
  tags: ["fiction", "histoire"]
}
```

## Partie 2 : Requêtes de lecture (Read)

Écrivez les requêtes MongoDB pour répondre aux questions suivantes :

1. Listez tous les livres disponibles (si vous utilisez le dataset Amazon, ajoutez d'abord un champ `disponible` à vos documents)
2. Trouvez les livres publiés après l'an 2000
3. Trouvez les livres d'un auteur spécifique
4. Trouvez les livres qui ont une note moyenne supérieure à 4
5. Listez tous les utilisateurs habitant dans une ville spécifique
6. Trouvez les livres qui appartiennent à un genre spécifique
7. Trouvez les livres qui ont à la fois un prix inférieur à 15€ et une note moyenne supérieure à 4
8. Trouvez les utilisateurs qui ont emprunté un livre spécifique (par titre)

## Partie 3 : Mise à jour de documents (Update)

Écrivez les requêtes MongoDB pour effectuer les opérations suivantes :

1. Mettez à jour le titre d'un livre spécifique
2. Ajoutez un champ `stock` à tous les livres avec une valeur par défaut de 5
3. Marquez un livre comme indisponible (disponible = false)
4. Ajoutez un nouvel emprunt dans la liste `livres_empruntes` d'un utilisateur
5. Changez l'adresse d'un utilisateur
6. Ajoutez un nouveau tag à un utilisateur
7. Mettez à jour la note moyenne d'un livre

## Partie 4 : Suppression de documents (Delete)

Écrivez les requêtes MongoDB pour effectuer les opérations suivantes :

1. Supprimez un livre spécifique par son titre
2. Supprimez tous les livres d'un auteur spécifique
3. Supprimez un utilisateur par son email

## Partie 5 : Requêtes avancées et projection

1. Listez tous les livres triés par note moyenne (ordre décroissant)
2. Trouvez les 3 livres les plus anciens
3. Comptez le nombre de livres par auteur
4. Affichez uniquement le titre, l'auteur et la note moyenne des livres (sans l'id)
5. Trouvez les utilisateurs qui ont emprunté plus d'un livre
6. Recherchez les livres dont le titre contient un mot spécifique (utilisez $regex)
7. Trouvez les livres dont le prix est entre 10€ et 20€

## Partie 6 : Modélisation de données (Mini-exercice)

### 6.1 Modèle embarqué vs référence

1. Créez une nouvelle collection `emprunts` qui utilise des références vers les livres et les utilisateurs
2. Insérez au moins 3 emprunts dans cette collection
3. Comparez cette approche avec celle où les emprunts sont directement intégrés dans le document utilisateur

Modèle pour la collection `emprunts` :

```javascript
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
2. Quelle approche privilégieriez-vous pour une application réelle et pourquoi ?
3. Comment modéliseriez-vous les cas où un même livre peut exister en plusieurs exemplaires ?

## Livrables

1. Un script MongoDB contenant toutes les requêtes des parties 2 à 5
2. Une courte réflexion  sur la modélisation des données (partie 6)

## Annexe : Adaptation du dataset Amazon Books Reviews

Si vous choisissez d'utiliser le dataset Amazon, voici comment vous pourriez adapter les données après importation :

```javascript
// Ajout des champs nécessaires pour le TP
db.livres.updateMany({}, {
  $set: {
    disponible: true,
    stock: 5,
    date_ajout: new Date(),
    genre: ["Non catégorisé"] // À personnaliser selon les livres
  }
})

// Renommage des champs (si nécessaire)
// Exemple : si votre dataset utilise "title" au lieu de "titre"
db.livres.updateMany({}, {
  $rename: {
    "title": "titre",
    "author": "auteur",
    "price": "prix",
    "average_rating": "note_moyenne"
  }
})
```

## Annexe : Données supplémentaires

Si vous avez besoin d'exemples pour générer vos propres données, voici quelques suggestions :

### Livres supplémentaires :

```javascript
// Livre 1
{
  titre: "1984",
  auteur: "George Orwell",
  annee_publication: 1949,
  editeur: "Gallimard",
  genre: ["Science-fiction", "Dystopie"],
  nombre_pages: 328,
  langue: "Français",
  disponible: true,
  stock: 5,
  note_moyenne: 4.6,
  description: "Dans une dystopie totalitaire, Winston Smith tente de résister au contrôle omniprésent du Parti...",
  prix: 8.90,
  isbn: "9782070368228",
  date_ajout: new Date("2023-01-10")
}

// Livre 2
{
  titre: "Harry Potter à l'école des sorciers",
  auteur: "J.K. Rowling",
  annee_publication: 1997,
  editeur: "Gallimard Jeunesse",
  genre: ["Fantasy", "Jeunesse"],
  nombre_pages: 308,
  langue: "Français",
  disponible: true,
  stock: 7,
  note_moyenne: 4.9,
  description: "Le jour de ses onze ans, Harry Potter découvre qu'il est le fils de deux puissants sorciers...",
  prix: 9.90,
  isbn: "9782070643028",
  date_ajout: new Date("2023-01-05")
}

// Livre 3
{
  titre: "Les Misérables",
  auteur: "Victor Hugo",
  annee_publication: 1862,
  editeur: "Livre de Poche",
  genre: ["Roman historique", "Classique"],
  nombre_pages: 1056,
  langue: "Français",
  disponible: true,
  stock: 2,
  note_moyenne: 4.7,
  description: "L'histoire de Jean Valjean, un ancien forçat qui tente de se racheter...",
  prix: 11.90,
  isbn: "9782253096344",
  date_ajout: new Date("2023-01-20")
}
```

### Utilisateurs supplémentaires :

```javascript
// Utilisateur 1
{
  nom: "Martin",
  prenom: "Thomas",
  email: "thomas.martin@example.com",
  age: 35,
  adresse: {
    rue: "45 Rue du Commerce",
    ville: "Paris",
    code_postal: "75015"
  },
  date_inscription: new Date("2022-11-15"),
  livres_empruntes: [],
  tags: ["science", "histoire"]
}

// Utilisateur 2
{
  nom: "Petit",
  prenom: "Sophie",
  email: "sophie.petit@example.com",
  age: 22,
  adresse: {
    rue: "8 Avenue des Arts",
    ville: "Lyon",
    code_postal: "69003"
  },
  date_inscription: new Date("2023-01-05"),
  livres_empruntes: [
    {
      livre_id: ObjectId("..."), // à remplacer par un vrai ID
      titre: "Harry Potter à l'école des sorciers",
      date_emprunt: new Date("2023-02-10"),
      date_retour_prevue: new Date("2023-03-10")
    }
  ],
  tags: ["fantasy", "jeunesse"]
}
```


Notez que le plus important reste de fournir un travail sérieux et complet, même si vous ne pouvez pas tout terminer. Bon courage !


Mounir B.