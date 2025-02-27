// contains express routes
const express = require('express');
const Stock = require("./models/stock");
const router = express.Router();

// Get all stocks
router.get("/stocks", async (req, res) => {
	const stocks = await Stock.find()
	res.send(stocks)
});

// Get stock by ticker
router.get("/stocks/:ticker", async (req, res) => {
    try {
        const stock = await Stock.findOne({ ticker: req.params.ticker })
        res.send(stock)
    } catch {
        res.status(404)
        res.send({ error: "Stock doesn't exist" })
    }
});

// post
router.post("/stocks", async (req, res) => {
    console.log('Entering:')
    console.log(req.body)
	const stock = new Stock({
		ticker: req.body.ticker,
		prices: req.body.prices,
	});
	await stock.save()
	res.send(stock)
});

// patch prices
router.patch("/stocks/:ticker", async (req, res) => {
    try {
        const stock = await Stock.findOne({ ticker: req.params.ticker })
        if (req.body.prices) {
            stock.prices = req.body.prices
        }
        await stock.save()
        res.send(stock)
    } catch {
        res.status(404)
        res.send({ error: "Stock doesn't exist" })
    }
});

// delete 
router.delete("/stocks/:ticker", async (req, res) => {
	try {
		await Stock.deleteOne({ ticker: req.params.ticker })
		res.status(204).send()
	} catch {
		res.status(404)
		res.send({ error: "Stock doesn't exist!" })
	}
});

// delete all
router.delete("/stocks", async (req, res) => {
    try {
        await Stock.deleteMany({})
        res.status(204).send()
    } catch {
        res.status(404)
        res.send({ error: "Error" })
    }
});

module.exports = router