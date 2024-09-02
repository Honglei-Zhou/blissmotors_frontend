<template>
  <div class="row">
    <div class="leftcolumn">
    </div>
    <div class="maincolumn">
      <!-- <div class="carousel-wrapper">
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
      </div> -->
      <div class="research-header">
          <div class="research-header-title">
            The Easy Way to Get Your Next Vehicle
          </div>
          <div class="research-header-details">
When shopping for a new Sedan, Truck, Crossover or Convertible, Blisslease.com is your trusted resource for nearly every make and model available. We support you throughout the process with the most transparent lease prices available and deliver to you on your schedule.
          </div>
      </div>
    </div>
    <div class="rightcolumn">
    </div>

    <div class="leftcolumn">
    </div>

    <div class="maincolumn">

      <div class="content-wrapper">

        <div id='perfectfit'></div>
      </div>
    </div>

    <div class="rightcolumn">
    </div>
    <remote-js src="http://pv.sohu.com/cityjson?ie=utf-8"></remote-js>
  </div>
</template>

<script>
export default {
  name: 'Research',
  data () {
    return {
      hash: ''
      // sliderInfo: [
      //   {
      //     img: 'static/img/index/car/test3.jpg',
      //     url: 'https://www.blissmotors.com'
      //   },
      //   {
      //     img: 'static/img/index/car/test3.jpg',
      //     url: 'https://www.blissmotors.com'
      //   },
      //   {
      //     img: 'static/img/index/car/test3.jpg',
      //     url: 'https://www.blissmotors.com'
      //   },
      //   {
      //     img: 'static/img/index/car/test3.jpg',
      //     url: 'https://www.blissmotors.com'
      //   }
      // ],
      // setting: {
      //   autoplaySpeed: 5000
      // }
    }
  },
  mounted () {
    console.log('Loading')
    this.$nextTick(() => {
      setTimeout(() => this._initiCarPage(), 2000)
    })
  },
  methods: {
    _initiCarPage () {
      console.log('Loading')
      this._renderCarPage()
    },
    _renderCarPage () {
      // eslint-disable-next-line
      while (returnCitySN === undefined) {
        setTimeout(() => this._initiCarPage(), 1000)
      }

      // eslint-disable-next-line no-undef
      var ip = returnCitySN['cip']
      console.log('My public IP address is: ' + ip)
      var ts = Math.floor((new Date()).getTime() / 300)
      var crypto = require('crypto')
      var shasum = crypto.createHash('sha1')
      var ss = ts.toString() + ip.toString() + 'e5cdb44de1e79a73d8d514ab3169c969cdc8adb5'
      shasum.update(ss)
      this.hash = shasum.digest('hex')
      console.log(this.hash)

      var ret = window.CarSearch.init({
        token: '2cbed5815195d365c294f790d6bb6911',
        // required
        hash: this.hash,
        // required
        selector: '#perfectfit',
        // required, same ID used in the div above
        maxCompareCount: 4,
        included_body_styles: ['Sedan', 'Coupe', 'Convertible', 'Hatchback', 'Wagon_SUV', 'Pickup', 'Full-Size'],
        included_makes: [],
        splash: 'perfect_fit',
        result_grouping: 'make_model_body',
        conversion_button_text: 'Contact Us',
        conversion_title_text: 'Get Lease Quote',
        comparsion_logo: '{image_url}',
        perfectfit_view: '{view}',
        vehicle_ids: [],
        vehicles: [
          // {
          // 'year': '{model_year}',
          // 'make': '{vehicle_make}',
          // 'model': '{vehicle_model}',
          // 'trim': '{vehicle_trim}'
          // }
        ],
        allow_vehicle_change_during_compare: true,
        no_comparsion_vehicles_message: '{user_message}',
        builder_selection: {
          year: '{model_year}',
          make: '{vehicle_make}',
          model: '{vehicle_model}',
          body_type: '{vehicle_body_type}'
        }
      })
      console.log(ret)
    }
  },
  components: {
    'remote-js': {
      render (createElement) {
        return createElement('script', {attrs: { type: 'text/javascript', src: this.src }})
      },
      props: {
        src: { type: String, required: true }
      }
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
.page-head-wrapper{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 10px;
  background-image: url('../../../static/img/index/car/page_head_1.png');
  background-color: #808695;
  background-blend-mode: screen;
  background-repeat: no-repeat;
  background-size: cover;
}
.page-head{
 width: 100%;
}
.page-head-title{
  padding-top: 70px;
  padding-left: 30px;
  padding-right: 30px;
  height: 120px;
  font-size: 23px;
  /* color: #17233d; */
}
.page-head-intro {
  padding-top: 20px;
  padding-left: 30px;
  padding-right: 30px;
  height: 160px;
  font-size: 30px;
  font-weight: 600;
}

.page-head-detail{
  padding-top: 50px;
  padding-left: 30px;
  padding-right: 30px;
  height: 150px;
  font-size: 16px;
  font-style: normal;
  line-height: 20pt;
  color: #17233d;
}

.research-header{
  width: 100%;
  height: 150px;
  margin-top: 10px;
  padding: 10px;
  background-color: #17233d;
}
.research-header-title{
  height: 70px;
  line-height: 70px;
  font-size: 26px;
}
.research-header-details{
  height: 80px;
  padding: 0px 150px;
  line-height: 20px;
  font-size: 16px;
}
.content-wrapper{
  width: 100%;
  margin: 20px;
}
</style>
