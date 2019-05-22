const router = require('express').Router();
const User = require('../data/helpers/users');

router.post('/', (req, res, next) => {
    const { name, email, imageURL } = req.body
    const fbID = req.user;
    User.createNewOrFetchExistingUser({fbID, name, email, imageURL}).then(user => {
        res.status(200).json(user);
    }).catch((err) => {
        console.log(err);
        res.status(500).json("Could not authorize user");
    });
})



module.exports = router;