const bcrypt = require("bcrypt");
require("dotenv").config();
const User = require("../Models/user");
const user = require("../Models/user");
const { log } = require("console");

const saltRounds = process.env.saltRounds;

const Update = async (req, res) => {
  try {
    const userId = req.params.id;
    const session_userId = req.session.user.userId;
    if (userId != session_userId) {
      return res.status(401).send("unauthorized user");
    }
    if (req.body.password) {
      req.body.password = await bcrypt.hash(
        req.body.password,
        parseInt(saltRounds)
      );
    }
    const userDb = await user.findByIdAndUpdate(userId, {
      $set: req.body,
    });
    res.status(200).json("user updated successfully");
  } catch (error) {
    res.status(500).json(error);
  }
};

const Delete = async (req, res) => {
  try {
    const userId = req.params.id;
    const session_userId = req.session.user.userId;
    if (userId != session_userId) {
      return res.status(401).send("unauthorized user");
    }
    const userDb = await user.findByIdAndDelete(userId);
    res.status(200).json("user deleted successfully");
  } catch (error) {
    res.status(500).json(error);
  }
};

const GetUser = async (req, res) => {
  console.log("get user");
  try {
    const userId = req.params.id;
    const userDb = await user.findById(userId);
    const { password, updatedAt, ...other } = userDb._doc;
    res.status(200).json(other);
  } catch (error) {
    res.status(500).json(error);
  }
};

const Follow = async (req, res) => {
  try {
    const follower_id = req.session.user.userId.toString();
    const following_id = req.params.id;
    if (follower_id === following_id) {
      return res.status(400).json("cannot follow own self");
    }
    const follower = await User.findById(follower_id);
    const following = await User.findById(following_id);
    if (!following) {
      return res.status(400).send("user requested to follow doesnot exist");
    }
    const isExistingFollower = following.followers.includes(follower_id);
    if (isExistingFollower) {
      return res.status(400).json("you are already following");
    }
    await User.findByIdAndUpdate(follower_id, {
      $push: { following: following_id },
    });
    await User.findByIdAndUpdate(following_id, {
      $push: { followers: follower_id },
    });
    res.status(200).json("following user");
  } catch (error) {
    res.status(500).json(error);
  }
};

const UnFollow = async (req, res) => {
  try {
    const follower_id = req.session.user.userId.toString();
    const following_id = req.params.id;
    if (follower_id === following_id) {
      return res.status(400).json("cannot unfollow own self");
    }
    const follower = await User.findById(follower_id);
    const following = await User.findById(following_id);
    if (!following) {
      return res.status(400).send("user requested to unfollow doesnot exist");
    }
    const isExistingFollower = following.followers.includes(follower_id);
    if (!isExistingFollower) {
      return res.status(400).json("you are not following the user");
    }
    await User.findByIdAndUpdate(follower_id, {
      $pull: { following: following_id },
    });
    await User.findByIdAndUpdate(following_id, {
      $pull: { followers: follower_id },
    });
    res.status(200).json("unfollowed user");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = { Update, Delete, GetUser, Follow, UnFollow };
