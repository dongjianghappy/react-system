import React, { useState  } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Layout } from 'antd';

import Toper from './components/header'
import Sidebar from './components/sidebar'
import Position from './components/position'
import Footer from './components/footer'

const { Content } = Layout;



const Index = (props) =>  {

  const [ screen, setScreen ] = useState(false)
  const [ routes, setRoutes ] = useState("basic")

  const screens = (data) =>{
    setScreen(!screen)
  }

  const handleClick = (data) =>{
    const routes = data
    setRoutes(routes)
  }

    return (
      <Layout>
          <Router>
          <Toper screen={screens} handle={handleClick}/>
          <Layout style={{marginTop: 65}}>
            <Sidebar screen={screen} routes={routes} handle={handleClick} />
            <Layout style={{overflow:'hidden'}}>
              <Position handle={handleClick} / >
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
                <Footer />
              </Content>
            </Layout>
          </Layout>
          </Router>
        </Layout>
    )
}

export default Index

