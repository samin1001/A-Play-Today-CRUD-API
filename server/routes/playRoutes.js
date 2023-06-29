const express = require('express')
const PlayController = require('../controllers/PlayController')

const router = express.Router()

router.get('/', PlayController.getAllPlays)

module.exports = router