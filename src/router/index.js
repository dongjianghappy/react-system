// 静态组件
import Login from '../views/login'
import notfound from '../views/notfound'

// 动态组件
// 频道组件
import ModuleDefault from '../views/channel'
import Channel from '../views/channel/cate'
import List from '../views/channel/article/'
import Recycle from '../views/channel/recycle'
import Article from '../views/channel/article/list-article'
import SettingChannel from '../views/channel/settingchannel'
import Label from '../views/channel/label'
import Collect from '../views/channel/collect'
import Comment from '../views/channel/comment'
import Praise from '../views/channel/praise'
import Download from '../views/channel/download'

// 基本组件
import Default from '../views/layout/components/default'
import Basic from '../views/basic'
import TodoList from '../views/todolist'
import Navigation from '../views/navigation'
import NavigationMain from '../views/navigation/mainNavigation/main'
import NavigationDetail from '../views/navigation/mainNavigation/navigation-detail'
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
import UserGrade from '../views/user/grade'
import UserRole from '../views/user/role'
import RoleGrade from '../views/user/role/grade'
import UserGroup from '../views/user/group'
import UserSign from '../views/user/sign'
import UserAudit from '../views/user/audit'
import UserBanuser from '../views/user/banuser'
import UserRecommend from '../views/user/recommend'
import UserSecurity from '../views/user/security/inedx'
import UserTheme from '../views/user/theme'










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
import OrderDoing from '../views/order/order-doing'
import OrderCompleted from '../views/order/order-completed'
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
import Message from '../views/service/message/'
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
    {
        name: "修改文档",
        path: "/admin/article/detail",
        component: Article, 
        isShow: false,
        exact: true 
    },
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
    ModuleDefault,
    Channel,
    List,
    Links,
    Advertisement,
    Announcement,
    Spread,
    Partner,
    Navigation,
    NavigationMain,
    NavigationDetail,
    Single,
    SingleArticle,
    Recycle,
    Label,
    Collect,
    Comment,
    Praise,
    Download,
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
    OrderDoing,
    OrderCompleted,
    Card,
    Service,
    MessageBoard,
    Feedback,
    Announcement,
    Job,
    Resume,
    Message,
    Customize,
    CustomizeList,
    Manager,
    Space,
    SettingChannel
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
            icon: item.icon,
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
            icon: item.icon,
            meta: {
                title: "",
                icon: "icon-link"
            }
       }
     })
   }


const a = loop(menuRouters)
export const adminRouter = asyncRoutes.concat(a)
