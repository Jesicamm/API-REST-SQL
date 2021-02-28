const router = require('express').Router();

const apiFilmsRouter = require('./api/films');
const apiUserRouter = require('./api/users');

router.use('/films', apiFilmsRouter);
router.use('/users', apiUserRouter);


module.exports = router;