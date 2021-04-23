import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Layout } from "antd";

import Toper from "./components/header";
import Sidebar from "./components/sidebar";
import Position from "./components/position";
import Main from "./components/content";

const { Content } = Layout;

const Spaces = (props) => {
  return (
    <Layout>
      <Router>
        {/* <Toper /> */}
        <Layout>
          {/* <Sidebar /> */}
          <Layout style={{ overflow: "hidden" }}>
            <Content
              className="site-layout-background relative"
              style={{
                padding: "55px 12px",
                margin: 0,
                minHeight: 280,
                overflow: "auto",
              }}
            >
              <Main show="space" span="3"></Main>
            </Content>
          </Layout>
        </Layout>
      </Router>
    </Layout>
  );
};

export default Spaces;
