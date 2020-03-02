const express = require('express');

const router = express.Router();

// rout to root directory 
router.get('/', (req,res) => {
    // res.send('testing router')
    res.sendFile('views/newIndex.html', {
        root: __dirname + '/../'
    })
});

router.get('/javascript', (req,res) => {
    res.sendFile('views/JavascriptPostList.html', {root: __dirname + '/../'})
})

module.exports = router;