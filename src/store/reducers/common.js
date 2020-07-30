import { INPUT_CHANGE, ADD_ITEM, DELETE_ITEM, GET_DATA_ACTION, CHECK_CHANGE } from '../actionTypes'

const initState = {
    global: {
        checked: true,
        checkedList: []
    },
    inputValue: "请输入内容",
    list: [{id: 1}]
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
     else if(action.type === CHECK_CHANGE){
        let newState = JSON.parse(JSON.stringify(state))
        if(action.data.checked){
            newState.global.checkedList.push(action.data.value)
        }else{
            newState.global.checkedList.map((item, index) => {
                if(item.id === action.data.value.id){
                    newState.global.checkedList.splice(index, 1)
                }
                
            })
        }
        debugger
        return newState
    }      
    return state
}

export default reducers