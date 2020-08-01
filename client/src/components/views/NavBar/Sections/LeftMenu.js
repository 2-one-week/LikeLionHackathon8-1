import React from "react";
import { Menu } from "antd";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
      <Menu.Item key="mail">
        <a href="/about">About</a>
      </Menu.Item>
      <Menu.Item>
        <a href="/alumni">Alumni</a>
      </Menu.Item>
      <SubMenu title={<span>Portfolio</span>}>
        <Menu.Item key="setting:1">
          <a href="/post/all">All</a>
        </Menu.Item>
        <Menu.Item key="setting:2">
          <a href="/post/upload">Upload</a>
        </Menu.Item>
      </SubMenu>

      <SubMenu title={<span>Apply</span>}>
          <Menu.Item key="setting:5"><a href="/apply">Apply</a></Menu.Item>
          <Menu.Item key="setting:6"><a href="/apply/myApply">My Apply</a></Menu.Item>
      </SubMenu>
      <Menu.Item>
        <a href="/contact">Contact</a>
      </Menu.Item>
    </Menu>
  );
}

export default LeftMenu;
