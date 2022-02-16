const xbox = require('./scrapers/xbox');
const lowDb = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');


const db = lowDb(new FileSync('./lowdb/games.json'));

xbox().then((res) => {
    db.defaults(res).write()
});