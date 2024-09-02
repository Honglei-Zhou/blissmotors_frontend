<template>
  <div class="container">
    <div class="title" v-show="setTitle">
      <div class="title-level1">
        {{titleOne}}
      </div>
      <div class="title-level2">
        {{titleTwo}}
      </div>
    </div>
    <div class="form">
      <i-form ref="formItem" :model="formItem" :rules="ruleValidate" autocomplete="on" style="align-content: center">
        <row>
          <i-col span="10">
            <form-item prop="firstName">
              <i-input type="text" v-model="formItem.firstName" placeholder="First Name"></i-input>
            </form-item>
          </i-col>
          <i-col span="10" offset="1">
            <form-item prop="lastName">
              <i-input type="text" v-model="formItem.lastName" placeholder="Last Name"></i-input>
            </form-item>
          </i-col>
        </row>

        <row>
          <i-col span="10">
            <form-item prop="phone">
              <i-input type="text" v-model="formItem.phone" placeholder="Phone Number"></i-input>
            </form-item>
          </i-col>
          <i-col span="10" offset="1">
            <form-item prop="zipCode">
              <i-input type="text" v-model="formItem.zipCode" placeholder="Zip Code"></i-input>
            </form-item>
          </i-col>
        </row>

         <row>
          <i-col span="10">
            <form-item prop="credit">
              <i-input type="text" v-model="formItem.creditScore" placeholder="Credit Score"></i-input>
            </form-item>
          </i-col>
          <i-col span="10" offset="1">
            <form-item prop="mileage">
              <i-input type="text" v-model="formItem.leaseMileage" placeholder="Lease Mileage"></i-input>
            </form-item>
          </i-col>
        </row>

         <row>
          <i-col span="10">
            <form-item prop="promotionCode">
              <i-input type="text" v-model="formItem.promotionCode" placeholder="Promotion Code"></i-input>
            </form-item>
          </i-col>
          <i-col span="10" offset="1">
            <form-item prop="source">
              <i-input type="text" v-model="formItem.source" placeholder="How'd you hear about us"></i-input>
            </form-item>
          </i-col>
        </row>

        <row>
          <i-col span="21">
            <form-item prop="email">
              <i-input type="email" v-model="formItem.email" placeholder="Email Address"></i-input>
            </form-item>
          </i-col>
        </row>

        <form-item>
          <row>
            <i-col span="21">
              <i-input type="textarea" v-model="formItem.message" placeholder="What's your question"></i-input>
            </i-col>
          </row>
        </form-item>

        <row>
          <i-col>
            <form-item label="Do you have any car in mind?">
              <RadioGroup v-model="formItem.radio" @on-change="handleCarInquiryStart">
                <Radio label="yes">Yes</Radio>
                <Radio label="no">No</Radio>
              </RadioGroup>
            </form-item>
          </i-col>
        </row>
        <div v-show="formItem.radio==='yes'">
        <row>
          <i-col span="10">
            <form-item>
              <i-select v-model="formItem.year" :disabled="formItem.yearDisabled" placeholder="Select Year" @on-change="setMake">
                <i-option v-for="(item, index) in carYear" :key="index" :value="item.year">{{item.year}}</i-option>
              </i-select>
            </form-item>
          </i-col>
          <i-col span="10" offset="1">
            <form-item>
              <i-select v-model="formItem.make" :disabled="formItem.makeDisabled" placeholder="Select Make" @on-change="setModel">
                <i-option v-for="(item, index) in carMake" :key="index" :value="item.make">{{item.make}}</i-option>
              </i-select>
            </form-item>
          </i-col>
        </row>

        <row>
          <i-col span="10">
            <form-item>
              <i-select v-model="formItem.model" :disabled="formItem.modelDisabled" placeholder="Select Model" @on-change="setTrim">
                <i-option v-for="(item, index) in carModel" :key="index" :value="item.model">{{item.model}}</i-option>
              </i-select>
            </form-item>
          </i-col>
          <i-col span="10" offset="1">
            <form-item>
              <i-select v-model="formItem.trim" :disabled="formItem.trimDisabled" placeholder="Select Trim">
                <i-option v-for="(item, index) in carTrim" :key="index" :value="item.trim">{{item.trim}}</i-option>
              </i-select>
            </form-item>
          </i-col>
        </row>

        </div>

        <row>
          <i-col span="10" align="right">
            <form-item>
              <i-button type="primary" @click="handleSubmit('formItem')" :disabled="submitted">Submit</i-button>
            </form-item>
          </i-col>
          <i-col span="10" align="left" offset="1">
            <form-item>
              <i-button @click="handleReset('formItem')">Reset</i-button>
            </form-item>
          </i-col>
        </row>
      </i-form>
    </div>
    <!-- <spin size="large" fix v-if="spinShow"></spin> -->
    <spin fix v-if="spinShow">
      <Icon type="ios-loading" size=30 class="spin-icon-load"></Icon>
    </spin>
  </div>
</template>
<script>
import { carService } from '@/api/carService'
import {leadService} from '@/api/leadService'

export default {
  name: 'NewInquiryForm',
  props: {
    setTitle: {
      type: Boolean,
      default: true
    },
    radioValue: {
      type: String,
      default: 'no'
    },
    initYear: {
      type: String,
      default: ''
    },
    initMake: {
      type: String,
      default: ''
    },
    initModel: {
      type: String,
      default: ''
    },
    initTrim: {
      type: String,
      default: ''
    },
    titleOne: {
      type: String,
      // default: ''
      default: 'Help me find my new car!'
    },
    titleTwo: {
      type: String,
      // default: ''
      default: 'Need help finding the best deal? Our team helps you locate the perfect car at the lowest est. price.'
    }
  },
  data () {
    return {
      submitted: false,
      spinShow: false,
      formItem: {
        firstName: '',
        lastName: '',
        phone: '',
        zipCode: '',
        email: '',
        message: '',
        radio: 'no',
        year: '',
        make: '',
        model: '',
        trim: '',
        creditScore: '',
        promotionCode: '',
        source: '',
        leaseMileage: '',
        yearDisabled: true,
        makeDisabled: true,
        modelDisabled: true,
        trimDisabled: true
      },
      carYear: [],
      carMake: [],
      carModel: [],
      carTrim: [],
      ruleValidate: {
        firstName: [
          { required: true, message: 'The first name cannot be empty', trigger: 'blur' }
        ],
        lastName: [
          { required: true, message: 'The last name cannot be empty', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: 'The phone number cannot be empty', trigger: 'blur' }
        ],
        zipCode: [
          { required: true, message: 'The zip code cannot be empty', trigger: 'blur' }
        ],
        email: [
          { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' },
          { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
        ]
      }
    }
  },
  created () {
    this._initForm()
    // console.log(this.titleOne)
  },
  methods: {
    handleSpinShow () {
      this.$Spin.show()
    },
    handleSpinHide () {
      this.$Spin.hide()
    },
    _initForm () {
      if (this.radioValue === 'yes') {
        this.formItem.radio = 'yes'
        this.formItem.year = this.initYear
        this.carYear = [{year: '2019'}, {year: '2018'}]
        this.formItem.yearDisabled = false
        var specialMakes = ['FIAT', 'GMC', 'INFINITI', 'MINI', 'RAM']
        if (this.initMake !== '') {
          var upMake = this.initMake.toUpperCase()
          if (specialMakes.includes(upMake)) {
            this.formItem.make = upMake
          } else {
            this.formItem.make = this.capitalLetter(this.initMake.toLowerCase())
          // Bug here for cars: FIAT, GMC, INFINITI, MINI, RAM
          }
        }
        this.formItem.model = this.initModel
        this.setMake()

        this.setModel()
        // this.setTrim()
      }
    },
    capitalLetter (words) {
      words = words.split(' ')
      // console.log(words)

      for (var i = 0, x = words.length; i < x; i++) {
        // console.log(words[i])
        words[i] = words[i][0].toUpperCase() + words[i].substr(1)
      }

      return words.join(' ')
    },
    handleCarInquiryStart () {
      if (this.formItem.radio === 'yes') {
        this.carYear = [{year: '2019'}, {year: '2018'}]
        this.formItem.yearDisabled = false
      } else {
        // console.log('no')
        this.clearCarInfo()
      }
    },
    clearCarInfo () {
      this.carYear = []
      this.carMake = []
      this.carModel = []
      this.carTrim = []
      this.formItem.year = ''
      this.formItem.make = ''
      this.formItem.model = ''
      this.formItem.trim = ''
      this.formItem.radio = 'no'
      this.formItem.creditScore = ''
      this.formItem.leaseMileage = ''
      this.formItem.promotionCode = ''
      this.formItem.source = ''
      this.formItem.yearDisabled = true
      this.formItem.makeDisabled = true
      this.formItem.modelDisabled = true
      this.formItem.trimDisabled = true
    },
    handleSubmit (name, event) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.submitted = true
          this.spinShow = true
          var message = `Promotion Code: ${this.formItem.promotionCode}\nSource: ${this.formItem.source}\nCredit Score: ${this.formItem.creditScore}\nLease Mileage: ${this.formItem.leaseMileage}\nZipCode: ${this.formItem.zipCode}\nYear: ${this.formItem.year} Make: ${this.formItem.make} Model: ${this.formItem.model} Trim: ${this.formItem.trim}\nMessage: ${this.formItem.message}`.replace(';', ',')
          // console.log(message)
          var data = {
            firstName: this.formItem.firstName,
            lastName: this.formItem.lastName,
            phone: this.formItem.phone,
            email: this.formItem.email,
            message: message
          }
          // console.log(data)
          leadService.sendFormService(data).then((resp) => {
            // console.log(resp)
            this.$Message.success('Thank you for submitting inquiry!')
            this.spinShow = false
            if (event !== undefined) {
              this.$emit('close', event.target)
            }
          }).catch((err) => {
            console.error(err)
            if (event !== undefined) {
              this.$emit('close', event.target)
            }
          })
        } else {
          this.$Message.error('Please fill the required fields before submit.')
        }
      })
    },
    handleReset (name) {
      // this.clearCarInfo()
      this.$refs[name].resetFields()
      this.clearCarInfo()
      this.submitted = false
    },
    setMake () {
      // console.log('Change')
      if (this.formItem.radio === 'no') {
        return
      }
      carService.getCarMake().then((resp) => {
        var carList = []
        for (var i = 0; i < resp.length; i++) {
          carList.push({make: resp[i]['name']})
        }
        this.carMake = carList
        // console.log(carList)
        this.formItem.makeDisabled = false
      })
    },
    setModel () {
      if (this.formItem.radio === 'no') {
        return
      }
      carService.getCarModel(this.formItem.make, 1, 100).then((resp) => {
        var results = resp['results']
        var carList = []
        for (var i = 0; i < results.length; i++) {
          carList.push({model: results[i]['name']})
        }
        this.carModel = carList
        this.formItem.modelDisabled = false
        // console.log(carList)
      })
    },
    setTrim () {
      if (this.formItem.radio === 'no') {
        return
      }
      carService.getCarTrim(this.formItem.make, this.formItem.model, this.formItem.year).then((resp) => {
        var results = resp['results']
        var carList = []
        for (var i = 0; i < results.length; i++) {
          carList.push({trim: results[i]['trim']})
        }
        this.carTrim = carList
        if (this.carTrim.length > 0) {
          this.formItem.trimDisabled = false
        }
      })
    }
  }
}
</script>

<style scoped>
  .container {
    width: 500px;
    position: relative;
    /* height: 620px; */
    background-color: #ffffff;
    margin-left: auto;
    margin-right: auto;
    padding: 0px;
    text-align:center;
  }
  .title {
    width: 100%;
    /* height: 100px; */
    margin-left: auto;
    margin-right: auto;
  }
  .title-level1 {
    width: 100%;
    height: 50px;
    padding: 10px;
    font-size: 30px;
    font-weight: bold;
  }
  .title-level2 {
    width: 100%;
    /* height: 50px; */
    padding: 15px;
    font-size: 14px;
    font-style: normal;
    line-height: 20pt;
  }
  .form {
    width: 100%;
    /* height: 440px; */
    margin-left: 30px;
    margin-top: 20px;
    text-align: center;
    align-content: center;
  }

  .loader {
    width: 30px;
    height: 30px;
    position: relative;
    margin: 0 auto;
  }
  .circular {
    -webkit-animation: rotate 2s linear infinite;
    animation: rotate 2s linear infinite;
    height: 100%;
    -webkit-transform-origin: center center;
    transform-origin: center center;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
  .spin-icon-load{
        animation: ani-demo-spin 1s linear infinite;
    }

</style>
