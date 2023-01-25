const cron = require('node-cron');
const db = require('./lowdb');
const epic = require('./fetch/epic');
const { xbox, playstation } = require('./bots/games');

cron.schedule('0 */6 * * *', async () => {
    // Xbox
    try {
        const res = await xbox();

        db.set('games.xbox.arr', res).write();
        db.set('games.xbox.jobFailed', false).write()

        console.log('Xbox cron successfull');
    } catch(err) {
        db.set('games.xbox.jobFailed', true).write()

        console.log(`Xbox cron error ${err}`)
    }
   
    // Playstation
    try {
        const res = await playstation();

        db.set('games.playstation.arr', res).write();
        db.set('games.playstation.jobFailed', false).write();

        console.log('Playstation cron successfull');
    } catch(err) {
        db.set('games.playstation.jobFailed', true).write();

        console.log(`Playstation cron error ${err}`)
    }

    // Epic
    try {
        const res = await epic();

        db.set('games.epic.arr', res).write();
        db.set('games.epic.jobFailed', false).write()

        console.log('Epic cron successfull');
    } catch(err) {
        db.set('games.epic.jobFailed', true).write()

        console.log(`Epic cron error ${err}`)
    }
});
