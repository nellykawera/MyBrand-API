const express = require("express");
const {
    register,
    sign_in
} = require("../controllers/userController");

const router = express.Router()

router.route("/register").post(register);
router.route("/sign_in").post(sign_in);

module.exports = router;