const express = require('express');
const router = express.Router();
const Group = require('mongoose').model('Group');

router.post('/', async (req, res, next) => {
    const { name, emails, purpose, code  } = req.body
    const group = new Group({
        name,
        emails,
        purpose,
        sCode: code
    })
    const groupCreated = await group.save();
    try {
        const groupID = groupCreated.id;
        console.log(groupID);
        // send email using SendGrid
    } catch (error) {
        console.log(err);
    }
    res.status(200).json({message: 'Welcome', groupCreated})
})


module.exports = router;