import React, {mountNode, useState} from 'react'
import ReactDOM from 'react-dom';
import { Modal, Button } from 'antd';
import Chatbot from './Sections/Chatbot'
import { List, Icon, Avatar } from 'antd';


export default function ChatbotModal() {
const [visible, setVisible] = useState(false)

  const showModal = () => {
    setVisible(true)
  };

  const handleOk = (e) => {
    console.log(e);
    setVisible(false)
  };

    const handleCancel = (e) => {
    console.log(e);
        setVisible(false)
  };

    return (
      <>
        <Button type="primary" shape="circle" onClick={showModal} style={{display: 'flex', justifyContent:"center", alignItems: "center", width: "80px", height: "80px", backgroundColor:"orange", border: "none"}}>
          <div style={{display:"flex"}}><Icon type="robot" style={{display: 'flex', fontSize:"50px", justifyContent:"center", alignItems: "center"}} /></div>
        </Button>
        <Modal
          title="고대 멋사 챗봇"
          visible={visible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
            <Chatbot />
        </Modal>
      </>
    );
  }

