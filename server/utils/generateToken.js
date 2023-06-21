const jwt = require("jsonwebtoken");
require("dotenv").config();

const generateToken = (user) => {
  const payload = {
    email: user.email,
    userId: user.user_id
  };

  const privateKey = process.env.TOKEN_KEY;

  const token = jwt.sign(payload, privateKey, {
    expiresIn: "1h"
  });

  return token;
};



module.exports = generateToken;