const mongoose = require('mongoose');
const TodoSchema = require('../models/todo_models');

// get all todo lists
const getTodos = async (req, res) => {
    try {
        const allTodo = await TodoSchema.find().sort({ createdDate: -1 })
        res.status(200).send(allTodo);
    } catch (error) {
        res.status(400).send(error.message)
        console.error(error);
    }
}

const createTodo = async (req, res) => {
    const todoToAdd = req.body;
    try {
        const newTodo = TodoSchema.create(todoToAdd)
        res.status(200).send(newTodo);
    } catch (error) {
        res.status(500).send(error.message);
        console.error(error);
    }
}

const updateTodo = async (req, res) => {
    const {id} = req.params
    try {
        if(!mongoose.Types.ObjectId.isValid(id)){
            res.status(404).send(`Can't find that id: ${id}`)
        }
        const todoID = {_id: id};
        const update = { completed: true};
        const updateTodo = await TodoSchema.findOneAndUpdate(todoID, update)
        if(!updateTodo){
            res.status(404).send(`Listly could not find ${id}`)
        }
        res.status(201).send(updateTodo);
    } catch (error) {
        res.status(404).send(error.message);
    }
}

const deleteTodo = async(req, res) => {
    const {id} = req.params
    try {
        if(!mongoose.Types.ObjectId.isValid(id)){
           return res.status(404).send(`Listly could not find ${id}`);
        }
        const deleteTodo = await TodoSchema.findOneAndDelete({_id: id});
        res.status(200).send(deleteTodo);
    } catch (error) {
        res.status(500).send('Listly', error.message);
    }
}



module.exports = {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo
}