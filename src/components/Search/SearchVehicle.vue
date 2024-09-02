<template>
  <div class="row">
<div class="leftcolumn">
    </div>
    <div class="maincolumn">
      <div class="carousel-wrapper">
        <carousel
        >
          <carousel-item
            v-for="(item, index) in sliderInfo"
            :key="index"
          >

              <img
                :src="item.img"
                style="width: 100%; object-fit: scale-down"
              />

          </carousel-item>
      </carousel>
      </div>
    </div>
    <div class="rightcolumn">
    </div>

      <!-- <div class="leftcolumn">
    </div>
    <div class="maincolumn">
      <div class="page-head-wrapper">
      <div class="page-head">
        <div class="page-head-intro">
          The Easy Way to Get Your Next Vehicle
        </div>
        <div class="page-head-detail">
          When shopping for a new Sedan, Truck, Crossover or Convertible, Blisslease.com is your trusted resource for nearly every make and model available. We support you throughout the process with the most transparent lease prices available and deliver to you on your schedule.
          </div>
      </div>
    </div>
    </div>
    <div class="rightcolumn">
    </div> -->

        <div class="leftcolumn">
      </div>
       <div class="maincolumn">
        <SearchElement></SearchElement>
      </div>
      <div class="rightcolumn">
      </div>

      <!-- Search Complex will be enabled later -->

      <!-- <div class="leftcolumn">
      </div>
       <div class="maincolumn">
         <div class="search-complex-wrapper">

          <div class="title" @click="showComplexSearch = !showComplexSearch">
           Show More Search Options
         </div>
          <transition name="expand">
              <SearchComplex v-show="showComplexSearch" @hide="showComplexSearch = !showComplexSearch"></SearchComplex>
          </transition>
         </div>

      </div>
      <div class="rightcolumn">
      </div> -->

       <div class="leftcolumn">
      </div>
       <div class="maincolumn">
         <div class="research-breadcrumb">
          <breadcrumb>
              <breadcrumb-item to="/">Home</breadcrumb-item>
              <breadcrumb-item to="/research">Research</breadcrumb-item>
              <breadcrumb-item :to="style" v-if="this.$route.params.style">{{this.$route.params.style}}</breadcrumb-item>
               <breadcrumb-item :to="category" v-if="this.$route.params.category">{{this.$route.params.category}}</breadcrumb-item>
              <breadcrumb-item :to="make" v-if="this.$route.params.make">{{this.$route.params.make}}</breadcrumb-item>
              <breadcrumb-item v-if="this.$route.params.model">{{this.$route.params.model}}</breadcrumb-item>
          </breadcrumb>
         </div>
      </div>
      <div class="rightcolumn">
      </div>

      <!-- <div class="leftcolumn">
    </div>

    <div class="mfaincolumn">

      <div class="content-wrapper" v-show="showBrowse">

       <BrowseStyles></BrowseStyles>
      </div>
    </div>

    <div class="rightcolumn">
    </div>

     <div class="leftcolumn">
    </div>

    <div class="maincolumn">

      <div class="content-wrapper" v-show="showBrowse">

       <BrowseMakes></BrowseMakes>
      </div>
    </div>

    <div class="rightcolumn">
    </div> -->

    <div class="leftcolumn">
    </div>

    <div class="maincolumn">

      <div class="content-wrapper">

        <transition mode="out-in">
          <router-view :key="$route.fullPath"></router-view>
        </transition>
      </div>
    </div>

    <div class="rightcolumn">
    </div>
  </div>
</template>

<script>
import SearchElement from '@/components/Search/SearchElement'
import SearchComplex from '@/components/Search/SearchComplex'
import BrowseStyles from '@/components/Search/BrowseStyles'
import BrowseMakes from '@/components/Search/BrowseMakes'

export default {
  name: 'SearchVehicle',
  components: {
    SearchElement,
    SearchComplex,
    BrowseStyles,
    BrowseMakes
  },
  computed: {
    make () {
      return `/research/${this.$route.params.make}`
    },
    style () {
      return `/research/style/${this.$route.params.style}`
    },
    category () {
      return `/research/category/${this.$route.params.category}`
    }
  },
  data () {
    return {
      showComplexSearch: false,
      bodyHeight: 0,
      showBrowse: true,
      sliderInfo: [
        {
          img: '/static/img/index/car/page_head_2.png',
          url: 'https://www.blisslease.com'
        }
      ],
      setting: {
        autoplaySpeed: 5000
      }
    }
  }
}
</script>

<style scoped>
@import "../../common/css/base.css";

.carousel-wrapper {
  width: 100%;
  margin-top: 10px;
  padding: 0 10px;
}
.page-head-wrapper{
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  background-image: url('../../../static/img/index/car/page_head_1.png');
  background-color: #808695;
  background-blend-mode: screen;
  background-repeat: no-repeat;
  background-size: cover;
}
.page-head{
 width: 100%;
}
.page-head-title{
  padding-top: 70px;
  padding-left: 30px;
  padding-right: 30px;
  height: 120px;
  font-size: 23px;
  /* color: #17233d; */
}
.page-head-intro {
  padding-top: 40px;
  padding-left: 30px;
  padding-right: 30px;
  height: 120px;
  font-size: 30px;
  font-weight: 600;
}

.page-head-detail{
  padding-top: 50px;
  padding-left: 200px;
  padding-right: 200px;
  height: 150px;
  font-size: 16px;
  font-style: normal;
  line-height: 20pt;
  color: #17233d;
}
.research-header{
  width: 100%;
  height: 160px;
  margin-top: 10px;
  padding: 10px;
  background-color: #17233d;
}
.research-header-title{
  height: 70px;
  line-height: 70px;
  font-size: 26px;
}
.research-header-details{
  height: 80px;
  padding: 0px 150px;
  line-height: 20px;
  font-size: 16px;
}

.research-breadcrumb-wrapper{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.research-breadcrumb{
  width: 100%;
  font-size: 16px;
  margin-top: 20px;
  margin-left: 40px;
  text-align: left;
}

.title {
  width: 100%;
  height: 50px;
  margin-top: 20px;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
}
.search-complex-wrapper{
  width: 100%;
  border-bottom: 1px solid rgba(0,0,0,0.1);
}
.expand-enter-active, .expand-leave-active {
    transition: all 1s ease;
}
.expand-enter, .expand-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
.content-wrapper{
  width: 100%;
  margin: 20px;
}
</style>
