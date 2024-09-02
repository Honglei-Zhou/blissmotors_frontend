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
          Contact Us
        </div>
        <div class="page-head-detail">
          <div>Have a dream car? Looking to negotiate the price for your dream car at a fixed rate? Bliss Motors can help!</div>
          <div style="padding-top: 50px;"> <i-button type="primary" @click="searchCar">Start Search</i-button></div>
        </div>
      </div>
    </div>
    </div>
    <div class="rightcolumn">
    </div> -->

    <div class="leftcolumn">
      </div>
       <div class="maincolumn">

         <div class="contactsec-wrapper">

      <div class="contactsec-item">
            <!-- <i-form ref="contact" :model="contactForm"  :rules="validateContact" style="margin-top: 10px">

        <row>
          <i-col span="11" offset="1">
            <form-item prop="firstName">
              <i-input type="text" v-model="contactForm.firstName" placeholder="First Name"></i-input>
            </form-item>
          </i-col>
          <i-col span="11" offset="1">
            <form-item prop="lastName">
              <i-input type="text" v-model="contactForm.lastName" placeholder="Last Name"></i-input>
            </form-item>
          </i-col>
        </row>

        <row>
          <i-col span="11" offset="1">
            <form-item prop="phone">
              <i-input type="text" v-model="contactForm.phone" placeholder="Phone Number"></i-input>
            </form-item>
          </i-col>
          <i-col span="11" offset="1">
            <form-item prop="zipCode">
              <i-input type="text" v-model="contactForm.zipCode" placeholder="Zip Code"></i-input>
            </form-item>
          </i-col>
        </row>

        <row>
          <i-col span="23" offset="1">
            <form-item prop="email">
              <i-input type="email" v-model="contactForm.email" placeholder="Email Address"></i-input>
            </form-item>
          </i-col>
        </row>

        <row>
          <i-col span="23" offset="1">
            <form-item prop="message">
              <i-input type="textarea" v-model="contactForm.message" :rows="5" placeholder="Leave your message..."></i-input>
            </form-item>
          </i-col>
        </row>

    <form-item>
      <row>
        <i-col span="10" offset="1">
          Best way to contact
        </i-col>
        <i-col span="10" offset="2">
          <RadioGroup v-model="contactForm.contactMethod">
            <Radio label="email">Email</Radio>
            <Radio label="sms">SMS</Radio>
            <Radio label="call">Call</Radio>
          </RadioGroup>
        </i-col>
      </row>
    </form-item>

    <form-item>
      <row>
        <i-col span="10" offset="10">
          <i-button type="primary" @click="handleSubmit('contact')">Send</i-button>
        </i-col>
      </row>
    </form-item>
  </i-form> -->
  <NewInquiryForm :key="formKey()"></NewInquiryForm>
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

  </div>

</template>

<script>
import NewInquiryForm from '@/components/Form/NewInquiryForm'
import {leadService} from '@/api/leadService'

export default {
  name: 'ContactUs',
  data: function () {
    return {
      setTitle: false,
      sliderInfo: [
        {
          img: '/static/img/index/car/page_head_2.png',
          url: 'https://www.blisslease.com'
        }
      ],
      setting: {
        autoplaySpeed: 5000
      },
      contactForm: {
        firstName: '',
        lastName: '',
        phone: '',
        zipCode: '',
        email: '',
        message: '',
        contactMethod: 'email'
      },
      validateContact: {
        phone: [
          { required: true, type: 'string', message: 'The phone cannot be empty', trigger: 'blur' }
        ],
        message: [
          { required: true, type: 'string', message: 'The message cannot be empty', trigger: 'blur' }
        ],
        zipCode: [
          { required: true, type: 'string', message: 'The zip code cannot be empty', trigger: 'blur' }
        ],
        email: [
          { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' },
          { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
        ],
        firstName: [
          { required: true, type: 'string', message: 'The name cannot be empty', trigger: 'blur' }
        ],
        lastName: [
          { required: true, type: 'string', message: 'The name cannot be empty', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    formKey () {
      var key = Date.now()
      // console.log(key)
      return key
    },
    searchCar () {
      this.$router.push('/research')
    },
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          var message = `Zip Code: ${this.contactForm.zipCode}\nMessage: ${this.contactForm.message}\n Best way to contact: ${this.contactForm.contactMethod}`
          var data = {
            firstName: this.contactForm.firstName,
            lastName: this.contactForm.lastName,
            phone: this.contactForm.phone,
            email: this.contactForm.email,
            message: message
          }
          // console.log(data)
          leadService.sendFormService(data).then((resp) => {
            // console.log(resp)
            this.$Message.success('Thank you for submitting inquiry!')
          }).catch((err) => {
            console.error(err)
            this.$Message.error('Sorry, please refresh the page to submit again.')
          })
        } else {
          this.$Message.error('Please fill the required fields before submit.')
        }
      })
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
  color: #17233d;
}
.contactsec-wrapper{
  width: 100%;
  margin-top: 50px;
  padding-top: 20px;
  /* border-top: 1px solid rgba(0,0,0,0.1); */
}
.contactsec-item {
  width: 50%;
  padding-right: 30px;
  /* height: 630px; */
  margin: 0px auto;
  float: right;
  text-align: left;
}
.contactsec-item-title {
  padding-top: 20px;
  padding-left: 30px;
  padding-right: 30px;
  height: 120px;
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
  color:#2b85e4;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
</style>
