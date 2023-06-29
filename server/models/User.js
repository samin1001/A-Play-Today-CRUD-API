const db = require('../database/db')

class User{

    static async create(user){
        const {username, pass_word } = user
        const query = 'INSERT INTO users (username, pass_word) VALUES ($1, $2) RETURNING *'
        const values = [username, pass_word]
        const {rows} = await db.query(query, values)
        return rows[0]
    }
}

module.exports = User