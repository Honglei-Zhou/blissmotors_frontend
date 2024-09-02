<template>
  <div class="row">
    <div class="leftcolumn">
    </div>
    <div class="maincolumn">
      <!--Bugs here: pics should not be transparent, and should be the same size -->
      <div class="carousel-wrapper">
        <carousel
          autoplay
          loop
          :autoplay-speed="setting.autoplaySpeed"
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
        <sider
          :style="{margin: '0 auto', width: '30%', background: '#fff', overflow: 'auto'}"
          ref="side"
          :collapsed-width="78"
          v-if="status.loggedIn"
        >
          <i-menu
            active-name="1-2"
            theme="light"
            height='100%'
            width="auto"
            @on-select="onSelect"
          >
            <div class="user-icon">
              <p>Search Variables</p>
            </div>

            <!-- Price -->
            <submenu name="1">
              <template slot="title">
                <span>Price</span>
              </template>
              <menu-item name="price">
                <slider v-model="value" :step="100" range :min="0" :max="1500"></slider>
              </menu-item>
              <menu-item name="minimum">
                <i-input
                  v-model="value[0]"
                  placeholder="Minimum price"
                >
                  <span slot="prepend">Minimum</span>
                </i-input>
              </menu-item>
              <menu-item name="maximum">
                <i-input
                  v-model="value[1]"
                  placeholder="Maximum price"
                >
                  <span slot="prepend">Maximum</span>
                </i-input>
              </menu-item>

            </submenu>

            <!-- Type -->
            <submenu name="2">
              <template slot="title">
                <span>Type</span>
              </template>
              <div v-for="(item, index) in carTypes" :key="index">
              <menu-item :name="item.name">
                <div class="check-box">
                <checkbox :label="item.label">
                  <span>{{item.value}}</span>
                </checkbox>
                </div>
              </menu-item>
              </div>
            </submenu>

            <!-- Category -->
            <submenu name="3">
              <template slot="title">
                <span>Category</span>
              </template>
             <div v-for="(item, index) in carCategories" :key="index">
              <menu-item :name="item.name">
                <div class="check-box">
                <checkbox :label="item.label">
                  <span>{{item.value}}</span>
                </checkbox>
                </div>
              </menu-item>
              </div>
            </submenu>

            <!-- Year -->
            <submenu name="4">
              <template slot="title">
                <span>Year</span>
              </template>
              <div v-for="(item, index) in carYears" :key="index">
              <menu-item :name="item.name">
                <div class="check-box">
                <checkbox :label="item.label">
                  <span>{{item.value}}</span>
                </checkbox>
                </div>
              </menu-item>
              </div>
            </submenu>

            <!-- Pay/MSRP -->
            <submenu name="5">
              <template slot="title">
                <span>Pay/MSRP</span>
              </template>
              <menu-item name="ratio">
                <slider v-model="ratio" :step="100" range :min="0" :max="1500"></slider>
              </menu-item>
              <menu-item name="minimum">
                <i-input
                  v-model="value[0]"
                  placeholder="Minimum price"
                >
                  <span slot="prepend">Minimum</span>
                </i-input>
              </menu-item>
              <menu-item name="maximum">
                <i-input
                  v-model="value[1]"
                  placeholder="Maximum price"
                >
                  <span slot="prepend">Maximum</span>
                </i-input>
              </menu-item>
            </submenu>

            <!-- Make/Model/Trim -->
            <submenu name="6">
              <template slot="title">
                <span>Make/Model/Trim</span>
              </template>
              <menu-item name="make">
                <i-select
                  v-model="formItem.make"
                  clearable
                  placeholder="Make(Optional)"
                  style="text-align:center"
                >
                  <i-option
                    v-for="(item, index) in carMake"
                    :key="index"
                    :value="item.make"
                  >{{item.make}}</i-option>
                </i-select>
              </menu-item>
              <menu-item name="model">
                <i-select
                  v-model="formItem.model"
                  :disabled="formItem.modelDisabled"
                  placeholder="Model(Optional)"
                  style="text-align:center"
                >
                  <i-option
                    v-for="(item, index) in carModel"
                    :key="index"
                    :value="item.model"
                  >{{item.model}}</i-option>
                </i-select>
              </menu-item>

              <menu-item name="trim">
                <i-select
                  v-model="formItem.trim"
                  :disabled="formItem.trimDisabled"
                  placeholder="Trim(Optional)"
                  style="text-align:center"
                >
                  <i-option
                    v-for="(item, index) in carTrim"
                    :key="index"
                    :value="item.trim"
                  >{{item.trim}}</i-option>
                </i-select>
              </menu-item>

            </submenu>

          </i-menu>

          <!-- Button -->
          <div style="height: 100px; marigin-top: 30px; padding-top: 30px">
            <i-button
              type="primary"
              icon="ios-search"
              @click="search"
            >Search</i-button>
            <i-button @click="reset">Reset</i-button>
          </div>
        </sider>

        <layout ref='contentarea'>
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
  name: 'Search',
  data () {
    return {
      // bug here: refresh will reload activeTitle
      minimumPrice: 0,
      maxPrice: 0,
      value: [0, 1000],
      ratio: [1, 2],
      carTypes: [
        {
          name: 'suv',
          label: 'SUV',
          value: 'SUV'
        },
        {
          name: 'sedan',
          label: 'Sedan',
          value: 'Sedan'
        },
        {
          name: 'pickup',
          label: 'Pickup',
          value: 'Pickup'
        }
      ],
      carCategories: [
        {
          name: 'suv',
          label: 'SUV',
          value: 'SUV'
        },
        {
          name: 'sedan',
          label: 'Sedan',
          value: 'Sedan'
        },
        {
          name: 'pickup',
          label: 'Pickup',
          value: 'Pickup'
        }
      ],
      carYears: [
        {
          name: '2018',
          label: '2018',
          value: '2018'
        },
        {
          name: '2019',
          label: '2019',
          value: '2019'
        }
      ],
      formItem: {
        make: '',
        model: '',
        trim: '',
        type: '',
        category: '',
        makeDisabled: false,
        modelDisabled: true,
        trimDisabled: true,
        typeDisabled: false,
        categoryDisabled: false
      },
      ruleValidate: {
        name: [
          { required: true, message: 'The name cannot be empty', trigger: 'blur' }
        ]
      },
      carMake: [{
        make: 'Audi'
      },
      {
        make: 'Porshe'
      }],
      carModel: [],
      carTrim: [],
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
          img: 'static/img/index/car/test3.jpg',
          url: 'https://www.blissmotors.com'
        },
        {
          img: 'static/img/index/car/test3.jpg',
          url: 'https://www.blissmotors.com'
        },
        {
          img: 'static/img/index/car/test3.jpg',
          url: 'https://www.blissmotors.com'
        },
        {
          img: 'static/img/index/car/test3.jpg',
          url: 'https://www.blissmotors.com'
        }
      ],
      setting: {
        autoplaySpeed: 5000
      }
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
      // this.activeTitle = this.bar[name]
      // console.log(this.activeTitle)
      console.log(name)
      // this.$router.push(`/${name}`)
    },
    search () {
      // console.log(this.make)
      this.$router.push('/results')
    },
    reset () {
      console.log('reset')
    }
  }
}
</script>

<style scoped>
@import "../../common/css/base.css";

.carousel-wrapper {
  width: 100%;
  margin-top: 10px;
  padding: 0 10px;
}
.content-wrapper{
  width: 100%;
  margin-top: 20px;
}
.check-box {
  display: flex;
  justify-content: flex-start;
}
.side-bar a {
  color: #232323;
}
.user-icon {
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
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
.user-img img {
  width: 100%;
}
.content {
  width: 100%;
  margin: 0;
  background-color: #fff;
  padding: 10px;
}
</style>
