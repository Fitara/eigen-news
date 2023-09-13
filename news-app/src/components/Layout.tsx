import React, { useState } from "react";
import { Layout, Menu, Button, Drawer, Modal, Form, Input } from "antd";
import {
  InstagramOutlined,
  TwitterOutlined,
  FacebookOutlined,
  YoutubeOutlined,
  MenuOutlined,
  UserOutlined,
  HomeOutlined,
  InfoCircleOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Outlet, Link } from "react-router-dom";

const { Header, Content, Footer } = Layout;

interface ItemType {
  key: string;
  label: string;
  icon: JSX.Element;
}

const items: ItemType[] = [
  { key: "Home", label: "Home", icon: <HomeOutlined /> },
  { key: "About", label: "About", icon: <InfoCircleOutlined /> },
];

const Display: React.FC = () => {

  const [isDrawerVisible, setDrawerVisible] = useState(false);
  const [isLoginModalVisible, setLoginModalVisible] = useState(false);

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const onClose = () => {
    setDrawerVisible(false);
  };

  const showLoginModal = () => {
    setLoginModalVisible(true);
  };

  const handleLoginCancel = () => {
    setLoginModalVisible(false);
  };

  return (
    <Layout className="layout">
      <Header className='header'>
        <div className="header-one">
          <Button
            type='text'
            size='middle'
            icon={<UserOutlined />}
            className='login-button'
            onClick={showLoginModal}
          >
            <span className="login-text">Login</span>
          </Button>
          <Input
            size="middle"
            type="text"
            spellCheck="false"
            placeholder="Search"
            className='search-input'
            prefix={<SearchOutlined />} />
        </div>
        <Link to='/'>
          <div className='header-logo'>EIGEN NEWS</div>
        </Link>
        <div className='header-social'>
          <div className='social-icons'>
            <InstagramOutlined className='social-icon' />
            <TwitterOutlined className='social-icon' />
            <FacebookOutlined className='social-icon' />
            <YoutubeOutlined className='social-icon' />
          </div>
          <Button
            type='text'
            className="menu-button"
            icon={<MenuOutlined className='menu-button' />}
            onClick={showDrawer}
          />
        </div>
      </Header>
      <Drawer
        placement='right'
        closable={false}
        onClose={onClose}
        open={isDrawerVisible}
        width={200}
      >
        <Menu
          mode='vertical'
          defaultSelectedKeys={["Home"]}
          style={{ height: "100%" }}
          className='drawer-menu'
        >
          {items.map((item, index) => (
            <Menu.Item key={index} icon={item.icon}>
              {item.label}
            </Menu.Item>
          ))}
        </Menu>
      </Drawer>
      <Content style={{ padding: "0 50px" }}>
        <Layout style={{ padding: "24px 0" }}>
          <Content style={{ padding: "0 24px", minHeight: 280 }}>
            <Outlet />
          </Content>
        </Layout>
      </Content>
      <Footer className='footer'>Ant Design ©2023 Created by Ant UED</Footer>
      <Modal
        title='Login'
        open={isLoginModalVisible}
        onCancel={handleLoginCancel}
        footer={null}
      >
        <Form
          name='basic'
          initialValues={{ remember: true }}
          className='login-form'
          onFinish={(values) => {
            console.log("Received values:", values);
          }}
        >
          <Form.Item
            label='Username'
            name='username'
            className='login-form-item'
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input className='login-input' />
          </Form.Item>

          <Form.Item
            label='Password'
            name='password'
            className='login-form-item'
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password className='login-input' />
          </Form.Item>

          <Form.Item style={{ textAlign: "center" }}>
            <Button
              type='default'
              htmlType='submit'
              className='login-button'
              style={{ textAlign: "center" }}
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </Layout>
  );
};

export default Display;
