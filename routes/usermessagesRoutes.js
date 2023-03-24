const express = require( "express");
// const messageMiddleware "../middlewares/messagevalidation";
const {
    createMessage,
    getAllMessages,
    getMessages,
} = require ("../controllers/userMessages-controller");



const router = express.Router();

// Create message
router.post("", createMessage);

// Get all messages
router.get("/", getAllMessages);

// Get article by id
router.get("/getOne/:id", getMessages);

module.exports =router;
