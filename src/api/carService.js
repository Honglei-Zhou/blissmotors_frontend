import axios from 'axios'

export const carService = {
  getCarMake,
  getCarModel,
  getCarTrim,
  getCarImage,
  getCarByMake,
  getCarByModel,
  getCarByYear,
  getCarDeals,
  getCarDeal,
  getCarByStyle,
  getCarByCategory,
  getWeeklyDeal,
  getCarByMakeModelYear,
  getSpecificCarTrim
}

// const baseUrl = 'http://bm-backend-env.qiqqbvuhas.us-west-2.elasticbeanstalk.com/api/v1/'
const baseUrl = 'https://bmhax.com/api/v1/'
// const baseUrl = 'http://127.0.0.1:8000/api/v1'
// const baseUrl = 'https://blissbackend.com/api/v1'

function getCarMake () {
  return new Promise((resolve, reject) => {
    axios({
      url: '/cars/carmakes/',
      method: 'GET',
      baseURL: baseUrl
    }).then((resp) => {
      resolve(resp.data)
    }).catch(err => {
      console.log(err)
      reject(err)
    })
  })
}

function getCarModel (make, page, pageSize) {
  return new Promise((resolve, reject) => {
    axios({
      url: '/cars/carmodels/',
      method: 'GET',
      params: {
        search: make.replace('-', ' '),
        page: page,
        page_size: pageSize
      },
      baseURL: baseUrl
    }).then((resp) => {
      // console.log(resp.data)
      resolve(resp.data)
    }).catch(err => {
      console.log(err)
      reject(err)
    })
  })
}

function getCarTrim (make, model, year) {
  return new Promise((resolve, reject) => {
    axios({
      url: '/cars/cartrims/',
      method: 'GET',
      params: {
        make: make.toLowerCase().replace('-', ' '),
        model: model,
        year: year
      },
      baseURL: baseUrl
    }).then((resp) => {
      resolve(resp.data)
    }).catch(err => {
      console.log(err)
      reject(err)
    })
  })
}

function getSpecificCarTrim (make, model, trim, year) {
  return new Promise((resolve, reject) => {
    axios({
      url: '/cars/cartrims/',
      method: 'GET',
      params: {
        make: make.toLowerCase().replace('-', ' '),
        model: model,
        trim: trim,
        year: year
      },
      baseURL: baseUrl
    }).then((resp) => {
      resolve(resp.data)
    }).catch(err => {
      console.log(err)
      reject(err)
    })
  })
}

function getCarImage (make, model, year) {
  return new Promise((resolve, reject) => {
    axios({
      url: '/cars/carimages/',
      method: 'GET',
      params: {
        make: make.toLowerCase().replace('-', ' '),
        model: model,
        year: year
      },
      baseURL: baseUrl
    }).then((resp) => {
      resolve(resp.data)
    }).catch(err => {
      console.log(err)
      reject(err)
    })
  })
}

function getCarByMake (make) {
  return new Promise((resolve, reject) => {
    axios({
      url: '/cars/cars',
      method: 'GET',
      params: {
        make: make
      },
      baseURL: baseUrl
    }).then((resp) => {
      resolve(resp.data)
    }).catch(err => {
      console.log(err)
      reject(err)
    })
  })
}

function getCarByStyle (style, page, pageSize, msrpMin, msrpMax, paymentMin, paymentMax) {
  return new Promise((resolve, reject) => {
    axios({
      url: '/cars/cars',
      method: 'GET',
      params: {
        cartype: style,
        year: 2019,
        page: page,
        page_size: pageSize,
        msrp_min: msrpMin,
        msrp_max: msrpMax,
        payment_min: paymentMin,
        payment_max: paymentMax
      },
      baseURL: baseUrl
    }).then((resp) => {
      resolve(resp.data)
    }).catch(err => {
      console.log(err)
      reject(err)
    })
  })
}

function getCarByCategory (category, page, pageSize, msrpMin, msrpMax, paymentMin, paymentMax) {
  return new Promise((resolve, reject) => {
    axios({
      url: '/cars/cars',
      method: 'GET',
      params: {
        category: category,
        year: 2019,
        page: page,
        page_size: pageSize,
        msrp_min: msrpMin,
        msrp_max: msrpMax,
        payment_min: paymentMin,
        payment_max: paymentMax
      },
      baseURL: baseUrl
    }).then((resp) => {
      resolve(resp.data)
    }).catch(err => {
      console.log(err)
      reject(err)
    })
  })
}

function getCarByMakeModelYear (make, model, year) {
  return new Promise((resolve, reject) => {
    axios({
      url: '/cars/cars',
      method: 'GET',
      params: {
        make: make,
        model: model,
        year: year
      },
      baseURL: baseUrl
    }).then((resp) => {
      resolve(resp.data)
    }).catch(err => {
      console.log(err)
      reject(err)
    })
  })
}

function getCarByYear (year) {
  return new Promise((resolve, reject) => {
    axios({
      url: '/cars/cars',
      method: 'GET',
      params: {
        year: year
      },
      baseURL: baseUrl
    }).then((resp) => {
      resolve(resp.data)
    }).catch(err => {
      console.log(err)
      reject(err)
    })
  })
}

function getCarByModel (model) {
  return new Promise((resolve, reject) => {
    axios({
      url: '/cars/cars',
      method: 'GET',
      params: {
        model: model
      },
      baseURL: baseUrl
    }).then((resp) => {
      resolve(resp.data)
    }).catch(err => {
      console.log(err)
      reject(err)
    })
  })
}

function getCarDeals (page) {
  var url = 'https://vi78oj1c99.execute-api.us-east-1.amazonaws.com/v1/api/cars'
  return new Promise((resolve, reject) => {
    axios({
      url: '/deals?',
      method: 'GET',
      params: {
        deal: 'True',
        all: 'True',
        page: page
      },
      baseURL: url
    }).then((resp) => {
      // console.log(resp.data)
      resolve(resp.data)
    }).catch(err => {
      console.log(err)
      reject(err)
    })
  })
}

function getWeeklyDeal () {
  return new Promise((resolve, reject) => {
    axios({
      url: '/deals/weeklydeals',
      method: 'GET',
      params: {
        current: 1
      },
      baseURL: baseUrl
    }).then((resp) => {
      // console.log(resp.data)
      resolve(resp.data)
    }).catch(err => {
      console.log(err)
      reject(err)
    })
  })
}

function getCarDeal (make, model) {
  return new Promise((resolve, reject) => {
    axios({
      url: '/cars/carinventory',
      method: 'GET',
      params: {
        make: make,
        model: model
      },
      baseURL: baseUrl
    }).then((resp) => {
      // console.log(resp.data)
      resolve(resp.data)
    }).catch(err => {
      console.log(err)
      reject(err)
    })
  })
}
