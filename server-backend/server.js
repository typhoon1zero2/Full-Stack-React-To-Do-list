/******************************
 * Import Dependencies
 *****************************/

require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3001 ;
const router = require('./controllers/todo')
