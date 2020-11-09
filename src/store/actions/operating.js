// 当业务逻辑较多时需要将action抽离出来，易于维护
import { message } from 'antd'

import api from '../../api'
import { 
    NODE_INIT,
    INSERT,
    DELETE,
    UPDATE,
    GET_DATA_ACTION,
    GET_DETAIL,
    GET_FLAG,
    GET_BAISC_INFO,
    GET_MYSQL,
    CHANGE_DATA,
    SEARCH_FIELD
} from '../actionTypes'

// 节点初始化设置
export const nodeInit = (value) =>({
    type: NODE_INIT,
    value: value
})
// 新增数据
export const insertAction = async (params) =>{
    const result = await api[params.api || 'insert'](params.data)
    return result
}
// 删除数据
export const deleteAction = async (params, inter = "") =>{
    const result = await api[inter || 'delete'](params)
    return result
}
// 更改数据
export const updateAction = async (params) =>{
    const result = await api[params.api || 'update'](params.data)
    return result
}

// 更改数据
export const fetchAction = async (params) =>{
    const result = await api[params.api || 'select'](params.data)
    return result
}

// 更改数据
export const selectAction2 = async (params) =>{
    const result = await api[params.api || 'select'](params.data)
    return result
}

// 查询数据
export const selectAction = (params) =>{
    return async (dispatch) => {
      const data = await api[params.api || 'select'](params.data)
      if(data.result){
        const action = {
            type: GET_DATA_ACTION,
            node: params.node || "",
            data: data.result
            
        }
        dispatch(action)
      }
    }
}
// 查询单条数据
export const detailAction = (params) =>{
    return async (dispatch) => {
        const { coding, id } = params
        const result = await api.detail({
            coding,
            id
        })
        if(result.result){
            const action = {
                type: GET_DETAIL,
                value: result.result
            }
            dispatch(action)
        }
    }
}
// 更新状态
export const changeAction = (params) =>{
    const a = async (dispatch) => (
        await api.changeData({
            ...params
        })
    )
    return  a
}


// 查询单条数据
export const getFlagAction = (value) =>({
    type: GET_FLAG,
    value
})

export const flagAction = (params) =>{
    return async (dispatch) => {
        const { coding, id } = params
        const result = await api.getFlag(params)

        if(result.result){
            const action = getFlagAction(result.result)
            dispatch(action)
        }
    }
}





// 查询单条数据
export const getMysqlAction = (value) =>({
    type: GET_MYSQL,
    value
})

export const mysql = (params) =>{
    return async (dispatch) => {
        const result = await api.mysql()

        if(result.result){
            const action = getMysqlAction(result.result)
            dispatch(action)
        }
    }
}

export const backup = async (params) =>{
       const result = await api.backup()
       return result
}

export const searchFieldAction = (value) =>({
    type: SEARCH_FIELD,
    value
})



// // 删除数据
// export const getLoginAction = (index) =>({
//     type: DELETE,
//     index
// })

// export const deleteAction = (params) =>{
//     return async (dispatch) => {
        
//         await api.removeAndRestore({
//             ...params
//         })


//       //const data = await api.Login(params)
//       const action = getLoginAction({})

//       dispatch(action)
//     }
// }

