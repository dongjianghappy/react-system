import https from '../utils/http'

const http = new https()

export default {
	//用户登录
	Login(params){
		return http.request('user', 'Login', 'post', params)
    },	
	// 默认数据
	Default(params){
		return http.request('vue', 'defaultPage', 'post', params)
    },	
    
    // 单个列表详情接口
    detail(params) {
        return http.request('vue', 'detail','post', params)
    },      
    // 新增
    insert(params) {
        return http.request('common', 'insert', 'post', params)
    },    
    // 删除
    delete(params) {
        return http.request('common', 'delete', 'post', params)
    },   
    // 更改
    update(params) {
        return http.request('common', 'update', 'post', params)
    }, 
    // 查询
    select(params) {
        return http.request('vue', 'select', 'post', params)
    },

    // 新增
    insertArticle(params) {
        return http.request('article', 'insert', 'post', params)
    }, 
    // 删除文档
    deleteArticle(params) {
        return http.request('article', 'delete', 'post', params)
    },  
    // 删除和还原
    removeAndRestore(params) {
        return http.request('article', 'removeAndRestore', 'post', params)
    },  
    // 更改
    updateArticle(params) {
        return http.request('article', 'update', 'post', params)
    },     

    // 文章列表查询接口
    articleList(params) {
        return http.request('vue', 'articleList', 'post', params)
    }, 
    // 分类列表查询接口
    cateList(params) {
        return http.request('vue', 'cateList', 'post', params)
    }, 
    // 分类信息查询接口
    cateDetail(params) {
        return http.request('vue', 'cateDetail', 'post', params)
    },  
    // 选择分类
    systemCate(params) {
        return http.request('common', 'systemCate', 'post', params)
    },    
    // 移动文档
    moveAticle(params) {
        return http.request('common', 'moveAticle', 'post', params)
    },  
    // 文章详情查询接口
    articleDetail(params) {
        return http.request('vue', 'articleDetail', 'post', params)
    },  
    // 更新状态
    updateStatus(params) {
        return http.request('common', 'updateStatus', 'post', params)
    },

     // 用户查询
     userList(params) {
        return http.request('vue_user', 'userList', 'post', params)
    }, 

     // 用户查询
     userDetail(params) {
        return http.request('vue_user', 'userDetail', 'post', params)
    }, 
    
     // 用户推送
     push(params) {
        return http.request('user', 'push', 'post', params)
    },   

    // 用户权限
    userGrade(params) {
        return http.request('vue_user', 'userGrade', 'post', params)
    },  
    // 用户等级
    userGroup(params) {
        return http.request('vue_user', 'userGroup', 'post', params)
    }, 
    // 用户审核
    userAudit(params) {
        return http.request('vue_user', 'userAudit', 'post', params)
    },  
    // 用户禁言
    userBanuser(params) {
        return http.request('vue_user', 'userBanuser', 'post', params)
    },      
    // 推荐关注
    userRecommend(params) {
        return http.request('vue_user', 'userRecommend', 'post', params)
    },  
    // 密保问题
    userSecurity(params) {
        return http.request('vue_user', 'userSecurity', 'post', params)
    },  
    
    // 主题
    theme(params) {
        return http.request('vue_user', 'theme', 'post', params)
    },      
    // 主题
    orderCard(params) {
        return http.request('vue', 'orderCard', 'post', params)
    },  
    // 关闭
    openAndClose(params) {
        return http.request('common', 'openAndClose', 'post', params)
    },   
    // 幻灯片
    slideshow(params) {
        return http.request('vue', 'slideshow', 'post', params)
    },     
    // 幻灯片
    slideshowList(params) {
        return http.request('vue', 'slideshowList', 'post', params)
    }, 

    // 图片空间
    space(params) {
        return http.request('space', 'space', 'get', params)
    },
    // 创建文件夹
    createfile(params) {
        return http.request('space', 'createfile', 'post', params)
    }, 

    // 删除图片
    deletefile(params) {
        return http.request('space', 'deletefile', 'post', params)
    },     

    // 自定义
    anpassen(params) {
        return http.request('vue', 'anpassen', 'post', params)
    },   
    // 自定义字段管理
    anpassen_field(params) {
        return http.request('vue', 'anpassen_field', 'post', params)
    },   
    // 新增字段
    add_anpassen(params) {
        return http.request('vue', 'add_anpassen', 'post', params)
    },          
    // 更改字段
    update_anpassen(params) {
        return http.request('vue', 'update_anpassen', 'post', params)
    },     
    // 删除字段
    delete_columns(params) {
        return http.request('vue', 'delete_columns', 'post', params)
    },  
    
    // 获取自定义字段
    getColumns(params) {
        return http.request('vue', 'getColumns', 'post', params)
    },  

    // 频道首页导航
    navList(params) {
        return http.request('vue', 'navList', 'post', params)
    }, 
    // 导航列表
    navigation(params) {
        return http.request('vue', 'navigation', 'post', params)
    },     
    // 单页列表
    singleNav(params) {
        return http.request('vue', 'singleNav', 'post', params)
    },  
    // 更新静态
    updateStatic(params) {
        return http.request('statics', 'updateStatic', 'post', params)
    },
    // 获取标签值
    getFlag(params) {
        return http.request('common', 'tagCheckbox', 'post', params)
    },   
    
    // 获取tag标签
    getTag(params) {
        return http.request('common', 'getTag', 'post', params)
    },     
    
     // 获取路由信息r
     getRouterInfo(params) {
        return http.request('vue', 'routerInfo', 'post', params)
    },     
    // 基本信息
    basicInfo(params) {
        return http.request('vue', 'basicInfo', 'post', params)
    },
    // 更新基本信息
    updateInfo(params) {
        return http.request('vue', 'updateBasicInfo', 'post', params)
    },
    // 数据库列表
    mysql(params) {
        return http.request('vue', 'mysql', 'post', params)
    }, 
    // 数据库备份
    backup(params) {
        return http.request('database', 'backup', 'post', params)
    },    
    // 应用商城
    appstore(params) {
        return http.request('vue', 'appstore', 'post', params)
    }, 
    // 静态生成列表
    static(params) {
        return http.request('vue', 'staticList','post', params)
    },     
    // 更新状态
    changeData(params) {
        return http.request('common', 'changeData','post', params)
    }, 
    // 路由查询
    routerSelect(params) {
        return http.request('vue', 'routerSelect','post', params)
    }, 
    // 角色权限
    rolegrade(params) {
        return http.request('vue', 'rolegrade','post', params)
    },  
    // 更改用户信息
    editUserInfo(params) {
        return http.request('user', 'editUserInfo','post', params)
    },  
    
    // 评论
    comment(params) {
        return http.request('vue', 'comment','post', params)
    },   
    
    // 收藏
    collect(params) {
        return http.request('vue', 'collect','post', params)
    },   
    
    // 收藏
    praise(params) {
        return http.request('vue', 'praise','post', params)
    },   
    
    // 下载
    download(params) {
        return http.request('vue', 'download','post', params)
    },   
    
    // 在线留言
    messageBoard(params) {
        return http.request('vue', 'messageBoard','post', params)
    },  
    
    // 查看留言
    viewMessageBoard(params) {
        return http.request('vue', 'view_messageBoard','post', params)
    },   
    
    // 回复留言
    replyMessageBoard(params) {
        return http.request('vue', 'reply_messageBoard','post', params)
    },      
       
    // 在线留言
    feedback(params) {
        return http.request('vue', 'feedback','post', params)
    },     
    
    // 访问统计
    visitStatistics(params) {
        return http.request('vue', 'visit_statistics','post', params)
    },      

    // 今日受访
    interviewedTodayStatistics(params) {
        return http.request('vue', 'related_statistics','post', params)
    },      
    
    // 今日IPI
    todayIp(params) {
        return http.request('vue', 'today_ip','post', params)
    },  

    // 今日IPI
    ipDetial(params) {
        return http.request('vue', 'ip_detial','post', params)
    },
    
    // 来路域名占比
    domainPercentage(params) {
        return http.request('vue', 'domain_percentage','post', params)
    },    

    // 来路域名占比
    enginePercentage(params) {
        return http.request('vue', 'engine_percentage','post', params)
    },   
    
    

}