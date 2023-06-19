const express = require('express');

// const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");


const Register = async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      email,
      password
    } = req.body;

    console.log(req.body);


    // Validate user input
    if (!first_name) {
      console.log("first_name is required")
      res.status(400).send("First Name is required");
      return; 
    }

    if (!(last_name)) {
      res.status(400).send("Last Name is required");
      return; 
    }

    if (!(email)) {
      res.status(400).send("Email is required");
      return; 
    }

    if (!(password)) {
      res.status(400).send("Password is required");
      return; 
    }

    // ----------------------------------------------------------------
    //  Validation password and email logic here 
    // ----------------------------------------------------------------

    // check if user already exist
    // Validate if user exist in our database
    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.status(409).send("User Already Exist. Please Login");
    }

    //Encrypt user password
    // encryptedPassword = await bcrypt.hash(password, 10);
    // encryptedPassword = password;

    // Create user in our database
    const user = await User.create({
      first_name,
      last_name,
      email: email,
      // email: email.toLowerCase(), // sanitize: convert email to lowercase
      password: password,
    });

    // Create token
    const token = jwt.sign(
      { user_id: user._id, email },
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
    console.log(err);
  }
}
 

module.exports = Register;