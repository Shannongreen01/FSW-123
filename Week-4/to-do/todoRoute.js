const express = require('express');
const todoRouter = express.Router(); 
const { v4: uuidv4 } = require('uuid');
const morgan = require('morgan');

const todoList = [
    {
        name: "Change oil",
        desc: "Change oil on both cars.",
        time: '30 minutes',
        isCompleted: false,
        _id: uuidv4()
    },
    {
        name: "School work",
        desc: "Begin assignments for this week.",
        time: '2 hours',
        isCompleted: false,
        _id: uuidv4()
    },
    {
        name: "Go grocery shopping",
        desc: "Go to the store and buy stuff.",
        time: '1 hour',
        isCompleted: false,
        _id: uuidv4()
    },
    {
        name: "Go to storage",
        desc: "Take packed boxes to storage.",
        time: '45 minutes',
        isCompleted: false,
        _id: uuidv4()
    }
];

todoRouter
    .get('/', (req, res) => {
        res.send(todoList);
    }) // GET all request (URL /tasks/)

    .get('/find/:taskId', (req, res) => {
        const requestTodo = req.params.taskId;
        const findTodo = todoList.find((task) => task._id === requestTodo);
        res.send(findTodo);
    }) // GET one request (URL /tasks/:taskId)

    .post('/add/', (req, res) => {
        const newTodo = req.body;
        newTodo._id = uuidv4();
        newTodo.isCompleted = false;
        todoList.push(newTodo);
        res.send(`Successfully added ${newTodo.name} to the list.`);
    }) // POST new todo request (URL /tasks/add)

    .put('/update/:taskId', (req, res) => {
        const updateTodo = req.params.taskId;
        const taskIndex = todoList.findIndex((task) => task._id === updateTodo);
        const updatedTask = Object.assign(todoList[taskIndex], req.body);
        res.send('Task was successfully updated.');
    }) // PUT to update task (URL /tasks/update/:taskId)

    .delete('/delete/:taskId', (req, res) => {
        const deleteTodo = req.params.taskId;
        const taskIndex = todoList.findIndex((task) => task._id === deleteTodo);
        todoList.splice(taskIndex, 1);
        res.send('Task has been deleted from list.');
    }) // DELETE task from list (URL /tasks/delete/:taskId)







module.exports = todoRouter;