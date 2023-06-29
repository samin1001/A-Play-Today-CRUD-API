const express = require('express')
const PlayController = require('../controllers/PlayController')
const UserController = require('../controllers/UserController')
const router = express.Router()

router.get('/', PlayController.getAllPlays)
router.get('/:id', PlayController.getPlayById)
router.post('/', PlayController.createPlay)
router.delete('/:id', PlayController.deletePlay)
router.put('/:id', PlayController.updatePlay)
router.post('/register', UserController.register)

module.exports = router