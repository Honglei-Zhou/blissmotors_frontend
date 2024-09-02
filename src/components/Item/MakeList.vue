<template>
<div class="ml-container">
    <div class="ml-box">
      <!--Bug: If carMake length can not be divided by 4 -->
      <div v-if="largeIcon">
        <row v-for="(i, index) in iconIter()" :key="index" type="flex" :gutter="gutter" align="middle">
          <i-col v-for="(j, index) in iconCols" :key="index" span="6">
            <card :bordered="false" style="width:265px">
              <div style="text-align:center" @click="selectItem(carMakeList[i * 4 + j])">
                <img :src="carMakeList[i * 4 + j].src" style="width: 200px; object-fit: scale-down">
                <p style="font-size: 18px;">{{carMakeList[i * 4 + j].make}}</p>
              </div>
            </card>
          </i-col>
        </row>
      </div>
      <div v-else class="ml-box-small">
        <row v-for="(i, index) in iconIter()" :key="index" justify="space-between" align="middle" :gutter="gutter">
          <i-col v-for="(j, index) in iconCols" :key="index" span="4" style="height: 115px">
            <card v-if="i * 6 + j < carMakeList.length" :bordered="false" style="width:100%; align-items:center; height: 110px;" >
              <div style="width: 100%; align-items:center;" @click="selectItem(carMakeList[i * 6 + j])">
                <span>
                    <div style="width: 100%">
                    <img :src="carMakeList[i * 6 + j].src" style="width: 100px; height: 60px; object-fit: scale-down"/>
                    </div>
                </span>
                <span style="font-size: 12px;">
                    <div style="width: 100%; display: table; height: 30px;">

                    <div style="display: table-cell; vertical-align: middle; text-align: center;">
                        <strong>{{carMakeList[i * 6 + j].make.toUpperCase()}}</strong>
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
    carMakeList: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data () {
    return {
      gutter: 23
    }
  },
  methods: {
    iconIter () {
      // console.log(this.carMakeList)
      var vals = []
      for (var i = 0; 6 * i < this.carMakeList.length; i++) {
        vals.push(i)
      }
      // console.log(vals)
      return vals
    },
    selectItem (item) {
      // console.log(item)
      this.$router.push(`${this.$route.path}/${item.make}`)
    }
  }
}
</script>

<style scoped>

.ml-container {
    width: 100%;
    background-color: #ffffff;
    /* font-family: "soleil",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"; */
}
.ml-box {
  width: 100%;
  margin: 0px auto;
  margin-top: 20px;
  text-align: center;
}

.ml-box-small {
  width: 100%;
  margin: auto;
  margin-top: 20px;
  text-align: center;
}

</style>
