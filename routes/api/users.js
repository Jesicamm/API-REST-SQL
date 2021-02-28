const router = require('express').Router();
const bcrypt = require('bcryptjs');
const { User } = require('../../db');

router.post('/register', async(req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const user = await User.create(req.body);
    res.json(user);
});


module.exports = router;