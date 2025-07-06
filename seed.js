const Blague = require('./models/Blague');
const sequelize = require('./config/database');
const blagues = require('./data/blagues'); // Import des 10 blagues depuis le bon fichier

const seed = async () => {
  try {
    await sequelize.sync({ force: true }); // supprime et recrée la table proprement

    await Blague.bulkCreate(blagues);
    console.log('🎉 Blagues ajoutées avec succès !');
    process.exit();
  } catch (err) {
    console.error('❌ Erreur lors du seed :', err);
    process.exit(1);
  }
};

seed();
