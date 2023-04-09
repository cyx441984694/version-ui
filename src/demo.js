import React, { Component } from 'react';
import './index.css';
import { Layout, Menu} from 'antd';
import { Icon } from '@ant-design/compatible';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Version from "./Version";
import MainPage from "./MainPage";
import Flow from "./Flow";



const { Header, Content, Sider } = Layout;

class RouterApp extends Component{
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  };
  toggle = () => {
    this.setState({
        collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Router>
          <Layout>
          <Header className='header'>
            <div className="logo" />
            <Menu style={{ display: 'block' }} theme="dark" mode="horizontal" defaultSelectedKeys={["header"]}>
              <Menu.Item key="header" style={{ float: 'right' }} >
                  <span>Setting </span>
                  <Link to="/" />
              </Menu.Item>
            </Menu>
          </Header>

          <Layout >
          <Sider style={{ minHeight: "100vh"}}
              width={200}
              // collapsible
              collapsed={this.state.collapsed}
              onCollapse={this.onCollapse}
              >
          <Menu style={{ height: '100%', borderRight: 0 }} mode="inline" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1" >
                  <Icon type="desktop" />
                  <span> Home </span>
                  <Link to="/" />
              </Menu.Item>
              <Menu.SubMenu style={{ marginLeft:'auto' }} 
                title={
                  <span>
                    <Icon type="pie-chart" />
                    &nbsp;&nbsp;&nbsp;&nbsp;Component
                  </span>}>
                <Menu.Item key="2">
                    <span>Version</span>
                    <Link to="/version" />
                </Menu.Item>
                <Menu.Item key="3">
                    <span>Flow</span>
                    <Link to="/flow" />
                </Menu.Item>
              </Menu.SubMenu>
          </Menu>
          </Sider>

          <Content style={{
                margin: "24px 16px",
                padding: 24,
                background: "#fff",
                minHeight: 280
              }}>
            <Routes>
              <Route path="/" element={<MainPage />}/>
              <Route path ="/version" element={<Version />}/>
              <Route path ="/flow" element={<Flow />}/>
            </Routes>
          </Content>
          <footer>Component UI ©2023 Created by Winnie</footer>
          </Layout>
          </Layout>
          
      </Router>
    );
  }
};

export default RouterApp;
