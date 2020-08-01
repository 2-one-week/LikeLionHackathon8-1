const express = require("express");
const router = express.Router();
const { Post } = require("../models/Posts");
const { auth } = require("../middleware/auth");
const multer = require("multer");
const path = require("path");

//=================================
//             Video
//=================================

var storage = multer.diskStorage({
  // 어디에 파일이 저장되는지
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

var upload = multer({ storage: storage }).single("file");

router.post("/uploadfile", (req, res) => {
  //가져온 이미지를 저장해주면 된다.
  upload(req, res, (err) => {
    if (err) {
      return req.json({ success: false, err });
    }
    return res.json({
      success: true,
      filePath: res.req.file.path,
      fileName: res.req.file.filename,
      fileOriginName: res.req.file.originalname,
    });
  });
});

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
  Post.findOne({ _id: req.body.postId })
    .populate("writer")
    .exec((err, postDetail) => {
      console.log(req.body);
      if (err) return res.status(400).send(err);
      return res.status(200).json({ success: true, postDetail });
    });
});

router.post("/edit", (req, res) => {
  Post.findOneAndUpdate({ _id: req.body.postId }, { $set: {} }, (err, doc) => {
    if (err) return res.json({ success: false, err });
    return res
      .status(200)
      .send({ success: true, message: "정상적으로 게시글이 수정되었습니다." });
  });
});

module.exports = router;
