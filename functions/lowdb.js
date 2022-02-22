const lowDb = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const {xbox, playstation, epic} = require('../bots/games');

const db = lowDb(new FileSync('./lowdb/games.json'));

const gamesDefault = { 
    games: {
        xbox: {
            jobFailed: false, 
            arr: []
        },
        playstation: {
            jobFailed: false, 
            arr: []
        },
        epic: {
            jobFailed: false, 
            arr: []
        },
    }
}

db.defaults(gamesDefault).write();

xbox().then((res) => {
    db.set('games.xbox.arr', res).write()
});

playstation().then((res) => {
    db.set('games.playstation.arr', res).write()
});

epic().then((res) => {
    db.set('games.epic.arr', res).write()
});

module.exports = db;