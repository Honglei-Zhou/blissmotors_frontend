import Vue from 'vue'
import Vuex from 'vuex'
/*
import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: false,
    userInfo: {
      username: '',
      usertype: ''
    }
  },
  getters,
  actions,
  mutations
})
*/

import { alert } from './alert.module'
import { account } from './account.module'
import { users } from './users.module'
import { cart } from './cart.module'
import { products } from './products.module'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    alert,
    account,
    users,
    cart,
    products
  }
})
