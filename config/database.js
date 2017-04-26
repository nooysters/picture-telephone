// Database configuration
const Sequelize = require('sequelize')

const db = new Sequelize('postgres://localhost:5432/picture_telephone_dev')

db.authenticate()
  .then(() => { console.log('the connection was successful') })
  .catch(err => { console.log(err) }) 

module.exports = db