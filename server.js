const express = require('express');
const app = express();
const connectMongoDB = require('./config/mongoose');
const routes = require('./routes/index');
const { port, isProduction } = require('./config/env')

// Intilize DB
connectMongoDB();

// Routes
app.use(routes)

// Intilize
app.listen(port, console.log(`App stared on port ${port} and is in ${isProduction} mode`));