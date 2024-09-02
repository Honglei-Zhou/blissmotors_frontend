import {shopService} from '../api'

// initial state
const state = {
  all: []
}

// getters
const getters = {}

// actions
const actions = {
  getAllProducts ({ commit }) {
    /*
    shopService.getProducts(products => {
      commit('setProducts', products)
    })
    */
    shopService.getProducts().then(products => {
      // console.log(products)
      commit('setProducts', products)
    }).catch(err => {
      console.log(err)
    })
  }
}

// mutations
const mutations = {
  setProducts (state, products) {
    state.all = products
    // console.log(state.all)
  },

  // Not for this project
  decrementProductInventory (state, { id }) {
    const product = state.all.find(product => product.id === id)
    product.inventory--
  }
}

export const products = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
