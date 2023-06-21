const User = require("../models/user");

const RegisterNew = async (req, res) => { 

    try {
        const { first_name, last_name, email, password } = req.body;

        console.log(first_name)
        console.log(last_name)
    
        if (!first_name) { 
            console.log('First name is required')
            return res.status(400).json({ error: 'First name is required' })
        }

        if (!last_name) { 
            console.log('Last name is required')
            return res.status(400).json({ error: 'Last name is required' })
         }

        // if (!email) {
        //     console.log('Email is required')
        //     return res.status(400).json({ error: 'Email is required' })
        // }
    
        // if (!password) { 
        //     console.log('Password is required')
        //     return res.status(400).json({ error: 'Password is required' })
        // }


        const user = await User.create({
            first_name: first_name,
            last_name: last_name,
            email: email, // sanitize: convert email to lowercase
            password: password,
        });

        console.log("User created")


    } catch (err) { 
        console.log(err);
        return res.status(500).json({ error: err.message });
    }
    


}

module.exports = RegisterNew