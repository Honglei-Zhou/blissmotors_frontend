<template>
<div class="top-container">
    <div class="top-box">

      <!--Bug: If carTop length can not be divided by 4 -->
      <div v-if="largeIcon">
        <row v-for="(i, index) in iconIter()" :key="index" type="flex" gutter=23 align="middle">
          <i-col v-for="(j, index) in iconCols" :key="index" span="6">
            <card :bordered="false" style="width:265px">
              <div style="text-align:center">
                <img :src="carTop[i * 4 + j].src" style="width: 200px; object-fit: scale-down">
                <p style="font-size: 18px;">{{carTop[i * 4 + j].make}} {{carTop[i * 4 + j].model}}</p>
              </div>
            </card>
          </i-col>
        </row>
      </div>
      <div v-else class="top-box-small">
        <row v-for="(i, index) in iconIter()" :key="index" justify="center" gutter=23>
          <i-col v-for="(j, index) in iconCols" :key="index" span="6">
            <card :bordered="false" style="width:235px; height: 92px; padding: 0px;">
              <div style="width: 215px;">
                <span>
                    <div style="width: 90px; float: left;">
                    <img :src="carTop[i * 4 + j].src" style="width: 90px; height: 60px; object-fit: scale-down"/>
                    </div>
                </span>
                <span style="font-size: 12px;">
                    <div style="width: 125px; float: left; display: table; height: 60px;">

                    <div style="display: table-cell; vertical-align: middle; text-align: left;">
                        {{carTop[i * 4 + j].make}} {{carTop[i * 4 + j].model}}
                    </div>
                    </div>
                </span>
              </div>
            </card>
          </i-col>
        </row>
      </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'MakeList',
  data () {
    return {
      largeIcon: false,
      iconCols: [0, 1, 2, 3],
      carTop: [
        {
          make: 'Audi',
          model: 'Q3',
          type: 'SUV',
          src: '/static/img/index/car/car2.png'
        },
        {
          make: 'Acura',
          model: 'Q3',
          type: 'SUV',
          src: '/static/img/index/car/car2.png'
        },
        {
          make: 'Alfa Romeo',
          model: 'Guilia aaaaaaaaaaaaaaaaa',
          type: 'SUV',
          src: '/static/img/index/car/car2.png'
        },
        {
          make: 'Toyota',
          model: 'Q3',
          type: 'SUV',
          src: '/static/img/index/car/car2.png'
        }
      ]
    }
  },
  methods: {
    iconIter () {
      var vals = []
      for (var i = 0; i < this.carTop.length; i += 4) {
        vals.push(i)
      }
      console.log(vals)
      return vals
    }
  }
}
</script>

<style scoped>

.top-container {
    width: 100%;
    min-width: 1140px;
    min-height: 550px;
    background-color: #ffffff;
}
.top-box {
  width: 1140px;
  margin: 0px auto;
  margin-top: 20px;
  text-align: center;
}

.top-box-small {
  width: 980px;
  margin: 0px auto;
  margin-top: 20px;
  text-align: center;
}

</style>
