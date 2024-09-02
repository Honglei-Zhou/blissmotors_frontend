<template>
  <!--
    <div class="sv-container">
        <div class="sv-content">
 -->
  <div class="row">
      <div class="title" @click="show = ! show">
        Browse By Make
      </div>
      <transition name="make">
      <MakeList
        :carMakeList="carMakeList"
        :iconCols="makeCols"
        :largeIcon="largeIcon"
        v-show = "show && carMakeList.length>0"
      ></MakeList>
      </transition>

  </div>
</template>

<script>

import MakeList from '@/components/Item/MakeList'
import { carService } from '@/api/carService'
// import velocity from 'velocity-animate'

export default {
  name: 'SearchVehicle',
  components: {
    MakeList
  },
  data () {
    return {
      show: true,
      bodyHeight: 0,
      largeIcon: false,
      iconCols: [0, 1, 2, 3],
      makeCols: [0, 1, 2, 3, 4, 5], /* To be optimized here */
      carMakeList: []
    }
  },
  created () {
    this._getCarMake()
  },
  methods: {
    _getCarMake () {
      carService.getCarMake().then((resp) => {
        var carList = []
        var baseUrl = 'https://s3.us-east-2.amazonaws.com/blissmotorsimages/v1/cars/logos/'
        for (var i = 0; i < resp.length; i++) {
          // console.log(resp[i]['logo'])
          var url = baseUrl + resp[i]['logo']
          carList.push({ make: resp[i]['name'], src: url })
        }
        this.carMakeList = carList
        // console.log(carList)
      })
    }
  }

}
</script>

<style scoped>
@import "../../common/css/base.css";

.title {
  width: 100%;
  height: 50px;
  margin-top: 20px;
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
}
.make-enter-active, .make-leave-active {
    transition: all 1s ease;
    opacity: 1;
}
.make-enter, .make-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
</style>
