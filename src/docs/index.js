import swaggerJSDoc from 'swagger-jsdoc';

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Grow Green Rwanda',
      version: '1.0.0',
      description: 'Welcome to Grow Green Rwanda',
      servers: ['https://localhost:'],
    },
  },
  apis: ['src/docs/*.js'],
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);

export default swaggerDocs;
