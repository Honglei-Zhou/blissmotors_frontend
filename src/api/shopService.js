import axios from 'axios'

export const shopService = {
  charge,
  getProducts,
  initializeCart
}

// API Key needed here
const baseUrl = 'https://bmhax.com/api/v1/'

// const baseUrl = 'https://blissbackend.com/api/v1'

// const baseUrl = 'http://127.0.0.1:8000/api/v1/carts'

function charge (payment, price) {
  console.log(payment)
  return new Promise((resolve, reject) => {
    var bodyFormData = new FormData()
    bodyFormData.append('order_number', payment.token.id)
    bodyFormData.append('price', price)
    bodyFormData.append('card_number', payment.token.card.id)
    bodyFormData.append('token', payment.token.id)
    bodyFormData.append('name', payment.name)
    bodyFormData.append('phone', payment.phone)
    bodyFormData.append('email', payment.email)

    bodyFormData.append('billing_address', payment.address)
    bodyFormData.append('billing_zipcode', payment.zipCode)
    bodyFormData.append('billing_city', payment.city)
    bodyFormData.append('billing_state', payment.state)

    bodyFormData.append('shipping_address', payment.address)
    bodyFormData.append('shipping_zipcode', payment.zipCode)
    bodyFormData.append('shipping_city', payment.city)
    bodyFormData.append('shipping_state', payment.state)

    // console.log(bodyFormData)
    axios({
      url: '/carts/payments',
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      data: bodyFormData,
      baseURL: baseUrl
    }).then((resp) => {
      // console.log(resp)
      resolve(resp.data)
    }).catch(err => {
      // console.log(err)
      reject(err)
    })
  })
}

function getProducts () {
  console.log('Send request')
  return new Promise((resolve, reject) => {
    axios({
      url: '/carts/products',
      method: 'GET',
      baseURL: baseUrl
    })
      .then(resp => {
        // console.log(resp.data)
        resolve(resp.data)
      }).catch(err => {
        // console.log(err)
        reject(err)
      })
  })
}

function initializeCart (user) {
  console.log(user)
  return new Promise((resolve, reject) => {
    axios({
      url: '/carts/products',
      method: 'GET',
      baseURL: baseUrl
    })
      .then(resp => {
        // console.log(resp.data)
        resolve(resp.data)
      }).catch(err => {
        // console.log(err)
        reject(err)
      })
  })
}
