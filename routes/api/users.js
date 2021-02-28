const router = require('express').Router();
const bcrypt = require('bcryptjs');
const { User } = require('../../db');

router.post('/register', async(req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const user = await User.create(req.body);
    res.json(user);
});

router.post('/login', async(req, res) => {
    const user = await User.findOne({ where: { email: req.body.email } });
    if (user) {
        const equal = bcrypt.compareSync(req.body.password, user.password);
        if (equal) {
            res.json({ succes: 'todo ok' });
        } else {
            res.json({ error: "error en usuario y/o contraseña" });
        }
    } else {
        res.json({ error: 'Error en usuario y/o contraseña' });
    }
});


module.exports = router;