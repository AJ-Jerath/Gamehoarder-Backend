const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    title: String, 
    url: String, 
    description: String, 
    imgUrl: String, 
    categories: String, 
    publishedAt: String,
    article: {
        title: String,
        textContent: String,
        imgUrl: String,
        description: String
    }
});

module.exports = mongoose.model('Articles', articleSchema);