const express = require('express');
const router = express.Router();

router.get('/xbox', (req, res) => {
    res.send('hello');
});

module.exports = router;