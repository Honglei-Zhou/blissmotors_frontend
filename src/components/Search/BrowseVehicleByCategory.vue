<template>
  <div class="model-container">
    <div class="model-head">
      <div class="title">Find {{paginationData.page.totalCount}} Items</div>
      <div class="filter-button"><i-button @click="showFilter = !showFilter">Filter Items</i-button></div>
        <div class="content-wrapper" v-show="showFilter">
    <div class="content-row">
      <div class="content-left">
        <div class="filter-title">
            Monthly Payment ($)
        </div>

        <div class="detail">
          <slider
            v-model="monthlyPayment.value"
            :step="100"
            range
            :min="100"
            :max="1500"
            show-stops
          ></slider>
          <div class="detail-info-wrapper">
          <div class="detail-info-left">
            <i-input
              v-model="monthlyPayment.value[0]"
              placeholder="Minimum price"
            >
              <span slot="prepend">Minimum</span>
            </i-input>
          </div>
          <div class="detail-info-right">
            <i-input
              v-model="monthlyPayment.value[1]"
              placeholder="Maximum price"
            >
              <span slot="prepend">Maximum</span>
            </i-input>
          </div>
          </div>
        </div>

      </div>

      <div class="content-right">
          <div class="filter-title">
            MSRP ($)
        </div>

        <div class="detail">
          <slider
            v-model="msrp.value"
            :step="5000"
            range
            :min="10000"
            :max="150000"
            show-stops
          ></slider>
          <div class="detail-info-wrapper">
          <div class="detail-info-left">
            <i-input
              v-model="msrp.value[0]"
              placeholder="Minimum price"
            >
              <span slot="prepend">Minimum</span>
            </i-input>
          </div>
          <div class="detail-info-right">
            <i-input
              v-model="msrp.value[1]"
              placeholder="Maximum price"
            >
              <span slot="prepend">Maximum</span>
            </i-input>
          </div>
          </div>
        </div>
      </div>

    </div>

        <div class="filter-button"><i-button @click="filterCar">Apply</i-button></div>
        </div>
    </div>

    <div class="model-box">
      <div v-if="largeIcon">
        <row
          v-for="(i, index) in iconIter"
          :key="index"
          type="flex"
          :gutter="gutter"
          align="middle"
          style="margin-bottom: 20px;"
        >
          <i-col
            v-for="(j, index) in iconCols"
            :key="index"
            span="6"
          >
            <card
              :bordered="false"
              style="width:265px"
              v-if="(i * 4 + j) < paginationData.carList.length"
            >
              <div
                style="text-align:center"
                @click="selectItem(paginationData.carList[i * 4 + j])"
              >
                <img
                  :src="paginationData.carList[i * 4 + j].src"
                  style="width: 200px; object-fit: scale-down"
                  @error="imgUrlAlt"
                >
                <p style="font-size: 18px;">{{paginationData.carList[i * 4 + j].make}} {{paginationData.carList[i * 4 + j].model}}</p>
              </div>
            </card>
          </i-col>
        </row>
      </div>
      <div
        v-else
        class="model-box-small"
      >
        <row
          v-for="(i, index) in iconIter"
          :key="index"
          justify="center"
          :gutter="gutter"
        >
          <i-col
            v-for="(j, index) in iconCols"
            :key="index"
            span="6"
            style="height: 95px"
          >
            <card
              :bordered="false"
              style="width:235px; height: 92px; padding: 0px;"
              v-if="(i * 4 + j) < paginationData.carList.length"
            >
              <div
                style="width: 215px;"
                @click="selectItem(paginationData.carList[i * 4 + j])"
              >
                <span>
                  <div style="width: 90px; float: left;">
                    <img
                      :src="paginationData.carList[i * 4 + j].src"
                      style="width: 90px; height: 60px; object-fit: scale-down"
                      @error="imgUrlAlt"
                    />
                  </div>
                </span>
                <span style="font-size: 12px;">
                  <div style="width: 125px; float: left; display: table; height: 60px;">
                    <div style="display: table-cell; vertical-align: middle; text-align: center;">
                      <strong>{{paginationData.carList[i * 4 + j].make.toUpperCase()}} {{paginationData.carList[i * 4 + j].model.toUpperCase()}}</strong>
                    </div>
                  </div>
                </span>
              </div>
            </card>
          </i-col>
        </row>
      </div>
    </div>

    <div class="pagination">
      <page
        :current="paginationData.page.pageCurrent"
        :total="paginationData.page.totalCount"
        :page-size="paginationData.page.pageSize"
        :page-size-opts="paginationData.page.pageSizeOptions"
        show-sizer
        @on-change="nextPage"
        @on-page-size-change="reloadPage"
      />
      <i-button
        type="primary"
        v-show="!largeIcon"
        @click="largeIcon = true"
      >Show Large Icon</i-button>
      <i-button
        type="primary"
        v-show="largeIcon"
        @click="largeIcon = false"
      >Show Small Icon</i-button>
    </div>
  </div>
</template>

<script>
import { carService } from '@/api/carService'

export default {
  name: 'BrowseVehicleByCategory',
  data () {
    return {
      gutter: 23,
      showFilter: false,
      monthlyPayment: {
        value: [0, 1500]
      },
      msrp: {
        value: [10000, 150000]
      },
      iconColsCount: 4,
      iconCols: [0, 1, 2, 3],
      largeIcon: true,
      paginationData: {
        carList: [],
        page: {
          pageSizeOptions: [16, 32, 64],
          pageSize: 16,
          pageCount: 1,
          pageCurrent: 1,
          totalCount: 0,
          nextUrl: ''
        }
      }
    }
  },
  created () {
    this._getCarCategory()
  },
  computed: {
    iconIter () {
      var vals = []
      for (var i = 0; this.iconColsCount * i < this.paginationData.carList.length; i++) {
        vals.push(i)
      }
      // console.log(this.carList)
      return vals
    }
  },
  methods: {
    imgUrlAlt (event) {
      event.target.src = '/static/img/logo/bliss-motors-logo.png'
    },
    selectItem (item) {
      // console.log(item)
      this.$router.push({
        path: `/research/category/${this.$route.params.category}/${item.make}/${item.model}`
      })
    },
    reloadPage (pagesize) {
      this.paginationData.page.pageSize = pagesize
      this.paginationData.page.pageCurrent = 1
      this._getCarCategory()
    },
    nextPage (curpage) {
      this.paginationData.page.pageCurrent = curpage
      this._getCarCategory()
    },
    _getCarCategory () {
      var category = this.$route.params.category
      var current = this.paginationData.page.pageCurrent
      var pageSize = this.paginationData.page.pageSize
      var msrpMin = this.msrp.value[0]
      var msrpMax = this.msrp.value[1]
      var paymentMin = this.monthlyPayment.value[0]
      var paymentMax = this.monthlyPayment.value[1]
      carService.getCarByCategory(category, current, pageSize, msrpMin, msrpMax, paymentMin, paymentMax).then((resp) => {
        this.paginationData.page.totalCount = resp.count
        var results = resp['results']
        // console.log(resp)
        var carList = []
        var baseUrl = 'https://s3.us-east-2.amazonaws.com/blissmotorsimages/v1/cars/images/'
        for (var i = 0; i < results.length; i++) {
          // console.log(resp[i]['logo'])
          // console.log(results[i])
          if (results[i]['image'] === undefined || results[i]['image'] === null) {
            continue
          }
          var url = baseUrl + results[i]['image']
          carList.push({ make: results[i]['make'].toUpperCase(), src: url, model: results[i]['model'] })
        }
        this.paginationData.carList = carList
      })
    },
    filterCar () {
      // console.log('Filter')
      this._getCarCategory()
    }
  }
}
</script>

<style scoped>
.model-container {
  width: 100%;
  background-color: #ffffff;
  /* font-family: "soleil", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol"; */
}
.model-head {
  width: 100%;
  display: flex;
  flex-direction: column;;
  justify-content: center;
  align-items: center;
}
.title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
}
.button {
  width: 100px;
  height: 30px;
  margin-bottom: 20px;
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
.pagination {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.content-wrapper {
  width: 100%;
  margin-top: 40px;
  padding-top: 20px;
  border: 1px solid rgba(0,0,0,0.1);
}
.content-row {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
  position: relative;
  margin-bottom: 100px;
}

.content-left{
    width: 40%;
}

.title {
    height: 30px;
    line-height: 30px;
    font-size: 20px;
    font-weight: 700;
    text-align: left;
}

.filter-title{
    height: 30px;
    line-height: 30px;
    font-size: 16px;
    font-weight: 700;
    padding-left: 30px;
    text-align: left;
}
.detail{
    margin-top: 40px;
    padding: 0px 40px;
}
.detail-info-wrapper{
    margin-top: 30px;
    position: relative;
}
.detail-info-left{
    display: inline-block;
    width: 40%;
    position: absolute;
    left: 0px;
}
.detail-info-right{
    display: inline-block;
    width: 40%;
    position: absolute;
    right: 0px;
}
.content-right{
    width: 40%;
}
.detail-style{
    margin-top: 40px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
}
.check-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 15px 10px 10px 10px;
  margin-left: 10px;
  border-radius: 20px;
  border: 1px solid rgba(0,0,0,0.1);
  width: 120px;
}

.check-box:hover{
    box-shadow: 1px 1px rgba(0,0,0,0.1);
    color: #2b85e4;
}

.check-box-box{
    width: 100px;
    border-bottom: 1px solid rgba(0,0,0,0.1);
}
.check-box-img{
    width: 100px;
    height: 70px;

}

.check-box-img img {
     width: 100px;
    height: 70px;
    object-fit: scale-down;
}

.search-button{
    height: 100px;
}
.filter-button{
  height: 60px;
}
</style>
