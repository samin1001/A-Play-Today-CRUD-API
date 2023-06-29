const express = require('express')
const PlayController = require('../controllers/PlayController')

const router = express.Router()

router.get('/', PlayController.getAllPlays)
router.get('/:id', PlayController.getPlayById)

module.exports = router