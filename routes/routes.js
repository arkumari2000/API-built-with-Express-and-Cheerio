import express from 'express';
import cheerio from 'cheerio';
import request from 'request';

const router = express.Router();

router.get('/', (req, res) =>{
    request('https://quotes.toscrape.com', (error, response, html) => {
        if(!error && response.statusCode == 200){
            const $ = cheerio.load(html);
            var quotes = [];
            var quoteData = {data:quotes};

            $('.col-md-8 .quote').each((index, el) => {
                quotes[index] = {};
                quotes[index]['author'] = $(el).find('.author').text().trim();
                quotes[index]['text'] = $(el).find('.text').text().trim();
                quotes[index]['tags'] = [];

                $(el).find('.tag').each((j, elTag) => {
                    quotes[index]['tags'][j] = $(elTag).text();
                }); 
            });

            res.json(quoteData);
        }
    });
});
export default router;