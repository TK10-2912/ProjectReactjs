import './App.css';
import { Col, Row } from 'antd';
import React from 'react';
import Content from './Components/Content/router.config';
import SideMenu from './Components/SideMenu';
import Header from './Components/Header';
import Footer from './Components/Footer';

const App = () => {

  return (
    <>
      <Row style={{ height: '100%' }}>
        <Col span={3}>
          <SideMenu />
        </Col>
        <Col span={21} >
          <Row>
          <Header/>
          </Row>
          <Row style={{paddingLeft:'10p'}}>
          <Content />
          </Row>
        </Col>
        <Footer/>
      </Row>
    </>
  );
}

export default App;
