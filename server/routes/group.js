const express = require('express');
const router = express.Router();
const Group = require('mongoose').model('Group');

router.get('/', (req, res, next) => {
    Group.find().then((groups) => {
        res.status(200).json({message: 'Welcome', groups})
    }).catch((err) => {
        console.log(err);
    });
})


router.post('/new', (req, res, next) => {
})

module.exports = router;