import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Layout } from 'antd';

import Toper from './components/header'
import Sidebar from './components/sidebar'
import Position from './components/position'
import Main from './components/content'

const { Content } = Layout;

const Channel = (props) =>  {
    return (
      <Layout>
          <Router>
          <Toper/>
          <Layout>
            <Sidebar />
            <Layout style={{overflow:'hidden'}}>
              <Position/ >
              <Content
                className="site-layout-background"
                style={{
                  padding: 25,
                  margin: 0,
                  minHeight: 280,
                  overflow: "auto"
                }}
              >
               {props.children}
              </Content>
            </Layout>
          </Layout>
          </Router>
        </Layout>
    )
}

export default Channel

