import Login from '../views/login'
import Channel from '../views/channel'
import List from '../views/channel/list'
import Article from '../views/channel/article'
import Basic from '../views/basic'
import TodoList from '../views/todolist'
import Nav from '../views/navigation'
import notfound from '../views/notfound'
import Default from '../views/layout/components/default'
import Links from '../views/links'
import Advertisement from '../views/advertisement'

export const mainRouter = [
    {
        path: "/login",
        component: Login
    },
    {
        path: "/404",
        component: notfound
    }
]

export const adminRouter = [
    {
        name: "管理控制平台",
        path: "/admin",
        component: Default,
        isShow: false, 
        exact: true
    },
    {
        name: "资源分类",
        path: "/admin/sucai",
        component: Channel,
        isShow: true, 
        exact: true
    },
    {
        name: "资源管理",
        path: "/admin/sucai/list/:fid?",
        component: List, 
        isShow: true,
        exact: true
    },
    {
        name: "修改文档",
        path: "/admin/sucai/article/edit/:id?",
        component: Article, 
        isShow: false,
        exact: true 
    },
    {
        name: "基本信息",
        path: "/admin/basic",
        isShow: true,
        component: Basic 
    },
    {
        name: "导航",
        path: "/admin/nav",
        component: Nav,
        isShow: false, 
    },
    {
        name: "测试",
        path: "/admin/todoList",
        component: TodoList,
        isShow: false,
    },
    {
        name: "友情链接",
        path: "/admin/link",
        component: Links,
        isShow: true,
    },
    {
        name: "广告中心",
        path: "/admin/advertisement",
        component: Advertisement,
        isShow: true,
    }
]