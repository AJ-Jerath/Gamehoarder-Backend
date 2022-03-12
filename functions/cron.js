const cron = require('node-cron');
const db = require('./lowdb');
const {xbox, playstation, epic} = require('../bots/games');

cron.schedule('* * * * *', () => {
    xbox().then((res) => {
        db.set('games.xbox.arr', res).write()
    });

    console.log('running a task every minute');
});

cron.schedule('* * * * *', () => {
    playstation().then((res) => {
        db.set('games.playstation.arr', res).write()
    });

    console.log('running a task every minute');
});

cron.schedule('* * * * *', () => {
    epic().then((res) => {
        db.set('games.epic.arr', res).write()
    });

    console.log('running a task every minute');
});