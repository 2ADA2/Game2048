const Router = require('express');
const router = new Router();
const userList = require('../controllers/userListController');

router.post('/', userList.create);
router.get('/', userList.getList);

module.exports = router;