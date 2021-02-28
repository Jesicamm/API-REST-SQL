module.exports = (sequelize, type) => {
    return sequelize.define('user', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: type.STRING,
        surname: type.STRING,
        email: type.STRING,
        password: type.STRING,
        birthDate: type.INTEGER,
        country: type.STRING,
        phoneNumber: type.STRING,
        adress: type.STRING,
        genre: {
            type: type.STRING,
            enum: ['Male', 'Female']
        },
        payMethod: {
            type: type.STRING,
            enum: ['Visa', 'Mastercard', 'PayPal', 'Bizum']
        }
    });
};