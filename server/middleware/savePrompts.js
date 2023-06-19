// Import your database library or ORM
const db = require('../config/database');

const savePrompts = async (req, res, next) => {
  try {
    // Save the request and response to the database
    await db.saveRequest(req.body);
    await db.saveResponse(res.json({ response }));

    // Call the next middleware or route handler
    next();
  } catch (error) {
    console.error('Failed to save request and response:', error);
    res.status(500).json({ error: 'Failed to save request and response' });
  }
};

module.exports = savePrompts;