import {
  checkChange, 
  drawerAction,
  dialogAction,
  removeAndRestore,
   openAndClose, 
   slideshowAction,
   slideshowListAction,
   spaceAction,
   defaultAction,
   anpassenAction,
   anpassenFieldAction,
   channelAction,
   navigationAction,
   singleAction,
   updateStaticAction,
   loginAction,
   userINfoAction,
   rightMenuAction,
   inputChangeAction,
   expandAction,
   expandAllAction,
   onMoveAction,
   updateSaveAction
} from '../actions'

import {
  nodeInit,
  insertAction,
  deleteAction,
  updateAction,
  selectAction,
  selectAction2,
  detailAction,
  changeAction,
  fetchAction,
  mysql,
  backup,
  search,
  searchFieldAction,
  getQueryAction
} from '../actions/operating'

const dispatchToProps = (dispatch) => {

    return {
      dispatch:{

        fetch(params) {
          return fetchAction({
            node: params.node,
            data: params.data,
            api: params.api
          })
        },  

        nodeMethod(params){
          const action = nodeInit({
            ...params
          })
          dispatch(action)
        },
        
        checkBox(params) {
          const action = checkChange({
            data: params
          })
          dispatch(action)
        },

        popup(params) {
          const action = drawerAction({
            data: params
          })
          dispatch(action)
        },     
        
        getDialog(params) {
          const action = dialogAction({
            data: params
          })
          dispatch(action)
        },        

        // 列表初始化查询
        getListAction(page = 0, pagesize = 10) {
          const el = document.getElementById("coding")
          
            const action = selectAction({
              node: "list",
              data: {
                coding: el.value,
                page,
                pagesize
              }
            })
            dispatch(action)
        },

        // 条件查询
        getConditionAction(params, pagesize = 10) {
          const el = document.getElementById("coding")
            const action = selectAction({
              node: "list",
              data: {
                coding: el.value,
                page: 0,
                pagesize,
                ...params
              }
            })
            dispatch(action)
        }, 
        
        // 列表查询
        select(params) {
          const action = selectAction({
            node: params.node,
            data: params.data,
            api: params.api
          })
          dispatch(action)
      },  
      

        // 列表查询
        select2(params) {
          return selectAction2({
            node: params.node,
            data: params.data,
            api: params.api,
            storage: params.storage
          })
      },        


        // 删除数据
        removeAndRestore(params) {
          const el = document.getElementById("coding")
          removeAndRestore({
            coding: el.value,
            id: params.global.data.id
          })
        },
                
        // 图片空间
        getSpace(params) {
          return spaceAction({
            file: params
          })
      },  
      
        // 默认页面
        getDefault(params) {
          const action = defaultAction({
            ...params
          })
          dispatch(action)
      },  
         
      

      
        // 导航列表
        getUpdateStatic(params) {
          const action = updateStaticAction({
            ...params
          })
          dispatch(action)
      }, 

      getLogin(params) {
        return loginAction({
          ...params
        })
      },      

      getUserInfo(params) {
        const action = userINfoAction({
          data: params
        })
        dispatch(action)
      },

      getRightMenu(params) {
        const action = rightMenuAction({
          data: params
        })
        dispatch(action)
      },

      insert(params) {
        return insertAction({
          ...params
        })
      },      

      getDelete(params) {
        const el = document.getElementById("coding")
        return deleteAction({
          coding: el.value,
          id: params.global.data.id,
          list: params.list.list
        })
      },

      update(params) {
        return updateAction({
          ...params
        })
      },  

      changeData(params) {
        return updateAction(params, 'changeData')
      }, 

      getDetail(params) {
        const action = detailAction({
          node: params.node,
          data: params.data,
          api: params.api
          // coding: params.coding,
          // id: params.id
        })
        dispatch(action)
      },      
      

      // 获取属性标记
      getFlagAction(params) {
        
        const action = selectAction({
          node: "flags",
          data: params,
          api: "getFlag"
        })
        dispatch(action)
      },  
    

      // 更新信息，信息更新后需要返回一个propmise，所以这里返回return
      updateInfo(params) {
        const el = document.getElementById("coding")
        return updateAction(params, 'updateInfo')
      }, 
      
      
      getMysql(params) {
        const el = document.getElementById("coding")
        const action = mysql({
          coding: el.value
        })
        dispatch(action)
      },

      getBackup() {
        const action = backup()
        dispatch(action)
      },

      getSearch(params) {
        const action = search({
          ...params
        })
        dispatch(action)
      },      

      searchField(params) {
        const action = searchFieldAction({
          node: params.node,
          data: params.data,
        })
        dispatch(action)
      },

      setParams(params) {
        const action = getQueryAction(params)
        dispatch(action)
      },   
      
      // 单个展开收缩
      expand(params) {
        const action = expandAction({
          data: params
        })
        dispatch(action)
      },

      // 所有展开收缩
      expandAll(params) {
        const action = expandAllAction({
          data: params
        })
        dispatch(action)
      },

      // 移动
      onMove(params) {
        const action = onMoveAction({
          data: params
        })
        dispatch(action)
      },

      // 更新保存
      updateSave(params) {
        const action = updateSaveAction({
          data: params
        })
        dispatch(action)
      },
    }
    }
}

export default dispatchToProps