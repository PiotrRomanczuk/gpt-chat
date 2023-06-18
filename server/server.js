// Packages
const express = require('express');
require('dotenv').config();
const cors = require('cors');
const auth = require("./middleware/auth");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//Routes
const notFoundHandler = require("./routes/notFound");
const chatPrompt = require('./routes/ChatPrompt');
const Register = require('./routes/register');
const Login = require('./routes/login');

// DB
const connectDB = require("./config/database")
const User = require("./models/user");

// OpenAI API
const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

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


app.get('/', (req, res) => { 
  res.json({ message: 'Hello World!' });
})

app.get('/chatgpt', async (req, res) => {
  try {
    const chatCompletion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'tell me something funny.'
        },
			],
    });

	  const response = chatCompletion.data.choices[0].message.content;
	  console.log(response)
    res.json({ response });
  } catch (error) {
    console.error('Failed to process chat request:', error);
    res.status(500).json({ error: 'Failed to process chat request' });
  }
});

app.post('/chatgpt', async (req, res) => {
  
  try {
    const { content } = req.body;

    const chatCompletion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content },
      ],
    });

    const response = chatCompletion.data.choices[0].message.content;
    console.log(response);
    res.json({ response });
  } catch (error) {
    console.error('Failed to process chat request:', error);
    res.status(500).json({ error: 'Failed to process chat request' });
  }
});

// Register
app.post("/register", Register);

// Login
app.post("/login", Login);

app.post("/welcome", auth, (req, res) => {
  res.status(200).send("Welcome 🙌 ");
});

app.use("*", notFoundHandler);

module.exports = app;