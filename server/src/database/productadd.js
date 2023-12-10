const mongoose = require('mongoose');
const { Schema } = mongoose;

const blogSchema = new Schema({
  pname: String,
  pimage: String,
  psize: String,
  pprize: Number,
  date: { type: Date, default: Date.now },
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
