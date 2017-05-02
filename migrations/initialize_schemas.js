const User = require('../models/user_model')
const Game  = require('../models/game_model')
const Turn = require('../models/turn_model')

Turn.sync({ force: true })
Game.sync({ force: true })
User.sync({ force: true })

Game.hasMany(Turn)
User.hasMany(Turn)

Turn.belongsTo(Game)
Turn.belongsTo(User)

Turn.hasOne(Turn, {
  foreignKey: {
    name: 'basedOnTurn'
  }
})