import React, { useState } from "react";
import LeftMenu from "./Sections/LeftMenu";
import RightMenu from "./Sections/RightMenu";
import { Drawer, Button, Icon } from "antd";
import "./Sections/Navbar.css";

function NavBar() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  const imgPath =
    "https://postfiles.pstatic.net/MjAyMDA4MDFfMjgw/MDAxNTk2MjQ4ODkyNTU1.TXzkDOzlkNOlDHkeLqgpPkHG_k-GNDYWFbE1yg8XsA0g.CQbiAItcPQ0Md4jK-ZVXf3JdRbz4xico0ZjdF3zNRvgg.PNG.sun_117/likelionwhite.png?type=w966";

  return (
    <nav
      className="menu"
      style={{
        position: "fixed",
        zIndex: 5,
        width: "100%",
        backgroundColor: "black",
      }}
    >
      <div className="menu__logo">
        <a href="/main">
          <img src={imgPath} style={{ width: "100%", height: "40px" }} />
        </a>
      </div>
      <div className="menu__container">
        <div className="menu_left">
          <LeftMenu mode="horizontal" />
        </div>
        <div className="menu_rigth">
          <RightMenu mode="horizontal" />
        </div>
        <Button
          className="menu__mobile-button"
          type="primary"
          onClick={showDrawer}
        >
          <Icon type="align-right" />
        </Button>
        <Drawer
          title="메뉴 바로가기"
          placement="right"
          className="menu_drawer"
          closable={false}
          onClose={onClose}
          visible={visible}
        >
          <LeftMenu mode="inline" />
          <RightMenu mode="inline" />
        </Drawer>
      </div>
    </nav>
  );
}

export default NavBar;
