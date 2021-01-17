// 当业务逻辑较多时需要将action抽离出来，易于维护
import { message } from 'antd'

import api from '../../api'
import { 
    INPUT_CHANGE,
    DRAWER, 
    DIALOG,
    ADD_ITEM, 
    DELETE_ITEM, 
    GET_DATA_ACTION, 
    CHECK_CHANGE, 
    OPEN_AND_CLOSE,
    GET_SLIDESHOW_ACTION,
    GET_SLIDESHOW_LIST_ACTION,
    GET_SPACE_ACTION,
    DEFAULT_DATA,
    ANPASSEN,
    ANPASSEN_FIELD,
    CHANNEL,
    NAVIGATION,
    SINGLE,
    UPDATE_STATIC,
    LOGIN,
    USER_INFO,
    RIGHT_MENU,
    EXPAND,
    EXPAND_ALL,
    ON_MOVE,
    UPDATE_SAVE
} from '../actionTypes'

export const inputChangeAction = (value) =>({
    type: INPUT_CHANGE,
    value: value
})

export const drawerAction = (value) =>({
    type: DRAWER,
    value: value
})

export const dialogAction = (value) =>({
    type: DIALOG,
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
    return async (dispatch) => {
        const { coding } = params
        const result = await api.openAndClose({
            coding,
            operating: params.global.data.operating,
            list: params.module.checkedList
        })
        
        const action = {
            type: OPEN_AND_CLOSE,
            data: {
                result: result.result,
                operating: params.global.data.operating
            }
        }
        dispatch(action)
      }


//     return async (dispatch) => {
//         const result = await api.openAndClose({
//             ...params
//         })
//       
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
 

// 图片空间
export const getSpaceAction = (data) =>({
    type: GET_SPACE_ACTION,
    data
})


export const spaceAction = (params) =>{
    debugger
    return async (dispatch) => {
      const data = await api.space(params)
      const action = getSpaceAction(data.result)
      dispatch(action)
    }
}

// 默认列表
export const getDefaultAction = (data) =>({
    type: DEFAULT_DATA,
    data
})
export const defaultAction = (params) =>{
    return async (dispatch) => {
      const data = await api.Default(params)
      const action = getDefaultAction(data.result)
      dispatch(action)
    }
}



// 生成静态
export const getUpdateStaticAction = (data) =>({
    type: UPDATE_STATIC,
    data
})
export const updateStaticAction = (params) =>{
    return async (dispatch) => {
      const data = await api.updateStatic(params)
      const action = getUpdateStaticAction(data.result)
      dispatch(action)
    }
}

// 用户登录
export const getLoginAction = (value) =>({
    type: LOGIN,
    data: value
})

export const loginAction = (params) =>{
    return async (dispatch) => {
      const data = await api.Login(params)
      const action = getLoginAction(data.result)
      sessionStorage.setItem("token", data.result.token)
      sessionStorage.setItem("userInfo", JSON.stringify(data.result.userInfo))
      sessionStorage.setItem("menuList", JSON.stringify(data.result.menuList))
      sessionStorage.setItem("gradeList", data.result.grade)
      sessionStorage.setItem("channel", JSON.stringify(data.result.channel))
      dispatch(action)
    }
}

// 用户信息
export const userINfoAction = (value) =>({
    type: USER_INFO,
    value: value
})

// 导航菜单
export const rightMenuAction = (value) =>({
    type: RIGHT_MENU,
    value: value
})


export const expandAction = (params) => ({
    type: EXPAND,
    ...params
})

export const expandAllAction = (params) => ({
    type: EXPAND_ALL,
    ...params
})

export const onMoveAction = (params) => ({
    type: ON_MOVE,
    ...params
})

export const updateSaveAction = (params) => ({
    type: UPDATE_SAVE,
    ...params
})