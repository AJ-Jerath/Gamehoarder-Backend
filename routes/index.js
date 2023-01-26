const express = require('express');
const router = express.Router();

const baseUrl = '/v1';

// Routes
const games = require('./games');
const articles = require('./articles');

// Games
router.use(baseUrl , games);

// Articles
router.use(baseUrl , articles);

module.exports = router;