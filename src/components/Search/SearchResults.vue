<template>
<div class="search-results">
    <div class="results-wrapper">
        <ResultsList title="Featured Results"
            :resultItems = "searchItems"
        ></ResultsList>
    </div>

    <div class="results-wrapper">
        <ResultsList title="Your Search Results"
            :resultItems = "searchItems"
        ></ResultsList>
    </div>
    <!-- <Pagination></Pagination> -->
    <div class="pagination">
      <page :total="100" show-sizer />
    </div>
</div>

</template>

<script>
import ResultsList from '@/components/Card/ResultsList'
import {carService} from '@/api/carService'
import Pagination from '@/components/Util/Pagination'

export default {
  name: 'SearchResult',

  data () {
    return {
      searchItems: [
        {
          image: '/static/img/index/car/test3.jpg',
          year: 2019,
          make: 'Dodge',
          model: 'Grand Caravan',
          trim: 'SE',
          payment: 400,
          msrp: 15758,
          info: ['2 wheel drive-front', '6-Cylinder', '6-Speed Shiftable Automatic', '17 City / 25 Highway'],
          contact: {
            Phone: '312-500-8534',
            Email: 'bmsales@blissmotors.com',
            Address: '160 E Grand Ave',
            City: 'Chicago',
            State: 'IL',
            ZipCode: '60611'
          }
        },
        {
          image: '/static/img/index/car/test3.jpg',
          year: 2019,
          make: 'Dodge',
          model: 'Grand Caravan',
          trim: 'SE',
          payment: 400,
          msrp: 15758,
          info: ['2 wheel drive-front', '6-Cylinder', '6-Speed Shiftable Automatic', '17 City / 25 Highway'],
          contact: {
            Phone: '312-500-8534',
            Email: 'bmsales@blissmotors.com',
            Address: '160 E Grand Ave',
            City: 'Chicago',
            State: 'IL',
            ZipCode: '60611'
          }
        },
        {
          image: '/static/img/index/car/test3.jpg',
          year: 2019,
          make: 'Dodge',
          model: 'Grand Caravan',
          trim: 'SE',
          payment: 400,
          msrp: 15758,
          info: ['2 wheel drive-front', '6-Cylinder', '6-Speed Shiftable Automatic', '17 City / 25 Highway'],
          contact: {
            Phone: '312-500-8534',
            Email: 'bmsales@blissmotors.com',
            Address: '160 E Grand Ave',
            City: 'Chicago',
            State: 'IL',
            ZipCode: '60611'
          }
        },
        {
          image: '/static/img/index/car/test3.jpg',
          year: 2019,
          make: 'Dodge',
          model: 'Grand Caravan',
          trim: 'SE',
          payment: 400,
          msrp: 15758,
          info: ['2 wheel drive-front', '6-Cylinder', '6-Speed Shiftable Automatic', '17 City / 25 Highway'],
          contact: {
            Phone: '312-500-8534',
            Email: 'bmsales@blissmotors.com',
            Address: '160 E Grand Ave',
            City: 'Chicago',
            State: 'IL',
            ZipCode: '60611'
          }
        },
        {
          image: '/static/img/index/car/test3.jpg',
          year: 2019,
          make: 'Dodge',
          model: 'Grand Caravan',
          trim: 'SE',
          payment: 400,
          msrp: 15758,
          info: ['2 wheel drive-front', '6-Cylinder', '6-Speed Shiftable Automatic', '17 City / 25 Highway'],
          contact: {
            Phone: '312-500-8534',
            Email: 'bmsales@blissmotors.com',
            Address: '160 E Grand Ave',
            City: 'Chicago',
            State: 'IL',
            ZipCode: '60611'
          }
        },
        {
          image: '/static/img/index/car/test3.jpg',
          year: 2019,
          make: 'Dodge',
          model: 'Grand Caravan',
          trim: 'SE',
          payment: 400,
          msrp: 15758,
          info: ['2 wheel drive-front', '6-Cylinder', '6-Speed Shiftable Automatic', '17 City / 25 Highway'],
          contact: {
            Phone: '312-500-8534',
            Email: 'bmsales@blissmotors.com',
            Address: '160 E Grand Ave',
            City: 'Chicago',
            State: 'IL',
            ZipCode: '60611'
          }
        }
      ]
    }
  },
  created () {
    this._getCarDeal()
  },
  methods: {
    contact () {
      console.log('Contact')
    },
    _getCarDeal () {
      carService.getCarDeals(2)
    }
  },
  components: {
    ResultsList,
    Pagination
  }
}

</script>

<style lang="stylus" rel="/stylesheet/stylus">
.search-results
    width 100%
    overflow hidden
    .results-wrapper
        width 100%
    .pagination
        width 100%
        display flex
        flex-direction row
        justify-content center
        align-items center

</style>
