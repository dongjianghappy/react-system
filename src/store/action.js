// 当业务逻辑较多时需要将action抽离出来，易于维护

import api from '../api'
import { INPUT_CHANGE, ADD_ITEM, DELETE_ITEM, GET_DATA_ACTION } from './actionTypes'

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