const express = require('express')
const router = express.Router()
const controller = require('../controller/controller')

router.get('/', controller.showindex)

router.post('/add-todo', controller.addAllTodo)

module.exports = router