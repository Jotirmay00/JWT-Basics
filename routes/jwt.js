const express = require('express')

const router = express.Router()

const {login,dashboard} = require('../controller/jwt')

const authmiddleware = require('../middleware/auth')

router.route('/login').post(login)
router.route('/dashboard').get(authmiddleware,dashboard)


module.exports = router

