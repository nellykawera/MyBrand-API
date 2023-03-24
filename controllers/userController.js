const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { User } = require('../models/User');
const generateToken = require('../helpers/generateToken');


exports.register = async (req, res) => {
  try {
    const {fullName, email, hash_password } = req.body;

    // Validate input data
    if (!fullName || !email || !hash_password) {
      return res.status(400).json({ message: 'Please provide a name, email, and password' });
    }

    // Check if user already exists
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password and create new user
    const hashedPassword = await bcrypt.hash(hash_password, 10);
    const newUser = new User({
      fullName,
      email,
      hash_password: hashedPassword
    });

    await newUser.save();
    return res.status(200).json({ message: 'User registered successfully' });

  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

exports.sign_in = async (req, res) => {
  try {
    const { email, hash_password } = req.body;

    // Validate input data
    if (!email || !hash_password) {
      return res.status(400).json({ message: 'Please provide an email and password' });
    }

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Check if password is correct
    const isMatch = await bcrypt.compare(hash_password, user.hash_password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

   

    // Sign JWT token and return to client
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '24h'
    });

    return res.status(200).json({ token });

  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};
