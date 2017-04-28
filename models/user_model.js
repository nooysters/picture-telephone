const sequelize = require('sequelize')

const User = sequelize.define('user', {
  uuid: {
    type: Sequelize.STRING
  },
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  }
})

User.sync({ force: true })

module.exports = User