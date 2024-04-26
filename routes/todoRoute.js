const express = require('express');
const router = express.Router();
const TodoController = require('../controllers/todoController')

router.get('/', TodoController.getTodos)
router.post('/', TodoController.createTodo)
router.put('/:id', TodoController.updateTodo)
router.delete('/:id', TodoController.deleteTodo)

module.exports = router;