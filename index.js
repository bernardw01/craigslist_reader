const request = require('request-promise');
const cheerio = require('cheerio');
const url = "https://daytona.craigslist.org/search/jjj"

async function scrapeCragslist() {
    try {
        const htmlResult = await request.get(url);
        const $ = await cheerio.load(htmlResult);
        $(".result-info").each((index, element) => {
            console.log($(element).children(".result-title").text());
        });
    } catch (err) {
        console.error(err);
    }
}

scrapeCragslist();