const puppeteer = require('puppeteer');

// Xbox Scraper
const xbox = async () => {
    const browser = await puppeteer.launch({ 
        headless: true,
        args: [
            "--disable-gpu",
            "--disable-dev-shm-usage",
            "--disable-setuid-sandbox",
            "--no-sandbox",
        ],
        ignoreHTTPSErrors: true,
        dumpio: false
    });

    const page = await browser.newPage();
    await page.goto('https://www.xbox.com/en-US/live/gold#gameswithgold', {
        waitUntil: 'networkidle2', 
        timeout: 0,
    });

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
    const browser = await puppeteer.launch({ 
        headless: true,
        args: [
            "--disable-gpu",
            "--disable-dev-shm-usage",
            "--disable-setuid-sandbox",
            "--no-sandbox",
        ],
        ignoreHTTPSErrors: true,
        dumpio: false
    });

    const page = await browser.newPage();
    await page.goto('https://www.playstation.com/en-us/ps-plus/whats-new/', {
        waitUntil: 'networkidle2', 
        timeout: 0, 
    });

    await page.waitForSelector('#gdk__content');

    const results = await page.$eval('#gdk__content div:nth-of-type(8) .gpdc-section > div .contentgrid:nth-of-type(2) .cmp-container > div .content-grid', gameDivs => {
        return [...gameDivs.querySelectorAll(".box")].map(gameDiv => {
            psGames = {};

            psGames.image = gameDiv.querySelector('.imageblock .media-block').getAttribute('data-src');
            psGames.imageTwo = gameDiv.querySelector('.imageblock .media-block figure picture source').getAttribute('srcset');
            psGames.imageAlt = gameDiv.querySelector('.imageblock .media-block figure picture').getAttribute('data-alt');
            psGames.title = gameDiv.querySelector('.body-text-block .txt-block__paragraph h3').innerText;
            
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
