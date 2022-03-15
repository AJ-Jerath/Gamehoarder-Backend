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
        waitUntil: 'load', 
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
    await page.goto('https://www.playstation.com/en-us/ps-plus/this-month-on-ps-plus/', {
        waitUntil: 'load', 
        timeout: 0, 
    });

    await page.waitForSelector('#gdk__content');

    const results = await page.$$eval('#gdk__content .cmp-container #gdk__content .section:nth-of-type(2) section .contentgrid', divs => {
        const divOne = divs[1].querySelectorAll('.box');
        //const divTwo = divs[3].querySelectorAll('.box');
        const gameDivs = [...divOne];

        return gameDivs.map(gameDiv => {
            psGames = {};

            psGames.image = gameDiv.querySelector('.imageblock .media-block').getAttribute('data-src');
            psGames.imageTwo = gameDiv.querySelector('.imageblock .media-block figure picture source').getAttribute('srcset');
            psGames.imageAlt = gameDiv.querySelector('.imageblock .media-block figure picture').getAttribute('data-alt');
            psGames.title = gameDiv.querySelector('.textblock .text-block h3').innerText;
            
            return psGames;
        })
    });

    browser.close();
    
    return results;
};

// Epic Scraper
const epic = async () => {
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
    await page.goto('https://www.epicgames.com/store/en-US/', { 
        waitUntil: 'load', 
        timeout: 0 ,
    });

    await page.waitForSelector('#dieselReactWrapper');

    const results = await page.$$eval('[data-component="DiscoverPage"] [data-component="WithIntersectionTracking"] [data-component="DiscoverContainerHighlighted"] section [data-component="CardGridDesktopBase"]', gameDivs => {
        return gameDivs.map(gameDiv => {
            epicGames = {};

            epicGames.image = gameDiv.querySelector('[data-component="Picture"] img').getAttribute('data-image');
            epicGames.imageAlt = gameDiv.querySelector('[data-component="Picture"] img').getAttribute('alt');
            epicGames.title = gameDiv.querySelector('[data-component="OfferTitleInfo"]').innerText;
            epicGames.date = gameDiv.querySelector('[data-component="OfferTitleInfo"] [data-component="Message"]').innerText;

            return epicGames;
        })
    });

    browser.close();
    
    return results;
};

module.exports = {
    xbox,
    playstation,
    epic 
}
