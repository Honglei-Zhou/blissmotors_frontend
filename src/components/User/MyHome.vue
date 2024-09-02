<template>
  <div class="row">
      <div class="leftcolumn">
    </div>
    <div class="maincolumn">
      <!--Bugs here: pics should not be transparent, and should be the same size -->
      <div class="carousel-wrapper">
        <carousel
        >
          <carousel-item
            v-for="(item, index) in sliderInfo"
            :key="index"
          >

              <img
                :src="item.img"
                style="width: 100%; object-fit: scale-down"
              />

          </carousel-item>
      </carousel>
      </div>
    </div>
    <div class="rightcolumn">
    </div>

      <div class="leftcolumn">
      </div>

      <div class="maincolumn">
<div class="content-wrapper">
      <layout>
        <sider hide-trigger :style="{background: '#fff'}" ref="side" :collapsed-width="90" v-if="status.loggedIn">
          <i-menu active-name="1-2" theme="light" height='100%' width="auto" @on-select="onSelect">
            <div class="user-icon">
              <div class="user-img">
                <img src="static/img/head.png">
              </div>
              <p>User Name</p>
            </div>
            <submenu name="1">
              <template slot="title">
                  <Icon type="ios-contact-outline" size="20"></Icon>
                  <span>Profile</span>
              </template>
              <menu-item name="profile">My Profile</menu-item>
            </submenu>
            <submenu name="2">
              <template slot="title">
                  <Icon type="ios-compass-outline" size="20"></Icon>
                  <span>Address</span>
              </template>
              <menu-item name="shippingAddress">Shipping Address</menu-item>
              <menu-item name="billingAddress">Billing Address</menu-item>
            </submenu>
            <submenu name="3">
              <template slot="title">
                  <Icon type="ios-clipboard-outline" size="20"></Icon>
                  <span>Orders</span>
              </template>
              <menu-item name="order">My Order</menu-item>
            </submenu>
            <submenu name="4">
              <template slot="title">
                  <Icon type="ios-cart-outline" size="20"></Icon>
                  <span>Shopping Cart</span>
              </template>
              <menu-item name="cart">My Cart</menu-item>
            </submenu>
          </i-menu>
        </sider>

        <sider :style="{height: 'calc(100vh - 35px)', background: '#fff'}" ref="side" :collapsed-width="90" v-else>
          <i-menu active-name="1-2" theme="light" width="auto" @on-select="onSelect">
            <div class="user-icon">
              <div class="user-img">
                <img src="static/img/head.png">
              </div>
              <p>Guest</p>
            </div>
            <submenu name="1">
              <template slot="title">
                  <Icon type="ios-cart-outline" size="20"></Icon>
                  <span>Shopping Cart</span>
              </template>
              <menu-item name="cart">My Cart</menu-item>
            </submenu>
          </i-menu>
        </sider>

        <layout ref='contentarea'>
          <i-header v-model="activeTitle" style="backgroundColor: #ffffff; text-align: center;
          padding-top: 10px" v-if="status.loggedIn">
            <h3>{{activeTitle}}</h3>
          </i-header>
          <i-header v-model="activeTitle" style="backgroundColor: #ffffff; text-align: center;
          padding-top: 10px" v-else>
            <h3>My Shopping Cart</h3>
          </i-header>
          <i-content class="content">
            <transition mode="out-in">
              <router-view></router-view>
            </transition>
          </i-content>
        </layout>
      </layout>
      </div>
       </div>
      <div class="rightcolumn">
      </div>

  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'MyHome',
  data () {
    return {
      // bug here: refresh will reload activeTitle
      activeTitle: 'My Profile',
      bar: {
        'profile': 'My Profile',
        'shippingAddress': 'Shipping Address',
        'billingAddress': 'Billing Address',
        'order': 'My Order',
        'cart': 'My Shopping Cart'
      },
      sliderInfo: [
        {
          img: '/static/img/index/car/page_head_2.png',
          url: 'https://www.blissmotors.com'
        }
      ]
    }
  },
  created () {
    this.isLogin()
  },
  computed: {
    ...mapState('account', ['status'])
  },
  methods: {
    ...mapActions('account', ['logout', 'isLogin']),
    onSelect (name) {
      this.activeTitle = this.bar[name]
      // console.log(this.activeTitle)
      console.log(name)
      this.$router.push(`/${name}`)
    }
  }
}
</script>

<style scoped>
@import '../../common/css/base.css';

.carousel-wrapper {
  width: 100%;
  margin-top: 10px;
  padding: 0 10px;
}
.content-wrapper{
  width: 100%;
  margin: 20px;
}
.side-bar a{
  color: #232323;
}
.user-icon {
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.user-icon span {
  font-size: 96px;
}
.user-img {
  margin-bottom: 15px;
  width: 96px;
  height: 96px;
  border-radius: 48px;
  overflow: hidden;
}
.user-img img{
  width: 100%;
}
.content {
  margin:0;
  background-color: #fff;
  padding: 10px;
}
</style>
