export const getToken = () => {
    return sessionStorage.getItem('token')
}

export const setToken = (token) => {
    return sessionStorage.setItem('token', token)
}

export const isLogined = (token) => {
    if(sessionStorage.getItem('token')){
        return true
    }
    return false
}

export const clearToken = () => {
    sessionStorage.removeItem('token')
}

export const channelInfo = () => {
    return JSON.parse(sessionStorage.getItem('channel'))
}


export const getChannel = () => {

    return [
        {
          name: "导航类型: ",
          field: 'channel',
          list: JSON.parse(sessionStorage.getItem('channel')) || []
        }
      ]
}

export const setRightMenu = (data) => {
    return sessionStorage.setItem('rightMenu', data)
}
// 按钮权限
export const checkButtonAuth = (data) => {
    const authority = sessionStorage.getItem('gradeList').split(",")

    if(authority[0] === "*" || authority.indexOf(data) > -1){
        return true
    }else{
        return false
    }
}