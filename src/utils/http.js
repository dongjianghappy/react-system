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

    // 请求头设置
    requestHeaders(request){
        //POST传参序列化
        request.interceptors.request.use((config) => {
            if(config.method  === 'post'){
                config.data = qs.stringify(config.data);
            }
            return config;
        },(error) =>{
            return Promise.reject(error);
        });
    }


    // 返回状态判断
    responseHeaders(request){
        request.interceptors.response.use((res) =>{
            if(!res.data.ifSuccess){
                // _.toast(res.data.msg);
                return Promise.reject(res);
            }
            return res;
        }, (error) => {

            return Promise.reject(error);
        });
    }

    // 请求方法
    axios(){       
        return axios.create(this.baseConfig)
    }    

    // 请求方法
    request(m, n, params){
		params.n = n;
		params.m = params.m ? params.m : m;

        const request  = this.axios()

        this.requestHeaders(request)
        this.responseHeaders(request)


		// 添加请求拦截器
		request.interceptors.request.use(config => {
            config.headers["authoriziation"] = "Beartr " + getToken()
			return config
		});

		// http响应拦截
		request.interceptors.response.use(response => {
			if(response.data.ifSuccess === 1){
				if(response.data.result === true){

				}else{
					return response.data.responseBody;
				}
			}else{
				
			}
		});


        return new Promise((resolve, reject) => {
            request.post("inter_vue.php", params)
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