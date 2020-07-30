import https from '../utils/http'

const http = new https()

export default {
	//用户登录
	Login(params){
		return http.request('user', 'Login', params)
    },	
    // 新增
    insert(params) {
        return http.request('common', 'insert', params)
    },   
    // 删除和还原
    removeAndRestore(params) {
        return http.request('common', 'removeAndRestore', params)
    },   
    // 删除
    delete(params) {
        return http.request('common', 'delete', params)
    },   
    // 更改
    update(params) {
        return http.request('common', 'update', params)
    }, 
    // 查询
    select(params) {
        console.log(JSON.stringify(params));
        return http.request('vue', 'select', params)
    },
    // 分类信息查询接口
    cateDetail(params) {
        return http.request('vue', 'cateDetail', params)
    },     
    // 文章详情查询接口
    articleDetail(params) {
        return http.request('vue', 'articleDetail', params)
    },  
    // 更新状态
    updateStatus(params) {
        return http.request('common', 'updateStatus', params)
    },

     // 用户查询
     userList(params) {
        return http.request('vue_user', 'userList', params)
    },  
    // 用户权限
    userGrade(params) {
        return http.request('vue_user', 'userGrade', params)
    },  
    // 用户等级
    userGroup(params) {
        return http.request('vue_user', 'userGroup', params)
    }, 
    // 用户审核
    userAudit(params) {
        return http.request('vue_user', 'userAudit', params)
    },  
    // 用户禁言
    userBanuser(params) {
        return http.request('vue_user', 'userBanuser', params)
    },      
    // 推荐关注
    userRecommend(params) {
        return http.request('vue_user', 'userRecommend', params)
    },  
    // 密保问题
    userSecurity(params) {
        return http.request('vue_user', 'userSecurity', params)
    },  
    
    // 主题
    theme(params) {
        return http.request('vue_user', 'theme', params)
    },      
    // 主题
    orderCard(params) {
        return http.request('vue', 'orderCard', params)
    },  
    // 关闭
    openAndClose(params) {
        return http.request('common', 'openAndClose', params)
    },   
}