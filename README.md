# 📦 API Carambar & Co – Projet de sélection CDA Simplon

Cette API REST permet de gérer une collection de blagues pour l’entreprise Carambar & Co.  
Elle fournit des fonctionnalités CRUD (Create, Read, Delete) consommées par un frontend React.

---

## 🚀 Lancer l'API en local

```bash
npm install
node server.js
```

Le serveur démarre par défaut sur :  
👉 `http://localhost:5000`

---

## 🔌 Endpoints disponibles

| Méthode | Endpoint                    | Description                |
|---------|-----------------------------|----------------------------|
| GET     | `/api/v1/blagues`           | Récupérer toutes les blagues |
| GET     | `/api/v1/blagues/:id`       | Récupérer une blague par ID |
| GET     | `/api/v1/blagues/random`    | Obtenir une blague aléatoire |
| POST    | `/api/v1/blagues`           | Ajouter une nouvelle blague |
| DELETE  | `/api/v1/blagues/:id`       | Supprimer une blague par ID |

---

## 📘 Documentation Swagger

### Accès local :
```bash
http://localhost:5000/api-docs
```

### Accès en ligne :
🔗 [https://carambar-blague-api.onrender.com/api-docs](https://carambar-blague-api.onrender.com/api-docs)

La documentation est générée automatiquement depuis le fichier `swagger.js` avec des annotations dans les routes.

---

## 🧪 Tests API (Postman)

Le fichier de test est disponible dans le dossier `postman/` :

```
postman/carambar_postman_collection.json
```

Importable directement dans Postman pour tester tous les endpoints.

---

## ⚙️ Stack technique

- **Node.js** / **Express**
- **Sequelize** + **SQLite**
- **Architecture MVC**
- **Swagger** pour la documentation API
- Déploiement sur **Render.com**

---

## 📁 Structure du projet

```
backend/
├── config/
│   ├── database.js
│   └── sequelize.js
├── controllers/
│   └── BlagueController.js
├── data/
│   └── blagues.js
├── models/
│   └── Blague.js
├── swagger/
│   └── swagger.js
├── seed.js
├── server.js
├── database.sqlite
├── .env
├── .gitignore
├── package.json
└── README.md
```

---

## 📂 Fichier `.env` requis

Crée un fichier `.env` à la racine du dossier `backend/` avec ce contenu minimal :

```
PORT=5000
```

---

## 👤 Auteur

Projet réalisé par **Romain Monier** dans le cadre du test de sélection CDA (Concepteur Développeur d’Applications) - Simplon.co – juillet 2025.
