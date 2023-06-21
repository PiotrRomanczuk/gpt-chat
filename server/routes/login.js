const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Login = async (req, res) => {

  try {

    const { email, password } = req.body;

    if (!(email && password)) {
      res.status(400).send("All input is required");
    }

    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {

      // Create token
      const token = jwt.verify(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "1m",
        }
      );
      
      
      // save user token
      user.token = token;

      // Send user object as response
      console.log("User logged in");
      return res.status(200).json(user);
}

      // Invalid credentials response
    return res.status(400).send("Invalid Credentials");
    
        } catch (err) {
          console.log(err);
        }
}

module.exports = Login;