<template>
  <div class="weekly-deal-container">
    <div class="weekly-deal-carousel">
      <carousel autoplay loop autoplay-speed=4000>
        <carousel-item v-for="(item, index) in sliderInfo" :key="index">
          <img :src="item.img" style="height: 500px; object-fit: scale-down"/>
        </carousel-item>
      </carousel>
    </div>

    <div class="weekly-deal-head">
      <p>Previously Negotiated Deals</p>
    </div>

    <div class="weekly-deal-social">
      <facebook url="https://www.facebook.com/blissmotorsusa" scale="3"></facebook>
      <twitter url="https://www.facebook.com/blissmotorsusa" scale="3"></twitter>
    </div>

    <div class="weekly-deal-content">
        <div class="weekly-deal-content-row">
            <row type="flex" justify="space-around" class="code-row-bg">
                <i-col span="7">
                    <card>
                        <p slot="title">The standard card</p>
                        <p>Content of card</p>
                        <p>Content of card</p>
                        <p>Content of card</p>
                    </card>
                </i-col>
                <i-col span="7">
                    <card>
                        <p slot="title">The standard card</p>
                        <p>Content of card</p>
                        <p>Content of card</p>
                        <p>Content of card</p>
                    </card>
                </i-col>
                <i-col span="7">
                    <card>
                        <p slot="title">The standard card</p>
                        <p>Content of card</p>
                        <p>Content of card</p>
                        <p>Content of card</p>
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
  name: 'WeeklyDeal',
  data () {
    return {
      sliderInfo: [
        {
          img: '/static/img/index/car/test1.jpg',
          url: 'https://www.blissmotors.com',
          alt: '',
          href: ''
        },
        {
          img: '/static/img/index/car/test2.png',
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
          img: '/static/img/index/car/test4.jpg',
          url: 'https://www.blissmotors.com',
          alt: '',
          href: ''
        }
      ],
      carInfo: {
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
  .weekly-deal-container {
    width: 1140px;
    background-color: #ffffff;
    margin: 0px auto;
  }
  .weekly-deal-carousel {
    margin-top: 10px;
    width: 1140px;
  }
  .weekly-deal-head {
    width: 1140px;
    height: 60px;
    margin-top: 20px;
  }
  .weekly-deal-head p {
    font-size: 36px;
    font-weight: bold;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
  .weekly-deal-timer {
    width: 800px;
    height: 60px;
    margin-left: 170px;
    margin-top: 20px;
    padding: 10px;
    background-color: #2bd815;
  }
  .weekly-deal-timer-text {
    font-size: 28px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #000000;
  }
  .weekly-deal-timer-num {
    padding: 3px;
    border-radius: 5px;
    background-color: #440106;
    font-size: 26px;
    font-weight: bold;
    color: #f90013;
  }
  .weekly-deal-timer-point {
    font-size: 26px;
    font-weight: bold;
    color: #440106;
  }
  .weekly-deal-social {
    width: 1140px;
    height: 40px;
    margin-top: 20px;
    margin-left: 0px;
    text-align: right;
  }
  .weekly-deal-content {
    width: 1140px;
    margin-top: 20px;
  }
  .weekly-deal-content-row {
    width: 1140px;
    height: 500px;
  }
  .weekly-deal-content-button {
    width: 1140px;
    height: 50px;
    margin-top: 20px;
  }

</style>
