import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Your API",
      version: "1.0.0",
      description: "API documentation for your server",
    },
  },
  apis: ["./router/hello-router/hello-router.js"], // Replace with the path to your route files
};

const specs = swaggerJsDoc(options);

function swagger(app) {
  app.use("/swagger-ui", swaggerUi.serve, swaggerUi.setup(specs));
}

export { swagger };
