import React, { useState } from "react";
import { Button, Form, Input} from "antd";
import Axios from "axios";
const { TextArea } = Input;

function MyApplyPage(props) {
  const [Department, setDepartment] = useState("");
  const [Content1,setContent1] = useState("");
  const [Content2,setContent2] = useState("");
  const [Content3,setContent3] = useState("");
  const [isContent, setIsContent] = useState(false);



    Axios.get("/api/apply").then((response) => {
      if (response.data.success) {
        console.log("이력서받기", response.data.contents);
        if(response.data.contents[0].department == 1){
          setDepartment("개발자");
        }
        else if(response.data.contents[0].department == 2 ){
          setDepartment("기획자");
        }else if(response.data.contents[0].department == 3 ){
          setDepartment("디자이너");
        }
        setContent1(response.data.contents[0].content1);
        setContent2(response.data.contents[0].content2);
        setContent3(response.data.contents[0].content3);
        setIsContent(true);
      } else {
        alert("이력서 제출에 실패 했습니다.");
      }
    });
if(!isContent){
  props.history.push("/apply");
  return <div>…loading</div>;
}
else{
  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "2rem auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h2> 지원서 확인하기</h2>
      </div>

      <Form>
        {/* 그 외 입력폼 */}
        <br />
        <br />
        <label>1. 지원동기 (300자)</label>
        <TextArea style= {{height:"150px"}} value={Content1}/>
        <br />
        <br />        
        <label>2. 지금까지 가장 기억에 남는 프로젝트 (300자)</label>
        <TextArea style= {{height:"150px"}}  value={Content2}/>
        <br />
        <br />
        <label>3. 멋자 (300자)</label>
        <TextArea style= {{height:"150px"}} value={Content3}/>
        <br />
        <br />
        <label>지원직무 </label>
        <span style={{fontWeight:"bold"}}>{Department}</span>
        <br/>
        <br/>
        <button style={{width: "100px",display:"flex", justifyContent:"center"}} type="submit">Edit</button>
      </Form>
    </div>
  );
}
}
export default MyApplyPage;
