const fetch = require('node-fetch');

const steam = async () => {
    const url = 'https://store.steampowered.com/events/ajaxgetusereventcalendarrange/?minTime=0&maxTime=1675861322&ascending=false&maxResults=250&populateEvents=40&appTypes=featured&collectionID=featured';
    const res = await fetch(url);
    const data = await res.json();

    return data.events.map((article) => {
        const clanId = article.announcement_body.clanid;
        const titleImgID = JSON.parse(article.jsondata).localized_title_image[0];
        const imgUrl = `https://cdn.akamai.steamstatic.com/steamcommunity/public/images/clans/${clanId}/${titleImgID}`

        return {
            imgUrl,
            title: article.event_name,
            body: article.announcement_body.body,
        }
    })
}

steam().then((data) => {
    console.log(data);
})

module.exports = steam;