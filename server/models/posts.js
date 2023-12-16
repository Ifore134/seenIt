const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    content: { type: String, required: true },
    title: {type:String, required: true},
    posted_by: { type: String, default: "Anonyomous" },
    post_date_time: { type: Date, default: new Date() },
    url: { type: String },
    community: {type: String}
  });

const Post = mongoose.model('Post', postSchema);
module.exports =Post;