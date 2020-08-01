import React, { useState, useEffect } from "react";
import Axios from "axios";

import { Typography } from "antd";
const { Title } = Typography;

function PostAllPage() {
  const [Posts, setPosts] = useState([]);

  useEffect(() => {
    Axios.get("/api/post/get").then((response) => {
      if (response.data.success) {
        console.log(response.data);
        setPosts(response.data.posts);
      } else {
        alert("게시글들을 불러오는데 실패했습니다.");
      }
    });
  }, []);

  const renderCards = Posts.map((post, index) => {
    return (
      <div>
        <a href={`/post/${post._id}`}>
          <h3>{post.title}</h3>
          <h4>{post.writer.name}</h4>
        </a>
      </div>
    );
  });

  return (
    <div style={{ width: "85%", margin: "3rem auto" }}>
      <Title level={2}> 전체게시글 </Title>
      <hr />

      <div>{renderCards}</div>
    </div>
  );
}

export default PostAllPage;
