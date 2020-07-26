import { createStore, applyMiddleware, compose } from 'redux';
// import reducers from './reducers'
import rootReducer from './reducers/index'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

const enhancer = composeEnhancers(applyMiddleware(thunk))

const store = createStore(
    // reducers,
    rootReducer, 
    enhancer // 增强函数配置devtool和中间件，因为 createStore方法只接受2个参数，所以需要重新设置
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //配置devtool
)

export default store