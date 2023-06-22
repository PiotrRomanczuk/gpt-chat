const User = require("../models/user");
const bcrypt = require("bcryptjs");

const generateToken = require('../utils/generateToken')

const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });

    if (!user) {
      console.log('User does not exist');
      return res.status(401).json({ message: "Authentication failed. User does not exist." });
    }

    // Compare passwords
    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      console.log('Invalid password');
      return res.status(401).json({ message: "Authentication failed. Invalid password." });
    }

    // Successful login
    return res.status(200).json({
      message: "Authentication successful. Welcome!",
      token: generateToken(user)
    });

  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: err.message });
  }
};




module.exports = Login;
