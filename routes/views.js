const express = require('express');

const router = express.Router();

// rout to root directory 
router.get('/', (req,res) => {
    // res.send('testing router')
    res.sendFile('views/log-in.html', {
        root: __dirname + '/../'
    })
});

//Languages page
router.get('/home', (req,res) => {
    res.sendFile('views/mainLanguage.html', {
        root: __dirname + '/../'
    })
})

router.get('/javascript', (req,res) => {
    res.sendFile('views/JavascriptPostList.html', {root: __dirname + '/../'})
})

router.get('/newpost', (req,res) => {
    res.sendFile('views/createPost.html', {root: __dirname + '/../'})
})

module.exports = router;