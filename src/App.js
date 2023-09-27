import './App.css';
import {  Col, Row } from 'antd';
import React from 'react';
import Content from './Components/Content/router.config';
import SideMenu from './Components/SideMenu';

const App =()=> {

  return (
    <>
      <Row style={{ height:'100%' }}>
        <Col span={3}>
          <SideMenu/>
        </Col>
        <Col span={21} style={{ paddingLeft:'10px' }}>
          <Content />
        </Col>
      </Row>
    </>
  );
}

export default App;
