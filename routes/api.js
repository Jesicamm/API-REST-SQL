const router = require('express').Router();

const apiFilmsRouter = require('./api/films');
router.use('/films', apiFilmsRouter);


module.exports = router;