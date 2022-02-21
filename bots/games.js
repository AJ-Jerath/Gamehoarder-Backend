const puppeteer = require('puppeteer');

// Xbox Scraper
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

// Playstation Scraper
const playstation = async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://www.playstation.com/en-us/ps-plus/this-month-on-ps-plus/');

    await page.waitForSelector('#gdk__content');

    const results = await page.$$eval('#gdk__content .cmp-container #gdk__content .section:nth-of-type(2) section div .contentgrid', divs => {
        const divOne = divs[1].querySelectorAll('.box');
        const divTwo = divs[2].querySelector('.box');
        const gameDivs = [...divOne, divTwo];

        return gameDivs.map(gameDiv => {
            psGames = {};

            psGames.image = gameDiv.querySelector('.imageblock .media-block').getAttribute('data-src');
            psGames.imageTwo = gameDiv.querySelector('.imageblock .media-block figure picture source').getAttribute('srcset');
            psGames.imageAlt = gameDiv.querySelector('.imageblock .media-block figure picture').getAttribute('data-alt');
            psGames.title = gameDiv.querySelector('.textblock .text-block h3').innerText;
            psGames.ps5 = gameDiv.querySelector('.textblock .text-block').innerText == 'PlayStation®5 bonus game*' ? true : false;

            return psGames;
        })
    });

    browser.close();
    
    return results;
};

module.exports = {
    xbox,
    playstation
}