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
}