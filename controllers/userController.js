'use strict';
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const { User } = require("../models/User");
const generateToken = require('../helpers/generateToken');


exports.register = async (req, res) => {
    let newUser = new User(req.body);
    newUser.hash_password = bcrypt.hash(req.body.password, 10);

    try {
        let createdUser = await newUser.save()
        createdUser.hash_password = undefined
        res.status(200).json(createdUser)
    } catch (error) {
        console.log(error);
        res.status(400).json(error)
    }
};

exports.sign_in = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email })

        if (!user || !user.comparePassword(req.body.password)) {
            return res.status(401).json({ message: 'Authentication failed. Invalid user or password.' });
        }

        return res.json({ token: generateToken(user._id) });

    } catch (error) {
        console.log(error)
        res.status(400).json(error)
    }
};