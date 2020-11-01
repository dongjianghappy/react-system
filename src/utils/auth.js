export const getToken = () => {
    return localStorage.getItem('token')
}

export const setToken = (token) => {
    return localStorage.setItem('token', token)
}

export const isLogined = (token) => {
    if(localStorage.getItem('token')){
        return true
    }
    alert("sd")
    return false
}

export const clearToken = () => {
    localStorage.removeItem('token')
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
    return localStorage.setItem('rightMenu', data)
}
// 按钮权限
export const checkButtonAuth = (data) => {
    const authority = sessionStorage.getItem('gradeList').split(",")
    if(authority.indexOf(data) > -1){
        return false
    }else{
        return true
    }
}