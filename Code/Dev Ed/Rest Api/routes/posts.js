const express = require("express");
const Post = require("../models/Post");

const router = express.Router();

//SUBMIT  A POST
router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description
  });
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (error) {
    res.json({ message: error });
  }
});

//GET BACK ALL POSTS
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.json({ message: error });
  }
});

//GET A SPECIFIC POST
router.get("/:postId", async (req, res) => {
  console.log(req.params.postId);
  try {
    const myPost = await Post.findById(req.params.postId);
    res.json(myPost);
  } catch (error) {
    res.json({ message: error });
  }
});

//REMOVE A POST

router.delete("/:postId", async (req, res) => {
  try {
    const removedPost = await Post.remove({ _id: req.params.postId });
    res.json(removedPost);
  } catch (error) {
    res.json({ message: error });
  }
});

//PATCH A POST

router.patch("/:postId", async (req, res) => {
  try {
    const updatedPost = await Post.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.body.title } }
    );
    res.json(updatedPost);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
