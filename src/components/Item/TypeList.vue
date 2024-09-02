<template>
<div class="type-container">
    <div class="type-box">

      <!--Bug: If carType length can not be divided by 4 -->
      <div v-if="largeIcon">
        <row v-for="(i, index) in iconIter()" :key="index" type="flex" :gutter="gutter" align="middle" class="type-row">
          <i-col v-for="(j, index) in iconCols" :key="index" span="6">
            <card :bordered="false" style="width:265px;" v-if="i * 4 + j < carType.length">
              <div style="text-align:center"  @click="selectItem(carType[i * 4 + j])">
                <img :src="carType[i * 4 + j].image" style="width: 200px; object-fit: scale-down">
                <p style="font-size: 18px;">{{carType[i * 4 + j].label}}</p>
              </div>
            </card>
          </i-col>
        </row>
      </div>
      <!-- <div v-else class="type-box-small">
        <row v-for="(i, index) in iconIter()" :key="index" justify="center" :gutter="gutter">
          <i-col v-for="(j, index) in iconCols" :key="index" span="6">
            <card :bordered="false" style="width:235px; height: 92px; padding: 0px;">
              <div style="width: 215px;">
                <span>
                    <div style="width: 90px; float: left;">
                    <img :src="carType[i * 4 + j].src" style="width: 90px; height: 60px; object-fit: scale-down"/>
                    </div>
                </span>
                <span style="font-size: 12px;">
                    <div style="width: 125px; float: left; display: table; height: 60px;">

                    <div style="display: table-cell; vertical-align: middle; text-align: left;">
                        {{CarType[i * 4 + j].type}}
                    </div>
                    </div>
                </span>
              </div>
            </card>
          </i-col>
        </row>
      </div> -->
    </div>
</div>
</template>

<script>
export default {
  name: 'TypeList',
  data () {
    return {
      gutter: 23,
      largeIcon: true,
      iconCols: [0, 1, 2, 3],
      carType: [
        {
          value: false,
          label: 'Convertible',
          image: '/static/img/index/car/types/CONVERT.png'
        },
        {
          value: false,
          label: 'SUV',
          image: '/static/img/index/car/types/SUVCROSS.png'
        },
        // {
        //   value: false,
        //   label: 'Pickup',
        //   image: 'static/img/index/car/types/TRUCKS.png'
        // },
        {
          value: false,
          label: 'Sedan',
          image: '/static/img/index/car/types/SEDAN.png'
        },
        {
          value: false,
          label: 'Coupe',
          image: '/static/img/index/car/types/COUPE.png'
        },
        {
          value: false,
          label: 'Hatchback',
          image: '/static/img/index/car/types/HATCH.png'
        },
        {
          value: false,
          label: 'Minivan',
          image: '/static/img/index/car/types/VANMV.png'
        },
        {
          value: false,
          label: 'Wagon',
          image: '/static/img/index/car/types/WAGON.png'
        }
      ]

    }
  },
  methods: {
    iconIter () {
      var vals = []
      for (var i = 0; i * 4 < this.carType.length; i++) {
        vals.push(i)
      }
      // console.log(vals)
      return vals
    },
    selectItem (item) {
      console.log(item)
      this.$router.push(`${this.$route.path}/style/${item.label}`)
    }
  }
}
</script>

<style scoped>

.type-container {
    width: 100%;
    background-color: #ffffff;
}
.type-box {
  width: 100%;
  margin: 0px auto;
  margin-top: 20px;
  text-align: center;
}
.type-row{
  margin-bottom: 10px;
}
.type-box-small {
  width: 100%;
  margin: 0px auto;
  margin-top: 20px;
  text-align: center;
}

</style>
