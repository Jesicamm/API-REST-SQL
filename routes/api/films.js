const router = require('express').Router();

const { Film } = require('../../db');

router.get('/', async(req, res) => {
    const films = await Film.findAll();
    res.json(films);
});

router.get('/:title', async(req, res) => {
    const titleFilm = await Film.findOne(req.body, {
        where: { title: req.params.filmTitle }
    });
    res.json(titleFilm);
});

router.post('/', async(req, res) => {
    const film = await Film.create(req.body);
    res.json(film);
});

router.put('/:filmId', async(req, res) => {
    await Film.update(req.body, {
        where: { id: req.params.filmId }
    });
    res.json({ sucess: 'se ha modificado' })
});

router.delete('/:filmId', async(req, res) => {
    await Film.destroy({
        where: { id: req.params.filmId }
    });
    res.json({ sucess: 'se ha borrado la película' })
});



module.exports = router;