const blogsRouteDoc = require ("../swagger/blogs");
const userRouteDoc = require("../swagger/user.doc");

const swaggerDocumentations = {
  openapi: "3.0.0",
  info: {
    title: "My brand Api",
    Version: "0.1.0",
    description: "This is the backend of my BRAND",
  },
  servers: [
    {
      url: "https://website-api-o6er.onrender.com",
      name: "production server",
    },
    {
      url: "http://localhost:3001",
      name: "development server",
    },
  ],

  schemes: ["HTTP", "HTTPS"],
  tags: [
    {
      name: "Blogs",
      description: "",
    },

    {
      name: "Messages",
      description: "",
    },

    {
      name: "User",
      description: "",
    },
  ],

  components: {
    securitySchemes: {
      token: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
  },

  paths: {
    ...blogsRouteDoc,
    ...userRouteDoc

  },
};

module.exports= swaggerDocumentations;
