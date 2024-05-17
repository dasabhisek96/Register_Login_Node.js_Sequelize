const Sequelize = require('sequelize')
const db = {}
const sequelize = new Sequelize('register', 'root', '1234', {
  host: 'localhost',
  dialect: 'mysql',
  port:'3306',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db