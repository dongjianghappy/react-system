import React from 'react';
import {Input, Button, List } from 'antd'
import store from '../../store'
import { INPUT_CHANGE, ADD_ITEM, DELETE_ITEM } from '../../store/actionTypes'
import { inputChangeAction, addItemAction, deleteItemAction } from '../../store/action'

// 在修改store中的数据时，因为页面上的state数据是通过store获取，所以store中的数据发生变化，并不会同步到页面上的state，而是需要通过store监听数据，此时才会同步到页面上的state中
// 在文本框中如果给value绑定值后，会出现不可输入和删除的状态，所以需要监听store中的数据
export default class Navigation extends React.Component{
    
    constructor(props){
        super(props)
        
        this.state = store.getState()

        // 监听(订阅)参数是一个方法，在方法中需要从小设置值即可
        store.subscribe(this.change)
    }

    change = () => {
        this.setState(store.getState())
    }

    // 事件方法这里采用箭头函数，函数中this指向是当前组件，如果使用普通函数，则this指向是window，所以需要对函数进行this指向设置，可以在构造函数进行指向也可以在事件点击执行，即通过bind(this)
    inputChange = (e) => {
        console.log(e.target.value);
        
        const action = inputChangeAction(e.target.value)
        store.dispatch(action)
    }

    // 新增列表
    addItem = () => {
        const action = addItemAction()
        store.dispatch(action)
    }

    // 这里使用箭头函数有问题，点击其他事件该方法会被调用，什么原因
    // 删除列表
    deleteItem(index){
        const action = deleteItemAction(index)
        store.dispatch(action)
    }

    render(){
        return(
            <div>
                <div>
                    <Input placeholder={this.state.inputValue} value={this.state.inputValue} onChange={this.inputChange} style={{width:"350px"}} />
                    <Button onClick={this.addItem}>添加</Button>
                </div>
                <List
                    size="large"
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item, index) => <List.Item onClick={this.deleteItem.bind(this, index)} >{item}</List.Item>}
                />
            </div>
        )
    }
}