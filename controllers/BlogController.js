const blogService = require("../services/BlogService");

exports.getAllBlogs = async (req, res) => {
    try {
        const blogs = await blogService.getAllBlogs();
        res.json({ data: blogs, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createBlog = async (req, res) => {
    try {
        const blog = await blogService.createBlog(req.body);
        res.json({ data: blog, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getBlogById = async (req, res) => {
    try {
        const blog = await blogService.getBlogById(req.params.id);
        res.json({ data: blog, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateBlog = async (req, res,next) => {
    try {
        const article = await blogService.findOne({ _id: req.params.id });
        if (!article) {
            res.json({message:"the article does not exit"});
            
        }
        if (req.file.path) {
            req.body.picture = await uploadFile(req, res, next);
            await deleteFile(article.picture);
        }
        await blogService.updateOne(
            { _id: article._id },
            {
                ...req.body,
            }
        );
        res.status(StatusCodes.OK).json({
            status: StatusCodes.OK,
            message: "blog updated successfully",
            payload: null,
        });
    } catch (err) {
        next(err);
    }
};

exports.deleteBlog = async (req, res, next) => {
    try {
        const article = await blogService.findOne({ _id: req.params.id });
        if (!article) {
             res.json({message:"blog Not found"});
        }
        await blogService.deleteOne({ _id: article._id });
        res.status(StatusCodes.OK).json({
            status: StatusCodes.OK,
            message: "blog deleted successfully",
            payload: null,
        });
    } catch (err) {
        next(err);
    }
};