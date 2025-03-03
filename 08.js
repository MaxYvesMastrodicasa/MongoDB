// COLLECTION UTILISATEURS - INSERTION MULTIPLE
db.utilisateurs.insertMany([
    {
      nom: "Martin",
      prenom: "Sophie",
      email: "sophie.martin@example.com",
      dateNaissance: new Date("1990-03-22"),
      adresse: {
        rue: "45 Rue du Commerce",
        ville: "Lyon",
        codePostal: "69002",
        pays: "France"
      },
      telephone: "+33678901234",
      role: "client",
      dateInscription: new Date("2022-05-12"),
      preferences: {
        newsletter: true,
        notifications: { email: true, sms: true }
      },
      derniereConnexion: new Date("2023-02-28"),
      actif: true,
      commandes: [
        { id: ObjectId(), date: new Date("2022-06-10"), montant: 145.80 },
        { id: ObjectId(), date: new Date("2022-09-18"), montant: 67.50 },
        { id: ObjectId(), date: new Date("2023-01-03"), montant: 210.25 }
      ],
      tags: ["premium", "fidele"]
    },
    {
      nom: "Dubois",
      prenom: "Thomas",
      email: "thomas.dubois@example.com",
      dateNaissance: new Date("1988-11-05"),
      adresse: {
        rue: "8 Boulevard des Capucines",
        ville: "Marseille",
        codePostal: "13001",
        pays: "France"
      },
      telephone: "+33612345678",
      role: "client",
      dateInscription: new Date("2022-02-18"),
      preferences: {
        newsletter: false,
        notifications: { email: true, sms: false }
      },
      derniereConnexion: new Date("2023-03-01"),
      actif: true,
      commandes: [
        { id: ObjectId(), date: new Date("2022-03-20"), montant: 89.99 }
      ],
      tags: ["nouveauclient"]
    },
    {
      nom: "Petit",
      prenom: "Marie",
      email: "marie.petit@example.com",
      dateNaissance: new Date("1995-07-30"),
      adresse: {
        rue: "17 Avenue Foch",
        ville: "Lille",
        codePostal: "59000",
        pays: "France"
      },
      telephone: "+33698765432",
      role: "client",
      dateInscription: new Date("2021-11-25"),
      preferences: {
        newsletter: true,
        notifications: { email: true, sms: true }
      },
      derniereConnexion: new Date("2023-02-15"),
      actif: true,
      commandes: [
        { id: ObjectId(), date: new Date("2021-12-10"), montant: 65.30 },
        { id: ObjectId(), date: new Date("2022-04-22"), montant: 120.00 },
        { id: ObjectId(), date: new Date("2022-08-14"), montant: 43.75 },
        { id: ObjectId(), date: new Date("2022-12-23"), montant: 178.90 }
      ],
      tags: ["premium", "fidele"]
    },
    {
      nom: "Roux",
      prenom: "Pierre",
      email: "pierre.roux@example.com",
      dateNaissance: new Date("1976-02-10"),
      adresse: {
        rue: "29 Rue de la Paix",
        ville: "Bordeaux",
        codePostal: "33000",
        pays: "France"
      },
      telephone: "+33654321098",
      role: "admin",
      dateInscription: new Date("2020-09-05"),
      preferences: {
        newsletter: false,
        notifications: { email: true, sms: false }
      },
      derniereConnexion: new Date("2023-03-02"),
      actif: true,
      tags: ["staff", "admin"]
    },
    {
      nom: "Moreau",
      prenom: "Claire",
      email: "claire.moreau@example.com",
      dateNaissance: new Date("1992-05-18"),
      adresse: {
        rue: "12 Rue Victor Hugo",
        ville: "Toulouse",
        codePostal: "31000",
        pays: "France"
      },
      telephone: "+33687654321",
      role: "client",
      dateInscription: new Date("2022-07-12"),
      preferences: {
        newsletter: true,
        notifications: { email: false, sms: true }
      },
      derniereConnexion: new Date("2023-02-10"),
      actif: false,
      commandes: [],
      tags: ["inactif"]
    }
  ]);
  
  // COLLECTION PRODUITS - INSERTION MULTIPLE
  db.produits.insertMany([
    {
      reference: "PRD-2023-LT450",
      nom: "Ordinateur Portable ProBook X7",
      description: "Ordinateur portable haute performance pour professionnels et créatifs",
      prix: 1499.99,
      devise: "EUR",
      categorie: "Électronique",
      sousCategorie: "Ordinateurs",
      marque: "TechPro",
      stock: {
        quantite: 35,
        seuilAlerte: 10,
        statut: "disponible",
        entrepots: [
          { id: "ENT-PARIS", quantite: 20 },
          { id: "ENT-LYON", quantite: 15 }
        ]
      },
      caracteristiques: {
        processeur: "Intel Core i7-12700H",
        ram: "32 GB DDR5",
        stockage: "1 TB SSD",
        ecran: "15.6 pouces 4K",
        carte_graphique: "NVIDIA RTX 3080",
        systeme: "Windows 11 Pro",
        autonomie: "10 heures"
      },
      medias: [
        { type: "image", url: "https://exemple.com/produits/probook-x7-1.jpg", principal: true },
        { type: "image", url: "https://exemple.com/produits/probook-x7-2.jpg", principal: false }
      ],
      avis: [
        { 
          utilisateurId: ObjectId(),
          nom: "Thomas D.",
          note: 5,
          commentaire: "Parfait pour le développement et les tâches intensives!",
          date: new Date("2023-01-15"),
          verified: true
        },
        { 
          utilisateurId: ObjectId(),
          nom: "Marie P.",
          note: 4,
          commentaire: "Excellent ordinateur, mais un peu cher",
          date: new Date("2023-02-08"),
          verified: true
        }
      ],
      noteMoyenne: 4.5,
      nombreAvis: 2,
      dateCreation: new Date("2022-11-15"),
      dateMiseAJour: new Date(),
      tags: ["premium", "professionnel", "performance"]
    },
    {
      reference: "PRD-2023-SP550",
      nom: "Smartphone Galaxy Ultra",
      description: "Smartphone haut de gamme avec appareil photo professionnel",
      prix: 1099.99,
      devise: "EUR",
      categorie: "Électronique",
      sousCategorie: "Smartphones",
      marque: "SamsungTech",
      stock: {
        quantite: 50,
        seuilAlerte: 15,
        statut: "disponible",
        entrepots: [
          { id: "ENT-PARIS", quantite: 30 },
          { id: "ENT-LYON", quantite: 20 }
        ]
      },
      caracteristiques: {
        ecran: "6.8 pouces AMOLED",
        processeur: "Exynos 2200",
        ram: "12 GB",
        stockage: "256 GB",
        appareilPhoto: "108MP + 48MP + 12MP",
        batterie: "5000 mAh",
        etancheite: "IP68"
      },
      medias: [
        { type: "image", url: "https://exemple.com/produits/galaxy-ultra-1.jpg", principal: true },
        { type: "image", url: "https://exemple.com/produits/galaxy-ultra-2.jpg", principal: false },
        { type: "video", url: "https://exemple.com/produits/galaxy-ultra-demo.mp4", principal: false }
      ],
      avis: [
        { 
          utilisateurId: ObjectId(),
          nom: "Jean D.",
          note: 5,
          commentaire: "Appareil photo incroyable!",
          date: new Date("2022-12-20"),
          verified: true
        },
        { 
          utilisateurId: ObjectId(),
          nom: "Sophie M.",
          note: 5,
          commentaire: "Design élégant et performances au top",
          date: new Date("2023-01-05"),
          verified: true
        },
        { 
          utilisateurId: ObjectId(),
          nom: "Pierre R.",
          note: 4,
          commentaire: "Très bon téléphone, batterie pourrait être meilleure",
          date: new Date("2023-02-12"),
          verified: true
        }
      ],
      noteMoyenne: 4.7,
      nombreAvis: 3,
      dateCreation: new Date("2022-12-01"),
      dateMiseAJour: new Date(),
      promotion: {
        actif: false,
        pourcentage: 0
      },
      tags: ["premium", "photo", "5G"]
    },
    {
      reference: "PRD-2023-EC250",
      nom: "Écouteurs Sans Fil AudioPro",
      description: "Écouteurs true wireless avec réduction de bruit active",
      prix: 199.99,
      devise: "EUR",
      categorie: "Électronique",
      sousCategorie: "Audio",
      marque: "AudioTech",
      stock: {
        quantite: 120,
        seuilAlerte: 30,
        statut: "disponible",
        entrepots: [
          { id: "ENT-PARIS", quantite: 70 },
          { id: "ENT-LYON", quantite: 50 }
        ]
      },
      caracteristiques: {
        type: "True Wireless",
        autonomie: "8h (30h avec boîtier)",
        reductionBruit: "Active, 3 niveaux",
        resistance: "IPX4",
        bluetooth: "5.2",
        microphones: "4 avec beamforming"
      },
      medias: [
        { type: "image", url: "https://exemple.com/produits/audiopro-1.jpg", principal: true },
        { type: "image", url: "https://exemple.com/produits/audiopro-2.jpg", principal: false }
      ],
      avis: [
        { 
          utilisateurId: ObjectId(),
          nom: "Claire M.",
          note: 5,
          commentaire: "Qualité sonore exceptionnelle!",
          date: new Date("2023-01-20"),
          verified: true
        },
        { 
          utilisateurId: ObjectId(),
          nom: "Thomas P.",
          note: 4,
          commentaire: "Très bons écouteurs, confortables pour une utilisation prolongée",
          date: new Date("2023-02-05"),
          verified: true
        },
        { 
          utilisateurId: ObjectId(),
          nom: "Marie D.",
          note: 3,
          commentaire: "Son correct mais ANC pourrait être meilleure",
          date: new Date("2023-02-18"),
          verified: true
        }
      ],
      noteMoyenne: 4.0,
      nombreAvis: 3,
      dateCreation: new Date("2022-11-10"),
      dateMiseAJour: new Date(),
      promotion: {
        actif: true,
        pourcentage: 15,
        dateDebut: new Date("2023-03-01"),
        dateFin: new Date("2023-03-15")
      },
      tags: ["bluetooth", "audio", "anc"]
    },
    {
      reference: "PRD-2023-TV750",
      nom: "Smart TV OLED 65\"",
      description: "Téléviseur OLED 4K avec technologie HDR et système smart intégré",
      prix: 1899.99,
      devise: "EUR",
      categorie: "Électronique",
      sousCategorie: "TV & Home Cinéma",
      marque: "VisionTech",
      stock: {
        quantite: 15,
        seuilAlerte: 5,
        statut: "disponible",
        entrepots: [
          { id: "ENT-PARIS", quantite: 8 },
          { id: "ENT-LYON", quantite: 7 }
        ]
      },
      caracteristiques: {
        taille: "65 pouces",
        resolution: "4K UHD (3840x2160)",
        technologie: "OLED",
        hdr: "Dolby Vision, HDR10+",
        systemeSmart: "WebOS 6.0",
        connectique: ["HDMI 2.1 x4", "USB x3", "Ethernet", "Optique"],
        audio: "Dolby Atmos, 40W"
      },
      medias: [
        { type: "image", url: "https://exemple.com/produits/oled-tv-1.jpg", principal: true },
        { type: "image", url: "https://exemple.com/produits/oled-tv-2.jpg", principal: false },
        { type: "video", url: "https://exemple.com/produits/oled-tv-demo.mp4", principal: false }
      ],
      avis: [
        { 
          utilisateurId: ObjectId(),
          nom: "Pierre L.",
          note: 5,
          commentaire: "Image époustouflante, les noirs sont parfaits!",
          date: new Date("2023-01-10"),
          verified: true
        },
        { 
          utilisateurId: ObjectId(),
          nom: "Sophie R.",
          note: 5,
          commentaire: "Interface intuitive et qualité d'image exceptionnelle",
          date: new Date("2023-02-02"),
          verified: true
        }
      ],
      noteMoyenne: 5.0,
      nombreAvis: 2,
      dateCreation: new Date("2022-10-20"),
      dateMiseAJour: new Date(),
      tags: ["premium", "oled", "4k", "smarttv"]
    },
    {
      reference: "PRD-2023-RM150",
      nom: "Robot Aspirateur Intelligent",
      description: "Robot aspirateur et laveur avec cartographie laser et contrôle par application",
      prix: 499.99,
      devise: "EUR",
      categorie: "Électroménager",
      sousCategorie: "Entretien des sols",
      marque: "CleanTech",
      stock: {
        quantite: 45,
        seuilAlerte: 10,
        statut: "disponible",
        entrepots: [
          { id: "ENT-PARIS", quantite: 25 },
          { id: "ENT-LYON", quantite: 20 }
        ]
      },
      caracteristiques: {
        puissanceAspiration: "2700 Pa",
        autonomie: "180 minutes",
        capacitePoussiere: "0.5 L",
        capaciteEau: "0.3 L",
        navigation: "Laser LiDAR",
        controle: "Application smartphone, assistants vocaux",
        niveauxPuissance: 4
      },
      medias: [
        { type: "image", url: "https://exemple.com/produits/robot-clean-1.jpg", principal: true },
        { type: "image", url: "https://exemple.com/produits/robot-clean-2.jpg", principal: false }
      ],
      avis: [
        { 
          utilisateurId: ObjectId(),
          nom: "Marie T.",
          note: 5,
          commentaire: "Excellent robot, cartographie précise et nettoyage efficace",
          date: new Date("2023-01-25"),
          verified: true
        },
        { 
          utilisateurId: ObjectId(),
          nom: "Jean M.",
          note: 4,
          commentaire: "Très bon produit, application perfectible",
          date: new Date("2023-02-10"),
          verified: true
        },
        { 
          utilisateurId: ObjectId(),
          nom: "Claire D.",
          note: 5,
          commentaire: "Ne regrette pas mon achat, maison toujours propre!",
          date: new Date("2023-02-22"),
          verified: true
        }
      ],
      noteMoyenne: 4.7,
      nombreAvis: 3,
      dateCreation: new Date("2022-11-05"),
      dateMiseAJour: new Date(),
      promotion: {
        actif: true,
        pourcentage: 10,
        dateDebut: new Date("2023-03-01"),
        dateFin: new Date("2023-03-31")
      },
      tags: ["maison connectée", "entretien", "robotique"]
    }
  ]);