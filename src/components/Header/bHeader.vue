<template>
  <div class="box">
    <div class="nav">
        <i-menu mode="horizontal" theme="primary" active-name="1" class="nav">
          <div class="navbar-brand" style="margin-left:0px">
            <router-link to="/">
            Bliss Motors
            </router-link>
          </div>
          <div>
            <submenu name="0">
              <template slot="title">
                <Icon type="md-pin" />
                {{city}}
              </template>
              <i-input v-model="zipcode" type="text" style="width: auto; padding: 10px" placeholder="60611" search enter-button>
              </i-input>
            </submenu>
            <submenu name="1">
              <template slot="title">
                <Icon type="ios-car" />
                Find a Car
              </template>
              <menu-item name="1-1">Previously Negotiated Deals</menu-item>
              <menu-item name="1-2">Name Your Own Price</menu-item>
              <menu-item name="1-3">Free Concierge</menu-item>

              <menu-item name="1-4">Deal of Week</menu-item>
              <menu-item name="1-5" to="/search">Search a Car</menu-item>
            </submenu>
            <menu-item name="2">
              <Icon type="md-basket" />
              How it works
            </menu-item>
            <submenu name="3">
              <template slot="title">
                <Icon type="md-construct" />
                Support
              </template>
              <menu-item name="3-1">FAQ</menu-item>
              <menu-item name="3-2">Auto Lease Calculator</menu-item>
              <menu-item name="3-3">Blog</menu-item>
              <menu-item name="3-4" to="/pay">Pay</menu-item>
              <menu-item name="3-5" to="/hello">Hello</menu-item>
            </submenu>
            <submenu name="4">
              <template slot="title">
                <Icon type="md-star" />
                About
              </template>
              <menu-item name="4-1">Why Bliss Motors</menu-item>
              <menu-item name="4-2">News & Events</menu-item>
              <menu-item name="4-3">Careers</menu-item>
              <menu-item name="4-4">Contact Us</menu-item>
            </submenu>
            <menu-item name="5" v-if="!status.loggedIn">
              <router-link to="/login">
              <Icon type="md-people" />
              Log In
              </router-link>
            </menu-item>
            <menu-item name="5" v-else>
            <a @click="logOutFun">
              <Icon type="md-people" />
              Log Out
              </a>
            </menu-item>
          </div>
        </i-menu>
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

  mounted: function () {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.position = position.coords
        console.log(this.position)
        /*
          locationService.getLocationJSON(this.position).then((location) => {
            this.city = location.city + ',' + location.state
          })
          */
      })
    }
  },

  data () {
    return {
      city: 'Chicago, IL',
      zipcode: '60611',
      position: null
    }
  },
  computed: {
    ...mapState('account', ['status'])
  },

  methods: {
    ...mapActions('account', ['logout', 'isLogin']),
    changeCity () {
      console.log(this.zipcode)
    },

    logOutFun () {
      console.log('clicked log out')
      this.logout()
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.leftcolumn {
    float: left;
    width: 10%;
}

.rightcolumn {
    float: left;
    width: 10%;
}

.maincolumn {
    float: left;
    width: 80%;
    text-align: center;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

.clearfix::after {
    content: "";
    clear: both;
    display: table;
  }

@media screen and (max-width: 1140px)
{
    .leftcolumn, .rightcolumn {
        width: 0%;
    }

    .maincolumn {
        width: 100%;
    }
}

  .box{
    width: 100%;
    position: relative;
    min-width: 1140px;
    height: 100px;
    margin: 0px auto;
    background-color: #2d8cf0;
  }

  .box::after{
    content: '';
    display: block;
    clear: both;
  }

  .nav {
    margin: 0px auto;
    width: 1140px;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  /*
  .nav-brand {
    width: 20%;
    height: 100%;
  }

  .nav-menu {
    width: 80%;
    height: 100%;
  }
  */
  .nav ul {
    list-style: none;
  }
  .nav li {
    font-size: 14px;
    line-height: 35px;
    font-weight: bold;
  }
  .nav a {
    text-decoration: none;
    color: #ffffff;
    padding-left: 15px;
    /*border-left: 1px solid #ccc;*/
    cursor: pointer;
  }
  .brand a {
    border-left: none;
  }
  .location a {
    border-left: none;
  }
  .nav a:hover {
    color: #d9534f;
  }
  /*
  .location {
    color: #999999;
  }
  .Icon {
    color: #d9534f;
  }
  .first {
    color: #999999;
  }

  .first a:first-child {
    padding-left: 3px;
    border-left: none;
  }
  .city {
    padding: 10px 15px;
  }
  .city-item {
    font-weight: bold;
    cursor: pointer;
    padding: 5px;
  }
  .city-item:hover {
    color: #d9534f;
  }
  */
</style>
