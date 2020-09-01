import {
  checkChange, 
  getListAction, 
  updateStatus, 
  removeAndRestore,
   openAndClose, 
   slideshowAction,
   slideshowListAction,
   spaceAction
} from '../action'

const dispatchToProps = (dispatch) => {

    return {
        
        checkBox(params) {
          debugger
          const action = checkChange({
            data: params
          })
          dispatch(action)
        },

        getListAction(page = 0, pagesize = 10) {
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

          const action = updateStatus({
            ...params
          })
          dispatch(action)
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
          debugger
          const el = document.getElementById("coding")
          const action = openAndClose({
            coding: el.value,
            ...params
          })

          dispatch(action)
          
        },
        
        // 幻灯片
        getSlideshow() {
            const action = slideshowAction({
              n: 'cateList',
            })
            dispatch(action)
        },

        // 幻灯片
        getSlideshowList(params) {
            const action = slideshowListAction({
              ...params
            })
            dispatch(action)
        },  
        
        // 图片空间
        getSpace(params) {
          const action = spaceAction({
            ...params
          })
          dispatch(action)
      },  
    }
  }

  export default dispatchToProps