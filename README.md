### 安装antd
npm isntall antd --save

### 跨域

跨越有开发模式和生产模式
开发模式通过环境解决，生产模式通过jsonp,cors，frame以及代理服务器解决

开发模式解决方案是在package文件上加入proxy: "http://127.0.0.1"，，在接口中不需要再重写该部分，设置完成后重启即可

### 安装axios
npm isntall axios --save

### 安装qs
npm isntall qs --save

### 安装路由
npm install react-router-dom --save

1、BrowserRouter: 以路径形式的路由，后端需要设置重定向，否则页面刷新跳转到404
2、HashRouter: 以井号形式的路由
3、exact: 匹配规则，精准匹配，比如有3个页面"/","/nav","/nav/list"，如果在前两个页面没有加上exact属性时，在跳转到第三页面也会显示前两页面，所以需要在前两页面加上exact表示精准匹配
4、strict：精准匹配和exact同时使用，比如在井号后面的参数名称加上/时，如果只有exact是不起作用，需要加上strict精准匹配
5、Switch标签是指页面切换只显示一个页面，在Switch标签包含的组件，如果知道路径页面不存在，则只显示404页面，404页面需要进行设置，疑问，为什么只会显示该页面，该页面是自定义的有什么特殊吗？
6、关于route标签上的render属性也是加载组件的一种方式和Component一样，该属性值是一个回调函数，在函数中可以调用组件，在函数中可以传props值，然后在组件中通过...props传入到组件内部，该方法可以代替component属性
7、关于navlink高亮显示，如果需要设置链接高亮使用NavLink标签，此时在html代码中可以看到active的一个属性，也可以通过activeClass进行设置
8、路由传参params方式
   - 需要在组件路由设置path属性在该属性后面添加/:字段即可，在跳转该组件中获取参数时通过props下的params属性获取该字段即可
   - 然后在跳转link中的to属性设置相对于的参数值即可，如果没有设置参数传递会报404错误，那么我们需要在字段后面加上?，也就是说该自动可传可不传


### 安装Redux
npm install --save redux

### 安装redux-thunk
npm install --save redux-thunk

thunk表示中间件，通常将异步请求放到中间件，thunk引入后作为createStore方法的第二个入参，但是由于该方法只接受2个参数所以和调试工具配置有冲突，因此需要增强函数进行配置


关于异步加载，网络请求的相关问题需要在卸载前需要进行清除，也就是说路由跳转时，有些请求在页面是正常，但是在控制台会出现报错问题，此时我们要在componentunmount进行清除

一个组件在数据发生变化时该组件的render函数会进行跟新，但是该组件使用其他子组件时也会被同时更新，为了防止子组件更新，我们使用一下两种方法。1、在子组件中shouldWillProps生命周期返回一个false，当然我们使用的是该生命周期的两个参数进行对比，如果一致返回false，否则返回true。2、使用子组件继承React.pureComponent组件对象即可

### 使用Git管理项目

1、登录GitHub创建一个项目
2、本地项目进行初始化: git init
3、将本地和远程厂库关联起来: git remote add origin 远程仓库地址
4、将本地代码推送到库上
   - git add .
   - git commit -m '提交信息' -n
   - git push -u origin master  //第一次初始化仓库时：-u 之后不用

5、创建新分支并切换: git checkout -b develop



















