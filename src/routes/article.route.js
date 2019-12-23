const express = require('express')
const router  = express.Router()
const article = require('../controllers/article.controller')

router.post('/articles', article.create)


module.exports = router
