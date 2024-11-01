const mongoose = require("mongoose");
const express = require("express");
const bcrypt = require("bcryptjs")
const app = express();
const port = 8000;
const cors = require("cors");
app.use(cors());
app.use(express.json());
const Post = require("./models/posts");
const Community = require("./models/communities");
const Comment = require("./models/comments");
const User = require("./models/user");

// Routes
app.get('/posts', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get('/communities', async (req, res) => {
  try {
    const community = await Community.find();
    res.json(community);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.get('/comments', async (req, res) => {
  try {
    const comment = await Comment.find();
    res.json(comment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/api/auth/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find the user by username
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).send('User not found');
    }

    // Compare the submitted password with the one stored in the database
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send('Invalid credentials');
    }

    // Prepare user data to send back, excluding the password
    const userResponse = {
      _id: user._id,
      username: user.username,
      email: user.email
    };

    res.json(userResponse);
  } catch (error) {
    res.status(500).send(error.message);
  }
});


app.post('/api/auth/register', async (req, res) => {
  try {
    const { username, password, email } = req.body;
    
    // Check if the user or email already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).send('Username already exists');
    }

    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(400).send('Email already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new User({ username, email, password: hashedPassword });
    const savedUser = await user.save();

    // Exclude password and other sensitive fields from the response
    const userResponse = {
      _id: savedUser._id,
      username: savedUser.username,
      email: savedUser.email
    };

    res.status(201).json(userResponse);
  } catch (error) {
    res.status(500).send(error.message);
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

  app.post('/comments/:postId', async (req, res) => {
    const { postId } = req.params;
    //const { text, author } = req.body; // Adjust according to your comment structure
    const { content } = req.body;
    // const comment = new Comment({
    //   content: req.body.content, 
    // })

    try {
        // Create a new comment
        const commentTest = await Comment.create({ content });
        // const newComment = await comment.save();
        // Find the post and add the comment's ID to the post's comments array
        await Post.findByIdAndUpdate(postId, { $push: { comments: commentTest._id } });

        res.status(201).json(commentTest);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});
  
var old_serv ="mongodb+srv://fishkid134:APBxVp0M4rd9Pdyg@seenitcluster.fxrnort.mongodb.net/?retryWrites=true&w=majority&appName=seenItCluster"

mongoose.connect('mongodb://127.0.0.1:27017/seenit')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

