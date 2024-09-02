<template>
  <div class="row">
    <!-- Carousel -->

    <div class="leftcolumn">
    </div>
    <div class="maincolumn">
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

      <div class="weekly-deal-container">

        <div class="weekly-deal-head">
          <p>Deal Zone</p>
        </div>

        <div class="weekly-deal-timer">
          <countdown :time="endTime">
            <template slot-scope="props">
              <span class="weekly-deal-timer-text">Time Remaining：</span>
              <span class="weekly-deal-timer-num weekly-deal-timer-hour">{{ props.days }}</span>
              <span class="weekly-deal-timer-text"> days </span>
              <span class="weekly-deal-timer-num weekly-deal-timer-hour">{{ props.hours }}</span>
              <span class="weekly-deal-timer-text"> hours </span>
              <span class="weekly-deal-timer-num weekly-deal-timer-minute">{{ props.minutes }}</span>
              <span class="weekly-deal-timer-text">minutes</span>
              <span class="weekly-deal-timer-num weekly-deal-timer-seconds">{{ props.seconds }}</span>
              <span class="weekly-deal-timer-text">seconds</span>
            </template>
          </countdown>
        </div>

        <div class="weekly-deal-social">
          <span class="social-icon">
          <facebook
            url="https://www.facebook.com/blissmotorsusa"
            scale="3"
          ></facebook>
          </span>
          <span class="social-icon">
          <twitter
            url="https://www.facebook.com/blissmotorsusa"
            scale="3"
          ></twitter>
          </span>
        </div>

        <div class="weekly-deal-content-wrapper" v-if="endTime>0">
          <BrowseTrims
          :makeProp="make"
          :modelProp="model"
          :trimProp="trim"
          :showPrice="showPrice"
          :weeklyDeal="weeklyDeal"
          ></BrowseTrims>
        </div>

      </div>
    </div>

    <div class="rightcolumn">
    </div>
  </div>
</template>

<script>
import { Facebook, Twitter } from 'vue-socialmedia-share'
import BrowseTrims from '@/components/Search/BrowseTrims'
import { carService } from '@/api/carService'

export default {
  name: 'WeeklyDeal',
  data () {
    return {
      sliderInfo: [
        {
          img: '/static/img/index/car/page_head_2.png',
          url: 'https://www.blissmotors.com'
        }
      ],
      setting: {
        autoplaySpeed: 5000
      },
      make: '',
      model: '',
      trim: '',
      showPrice: true,
      weeklyDeal: true,
      endTime: 0
    }
  },
  created () {
    this._getTime()
  },
  methods: {
    _getTime () {
      carService.getWeeklyDeal().then((resp) => {
        var results = resp['results']
        // console.log(results)
        if (results.length > 0) {
          this.make = results[0].make
          this.model = results[0].model
          this.trim = results[0].trim
          this.endTime = new Date(results[0].end_date).getTime() - Date.now()
          // this.endTime = Date.now() - new Date(results[0].end_date).getTime()
        }
      })
    }
  },
  components: {
    Facebook,
    Twitter,
    BrowseTrims
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

.weekly-deal-container {
  width: 100%;
  background-color: #ffffff;
  margin: 0px auto;
}

.weekly-deal-head {
  width: 100%;
  height: 60px;
  margin-top: 20px;
}
.weekly-deal-head p {
  font-size: 36px;
  font-weight: bold;
}
.weekly-deal-timer {
  width: 100%;
  height: 60px;
  margin: 0px auto;
  margin-top: 20px;
  padding: 10px;
}
.weekly-deal-timer-text {
  font-size: 28px;
  color: rgba(0,0,0,0.7);
}
.weekly-deal-timer-num {
  padding: 3px;
  width: 60px;
  border-radius: 5px;
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
  width: 100%;
  height: 50px;
  margin-bottom: 20px;
  padding: 0px 50px;
  font-size: 16px;
  text-align: right;
}
.social-icon{
  display: inline-block;
  cursor: pointer;
}
.weekly-deal-content-wrapper{
  width: 100%;
  border-top: 1px solid rgba(0,0,0,0.1);
}

</style>
