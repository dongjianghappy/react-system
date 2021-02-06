import { INPUT_CHANGE, INSERT, DELETE, UPDATE, GET_DETAIL, REQUEST_FIELD, GET_QUERY, DRAWER, DIALOG, ADD_ITEM, DELETE_ITEM, GET_DATA_ACTION } from '../actionTypes'

import { initListState } from './commonState'



const initState = {
    global: {
        data: {},
        search: {},
        initPage: {
            page: 1,
            pagesize: 10,
        },
        request: {
            page: 0,
            pagesize: 10,
        },
        clear: true,
        params: {},
        drawer: {
            title: "标题",
            status: false,
            component: "",
            type: "form"
        },
        dialog: {
            title: "标题",
            status: false,
            component: ""
        },        
        visible: {
            drawer: false
        },
        checked: true,
        checkedList: [],
        option: [
            {
              name: "类型",
              field: "source",
              list: [
                {
                  value: "",
                  name: "全部",
                }
              ],
            },
            {
              name: "显示",
              field: "display",
              list: [
                {
                  value: "",
                  name: "全部",
                },
                {
                  value: "0",
                  name: "是",
                },
                {
                  value: "1",
                  name: "否",
                },
              ],
            },
          ]
    },
    system: {},
    // ...initListState
}
const reducers = (state = initState, action) => {
    // 这里是通过action类型进行设置state值，为什么有人说这里的state只读不能修改，而是通过深度拷贝一个新的再设置
    let newState = ""
    switch(action.type){

        case GET_DETAIL :
            newState = JSON.parse(JSON.stringify(state))
            if(action.node.indexOf(".") !== -1){
                const arr = action.node.split(".")
                newState[arr[0]][arr[1]] = action.value
                newState.node = arr[0]
            }else{
                if(action.node){
                    newState[action.node] = action.value
                    newState.node = action.node
                }else{
                    newState.detail = action.value
                }
            }



            

            return newState
            break
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
            
        case DRAWER :
            newState = JSON.parse(JSON.stringify(state))
            // newState.global = state.global // 组件是一个函数或类不能JSON格式化，如果格式化后该属性会为空
            newState.global[action.value.data.node].title = action.value.data.title
            newState.global[action.value.data.node].status = !newState.global[action.value.data.node].status
            newState.global[action.value.data.node].component = action.value.data.component
            newState.global[action.value.data.node].type = action.value.data.type
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
            
        case REQUEST_FIELD :

            newState = JSON.parse(JSON.stringify(state))
            newState.global[action.node] = action.value
            return newState
            break

        case GET_QUERY :
            newState = JSON.parse(JSON.stringify(state))
            newState.global.params = action.value || {}
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

        default :
            return state

    }
}

export default reducers