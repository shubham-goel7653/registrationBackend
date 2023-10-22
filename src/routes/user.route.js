const express = require('express')
const router = express.Router()
const user = require('../controllers/user.controller')
const userMiddleware = require('../middleware/user.middleware')

router.post('/indexx',userMiddleware.validateCreateUser, user.createUser)
module.exports = router