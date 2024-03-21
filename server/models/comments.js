const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    content: { type: String, required: true },
    posted_by: { type: String, default: "Anonyomous" },
    comment_date_time: { type: Date, default: new Date() },
    community: {type: String}
  });

const Comment = mongoose.model('Comment', commentSchema);
module.exports =Comment;