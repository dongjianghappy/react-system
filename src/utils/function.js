import {parse} from 'querystring' 
import moment from 'moment'

// 将urlquery参数转换成对象形式
export const channel = () => {
    const module =  window.location.pathname.split("/")[2] || "";
    const channel = JSON.parse(sessionStorage.getItem('channel')) || []
    const item = channel.find((item)=>{
        return item.module === module
    })
debugger
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