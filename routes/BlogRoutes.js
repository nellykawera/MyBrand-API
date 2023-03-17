const express = require("express");
const {
    getAllBlogs,
    createBlog,
    getBlogById,
    updateBlog,
    deleteBlog,
} = require("../controllers/BlogController");
const { loginRequired } = require("../controllers/userController");
const { protect } = require("../middlewares/auth");

const router = express.Router();

/**
 * @swagger
 * /api/blogs:
 *   post:
 *     tags:
 *       - Blog
 *     summary: create a blog
 *     description: Admin is able to create a blog
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: Authorization
 *         in: header
 *         required: true
 *       - name: title o
 *         description: title of a blog
 *         in: body
 *         required: true
 *     responses:
 *       200:
 *         description: Blog created successfully
 */

/**
 * @swagger
 * /api/blogs/{id}:
 *   get:
 *     tags:
 *       - Blog
 *     summary: get blog by id
 *     description: Returns a single blog
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: blog's id
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: A single blog
 */

/**
 * @swagger
 * /api/blogs/{id}:
 *  put:
 *   tags:
 *    - Blog
 *   summary: update blog
 *   description: update blog
 *   consumes:
 *    - application/json
 *   produces:
 *    - application/json
 *   parameters:
 *    - name: authorization
 *      in: header
 *      required: true
 *    - in: path
 *      name: id
 *      schema:
 *       type: string
 *      required: true
 *      description: id of blog
 *      example: 1
 *    - in: body
 *      name: title
 *      required: true
 *      description: body object
 * 
 *    - in: body
 *      name: description
 *      required: true
 *      description: body object
 *      
 *   requestBody:
 *    content:
 *     application/json:
 *   responses:
 *    200:
 *     description: success
 *     content:
 *      application/json:
 */

/**
 * @swagger
 * /api/blogs/{id}:
 *   delete:
 *     tags:
 *       - Blog
 *     summary: delete a blog
 *     description: Deletes a single blog
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: authorization
 *         in: header
 *         required: true
 *       - name: id
 *         description: blog's id
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Successfully deleted
 */

router.route("/").get(getAllBlogs).post(protect, createBlog);
router.route("/:id").get(getBlogById).put(protect, updateBlog).delete(protect, deleteBlog);

module.exports = router;