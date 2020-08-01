import React, { useState, useEffect } from "react";
import { Typography, Button } from "antd";
import { LIKELION_IMG } from "../../Config";

const { Title } = Typography;

function MyPage({ user }) {
  let { cord, department, email, image, isAuth, name } = user.userData || {};

  if (cord) {
    cord = `멋쟁이 사자처럼 ${cord}기`;
  }
  image = `${image}`;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        margin: "10%",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "40%",
          height: "30%",
          padding: "5%",
          border: "1px solid #ccc",
          boxShadow: "blur",
          borderRadius: "3px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "60%",
            height: "60%",
            overflow: "hidden",
            borderRadius: "100px",
            backgroundColor: "black",
          }}
        >
          <img src={LIKELION_IMG} style={{ width: "100%", height: "100%" }} />
        </div>
        <br />
        <p style={{ fontSize: "15px", color: "gray" }}>{email}</p>
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: "100%",
            height: "80%",
          }}
        >
          <Title level={4}>{cord}</Title>
          <Title level={4}>{department}</Title>
          <Title level={4}>{name}</Title>
        </div>
        <br />
        <a href="/editProfile">
          <Button type="primary">내 프로필 편집</Button>
        </a>
      </div>
    </div>
  );
}

export default MyPage;
