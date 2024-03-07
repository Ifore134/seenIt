const mongoose = require("mongoose");

const communitySchema = new mongoose.Schema({
    name: { type: String, required: true, default: "popular"},
    posts: {type:String, required: true},
  });

const Post = mongoose.model('Community', communitySchema);
module.exports =Post;