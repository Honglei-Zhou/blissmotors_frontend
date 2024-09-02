// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './app/App'
import {router} from './router'
import store from './store'

// Bootstrap framework
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Font awesome
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'

// iView
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import locale from 'iview/dist/locale/en-US'

// Vue Countdown
import VueCountdown from '@chenfengyuan/vue-countdown'

// Axios
import Axios from 'axios'

// vee-validate

import VeeValidate from 'vee-validate'

import VueStripeCheckout from 'vue-stripe-checkout'

import VueLazyload from 'vue-lazyload'

import VueAnalytics from 'vue-analytics'

Vue.use(VueAnalytics, {
  id: 'UA-130583983-1',
  router
})

Vue.use(BootstrapVue)
Vue.component('icon', Icon)

Vue.use(iView, {locale})
Vue.component(VueCountdown.name, VueCountdown)

Vue.prototype.$http = Axios
const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

Vue.use(VeeValidate, {
  errorBagName: 'veeError',
  fieldsBagName: 'veeFields',
  events: 'blur'
})

Vue.use(VueStripeCheckout, 'pk_test_TYooMQauvdEDq54NiTphI7jx')
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'static/img/index/car/car1.png',
  loading: 'static/img/tenor.gif',
  attempt: 3,
  listenEvents: [ 'scroll' ]
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // template: '<App/>',
  // components: { App },
  router,
  store,
  render: h => h(App)
})
