import config from './routeConfig'

import Login from '../views/login'
import Channel from '../views/channel'
import List from '../views/channel/list'
import Article from '../views/channel/article'
import Basic from '../views/basic'
import TodoList from '../views/todolist'
import navigationIndex from '../views/navigation'
import navigationMain from '../views/navigation/main'
import navigation from '../views/navigation/list'
import notfound from '../views/notfound'
import Default from '../views/layout/components/default'
import Links from '../views/links'
import Advertisement from '../views/advertisement'
import AdvertisementLocation from '../views/advertisement/location'
import User from '../views/user'
import UserGrade from '../views/user/grade'
import userList from '../views/user/user-list'
import Appstore from '../views/appstore'
import Permissions from '../views/appstore/permissions'
import Statistics from '../views/statistics'
import Domain from '../views/statistics/domain'
import Engine from '../views/statistics/engine'
import Ip from '../views/statistics/ip'
import Manager from '../views/log'
import Partner from '../views/partner'
import Mysql from '../views/mysql'
import Collection from '../views/collection'
import CollectionList from '../views/collection/list'
import Tags from '../views/tag'
import MessageBoard from '../views/service/messageBoard'
import Slideshow from '../views/slideshow'
import SlideshowList from '../views/slideshow/list'

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

const asyncRoutes = [
    {
        module: "basic",
        name: "管理控制平台",
        path: "/admin",
        component: Default,
        isShow: false, 
        exact: true
    },
    {
        module: "basic",
        name: "基本信息",
        path: "/admin/basic",
        isShow: true,
        component: Basic 
    },
    {
        module: "basic",
        name: "轮播图设置",
        path: "/admin/slideshow/list",
        isShow: false,
        component: SlideshowList 
    }, 
    {
        module: "basic",
        name: "幻灯片",
        path: "/admin/slideshow",
        isShow: true,
        component: Slideshow 
    },    
    {
        name: "修改文档",
        path: "/admin/sucai/article/edit/:id?",
        component: Article, 
        isShow: false,
        exact: true 
    },

    /**
     * 运营
     */
    {
        module: "business",
        name: "友情链接",
        path: "/admin/link",
        component: Links,
        isShow: true,
    },
    {
        module: "business",
        name: "合作伙伴",
        path: "/admin/partner",
        component: Partner,
        isShow: true, 
        exact: true
    }, 
    {
        name: "广告管理",
        path: "/admin/advertisement/location",
        component: AdvertisementLocation,
        isShow: true,
        exact: true,
        meta: {
            title: "广告中心",
            icon: "index"
        }
    },
    {
        module: "business",
        name: "广告中心",
        path: "/admin/advertisement",
        component: Advertisement,
        isShow: true,
        exact: true,
        meta: {
            title: "广告中心",
            icon: "index"
        },
        children: [
            {
                path: "/admin/advertisement",
                component: Advertisement,
                isShow: true,
                exact: true,
                meta: { title: "广告管理", icon: 'index'}
            },
            {
                path: "/admin/advertisement/location",
                component: Advertisement,
                isShow: true,
                exact: true,
                meta: { title: "广告位", icon: 'index'}
            }
        ]
    },
    /**
     *  设置
     */
    // 应用商城
    {
        module: "setting",
        name: "应用商城",
        path: "/admin/appstore",
        component: Appstore,
        isShow: true, 
        exact: true
    },  
    {
        module: "setting",
        name: "功能权限",
        path: "/admin/appstore/permissions",
        component: Permissions,
        isShow: true, 
        exact: true
    },     

     // 流量统计
    {
        module: "setting",
        name: "流量统计",
        path: "/admin/statistics",
        component: Statistics,
        isShow: true, 
        exact: true
    },  
    {
        module: "setting",
        name: "来路域名",
        path: "/admin/statistics/domain",
        component: Domain,
        isShow: true, 
        exact: true
    }, 
    {
        module: "setting",
        name: "搜索引擎",
        path: "/admin/statistics/engine",
        component: Engine,
        isShow: true, 
        exact: true
    },   
    {
        module: "setting",
        name: "IP统计",
        path: "/admin/statistics/ip",
        component: Ip,
        isShow: true, 
        exact: true
    },  
    // 统计结束
    {
        module: "setting",
        name: "登录日志",
        path: "/admin/log",
        component: Manager,
        isShow: true, 
        exact: true
    },       
    {
        module: "setting",
        name: "功能权限",
        path: "/admin/appstore/permissions",
        component: Permissions,
        isShow: true, 
        exact: true
    },  
    {
        module: "setting",
        name: "数据库",
        path: "/admin/mysql",
        component: Mysql,
        isShow: true, 
        exact: true
    },     
    // 采集中心开始
    {
        module: "collection",
        name: "节点管理",
        path: "/admin/collection",
        component: Collection,
        isShow: true, 
        exact: true
    },  
    {
        module: "setting",
        name: "采集列表",
        path: "/admin/collection/list",
        component: CollectionList,
        isShow: true, 
        exact: true
    },  
    {
        module: "tag",
        name: "标签管理",
        path: "/admin/tag",
        component: Tags,
        isShow: true, 
        exact: true
    }, 
    // 服务中心
    {
        module: "service",
        name: "留言板",
        path: "/admin/service/messageboard",
        component: MessageBoard,
        isShow: true, 
        exact: true
    },     
    // 导航开始
    {
        name: "导航首页",
        path: "/admin/navigation",
        component: navigationIndex,
        isShow: true, 
        exact: true
    },   
    {
        module: "user",
        name: "导航管理",
        path: "/admin/navigation/main",
        component: navigationMain,
        isShow: true, 
        exact: true
    },   
    {
        module: "user",
        name: "单页管理",
        path: "/admin/navigation/single",
        component: navigation,
        isShow: true, 
        exact: true
    },  
    // 导航结束
    {
        name: "测试",
        path: "/admin/todoList",
        component: TodoList,
        isShow: false,
    },
    {
        module: "user",
        name: "用户管理",
        path: "/admin/user",
        component: User,
        isShow: true, 
        exact: true
    }, 
    
    // 用户路由
    {
        name: "用户管理",
        path: "/admin/user/list",
        component: userList,
        isShow: true, 
        exact: true
    },   
    {
        module: "user",
        name: "权限列表",
        path: "/admin/user/grade",
        component: UserGrade,
        isShow: true, 
        exact: true
    },   
    {
        module: "user",
        name: "用户等级",
        path: "/admin/user",
        component: User,
        isShow: true, 
        exact: true
    },   
    {
        module: "user",
        name: "积分设置",
        path: "/admin/user",
        component: User,
        isShow: true, 
        exact: true
    },     
    {
        module: "user",
        name: "用户审核",
        path: "/admin/user",
        component: User,
        isShow: true, 
        exact: true
    },   
    {
        module: "user",
        name: "用户禁言",
        path: "/admin/user",
        component: User,
        isShow: true, 
        exact: true
    }, 
    {
        module: "user",
        name: "推荐关注",
        path: "/admin/user",
        component: User,
        isShow: true, 
        exact: true
    },  
    {
        module: "user",
        name: "密保问题",
        path: "/admin/user",
        component: User,
        isShow: true, 
        exact: true
    }, 
    {
        module: "user",
        name: "风格主题",
        path: "/admin/user",
        component: User,
        isShow: true, 
        exact: true
    }, 

]



function menusToRoutes(data){
    const result = []
    const children = []

    data.forEach(item => {

        const rou = {
            module: item.path,
            flag: "channel",
            name: item.name,
            path: `/admin/${item.path}`,
            component: Channel,
            isShow: true,
            exact: true,
            meta: {
                title: item.name,
                icon: item.icon
            },
            children: []
        }

        if(item.list){
            item.list.forEach( list => {
                rou.children.push({
                    path: list.path === 'index' ? rou.path : `${rou.path}/list/:fid`,
                    component: list.component === 'Channel' ? Channel : List , // 暂时采用这种方式处理
                    isShow: true,
                    exact: true,
                    meta: { title: list.name, icon: 'index'}
                })
            })
        }

        result.push(rou)
    })

    return result
}

function generateRoutes(children, item) {
    if (item.name) {
        //children.push(asyncRoutes[item.name])
    } else if (item.list) {
        item.list.forEach(e => {
            generateRoutes(children, e)
        })
    }
}

const a = menusToRoutes(config.channel.list)
export const adminRouter = asyncRoutes.concat(a)
