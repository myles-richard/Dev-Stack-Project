const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/', ctrl.postcontroller.index);
router.get('/:id', ctrl.postcontroller.show);
router.post('/create', ctrl.postcontroller.create);
router.put('/:id', ctrl.postcontroller.update);
router.delete('/:id', ctrl.postcontroller.destroy);

module.exports = router;