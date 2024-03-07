const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    content: { type: String, required: true },
    posted_by: { type: String, default: "Anonyomous" },
    comment_date_time: { type: Date, default: new Date() },
    post: { type: String, default: "Anonyomous" },
    community: {type: String}
  });

const Post = mongoose.model('Post', postSchema);
module.exports =Post;