### 创建项目环境
npm create-react-app react-system

### 安装调试工具

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

Component组件对象不会对数据进行比较，而pureComponent组件对象会对数据进行浅比较，如果是复杂数据不推荐使用pureComponent

### 使用Git管理项目
1、登录GitHub创建一个项目
2、本地项目进行初始化: git init
3、将本地和远程厂库关联起来: git remote add origin 远程仓库地址
4、将本地代码推送到库上
   - git add .
   - git commit -m '提交信息' -n
   - git push -u origin master  //第一次初始化仓库时：-u 之后不用

5、创建新分支并切换: git checkout -b develop

### Fragment组件优化
关于父组件与子组件拆分，父组件使用的是<ul></ul>标签，而在子组件使用的是<li></li>标签，当子组件中<li>多个时需要一个根元素，平时我们使用的时div但是，在d浏览器dom结构中就不符合3wc标准，所以我们在组件中通过Fragment组件进行包裹或者使用空的<></>进行包裹，建议推荐使用Fragment包裹


### 高阶组件
高阶组件是一个函数，参数是一个组件，返回也是一个组件
什么时候使用到高阶组件，在多个组件代码相同时，将公共部分抽离出来定义成高阶组件

### 错误边界处理
在开发环境中错误组件产生错误时会有错误信息提示，但是在生产中发生错误后页面会出现空白，此时我们需要进行错误处理，其他功能正常使用

1、定义一个错误组件
2，在组件中使用componentDidCatch生命周期进行捕获错误信息
3、然后将该组件包裹其他需要提示的组件，此时，其他组件作为该组件的子组件，当子组件发生错误时，会触发错误组件的componentDidCatch生命周期，然后在当前组件使用render属性将错误信息打印出来


### 使用受控组件获取数据
受控组件获取数据是指在每个表单元素上进行绑定一个onChange事件，每个事件都定义一个方法，当form表单元素中含有多个时，可以帮到同一个事件函数，此时，该事件函数作为公共函数，内部获取数据书写成this.setState{[e.target.name]: e.tager.vaule}即可

### 关于路由跳转时history为undefined的问题
原因：是当前跳转组件并没有被router关联到，所以找不到
方案：1、通过props父子组件传参将history传递，该方法如果在页面复杂时不适用，2、通过路由高阶函数withRoute设置

### 导入报错问题
react Import in body of module; reorder to top  import/first

分析原因：import语句应该放在最前面，至少要放到const定义变量的前面。

### 别名配置

在config打开webpack.config.js文件，找到alias添加以下两个属性
'@': path.resolve(__dirname, '../src'),
'@view': path.resolve(__dirname, '../src/views'),


### 关于token的使用
1、token主要用于跨域请求的后端校验
2、在用户登录成功后，后端生成一个token返回给前端，前端将token通过Cooke或localStorage等方式进行存储，每次发送请求都会将token传送给后端
3、同时也可以存储到redux中
4、请求接口中把token传给后端有两种方式，第一种是在请求头进行添加，第二中是通过字段传参
5、后端拿到token后会进行验证



### webpack
前端资源构建工具，静态模块打包器 

五个核心概念entry:入口文件起点、output输出文件、loader处理非js文件比如less，css,img而webpack本身就可以处理js文件、plug：插件和mode：有开发模式和生产模式



### 创建webpack

1、快速构建项目命令：npm init -y
2、全局按钮webpake和webpack-cli
   npm install webpack webpack-cli --g


webpack可以打包js和json文件，其他资源是不可以处理的

生产环境比开发环境多一个压缩文件
生产环境和开发环境将ex6模块化编译成浏览器能够识别的模块话

### 如何使webpack打包样式资源 

需要通过loader进行解析翻译webpack不能识别的模块，所以需要在webpack.config.js配置文件进行配置


所有构建工具都是基于node.js平台运行的，所以模块化默认采用common.js

### loader 1、下载 2、使用

安装css loader
npm i style-loader css-loader -D :-D表示仅在开发环境下存在的包用-D

安装 less loader
npm install less less-loader -D

### plugin 1、下载 2、引入 3、使用


### 打包html文件
1、下载：npm install html-webpack-plugin -D

2、引入：在配置文件中通过require引入模块

3、使用：在plugin属性中使用new HtmlWebpackPlugin()

在webpack的管理输出的部分,设定HtmlWebpackPlugin部分,运行npm run build 会报错
Error: Cannot find module 'webpack/lib/node/NodeTemplatePlugin'

解决方法是：分别执行下面npm命令
npm install webpack
npm install -D webpack-cli
然后再运行npm run build

### 打包图片文件
npm install url-loader file-loader html-loader -D

打包图片有两种类型
1、图片在样式中，
2、图片之间引入到html标签中

### 打包的那些坑货

1、ERROR in   Error: Child compilation failed:  Module not found: Error: Can't resolve './build/build.js' in 'D:\E：盘（资料）\webpack\test\src':

配置文件中配置了html-loader，而index.html模板引入了build.js文件，打包时就出现以上错误信息，是模板文件路径问题

### 打包其他资源
匹配规则通过取反匹配使用exclude进行匹配排除某些文件比如：css、less、图片等剩下的就是其他资源，包括图标和字体等
loader使用处理器是file-loader

### webpack服务搭建
安装：npm install webpack-dev-server -D

配置：在配置文件中进行配置devServer属性
devServer属性有：
contantBase: 项目构建后路径
compress: 启动gzip压缩,值为true和false
port:端口号
open:是否自动开启默认浏览器

配置完成后通过npx webpack-dev-server启动服务

### 打包时将CSS从JS中分离单独文件 



 















