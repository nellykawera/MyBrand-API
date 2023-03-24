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



router.route("/all").get(getAllBlogs)
router.route("/").post(protect, createBlog);
router.route("/one/:id").get(getBlogById);
router.route("/update/:id").put(protect, updateBlog);
router.route("/:id").delete(protect, deleteBlog);

module.exports = router;