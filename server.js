const express = require('express');
const app = express();
const dotenv = require('dotenv');

dotenv.config();

const namespaceV1 = '/api/v1';
const port = process.env.PORT || 5000;
const isProduction = process.env.PORT === 5000 ? 'develop' : 'production';

// Routes
const games = require('./routes/games');
app.use(namespaceV1 , games);

app.listen(port, console.log(`App stared on port ${port} and is in ${isProduction} mode`));