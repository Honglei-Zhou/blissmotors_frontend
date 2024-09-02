<template>
    <div class="row">
      <div class="browsetitle">
        Find {{this.paginationData.page.totalCount}} Items
      </div>
        <ModelList :carModelList="paginationData.carList"
        :largeIcon="largeIcon"
        :iconCols="iconCols"
        v-show="paginationData.carList.length>0"
        ></ModelList>

      <div class="leftcolumn">
      </div>

      <div class="maincolumn">
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
      <div class="rightcolumn">
      </div>
    </div>
</template>

<script>

import ModelList from '@/components/Item/ModelList'
import {carService} from '@/api/carService'

export default {
  name: 'SearchVehicle',
  components: {
    ModelList
  },
  data () {
    return {
      largeIcon: true,
      iconCols: [0, 1, 2, 3],
      // carModelList: [],
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
    // console.log(this.$route.params)
    this._getCarModel()
  },
  methods: {
    reloadPage (pagesize) {
      this.paginationData.page.pageSize = pagesize
      this.paginationData.page.pageCurrent = 1
      this._getCarModel()
    },
    nextPage (curpage) {
      this.paginationData.page.pageCurrent = curpage
      this._getCarModel()
    },
    _getCarModel () {
      var make = this.$route.params.make
      var current = this.paginationData.page.pageCurrent
      var pageSize = this.paginationData.page.pageSize
      carService.getCarModel(make, current, pageSize).then((resp) => {
        this.paginationData.page.totalCount = resp.count
        var results = resp['results']
        var carList = []
        var baseUrl = 'https://s3.us-east-2.amazonaws.com/blissmotorsimages/v1/cars/images/'
        for (var i = 0; i < results.length; i++) {
          // console.log(results[i])
          if (results[i]['logo'] === undefined || results[i]['logo'] === null) {
            continue
          }
          var url = baseUrl + results[i]['logo']
          carList.push({make: results[i]['make'].toUpperCase(), src: url, model: results[i]['name']})
        }
        this.paginationData.carList = carList
        // console.log(carList)
      })
    }
  }

}
</script>

<style scoped>
@import "../../common/css/base.css";

  .browsetitle {
    width: 100%;
    height: 50px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 10px;
    font-size: 20px;
    font-weight: bold;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    text-align: center;
  }
  .pagination {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

</style>
