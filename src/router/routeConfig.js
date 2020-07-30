import { Route } from "react-router-dom"

const routeConfig = {
    channel: {
        name: "频道",
        list: [
            {
                name: "资讯",
                path: "article",
                icon: 'icon-article',
                list: [
                    {
                        name: "资讯分类",
                        path: "index",
                        component: "Channel",
                        icon: 'icon-article'
                    },
                    {
                        name: "文档管理",
                        path: "list",
                        component: "List",
                        icon: 'icon-article'
                    }
                 ]
            },
            {
                name: "素材",
                path: "source",
                icon: 'icon-article',
                list: [
                    {
                        name: "资源分类",
                        path: "index",
                        component: "Channel",
                        icon: 'icon-article'
                    },
                    {
                        name: "资源管理",
                        path: "list",
                        component: "List",
                        icon: 'icon-article'
                    }
                 ]
            },
            {
                name: "技术",
                path: "tech",
                icon: 'icon-article',
                list: [
                    {
                        name: "技术分类",
                        path: "index",
                        component: "Channel",
                        icon: 'icon-article'
                    },
                    {
                        name: "文档管理",
                        path: "list",
                        component: "List",
                        icon: 'icon-article'
                    }
                 ]
            },
            {
                name: "图库",
                path: "picture",
                icon: 'icon-article',
                list: [
                    {
                        name: "图片分类",
                        path: "index",
                        component: "Channel",
                        icon: 'icon-article'
                    },
                    {
                        name: "图片管理",
                        path: "list",
                        component: "List",
                        icon: 'icon-article'
                    }
                 ]
            }
        ]
    }
}

export default routeConfig