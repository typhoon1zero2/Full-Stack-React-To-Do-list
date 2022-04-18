/*************************************
 * Todo Schema
 ************************************/
const { Schema, model } = require('./connection')

const toDoListData = Schema({
    entry: {
        required: true,
        type: String
    },
    status: {
        type: String,
        required: true,
        default: 'TO-DO',
        enum: ['TO-DO', 'IN-PROGRESS', 'DONE'],
    }
},
{
    timestamps: true
}

)

  module.exports = model('Todo', toDoListData);