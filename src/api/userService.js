// import {authHeader} from '../utils'
import axios from 'axios'

export const userService = {
  login,
  logout,
  register,
  getRegisterCode,
  getById,
  update,
  resetPassword,
  changePassword
}

const baseUrl = 'https://bmhax.com/api/v1'
// const userUrl = 'http://127.0.0.1:8000/api/v1/users/'
// const baseUrl = 'https://blissbackend.com/api/v1'

function login (user) {
  // console.log('user')
  return new Promise((resolve, reject) => {
    axios({
      url: '/users/login/',
      method: 'POST',
      baseURL: baseUrl,
      data: user
    })
      .then(
        resp => {
          // console.log(resp.data)
          const token = resp.data.key
          localStorage.setItem('token', token)
          localStorage.setItem('user', user['username']) // Shoud be debugged here
          axios.defaults.headers.common['Authorization'] = token
          resolve(resp)
        })
      .catch(err => {
        console.log(err)
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        reject(err)
      })
  })
}

function logout () {
  return new Promise((resolve, reject) => {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    delete axios.defaults.headers.common['Authorization']
    resolve()
  })
}

function register (user) {
  console.log('Send request')
  return new Promise((resolve, reject) => {
    axios({
      url: '/users/registration',
      data: user,
      method: 'POST',
      baseURL: baseUrl
    })
      .then(resp => {
        const token = resp.data.key
        console.log(resp)
        // const user = resp.data.user
        localStorage.setItem('token', token)
        localStorage.setItem('user', user['username']) // Shoud be debugged here
        axios.defaults.headers.common['Authorization'] = token
        resolve(resp)
      }).catch(err => {
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        console.log(err)
        reject(err)
      })
  })
}

function getById (token) {
  var headers = {'Authorization': 'Token ' + token}
  console.log(headers)
  return new Promise((resolve, reject) => {
    axios({
      url: '/users/user/',
      method: 'GET',
      baseURL: baseUrl,
      headers: headers
      // auth: {
      //   username: 'test1',
      //   password: 'test123456'
      // }
    }).then(resp => {
      console.log(resp.data)
      resolve(resp.data)
    }).catch(err => {
      console.log(err)
      // localStorage.removeItem('user')
      // localStorage.removeItem('token')
      reject(err)
    })
  })
}

function getRegisterCode (email) {
  var data = {email: email, registration_code: 'BMCM'}
  return new Promise((resolve, reject) => {
    axios({
      url: '/users/registrationcodes',
      data: data,
      method: 'POST',
      baseURL: baseUrl
    }).then(resp => {
      console.log(resp.data)
      resolve(resp)
    }).catch(err => {
      // localStorage.removeItem('token')
      reject(err)
    })
  })
}

function update (user) {
  return new Promise((resolve, reject) => {
    axios({
      url: '/users/user',
      data: user,
      method: 'PUT',
      baseURL: baseUrl
    }).then(resp => {
      const token = resp.data.key
      // const user = resp.data.user
      localStorage.setItem('token', token)
      localStorage.setItem('user', user['username']) // Shoud be debugged here
      axios.defaults.headers.common['Authorization'] = token
      resolve(resp)
    }).catch(err => {
      localStorage.removeItem('user')
      localStorage.removeItem('token')
      reject(err)
    })
  })
}

function resetPassword (email) {
  return new Promise((resolve, reject) => {
    axios({
      url: '/password/reset/',
      data: email,
      method: 'POST',
      baseURL: baseUrl
    }).then(resp => {
      resolve(resp)
    }).catch(err => {
      // localStorage.removeItem('user')
      // localStorage.removeItem('token')
      reject(err)
    })
  })
}

function changePassword (token, oldPassword, newPassword1, newPassword2) {
  var headers = {'Authorization': 'Token ' + token}
  var data = {'old_password': oldPassword, 'new_password1': newPassword1, 'new_password2': newPassword2}
  console.log(headers)
  return new Promise((resolve, reject) => {
    axios({
      url: '/password/change/',
      data: data,
      method: 'POST',
      headers: headers,
      baseURL: baseUrl
    }).then(resp => {
      resolve(resp.data)
    }).catch(err => {
      // localStorage.removeItem('user')
      // localStorage.removeItem('token')
      reject(err)
    })
  })
}

/*
function handleResponse (response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text)
    if (!response.ok) {
      if (response.status === 401) {
        logout()
        location.reload(true)
      }

      const error = (data && data.message) || response.statusText
      return Promise.reject(error)
    }
    return data
  })
}
*/

/*
function handleResponse (response) {
  return new Promise((resolve, reject) => {
    const text = response.data
    const data = text && JSON.parse(text)
    console.log(data)
    if (!response.ok) {
      if (response.status === 401) {
        logout()
        location.reload(true)
      }

      const error = (data && data.message) || response.statusText
      reject(error)
    }
    resolve(data)
  })
}
*/
