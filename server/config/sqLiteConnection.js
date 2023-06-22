const sqlite3 = require('sqlite3').verbose();

function startDatabaseConnection(dbPath) {
  return new Promise((resolve, reject) => {
    const db = new sqlite3.Database(dbPath, (err) => {
      if (err) {
        reject(err);
      } else {
        console.log('Connected to the database.');
        resolve(db);
      }
    });
  });
}


module.exports = startDatabaseConnection;