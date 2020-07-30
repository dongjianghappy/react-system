import {checkChange, getListAction, updateStatus, removeAndRestore, openAndClose } from '../action'

const dispatchToProps = (dispatch) => {

    return {

        checkBox(params) {
          const action = checkChange({
            data: params
          })
          dispatch(action)
        },

        inputChange(page = 0, pagesize = 10) {
          const el = document.getElementById("coding")
            const action = getListAction({
              coding: el.value,
              page,
              pagesize
            })
            dispatch(action)
        },
        
        // 更改状态
        updateStatus(params) {
          updateStatus({
            ...params
          })
        },

        // 删除数据
        removeAndRestore(params) {
          const el = document.getElementById("coding")
          removeAndRestore({
            coding: el.value,
            ...params
          })
        },
        // 开启或关闭
        openAndClose(params) {
          const el = document.getElementById("coding")
          const result = openAndClose({
            coding: el.value,
            ...params
          })
          
        }        
    }
  }

  export default dispatchToProps