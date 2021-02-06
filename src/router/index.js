// 静态组件
import Login from '../views/login/index'
import Test from '../views/login/test'
import notfound404 from '../views/notfound/404'

// 动态组件
// 频道组件
import ModuleDefault from '../views/channel'
import Channel from '../views/channel/cate'
import ChannelSetting from '../views/channel/setting'
import List from '../views/channel/article/'
import Recycle from '../views/channel/recycle'
import Article from '../views/channel/article/detail'
import SettingChannel from '../views/channel/setting/channel'
import Label from '../views/channel/label'
import Collect from '../views/channel/collect'
import Comment from '../views/channel/comment'
import Praise from '../views/channel/praise'
import Download from '../views/channel/download'

// 基本组件
import Default from '../views/layout/components/default'
import Basic from '../views/basic'
import Navigation from '../views/navigation'
import NavigationMain from '../views/navigation/main'
import Single from '../views/navigation/single'
import SingleArticle from '../views/navigation/single/article'
import menuRouter from '../views/menuRouter'
import Slideshow from '../views/slideshow'
import SlideshowList from '../views/slideshow/list'
// 运营组件
import Links from '../views/links/index'
import Advertisement from '../views/advertisement'
import Partner from '../views/partner'
// 用户组件
// import User from '../views/user'
import UserBasic from '../views/user/basic'
// import UserPassword from '../views/user/basic/UserPassword'
import UserDefault from '../views/user/default'
import UserList from '../views/user/userinfo'
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
import Visit from '../views/statistics/visit'
import Domain from '../views/statistics/domain'
import Engine from '../views/statistics/engine'
import Ip from '../views/statistics/ip'
import ManagerLoginLog from '../views/log'
import UserLoginLog from '../views/log/userLog'
import Operating from '../views/log/operating'
import Mysql from '../views/mysql'
import Collection from '../views/collection'
import collectionTemList from '../views/collection/tem-list'
import CollectionList from '../views/collection/list'
import CollectionRecycle from '../views/collection/recycle'
import Tag from '../views/tag'
import Order from '../views/order'
import OrderNew from '../views/order/new'
import OrderDoing from '../views/order/doing'
import OrderCompleted from '../views/order/completed'
import Card from '../views/order/card'

// 服务组件
import Service from '../views/service'
import MessageBoard from '../views/service/messageBoard'
import Feedback from '../views/service/feedback'
import Announcement from '../views/service/announcement'
import Email from '../views/email'
import Job from '../views/service/job'
import Resume from '../views/service/job/resume'
import Message from '../views/service/message/'
import MessageArticle from '../views/service/message/article'
import KnowledgeCate from '../views/service/knowledge/cate/index'
import KnowledgeList from '../views/service/knowledge/article/'
import KnowledgeArticle from '../views/service/knowledge/article/article'
import Spread from '../views/spread'
import Space from '../views/space'
import Static from '../views/static'
import Customize from '../views/customize'
import CustomizeList from '../views/customize/list'

import Vote from '../views/vote'
import VoteList from '../views/vote/list'

import Search from '../views/search'
import SearchView from '../views/search/view'
import SearchKeyword from '../views/search/keyword'
import SearchSetting from '../views/search/setting'

import Template from '../views/template'




export const mainRouter = [
    {
        path: "/login",
        component: Login
    },
    {
        path: "/test",
        component: Test
    },
    {
        path: "/404",
        component: notfound404
    }
]

const asyncRoutes = [
    {
        module: "basic",
        name: "首页",
        path: "/admin",
        component: Default,
        sidebar: false, 
        exact: true
    },
    {
        name: "单页管理",
        path: "/admin/menuRouter",
        component: menuRouter,
        sidebar: false, 
        exact: true
    },  
]


const arrss = {
    menuRouter,
    ModuleDefault,
    Channel,
    ChannelSetting,
    List,
    Article,
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
    Visit,
    Domain,
    Engine,
    Ip,
    // User,
    UserBasic,
    // UserPassword,
    UserDefault,
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
    collectionTemList,
    CollectionList,
    CollectionRecycle,
    Mysql,
    Tag,
    Order,
    OrderNew,
    OrderDoing,
    OrderCompleted,
    Card,
    Service,
    MessageBoard,
    Feedback,
    Announcement,
    Email,
    Job,
    Resume,
    Message,
    MessageArticle,
    KnowledgeCate,
    KnowledgeList,
    KnowledgeArticle,
    Customize,
    CustomizeList,
    ManagerLoginLog,
    UserLoginLog,
    Operating,
    Space,
    SettingChannel,
    Vote,
    VoteList,
    Search,
    SearchView,
    SearchKeyword,
    SearchSetting,
    Template,

    
}

const menuRouters = JSON.parse(sessionStorage.getItem("menuList")) || [];
const new_menuRouters = JSON.parse(sessionStorage.getItem("new_menuList")) || [];


const BreadcrumbArr = []

const loop = (data) => {
    return	data.map((item) => {
       if(item.children){

            let  aaa = {
                module: item.module,
                name: item.name,
                path: item.path,
                channel: item.channel,
                component: arrss[item.component],
                sidebar: item.sidebar,
                exact: true,
                icon: item.icon,
                meta: {
                    title: item.name,
                    icon: item.icon
                },
                children: loop(item.children),
            }

            if(item.node && item.sidebar === "true" && item.disabled === "true"){
                let cc = item.path;
                item.node = cc.replace('/admin', `/admin/${item.node}`);
            }
            BreadcrumbArr.push({
                name: item.name,
                path: item.path,
                node: item.node,
                disabled: item.disabled
            })
         return aaa
       }

       let bbb = {
            module: item.module,
            name: item.name,
            path: item.path,
            channel: item.channel,
            component: arrss[item.component],
            sidebar: item.sidebar,
            exact: true,
            icon: item.icon,
            meta: {
                title: "",
                icon: "icon-link"
            }
        }
        if(item.node && item.sidebar === "true" && item.disabled === "true"){
            let cc = item.path;
            item.node = cc.replace('/admin', `/admin/${item.node}`);
        }
        BreadcrumbArr.push({
            name: item.name,
            path: item.path,
            node: item.node,
            disabled: item.disabled
        })
       return bbb
     })
   }

const a = loop(menuRouters)
export const Breadcrumb = asyncRoutes.concat(BreadcrumbArr) 
export const adminRouter = asyncRoutes.concat(a)
