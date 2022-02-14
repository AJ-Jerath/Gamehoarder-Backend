const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('Hello!');
})

app.listen(port, console.log('App stared on port 5000'));