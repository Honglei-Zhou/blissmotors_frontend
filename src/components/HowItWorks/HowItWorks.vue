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
          Search for a Model > Get Quote > Finalize your Lease > Schedule Delivery
        </div>
        <div class="page-head-detail">
          <div>Bliss Motors helps you conveniently get the best deal on your next lease without the hassle of stepping into a dealership! </div>
          <div style="padding-top: 50px;"><i-button type="primary" @click="$router.push('/research')">Start Search</i-button></div>

          </div>

      </div>
    </div>
    </div>
    <div class="rightcolumn">
    </div> -->

    <div class="leftcolumn">
    </div>
    <div class="maincolumn">
      <div class="how-it-works-wrapper">

          <div class="introduction-container">

            <div class="introduction-head">
                <div class="introduction-head-title">
                  HOW IT WORKS
                </div>
                <div class="introduction-head-info">
                  Search for a Model > Get Quote > Finalize your Lease > Schedule Delivery
                </div>
                <div>
                  <div class="introduction-head-intro">
                    Bliss Motors helps you conveniently get the best deal on your next lease without the hassle of stepping into a dealership!
                  </div>
                </div>
            </div>

            <div class="introduction-content">
              <div v-for="(step, index) in steps" class="step" :key="index">
                   <card  bordered>
                        <p class="step-title" slot="title">{{step.title}}</p>
                        <p class="step-details">{{step.details}}</p>
                    </card>
              </div>
            </div>
          </div>

          <div class="products-container">
            <div class="products-head">
                <div class="products-head-title">
                  PRODUCTS AND PRICING
                </div>
                <div class="products-head-info">
                  Get the best deal without the hassle.
                </div>
                <div>
                  <div class="products-head-intro">
                    We guarantee we will find the best deal on your next lease! Otherwise we will refund all your service fee back to you!
                  </div>
                </div>
            </div>
            <div class="products-content">
              <div v-for="(product, index) in products" class="product" :key="index">
                   <card :padding="0" :bordered="false" :dis-hover="true">
                       <div class="product-title" :class="{'product-title-color1': index===0, 'product-title-color2': index===1, 'product-title-color3': index===2}">
                        <p slot="title">{{product.title}}</p>
                       </div>
                       <div class="product-details">
                           <p class="commission">{{product.commission}}
                           </p>
                        <p  v-for="(detail,index) in product.details" :key="index" :class="{'product-details-item-even':index % 2 === 0, 'product-details-item-odd': index % 2 === 1}"><strong>{{detail.title}}</strong> {{detail.detail}}</p>
                       </div>
                    </card>
                    <div class="button">
                         <i-button type="primary" @click="handleBtnClick(index)">{{product.button}}</i-button>
                    </div>
              </div>
            </div>
          </div>

        <transition name="fade">
        <div class="contact-form-wrapper" v-show="showContactForm">
          <div class="contact-form-wrapper-button" @click="toggleContactForm"><Icon type="ios-close" size="50"/></div>
          <NewInquiryForm :key="formKey()" @close="toggleContactForm"></NewInquiryForm>
        </div>
      </transition>

              <transition name="fade">
        <div class="contact-form-wrapper" v-show="showFreeConciergeForm">
          <div class="contact-form-wrapper-button" @click="toggleFreeConciergeForm"><Icon type="ios-close" size="50"/></div>
          <FreeConcierge @close="toggleFreeConciergeForm" :key="formKey()"></FreeConcierge>
        </div>
      </transition>
      </div>
    </div>
    <div class="rightcolumn">
    </div>

  </div>
</template>

<script>
import NewInquiryForm from '@/components/Form/NewInquiryForm'
import FreeConcierge from '@/components/Form/FreeConcierge'

export default {
  name: 'HowItWorks',
  components: {
    NewInquiryForm,
    FreeConcierge
  },
  data () {
    return {
      showContactForm: false,
      showFreeConciergeForm: false,
      sliderInfo: [
        {
          img: 'static/img/index/car/page_head_2.png',
          url: 'https://www.blisslease.com'
        }
      ],
      setting: {
        autoplaySpeed: 5000
      },
      steps: [
        {
          title: 'Step 1',
          details: 'Tell Bliss Motors your preference, i.e. brand/model or class/type.'
        },
        {
          title: 'Step 2',
          details: 'Tell us your budget range or preference of deals you have in mind.'
        },
        {
          title: 'Step 3',
          details: 'Sit back and let us find your next car with the deal. We guarantee the best price.'
        },
        {
          title: 'Step 4',
          details: 'Take the deal and we will deliver your new car to you, no need to waste time at dealers.'
        }
      ],
      products: [
        {
          title: 'Free advantage',
          commission: 'FREE NEGOTIATION GUIDE *',
          button: 'Show Details',
          details: [
            {
              title: 'Insider Information:',
              detail: 'Get the information that the dealer doesn’t want you to know.'
            },
            {
              title: 'Gain the Advantage:',
              detail: 'Know what you should pay & why.'
            },
            {
              title: 'Gain Confidence:',
              detail: 'Don’t get tricked into overpaying.'
            }
          ]
        },
        {
          title: 'Lowest price negotiation service',
          commission: '$50 COMMISSION FEE',
          button: 'Contact Sales',
          details: [
            {
              title: 'Save Thousands:',
              detail: 'Get the Lowest Price on any car when you are leasing.'
            },
            {
              title: 'Save Time:',
              detail: 'Don’t waste days haggling and comparing.'
            },
            {
              title: 'Risk-Free:',
              detail: 'Cancel any time before the deal is finalized. Don’t pay until the deal is finalized.'
            },
            {
              title: 'Save Stress:',
              detail: 'After the deal is finalized, simply pick up the car from the local dealer or have the car delivered to you in the Chicago area. No dealership time required!'
            }
          ]
        },
        {
          title: 'Executive service for business',
          commission: 'CONTACT FOR DETAILS​',
          button: 'Contact Sales',
          details: [
            {
              title: 'Save on Multiple Vehicles：',
              detail: 'Get the Bliss Motors Negotiation Service for your family or business.'
            },
            {
              title: 'Save Time:',
              detail: 'Get the best prices on all your vehicles in one place.'
            },
            {
              title: 'Risk-Free:',
              detail: 'Cancel any time before the deal is finalized. Don’t pay until dealer agrees.'
            }
          ]
        }
      ]
    }
  },
  methods: {
    formKey () {
      var key = Date.now()
      // console.log(key)
      return key
    },
    handleBtnClick (index) {
      if (index === 0) {
        this.toggleFreeConciergeForm()
      } else if (index === 1) {
        console.log(index)
        this.toggleContactForm()
      } else if (index === 2) {
        this.toggleContactForm()
      } else {
        console.log('Error')
      }
    },
    toggleContactForm () {
      this.showContactForm = !this.showContactForm
      if (this.showFreeConciergeForm) {
        this.showFreeConciergeForm = false
      }
    },
    toggleFreeConciergeForm () {
      this.showFreeConciergeForm = !this.showFreeConciergeForm
      if (this.showContactForm) {
        this.showContactForm = false
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

.how-it-works-wrapper{
    width: 100%;
    margin-top: 10px;
}

.introduction-container{
    width: 100%;

}

.introduction-head {
  width: 100%;
  height: 180px;
  text-align: left;
}

.introduction-head-title {
  width: 100%;
  padding-top: 20px;
  padding-left: 30px;
  padding-right: 30px;
  font-size: 23px;
  background-color: #fff;
}
.introduction-head-info {
  width: 100%;
  padding-top: 20px;
  padding-left: 30px;
  padding-right: 30px;
  font-size: 30px;
  font-weight: bold;
}
.introduction-head-intro {
  width: 100%;
  padding-top: 30px;
  padding-left: 30px;
  padding-right: 30px;
  font-size: 18px;
  color: #515a6e;
  font-style: normal;
  line-height: 20pt;
}

.introduction-content{
  width: 100%;
    height: 250px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 20px 0px;
    padding: 20px;
}

.step {
    height: 100%;
    width: 23%;
    padding: 10px 10px 20px 10px;
}

.step-title{
    height: 24px;
    line-height: 24px;
    font-size: 16px;
    color: #464c5b
}
.step-details{
    height: 70px;
}

.products-container{
    width: 100%;
    border-top: 1px solid rgba(0,0,0,0.1);
    padding-top: 20px;
}

.products-head {
  width: 100%;
  height: 220px;
  text-align: left;
}

.products-head-title {
  width: 100%;
  padding-top: 20px;
  padding-left: 30px;
  padding-right: 30px;
  font-size: 23px;
  background-color: #fff;
}
.products-head-info {
  width: 100%;
  padding-top: 20px;
  padding-left: 30px;
  padding-right: 30px;
  font-size: 30px;
  font-weight: bold;
}
.products-head-intro {
  width: 100%;
  padding-top: 30px;
  padding-left: 30px;
  padding-right: 30px;
  font-size: 18px;
  color: #515a6e;
  font-style: normal;
  line-height: 20pt;
}

.products-content{
  display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 550px;
    margin: 20px 0px;
    padding: 20px;
    margin: 20px 0px;
    padding: 20px;
}
.product {
    width: 32%;
    position: relative;
    background-color: #f8f8f9;
}
.product-title {
    height: 60px;
    line-height: 60px;
    font-size: 20px;
    font-weight: 400;
    color: #e8eaec;

}

.product-title-color1 {
  background-color: #2db7f5;
}

.product-title-color2 {
  background-color: #19be6b;
}

.product-title-color3 {
  background-color: #ff9900;
}

.product-details {
    background-color: #f8f8f9;
}

.commission {
  height: 60px;
    line-height: 60px;
    font-size: 16px;
    text-align: center;
}
.product-details-item-even {
    line-height: 18px;
    font-size: 14px;
    background-color: #c5c8ce;
    text-align: left;
    padding: 10px 20px;
}

.product-details-item-odd {
    line-height: 18px;
    font-size: 14px;
    text-align: left;
    background-color: #e8eaec;
    padding: 10px 20px;
}

.button {
  position: absolute;
  width: 100%;
  bottom: 30px;
  align-items: center;
}

.fade-enter-active, .fade-leave-active {
  transition: all 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.contact-form-wrapper{
  width: 100%;
  padding: 30px 0px;
  position: relative;
  z-index: 30;
  background-color: #515a6e;
}
.contact-form-wrapper-button{
  position: absolute;
  right: 4px;
  top: 4px;
  width: 60px;
  height: 60px;
  line-height: 60px;
  font-size: 50px;
  font-weight: 700;
  color: white;
  cursor: pointer;
}
</style>
