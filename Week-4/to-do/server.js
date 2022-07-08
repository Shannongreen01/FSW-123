const express = require('express'); 
const morgan = require('morgan');
const { url } = require('inspector');
const { v4: uuidv4 } = require('uuid');
const todoRouter = require('./routes/todoRoute');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/tasks', todoRouter);




app.listen(PORT, () => {
    console.log('Server started on port: 3000!')
});
