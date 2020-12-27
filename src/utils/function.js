import {parse} from 'querystring' 

// 将urlquery参数转换成对象形式
export const getQuery = () => {
    return parse(window.location.search.split("?")[1]);
}
