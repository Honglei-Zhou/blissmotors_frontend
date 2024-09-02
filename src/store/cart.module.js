// import {router} from '../router'
import {shopService} from '../api'

const state = {
  items: [],
  checkoutStatus: null
}

// getters
const getters = {
  cartProducts: (state, getters, rootState) => {
    return state.items.map(({ id, quantity }) => {
      const product = rootState.products.all.find(product => product.id === id)
      // console.log(product)
      return {
        id: product.id,
        product_name: product.product_name,
        price: product.price,
        quantity: quantity,
        description: product.description
      }
    })
  },

  cartTotalPrice: (state, getters) => {
    return getters.cartProducts.reduce((total, product) => {
      return total + product.price * product.quantity
    }, 0)
  }
}

// actions
const actions = {
  checkout ({ commit, state }, card) {
    // console.log(products)
    var price = state.items.reduce((total, product) => {
      return total + product.price * product.quantity
    }, 0)
    // console.log(price)
    const savedCartItems = [...state.items]
    commit('setCheckoutStatus', null)
    // empty cart
    commit('setCartItems', { items: [] })
    /*
    shopService.buyProducts(
        products,
        () => commit('setCheckoutStatus', 'successful'),
        () => {
          commit('setCheckoutStatus', 'failed')
          // rollback to the cart saved before sending the request
          commit('setCartItems', { items: savedCartItems })
        }
      )
      */
    return new Promise((resolve, reject) => {
      shopService.charge(card, price).then(resp => {
        commit('setCheckoutStatus', 'successful')
        resolve(resp)
      }).catch(err => {
        commit('setCheckoutStatus', 'failed')
        // rollback to the cart saved before sending the request
        commit('setCartItems', { items: savedCartItems })
        // console.error(err)
        reject(err)
      })
    })
  },

  addProductToCart ({ state, commit }, product) {
    // console.log(product)
    commit('setCheckoutStatus', null)
    /*
    if (product.inventory > 0) {

        // remove 1 item from stock
        // Not necessary to reduce inventory here
      // commit('products/decrementProductInventory', { id: product.id }, { root: true })
    }
    */
    const cartItem = state.items.find(item => item.id === product.id)
    if (!cartItem) {
      commit('pushProductToCart', { product: product })
    } else {
      commit('incrementItemQuantity', { id: product.id })
    }
  },

  removeProductFromCart ({ state, commit }, product) {
    commit('setCheckoutStatus', null)
    commit('removeItem', {id: product.id})
  },

  // If user first time login, initialize cart
  initializeCart ({ state, commit }, user) {
    // console.log(user)
    shopService.initializeCart(user).then(items => {
      // console.log(items)
      commit('setCartItems', { items: items })
      // commit('setCartItems', { items: [{
      //   title: 'Service',
      //   description: 'Commission',
      //   quantity: 4,
      //   price: 100
      // },
      // {
      //   title: 'Service',
      //   description: 'Commission',
      //   quantity: 5,
      //   price: 100
      // }] })
    }).catch(err => {
      console.log(err)
    })
  }
}

// mutations
const mutations = {
  pushProductToCart (state, { product }) {
    state.items.push({
      id: product.id,
      product_name: product.product_name,
      price: product.price,
      description: product.description,
      quantity: 1
    })
  },

  incrementItemQuantity (state, { id }) {
    const cartItem = state.items.find(item => item.id === id)
    cartItem.quantity++
  },

  decrementItemQuantity (state, { id }) {
    const cartItem = state.items.find(item => item.id === id)
    cartItem.quantity--
    if (cartItem.quantity === 0) {
      state.items.splice(state.items.indexOf(cartItem), 1)
    }
  },

  removeItem (state, { id }) {
    const cartItem = state.items.find(item => item.id === id)
    state.items.splice(state.items.indexOf(cartItem), 1)
  },

  setCartItems (state, { items }) {
    state.items = items
  },

  setCheckoutStatus (state, status) {
    state.checkoutStatus = status
  }
}

export const cart = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
