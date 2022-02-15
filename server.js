const express = require('express');
const app = express();
const port = 5000;

const games = require('./routes/games');

// Routes
app.use('/api/games', games);

app.listen(port, console.log('App stared on port 5000'));
