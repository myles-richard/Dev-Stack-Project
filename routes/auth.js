const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');
router.get('/auth', ctrl.authcontroller.auth)
// router.post('/create', ctrl.authcontroller.create)
// router.post('/login', ctrl.authcontroller.login)

module.exports = router;