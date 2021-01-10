import React, { useState } from "react";
import { Layout } from "antd";
import { BrowserRouter as Router } from "react-router-dom";

import Toper from "./components/header";
import Sidebar from "./components/sidebar";
import Position from "./components/position";
import Footer from "./components/footer";

const { Content } = Layout;

const Index = (props) => {
  let sidebar = sessionStorage.getItem("sidebar") || "basic";
  const [screen, setScreen] = useState(false);
  const [routes, setRoutes] = useState(sidebar);

  const onScreens = (data) => {
    setScreen(!screen);
  };

  const handleClick = (data) => {
    const routes = data;
    setRoutes(routes);
  };

  return (
    <Layout>
      <Router>
        <Toper onScreens={onScreens} screen={screen} handle={handleClick} />
        <Layout>
          <Sidebar screen={screen} routes={routes} handle={handleClick} />
          <Layout style={{ overflow: "hidden" }}>
            <Position handle={handleClick} routes={routes} />
            <Content
              className="site-layout-background"
              style={{
                padding: 25,
                margin: 0,
                minHeight: 280,
                overflow: "auto",
              }}
            >
              {props.children}
              <Footer />
            </Content>
          </Layout>
        </Layout>
      </Router>
    </Layout>
  );
};

export default Index;
