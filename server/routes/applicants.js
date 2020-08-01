const express = require("express");
const router = express.Router();
const multer = require("multer");
const { Applicants } = require("../models/Applicants");
//=================================
//             Applicants
//=================================

router.post("/", (req, res) => {
  //받아온 정보들을 db에 넣어준다.
  const apply = new Applicants(req.body);
  Applicants.findOne({ writer: req.body.writer }, (err, user) => {
    if (user) {return res.json({ success: false })}
    else{
      apply.save((err) => {
        if (err) return res.status(400).json({ success: false, err });
        return res.status(200).json({ success: true});
      });
    }
    })
});

router.get("/", (req, res) => {
  Applicants.find()
    .populate("writer")
    .exec((err, contents) => {
      if (err) return res.status(400).send(err);
      res.status(200).json({ success: true, contents });
    });
});

module.exports = router;
