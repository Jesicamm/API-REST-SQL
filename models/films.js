module.exports = (sequelize, type) => {
    return sequelize.define('film', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        tittle: type.STRING,
        description: type.STRING,
        year: type.INTEGER,
        director: type.STRING,
        country: type.STRING,
        poster: type.STRING,

        genre: {
            type: type.STRING,
            enum: ['Drama', 'Fantasy', 'Sci-Fi', 'Thriller', 'Comedy'],
        },
        adult: {
            type: type.BOOLEAN,
            default: false
        },
    });
};