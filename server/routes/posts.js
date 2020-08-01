const express = require("express");
const router = express.Router();
const { Post } = require("../models/Posts");
const { auth } = require("../middleware/auth");
const path = require("path");

//=================================
//             Video
//=================================

router.post("/upload", (req, res) => {
  const post = new Post(req.body);
  post.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    res.status(200).json({ success: true });
  });
});

router.get("/get", (req, res) => {
  Post.find()
    .populate("writer")
    .exec((err, posts) => {
      if (err) return res.status(400).send(err);
      res.status(200).json({ success: true, posts });
    });
});

router.post("/getDetail", (req, res) => {
  Video.findOne({ _id: req.body.postId })
    .populate("writer")
    .exec((err, postDetail) => {
      if (err) return res.status(400).send(err);
      return res.status(200).json({ success: true, postDetail });
    });
});

module.exports = router;
