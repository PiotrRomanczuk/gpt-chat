const express = require('express');
const app = express();


const path = require('path');
const PORT = process.env.PORT || 9000

const dbPath = path.join(__dirname, './database/users.db');
const startDatabaseConnection = require('../config/sqLiteConnection')



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
      } 
      catch (err) {
          console.log(err)
        }
}
    
module.exports = startServer