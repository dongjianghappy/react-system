import axios from 'axios'
import qs from 'qs'
import { getToken } from './auth'

export default class http {

    // 构造函数
    constructor(options) {

        if(!options){
            this.baseConfig = {
                baseURL: '/admincms/api/', // 设置跨域代理接口统一的前置地址
                timeout: 5000,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                }
              }
        }else{
            this.baseConfig = options;
        }
    }

    // 请求拦截
    requestHeaders(request){
        request.interceptors.request.use((config) => {
     

            const methodMapping = {
                'get': 'select',
                'post': 'insert',
                'put': 'update',
                'delete': 'delete'
            }

            const action = methodMapping[config.method]
            config.headers["authoriziation"] = "Beartr " + getToken()
            if(action){
                if(config.method  === 'post'){
                    config.data = qs.stringify(config.data);
                }
            }
            return config;
        },(error) =>{
            return Promise.reject(error);
        });
    }

    // 响应拦截
    responseHeaders(request){
        request.interceptors.response.use((response) =>{
			if(response.data.ifSuccess === 1){
				if(response.data.result === true){

				}else{
                    if(response.data.result !== null){
                        return response.data.result;
                    }
				}
			}else{
                return Promise.reject("ss");
            }

        }, (error) => {
            return Promise.reject(error);
        });
    }

    // 请求方法
    axios(){       
        return axios.create(this.baseConfig)
    }    

    // 请求方法
    request(m, n, method, params){
        params = params || {}
		params.n = n;
        params.m = params.m ? params.m : m;
        const request  = this.axios()

        let url = params.m === "space" ? `inter_vue.php?m=${params.m}&n=${params.n}${params.file && params.file !== "/" ? params.file : ""}` : 'inter_vue.php'

        this.requestHeaders(request)
        this.responseHeaders(request)
        return new Promise((resolve, reject) => {
            request.request({
                url: url,
                method,
                data: params
            })
            .then(response => {
                resolve({
                    result: response
                });
            }, err => {
                reject(err);
            })
            .catch((error) => {
                reject(error)
            })
        })
    }
}