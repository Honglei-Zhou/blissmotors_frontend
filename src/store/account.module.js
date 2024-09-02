import {userService} from '../api'
import {router} from '../router'

// const user = JSON.parse(localStorage.getItem('user'))
// console.log(localStorage.getItem('user'))
// const user = null

const state = {status: {}, user: null, code: null, token: null}

const actions = {
  isLogin ({commit}) {
    if (localStorage.getItem('user') !== undefined && localStorage.getItem('user') !== null) {
      // console.log(localStorage.getItem('user'))
      const user = localStorage.getItem('user')
      commit('setState', user)
    }
  },

  login ({dispatch, commit}, {username, password}) {
    // console.log(localStorage.getItem('token'))
    commit('loginRequest', {username})
    const user = {username, password}
    userService.login(user)
      .then(resp => {
        // console.log(resp.data)
        // console.log(localStorage.getItem('token'))
        commit('loginSuccess', username)
        // routerlogin
        router.push('/')
      }).catch(err => {
        commit('loginFailure', err)
        dispatch('alert/error', err, {root: true})
      })
  },

  logout ({commit}) {
    userService.logout()
    commit('logout')
  },

  register ({dispatch, commit}, user) {
    commit('registerRequest', user)
    // console.log('Registration')
    userService.register(user)
      .then(user => {
        commit('registerSuccess', user)
        // router
        router.push('/login')
        setTimeout(() => {
          // display success message after route change completes
          dispatch('alert/success', 'Registration successful', {root: true})
        })
      }).catch(err => {
        commit('registerFailure', err)
        dispatch('alert/error', err, {root: true})
      })
  },

  getRegisterCode ({dispatch, commit}, email) {
    userService.getRegisterCode(email)
      .then(resp => {
        // let code = resp.data.code
        // commit('registerSuccess', code)
        router.push('/signup')
        setTimeout(() => {
          // display success message after route change completes
          dispatch('alert/success', 'Registration Code has been sent to your email address.', {root: true})
        })
      }).catch(err => {
        dispatch('alert/error', err, {root: true})
      })
  }

}

const mutations = {
  setState (state, user) {
    state.status = {loggedIn: true}
    state.user = user
  },

  loginRequest (state, user) {
    state.status = {loggingIn: true}
    state.user = user
  },

  loginSuccess (state, user) {
    state.status = {loggedIn: true}
    state.user = user
  },

  loginFailure (state) {
    state.status = {}
    state.user = null
  },

  logout (state) {
    state.status = {}
    state.user = null
  },

  registerRequest (state, user) {
    state.status = { registering: true }
  },

  registerSuccess (state, user) {
    state.status = {}
  },

  registerFailure (state, error) {
    state.status = {}
  }
}

export const account = {
  namespaced: true,
  state,
  actions,
  mutations
}
