import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import '@/App.css'
import Frame from '@view/layout'
import Space from '@view/space'
import { mainRouter, adminRouter } from '@/router'
import { isLogined } from '@/utils/auth'


// 手动按需加载
// import Button from 'antd/es/button'
// import 'antd/es/button/style/css'

// 自动按需加载需要在配置文件进行配置
// 通过npm run eject命令将配置文件调出来，之前默认隐藏
// 然后修改根目录下package.json文件，label

const redner = (adminRouter) => {
  debugger
  return adminRouter.map( route => {

    if(route.children){

      return (<Route
        key={route.path}
        path={route.path}
        exact={route.exact}
        render={ routeProps => {
          return (
          <>
            <route.component {...routeProps} />
            {redner(route.children)}
          </>
          )
        }}
      />)
    }else{
    // 这里不能使用<></>包裹多层级，否则不生效
    return (<Route
      key={route.path}
      path={route.path}
      exact={route.exact}
      render={ routeProps => {
        return <route.component {...routeProps} />
      }}
    />)
    }
  })
}


const render = (route) =>{
  return route.map( route => {
     if(route.children){
      return route.children.map((list, i) => {

        if(list.children){

         
          
          return render(list.children)
        }else{

        // 这里不能使用<></>包裹多层级，否则不生效
        return (<Route
          key={list.path}
          path={list.path}
          exact={list.exact}
          render={ listProps => {
            console.log(list.exact);
            return <list.component {...listProps} />
          }}
        />)
      }
      })
    }else{
    // 这里不能使用<></>包裹多层级，否则不生效
    return (<Route
      key={route.path}
      path={route.path}
      exact={route.exact}
      render={ routeProps => {
        return <route.component {...routeProps} />
      }}
      
    />)
  }
  })
}




const Channels = (path) => {

  const module = path.split("/")[2]

  if(module === "space"){
    return(
      <Space>
        <Switch>
          {
            adminRouter.map( route => {
              return (

                route.children ?

                route.children.map((list, i) => (
                    
                  <Route
                    key={list.path}
                    path={list.path}
                    exact={list.exact}
                    render={ listProps => {
                      console.log(list.exact);
                      return <list.component {...listProps} />
                    }}
                  />
                ))
                
                :
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
      </Space>
    )
  }else{
    return(
      <Frame>
      <Switch>
        {
          render(adminRouter)
        }
        <Redirect to={adminRouter[0].path} from="/admin" />
        <Redirect to="/404" />
      </Switch>
    </Frame>  
    )
  }
}




const App = (props) =>  {

    return isLogined() ? 
      Channels(props.location.pathname)  
    : (
      <Redirect to="/login" />
    )
}

export default App
