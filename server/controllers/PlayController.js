const Play = require('../models/Play')

class PlayController{
    static async getAllPlays(req,res){
        try {
            const data = await Play.getAllPlays()
            res.status(200).json(data)
        } catch (error) {
            console.log(error)
            res.status(500).json({error:`Internal Server Error - ${error}`})
        }
    }
}

module.exports = PlayController