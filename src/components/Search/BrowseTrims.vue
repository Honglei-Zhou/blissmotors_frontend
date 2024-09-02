<template>
  <div class="row">
      <div class="leftcolumn">
      </div>
       <div class="maincolumn">
        <div class="car-details-wrapper">
          <CarItem :car="car" :images="carImages" :price="price" :showPrice="showPrice" :competitors="competitors" @contact="toggleContactForm"></CarItem>
        </div>
      </div>
      <div class="rightcolumn">
      </div>

      <div class="leftcolumn">
      </div>
       <div class="maincolumn">
        <div class="car-gallery-wrapper" v-show="carTrimList.length>0">

      <transition name="fade">
        <div class="contact-form-wrapper" v-show="showContactForm">
           <div class="contact-form-wrapper-button" @click.stop.prevent="toggleContactForm"><Icon type="ios-close" size="50"/></div>
          <NewInquiryForm
          radioValue='yes'
          initYear='2019'
          :initMake="make"
          :initModel="model"
          :titleOne="titleOne"
          :titleTwo="titleTwo"
          :key="formKey()"
          ></NewInquiryForm>
        </div>
      </transition>

          <div class="gallery-title">
          2019 {{make.toUpperCase()}} {{model}} Gallery
          </div>
          <transition name="expand">
            <div :class="{'gallery-container': !show && images.length >=3}" v-show="images.length>0">
              <img class="gallery-image" v-for="(image, i) in images" :key="i" :src="image" @click="onClick(i)"  @error="imgUrlAlt">
              <VueGallerySlideshow :images="images" :index="index" @close="index = null"></VueGallerySlideshow>
            </div>
          </transition>

          <div class="gallery-container-expand" v-show="images.length>0">
              <i-button @click="show = !show" v-if="!show">Load More</i-button>
              <i-button @click="show = !show" v-else>Show less</i-button>
          </div>
        </div>

        <div class="car-gallery-wrapper" v-show="carInfoNotAvailable">
          <div class="gallery-title">
            Sorry, currently 2019 {{make.toUpperCase()}} {{model}} information is not available. Please contact sales for help.
          </div>
          <div class="gallery-container-expand">
            <i-button type="info" @click.stop.prevent="toggleContactForm">I need Help</i-button>
          </div>
          <transition name="fade">
        <div class="contact-form-wrapper" v-show="showContactForm">
          <div class="contact-form-wrapper-button" @click.stop.prevent="toggleContactForm"><Icon type="ios-close" size="50"/></div>
          <NewInquiryForm
          radioValue='yes'
          initYear='2019'
          :initMake="make"
          :initModel="model"
          :titleOne="titleOne"
          :titleTwo="titleTwo"
          :key="formKey()"
          @close="toggleContactForm"
          ></NewInquiryForm>
        </div>
      </transition>

        </div>
      </div>
      <div class="rightcolumn">
      </div>

      <TrimList
        :carTrimList="carTrimList"
        :iconCols="trimCols"
        :largeIcon="largeIcon"
        :image = "carImages[0]"
        :make = "make"
        :model = "model"
        v-show="carTrimList.length>0"
      ></TrimList>

  </div>
</template>

<script>

import TrimList from '@/components/Item/TrimList'
import CarItem from '@/components/Item/CarItem'
import { carService } from '@/api/carService'
import VueGallerySlideshow from 'vue-gallery-slideshow'
import NewInquiryForm from '@/components/Form/NewInquiryForm'

export default {
  name: 'BrowseTrims',
  components: {
    TrimList,
    CarItem,
    VueGallerySlideshow,
    NewInquiryForm
  },
  props: {
    makeProp: {
      type: String,
      default: ''
    },
    modelProp: {
      type: String,
      default: ''
    },
    trimProp: {
      type: String,
      default: ''
    },
    showPrice: {
      type: Boolean,
      default: false
    },
    weeklyDeal: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      index: null,
      largeIcon: true,
      show: false,
      carInfoNotAvailable: false,
      trimCols: [0, 1, 2],
      carTrimList: [],
      titleOne: 'Get Monthly Lease Payment',
      titleTwo: 'Our AI will help you to locate the best price on this vehicle from hundreds of dealers around the country. Once you found what you need, we will delivery the vehicle to you. No more hassle, no more negotiation, our AI takes care all of them. We need some information from you:',
      carImages: [
        '/static/img/logo/bliss-motors-logo.png',
        '/static/img/logo/bliss-motors-logo.png',
        '/static/img/logo/bliss-motors-logo.png'
      ],
      monthlyPayment: '',
      showContactForm: false,
      competitors: [],
      deal: null
    }
  },
  created () {
    console.log(this.trimProp)
    this._getCarTrim()
    this._getCarImage()
    this._getCarPrice()
    this._getCar()
    this._getWeeklyDeal()
  },
  computed: {
    car () {
      if (this.weeklyDeal) {
        return this.deal
      } else {
        if (this.carTrimList.length > 0) {
          return this.carTrimList[0].carInfo
        } else {
          return null
        }
      }
    },
    images () {
      return this.carImages
    },
    price () {
      return this.monthlyPayment
    },
    make () {
      if (this.makeProp !== '') {
        return this.makeProp
      } else {
        return this.$route.params.make
      }
    },
    model () {
      if (this.modelProp !== '') {
        return this.modelProp
      } else {
        return this.$route.params.model
      }
    }
  },
  methods: {
    formKey () {
      var key = Date.now()
      // console.log(key)
      return key
    },
    toggleContactForm () {
      this.showContactForm = !this.showContactForm
      this.$forceUpdate()
    },
    onClick (index) {
      this.index = index
      // console.log(index)
    },
    imgUrlAlt (event) {
      event.target.src = '/static/img/logo/bliss-motors-logo.png'
    },
    _getWeeklyDeal () {
      console.log(this.trimProp)
      carService.getSpecificCarTrim(this.makeProp, this.modelProp, this.trimProp, 2019).then((resp) => {
        var results = resp['results']
        // console.log(results.length)
        console.log(results)
        if (results.length === 0) {
          return null
        }

        var i = 1
        var carInfo = {
          year: results[i].year,
          make: results[i].make.toUpperCase(),
          model: results[i].model,
          trim: results[i].trim,
          msrp: results[i].msrp,
          seats: results[i].seats,
          engine: results[i].engine,
          transmission: results[i].transmission,
          drivetrain: results[i].drivetrain,
          feature: results[i].engine + ' | ' + results[i].transmission + ' | ' + results[i].drivetrain
        }

        this.deal = carInfo
      })
    },
    _getCarTrim () {
      // var make = this.$route.params.make
      // var model = this.$route.params.model
      carService.getCarTrim(this.make, this.model, 2019).then((resp) => {
        // console.log(resp)
        var results = resp['results']
        var carList = []
        for (var i = 0; i < results.length; i++) {
          var carInfo = {
            year: results[i].year,
            make: results[i].make.toUpperCase(),
            model: results[i].model,
            trim: results[i].trim,
            msrp: results[i].msrp,
            seats: results[i].seats,
            engine: results[i].engine,
            transmission: results[i].transmission,
            drivetrain: results[i].drivetrain,
            feature: results[i].engine + ' | ' + results[i].transmission + ' | ' + results[i].drivetrain
          }
          carList.push({src: '/static/img/index/car/car2.png', carInfo: carInfo})
        }
        this.carTrimList = carList
        if (this.carTrimList.length === 0) {
          this.carInfoNotAvailable = true
        }
      })
    },
    _getCarImage () {
      // var make = this.$route.params.make
      // var model = this.$route.params.model
      carService.getCarImage(this.make, this.model, 2019).then((resp) => {
        var results = resp['results']
        // console.log(results)
        var images = []
        var baseUrl = 'https://s3.us-east-2.amazonaws.com/blissmotorsimages/v1/cars/images/'
        for (var i = 0; i < results.length; i++) {
          images.push(baseUrl + results[i]['path_value'])
        }
        if (images.length > 0) {
          this.carImages = images
        }
      })
    },
    _getCarPrice () {
      // var make = this.$route.params.make
      // var model = this.$route.params.model
      if (this.showPrice) {
        carService.getWeeklyDeal().then((resp) => {
          var results = resp['results']
          if (results.length > 0) {
            this.monthlyPayment = String(results[0].monthly_payment)
          }
        })
      }
    },
    _getCar () {
      carService.getCarByMakeModelYear(this.make, this.model, 2019).then((resp) => {
        var results = resp['results']
        // console.log(results)
        for (var i = 0; i < results.length; i++) {
          var arr = results[i].competitors.split('|')
          for (var j = 0; j < arr.length; j++) {
            if (arr[j] !== '') {
              var arrMakeModel = arr[j].split(' ')
              var make = arrMakeModel[0]
              var model = arr[j].substring(make.length + 1)
              this.competitors.push({
                make: make,
                model: model
              })
            }
          }
        }
      })
    }
  }

}
</script>

<style scoped>
@import "../../common/css/base.css";

.car-details-wrapper{
  width: 100%;
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

}
.car-gallery-wrapper{
  width: 100%;
  background-color: #f8f8f9;
  margin-top: 50px;
}
.gallery-title {
  width: 100%;
  height: 50px;
  margin-top: 20px;
  font-size: 24px;
  line-height: 50px;
  font-weight: 700;
  /* border-top: 1px solid rgba(0,0,0,0.1); */
}

.expand-enter-active, .expand-leave-active {
  transition: all 1s ease;
  opacity: 1;
}

.expand-enter, .expand-leave-to {
  opacity: 0;
}

.gallery-container{
  height: 550px;
  overflow: hidden;
}
.gallery-container-expand{
  margin-top: 30px;
  margin-bottom: 20px;
}

.gallery-image{
  width: 300px;
  height: 260px;
  cursor: pointer;
  margin: 10px;
  background-color: white;
  background-size: contain;
  border-radius: 3px;
  object-fit: scale-down;
}
/* .image {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border: 1px solid #ebebeb;
    margin: 5px;
} */
.fade-enter-active, .fade-leave-active {
  transition: all 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.contact-form-wrapper{
  width: 100%;
  /* height: 700px; */
  padding-top: 30px;
  padding-bottom: 30px;
  position: relative;
  z-index: 30;
  background-color: #515a6e;
}
.contact-form-wrapper-button{
  position: absolute;
  right: 4px;
  top: 4px;
  width: 60px;
  height: 60px;
  line-height: 60px;
  font-size: 50px;
  font-weight: 700;
  color: white;
  cursor: pointer;
}
.title {
  width: 100%;
  height: 50px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 10px;
  font-size: 20px;
  font-weight: bold;
  /* font-family: Verdana, Geneva, Tahoma, sans-serif; */
  text-align: left;
}
.browsetitle {
  width: 100%;
  height: 50px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 10px;
  font-size: 20px;
  font-weight: bold;
  /* font-family: Verdana, Geneva, Tahoma, sans-serif; */
  text-align: center;
}
</style>
