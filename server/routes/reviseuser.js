const express = require("express");
const router = express.Router();
const { User } = require("../models/User");
const { auth } = require("../middleware/auth");

router.post("/nickname", auth, (req, res) => {
  const newNickName = req.body.nickname;
  User.findOneAndUpdate(
    { _id: req.user._id },
    { $set: { nickname: newNickName } },
    (err, doc) => {
      if (err) return res.json({ success: false, err });
      return res.status(200).send({
        success: true,
        message: "정상적으로 닉네임을 바꿨습니다.",
      });
    }
  );
});

router.post("/location", auth, (req, res) => {
  const newLocation = req.body.location;
  User.findOneAndUpdate(
    { _id: req.user._id },
    { $set: { location: newLocation } },
    (err, doc) => {
      if (err) return res.json({ success: false, err });
      return res.status(200).send({
        success: true,
        message: "정상적으로 위치를 바꿨습니다.",
      });
    }
  );
});

router.post("/password", auth, (req, res) => {
  const newPassword = req.body.password;
  const data = {
    // email: req.user.email,
    password: newPassword,
    // nickname: req.user.nickname,
  };
  console.log(req.user._id);

  const user = new User(data);
  user.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
      message: "정상적으로 비밀번호가 변경되었습니다.",
    });
  });
});

module.exports = router;
