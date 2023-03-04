const express = require('express');
const router = express.Router();

const { getArticles, getSteamArticles } = require('../controlers/articles')

// Articles
router.get('/articles', getArticles);

// Steam
router.get('/articles/steam', getSteamArticles);

module.exports = router;