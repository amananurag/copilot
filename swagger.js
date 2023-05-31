const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Your API",
      version: "1.0.0",
      description: "API documentation for your server",
    },
  },
  apis: ["./server.js"], // Replace with the path to your route files
};

const specs = swaggerJsDoc(options);

module.exports = (app) => {
  app.use("/swagger-ui", swaggerUi.serve, swaggerUi.setup(specs));
};
