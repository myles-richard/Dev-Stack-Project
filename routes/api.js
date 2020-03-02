const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

//Post Routes
router.get('/posts', ctrl.postcontroller.index);
router.get('/posts/:id', ctrl.postcontroller.show);
router.post('/posts', ctrl.postcontroller.create);
router.put('/posts/:id', ctrl.postcontroller.update);
router.delete('/posts/:id', ctrl.postcontroller.destroy);


module.exports = router; 