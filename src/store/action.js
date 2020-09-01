// 当业务逻辑较多时需要将action抽离出来，易于维护
import { message } from 'antd'

import api from '../api'
import { 
    INPUT_CHANGE, 
    ADD_ITEM, 
    DELETE_ITEM, 
    GET_DATA_ACTION, 
    CHECK_CHANGE, 
    OPEN_AND_CLOSE,
    UPDATE_STATUS, 
    GET_SLIDESHOW_ACTION,
    GET_SLIDESHOW_LIST_ACTION,
    GET_SPACE_ACTION 
} from './actionTypes'

export const inputChangeAction = (value) =>({
    type: INPUT_CHANGE,
    value: value
})

export const addItemAction = (value) =>({
    type: ADD_ITEM
})

export const deleteItemAction = (index) =>({
    type: DELETE_ITEM,
    index
})

export const getDataAction = (data) =>({
    type: GET_DATA_ACTION,
    data
})

export const getListAction = (params) =>{
    return async (dispatch) => {
      const data = await api.select({
        m: 'vue',
        n: 'cateList',
        ...params
      })

      const action = getDataAction(data.result)
      dispatch(action)
    }
}






export const updateStatus = (params) =>{
    debugger
    return async (dispatch) => {
        await api.updateStatus({
            ...params
        })

        const action = {
            type: UPDATE_STATUS,
            data: params.id
        }
        dispatch(action)
    }
}

// 删除或移除
export const removeAndRestore = async (params) =>{
    //return async (dispatch) => {
        await api.removeAndRestore({
            ...params
        })
   // }
}

// 开启或关闭
export const openAndClose = (params) =>{
    debugger
    return async (dispatch) => {
        const result = await api.openAndClose({
          ...params
        })
  
        const action = {
            type: OPEN_AND_CLOSE,
            data: {
                result: result.result,
                operating: params.operating
            }
        }
        dispatch(action)
      }


    debugger
//     return async (dispatch) => {
//         const result = await api.openAndClose({
//             ...params
//         })
//         debugger
//         message.info("操作成功")
//         const action = {
//             type: OPEN_AND_CLOSE
//         }
//         dispatch(action)
//    }
}

export const checkChange = (params) => ({
    type: CHECK_CHANGE,
    ...params
})


// 获取幻灯片列表
export const getSlideshowAction = (data) =>({
    type: GET_SLIDESHOW_ACTION,
    data
})

export const slideshowAction = (params) =>{
    return async (dispatch) => {
      const data = await api.slideshow()
      debugger
      const action = getSlideshowAction(data.result)
      dispatch(action)
    }
}

// 获取幻灯片信息
export const getSlideshowListAction = (data) =>({
    type: GET_SLIDESHOW_LIST_ACTION,
    data
})

export const slideshowListAction = (params) =>{
    debugger
    return async (dispatch) => {
      const data = await api.slideshowList(params)
      debugger
      const action = getSlideshowListAction(data.result)
      dispatch(action)
    }
}

// 图片空间
export const getSpaceAction = (data) =>({
    type: GET_SPACE_ACTION,
    data
})


export const spaceAction = (params) =>{
    debugger
    return async (dispatch) => {
      const data = await api.space(params)
      debugger
      const action = getSpaceAction(data.result)
      dispatch(action)
    }
}