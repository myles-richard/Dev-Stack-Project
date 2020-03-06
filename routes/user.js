const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');



//User Routes
router.get('/', ctrl.usercontroller.index);
router.post('/create', ctrl.usercontroller.create);
router.delete('/:id', ctrl.usercontroller.destroy);

//Auth routes
// router.get('/login', ctr)


module.exports = router; 