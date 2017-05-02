const Sequelize = require('sequelize')
var sequelize = require('../config/database')

const Turn = sequelize.define('Turns', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },

  gameId: {
    type: Sequelize.UUID
  },

  userId: {
    type: Sequelize.UUID
  },

  basedOnTurn: {
    type: Sequelize.UUID
  },

  round: {
    type: Sequelize.INTEGER,
    defaultValue: 1
  },

  // DRAW or GUESS
  mode: {
    type: Sequelize.STRING
  },

  entry: {
    type: Sequelize.TEXT
  },
})


module.exports = Turn