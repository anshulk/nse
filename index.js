const got = require('got');
let got_options = {
    headers: {
        'Accept': '*/*',
        'Accept-Language': 'en-US,en;q=0.5',
        'Host': 'nseindia.com',
        'Referer': 'https://www.nseindia.com/live_market/dynaContent/live_watch/get_quote/GetQuote.jsp?symbol=INFY&illiquid=0&smeFlag=0&itpFlag=0',
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:28.0) Gecko/20100101 Firefox/28.0',
        'X-Requested-With': 'XMLHttpRequest'
    }
};

let urls = {
    symbolPrice: 'https://www.nseindia.com/live_market/dynaContent/live_watch/get_quote/ajaxGetQuoteJSON.jsp',
    indices: 'http://www.nseindia.com/homepage/Indices1.json',
};

let price = async (symbol) => {
    let url = urls.symbolPrice + '?symbol=' + symbol;
    let response = await got(url, got_options);
    response = JSON.parse(response.body);
    return response;
};

let lastPrice = async (symbol) => {
    let p = await price(symbol);
    // console.log(p.data[0].lastPrice);
    return p.data[0].lastPrice;
};

let indices = async () => {
    let response = await got(urls.indices, got_options);
    response = JSON.parse(response.body);
    // console.log(response.data);
    return response.data;
};

module.exports = {
    price,
    lastPrice,
    indices
};
