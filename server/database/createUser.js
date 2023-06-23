const isDatabaseConnected = require('./isDatabaseConnected');

const createUser = async (user) => {
 
    return new Promise((resolve, reject) => {
      
      const user = await new Promise((resolve, reject) => { 
        let {
          user_id,
          username,
          password,
          email } = req.body.user;
      
        if (!user) {
          reject('No user provided.');
          console.log(`User ${user} not provided.`);
        }
      
      )

        if (isDatabaseConnected()) {             
            db.run(
            'INSERT INTO users (user_id, first_name, last_name, email, password) VALUES (?, ?, ?, ?, ?)',
            [
                user.user_id,
                user.first_name,
                user.last_name,
                user.email,
                user.password
            ],
            function (err) {
                if (err) {
                reject(err);
                } else {
                console.log(`User ${this.lastID} inserted.`);
                resolve(this.lastID);
                }
            }
            );
      } else {
        reject('Database is not connected.');
    }
  
  //   const user = {
  //       user_id: '123',
  //       first_name: 'John',
  //       last_name: 'Doe',
  //       email: 'john.doe@example.com',
  //       password: 'encryptedPassword'
  //   };
    
        
  //   createUser(user)
  // .then((userId) => {
  //   console.log('User created with ID:', userId);
  // })
  // .catch((err) => {
  //   console.error('Error creating user:', err);
  // });
        
    });
}

module.exports = createUser;