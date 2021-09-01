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
router.get("/posts/:name", async (req, res) => {
    try {
        const post = await Post.findOne({ name: req.params.name })
        res.send(post)
    } catch {
        res.status(404)
        res.send({ error: "Post doesn't exist" })
    }

})

// accept post request
router.post("/posts", async (req, res) => {
	const post = new Post({
		name: req.body.name,
		price: req.body.price,
	})
	await post.save()
	res.send(post)
})

// update post (needed for chnaging price)




module.exports = router