import React, { useEffect, useState } from "react";
import Axios from "axios";

function PostEditPage(props) {
  //   const postId = props.match.params.postId;
  //   //console.log(postId); postId 잘 넘어옴.
  //   const [PostDetail, setPostDetail] = useState([]);
  //   const variable = {
  //     postId: postId,
  //     writer: user.userData._id,
  //     title: VideoTitle,
  //     description: Description,
  //     category: Category,
  //   };
  //   useEffect(() => {
  //     console.log("var", variable);
  //     Axios.post("/api/post/edit", variable).then((response) => {
  //       console.log("뇽안", variable);
  //       if (response.data.success) {
  //         console("삭제 삽가능", response.data);
  //         setPostDetail(response.data.success);
  //       } else {
  //         alert("삭제 실패했습니다.");
  //       }
  //     });
  //   });
  //   useEffect(() => {
  //     Axios.post("/api/post/getDetail", variable).then((response) => {
  //       if (response.data.success) {
  //         console.log("디테일 받아와", response.data);
  //         setPostDetail(response.data.postDetail);
  //       } else {
  //         alert("게시글 정보를 가져오는데에 실패했습니다.");
  //       }
  //     });
  //   });
  //   const deleteHandler = (event) => {
  //     event.preventDefault();
  //   };
  //   if (PostDetail.writer) {
  //     return (
  //       <div>
  //         <h3>{PostDetail.title}</h3>
  //         <h5>작성자 | {PostDetail.writer.name}</h5>
  //         <h5>{PostDetail.description}</h5>
  //         <button onClick={deleteHandler}>글 삭제하기</button>
  //       </div>
  //     );
  //   } else {
  //     return <div>...loading</div>;
  //   }
}

export default PostEditPage;
