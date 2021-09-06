const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
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
        currentPrice = res.data.price;
        max= currentPrice + (currentPrice * .05);
        min = currentPrice - (currentPrice * .05);
        newPrice = parseFloat((Math.random() * (max - min) + min).toFixed(2));
        // update price in db
        axios.patch(`http://localhost:5000/api/posts/${ticker}`, {
            price: newPrice,
        })
        .catch(err => {
            console.log(err);
        });
    })
    .catch(err => {
        console.log(`Error: ${err}`);
    })

}

cron.schedule('*/1 * * * * *', () => {
    for (let i = 0; i < tickers.length; i++) {
        ticker = tickers[i];
        updatePrice(ticker);
    }
});
