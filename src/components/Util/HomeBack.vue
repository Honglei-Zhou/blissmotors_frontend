<template>
  <div class="row">
    <div class="leftcolumn">
    </div>
    <div class="maincolumn">
      <!--Bugs here: pics should not be transparent, and should be the same size -->
      <div class="carousel-wrapper">
      <carousel
        autoplay
        loop
        :autoplay-speed="setting.autoplaySpeed"
      >
        <carousel-item
          v-for="(item, index) in sliderInfo"
          :key="index"
        >

            <img
              :src="item.img"
              style="width: 100%;object-fit: scale-down"
            />

        </carousel-item>
      </carousel>
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
        <div class="showsec-wrapper">
          <div class="showsec-item">
            <div class="showsec-item-img">
              <img src="static/img/index/car/car2.png" />
            </div>
          </div>
          <div class="showsec-item">
            <div class="showsec-item-title">
              <p>EMPOWERING CAR BUYERS</p>
            </div>
            <div class="showsec-item-info">
              <p>Saving You Time and Money</p>
            </div>
            <div class="showsec-item-intro">
              <p>The auto industry is notorious for misleading car buyers on pricing, causing trusting consumers to waste time haggling with dealers only to end up over-paying. Bliss Motors helps level the playing field by saving customers thousands of dollars.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="rightcolumn">
      </div>

      <div class="leftcolumn">
      </div>

      <div class="maincolumn">
        <div class="titlesec-item">
          <p>
            <span> Motors optimizes the car-buying or -leasing experience. Let us help you find your next ride. </span>
          </p>
        </div>
      </div>

      <div class="rightcolumn">
      </div>

      <div class="leftcolumn">
      </div>
      <div class="maincolumn">
        <div class="showsec-item">
          <div class="showsec-item-title">
            <p>EMPOWERING CAR BUYERS</p>
          </div>
          <div class="showsec-item-info">
            <p>Saving You Time and Money</p>
          </div>
          <div class="showsec-item-intro">
            <p>The auto industry is notorious for misleading car buyers on pricing, causing trusting consumers to waste time haggling with dealers only to end up over-paying. Bliss Motors helps level the playing field by saving customers thousands of dollars.</p>
          </div>
        </div>
        <div class="showsec-item">
          <div class="showsec-item-img">
            <img src="static/img/index/car/car1.png" />
          </div>
        </div>
      </div>

      <div class="rightcolumn">
      </div>

      <div class="leftcolumn">
      </div>

      <div class="maincolumn">
        <div class="titlesec-item">
          <p>
            <span> Only Bliss Motors empowers customers to get the lowest car leasing price on the perfect car in your area. </span>
          </p>
        </div>
      </div>
      <div class="rightcolumn">
      </div>

      <div class="leftcolumn">
      </div>
      <div class="maincolumn">
        <div class="showsec-item">
          <div class="showsec-item-img">
            <img src="static/img/index/car/car3.png" />
          </div>
        </div>
        <div class="showsec-item">
          <div class="showsec-item-title">
            <p>EMPOWERING CAR BUYERS</p>
          </div>
          <div class="showsec-item-info">
            <p>Saving You Time and Money</p>
          </div>
          <div class="showsec-item-intro">
            <p>The auto industry is notorious for misleading car buyers on pricing, causing trusting consumers to waste time haggling with dealers only to end up over-paying. Bliss Motors helps level the playing field by saving customers thousands of dollars.</p>
          </div>
        </div>
      </div>
      <div class="rightcolumn">
      </div>

      <div class="leftcolumn">
      </div>
      <div class="maincolumn">
        <div class="showsec-item">
          <div class="showsec-item-title">
            <p>EMPOWERING CAR BUYERS</p>
          </div>
          <div class="showsec-item-info">
            <p>Saving You Time and Money</p>
          </div>
          <div class="showsec-item-intro">
            <p>The auto industry is notorious for misleading car buyers on pricing, causing trusting consumers to waste time haggling with dealers only to end up over-paying. Bliss Motors helps level the playing field by saving customers thousands of dollars.</p>
          </div>
        </div>
        <div class="showsec-item">
          <div class="showsec-item-img">
            <img src="static/img/index/car/car4.png" />
          </div>
        </div>
      </div>
      <div class="rightcolumn">
      </div>

 <div class="leftcolumn">
      </div>
       <div class="maincolumn">
        <div class="contactsec-item">
          <NewInquiryForm></NewInquiryForm>

        </div>
        <div class="contactsec-item">
          <div class="contactsec-item-title">
            <p>EMPOWERING CAR BUYERS</p>
          </div>
          <div class="contactsec-item-info">
            <p>Saving You Time and Money</p>
          </div>
          <div class="contactsec-item-intro">
            <p>The auto industry is notorious for misleading car buyers on pricing, causing trusting consumers to waste time haggling with dealers only to end up over-paying. Bliss Motors helps level the playing field by saving customers thousands of dollars.</p>
          </div>
        </div>
      </div>
      <div class="rightcolumn">
      </div>
  </div>

</template>

<script>
import NewInquiryForm from '@/components/Form/NewInquiryForm'
import NameYourPrice from '@/components/Form/NameYourPrice'
import BMCollapse from '@/components/Collapse/Collapse'

export default {
  name: 'Home',
  data: function () {
    return {
      introInfo: [
        {
          img: 'static/img/index/car/icon-1.png',
          title: 'LEASE ANY CAR',
          intro: 'Bliss Motors and our participating dealers currently covers 95% new car brand/model in Chicago area and guarantee the best deals on the brand/models we cover.'
        },
        {
          img: 'static/img/index/car/icon-2.png',
          title: 'NAME YOUR PRICE',
          intro: 'Have a dreamed price? Tell us, our AI negotiator will give you suggestions on how reasonable the price is and even negotiate a deal with our participating dealers.'
        },
        {
          img: 'static/img/index/car/icon-3.png',
          title: 'SAME DAY PICKUP',
          intro: 'Bliss Motors powerful technology significantly reduced the car shopping process, so you can drive a brand-new vehicle without going through all the headache.'
        },
        {
          img: 'static/img/index/car/icon-4.png',
          title: 'FREE TEST DRIVES',
          intro: 'Do fun part, research and test drives, as usual, then sit back and let us do the hard part, negotiating the best deal for you!'
        }
      ],
      sliderInfo: [
        {
          img: 'static/img/index/car/test3.jpg',
          url: 'https://www.blissmotors.com'
        },
        {
          img: 'static/img/index/car/test3.jpg',
          url: 'https://www.blissmotors.com'
        },
        {
          img: 'static/img/index/car/test3.jpg',
          url: 'https://www.blissmotors.com'
        },
        {
          img: 'static/img/index/car/test3.jpg',
          url: 'https://www.blissmotors.com'
        }
      ],
      setting: {
        autoplaySpeed: 5000
      }
    }
  },
  components: {
    NewInquiryForm,
    NameYourPrice,
    BMCollapse
  }
}
</script>

<style scoped>
@import "../common/css/base.css";

.carousel-wrapper {
  width: 100%;
  height: 500px;
  margin-top: 10px;
  padding: 0 10px;
}

.introsec-wrapper {
  width: 100%;
  height: 395px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
  padding: 0 10px;
}

.introsec-item {
  width: 25%;
  height: 395px;
  float: left;
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
  padding-left: 15px;
  padding-right: 15px;
  font-size: 15px;
  color: #000000;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
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
.showsec-wrapper {
  width: 100%;
  margin-top: 20px;
}
.showsec-item {
  width: 50%;
  height: 500px;
  float: right;
  text-align: left;
}
.showsec-item-img {
  width: 100%;
  height: 500px;
  margin: 0px auto;
  overflow: hidden;
  float: left;
  /*
    border-bottom: 1px solid #ccc;
    */
  background-color: #fff;
}
.showsec-item-img img {
  width: 100%;
  height: 500px;
  margin: 1px auto;
  object-fit: scale-down;
  /*
    border-bottom: 1px solid #ccc;
    */
  background-color: #fff;
}
.showsec-item-title {
  width: 100%;
  height: 140px;
  padding-top: 70px;
  padding-left: 15px;
  padding-right: 15px;
  font-size: 23px;
  background-color: #fff;
}
.showsec-item-info {
  width: 100%;
  height: 150px;
  padding-top: 20px;
  padding-left: 15px;
  padding-right: 15px;
  font-size: 36px;
  font-weight: bold;
  /* font-family: Verdana, Geneva, Tahoma, sans-serif;*/
}
.showsec-item-intro {
  width: 100%;
  height: 210px;
  padding-top: 30px;
  padding-left: 15px;
  padding-right: 15px;
  font-size: 16px;
  color: #000000;
  /*font-family: Verdana, Geneva, Tahoma, sans-serif;*/
  font-style: normal;
  line-height: 20pt;
}

.titlesec-item {
  width: 750px;
  height: 150px;
  margin-left: 200px;
  padding-top: 30px;
  padding-left: 15px;
  padding-right: 15px;
  font-size: 28px;
  /*font-family: Verdana, Geneva, Tahoma, sans-serif;*/
}

.contactsec-item {
  width: 50%;
  height: 630px;
  margin: 0px auto;
  float: right;
  text-align: left;
}
.contactsec-item-title {
  padding-top: 70px;
  padding-left: 15px;
  padding-right: 15px;
  height: 160px;
  font-size: 23px;
  background-color: #fff;
}
.contactsec-item-info {
  padding-top: 20px;
  padding-left: 15px;
  padding-right: 15px;
  height: 160px;
  font-size: 36px;
  font-weight: bold;
  /*font-family: Verdana, Geneva, Tahoma, sans-serif;*/
}
.contactsec-item-intro {
  padding-top: 30px;
  padding-left: 15px;
  padding-right: 15px;
  height: 250px;
  font-size: 16px;
  color: #000000;
  /*font-family: Verdana, Geneva, Tahoma, sans-serif;*/
  font-style: normal;
  line-height: 20pt;
}
.contactsec-item-form {
  width: 50%;
  height: 620px;
  margin: 0px auto;
}
</style>
