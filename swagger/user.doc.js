const createUser = {
  tags: ["User"],
  description: " user",
  requestBody: {
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            fullName:{
              type: "string",
              description: "User email",
              example: "admin",
            },
            email: {
              type: "string",
              description: "User email",
              example: "admin@gmail.com",
            },
            hash_password: {
              type: "string",
              description: "Password",
              example: "1234",
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: "OK",
      content: {
        "application/json": {
          schema: {
            type: "object",
            example: {
              status: 0,
              message: "",
              payload: [],
            },
          },
        },
      },
    },
  },
};





const logUser = {
  tags: ["User"],
  description: " user",
  requestBody: {
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            email: {
              type: "string",
              description: "User email",
              example: "admin@gmail.com",
            },
            hash_password: {
              type: "string",
              description: "Password",
              example: "1234",
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: "OK",
      content: {
        "application/json": {
          schema: {
            type: "object",
            example: {
              status: 0,
              message: "",
              payload: [],
            },
          },
        },
      },
    },
  },
};



const userRouteDoc = {
  "/api/auth/sign_in": {
    post: logUser,
  },

  "/api/auth/register":{
    post: createUser,
  }
};

module.exports = userRouteDoc;
                      