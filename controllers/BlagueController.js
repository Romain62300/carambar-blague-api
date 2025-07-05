const Blague = require('../models/Blague');

class BlagueController {
  static async creerBlague(req, res) {
    try {
      const { question, reponse } = req.body;
      if (!question || !reponse) {
        return res.status(400).json({ erreur: 'La question et la réponse sont requises' });
      }
      const blague = await Blague.create({ question, reponse });
      res.status(201).json(blague);
    } catch (erreur) {
      res.status(500).json({ erreur: 'Échec de la création de la blague' });
    }
  }

  static async obtenirToutesBlagues(req, res) {
    try {
      const blagues = await Blague.findAll();
      res.json(blagues);
    } catch (erreur) {
      res.status(500).json({ erreur: 'Échec de la récupération des blagues' });
    }
  }

  static async obtenirBlagueParId(req, res) {
    try {
      const blague = await Blague.findByPk(req.params.id);
      if (!blague) {
        return res.status(404).json({ erreur: 'Blague non trouvée' });
      }
      res.json(blague);
    } catch (erreur) {
      res.status(500).json({ erreur: 'Échec de la récupération de la blague' });
    }
  }

  static async obtenirBlagueAleatoire(req, res) {
    try {
      const nombre = await Blague.count();
      if (nombre === 0) {
        return res.status(404).json({ erreur: 'Aucune blague disponible' });
      }
      const indexAleatoire = Math.floor(Math.random() * nombre);
      const blague = await Blague.findOne({ offset: indexAleatoire });
      res.json(blague);
    } catch (erreur) {
      res.status(500).json({ erreur: 'Échec de la récupération d\'une blague aléatoire' });
    }
  }
}

module.exports = BlagueController;
