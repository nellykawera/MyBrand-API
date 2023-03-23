const { createBlog } = require("../services/BlogService");

const listOfAllBlogs = {
  tags: [
        "Blogs"
    ],
  description: "list of all blogs",
  responses: {
        200: {
      description: "OK",
      content: {
                "application/json": {
          schema: {
            type: "object",
            example: {
              _id: "63c5554511120c1b217b1d31",
              title: "eating is good",
              description: "niceeeeee",
              __v: 0,
                        },
                    },
                },
            },
        },
    },
};

//get single blog by id swagger documentation
const getoneblog = {
  tags: [
        "Blogs"
    ],
  summary: "get user by path id",
  description: "get single blog by id",
  parameters: [
        {
      name: "id",
      in: "path",
      description: "id of the user",
      type: "string",
      example: "hfbjsd2345njndfjhcbe3",
        },
    ],
  responses: {
        200: {
      description: "OK",
      content: {
                "application/json": {
          schema: {
            type: "object",
                    },
                },
            },
        },
        404: {
      description: "blog not found",
        },
    },
};
//create a blog swagger documentation

const createBlogs = {
  tags: [
        "Blogs"
    ],
  description: "create a new blog",
  security: [
        {
      token: [],
        },
    ],
  requestBody: {
    content: {
            "multipart/form-data": {
        schema: {
          type: "object",
          properties: {
            title: {
              type: "string",
              description: "Title of the blog",
              example: "Blog Title",
                        },
            picture: {
              type: "string",
              format: "binary",
              description: "Picture",
                        },
            description: {
              type: "string",
              description: "Description of the blog",
              example: "description",
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
              status: "success",
              data: [],
                        },
                    },
                },
            },
        },
    },
};

//update blog swagger documentation
const updateBlog = {
  tags: [
        "Blogs"
    ],
  description: "Update a blog",
  security: [
        {
      token: [],
        },
    ],
  parameters: [
        {
      name: "id",
      in: "path",
      description: "ID of the blog to update",
      required: true,
      type: "string",
        },
    ],
  requestBody: {
    content: {
            "multipart/form-data": {
        schema: {
          type: "object",
          properties: {
            title: {
              type: "string",
              description: "Title of the blog",
              example: "blog Title",
                        },
            picture: {
              type: "string",
              format: "binary",
              description: "Picture",
                        },
            description: {
              type: "string",
              description: "Description of the blog",
              example: "description",
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
            properties: {
              _id: {
                type: "string",
                description: "ID of the updated blog",
                            },
              title: {
                type: "string",
                description: "Title of the updated blog",
                            },
              picture: {
                type: "string",
                description: "Image of the updated blog (url)",
                            },
              description: {
                type: "string",
                description: "Description of the updated article",
                            },
                        },
                    },
                },
            },
        },
    },
};

//delete a blog swagger documentation
const deleteBlog = {
  tags: [
        "Blogs"
    ],
  description: "Delete an article",
  security: [
        { token: []
        }
    ],
  parameters: [
        {
      name: "id",
      in: "path",
      description: "ID of the blog to delete",
      required: true,
      type: "string",
        },
    ],
  responses: {
        204: {
      description: "No Content",
        },
        401: {
      description: "Unauthorized",
        },
        404: {
      description: "Not Found",
        },
    },
};

const blogsRouteDoc = {
    "/api/blogs/": {
    post: createBlogs,
    },
    "/api/blogs/all": {
    get: listOfAllBlogs,
    },
    "/api/blogs/one/{id}": {
    get: getoneblog,
    },
    "/api/blogs/update{id}": {
    put: updateBlog,
    },
    "/api/blogs/{id}": {
    delete: deleteBlog,
    },
};

module.exports= blogsRouteDoc;
