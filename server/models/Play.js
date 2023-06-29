const db = require('../database/db')

class Play{

    static async getAllPlays(){
        const query = 'SELECT * FROM theatre_plays'
        const {rows} = await db.query(query)
        return rows
    }

    static async getPlayById(id){
        const query = 'SELECT * FROM theatre_plays WHERE play_id = $1'
        const {rows} = await db.query(query,[id])
        return rows[0]
    }
}

module.exports = Play