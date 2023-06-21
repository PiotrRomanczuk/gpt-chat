const express = require('express');

// const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");


const Register = async (req, res) => {
  try {
    const {
      first_name: FN,
      last_name: LN,
      email: EM,
      password: PS
    } = req.body;


    // Create user in our database
    const user = await User.create({
      email: email.toLowerCase(), // sanitize: convert email to lowercase
      password
    });

    // Create token
    const token = jwt.sign(
      { user_id: user._id, EM },
      // process.env.TOKEN_KEY,
      {
        expiresIn: "2h",
      }
    );
    // save user token
    user.token = token;

    // return new user
    res.status(201).json(user);
  } catch (err) {
    console.log(`Error: ${err}`);
  }
}
 

module.exports = Register;