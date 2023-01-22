const express = require('express');
const router = express.Router();
const db = require('../functions/lowdb');

router.get('/games', (req, res) => {
    res.json(db.value());
});

module.exports = router;