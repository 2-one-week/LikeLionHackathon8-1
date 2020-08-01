import React, { useState } from "react";
import { Button, Form, Input} from "antd";
import { useSelector } from "react-redux";
import Axios from "axios";
const { TextArea } = Input;
function ApplyPage(props) {
  const user = useSelector((state) => state.user);
  const [Department, setDepartment] = useState("");
  const [Content1,setContent1] = useState("");
  const [Content2,setContent2] = useState("");
  const [Content3,setContent3] = useState("");

  const Departments = [
    { key: 1, value: "개발자" },
    { key: 2, value: "기획자" },
    { key: 3, value: "디자이너" },
  ];
  const departmentChangeHandler = (event) => {
    setDepartment(event.currentTarget.value);
  };
  const content1ChangeHandler = (event) => {
    setContent1(event.currentTarget.value);
  };
  const content2ChangeHandler = (event) => {
    setContent2(event.currentTarget.value);
  };
  const content3ChangeHandler = (event) => {
    setContent3(event.currentTarget.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (!Department || !Content1 || !Content2 || !Content3) {
      return alert("모든 값을 넣어주셔야 정상적으로 제출됩니다.");
    }

    const body = {
      writer: user.userData._id,
      department: Department,
      content1: Content1,
      content2: Content2,
      content3: Content3
    };

  
    Axios.post("/api/apply", body).then((response) => {
      if (response.data.success) {
        alert("이력서 제출에 성공 했습니다.");
        props.history.push("/apply/myApply");
      } else {
        alert("이력서 제출에 실패 했습니다.");
      }
    });
  };

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
        <h2> 지원하기</h2>
      </div>

      <Form onSubmit={submitHandler}>
        {/* 그 외 입력폼 */}
        <br />
        <br />
        <label>1. 지원동기 (300자)</label>
        <TextArea style= {{height:"150px"}} onChange={content1ChangeHandler} value={Content1}/>
        <br />
        <br />        
        <label>2. 지금까지 가장 기억에 남는 프로젝트 (300자)</label>
        <TextArea style= {{height:"150px"}} onChange={content2ChangeHandler} value={Content2}/>
        <br />
        <br />
        <label>3. 멋자 (300자)</label>
        <TextArea style= {{height:"150px"}} onChange={content3ChangeHandler} value={Content3}/>
        <br />
        <br />
        <label>지원직무</label>
        <select onChange={departmentChangeHandler} value={Department}>
          {Departments.map((item) => (
            <option key={item.key} value={item.key}>
              {" "}
              {item.value}{" "}
            </option>
          ))}
        </select>
        <br/>
        <br/>
        <button style={{width:"100px",display:"flex", justifyContent:"center"}} type="submit">Apply</button>
      </Form>
    </div>
  );
}

export default ApplyPage;
