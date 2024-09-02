<template>
  <div class="carlist-container">
    <div class="carlist-breadcrumb">
        <breadcrumb>
            <breadcrumb-item to="/">
                <icon type="ios-home-outline"></icon> Home
            </breadcrumb-item>
            <breadcrumb-item to="/components/breadcrumb">
                <icon type="logo-buffer"></icon> Components
            </breadcrumb-item>
            <breadcrumb-item>
                <icon type="ios-cafe"></icon> Breadcrumb
            </breadcrumb-item>
        </breadcrumb>
    </div>
    <div class="carlist-carousel">
      <carousel autoplay loop autoplay-speed=5000>
        <carousel-item v-for="(item, index) in sliderInfo" :key="index">
          <img :src="item.img" style="height: 500px; object-fit: scale-down"/>
        </carousel-item>
      </carousel>
    </div>

    <div class="carlist-head">
      <p>Find your next car</p>
    </div>

<!--
    <div class="carlist-social">
      <facebook url="https://www.facebook.com/blissmotorsusa" scale="3"></facebook>
      <twitter url="https://www.facebook.com/blissmotorsusa" scale="3"></twitter>
    </div>
-->
    <div class="carlist-content">
        <div class="carlist-content-head">
            Available 2019 BMW X5 Trims
        </div>
        <div class="carlist-content-row">
            <row type="flex" justify="space-around" class="code-row-bg">
                <i-col span="7">
                    <card :padding="0">
                        <div slot="title">
                            <img :src="carInfo.src" style="width: 300px; height: 200px; object-fit: cover">
                        </div>
                        <div slot="title">
                            <p style="font-size: 22px;">{{carInfo.year + " " + carInfo.make + " " + carInfo.model}}</p>
                        </div>
                        <div style="border: 0px">
                            <i-table :show-header=false :size="large" :columns="columns1" :data="data1"></i-table>
                        </div>
                        <div>
                        </div>
                    </card>
                </i-col>
                <i-col span="7">
                    <card :padding="0">
                        <div slot="title">
                            <img :src="carInfo.src" style="width: 300px; height: 200px; object-fit: cover">
                        </div>
                        <div slot="title">
                            <p style="font-size: 22px;">{{carInfo.year + " " + carInfo.make + " " + carInfo.model}}</p>
                        </div>
                        <div style="border: 0px">
                            <i-table :show-header=false :size="large" :columns="columns1" :data="data1"></i-table>
                        </div>
                        <div>
                        </div>
                    </card>
                </i-col>
                <i-col span="7">
                    <card :padding="0">
                        <div slot="title">
                            <img :src="carInfo.src" style="width: 300px; height: 200px; object-fit: cover">
                        </div>
                        <div slot="title">
                            <p style="font-size: 22px;">{{carInfo.year + " " + carInfo.make + " " + carInfo.model}}</p>
                        </div>
                        <div style="border: 0px">
                            <i-table :show-header=false :size="large" :columns="columns1" :data="data1"></i-table>
                        </div>
                        <div>
                        </div>
                    </card>
                </i-col>
            </row>
        </div>
    </div>

  </div>
</template>

<script>
import {Facebook, Twitter} from 'vue-socialmedia-share'

export default {
  name: 'CarList',
  data () {
    return {
      columns1: [
        {
          title: 'Feature',
          key: 'name',
          width: 100
        },
        {
          title: 'Details',
          key: 'age'
        }

      ],
      data1: [
        {
          name: 'John Brown',
          age: 18

        },
        {
          name: 'Jim Green',
          age: 24

        },
        {
          name: 'Joe Black',
          age: 30
        },
        {
          name: 'Jon Snow',
          age: 26
        }
      ],
      sliderInfo: [
        {
          img: '/static/img/index/car/test3.jpg',
          url: 'https://www.blissmotors.com',
          alt: '',
          href: ''
        },
        {
          img: '/static/img/index/car/test3.jpg',
          url: 'https://www.blissmotors.com',
          alt: '',
          href: ''
        },
        {
          img: '/static/img/index/car/test3.jpg',
          url: 'https://www.blissmotors.com',
          alt: '',
          href: ''
        },
        {
          img: '/static/img/index/car/test3.jpg',
          url: 'https://www.blissmotors.com',
          alt: '',
          href: ''
        }
      ],
      carInfo: {
        src: '/static/img/index/car/car2.png',
        year: '2018',
        make: 'BMW',
        model: 'X5',
        trim: 'Basic',
        msrp: '50000',
        monthlyPayment: '300',
        driveOff: '0',
        otherInfo: 'Must be cosigned'
      }
    }
  },
  components: {
    Facebook,
    Twitter
  }
}
</script>

<style scoped>
  .carlist-container {
    width: 1140px;
    background-color: #ffffff;
    margin: 0px auto;
    text-align: center;
  }
  .carlist-breadcrumb {
      width: 1140px;
      height: 40px;
      margin-top: 20px;
      text-align: left;
  }
  .carlist-carousel {
    margin-top: 10px;
    width: 1140px;
  }
  .carlist-head {
    width: 1140px;
    height: 60px;
    margin-top: 20px;
  }
  .carlist-head p {
    font-size: 36px;
    font-weight: bold;

  }
  .carlist-content {
    width: 1140px;
    margin-top: 20px;
  }
  .carlist-content-head {
    height: 50px;
    font-size: 30px;
    font-weight: bold;
  }
  .carlist-content-row {
    width: 1140px;
    margin-top: 30px;
  }
  .carlist-content-button {
    width: 1140px;
    height: 50px;
    margin-top: 20px;
  }

</style>
