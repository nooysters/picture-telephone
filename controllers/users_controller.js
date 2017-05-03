const app = require('express')()
const User = require('../models').User

exports.userCreate = (req, res, next) => {
  const { firstName, lastName } = req.body

  User.create({ firstName, lastName })
    .then((response) => (
      res.send(response)
    ))
    .catch((error) => {
      console.log(error)
      next()
    })
}

exports.userUpdate = (req, res, next) => {
  const allowedUpdateAttributes = ['firstName', 'lastName']
  const body = allowedUpdateAttributes.reduce((memo, value) => {
    if(body[value]) {
      memo[value] = body[value]
    }
  }, {})

  User.update({id: req.params.id, })
    .then((response) => (
      res.send(response)
    ))
    .catch((error) => {
      console.log(error)
      next()
    })
}

exports.getAllUsers = (req, res, next) => {
  User.findAll()
    .then((response) => (
      res.send(response)
    ))
    .catch((error) => {
      console.log(error)
      next()
    })
}

exports.getUserById = (req, res, next) => {
  User.findById(req.params.id)
    .then((response) => (
      res.send(response)
    ))
    .catch((error) => {
      console.log(error)
      next()
    })
}