const express = require('express');

const router = express.Router();

// rout to root directory 
router.get('/', (req,res) => {
    res.send('testing router')
    // res.sendFile('views/index.html', {
    //     root: __dirname + '/../'
    // })
});

module.exports = router;