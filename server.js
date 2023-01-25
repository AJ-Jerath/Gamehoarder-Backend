const express = require('express');
const app = express();
const { port, isProduction } = require('./config/env')
const routes = require('./routes/index');


const test = async () => {
    const data = await require('./services/fetch/comicbookmovie')();
    
   console.log(data);
}

test();
// Routes
app.use(routes)

// Intilize
app.listen(port, console.log(`App stared on port ${port} and is in ${isProduction} mode`));