const db = require('../database/db')

class Play{

    static async getAllPlays(){
        const query = 'SELECT * FROM theatre_plays'
        const {rows} = await db.query(query)
        return rows
    }
}

module.exports = Play