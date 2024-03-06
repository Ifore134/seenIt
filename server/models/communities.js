const mongoose = require("mongoose");

const communitySchema = new mongoose.Schema({
    name: { type: String, required: true, default: "popular"},
    posts: {type:String, required: true},
    posted_by: { type: String, default: "Anonymous"},
    post_date_time: { type: Date, default: new Date() },
    community: {type: String}
  });

const Post = mongoose.model('Community', communitySchema);
module.exports =Post;