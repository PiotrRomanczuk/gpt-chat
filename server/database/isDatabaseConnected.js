const path = require('path');
const startDatabaseConnection = require("./config/sqLiteConnection")

// const dbPath = path.join(__dirname, './database/users.db');

const isDatabaseConnected = (dbPath) => {
  return new Promise((resolve, reject) => {
    startDatabaseConnection(dbPath)
      .then((db) => {
        db.all('SELECT 1', (err) => {
          if (err) {
            resolve(false); // Connection failed
        } else {
            resolve(true); // Connection successful
        }
        });
      })
      .catch(() => {
        resolve(false); // Connection failed
    });
});
}


module.exports = isDatabaseConnected;