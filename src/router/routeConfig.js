import { Divider } from "antd"
import { Route } from "react-router-dom"



const routeConfig = {
    channel: {
        name: "频道",
        list: [
        //     {
        //         name: "资讯",
        //         path: "article",
        //         icon: 'icon-article',
        //         list: [
        //             {
        //                 name: "资讯分类",
        //                 path: "index",
        //                 component: "Channel",
        //                 icon: 'icon-article'
        //             },
        //             {
        //                 name: "文档管理",
        //                 path: "list",
        //                 component: "List",
        //                 icon: 'icon-article'
        //             }
        //          ]
        //     },
        //     {
        //         name: "素材",
        //         path: "source",
        //         icon: 'icon-article',
        //         list: [
        //             {
        //                 name: "资源分类",
        //                 path: "index",
        //                 component: "Channel",
        //                 icon: 'icon-article'
        //             },
        //             {
        //                 name: "资源管理",
        //                 path: "list",
        //                 component: "List",
        //                 icon: 'icon-article'
        //             },
        //             {
        //                 name: "回收站",
        //                 path: "recycle",
        //                 component: "Recycle",
        //                 icon: 'icon-article'
        //             }
        //          ]
        //     },
        //     {
        //         name: "技术",
        //         path: "tech",
        //         icon: 'icon-article',
        //         list: [
        //             {
        //                 name: "技术分类",
        //                 path: "index",
        //                 component: "Channel",
        //                 icon: 'icon-article'
        //             },
        //             {
        //                 name: "文档管理",
        //                 path: "list",
        //                 component: "List",
        //                 icon: 'icon-article'
        //             }
        //          ]
        //     },
        //     {
        //         name: "图库",
        //         path: "picture",
        //         icon: 'icon-article',
        //         list: [
        //             {
        //                 name: "图片分类",
        //                 path: "index",
        //                 component: "Channel",
        //                 icon: 'icon-article'
        //             },
        //             {
        //                 name: "图片管理",
        //                 path: "list",
        //                 component: "List",
        //                 icon: 'icon-article'
        //             }
        //          ]
        //     }
        // ]

        {
            "id": "1",
            "fid": "0",
            "name": "资源分类",
            "module": "article",
            "path": "/admin/article",
            "isShow": "",
            "exact": "",
            "icon": "",
            "component": "Channel"
        }, {
            "id": "2",
            "fid": "0",
            "name": "资源管理",
            "module": "article",
            "path": "/admin/article/list",
            "isShow": "3213",
            "exact": "",
            "icon": "3242",
            "component": "List"
        }, {
            "id": "2",
            "fid": "0",
            "name": "资源管理",
            "module": "basic",
            "path": "/admin/link",
            "isShow": "3213",
            "exact": "",
            "icon": "3242",
            "component": "Links"
        }, {
            "id": "2",
            "fid": "0",
            "name": "路由",
            "module": "basic",
            "path": "/admin/menuRouter",
            "isShow": "3213",
            "exact": "",
            "icon": "3242",
            "component": "menuRouter"
        },

    ]
    }
}

export default routeConfig