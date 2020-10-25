import { INPUT_CHANGE, INSERT, DELETE, UPDATE, GET_DETAIL, DRAWER, DIALOG, ADD_ITEM, DELETE_ITEM, GET_DATA_ACTION, CHECK_CHANGE, OPEN_AND_CLOSE, UPDATE_STATUS } from '../actionTypes'

import { initListState } from './commonState'



const initState = {
    global: {
        data: {},
        drawer: {
            title: "标题",
            status: false
        },
        dialog: {
            title: "标题",
            status: false,
        },        
        visible: {
            drawer: false
        },
        checked: true,
        checkedList: []
    },
    ...initListState
}

const reducers = (state = initState, action) => {
    // 这里是通过action类型进行设置state值，为什么有人说这里的state只读不能修改，而是通过深度拷贝一个新的再设置
    let newState = ""
    switch(action.type){
        case INSERT :
            newState = JSON.parse(JSON.stringify(state))

            newState.list.list.map((item, index) => {
                if(item.id === action.value.id){
                    newState.list.list.splice(index, 1)
                }
            })

            return newState
            break
        
        
        case DELETE :
            newState = JSON.parse(JSON.stringify(state))

            newState.list.list.map((item, index) => {
                if(item.id === action.value.id){
                    newState.list.list.splice(index, 1)
                }
            })

            return newState
            break
        
        case UPDATE :
            newState = JSON.parse(JSON.stringify(state))

            newState.list.list.map((item, index) => {
                if(item.id === action.value.id){
                    newState.list.list.splice(index, 1)
                }
            })

            return newState
            break    

        case GET_DETAIL :
            newState = JSON.parse(JSON.stringify(state))

            newState.detail = action.value

            return newState
            break
            
        case DRAWER :
            newState = JSON.parse(JSON.stringify(state))
            newState.global.drawer.title = action.value.data.title
            newState.global.drawer.status = !newState.global.drawer.status
            newState.global.data = action.value.data
            return newState
            break

        case DIALOG :
            newState = JSON.parse(JSON.stringify(state))
            newState.global.dialog.title = action.value.data.title
            newState.global.dialog.status = true
            newState.global.dialog.data = action.value.data
            newState.global.data = action.value.data
            return newState
            break


        case INPUT_CHANGE :
            newState = JSON.parse(JSON.stringify(state))
            newState.inputValue = action.value
            return newState
            break

        case ADD_ITEM :
            newState = JSON.parse(JSON.stringify(state))
            newState.list.push(newState.inputValue)
            newState.inputValue = ""
            return newState
            break

        case DELETE_ITEM :
            newState = JSON.parse(JSON.stringify(state))
            newState.list.splice(action.index, 1)
            return newState
            break

        case GET_DATA_ACTION :
            newState = JSON.parse(JSON.stringify(state))
            newState.list = action.data
            return newState
            break

        case CHECK_CHANGE :
            newState = JSON.parse(JSON.stringify(state))
            if(action.data.checked){
                if(action.data.type === "single"){
                    newState.global.checkedList.push(action.data.value)
                }else{
                    newState.global.checkedList = action.data.value
                }
                
            }else{
                newState.global.checkedList.map((item, index) => {
                    if(action.data.type === "single"){
                        if(item.id === action.data.value.id){
                            newState.global.checkedList.splice(index, 1)
                        }
                    }else{
                        newState.global.checkedList = []
                    }
                    
                })
            }
            return newState
            break

        case OPEN_AND_CLOSE :
            newState = JSON.parse(JSON.stringify(state))
            if(action.data.result){
                const checked = action.data.operating === 'open' ? '1' : '0'
    
                newState.list.list.map(item=>{
                    if(newState.global.checkedList.some(ele=>ele.id===item.id)){
                        if(item.checked !== undefined){
                            item.checked = checked
                        }else{
                            item.status = checked
                        }
                    }
                })
            }
            return newState
            break

        case UPDATE_STATUS :
            newState = JSON.parse(JSON.stringify(state))
            newState.list.list.filter(item => {
                if(item.id === action.data) {
                    if(action.field === "status"){
                        item.status = item.status === '0' ? '1' : '0'
                    }else{
                        item.checked = item.checked === '0' ? '1' : '0'
                    }
                    
                }
            })
            return newState
            break
        
        // 查询列表
        // case SELECT_LIST :
        //     newState = JSON.parse(JSON.stringify(state))

            
        //     return newState
        //     break
            
        default :
            return state

    }
}

export default reducers