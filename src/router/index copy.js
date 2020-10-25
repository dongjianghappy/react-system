import config from './routeConfig'

import Login from '../views/login'
import Channel from '../views/channel/components/content'
import List from '../views/channel/list'
import Recycle from '../views/channel/recycle'
import Article from '../views/channel/article'
import Basic from '../views/basic'
import TodoList from '../views/todolist'
import navigationIndex from '../views/navigation'
import navigationMain from '../views/navigation/main'
import navigation from '../views/navigation/list'
import notfound from '../views/notfound'
import Default from '../views/layout/components/default'
import Links from '../views/links'
import menuRouter from '../views/menuRouter'
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
import service from '../views/service/components/content'
import messageBoard from '../views/service/messageBoard'
import feedback from '../views/service/feedback'
import announcement from '../views/service/announcement'
import announcementArticle from '../views/service/announcement/article'
import job from '../views/service/job'
import jobArticle from '../views/service/job/article'
import resume from '../views/service/job/resume'
import Slideshow from '../views/slideshow'
import SlideshowList from '../views/slideshow/list'
import spread from '../views/spread'
import Spaces from '../views/space'
import Static from '../views/static'
import Customize from '../views/customize'
import CustomizeList from '../views/customize/list'
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
    // {
    //     module: "basic",
    //     name: "幻灯片",
    //     path: "/admin/slideshow",
    //     isShow: true,
    //     component: Slideshow,
    //      meta: {
    //         title: "",
    //         icon: "icon-slideshow"
    //     }       
    // },   
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
        name: "图片空间",
        path: "/admin/space",
        isShow: false,
        component: Spaces 
    }, 

    {
        module: "basic",
        name: "网站信息",
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
                path: "/admin/basic",
                component: Basic,
                isShow: true,
                exact: true,
                meta: { title: "基本信息", icon: 'index'}
            },
            {
                path: "/admin/navigation",
                component: navigationIndex,
                isShow: true,
                exact: true,
                meta: { title: "网站导航", icon: 'index'}
            },
            {
                path: "/admin/slideshow",
                component: Slideshow,
                isShow: true,
                exact: true,
                meta: { title: "幻灯片", icon: 'index'}
            },
            {
                path: "/admin/static",
                component: Static,
                isShow: true,
                exact: true,
                meta: { title: "静态生成", icon: 'index'}
            }
        ]
    },
    {
        module: "basic",
        name: "友情链接",
        path: "/admin/link",
        component: Links,
        isShow: true,
        meta: {
            title: "",
            icon: "icon-link"
        },
    },
    {
        module: "basic",
        name: "路由",
        path: "/admin/menuRouter",
        component: menuRouter,
        isShow: true,
        meta: {
            title: "",
            icon: "icon-link"
        },
    },
    
    {
        module: "basic",
        name: "字段管理",
        path: "/admin/customize/list/:id?",
        isShow: false,
        component: CustomizeList 
    },   
    {
        module: "basic",
        name: "模型管理",
        path: "/admin/customize",
        component: Customize,
        isShow: true,
        meta: {
            title: "",
            icon: "icon-link"
        },
    },   
    {
        module: "basic",
        name: "登录日志",
        path: "/admin/log",
        component: Manager,
        isShow: true, 
        exact: true
    },    
    // 流量统计
    {
        module: "basic",
        name: "流量统计",
        path: "/admin/statistics",
        component: Statistics,
        isShow: true,
        exact: true,
        meta: {
            title: "广告中心",
            icon: "index"
        },
        children: [
            {
                path: "/admin/statistics",
                component: Statistics,
                isShow: true,
                exact: true,
                meta: { title: "访客统计", icon: 'index'}
            },
            {
                path: "/admin/statistics/domain",
                component: Domain,
                isShow: true,
                exact: true,
                meta: { title: "来路域名", icon: 'index'}
            },
            {
                path: "/statistics/engine",
                component: Engine,
                isShow: true,
                exact: true,
                meta: { title: "搜索引擎", icon: 'index'}
            },
            {
                path: "/admin/ip",
                component: Ip,
                isShow: true,
                exact: true,
                meta: { title: "IP统计", icon: 'index'}
            }
        ]
    },
    // 广告中心
    {
        module: "basic",
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
     // 导航开始
    {
        module: "user",
        name: "导航管理",
        path: "/admin/navigation/main/:channel_id?",
        component: navigationMain,
        isShow: false, 
        exact: true
    },   
    {
        module: "user",
        name: "单页管理",
        path: "/admin/navigation/single/:channel_id?",
        component: navigation,
        isShow: false, 
        exact: true
    },  
    // 导航结束   
    {
        module: "basic",
        name: "轮播图设置",
        path: "/admin/slideshow/list/:fid?",
        isShow: false,
        component: SlideshowList 
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
        name: "合作伙伴",
        path: "/admin/partner",
        component: Partner,
        isShow: true, 
        meta: {
            title: "",
            icon: "icon-partner"
        },        
        exact: true
    }, 
    {
        module: "business",
        name: "推广管理",
        path: "/admin/spread",
        component: spread,
        isShow: true, 
        meta: {
            title: "",
            icon: "icon-spread"
        },         
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
        name: "服务中心",
        path: "/admin/service",
        component: service,
        isShow: true, 
        exact: true
    },  
    // 服务中心
    {
        module: "basic",
        name: "在线留言",
        path: "/admin/service/message_board",
        component: messageBoard,
        isShow: true, 
        exact: true
    }, 
    {
        module: "basic",
        name: "意见反馈",
        path: "/admin/service/feedback",
        component: feedback,
        isShow: true, 
        exact: true
    },    
    {
        module: "basic",
        name: "公告",
        path: "/admin/service/announcement",
        component: announcement,
        isShow: true, 
        exact: true
    },  
    {
        module: "basic",
        name: "公告通知发布",
        path: "/admin/service/announcement/article",
        component: announcementArticle,
        isShow: true, 
        exact: true
    },     
    
    // 服务中心
    {
        module: "basic",
        name: "职位管理",
        path: "/admin/service/job",
        component: job,
        isShow: true, 
        exact: true
    },  
    {
        module: "basic",
        name: "新增职位",
        path: "/admin/service/job/article",
        component: jobArticle,
        isShow: true, 
        exact: true
    },   
    {
        module: "basic",
        name: "求职简历",
        path: "/admin/service/job/resume",
        component: resume,
        isShow: true, 
        exact: true
    },     

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


const menuRouters = JSON.parse(sessionStorage.getItem("menuList"));
function menusToRoutes(data){
    const result = []
    const children = []
    data = data || []
    data.forEach(item => {

        const rou = {
            module: item.module,
            flag: "channel",
            name: item.name,
            path: item.path,
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
                    path: list.path === 'index' ? rou.path : `${rou.path}/${list.path}/:fid`,
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

const a = menusToRoutes(menuRouters)
//const a = menusToRoutes(config.channel.list)

export const adminRouter = asyncRoutes.concat(a)
