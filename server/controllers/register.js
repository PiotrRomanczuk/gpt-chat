// const User = require("../models/user"); // MongoDBSchema - unused
const bcrypt = require("bcryptjs");


const Register = async (req, res) => { 

    try {
        const { first_name, last_name, email, password } = req.body;

        const user_id = Math.floor(Math.random() * 10000)

        // Checjking for existing user
        const oldUser = await User.findOne({ email });

        if (oldUser) {
            console.log('User already exists')
            return res.status(409).send("User Already Exist. Please Login");
        }

        // Checking for required fields
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

        // Encrypting password
        encryptedPassword = await bcrypt.hash(password, 10);

        //Creating user in database
 
        const user = await User.create({
            user_id: user_id,
            first_name: first_name,
            last_name: last_name,
            email: email,
            password: encryptedPassword, //
        });
        
            return res.status(201).json(user);

    } catch (err) { 
        console.log(err);
        return res.status(500).json({ error: err.message });
    }
    

}

module.exports = Register