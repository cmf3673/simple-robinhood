const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes");

mongoose
	.connect("mongodb://localhost:27017/SimDAQ", { useNewUrlParser: true })
	.then(() => {
		const app = express()
        app.use(cors());
        app.use(express.json())
        app.use('/api', routes)
		app.listen(3001, () => {
			console.log("Server has started on port 3001!")
	    })
	})
    .catch (err => {
        console.log(err)
    })

