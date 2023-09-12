import React, { useState } from "react";
import { Layout, Menu, theme, Button, Drawer, Modal, Form, Input } from "antd";
import {
  InstagramOutlined,
  TwitterOutlined,
  FacebookOutlined,
  YoutubeOutlined,
  MenuOutlined,
  UserOutlined,
  HomeOutlined,
  InfoCircleOutlined,
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
  const {
    token: { colorBgContainer },
  } = theme.useToken();

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
    <Layout>
      <Header className='header'>
        <div style={{ flex: 1 }}>
          <Button
            type='text'
            icon={<UserOutlined />}
            size='large'
            className='login-button'
            onClick={showLoginModal}
          >
            Login
          </Button>
        </div>
        <Link to='/'>
          <div className='demo-logo'>EIGEN NEWS</div>
        </Link>
        <div className='social-icons'>
          <div className='social-group'>
            <InstagramOutlined className='social-icon' />
            <TwitterOutlined className='social-icon' />
            <FacebookOutlined className='social-icon' />
            <YoutubeOutlined className='social-icon' />
          </div>
          <div className='menu-button-container'>
            <Button
              type='text'
              icon={<MenuOutlined className='menu-button' />}
              onClick={showDrawer}
            />
          </div>
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
        <Layout style={{ padding: "24px 0", background: colorBgContainer }}>
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
