<template>
<div class="model-container">
    <div class="model-box">
      <div v-if="largeIcon">
        <row v-for="(i, index) in iconIter()" :key="index" type="flex" :gutter="gutter" align="middle" style="margin-bottom: 20px;">
          <i-col v-for="(j, index) in iconCols" :key="index" span="6">
            <card :bordered="false" style="width:265px" v-if="(i * 4 + j) < carModelList.length">
              <div style="text-align:center"  @click="selectItem(carModelList[i * 4 + j])">
                <img :src="carModelList[i * 4 + j].src" style="width: 200px; object-fit: scale-down" @error="imgUrlAlt">
                <p style="font-size: 18px;">{{carModelList[i * 4 + j].make}} {{carModelList[i * 4 + j].model}}</p>
              </div>
            </card>
          </i-col>
        </row>
      </div>
      <div v-else class="model-box-small">
        <row v-for="(i, index) in iconIter()" :key="index" justify="center" :gutter="gutter">
          <i-col v-for="(j, index) in iconCols" :key="index" span="6" style="height: 95px">
            <card :bordered="false" style="width:235px; height: 92px; padding: 0px;" v-if="(i * 4 + j) < carModelList.length">
              <div style="width: 215px;" @click="selectItem(carModelList[i * 4 + j])">
                <span>
                    <div style="width: 90px; float: left;">
                    <img :src="carModelList[i * 4 + j].src" style="width: 90px; height: 60px; object-fit: scale-down"  @error="imgUrlAlt"/>
                    </div>
                </span>
                <span style="font-size: 12px;">
                    <div style="width: 125px; float: left; display: table; height: 60px;">
                    <div style="display: table-cell; vertical-align: middle; text-align: center;">
                        <strong>{{carModelList[i * 4 + j].make.toUpperCase()}} {{carModelList[i * 4 + j].model.toUpperCase()}}</strong>
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
  name: 'ModelList',
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
    carModelList: {
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
      var vals = []
      for (var i = 0; 4 * i < this.carModelList.length; i++) {
        vals.push(i)
      }
      // console.log(this.carModelList)
      return vals
    },
    selectItem (item) {
      // console.log(item)
      this.$router.push({
        path: `${this.$route.path}/${item.model}`
      })
    },
    imgUrlAlt (event) {
      event.target.src = '/static/img/logo/bliss-motors-logo.png'
    }
  }
}
</script>

<style scoped>
.model-container {
    width: 100%;
    background-color: #ffffff;
    /* font-family: "soleil",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"; */
}
.model-box {
  width: 100%;
  margin: 20px 0px 50px 0px;
  text-align: center;
}

.model-box-small {
  width: 100%;
  margin: 0px auto;
  margin-top: 20px;
  text-align: center;
}

</style>
