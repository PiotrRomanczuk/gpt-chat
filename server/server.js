// Packages
require('dotenv').config();
require('express-async-errors');
const express = require('express');
const cors = require('cors');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//Routes
const notFoundHandler = require("./routes/notFound");
const chatPrompt = require('./routes/ChatPrompt');

// Users
const User = require("./models/user");
const Register = require('./routes/register');
const Login = require('./routes/Login');
const Delete = require('./controllers/deleteUser');

// DB
const connectDB = require("./config/database")

// Middleware
const errorHandler = require("./middleware/errorHandler");
const savePrompts = require("./middleware/savePrompts");
const auth = require("./middleware/auth");
const DeleteUser = require('./controllers/deleteUser');

// Server
const app = express();
const PORT = 9000;

const startServer = async () => { 
    try {
      await connectDB();  
      app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
      })
    } catch (err) {
        console.log(err)
    }
}

startServer()

app.use(express.json());
app.use(cors());
app.use(errorHandler);

app.get('/', (req, res) => { 
  res.json({ message: 'Hello World!' });
})

app.post('/chatgpt',savePrompts, chatPrompt);

// Register
app.post("/register", Register);

// Login
app.post("/login", Login);

app.post("/welcome", auth, (req, res) => {
  res.status(200).send("Welcome 🙌 ");
});

app.post("/deleteUser", DeleteUser )

app.use("*", notFoundHandler);

module.exports = app;