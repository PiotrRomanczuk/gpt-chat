const sqlite3 = require('sqlite3').verbose();

// create a new database in memory
let db = new sqlite3.Database(':memory:');

// create a table to store chat data
db.run('CREATE TABLE chat (id INTEGER PRIMARY KEY AUTOINCREMENT, req TEXT, res TEXT)');

const saveChatData = (req, res) => {
  // insert chat data into the table
  db.run(`INSERT INTO chat (req, res) VALUES ('${req}', '${res}')`, function(err) {
    if (err) {
      return console.log(err.message);
    }
    console.log(`Chat data recorded with ID ${this.lastID}`);
  });
};

// example usage
app.get('/chat', (req, res) => {
  const prompt = req.query.prompt;
  // call GPT API with prompt and get response
  const response = gptChat(prompt);
  // save chat data into database
  saveChatData(prompt, response);
  // send GPT response to client 
  res.send(response);
});