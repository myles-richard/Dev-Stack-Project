const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

//Post Routes
router.get('/posts', ctrl.postcontroller.index);
router.get('/posts/:id', ctrl.postcontroller.show);
router.post('/posts', ctrl.postcontroller.create);
router.put('/posts/:id', ctrl.postcontroller.update);
router.delete('/posts/:id', ctrl.postcontroller.destroy);

//User Routes
router.get('/users/:id', ctrl.usercontroller.show);
router.post('/users', ctrl.usercontroller.create);
router.delete('/users', ctrl.usercontroller.destroy);


module.exports = router; 