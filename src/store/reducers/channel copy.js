import { INPUT_CHANGE, ADD_ITEM, DELETE_ITEM, GET_DATA_ACTION } from '../actionTypes'

const initState = {
    inputValue: "请输入内容",
    list: []
}

const reducers = (state = initState, action) => {
    // 这里是通过action类型进行设置state值，为什么有人说这里的state只读不能修改，而是通过深度拷贝一个新的再设置
    if(action.type === INPUT_CHANGE){
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    else if(action.type === ADD_ITEM){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ""
        return newState
    }
     else if(action.type === DELETE_ITEM){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index, 1)
        return newState
    }   
     else if(action.type === GET_DATA_ACTION){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list = action.data
        return newState
    }      
    return state
}

export default reducers