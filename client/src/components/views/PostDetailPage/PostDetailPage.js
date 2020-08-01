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
        console.log(response.data);
        setPostDetail(response.data.postDetail);
      } else {
        alert("게시글 정보를 가져오는데에 실패했습니다.");
      }
    });
  });

  const deleteHandler = (event) => {
    alert("글을 삭제하는 데에 실패하셨습니다");
  };
  const editHandler = (event) => {
    alert("글을 수정할 수 없습니다.");
  };

  if (PostDetail.writer) {
    return (
      <div>
        <h3>{PostDetail.title}</h3>
        <h5>작성자 | {PostDetail.writer.name}</h5>
        <h5>{PostDetail.description}</h5>
        <button onClick={deleteHandler}>글 삭제하기</button>
        <button onClick={editHandler}>글 수정하기</button>

        {PostDetail.files.map((item, index) => (
          <div key={index}>
            <img url={item} alt="zz" />
            {/* <img src={`../../../../../${item}`} /> */}
          </div>
        ))}
      </div>
    );
  } else {
    return <div>...loading</div>;
  }
}

export default PostDetailPage;
