import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Car Management API",
      version: "1.0.0",
      description:
        "This is a REST API that can be used to manage car data with authentication features.",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["swagger.yaml"],
};

const specs = swaggerJsdoc(options);

export default specs;
