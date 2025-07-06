# API Carambar & Co – Projet de sélection CDA Simplon

Cette API permet de gérer un ensemble de blagues (ajout, consultation, suppression). Elle alimente une application React.

---

## 🚀 Lancer l'API en local

```bash
npm install
npm start
```

Le serveur démarre sur `http://localhost:5000`

---

## 🔌 Endpoints disponibles

- `GET /api/v1/blagues` → Toutes les blagues  
- `GET /api/v1/blagues/:id` → Une blague par ID  
- `GET /api/v1/blagues/random` → Une blague aléatoire  
- `POST /api/v1/blagues` → Ajouter une blague  
- `DELETE /api/v1/blagues/:id` → Supprimer une blague

---

## 📘 Documentation Swagger

```bash
http://localhost:5000/api-docs
```

En ligne :  
🔗 [https://carambar-blague-api.onrender.com/api-docs](https://carambar-blague-api.onrender.com/api-docs)

---

## 📂 Fichier d’environnement

Crée un fichier `.env` à la racine du projet :

```
PORT=5000
```

---

## 📤 Collection Postman

Le fichier `carambar-api.postman_collection.json` est disponible à la racine du dossier backend pour tester facilement tous les endpoints.

---

## ⚙️ Stack technique

- Node.js / Express
- Sequelize / SQLite
- Déploiement : Render.com
- Architecture MVC
