'use client'
import React from 'react';
import { Layout, theme, Row, Col } from 'antd';

const { Header, Content } = Layout;

const DefaultLayout = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
      <Header style={{ background: colorBgContainer, boxShadow: '2px 2px 0 #ccc' }}>
        MSD
      </Header>
      <Content>
        <Row justify="center" style={{ minHeight: '100vh' }}>
          <Col span={20} style={{ maxWidth: '1600px' }}>
            {children}
          </Col>
        </Row>
      </Content>
    </>
  );
};

export default DefaultLayout;