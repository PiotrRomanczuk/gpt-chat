const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { Configuration, OpenAIApi } = require('openai');

const app = express();
const port = 9000;

app.use(express.json());
app.use(cors());

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);


app.get('/', (req, res) => { 
  res.json({ message: 'Hello World!' });
})

app.get('/chatgpt', async (req, res) => {
  try {
    const chatCompletion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
    
        // Content has to be a parameter from the input field of client
      
			{ role: 'system', content: 'tell me something funny.' },
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


app.get('/chatgpt', async (req, res) => {
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



app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
