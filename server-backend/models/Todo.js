/*************************************
 * Todo Schema
 ************************************/
const { Schema, model } = require('./connection')

const toDoListData = [
    {
      title: "Learn more about React",
      completed: true
    },
    {
      title: "Write a new Component",
      completed: false
    },
    {
      title: "Add some style",
      completed: false
    },
    {
        timestamps: true
    }
  ];

  module.exports = model('Todo', toDoListData);