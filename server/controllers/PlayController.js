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

    static async getPlayById(req,res){
        const {id} = req.params
        try {
            const play = await Play.getPlayById(id)
            if(play){
                res.status(200).json(play)
            }else{
                res.status(404).json({error: `Country not found`})
            }
        } catch (error) {
            res.status(500).json({error:`Oops something went wrong - ${error}`})
        }
    }

    static async createPlay(req,res){
        const play = req.body
        try {
            const newPlay = await Play.createPlay(play)
            res.status(201).json(newPlay)
        } catch (error) {
            res.status(500).json({Error:`Error - ${error}`})
        }
    }

    static async deletePlay(req,res){
        const {id} = req.params
        try {
            await Play.deletePlay(id)
            res.status(204).end()
        } catch (error) {
            res.status(500).json({Error:`Error code - ${error}`})
        }
    }
}

module.exports = PlayController