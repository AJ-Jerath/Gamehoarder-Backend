const cron = require('node-cron');
const db = require('./lowdb');
const {xbox, playstation, epic} = require('../bots/games');

cron.schedule('* * * * *', () => {
    xbox().then((res) => {
        db.set('games.xbox.arr', res).write();

        console.log('Xbox cron successfull');
    }).catch((err) => {
        db.set('games.xbox.jobFailed', true).write()

        console.log(`Xbox cron error ${err}`)
    });
});

cron.schedule('* * * * *', () => {
    playstation().then((res) => {
        db.set('games.playstation.arr', res).write()

        console.log('Playstation cron successfull');
    }).catch((err) => {
        db.set('games.playstation.jobFailed', true).write();

        console.log(`Playstation cron error ${err}`)
    });
});

cron.schedule('* * * * *', () => {
    epic().then((res) => {
        db.set('games.epic.arr', res).write();

        console.log('Epic cron successfull');
    }).catch((err) => {
        db.set('games.epic.jobFailed', true).write()

        console.log(`Epic cron error ${err}`)
    });
});