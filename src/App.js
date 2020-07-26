import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import './App.css'
import Frame from '../src/views/layout'
import { mainRouter, adminRouter } from './router'
import { isLogined } from './utils/auth'


// 手动按需加载
// import Button from 'antd/es/button'
// import 'antd/es/button/style/css'

// 自动按需加载需要在配置文件进行配置
// 通过npm run eject命令将配置文件调出来，之前默认隐藏
// 然后修改根目录下package.json文件，label


const App = (props) =>  {
    return isLogined ? 
    (
      <Frame>
        <Switch>
          {
            adminRouter.map( route => {
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  exact={route.exact}
                  render={ routeProps => {
                    return <route.component {...routeProps} />
                  }}
                />
              )
            })
          }
          <Redirect to={adminRouter[0].path} from="/admin" />
          <Redirect to="/404" />
        </Switch>
      </Frame>      
    ) : (
      <Redirect to="/login" />
    )
}

export default App
