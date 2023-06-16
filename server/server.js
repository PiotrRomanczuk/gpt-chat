const express = require('express');
require('dotenv').config();
const { Configuration, OpenAIApi } = require('openai');

const app = express();
const port = 9000;

app.use(express.json());

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

app.get('/chatgpt', async (req, res) => {
  try {
    const chatCompletion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
		messages: [
			{ role: 'system', content: 'You are a helpful assistant.' },
			{ role: 'user', content: req.query.message }],
    });

    const response = chatCompletion.data.choices[0].message.content;
    res.json({ response });
  } catch (error) {
    console.error('Failed to process chat request:', error);
    res.status(500).json({ error: 'Failed to process chat request' });
  }
});

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
