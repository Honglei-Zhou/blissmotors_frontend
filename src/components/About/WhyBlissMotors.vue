<template>
  <div class="row">

    <!-- Carousel -->

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
          Why Bliss Motors
        </div>
        <div class="page-head-detail">
          <div>Bliss Motors is the world first AI-powered platform for automobiles buying and leasing serving across the United States.</div>
          <div style="padding-top: 50px;"> <i-button type="primary" @click="searchCar">Start Search</i-button></div>

          </div>
      </div>
    </div>
    </div>
    <div class="rightcolumn">
    </div> -->

    <!-- <div class="leftcolumn">
    </div>
    <div class="maincolumn">
      <div class="introsec-wrapper">
      <div
        class="introsec-item"
        v-for="(item, index) in introInfo"
        :key="index"
      >
        <div class="introsec-item-img">
          <img :src="item.img" />
        </div>
        <div>
          <div class="introsec-intro">
            <p>{{item.title}}</p>
          </div>
          <div class="introsec-item-info">
            <p>
              <span>{{item.intro}}</span>
            </p>
          </div>
        </div>
      </div>
      </div>
    </div> -->

    <!-- <div class="row" v-for="(item, index) in secInfo" :key="index">
          <div class="leftcolumn">
          </div>
          <div class="maincolumn">
            <ShowSection :item="item" ></ShowSection>
          </div>

          <div class="rightcolumn">
          </div>
    </div> -->

          <div class="leftcolumn">
          </div>
          <div class="maincolumn">
                <div class="titlesec">
        Gone are the days of people wasting time haggling with dealers only to end up paying too much for their leasing. Bliss Motors builds an platform to get you the best deal with just a few clicks.
    </div>
          </div>

          <div class="rightcolumn">
          </div>

    <div class="leftcolumn">
      </div>
       <div class="maincolumn">
         <div class="contactsec-wrapper">
          <div class="contactsec-item">
            <div class="contactsec-item-title">
              <p>POWERED BY AI</p>
            </div>
            <div class="contactsec-item-intro">
               <p>Bliss Motors is the world's first AI-powered platform for buying and leasing automobiles. We use proprietary technologies to help new car buyers secure the best deals without any hassle, saving your time and money.</p>
            </div>
        </div>
        <div class="contactsec-item">
           <div class="contactsec-item-title">
              <p>OUR MISSION</p>
            </div>
            <div class="contactsec-item-intro">
               <p>We are specialized in helping customers secure the best car leasing deals with less hassle. We will show you how to lease a car in the cheapest and easiest way.</p>
            </div>
        </div>

         </div>
      </div>
      <div class="rightcolumn">
      </div>

<!-- Section 2 -->
          <div class="leftcolumn">
          </div>
          <div class="maincolumn">
                <div class="titlesec">
                    Competitive Advantages
            </div>
          </div>

          <div class="rightcolumn">
          </div>

          <div class="leftcolumn">
    </div>
    <div class="maincolumn">
      <div class="introsec-wrapper">
      <div
        class="introsec-item"
        v-for="(item, index) in introInfo"
        :key="index"
      >
        <div class="introsec-item-img">
          <img :src="item.img" />
        </div>
        <div>
          <div class="introsec-intro">
            <p>{{item.title}}</p>
          </div>
          <div class="introsec-item-info">
            <p>
              <span>{{item.intro}}</span>
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
    <div class="rightcolumn">
      </div>

      <div class="leftcolumn">
      </div>
       <div class="maincolumn">
         <div class="contactsec-wrapper">
          <div class="contactsec-item">
            <NewInquiryForm></NewInquiryForm>

          </div>
          <div class="contactsec-item">
            <div class="contactsec-item-title">
              <p>Can't decide? Let our expert negotiators help.</p>
            </div>
            <div class="contactsec-item-title">
              <p>Looking to negotiate down the price of your dream car to a fixed rate?  We can help!</p>
            </div>
          </div>
          </div>
      </div>
      <div class="rightcolumn">
      </div>

  </div>

</template>

<script>
import NewInquiryForm from '@/components/Form/NewInquiryForm'

export default {
  name: 'WhyBlissMotors',
  data: function () {
    return {
      showComplexSearch: false,
      introInfo: [
        {
          img: '/static/img/index/car/icon-5.png',
          title: 'Pricing Optimization',
          intro: 'The application optimizes recommendations regarding urgency-based pricing.'
        },
        {
          img: '/static/img/index/car/icon-6.png',
          title: 'AI + Big Data + Small Machine Learning',
          intro: 'Bliss Motors performs analytics on inventory, price, and behavior data allowing prospective buyers to know which vehicles are selling at the best prices.'
        },
        {
          img: '/static/img/index/car/icon-7.png',
          title: 'Ease of Use',
          intro: 'From search by car or price, lease a car within 3 easy steps.'
        },
        {
          img: '/static/img/index/car/icon-8.png',
          title: 'Not just a Marketplace',
          intro: "It's more than just an automotive guide and marketplace."
        }
      ],
      sliderInfo: [
        {
          img: '/static/img/index/car/page_head_2.png',
          url: 'https://www.blissmotors.com'
        }
      ],
      setting: {
        autoplaySpeed: 5000
      }
    }
  },
  methods: {
    searchCar () {
      this.$router.push('/research')
    }
  },
  components: {
    NewInquiryForm
  }
}
</script>

<style scoped>
@import '../../common/css/base.css';

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
}
.introsec-wrapper{
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-top: 20px;
  border-top: 1px solid rgba(0,0,0,0.1);
}

.introsec-item {
  width: 25%;
  height: 370px;
}

.introsec-item-img {
  width: 115px;
  height: 115px;
  margin: 15px auto;
  overflow: hidden;
  background-color: #fff;
}
.introsec-item-img img {
  width: 90px;
  height: 90px;
  margin-left: 0px;
  margin-top: 10px;
  object-fit: scale-down;
}
.introsec-item-info {
  margin-top: 20px;
  padding-top: 5px;
  padding-left: 30px;
  padding-right: 30px;
  font-size: 15px;
  line-height: 20pt;
}
.introsec-item-info i:first-child {
  font-size: 14px;
}
.introsec-intro {
  margin-right: 5px;
  font-size: 23px;
  font-weight: bold;
}
.contactsec-wrapper{
  width: 100%;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid rgba(0,0,0,0.1);
}
.contactsec-item {
  width: 50%;
  /* height: 630px; */
  margin: 0px auto;
  float: right;
  text-align: left;
}
.contactsec-item-title {
  padding-top: 70px;
  padding-left: 30px;
  padding-right: 30px;
  height: 160px;
  font-size: 23px;
  background-color: #fff;
}
.contactsec-item-info {
  padding-top: 20px;
  padding-left: 30px;
  padding-right: 30px;
  height: 160px;
  font-size: 36px;
  font-weight: bold;
  /*font-family: Verdana, Geneva, Tahoma, sans-serif;*/
}
.contactsec-item-intro {
  padding-top: 30px;
  padding-left: 30px;
  padding-right: 30px;
  height: 250px;
  font-size: 16px;
  /*font-family: Verdana, Geneva, Tahoma, sans-serif;*/
  font-style: normal;
  line-height: 20pt;
}
.contactsec-item-form {
  width: 50%;
  height: 620px;
  margin: 0px auto;
}
.contactsec-item-img {
  width: 100%;
  height: 500px;
  margin: 0px auto;
  background-color: #fff;
}
.contactsec-item-img img {
  width: 100%;
  height: 500px;
  object-fit: scale-down;
  background-color: #fff;
}
.search-complex-title {
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
.titlesec {
  width: 100%;
  padding: 20px 150px 20px 150px;
  font-size: 26px;
  font-weight: 700;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
</style>
