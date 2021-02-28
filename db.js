const Sequelize = require('sequelize');

const FilmModel = require('./models/films');
const UserModel = require('./models/users');

const sequelize = new Sequelize('xhFFXheBA5', 'xhFFXheBA5', 'qi66nNHnJR', {
    host: 'remotemysql.com',
    dialect: 'mysql'
});

const Film = FilmModel(sequelize, Sequelize);
const User = UserModel(sequelize, Sequelize);

sequelize.sync({ force: false })
    .then(() => {
        console.log('Tablas sincronizadas');
    });

module.exports = {
    Film,
    User
}