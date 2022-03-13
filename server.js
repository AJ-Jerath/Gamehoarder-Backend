const express = require('express');
const app = express();
const dotenv = require('dotenv');
require('./functions/cron');

dotenv.config();
const port = process.env.PORT || 5000;
const isProduction = process.env.PORT === 5000 ? 'develop' : 'production';

const games = require('./routes/games');

// Routes
app.use('/games', games);

app.listen(port, console.log(`App stared on port ${port} and is in ${isProduction} mode`));