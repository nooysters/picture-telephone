const Sequelize = require('sequelize')
var sequelize = require('../config/database')

const Game = sequelize.define('Games', {
  id: {
    type: Sequelize.UUID,   
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },

  /**
   * The order the players pass drawings or topics.
   * String of player ids. Moves from left to right.
   * [1, 2, 3] Player1 entry goes to player 2
   * Player3 entry goes to Player1.
   * When a player has its own entry (second time) the game is over.
   */
  playerSequence: {
    type: Sequelize.ARRAY(Sequelize.UUID),
    allowNull: false
  },

  // DRAW or GUESS
  currentRoundMode: {
    type: Sequelize.STRING
  },

  currentRound: {
    type: Sequelize.INTEGER,
    defaultValue: 1
  },

  // Game settings
  // Amount of time per turn in seconds.
  drawTimeMode: {
    type: Sequelize.INTEGER,
    defaultValue: 300
  },

  guessTimeMode: {
    type: Sequelize.STRING,
    defaultValue: 300
  },

}, {

  instanceMethods: {

    getNextPlayer: function getNextPlayer(playerId) {
      return null;
    },

    getNumRounds: function getNumRounds() {
      return null;
    },

  }
})

module.exports = Game
