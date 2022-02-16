const express = require('express');
const router = express.Router();
const x = require('../functions/lowdb');

router.get('/xbox', (req, res) => {
    res.send('hello');
});

module.exports = router;