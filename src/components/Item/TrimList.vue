<template>
    <div class="carlist-content">
      <div class="carlist-content-head">
        Available 2019 {{make.toUpperCase()}} {{model}} Trims
      </div>
      <div class="carlist-content-row" v-for="(i, index) in iconIter()"
          :key="index">
        <row
          type="flex"
          :gutter="gutter"
          align="top"
        >
          <i-col
            v-for="(j, index) in iconCols"
            :key="index"
            span="8"
          >
            <card
              :padding="0"
              @click="selectItem(carTrimList[i * 3 + j])"
              v-if="(i * 3 + j) < carTrimList.length"
              class="carlist-card"
            >
              <div slot="title">
                <img
                  :src="image"
                  style="width: 250px; height: 200px; object-fit: scale-down"
                  @error="imgUrlAlt"
                >
              </div>
              <div slot="title">
                <div class="carlist-car-head">{{carTrimList[i * 3 + j].carInfo.year}} {{carTrimList[i * 3 + j].carInfo.make}} {{carTrimList[i * 3 + j].carInfo.model}} {{carTrimList[i * 3 + j].carInfo.trim}}</div>
              </div>
              <div class="car-feature-wrapper">
                <div class="car-feature" v-for="(item, key, index) in carTrimList[i * 3 + j].carInfo" :key="index" :class="{'car-feature-last': index===Object.keys(carTrimList[i * 3 + j].carInfo).length-1}">
                    <span class="car-feature-title"> {{key.toUpperCase()}}: </span><span class="car-feature-detail">{{item}}</span>
                </div>
              </div>
              <div>
                <!-- Button -->
              </div>
            </card>

          </i-col>
        </row>
      </div>
    </div>
</template>

<script>

export default {
  name: 'TrimList',
  props: {
    largeIcon: {
      type: Boolean,
      default: true
    },
    iconCols: {
      type: Array,
      default: function () {
        return []
      }
    },
    carTrimList: {
      type: Array,
      default: function () {
        return []
      }
    },
    image: {
      type: String
    },
    make: {
      type: String,
      default: ''
    },
    model: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      gutter: 23,
      trimColumns: [
        {
          title: 'MSRP',
          key: 'msrp'
        },
        {
          title: 'Seats',
          key: 'seats'
        },
        {
          title: 'Engine',
          key: 'engine'
        },
        {
          title: 'Transmission',
          key: 'transmission'
        },
        {
          title: 'Drivetrain',
          key: 'drivetrain'
        }

      ]
      // carInfo: {
      //   src: 'static/img/index/car/car2.png',
      //   year: '2018',
      //   make: 'BMW',
      //   model: 'X5',
      //   trim: 'Basic',
      //   msrp: '50000',
      //   monthlyPayment: '300',
      //   driveOff: '0',
      //   otherInfo: 'Must be cosigned'
      // }
    }
  },
  methods: {
    iconIter () {
      var vals = []
      for (var i = 0; 3 * i < this.carTrimList.length; i++) {
        vals.push(i)
      }
      return vals
    },
    selectItem (item) {
      console.log(item)
      this.$router.push(`${this.$route.path}/${item.make}`)
    },
    imgUrlAlt (event) {
      event.target.src = '/static/img/logo/bliss-motors-logo.png'
    }
  }
}
</script>

<style scoped>
.carlist-content {
  width: 100%;
  margin: 20px 0px;
  /* background-color: #ffffff; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

}
.carlist-content-head {
  height: 50px;
  line-height: 50px;
  font-size: 24px;
  font-weight: 700;
}
.carlist-content-row {
  width: 980px;
  /* height: 650px; */
  margin: 20px 0px;
  padding: 20px 30px;
  /* display: flex;
  flex-direction: row;
  justify-content:space-evenly;
  align-items: center; */
}
.carlist-card{
  width: 300px;
}
.carlist-car-head{
  height: 50px;
  padding: 10px 20px 0px 20px;
  line-height: 20px;
  font-size: 14px;
  font-weight: 700;
  color: rgba(0,0,0,0.8);
  overflow-wrap:break-word;
}
.car-feature-wrapper {
  border: 0px;
}
.car-feature{
  /* height: 40px; */
  padding: 5px 25px;
  text-align: left;
  border-bottom: 1px solid rgba(0,0,0,0.1);
}

.car-feature-last{
  border-bottom: none;
}

.car-feature-title{
  line-height: 20px;
  font-size: 14px;
  font-weight: 500;
}
.car-feature-detail{
  line-height: 20px;
  font-size: 14px;
}
</style>
