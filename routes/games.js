const express = require('express');
const router = express.Router();
const x = require('../games/scrapers/xbox');

router.get('/xbox', (req, res) => {
    res.send('hello');
});

module.exports = router;