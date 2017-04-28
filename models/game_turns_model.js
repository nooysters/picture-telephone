const sequelize = require('sequelize')

const GameTurn = sequelize.define('game_turns', {
  uuid: {
    type: Sequelize.STRING
  },
  game_id: {
    type: Sequelize.STRING
  },
  user_id: {
    type: Sequelize.STRING
  },
  round: {
    type: Sequelize.STRING
  },
  mode: {
    type: Sequelize.STRING
  },
  entry: {
    type: Sequelize.STRING
  },
  result: {
    type: Sequelize.STRING
  },
  timer_mode: {
    type: Sequelize.STRING
  },
  topic_mode: {
    type: Sequelize.STRING
  }
})

User.sync({ force: true })

module.exports = GameTurn