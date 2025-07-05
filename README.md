API Blagues Carambar & Co

Ceci est l'API backend pour l'application de blagues Carambar & Co, développée avec Node.js, Express, Sequelize et SQLite. Elle fournit des endpoints pour gérer et récupérer des blagues, avec une documentation Swagger.

Configuration


Cloner le dépôt :

git clone <url-depot-backend>
cd carambar-blague-api



Installer les dépendances :

npm install



Démarrer le serveur :

npm start

Endpoints de l'API





POST /api/v1/blagues : Créer une nouvelle blague



GET /api/v1/blagues : Récupérer toutes les blagues



GET /api/v1/blagues/:id : Récupérer une blague par ID



GET /api/v1/blagues/random : Récupérer une blague aléatoire

Documentation

La documentation Swagger est disponible à /api-docs lorsque le serveur est en cours d'exécution.

Déploiement

L'API est déployée sur Render.com. Accédez-y à : <url-deploiement-render>

Dépôts associés





Dépôt Frontend : <url-depot-frontend>



Documentation Swagger : <url-deploiement-render>/api-docs

Exemples de réponses JSON





GET /api/v1/blagues/random :

{
  "id": 1,
  "question": "Quelle est la femelle du hamster ?",
  "reponse": "L’Amsterdam",
  "createdAt": "2025-07-05T19:31:00Z",
  "updatedAt": "2025-07-05T19:31:00Z"
}



POST /api/v1/blagues (avec corps { "question": "Pourquoi ?", "reponse": "Parce que !" }) :

{
  "id": 11,
  "question": "Pourquoi ?",
  "reponse": "Parce que !",
  "createdAt": "2025-07-05T19:32:00Z",
  "updatedAt": "2025-07-05T19:32:00Z"
}

Structure du projet

backend/
├── config/
│   └── database.js
├── controllers/
│   └── BlagueController.js
├── models/
│   └── Blague.js
├── routes/
│   └── api/
│       └── v1/
│           └── blagues.js
├── swagger/
│   └── swagger.js
├── .env
├── package.json
├── server.js
└── README.md

Test avec Postman

Utilisez Postman pour tester l'endpoint POST /api/v1/blagues avec un corps JSON comme :

{
  "question": "Pourquoi l'épouvantail est-il devenu conférencier motivateur ?",
  "reponse": "Parce qu'il était exceptionnel dans son champ !"
}