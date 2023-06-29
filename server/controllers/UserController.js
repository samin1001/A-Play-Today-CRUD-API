const bcrypt = require('bcrypt')
const User = require('../models/User')

class UserController {
    static async register(req, res) {
        try {
            const data = req.body
            const salt = await bcrypt.genSalt(parseInt(process.env.BCRYPT_SALT_ROUNDS))

            data["pass_word"] = await bcrypt.hash(data["pass_word"],salt)

            const result = await User.create(data)
            res.status(201).send(result)
        } catch (err) {
            res.status(400).json({"Error":err.message})
            
        }
    }
}    

module.exports = UserController;

