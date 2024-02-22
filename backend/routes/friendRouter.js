const Router = require('express');
const router = new Router();
const friendController = require('../controllers/friendController');

router.post('/', friendController.create);
router.get('/', friendController.getAll);
router.get('/:id', friendController.getOne);

module.exports = router;