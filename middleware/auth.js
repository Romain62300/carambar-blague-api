const authentifierCleApi = (req, res, next) => {
  const entete = req.headers['authorization'];
  if (!entete || !entete.startsWith('Bearer ')) {
    return res.status(401).json({ erreur: 'Authentification requise' });
  }

  const cle = entete.slice(7);
  if (!process.env.API_KEY || cle !== process.env.API_KEY) {
    return res.status(403).json({ erreur: 'Clé API invalide' });
  }

  next();
};

module.exports = authentifierCleApi;
