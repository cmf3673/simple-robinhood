// contains express routes
const express = require('express');
const Post = require("./models/Post");
const router = express.Router();

// Get all posts
router.get("/posts", async (req, res) => {
	const posts = await Post.find() // waiting untill the promise is resolved before sending the response
	res.send(posts)
})

// get post by name
router.get("/posts/:ticker", async (req, res) => {
    try {

        const post = await Post.findOne({ ticker: req.params.ticker })
        res.send(post)
    } catch {
        res.status(404)
        res.send({ error: "Post doesn't exist" })
    }
})

// accept post request
router.post("/posts", async (req, res) => {
	const post = new Post({
		ticker: req.body.ticker,
		price: req.body.price,
	})
	await post.save()
	res.send(post)
})

// patch (needed for changing price)
router.patch("/posts/:ticker", async (req, res) => {
    try {
        const post = await Post.findOne({ ticker: req.params.ticker })

        if (req.body.price) {
            post.price = req.body.price
        }

        await post.save()
        res.send(post)
    } catch {
        res.status(404)
        res.send({ error: "Post doesn't exist" })
    }
})

// delete 
router.delete("/posts/:ticker", async (req, res) => {
	try {
		await Post.deleteOne({ ticker: req.params.ticker })
		res.status(204).send()
	} catch {
		res.status(404)
		res.send({ error: "Post doesn't exist!" })
	}
})

// remove all posts
router.delete("/posts", async (req, res) => {
    try {
        await Post.deleteMany({})
        res.status(204).send()
    } catch {
        res.status(404)
        res.send({ error: "Error" })
    }
})


module.exports = router