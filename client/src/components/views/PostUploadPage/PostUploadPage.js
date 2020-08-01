import React, { useState } from "react";
import { Typography, Button, Form, message, Input, Icon } from "antd";
import { useSelector } from "react-redux";
import ImgUpload from "../../utils/ImgUpload";
import Axios from "axios";

const { TextArea } = Input;
const { Title } = Typography;

const CategoryOptions = [
  { value: 0, label: "선택하세요" },
  { value: 1, label: "멋사 8기" },
  { value: 2, label: "멋사 운영진" },
  { value: 3, label: "멋사 졸업생" },
];

function PostUploadPage(props) {
  const user = useSelector((state) => state.user);
  const [VideoTitle, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [Category, setCategory] = useState("선택하세요");

  const [Files, setFiles] = useState([]);

  const onTitleChange = (event) => {
    setTitle(event.currentTarget.value);
  };
  const onDescriptionChange = (event) => {
    setDescription(event.currentTarget.value);
  };

  const onCategoryChange = (event) => {
    setCategory(event.currentTarget.value);
  };

  const updateFiles = (newFiles) => {
    setFiles(newFiles);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const variables = {
      writer: user.userData._id,
      title: VideoTitle,
      description: Description,
      category: Category,
      files: Files,
    };
    console.log("var", variables);
    Axios.post("/api/post/upload", variables).then((response) => {
      console.log("ggggg", response);
      if (response.data.success) {
        message.success("성공적으로 업로드했습니다.");
        props.history.push("/post/all");
      } else {
        alert("이미지를 업로드하는데에 실패 했습니다.");
      }
    });
  };

  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <Title level={2}> Upload Video </Title>
      </div>

      <Form onSubmit={onSubmit}>
        <label>Title</label>
        <Input onChange={onTitleChange} value={VideoTitle} />
        <br />
        <br />
        <label>Description</label>
        <TextArea onChange={onDescriptionChange} value={Description} />
        <br />
        <br />
        <select onChange={onCategoryChange}>
          {CategoryOptions.map((item, index) => (
            <option key={index} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
        <br />
        <br />
        <label>피칭 자료 사진을 첨부하세요</label>
        <ImgUpload refreshFunction={updateFiles} />
        <br />
        <br />
        <Button type="primary" size="large" onClick={onSubmit}>
          SUBMIT
        </Button>
      </Form>
    </div>
  );
}

export default PostUploadPage;
