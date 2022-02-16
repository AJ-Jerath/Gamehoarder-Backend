const puppeteer = require('puppeteer');

const xbox = async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://www.xbox.com/en-US/live/gold#gameswithgold');

    await page.waitForSelector('#root');

    const results = await page.$$eval('#BodyContent #ContentBlockList_9 .gameDivsWrapper section', gameDivs => {
        return gameDivs.map(gameDiv => {
            xbGames = {};

            xbGames.image = gameDiv.querySelector('a .containerIMG img').getAttribute('src');
            xbGames.imageAlt = gameDiv.querySelector('a .containerIMG img').getAttribute('alt');
            xbGames.title = gameDiv.querySelector('a div .c-heading').innerText;
            xbGames.date = gameDiv.querySelector('a div p .availDate').innerText;

            return xbGames;
        })
    });

    browser.close();
    
    return results;
};

module.exports = xbox;