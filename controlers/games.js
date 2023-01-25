const db = require('../services/lowdb');

const getGames = (req, res) => {
    res.json(db.value());
}

module.exports = getGames;