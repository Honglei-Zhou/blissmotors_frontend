<template>

  <div class="row" style="height: 60px; background-color: #2d8cf0;">

    <div class="leftcolumn" style="background-color: #2d8cf0;">
    </div>

    <div
      class="maincolumn"
    >
      <div class="brand">
        <router-link to="/">
          <span class="brand-icon"><img style="height: 55px; margin-bottom: 2px;" src="/static/img/logo/bliss-motors-logo_bw.png"></span>
        </router-link>
      </div>
      <div class="nav">
        <i-menu
          mode="horizontal"
          theme="primary"
          active-name="1"
          class="nav"
        >
          <!-- <submenu name="0">
            <template slot="title">
              <Icon type="md-pin" />
              {{city}}
            </template>
            <i-input
              v-model="zipcode"
              type="text"
              style="width: auto; padding: 10px"
              placeholder="60611"
              search
              enter-button
            >
            </i-input>
          </submenu> -->
          <submenu name="1">
            <template slot="title">
              <Icon type="ios-car" />
              Find a Car
            </template>
            <!-- <menu-item name="1-1" to="/find">Search a Deal</menu-item>
            <menu-item
              name="1-2"
              to="/name-your-price"
            >Name Your Own Price</menu-item>
            <menu-item name="1-3">Free Concierge</menu-item> -->

            <menu-item name="1-1" to="/deal-of-week">Deal of Week</menu-item>
            <menu-item name="1-2" to="/research">Research</menu-item>
          </submenu>
          <menu-item name="2" to="/how-it-works">
            <Icon type="md-basket" />
            How it works
          </menu-item>
          <submenu name="3">

            <template slot="title">
              <Icon type="md-construct"/>
              Support<badge status="error" v-show="items.length>0"></badge>
            </template>
            <menu-item name="3-1" to="/faq">FAQ</menu-item>
            <!-- <menu-item name="3-2" to="/terms-of-service">Blog</menu-item> -->
            <menu-item name="3-2" to="/calculator">Calculator</menu-item>
                        <menu-item
              name="3-3"
              to="/product"
            >Product</menu-item>
            <menu-item
              name="3-4"
              to="/cart"
            >My Cart <badge :count="cartCount"><Icon type="ios-cart-outline" class="demo-badge" size="24"/></badge></menu-item>

            <!-- <menu-item
              name="3-4"
              to="/pay"
            >Pay</menu-item> -->
            <!--
            <menu-item
              name="3-5"
              to="/hello"
            >Hello</menu-item>
            -->
            <!-- <menu-item
              name="3-5"
              to="/product"
            >Product</menu-item> -->
          </submenu>
          <submenu name="4">
            <template slot="title">
              <Icon type="md-star" />
              About
            </template>
            <menu-item name="4-1" to="/why-blissmotors">Why Bliss Motors</menu-item>
            <!--
            <menu-item name="4-2">News & Events</menu-item>
            -->
            <menu-item name="4-2" to="/career">Careers</menu-item>
            <menu-item name="4-3" to="/contact-us">Contact Us</menu-item>
          </submenu>
          <submenu
            name="5"
            v-if="!status.loggedIn">
            <template slot="title">
              <Icon type="md-people" />
              Login
            </template>
            <menu-item name="5-1" to="/login">
              <!-- <a
                @click="redirectToLogin"
                style="color: #515a6e"
              >
                Login
              </a> -->
              Login
            </menu-item>
            <menu-item name="5-2" to="/signup">
              Sign up
              <!-- <a
                @click="redirectToSignup"
                style="color: #515a6e"
              >
                Sign up
              </a> -->
            </menu-item>
          </submenu>
          <!--
          <menu-item
            name="5"
            v-if="!status.loggedIn"
          >
            <router-link to="/login" active-class="router-link-active">
              <Icon type="md-people"/>
             Log In
            </router-link>
          </menu-item>
          -->
          <submenu
            name="5"
            v-else
          >
            <template slot="title">
              <Icon type="md-people" />
              My Account
            </template>
            <!-- <menu-item name="5-1">
              <a
                @click="viewMyHome"
                style="color: #515a6e"
              >
                My Home
              </a>
            </menu-item> -->
            <menu-item name="5-1" to="/logout">
              Log Out
              <!-- <a
                @click="logOutFun"
                style="color: #515a6e"
              >
                Log Out
              </a> -->
            </menu-item>
          </submenu>
        </i-menu>
      </div>
    </div>

    <div class="rightcolumn" style="background-color: #2d8cf0;">
    </div>

  </div>

</template>

<script>
// import store from '@/vuex/store'
import { mapState, mapActions } from 'vuex'
// import {locationService} from '@/api/locationService'

export default {
  name: 'Header',

  created () {
    this.isLogin()
  },

  // mounted: function () {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(position => {
  //       this.position = position.coords
  //       console.log(this.position)
  //       /*
  //       locationService.getLocationJSON(this.position).then((location) => {
  //         this.city = location.city + ',' + location.state
  //       })
  //       */
  //     })
  //   }
  // },

  data () {
    return {
      city: 'Chicago, IL',
      zipcode: '60611',
      position: null
    }
  },
  computed: {
    // ...mapState('account', ['status'])
    ...mapState({status: state => state.account.status, items: state => state.cart.items}),
    cartCount () {
      var count = 0
      this.items.forEach((item) => {
        count += item.quantity
      })
      return count
    }
  },

  methods: {
    ...mapActions('account', ['logout', 'isLogin']),
    changeCity () {
      console.log(this.zipcode)
    },

    redirectToLogin () {
      this.$router.push('/login')
    },

    redirectToSignup () {
      this.$router.push('/signup')
    },

    logOutFun () {
      console.log('clicked log out')
      this.logout()
      this.$router.push('/')
    },
    viewMyHome () {
      this.$router.push('/user')
    }
  }
}
</script>

<style scoped>
@import "../../common/css/base.css";

.brand {
  margin: 0;
  width: 10%;
  height: 100%;
  vertical-align: middle;
  background-color: #2d8cf0;
}

.brand-icon {
  color: white;
  line-height: 55px;
  font-size: 55px;
}

.nav {
  margin: 0;
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  background-color: #2d8cf0;
}

.nav ul {
  list-style: none;
}
.nav li {
  font-size: 14px;
  line-height: 35px;
  font-weight: bold;
}
.router-link-active {
  cursor: pointer;
  color: #ffffff;
}
.nav a {
  text-decoration: none;
  /*color: #ffffff;*/
  color: rgba(0,0,0,0.2);
  font-size: 14px;
  line-height: 35px;
  font-weight: bold;
  padding-left: 15px;
  cursor: pointer;
}
.brand a {
  border-left: none;
}
.location a {
  border-left: none;
}
.nav a:hover {
  color: darkgray;
}
.demo-badge{
  width: 25px;
  height: 25px;
  border-radius: 6px;
  display: inline-block;
}

</style>
