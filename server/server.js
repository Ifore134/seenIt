const mongoose = require("mongoose");
const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");
app.use(cors());
app.use(express.json());
const Post = require("./models/posts");

// Routes
app.get('/posts', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/posts', async (req, res) => {
    console.log('POST request received:', req.body); // Log the request body
  
    const post = new Post({
      title: req.body.title,
      content: req.body.content,
      posted_by: req.body.posted_by,
      community: req.body.community,
    });
  
    try {
      const newPost = await post.save();
      res.status(201).json(newPost);
    } catch (error) {
      console.error('Error in POST /posts:', error); // Log any errors
      res.status(400).json({ message: error.message });
    }
  });
  


mongoose.connect('mongodb://127.0.0.1:27017/seenit')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});