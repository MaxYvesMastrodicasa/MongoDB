db.utilisateurs.insertOne({
    nom: "Dupont",
    prenom: "Jean",
    email: "jean.dupont@example.com",
    dateNaissance: new Date("1985-07-15"),
    adresse: {
      rue: "123 Avenue de la République",
      ville: "Paris",
      codePostal: "75011",
      pays: "France"
    },
    telephone: "+33612345678",
    role: "client",
    dateInscription: new Date(),
    preferences: {
      newsletter: true,
      notifications: {
        email: true,
        sms: false
      },
      theme: "dark"
    },
    profil: {
      bio: "Passionné de technologie et de sports de plein air",
      photo: "https://exemple.com/photos/jean-dupont.jpg",
      reseauxSociaux: {
        linkedin: "jdupont",
        twitter: "@jdupont"
      }
    },
    derniereConnexion: new Date(),
    actif: true,
    commandes: [
      { id: ObjectId("60d21b4667d0d8992e610c85"), date: new Date("2023-01-15"), montant: 89.99 },
      { id: ObjectId("60d21b4667d0d8992e610c86"), date: new Date("2023-02-20"), montant: 129.50 }
    ],
    tags: ["premium", "fidele", "early-adopter"]
  })



  db.produits.insertOne({
    reference: "PRD-2023-XZ750",
    nom: "Caméra HD Pro 4K",
    description: "Caméra professionnelle 4K avec stabilisation d'image avancée et zoom optique 30x",
    prix: 1299.99,
    devise: "EUR",
    categorie: "Électronique",
    sousCategorie: "Photo & Vidéo",
    marque: "TechVision",
    stock: {
      quantite: 24,
      seuilAlerte: 5,
      statut: "disponible",
      entrepots: [
        { id: "ENT-PARIS", quantite: 15 },
        { id: "ENT-LYON", quantite: 9 }
      ]
    },
    caracteristiques: {
      resolution: "4K UHD (3840 x 2160)",
      capteur: "CMOS 1 pouce",
      zoom: "30x optique, 20x numérique",
      stabilisation: "5 axes",
      connectique: ["HDMI", "USB-C", "WiFi", "Bluetooth"],
      autonomie: "4.5 heures",
      poids: 780, // en grammes
      dimensions: {
        longueur: 145,
        largeur: 95,
        hauteur: 85
      }
    },
    medias: [
      { type: "image", url: "https://exemple.com/produits/camera-hd-pro-1.jpg", principal: true },
      { type: "image", url: "https://exemple.com/produits/camera-hd-pro-2.jpg", principal: false },
      { type: "video", url: "https://exemple.com/produits/camera-hd-pro-demo.mp4", principal: false }
    ],
    avis: [
      { 
        utilisateurId: ObjectId("60d21b4667d0d8992e610c87"),
        nom: "Sophie Martin",
        note: 5,
        commentaire: "Qualité d'image exceptionnelle, très satisfaite de cet achat!",
        date: new Date("2023-02-10"),
        verified: true
      },
      {
        utilisateurId: ObjectId("60d21b4667d0d8992e610c88"),
        nom: "Thomas Petit",
        note: 4,
        commentaire: "Excellent produit, mais autonomie légèrement inférieure à celle annoncée",
        date: new Date("2023-01-25"),
        verified: true
      }
    ],
    noteMoyenne: 4.5,
    nombreAvis: 2,
    dateCreation: new Date("2022-12-01"),
    dateMiseAJour: new Date(),
    promotion: {
      actif: true,
      pourcentage: 10,
      dateDebut: new Date("2023-03-01"),
      dateFin: new Date("2023-03-31")
    },
    tags: ["premium", "professionnel", "4k", "stabilisation"],
    statut: "actif",
    metadonnees: {
      seo: {
        title: "Caméra HD Pro 4K - Qualité professionnelle à prix abordable",
        keywords: ["caméra 4k", "caméra professionnelle", "stabilisation vidéo"]
      },
      fournisseur: {
        id: ObjectId("60d21b4667d0d8992e610c89"),
        nom: "ElectroVision",
        delaiLivraison: 3 // en jours
      }
    }
  })