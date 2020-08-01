import React, { useEffect, useState } from "react";
import Axios from "axios";

function PostDetailPage(props) {
  const postId = props.match.params.postId;
  //console.log(postId); postId 잘 넘어옴.

  const [PostDetail, setPostDetail] = useState([]);

  const variable = { postId: postId };

  useEffect(() => {
    Axios.post("/api/post/getDetail", variable).then((response) => {
      if (response.data.success) {
        setPostDetail(response.data.postDetail);
      } else {
        alert("게시글 정보를 가져오는데에 실패했습니다.");
      }
    });
  });
  return (
    <div>
      <h3>{PostDetail.title}</h3>
      <h5>작성자 | {PostDetail.writer}</h5>
      <h5>{PostDetail.description}</h5>
    </div>
  );
}

export default PostDetailPage;
