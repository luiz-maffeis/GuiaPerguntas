const Sequelize = require('Sequelize');
const connection = new Sequelize('guiaperguntas', 'root', 'Love0106', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection;