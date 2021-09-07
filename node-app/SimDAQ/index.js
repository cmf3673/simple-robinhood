const axios = require("axios");
const cron = require('node-cron');


const tickers = ['AAPL', 
                 'MSFT', 
                 'GOOG', 
                 'FB', 
                 'AMZN']


const updatePrice = (ticker) => {
    // get current price
    axios.get(`http://localhost:5000/api/posts/${ticker}`).then(res => {
        console.log(res.data);
        prices = res.data.prices
        currentPrice = prices[prices.length - 1];
        max = currentPrice + (currentPrice * .05);
        min = currentPrice - (currentPrice * .05);
        newPrice = parseFloat((Math.random() * (max - min) + min).toFixed(2));
        // no negative prices
        if (newPrice < 0) { newPrice = 0 };
        // get new price array
        if (prices.length >= 50) {
            prices.shift();
            prices.push(newPrice);
        } else {
            prices.push(newPrice);
        }
        // update price in db
        axios.patch(`http://localhost:5000/api/posts/${ticker}`, {
            prices: prices
        })
        .catch(err => {
            console.log(`Error: ${err}`);
        });
    })
    .catch(err => {
        console.log(`Error: ${err}`);
    })

}

cron.schedule('*/1 * * * * *', () => {
    for (let i = 0; i < tickers.length; i++) {
        updatePrice(tickers[i]);
    }
});
