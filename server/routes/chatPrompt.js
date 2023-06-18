const express = require('express');
const router = express.Router();

const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);


const chatPrompt = async (req, res) => {
  
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
}

module.exports = chatPrompt;