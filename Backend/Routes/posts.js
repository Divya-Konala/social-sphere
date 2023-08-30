const {
  createNewPost,
  updatePost,
  deletePost,
  likePost,
  getPost,
  getTimeline,
} = require("../Controllers/PostController");

const router = require("express").Router();

router.post("/", createNewPost);

router.put("/:id", updatePost);

router.delete("/:id", deletePost);

router.put("/:id/like", likePost);

router.get("/:id", getPost);

router.get("/timeline/all", getTimeline);

module.exports = router;
