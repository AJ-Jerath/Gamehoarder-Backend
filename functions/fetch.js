const fetch = require('node-fetch');

const epic = async () => {
   const res = await fetch('https://store-site-backend-static-ipv4.ak.epicgames.com/freeGamesPromotions?locale=en-US&country=US&allowCountries=US');
   
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
}

const playstation = async () => {
    const res = await fetch('https://www.playstation.com/bin/social/data/instagram?fields=business_discovery.username(playstation){media{username,%20caption,%20media_url,%20media_type,%20permalink,%20like_count,%20id,%20timestamp},%20media_count}');
    
    const data = await res.json();

    console.log(data);
}

playstation();

module.exports = {
    epic,
}