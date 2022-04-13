/******************************
 *  Imports Dependencies
 *****************************/
require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3001 ;
const router = require('./controllers/todo');



/*********************************
 *  Middleware
 *********************************/
app.use(cors());
app.use(express.json());
app.use('/todos', router);


/*********************************
 *  Listening PORT
 *********************************/
app.listen(PORT, () => {
    `I am running on PORT: ${PORT}`;
})