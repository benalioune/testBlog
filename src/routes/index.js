const express = require('express');
const router = express.Router();
const userRouter = require('./user.route');
const authRouter = require('./auth.route');
const articleRouter = require('./article.route')

router.use(userRouter);
router.use(authRouter);
router.use(articleRouter)


module.exports = router;