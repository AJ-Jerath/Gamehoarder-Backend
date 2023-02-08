const express = require('express');
const app = express();
const connectMongoDB = require('./config/mongoose');
const { port, isProduction } = require('./config/env')

// Imports
const routes = require('./routes');
const services = require('./services');

// Intilize DB
connectMongoDB();

// Routes
app.use(routes)

// Intilize
app.listen(port, console.log(`App stared on port ${port} and is in ${isProduction} mode`));