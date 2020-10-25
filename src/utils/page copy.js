const authorityPage = [
    {
        title: "网站信息",
        key: "m:site",
        children: [
            {
                title: "网站导航",
                key: "m:navigation",          
                children: [
                    {
                      title: '导航列表',
                      key: 'm:navigation:main'
                    },
                    {
                        title: '单页列表',
                        key: 'm:navigation:single'
                      }
                ]      
            },
            {
                title: "基本信息",
                key: "m:basic",            
            },
            {
                title: "幻灯片",
                key: "m:slideshow",  
                children: [
                    {
                      title: '轮播图设置',
                      key: 'm:slideshow:img'
                    }
                ]            
            },
            {
                title: "静态生成",
                key: "m:static",            
            },
        ]
    },
    {
        title: "运营中心",
        key: "m:business",
        children: [
            {
                title: "友情链接",
                key: "m:link",            
            },
            {
                title: "合作伙伴",
                key: "m:partner",            
            },
            {
                title: "推广管理",
                key: "m:spread",            
            },
            {
                title: "广告服务",
                key: "m:advertisement",            
            },
        ]
    },
    {
        title: "系统设置",
        key: "m:setting",
        children: [
            {
                title: "应用商城",
                key: "m:appstore",            
            },
            {
                title: "权限设置",
                key: "m:permissions",            
            },
            {
                title: "流量统计",
                key: "m:statistics", 
                children: [
                    {
                        title: "访问统计",
                        key: "m:statistics:visit",            
                    },
                    {
                        title: "来路域名",
                        key: "m:statistics:domain",            
                    },
                    {
                        title: "搜索引擎",
                        key: "m:statistics:engine",            
                    },
                    {
                        title: "IP统计",
                        key: "m:statistics:ip"         
                    },           
                ]
            },
            {
                title: "采集管理",
                key: "m:collection",   
                children: [
                    {
                      title: '节点管理',
                      key: 'm:collection:node'
                    },
                    {
                        title: '内容管理',
                        key: 'm:collection:article'
                      }
                ]           
            },            {
                title: "数据库",
                key: "m:mysql",            
            },
            {
                title: "模型管理",
                key: "m:customize",   
                children: [
                    {
                      title: '字段管理',
                      key: 'm:customize:field'
                    }
                ]    
            },
            {
                title: "登录日志",
                key: "m:log", 
                children: [
                    {
                      title: '管理员登录日志',
                      key: 'm:log:margin'
                    },
                    {
                        title: '用户登录日志',
                        key: 'm:log:user'
                      }
                ]             
            },
        ]
    },
    {
        title: "频道管理",
        key: "m:channel",
        children: [
            {
                title: "资讯",
                key: "m:article",   
                children: [
                    {
                      title: '职位管理',
                      key: 'm:service:job:position'
                    },
                    {
                        title: '求职简历',
                        key: 'm:service:job:resume'
                      },
                ]             
            },
            {
                title: "资源",
                key: "m:source", 
                children: [
                    {
                      title: '职位管理',
                      key: 'm:service:job:position'
                    },
                    {
                        title: '求职简历',
                        key: 'm:service:job:resume'
                      },
                ]               
            },
            {
                title: "技术",
                key: "m:tech",   
                children: [
                    {
                      title: '职位管理',
                      key: 'm:service:job:position'
                    },
                    {
                        title: '求职简历',
                        key: 'm:service:job:resume'
                      },
                ]             
            },
            {
                title: "图片",
                key: "m:picture",  
                children: [
                    {
                      title: '职位管理',
                      key: 'm:service:job:position'
                    },
                    {
                        title: '求职简历',
                        key: 'm:service:job:resume'
                      },
                ]              
            },
        ]
    },
    {
        title: "服务中心",
        key: "m:service",
        children: [
            {
                title: "基本信息",
                key: "m:service:basic",            
            },
            {
                title: "公告信息",
                key: "m:service:announcement",            
            },
            {
                title: "在线留言",
                key: "m:service:messageBoard",            
            },
            {
                title: "意见反馈",
                key: "m:service:feedback",            
            },
            {
                title: "招贤纳士",
                key: "m:service:job",
                children: [
                    {
                      title: '职位管理',
                      key: 'm:service:job:position'
                    },
                    {
                        title: '求职简历',
                        key: 'm:service:job:resume'
                      },
                ]    
            },
        ]
    },
    {
        title: "用户管理",
        key: "m:user",
        children: [
            {
                title: "用户类型",
                key: "m:user:type",  
                children: [
                    {
                      title: '用户管理',
                      key: 'm:user:type:list'
                    }
                ]              
            },
            {
                title: "会员权限",
                key: "m:user:grade",            
            },
            {
                title: "角色权限",
                key: "m:user:rolegrade",            
            },
            {
                title: "用户等级",
                key: "m:user:group",            
            },            {
                title: "积分设置",
                key: "m:user:sign",            
            },
            {
                title: "用户审核",
                key: "m:user:audit",            
            },
            {
                title: "用户禁言",
                key: "m:user:banuser",            
            },
            {
                title: "推荐管理",
                key: "m:user:recommend",            
            },{
                title: "保密问题",
                key: "m:user:security",            
            },
            {
                title: "主题风格",
                key: "m:user:theme",            
            },
        ]
    },
    // {
    //     title: "标签管理",
    //     path: "admin/link",
    //     key: "m:business",
    //     children: [
    //         {
    //             title: "标签分类",
    //             path: "admin/link",
    //             key: "m:link",            
    //         },
    //         {
    //             title: "标签列表",
    //             path: "admin/partner",
    //             key: "m:partner",            
    //         }
    //     ]
    // },
    // {
    //     title: "订单系统",
    //     path: "admin/link",
    //     key: "m:business",
    //     children: [
    //         {
    //             title: "订单管理",
    //             path: "admin/link",
    //             key: "m:link",            
    //         },
    //         {
    //             title: "优惠卷",
    //             path: "admin/partner",
    //             key: "m:partner",            
    //         }
    //     ]
    // },
    // {
    //     title: "微博",
    //     path: "admin/link",
    //     key: "m:business"
    // },
    // {
    //     title: "空间",
    //     path: "admin/link",
    //     key: "m:business"
    // },
]

export default authorityPage