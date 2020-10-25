import React from 'react';
import { connect } from 'react-redux'
import { inputChangeAction, addItemAction, deleteItemAction } from '../../store/actions'
import TodoListUI from './TodoListUI'

// 如果没有业务逻辑的组件一般使用无状态组件，这样可以提高性能
const TodoList = (props) =>{
    let { inputValue, list, inputChange, addItem, deleteItem} = props
    return(
        <div>
        <TodoListUI
            inputValue={inputValue}
            addItem={addItem}
            deleteItem={deleteItem}
            inputChange={inputChange}
            list={list}
        />    
        </div>
    )
}

const stateToProops = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

const dispatchToProps = (dispatch) => {
    return {
        // 文本框录入
        inputChange(e) {
            let action = inputChangeAction(e.target.value)
            dispatch(action)
        },

        // 新增列表
        addItem() {
            let action = addItemAction()
            dispatch(action)
        },
        // 删除列表
        deleteItem(index){
            let action = deleteItemAction(index)
            dispatch(action)
        }
    }
}

// 第一个参数是state集合方法，第二个参数是action集合方法，说明当项目业务较大时，需要复用，则可以将dispatchToProps和stateToProops分别抽离出单个文件再引入
export default connect(stateToProops, dispatchToProps)(TodoList)