const steamData = require('../services/fetch/steam');
const Articles = require('../models/articles');

// Get all Articles
const getArticles = async (req, res) => {

    //await Articles.create({title: "test Title"})

   const articles = await Articles.find();

   console.log(articles)

    console.log("HELLOOO!")

    return res.json(articles)
}

// Get Steam Articles
const getSteamArticles = async (req, res) => {
    const data = await steamData();

    return res.json(data)
}

module.exports = { getArticles, getSteamArticles };