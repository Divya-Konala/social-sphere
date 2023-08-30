const {
  Update,
  Delete,
  GetUser,
  Follow,
  UnFollow,
} = require("../Controllers/UserController");

const router = require("express").Router();

router.put("/:id", Update);

router.delete("/:id", Delete);

router.get("/:id", GetUser);

router.post("/:id/follow", Follow);

router.post("/:id/unfollow", UnFollow);


module.exports = router;
