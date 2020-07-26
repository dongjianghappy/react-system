import React from 'react';
import { createStore } from 'redux'
import reducer from '../../reducers/counter'

import App from './app'

// 创建仓库
const store = createStore(reducer)
store.subscribe(() => console.log(store.getState()))

export default class basic extends React.Component{
     
    render(){
        return(
            <div>
                <App add={() => store.dispatch({type: 'ADD'})} del={() => store.dispatch({type: 'DEL'})} />
                基本信息
            </div>
        )
    }
}