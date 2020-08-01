import React, { useState } from "react";
import { Typography, Button, Form, message, Input, Icon } from "antd";
import { useSelector } from "react-redux";
import Axios from "axios";

const { TextArea } = Input;
const { Title } = Typography;

const PrivateOptions = [
  { value: 0, label: "Private" },
  { value: 1, label: "Public" },
];
const CategoryOptions = [
  { value: 0, label: "Flim & Animation" },
  { value: 1, label: "Autos & Vehicles" },
  { value: 2, label: "Music" },
  { value: 3, label: "Pets & Animals" },
];

function PostUploadPage() {
  const user = useSelector((state) => state.user);
  const [VideoTitle, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [Private, setPrivate] = useState(0);
  const [Category, setCategory] = useState("Flim & Animation");

  const onTitleChange = (event) => {
    setTitle(event.currentTarget.value);
  };
  const onDescriptionChange = (event) => {
    setDescription(event.currentTarget.value);
  };

  const onPrivateChange = (event) => {
    setPrivate(event.currentTarget.value);
  };
  const onCategoryChange = (event) => {
    setCategory(event.currentTarget.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const variables = {
      writer: user.userData._id,
      title: VideoTitle,
      description: Description,
      privacy: Private,
      category: Category,
    };
    console.log("var", variables);
    Axios.post("/api/post/upload", variables).then((response) => {
      console.log("ggggg", response);
      if (response.data.success) {
        message.success("성공적으로 업로드했습니다.");
      } else {
        alert("비디오를 업로드하는데에 실패 했습니다.");
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
        <select onChange={onPrivateChange}>
          {PrivateOptions.map((item, index) => (
            <option key={index} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
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

        <Button type="primary" size="large" onClick={onSubmit}>
          SUBMIT
        </Button>
      </Form>
    </div>
  );
}

export default PostUploadPage;
