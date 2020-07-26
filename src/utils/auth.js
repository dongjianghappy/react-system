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