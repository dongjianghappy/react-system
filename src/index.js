import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'
import { mainRouter, adminRouter } from './router'
import store from '../src/store'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// 引入样式
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/admin" render={ routeProps => <App {...routeProps} />} />
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