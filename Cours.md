### MongoDB

## qu'est ce que nosql ?

# Carcatéristique principales

- Schéma flexible ou absent
- Conçu pour la scalabilité horizontale -> permet de se dupliquer sur une même instant pour gérer un nombre de requetes importantes
- Opti pour des modèles de données spécifiques
- Compromis dans la cohérence

# Types de bases NoSQL

- Document : MongoDB, CouchDB
- Clé-valeurs : Redis, DynamoDB
- Colonne : Cassandra, HBase
- Graph : Neo4j, OrientDB

# Comparaison avec les bases relationnelles

| Concept SQL | Concept MongoDB     | Description                               |
| ----------- | ------------------- | ----------------------------------------- |
| Database    | Database            | Conteneur physique pour les collections   |
| Table       | Collection          | Groupe de documents MongoDB               |
| Row         | Document            | Enregistrement unique dans une collection |
| Column      | Field               | Paire clé-valeur dans un document         |
| Index       | Index               | Améliore les performances des requêtes    |
| JOIN        | $lookup & Embedding | Association entre documents               |
| Primary Key | \_id Field          | Identifiant unique pour chaque document   |

# Différences fondamentales

- **Schéma** : Fixe (SQL) vs Flexible (MongoDB)
- **Relations** : Jointures explicites vs Documents imbriqués
- **Scalabilité** : Verticale vs Horizontale
- **Transactions** : ACID complet vs ACID par document (avant v4.0)
- **Requêtes** : SQL vs Syntaxe orientée objet

# Pourquoi MongoDB ?

## Forces

- Schéma flexible adaptatif
- Modèle de données intuitif (JSON)
- Performances élevées en lecture/écriture
- Scalabilité horizontale (sharding natif)
- Requêtes riches et expressives
- Indexation avancée
- Distribution géographique
- Support de transactions multi-documents

## Cas d’usage

- Applications web et mobiles
- Gestion de contenus (CMS)
- E-commerce (catalogues produits)
- IoT et données en temps réel
- Big Data et analytique
- Gestion de métadonnées
- Stockage de données de configuration
- Caching et sessions

```mermaid
graph TD;
    A[MongoDB Deployment] --> B[Databases];
    B --> C[Collections];
    C --> D[Documents];
    D --> E[Fields];
    E --> F["Values (Strings, Numbers, Arrays, etc.)"];
```

## Structure physique

```mermaid
graph TD;
    A[MongoDB Deployment] --> B[Standalone]
    A --> C[Replica Set]
    C --> D[Primary Node]
    C --> E[Secondary Nodes]
    A --> F[Sharded Cluster]
    F --> G[Config Servers]
    F --> H[Mongos Routers]
    F --> I[Shards]
    I --> J[Replica Sets]
```

# Le Format BSON

**BSON** (Binary JSON) est le format de stockage et d’échange de données utilisé par MongoDB.

## Caractéristiques

- Extension binaire de JSON
- Encodage plus efficace en espace
- Support de types additionnels
- Optimisé pour la traversée rapide
- Conçu pour la sérialisation/désérialisation rapide

## Types de données BSON

- **Types de base** : String, Number, Boolean, Null
- **Types étendus** :
  - ObjectId (identifiant unique sur 12 octets)
  - Date (timestamp UNIX en millisecondes)
  - BinData (données binaires)
  - RegExp (expressions régulières)
  - Timestamp (horodatage interne)
  - NumberDecimal, NumberLong, NumberInt

# Options d’installation

## MongoDB Atlas (Cloud)

1. Création d’un compte sur [mongodb.com/atlas](https://www.mongodb.com/atlas)
2. Déploiement d’un cluster gratuit (M0)
3. Configuration du réseau (liste blanche IP)
4. Création d’un utilisateur pour la connexion
5. Obtention de la chaîne de connexion

## Installation locale

### Windows :

- Téléchargement de l’installateur MSI
- Assistant d’installation
- Option "MongoDB as a Service"

# Interfaces MongoDB

## MongoDB Shell (mongosh)

Interface ligne de commande interactive avec syntaxe JavaScript :

```javascript
// Connexion
mongosh "mongodb+srv://user:pass@cluster.mongodb.net"

// Liste des bases de données
show dbs

// Utilisation d’une base
use ma_base

// Liste des collections
show collections

// Aide
db.help()
```

# Create : Insertion de documents

## insertOne()

### Insertion d’un document unique :

```javascript
db.utilisateurs.insertOne({
  nom: "Dupont",
  prenom: "Jean",
  email: "jean.dupont@example.com",
  age: 35,
  actif: true,
});
```

### insertMany()

```javascript
db.utilisateurs.insertMany([
  {
    nom: "Martin",
    prenom: "Sophie",
    email: "sophie.martin@example.com",
    age: 28,
  },
  {
    nom: "Dubois",
    prenom: "Pierre",
    email: "pierre.dubois@example.com",
    age: 42,
  },
]);
```

## Résultat :

```json
{
    acknowledged: true,
    insertedIds: {
        "0": ObjectId("..."),
        "1": ObjectId("...")
    }
}
```

# Read : Lecture de documents

## find()

### Récupération de multiples documents :

```javascript
// Tous les documents
db.utilisateurs.find();

// Avec un filtre
db.utilisateurs.find({ age: { $gt: 30 } });

// Avec projection (sélection des champs)
db.utilisateurs.find({ actif: true }, { nom: 1, email: 1, _id: 0 });
```

## Méthode de curseur :

```javascript
db.utilisateurs.find().sort({ age: -1 }).limit(5).skip(10);
```

## findOne()

### Récupère un seul documents :

```javascript
// Premier document correspondant
db.utilisateurs.findOne({ nom: "Dupont" });

// Avec critères multiples
db.utilisateurs.findOne({
  nom: "Dupont",
  actif: true,
});
```
