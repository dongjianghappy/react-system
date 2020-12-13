import {
    NODE_INIT,
    INPUT_CHANGE,
    ADD_ITEM,
    GET_DETAIL,
    DELETE_ITEM,
    GET_DATA_ACTION,
    CHECK_CHANGE,
    OPEN_AND_CLOSE,
    GET_BAISC_INFO
} from '../actionTypes'


const mod = ['channel', 'setting', 'basic',]

const channel = ['article', 'source', 'tech', 'picture'];
const setting = ['log', 'customize', 'mysql'];
const basic = ['navigation', 'slideshow', 'single'];

const commonReducers = (state, action) => {

    let modules = window.location.pathname.split("/")[2]
    let mdules3 = window.location.pathname.split("/")[3]
    
    // 主要处理频道导航数据存储问题
    if(basic.indexOf(mdules3) !== -1 || modules === "single"){
        modules = "navigation"
    }

    
    
    
    if(modules !== state.module){
        
        if(mod.indexOf(state.module) === -1){
            return false
        }else{
            if(eval(state.module).indexOf(modules) == -1){
                return false
            }
        }
        
    }

    let newState = ""
    switch(action.type){

        case NODE_INIT :
            newState = JSON.parse(JSON.stringify(state))
            
            newState.node = action.value.node
            return newState
            break        

        case GET_DETAIL :
            newState = JSON.parse(JSON.stringify(state))

            newState.detail = action.value

            return newState
            break

            // 全选
            case CHECK_CHANGE :
                newState = JSON.parse(JSON.stringify(state))
                if(action.data.type === "single"){
                    if(action.data.checked){
                        newState.checkedList.push(action.data.value)
                    }else{
                        newState.checkedList.map((item, index) => {
                            if(item.id === action.data.value.id){
                                newState.checkedList.splice(index, 1)
                            }
                        })
                    }

                }else{
                    if(newState.allChecked){
                        newState.checkedList = action.data.value
                        newState.allChecked = false
                    }else{
                        newState.checkedList.map((item, index) => {
                            newState.checkedList = []
                            newState.allChecked = true
                            
                        })
                    }
                }
                return newState
                break

            // 开启关闭
            case OPEN_AND_CLOSE :
                newState = JSON.parse(JSON.stringify(state))
                if(action.data.result){
                    const checked = action.data.operating === 'open' ? '1' : '0'
        
                    newState.list.map(item=>{
                        if(newState.checkedList.some(ele=>ele.id===item.id)){
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

        case GET_DATA_ACTION :
            newState = JSON.parse(JSON.stringify(state))
            let data = []
            if(action.data.list === undefined){
                data = action.data || []
            }else{
                data = action.data.list || []
            }

            if(action.node){
                newState[action.node] = data
                newState.node = action.node
            }else{
                newState.total = action.data.total
                newState.page = action.data.pages
                newState.list = data
                newState.node = "list"
            }

            // newState[action.node] = data
            // const arr = action.node.split(".")
            // if(arr.length === 1){
            //     newState[action.node] = data
            //     // newState[state.node].list = data
            // }else{
            //     arr.map((item, index) => {
            //         if(index === arr.length-1){
            //             newState[arr[index-1]][item] = data
            //         }
            //     })
            // }
            newState.checkedList = [] // 查询数据清空选择列表
            return newState
            break

        case GET_BAISC_INFO :
            newState = JSON.parse(JSON.stringify(state))
            newState.list = action.value
            return newState
            break

        default :
            return false

    }
}

export default commonReducers