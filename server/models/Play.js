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

    static async createPlay(play){
        const {play_name, price, date_time_played, duration, cover_photo} = play
        const query = 'INSERT INTO theatre_plays (play_name, price, date_time_played, duration, cover_photo) VALUES ($1, $2, $3, $4, $5) RETURNING *'
        const values = [play_name, price, date_time_played, duration, cover_photo]
        const {rows} = await db.query(query, values)
        return rows[0]
    }
}

module.exports = Play