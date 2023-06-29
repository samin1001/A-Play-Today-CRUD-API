const express = require('express')
const PlayController = require('../controllers/PlayController')

const router = express.Router()

router.get('/', PlayController.getAllPlays)
router.get('/:id', PlayController.getPlayById)
router.post('/', PlayController.createPlay)
router.delete('/:id', PlayController.deletePlay)


module.exports = router