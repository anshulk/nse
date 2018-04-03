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

let index_map = {
    'NIFTY 50': 'nifty',
    'NIFTY NEXT 50': 'juniorNifty',
    'INDIA VIX': 'indiavix',
    'CNX 100': 'cnx100',
    'S&P CNX DEFTY': 'defty',
    'S&P CNX 500': 'cnx500',
    'CNX MIDCAP': 'midcap',
    'NIFTY100 LIQUID 15': 'nseliquid',
    'NIFTY MIDCAP 50': 'niftyMidcap50',
    'NIFTY MIDCAP LIQUID 15': 'niftyMidcapLiq15',
    'NIFTY AUTO': 'cnxAuto',
    'NIFTY BANK': 'bankNifty',
    'NIFTY ENERGY': 'cnxEnergy',
    'NIFTY FINANCIAL SERVICES': 'cnxFinance',
    'NIFTY FMCG': 'cnxFMCG',
    'NIFTY IT': 'cnxit',
    'NIFTY MEDIA': 'cnxMedia',
    'NIFTY METAL': 'cnxMetal',
    'NIFTY PHARMA': 'cnxPharma',
    'NIFTY PSU BANK': 'cnxPSU',
    'NIFTY REALTY': 'cnxRealty',
    'NIFTY PRIVATE BANK': 'niftyPvtBank',
    'NIFTY COMMODITIES': 'cnxCommodities',
    'NIFTY INDIA CONSUMPTION': 'cnxConsumption',
    'NIFTY CPSE': 'cpse',
    'NIFTY INFRASTRUCTURE': 'cnxInfra',
    'NIFTY MNC': 'cnxMNC',
    'NIFTY GROWTH SECTOR 15': 'ni15',
    'NIFTY PSE': 'cnxPSE',
    'NIFTY SERVICES SECTOR': 'cnxService',
    'NIFTY DIVIDEND OPPORTUNITIES 50': 'cnxDividendOppt',
    'NIFTY50 VALUE 20': 'nv20',
    'NIFTY QUALITY 30': 'niftyQuality30',
    'NIFTY50 EQUAL WEIGHT': 'nifty50EqualWeight',
    'NIFTY100 EQUAL WEIGHT': 'nifty100EqualWeight',
    'NIFTY100 LOW VOLATILITY 30': 'nifty100LowVol30',
    'NIFTY ALPHA 50': 'niftyAlpha50',
    'SOVEREIGN GOLD BONDS': 'sovGold',
    'FO STOCKS': 'foSec',
    'ETF': 'etf',
    'GOLD ETF': 'goldEtf',
    'NIFTY 50 ETF': 'nifty50Etf',
    'INSTITUTIONAL STOCK WATCH': 'iL',
    'BL STOCK WATCH': 'bL',
    'BONDS IN CM': 'cbmSecList',
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

let indexSnapshot = async (index) => {
    index = index.toUpperCase();
    let url = 'https://www.nseindia.com/live_market/dynaContent/live_watch/stock_watch/' + index_map[index] + 'StockWatch.json';
    // console.log(url);

    let response = await got(url, got_options);
    response = JSON.parse(response.body);
    // console.log(response);
    return response;
};

module.exports = {
    price,
    lastPrice,
    indices,
    indexSnapshot
};
