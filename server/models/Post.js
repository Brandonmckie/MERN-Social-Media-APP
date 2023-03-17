const { Schema, model, default: mongoose, Types } = require("mongoose");
const User = require("./User");

const PostSchema = new Schema(
  {
    userId: {
      type: String,
      require: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    likes: {
      type: Map,
      of: Boolean,
    },
    comments: {
      type: Array,
      default: [],
    },
    description: {
      type: String,
    },
    userPicturePath: {
      type: String,
    },
    picturePath: {
      type: String,
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
