import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'
import { mainRouter, adminRouter } from '@/router'
import store from '@/store'
import '@/index.css';
import App from '@/App';
import * as serviceWorker from '@/serviceWorker';
import enums from '@/static/constant/enum'
import isLogin from '@/utils/validations/loginAuth'



// 引入样式
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

React.$enums = enums

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/admin" component={isLogin(App)} />
        {
          mainRouter.map( route => {
            return <Route key={route.path} {...route} />
          })
        }
        <Redirect to="/admin" from="/" />
        <Redirect to="/404" />
      </Switch>
    </Router>
    
  </Provider>,
  document.getElementById('root')
);