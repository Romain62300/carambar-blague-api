const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const sequelize = require('./config/database');
const blagueRoutes = require('./routes/api/v1/blagues');
const configurerSwagger = require('./swagger/swagger');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes API
app.use('/api/v1/blagues', blagueRoutes);

// Documentation Swagger
configurerSwagger(app);

// Démarrage du serveur + synchronisation
(async () => {
  try {
    await sequelize.sync();
    console.log('✅ Base de données synchronisée');

    app.listen(PORT, () =>
      console.log(`🚀 Serveur lancé sur http://localhost:${PORT}\n📘 Swagger: http://localhost:${PORT}/api-docs`)
    );
  } catch (erreur) {
    console.error('❌ Échec du démarrage du serveur :', erreur);
  }
})();
