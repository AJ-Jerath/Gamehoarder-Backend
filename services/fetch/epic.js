const fetch = require('node-fetch');

const epic = async () => {
    try {
        const url = 'https://store-site-backend-static-ipv4.ak.epicgames.com/freeGamesPromotions?locale=en-US&country=US&allowCountries=US';
        const res = await fetch(url);
        const data = await res.json();
        const games = data.data.Catalog.searchStore.elements;

        const array = games.map((game) => {
                const {title, keyImages, promotions} = game;
                let date = null;

                if(promotions) {
                    let dates = null

                    if(promotions.promotionalOffers.length > 0) {
                        dates = promotions.promotionalOffers[0].promotionalOffers[0]
                    } 
                    
                    if(promotions.upcomingPromotionalOffers.length > 0) {
                        dates = promotions.upcomingPromotionalOffers[0].promotionalOffers[0]
                    }

                    if (dates) {
                        const {startDate, endDate} = dates;

                        date = {
                            startDate, 
                            endDate
                        }
                    }
                }

                return {
                    title,
                    imageAlt: title,
                    date,
                    keyImages,
                }
        })

        return array;
    } catch(err) {
        return err;
    }
}

module.exports = epic;