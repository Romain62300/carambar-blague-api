const express = require('express');
const router = express.Router();
const BlagueController = require('../../../controllers/BlagueController');

/**
 * @swagger
 * /blagues/random:
 *   get:
 *     summary: Récupère une blague aléatoire
 *     responses:
 *       200:
 *         description: Une blague aléatoire
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 question:
 *                   type: string
 *                 reponse:
 *                   type: string
 *       404:
 *         description: Aucune blague disponible
 */
router.get('/random', BlagueController.obtenirBlagueAleatoire);

/**
 * @swagger
 * /blagues/{id}:
 *   get:
 *     summary: Récupère une blague par ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Une blague spécifique
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 question:
 *                   type: string
 *                 reponse:
 *                   type: string
 *       404:
 *         description: Blague non trouvée
 */
router.get('/:id', BlagueController.obtenirBlagueParId);

/**
 * @swagger
 * /blagues:
 *   post:
 *     summary: Crée une nouvelle blague
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               question:
 *                 type: string
 *               reponse:
 *                 type: string
 *     responses:
 *       201:
 *         description: Blague créée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 question:
 *                   type: string
 *                 reponse:
 *                   type: string
 *       400:
 *         description: Données manquantes
 */
router.post('/', BlagueController.creerBlague);

/**
 * @swagger
 * /blagues:
 *   get:
 *     summary: Récupère toutes les blagues
 *     responses:
 *       200:
 *         description: Liste de toutes les blagues
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   question:
 *                     type: string
 *                   reponse:
 *                     type: string
 */
router.get('/', BlagueController.obtenirToutesBlagues);

/**
 * @swagger
 * /blagues/{id}:
 *   delete:
 *     summary: Supprime une blague par ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Blague supprimée avec succès
 *       404:
 *         description: Blague non trouvée
 */
router.delete('/:id', BlagueController.supprimerBlague);

module.exports = router;
