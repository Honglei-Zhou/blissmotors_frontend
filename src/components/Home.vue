<template>
  <div class="row">

    <!-- Carousel -->

    <div class="leftcolumn">
    </div>
    <div class="maincolumn">
      <div class="carousel-wrapper">
        <carousel
        dots="none"
        >
          <carousel-item
            v-for="(item, index) in sliderInfo"
            :key="index"
          >
          <div class="carousel-container">
              <img
                :src="item.img"
                style="width: 100%; object-fit: scale-down"
              />
              <div class="button"><i-button type="primary" @click="$router.push('/research')">Find Your Next Car<Icon type="ios-arrow-forward" /></i-button></div>
              <div class="button-invitation">
                <i-button type="primary" @click="showInvitation = true">Get Beta Invitation<Icon type="ios-arrow-forward" /></i-button>
                 <modal
                    v-model="showInvitation"
                    title="Get Beta Invitation"
                    scrollable
                    @on-ok="handleSubmit('invitationForm')"
                    @on-cancel="cancel"
                    >
                    <i-form ref="invitationForm" :model="subscribeForm" :rules="subscribeFormValidate">
                      <form-item label="E-mail" prop="email">
                          <i-input v-model="subscribeForm.email" placeholder="Enter your e-mail"></i-input>
                      </form-item>
                    </i-form>
                </modal>
                </div>
            </div>
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
        <div class="page-head-title">

        </div>
        <div class="page-head-intro">

        </div>
        <div class="page-head-detail">
              </div>
      </div>
    </div>
    </div>
    <div class="rightcolumn">
    </div> -->

<!-- Search -->
      <div class="leftcolumn">
      </div>
       <div class="maincolumn">
        <SearchElement></SearchElement>
      </div>
      <div class="rightcolumn">
      </div>

      <!-- <div class="leftcolumn">
      </div>
       <div class="maincolumn">
         <div class="search-complex-wrapper">

          <div class="search-complex-title" @click="showComplexSearch = !showComplexSearch">
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
            {{item.title}}
          </div>
          <div class="introsec-item-info">

              {{item.intro}}

          </div>
        </div>
      </div>
      </div>
    </div>

    <div class="row" v-for="(item, index) in secInfo" :key="index">
          <div class="leftcolumn">
          </div>
          <div class="maincolumn">
            <ShowSection :item="item" ></ShowSection>
          </div>

          <div class="rightcolumn">
          </div>
    </div>

    <div class="leftcolumn">
      </div>
       <div class="maincolumn">
         <div class="contactsec-wrapper">
          <div class="contactsec-item">
            <div class="contactsec-item-title">
              TESTIMONIALS
            </div>
            <div class="contactsec-item-info">
              Saving Customers Thousands
            </div>
            <div class="contactsec-item-intro">
              <p>"Great service and experience. I just showed up signed up the paper work and pick up the new car. No negotiation no haggling no waste of time."<br/><strong> - Vince</strong></p><br/>
              <p>"Got a good price on my Honda CRV through Bliss. They worked hard to ensure that I got the right vehicle and advised me through my search process, completed all the paperwork and got the vehicle delivered to my house."<br/><strong> - NAVEEN</strong></p>
            </div>
        </div>
        <div class="contactsec-item">
            <div class="contactsec-item-img">
          <img src="/static/img/index/car/car4.png" />
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
            REVOLUTIONIZING CAR BUYING
          </div>
          <div class="contactsec-item-info">
           A Better Way to Lease a Car
          </div>
          <div class="contactsec-item-intro">
            Buyers should not overpay by thousands of dollars to get the car that they need. That’s money better used for college, housing, vacations or retirement.
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
import NameYourPrice from '@/components/Form/NameYourPrice'
import BMCollapse from '@/components/Collapse/Collapse'
import ShowSection from '@/components/ShowSection/ShowSection'
import SearchElement from '@/components/Search/SearchElement'
import SearchComplex from '@/components/Search/SearchComplex'
import {leadService} from '@/api/leadService'

export default {
  name: 'Home',
  data: function () {
    return {
      showComplexSearch: false,
      showInvitation: false,
      email: '',
      subscribeForm: {
        email: ''
      },
      subscribeFormValidate: {
        email: [
          { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' },
          { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
        ]
      },
      introInfo: [
        {
          img: '/static/img/index/car/icon-1.png',
          title: 'LEASE ANY CAR',
          intro: 'Bliss Motors and our participating dealers currently covers 95% of all makes in Chicago area and guarantee a great deal on the brands we cover.'
        },
        {
          img: '/static/img/index/car/icon-2.png',
          title: 'BEST PRICE GUARANTEED',
          intro: 'We guarantee that we can negotiate a great deal for you!'
        },
        {
          img: '/static/img/index/car/icon-3.png',
          title: 'WE DELIVER YOUR CAR',
          intro: 'If you live in the Chicago area, we deliver your new vehicle to you for free. No need to waste time at the dealerships.'
        },
        {
          img: '/static/img/index/car/icon-4.png',
          title: 'FREE LEASING ADVICE',
          intro: 'We offer free leasing advice and present you with best deals that matches your preferences. So you can make the best informed decision on your next car lease.'
        }
      ],
      secInfo: [
        {
          left: true,
          image: '/static/img/index/car/car2.png',
          desc: 'Motors optimizes the car-buying or -leasing experience. Let us help you find your next ride.',
          title: 'EMPOWERING CAR BUYERS',
          info: 'Saving You Time and Money',
          intro: 'The auto industry is notorious for misleading car buyers on pricing, causing trusting consumers to waste time haggling with dealers only to end up over-paying. Bliss Motors helps level the playing field by saving customers thousands of dollars.'
        },
        {
          left: false,
          image: '/static/img/index/car/car3.png',
          desc: 'Only Bliss Motors empowers customers to get the lowest car leasing price on the perfect car in your area.',
          title: 'TOTAL TRANSPARENCY',
          info: 'Our Technology Helps Get You the Best Deal',
          intro: 'Based on big data and smart machine learning, Bliss Motors performs analytics on inventory, price, and behavior data that informs which vehicles are selling at the best prices. Our team provides an exceptional car-buying experience with the lowest cost possible.'
        }
      ],
      sliderInfo: [
        {
          img: '/static/img/index/car/page_head_2.png',
          url: 'https://www.blissmotors.com'
        }
      ]
    }
  },
  methods: {
    handleSubmit (name) {
      this.$refs[name][0].validate((valid) => {
        if (valid) {
          var message = 'Subscription'
          // console.log(message)
          var data = {
            firstName: 'Subscribe',
            lastName: 'Test',
            phone: '3125008535',
            email: this.subscribeForm.email,
            message: message
          }
          // console.log(data)
          leadService.sendFormService(data).then((resp) => {
            // console.log(resp)
            this.$Message.success('Thank you for subscription!')
            this.$refs['invitationForm'][0].resetFields()
          }).catch((err) => {
            console.error(err)
          })
        } else {
          this.$Message.error('Please fill the required fields before submit.')
          this.$refs['invitationForm'][0].resetFields()
        }
      })
    },
    cancel () {
      this.$refs['invitationForm'][0].resetFields()
    }
  },
  components: {
    NewInquiryForm,
    NameYourPrice,
    BMCollapse,
    ShowSection,
    SearchElement,
    SearchComplex
  }
}
</script>

<style scoped>
@import '../common/css/base.css';

.carousel-wrapper {
  width: 100%;
  margin-top: 10px;
  padding: 0 10px;
}
.carousel-container{
  position: relative;
  width: 100%;
}
.button{
  position: absolute;
  left: 8%;
  top: 82%;
}
.button-invitation{
  position: absolute;
  left: 25%;
  top: 82%;
}
.page-head-wrapper{
  width: 100%;
  height: 480px;
  /* min-height: 500px; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 10px;
  background-image: url('../../static/img/index/car/page_head_2.png');
  /* background-color: #808695; */
  /* background-blend-mode: screen; */
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
  padding-top: 20px;
  padding-left: 30px;
  padding-right: 30px;
  height: 160px;
  font-size: 36px;
  font-weight: 700;
  /* color: rgba(0,0,0,0.8); */
}

.page-head-detail{
  padding-top: 30px;
  padding-left: 30px;
  padding-right: 30px;
  height: 180px;
  font-size: 16px;
  font-style: normal;
  line-height: 20pt;
  font-weight: 700;
  /* color: rgba(0,0,0,0.8); */
}

.introsec-wrapper{
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
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
  height: 140px;
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
  padding-top: 0px;
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
  /* height: 700px; */
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
</style>
