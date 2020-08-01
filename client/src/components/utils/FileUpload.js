import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { Icon } from "antd";
import Axios from "axios";

function FileUpload(props) {
  const [Files, setFiles] = useState([]);
  const drophandler = (files) => {
    let formData = new FormData();

    // 파일 보낼때 헤더에 컨텐트타입을 정의를 해줌으로써 백엔드에서 이 파일을 받을 때
    // 에러가 없이 받을 수 있도록 하는 것.
    const config = {
      header: { "content-type": "multipart/fomr-data" },
    };
    // 어펜드를 이용해서 파일 리스트에 정보 집어넣음.
    formData.append("file", files[0]);

    // 파일을 보내줄 때 formData와 config를 넣어주지 않으면 오류가 생김.
    Axios.post("/api/apply/uploadfile", formData, config).then((response) => {
      if (response.data.success) {
        console.log(response.data);
        setFiles([...Files, response.data.filePath]);
        props.refreshFunction([...Files, response.data.filePath]);
        console.log("파일 리스트", Files);
      } else {
        alert("파일을 첨부하는데 실패했습니다.");
      }
    });
  };

  const deleteHandler = (file) => {
    const currentIndex = Files.indexOf(file);
    let newFiles = [...Files];
    newFiles.splice(currentIndex, 1);
    setFiles(newFiles);
    props.refreshFunction(newFiles);
  };
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Dropzone onDrop={drophandler}>
        {({ getRootProps, getInputProps }) => (
          <section>
            <div
              style={{
                width: 300,
                height: 240,
                border: "1px solid lightgray",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              {...getRootProps()}
            >
              <input {...getInputProps()} />
              <Icon type="plus" style={{ fontSize: "3rem" }} />
            </div>
          </section>
        )}
      </Dropzone>
      <div
        style={{
          display: "flex",
          width: "350px",
          height: "240px",
          overflowX: "scroll",
        }}
      >
        {Files.map((file, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <img
              style={{ width: "160px", height: "170px" }}
              src="https://previews.123rf.com/images/tkacchuk/tkacchuk1412/tkacchuk141200194/34316368-%ED%9D%B0%EC%83%89-%EB%B0%B0%EA%B2%BD%EC%97%90-%EC%B2%A8%EB%B6%80-%ED%8C%8C%EC%9D%BC-%EC%95%84%EC%9D%B4%EC%BD%98%EC%9E%85%EB%8B%88%EB%8B%A4-.jpg"
              alt=""
            />
            <p style={{ textAlign: "center" }}>{file}</p>
            <button
              onClick={() => deleteHandler(file)}
              style={{ textAlign: "center" }}
            >
              파일 삭제
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FileUpload;
