const Articles = require('../models/articles');

const getArticles = async (req, res) => {

    //await Articles.create({title: "test Title"})

   const articles = await Articles.find();

   console.log(articles)

    console.log("HELLOOO!")

    return res.json(articles)
}

module.exports = getArticles;