const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes");
const Post = require("./models/Post");

clearDB = () => {
    // clear database
    Post.deleteMany({}, (err) => {console.log(err)})
};

addDocuments = () => {
    const documents = [
        {ticker: "AAPL", price: 100},
        {ticker: "MSFT", price: 200},
        {ticker: "GOOG", price: 300},
        {ticker: "FB", price: 400},
        {ticker: "AMZN", price: 500},
    ]

    // insert documents
    Post.insertMany(documents, (err, docs) => {
        if (err) {
            console.log(err);
        } else {
            console.log(docs);
        }
    });
};


initializeDB = () => {
    clearDB()
    addDocuments()
};

mongoose
	.connect("mongodb://localhost:27017/SimDAQ", { useNewUrlParser: true })
	.then(() => {
		const app = express()
        app.use(cors());
        app.use(express.json())
        app.use('/api', routes)
		app.listen(5000, () => {
			console.log("Server has started!")
        initializeDB()
	    })
	})
    .catch (err => {
        console.log(err)
    })

