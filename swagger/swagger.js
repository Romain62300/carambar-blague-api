const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Blagues Carambar & Co',
      version: '1.0.0',
      description: 'API pour gérer et récupérer des blagues Carambar via une documentation Swagger.',
    },
    servers: [
      {
        url: //'http://localhost:3000/api/v1',//https://
        carambar-blague-api.onrender.com,
        description: 'Serveur local',
      },
    ],
  },
  apis: ['./routes/api/v1/*.js'], // Chemin vers les fichiers annotés
};

const specs = swaggerJsdoc(options);

module.exports = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};
