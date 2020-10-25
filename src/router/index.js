// 静态组件
import Login from '../views/login'
import notfound from '../views/notfound'

// 动态组件
// 频道组件
import Channel from '../views/channel/components/content'
import List from '../views/channel/list'
import Recycle from '../views/channel/recycle'
import Article from '../views/channel/list-article'
import Label from '../views/channel/label'
// 基本组件
import Default from '../views/layout/components/default'
import Basic from '../views/basic'
import TodoList from '../views/todolist'
import Navigation from '../views/navigation'
import NavigationMain from '../views/navigation/main'
import Single from '../views/navigation/list'
import SingleArticle from '../views/navigation/list-article'
import menuRouter from '../views/menuRouter'
import Slideshow from '../views/slideshow'
import SlideshowList from '../views/slideshow/list'
// 运营组件
import Links from '../views/links'
import Advertisement from '../views/advertisement'
import AdvertisementLocation from '../views/advertisement/location'
import Partner from '../views/partner'
// 用户组件
import User from '../views/user'
import UserList from '../views/user/user-list'
import UserGrade from '../views/user/user-grade'
import UserRole from '../views/user/user-role'
import RoleGrade from '../views/user/user-roleGrade'
import UserGroup from '../views/user/user-group'
import UserSign from '../views/user/user-sign'
import UserAudit from '../views/user/user-audit'
import UserBanuser from '../views/user/user-banuser'
import UserRecommend from '../views/user/user-recommend'
import UserSecurity from '../views/user/user-security'
import UserTheme from '../views/user/user-theme'









// 设置组件
import Appstore from '../views/appstore'
import Permissions from '../views/appstore/permissions'
import Statistics from '../views/statistics'
import Domain from '../views/statistics/domain'
import Engine from '../views/statistics/engine'
import Ip from '../views/statistics/ip'
import Manager from '../views/log'
import Mysql from '../views/mysql'
import Collection from '../views/collection'
import CollectionList from '../views/collection/list'
import Tag from '../views/tag'
import TagList from '../views/tag/list'
import Order from '../views/order'
import Card from '../views/order/card'

// 服务组件
import Service from '../views/service'
import MessageBoard from '../views/service/messageBoard'
import Feedback from '../views/service/feedback'
import Announcement from '../views/service/announcement'
import announcementArticle from '../views/service/announcement/article'
import Job from '../views/service/job'
import JobArticle from '../views/service/job/article'
import Resume from '../views/service/job/resume'
import Spread from '../views/spread'
import Space from '../views/space'
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
    {
        module: "basic",
        name: "管理控制平台",
        path: "/admin",
        component: Default,
        isShow: false, 
        exact: true
    },
    // {
    //     module: "basic",
    //     name: "轮播图设置",
    //     path: "/admin/slideshow/list/:fid?",
    //     isShow: false,
    //     component: SlideshowList 
    // },     
    // {
    //     name: "修改文档",
    //     path: "/admin/source/article/:id?",
    //     component: Article, 
    //     isShow: false,
    //     exact: true 
    // },
    //  // 导航开始
    //  {
    //     name: "导航管理",
    //     path: "/admin/navigation/main/:channel_id?",
    //     component: navigationMain,
    //     isShow: false, 
    //     exact: true
    // },   
    // {
    //     name: "单页管理",
    //     path: "/admin/navigation/single",
    //     component: Navigation_single,
    //     isShow: false, 
    //     exact: true
    // },  
    // {
    //     name: "单页管理",
    //     path: "/admin/navigation/single/article",
    //     component: SingleArticle,
    //     isShow: false, 
    //     exact: true
    // }, 
    
    // {
    //     name: "单页管理",
    //     path: "/admin/user/list",
    //     component: UserList,
    //     isShow: false, 
    //     exact: true
    // },  

    {
        name: "单页管理",
        path: "/admin/menuRouter",
        component: menuRouter,
        isShow: false, 
        exact: true
    },  
]


const arrss = {
    menuRouter,
    Channel,
    List,
    Links,
    Advertisement,
    Announcement,
    Spread,
    Partner,
    Navigation,
    NavigationMain,
    Single,
    SingleArticle,
    Recycle,
    Label,
    Basic,
    Slideshow,
    SlideshowList,
    Static,
    Appstore,
    Permissions,
    Statistics,
    Domain,
    Engine,
    Ip,
    User,
    UserList,
    UserGrade,
    UserRole,
    RoleGrade,
    UserGroup,
    UserSign,
    UserAudit,
    UserBanuser,
    UserRecommend,
    UserSecurity,
    UserTheme,
    Collection,
    CollectionList,
    Mysql,
    Tag,
    TagList,
    Order,
    Card,
    Service,
    MessageBoard,
    Feedback,
    Announcement,
    Job,
    Resume,
    Customize,
    CustomizeList,
    Manager,
    Space
}



const menuRouters = JSON.parse(sessionStorage.getItem("menuList")) || [];


const loop = (data) => {
    return	data.map((item) => {
       if(item.children){

         return {
            module: item.module,
            name: item.name,
            path: item.path,
            channel: item.channel,
            component: arrss[item.component],
            isShow: item.isShow,
            exact: true,
            meta: {
                title: item.name,
                icon: item.icon
            },
            children: loop(item.children),
            // child: item.child
         }
       }
       return {
            module: item.module,
            name: item.name,
            path: item.path,
            channel: item.channel,
            component: arrss[item.component],
            isShow: item.isShow,
            exact: true,
            meta: {
                title: "",
                icon: "icon-link"
            }
       }
     })
   }


const a = loop(menuRouters)
export const adminRouter = asyncRoutes.concat(a)
