module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Game', {
    id: {
      type: DataTypes.UUID,   
      defaultValue: DataTypes.UUIDV4,
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
      type: DataTypes.ARRAY(DataTypes.UUID),
      allowNull: false
    },
    // DRAW or GUESS
    currentRoundMode: {
      type: DataTypes.STRING
    },
    currentRound: {
      type: DataTypes.INTEGER,
      defaultValue: 1
    },
    // Game settings
    // Amount of time per turn in seconds.
    drawTimeMode: {
      type: DataTypes.INTEGER,
      defaultValue: 300
    },
    guessTimeMode: {
      type: DataTypes.STRING,
      defaultValue: 300
    },
  }, {
    instanceMethods: {
      getNextPlayer: function getNextPlayer(playerId) {
        return null;
      },
      getNumRounds: function getNumRounds() {
        return null;
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        models.Game.hasMany(models.Turn)
      }
    }
  })
}

