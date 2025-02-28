require('express-async-errors');
const express = require('express');
const routes = require('./routes/index.js')
const cors = require('cors');
const errorHandler = require('./middleware/errorHandler.js')
const cookieParser = require('cookie-parser');
 
// middleware
const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// routes
app.use("/api/v1", routes); 

// error handling middleware
app.use(errorHandler);

module.exports = app        