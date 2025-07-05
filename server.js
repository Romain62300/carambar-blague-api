const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const sequelize = require('./config/database');
const blagueRoutes = require('./routes/api/v1/blagues');
const configurerSwagger = require('./swagger/swagger');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Routes API
app.use('/api/v1/blagues', blagueRoutes);

// Documentation Swagger
configurerSwagger(app);

// Démarrage du serveur + synchronisation de la base
(async () => {
  try {
    await sequelize.sync({ force: process.env.NODE_ENV !== 'production' });
    console.log('✅ Base de données synchronisée');

    if (process.env.NODE_ENV !== 'production') {
      const blaguesInitiales = [
        { question: 'Quelle est la femelle du hamster ?', reponse: 'L’Amsterdam' },
        { question: 'Que dit un oignon quand il se cogne ?', reponse: 'Aïe' },
        { question: 'Quel est l\'animal le plus heureux ?', reponse: 'Le hibou, parce que sa femme est chouette.' },
        { question: 'Pourquoi le football c\'est rigolo ?', reponse: 'Parce que Thierry en rit' },
        { question: 'Quel est le sport le plus fruité ?', reponse: 'La boxe, parce que tu te prends des pêches dans la poire et tu tombes dans les pommes.' },
        { question: 'Que se fait un Schtroumpf quand il tombe ?', reponse: 'Un Bleu' },
        { question: 'Quel est le comble pour un marin ?', reponse: 'Avoir le nez qui coule' },
        { question: 'Qu\'est ce que les enfants usent le plus à l\'école ?', reponse: 'Le professeur' },
        { question: 'Quel est le sport le plus silencieux ?', reponse: 'Le para-chuuuut' },
        { question: 'Quel est le comble pour un joueur de bowling ?', reponse: 'C’est de perdre la boule' },
      ];

      const count = await sequelize.models.Blague.count();
      if (count === 0) {
        await sequelize.models.Blague.bulkCreate(blaguesInitiales);
        console.log('🎉 10 blagues Carambar insérées');
      }
    }

    app.listen(PORT, () =>
      console.log(`🚀 Serveur lancé sur http://localhost:${PORT}\n📘 Swagger: http://localhost:${PORT}/api-docs`)
    );
  } catch (erreur) {
    console.error('❌ Échec du démarrage du serveur :', erreur);
  }
})();
