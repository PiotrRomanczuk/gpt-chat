// Packages
require('dotenv').config();
require('express-async-errors');
const express = require('express');
const cors = require('cors');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const path = require('path');

//Routes
const notFoundHandler = require("./routes/notFound");
const chatPrompt = require('./controllers/chatPrompt');

// Users
const User = require("./models/user");
const Register = require('./controllers/register');
const Login = require('./controllers/Login');
const Delete = require('./controllers/deleteUser');

// DB
const startDatabaseConnection = require("./config/sqLiteConnection"); // SQlite Connection
const dbPath = path.join(__dirname, './database/users.db');

// const connectDB = require("./config/MongoDBConnection") // MongoDB Connection - unused


// Middleware
const errorHandler = require("./middleware/errorHandler");
const savePrompt = require("./controllers/savePrompt");
const auth = require("./middleware/auth");
const DeleteUser = require('./controllers/deleteUser');

// Server
const app = express();
const PORT = 9000;

const startServer = async () => { 
    try {
      startDatabaseConnection(dbPath)
          .then((db) => {
            db.all('SELECT * FROM users', (err, rows) => {
              if (err) {
                console.error(err.message);
              } else {
                console.log(rows);
              }
            });
          })
        
          .catch((err) => {
            console.error('Error connecting to the database:', err);
          });  
          
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

app.post('/chatgpt', chatPrompt);

// Register
app.post("/register", Register);

// Login
app.post("/login", Login);

app.post("/welcome", auth, (req, res) => {
  res.status(200).send("Welcome 🙌 ");
});

// app.get('/users/:id', (req, res) => {
//   const userId = req.params.id;

//   // Assuming your user model is called "User"
//   User.findOne({ model: 'user', _id: userId }, (err, user) => {
//     if (err) {
//       console.error('Error finding user:', err);
//       return res.status(500).json({ error: 'Internal server error' });
//     }

//     if (!user) {
//       return res.status(404).json({ error: 'User not found' });
//     }

//     return res.json(user);
//   });
// });


app.post("/deleteUser", DeleteUser )

app.use("*", notFoundHandler);

module.exports = app;