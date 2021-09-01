const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const axios = require("axios");
var cron = require('node-cron');

// add initial data in here

const updatePrice = () => {
    // get current price
    // how do this for all tickers?
    axios.get("http://localhost:5000/api/posts/tesla").then(res => {
        console.log(res.data);
        currentPrice = res.data.price;
        // update price in db
        axios.patch("http://localhost:5000/api/posts/tesla", {
            price: currentPrice + 1,
        });
    })
    .catch(err => {
        console.log(`Error: ${err}`);
    })

}

console.log("Updating DB")
cron.schedule('*/1 * * * * *', () => {
    console.log('Update prices')
    updatePrice();
});