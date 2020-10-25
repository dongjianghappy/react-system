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
    return false
}

export const clearToken = () => {
    localStorage.removeItem('token')
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