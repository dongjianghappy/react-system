import {parse} from 'querystring' 
import moment from 'moment'

// 将urlquery参数转换成对象形式
export const channel = () => {
    const module =  window.location.pathname.split("/")[2] || "";
    const channel = JSON.parse(sessionStorage.getItem('channel')) || []
    const item = channel.find((item)=>{
        return item.module === module
    })

    return item || {}
}

// 将urlquery参数转换成对象形式
export const getQuery = () => {
    return parse(window.location.search.split("?")[1]);
}

// 时间戳转换时间
export const date= (timestamp, format) => {
    return moment(timestamp * 1000).format(format || 'YYYY-MM-DD');
}

// 时间戳转换时间
export const datetime = (timestamp, format) => {
    return moment(timestamp * 1000).format(format || 'YYYY-MM-DD HH:mm:ss');
}

// 获取json对象属性长度
export const jsonLength = (jsonObj) => {
    let length = 0;
    for (let item in jsonObj) {
       length++;
    }
   return length;
}

// 初始化数据
export const requestInit = (init) => {
    const newsRequest = {}
    newsRequest.page = init.page;
    newsRequest.pagesize = init.pagesize;
   return newsRequest;
}