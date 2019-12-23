const express = require('express')
const router  = express.Router()
const user = require('../controllers/user.controller')
const verifyToken = require('../helpers/verifyToken')


//create a new user

router.post('/users', user.create)
router.get('/users', verifyToken, user.findAll)
router.get('/users/:id', user.findOne)
router.get('/users', user.deleteAll)
router.delete('/users/:id', user.deleteOne)
router.post('/users/:id', user.updateOne)


module.exports = router