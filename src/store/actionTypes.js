// 这里使用actionTYpes文件好处一个是可复用性，另一个是报错时可以快速定位，如果在action对象中声明的type是一个字符串，那么报错不会出现提示，原因是在reducers中并没有匹配到，所以实质上并没有报错
export const NODE_INIT = 'nodeInit'
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
export const DEFAULT_DATA = 'defaultDataAction'
export const ANPASSEN = 'anpassen'
export const ANPASSEN_FIELD = 'anpassenField'
export const CHANNEL = 'channel'
export const NAVIGATION = 'navigation'
export const SINGLE = 'single'
export const UPDATE_STATIC = 'updateStatic'

export const LOGIN = 'login' // 用户登录
export const USER_INFO = 'userINfo' // 用户信息
export const RIGHT_MENU = 'rightMenu' // 导航菜单列表

export const DRAWER = 'Drawer' // 抽屉
export const DIALOG = 'Dialog' // 弹出

export const INSERT = 'insert'
export const DELETE = 'delete' // 删除
export const UPDATE = 'update' // 更改
export const GET_DETAIL = 'getDetail'
export const GET_FLAG = 'getFlag'
export const GET_BAISC_INFO = 'getBaiscInfo'
export const GET_MYSQL = 'getMysql'
export const CHANGE_DATA = 'changeData'