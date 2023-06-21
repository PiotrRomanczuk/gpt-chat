const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const fs = require("fs");
const writeToFile = require("../controllers/writeToFile");

const Register = async (req, res) => { 

    try {
        const { first_name, last_name, email, password } = req.body;

        const user_id = Math.floor(Math.random() * 10000)

        const oldUser = await User.findOne({ email });

        if (oldUser) {
            console.log('User already exists')
            return res.status(409).send("User Already Exist. Please Login");
        }


        if (!first_name) { 
            console.log('First name is required')
            return res.status(400).json({ error: 'First name is required' })
        }

        if (!last_name) { 
            console.log('Last name is required')
            return res.status(400).json({ error: 'Last name is required' })
         }

        if (!email) {
            console.log('Email is required')
            return res.status(400).json({ error: 'Email is required' })
        }
    
        if (!password) { 
            console.log('Password is required')
            return res.status(400).json({ error: 'Password is required' })
        }

        encryptedPassword = await bcrypt.hash(password, 10);

        //Creating user in database

        const user = await User.create({
            user_id: user_id,
            first_name: first_name,
            last_name: last_name,
            email: email,
            password: encryptedPassword, //
        });

        console.log("User created")
        
        // Creating Token in database
        
        const token = jwt.sign(
            { user_id: user._id, email: user.email },
            process.env.TOKEN_KEY,
            {
                expiresIn: "1m",
            }
            );
        // save user token
        
        //     const userIdString = user_id.toString();
        //     const userTokenString = user.token.toString();

        // console.log(userIdString + userTokenString)

        // writeToFile('../files/token.txt', userIdString + userTokenString)
        // writeToFile(token.toString())
        
        user.token = token;
        
    
            
            return res.status(201).json(user);

    } catch (err) { 
        console.log(err);
        return res.status(500).json({ error: err.message });
    }
    

}

module.exports = Register