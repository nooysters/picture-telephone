module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Turn', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    gameId: {
      type: DataTypes.UUID
    },
    userId: {
      type: DataTypes.UUID
    },
    basedOnTurn: {
      type: DataTypes.UUID
    },
    round: {
      type: DataTypes.INTEGER,
      defaultValue: 1
    },
    // DRAW or GUESS
    mode: {
      type: DataTypes.STRING
    },
    entry: {
      type: DataTypes.TEXT
    }
  }, {
    classMethods: {
      associate: function(models) {
        models.Turn.belongsTo(models.User)
        models.Turn.belongsTo(models.Game)
      }
    }
  })
}
