const fetch = require('node-fetch');

const comicbookmovie = async () => {
    try {
        const fetchUrl = 'https://api.grow.me/sites/8ff11b47-a05e-4b31-b687-da48f8d8d483/search-landing-page'
        const res = await fetch(fetchUrl)
        const data = await res.json();

        const array = Promise.all(data.latestPages.edges.map(async (post) => {
            const { title, url, description, imgUrl, categories, publishedAt } = post.node;

            try {
                const articleUrl = `https://api.grow.me/sites/8ff11b47-a05e-4b31-b687-da48f8d8d483/page?url=${url}`
                const res = await fetch(articleUrl)
                const data = await res.json();

                const { title, textContent, imgUrl, description } = data.page;

                return { 
                    title, 
                    url, 
                    description, 
                    imgUrl, 
                    categories, 
                    publishedAt,
                    article: {
                        title,
                        textContent,
                        imgUrl,
                        description
                    }
                }
            } catch (err) {
                return { 
                    title, 
                    url, 
                    description, 
                    imgUrl, 
                    categories, 
                    publishedAt,
                    article: false
                }
            }

        }));

        return array;
    } catch (err) {
        return err;
    }
}

module.exports = comicbookmovie;