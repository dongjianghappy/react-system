// 这里使用actionTYpes文件好处一个是可复用性，另一个是报错时可以快速定位，如果在action对象中声明的type是一个字符串，那么报错不会出现提示，原因是在reducers中并没有匹配到，所以实质上并没有报错

export const INPUT_CHANGE = 'inputChange'
export const ADD_ITEM = 'addItem'
export const DELETE_ITEM = 'deleteItem'
export const GET_DATA_ACTION = 'getdata'
export const CHECK_CHANGE = 'checkChange'
export const OPEN_AND_CLOSE = 'openAndClose'
export const UPDATE_STATUS = 'updateStatus'
export const GET_SLIDESHOW_ACTION = 'getSlideshowAction'
export const GET_SLIDESHOW_LIST_ACTION = 'getSlideshowListAction'
export const GET_SPACE_ACTION = 'getSpaceAction'