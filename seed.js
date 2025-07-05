const Blague = require('./models/Blague'); // ✅ PAS de { Joke }
const sequelize = require('./config/database'); // ✅ attention au nom du fichier

const seed = async () => {
  try {
    await sequelize.sync();

    const jokes = [
      { question: "Pourquoi les canards ont-ils autant de plumes ?", reponse: "Pour couvrir leur derrière." },
      { question: "Quel est le comble pour un électricien ?", reponse: "De ne pas être au courant." },
      { question: "Pourquoi les plongeurs plongent-ils toujours en arrière et jamais en avant ?", reponse: "Parce que sinon ils tombent dans le bateau." },
    ];

    await Blague.bulkCreate(jokes);
    console.log('Blagues ajoutées avec succès !');
    process.exit();
  } catch (err) {
    console.error('Erreur de seed :', err);
    process.exit(1);
  }
};

seed();
