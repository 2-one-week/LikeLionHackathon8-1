const express = require("express");
const router = express.Router();
const multer = require("multer");
const { Applicants } = require("../models/Applicants");
//=================================
//             Applicants
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

router.post("/", (req, res) => {
  //받아온 정보들을 db에 넣어준다.
  const apply = new Applicants(req.body);
  apply.save((err) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});

module.exports = router;
