const express = require('express');
const router = express.Router();
const games = require('./games');

const baseUrl = '/v1';

// Routes
router.use(baseUrl , games);

module.exports = router;