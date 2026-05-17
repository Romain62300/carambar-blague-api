const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const sequelize = require('./config/database');
const blagueRoutes = require('./routes/api/v1/blagues');
const configurerSwagger = require('./swagger/swagger');

const app = express();
const PORT = process.env.PORT || 5000;

const originesAutorisees = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(',').map(o => o.trim())
  : ['http://localhost:3000', 'http://localhost:5000'];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || originesAutorisees.includes(origin)) return callback(null, true);
    callback(new Error(`Origine non autorisée par la politique CORS : ${origin}`));
  },
  methods: ['GET', 'POST', 'DELETE', 'OPTIONS'],
}));


app.use(express.json());

// Routes API
app.use('/api/v1/blagues', blagueRoutes);

// Swagger
configurerSwagger(app);

// Démarrage du serveur
(async () => {
  try {
    await sequelize.sync();
    console.log('✅ Base de données synchronisée');
    app.listen(PORT, () => {
      console.log(`🚀 Serveur lancé sur http://localhost:${PORT}`);
      console.log(`📘 Swagger disponible sur http://localhost:${PORT}/api-docs`);
    });
  } catch (err) {
    console.error('❌ Échec du démarrage du serveur :', err);
  }
})();
