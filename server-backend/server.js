/******************************
 * Imports Dependencies
 *****************************/

require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3001 ;
const router = require('./controllers/todo');
const { json } = require('express');


/*********************************
 *  Middleware
 *********************************/
app.use(cors());
app.use(express.json());
app.use('/todo', router);
