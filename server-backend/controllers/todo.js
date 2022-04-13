/*
    Imports Routers 
*/
const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

/*****************************************************/
/*
    C-R-U-D
    Create, Read, Update, Delete
*/
/****************************************************/
/****************************************************************************************
 *  Read route -  GET `/` route that finds and returns everything in the todo database
 *****************************************************************************************/
router.get('/', ( req, res ) => {
    Todo.find({}, (err , foundTodo) => {
        if(!err) {
            res.status(200).json(foundTodo);
        }else {
            res.status(400).json(err);
        }
    });
});




/****************************************************************
 *  Create route - POST route to create a todo using  req.body
 *  return a status and the created todo
 ***************************************************************/
router.post('/', ( req, res ) => {
    const { body } = req;

    Todo.create(body, ( err, createdTodo) => {
        if(!err){
            res.status(200).json({ message: 'You\ve created your Todo', createdTodo: createdTodo });
        }else {
            res.status(400).json(err);
        }
    })
})

module.exports = router;