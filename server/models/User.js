const db = require('../database/db')
const bcrypt = require('bcrypt');

class User {
    static async findByUsername(username, password) {
        const user = await db.query('SELECT * FROM users WHERE username = $1', [username]);
  
      if (user.rows.length> 0) {
        const storedPassword = user.rows[0].pass_word;
        const passwordMatch = await bcrypt.compare(password, storedPassword)
        if (passwordMatch) {
          return { message: 'Login successful' };
        } else {
          return { message: 'Invalid password' };
        }
      } else {
        return { message: 'User not found' };
      }
    }
  }