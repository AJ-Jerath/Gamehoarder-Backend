const fetch = require('node-fetch');

const epic = async () => {
   const res = await fetch('https://store-site-backend-static-ipv4.ak.epicgames.com/freeGamesPromotions?locale=en-US&country=US&allowCountries=US');
   
   const data = await res.json();
   const games = data.data.Catalog.searchStore.elements;

   games.map((game) => {

    const {title, } = game;

    const object = {
        image: "https://gmedia.playstation.com/is/image/SIEPDC/ark-survival-evolved-screenshot-01-en-17feb22",
        imageTwo: "https://gmedia.playstation.com/is/image/SIEPDC/ark-survival-evolved-screenshot-01-en-17feb22?$1600px$",
        imageAlt: "ARK survival evolved screenshot",
        title,
    }

    console.log(game);
    console.log(object);
   })

   return games;
}

epic();