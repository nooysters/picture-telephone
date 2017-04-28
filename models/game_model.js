const sequelize = require('sequelize')

const Game = sequelize.define('games', {
  uuid: {
    type: Sequelize.STRING
  },
  playerQueue: {
    type: Sequelize.STRING
  },
  current_round_mode: {
    type: Sequelize.STRING
  },
  current_round: {
    type: Sequelize.STRING
  }
})

User.sync({ force: true })

module.exports = Game