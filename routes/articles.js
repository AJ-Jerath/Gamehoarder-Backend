const express = require('express');
const router = express.Router();

const getArticles = require('../controlers/articles')

// Articles
router.get('/articles', getArticles);

module.exports = router;