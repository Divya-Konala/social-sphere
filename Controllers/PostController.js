const Post = require("../Models/post");
const User = require("../Models/user");

const createNewPost = async (req, res) => {
  try {
    if (req.session.user.userId != req.body.userId) {
      return res.status(401).json("unauthorized user");
    }
    const newPost = new Post(req.body);
    const postDb = await newPost.save();
    res.status(201).send("new post created successfully!");
  } catch (error) {
    res.status(500).json(error);
  }
};

const updatePost = async (req, res) => {
  try {
    const postDb = await Post.findById(req.params.id);
    if (!postDb) return res.status(404).json("post not found");
    if (postDb.userId != req.session.user.userId)
      return res.status(401).json("unauthorized access to edit post");
    await Post.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).json("post updated successfully");
  } catch (error) {
    res.status(500).json(error);
  }
};

const deletePost = async (req, res) => {
  try {
    const postDb = await Post.findById(req.params.id);
    if (!postDb) return res.status(404).json("post not found");
    if (postDb.userId != req.session.user.userId)
      return res.status(401).json("unauthorized access to delete post");
    await Post.findByIdAndDelete(req.params.id);
    res.status(200).json("post deleted successfully");
  } catch (error) {
    res.status(500).json(error);
  }
};

// like-unlike
const likePost = async (req, res) => {
  try {
    let currentUser = req.session.user.userId;
    currentUser = currentUser.toString();
    const postDb = await Post.findById(req.params.id);
    if (!postDb) return res.status(404).json("post not found");
    if (!postDb.likes.includes(currentUser)) {
      console.log("post like");
      await postDb.updateOne({
        $push: { likes: currentUser },
      });
      res.status(200).json("post liked");
    } else {
      console.log("post unlike");
      await postDb.updateOne({
        $pull: { likes: currentUser },
      });
      res.status(200).json("post unliked");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const getPost = async (req, res) => {
  try {
    const postDb = await Post.findById(req.params.id);
    if (!postDb) return res.status(404).json("post not found");
    res.status(200).json(postDb);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getTimeline = async (req, res) => {
  const userId = req.session.user.userId;
  const user = await User.findById(userId);
  const selfPosts = await Post.find({ userId: userId.toString() });
  const friendsPosts = await Promise.all(
    user.following.map((friendId) => {
      return Post.find({ userId: friendId });
    })
  );
  const timelinePosts = selfPosts.concat(...friendsPosts);
  timelinePosts.sort((a,b)=>b.createdAt - a.createdAt);
  res.status(200).json(timelinePosts);
};

module.exports = {
  createNewPost,
  updatePost,
  deletePost,
  likePost,
  getPost,
  getTimeline,
};
