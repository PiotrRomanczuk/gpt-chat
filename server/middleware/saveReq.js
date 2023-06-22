// Import your database library or ORM
const db = require('../config/MongoDBConnection');
const chatPrompt = require('../controllers/chatPrompt');

const prompt = require('../models/prompt')

const saveReq = async (req, res, next) => {
  try {
    // Save the request and response to the database
    
    const request = req.body.content;

    const promptToSave = await prompt.create({
      prompt_req: request
    });


    next();
  } catch (error) {
    console.error('Failed to save request and response:', error);
    res.status(500).json({ error: 'Failed to save request and response' });
  }
};

module.exports = saveReq;