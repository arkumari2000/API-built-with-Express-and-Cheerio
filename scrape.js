const request = require('request');
const cheerio = require('cheerio');
const request = require('request');

request('https://quotes.toscrape.com', (error, response, html) => {
    if(!error && response.statusCode == 200){
        const $ = cheerio.load(html);

        $('.col-md-8 .quote').each((i, el) => {
            const quote = $(el).find('.text').text();
            const author = $(el).find('.author').text();
            const authorLink = $(el).find('.author').next().attr('href');

            $(el).find('.tag').each((j, elTag) => {
                const tag = $(elTag).text();
                const tagLink = $(elTag).attr('href');
                console.log(tag,tagLink);
            }); 

            console.log(quote,author,authorLink);
        });
    }
});