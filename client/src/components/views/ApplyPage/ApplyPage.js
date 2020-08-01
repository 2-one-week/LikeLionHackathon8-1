import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import FileUpload from "../../utils/FileUpload";
import Axios from "axios";

function ApplyPage(props) {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState(0);
  const [Department, setDepartment] = useState("");
  const [Sex, setSex] = useState("");
  const [Files, setFiles] = useState([]);

  const Departments = [
    { key: 1, value: "디자이너" },
    { key: 2, value: "개발자" },
    { key: 3, value: "기획자" },
  ];
  const Sexs = [
    { key: 1, value: "남성" },
    { key: 2, value: "여성" },
  ];

  const nameChangeHandler = (event) => {
    setName(event.currentTarget.value);
  };
  const emailChangeHandler = (event) => {
    setEmail(event.currentTarget.value);
  };
  const phonenumberChangeHandler = (event) => {
    setPhoneNumber(event.currentTarget.value);
  };
  const sexChangeHandler = (event) => {
    setSex(event.currentTarget.value);
  };
  const departmentChangeHandler = (event) => {
    setDepartment(event.currentTarget.value);
  };

  const updateFiles = (newFiles) => {
    setFiles(newFiles);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (!Name || !Email || !PhoneNumber || !Sex || !Department) {
      return alert("모든 값을 넣어주셔야 정상적으로 제출됩니다.");
    }

    const body = {
      name: Name,
      email: Email,
      phonenumber: PhoneNumber,
      sex: Sex,
      department: Department,
      files: Files,
    };

    console.log("바디", body);
    Axios.post("/api/apply", body).then((response) => {
      if (response.data.success) {
        console.log("이력서제출", response.data);
        alert("이력서 제출에 성공 했습니다.");
        props.history.push("/apply/success");
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
        <label>이름</label>
        <Input onChange={nameChangeHandler} value={Name} />
        <br />
        <br />
        <label>이메일</label>
        <Input onChange={emailChangeHandler} value={Email} />
        <br />
        <br />
        <label>연락처</label>
        <Input onChange={phonenumberChangeHandler} value={PhoneNumber} />
        <br />
        <br />
        <label>성별</label>
        <select onChange={sexChangeHandler} value={Sex}>
          {Sexs.map((item) => (
            <option key={item.key} value={item.key}>
              {" "}
              {item.value}{" "}
            </option>
          ))}
        </select>
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
        <br />
        <br />

        {/* DropZone */}
        <label>이력서를 첨부하세요</label>
        <FileUpload refreshFunction={updateFiles} />
        <br />
        <br />
        <button type="submit">Apply</button>
      </Form>
    </div>
  );
}

export default ApplyPage;
