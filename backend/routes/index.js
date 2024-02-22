const Router = require('express');
const router = new Router();

const userRouter = require('./userRouter');
const fiendRouter = require('./friendRouter');
const userList = require('./userListRouter');

router.use('/user', userRouter);
router.use('/useList', userList);
router.use('/friend', fiendRouter);

module.exports = router;