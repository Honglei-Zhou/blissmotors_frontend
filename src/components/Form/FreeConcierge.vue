<template>

  <div class="fc-box">
    <div class="fc-steps">
      <steps :current="current">
        <step title="Step 1" icon="ios-car-outline" ></step>
        <step title="Step 2" icon="ios-contact-outline"></step>
        <step title="Step 3" icon="ios-clipboard-outline"></step>
        <step title="Step 4" icon="ios-list"></step>
        <step title="Step 5" icon="ios-checkmark-circle-outline"></step>
      </steps>
    </div>

    <div class="title">
        <p v-if="current===0">Step 1: What types of vehicles are you interested in? PLEASE SELECT ALL THAT APPLY</p>
        <p v-if="current===1">Step 2: Please select all that apply</p>
        <p v-if="current===2">Step 3: Please fill your contact information</p>
        <p v-if="current===3">Step 4: Please review information and submit</p>
        <p v-if="current===4">Step 5: Finished</p>
    </div>

  <div class="form">

    <i-form v-if="current===0" ref="carstyles" :model="carStyles" :rules="validateStyle" style="margin-top: 30px">
    <form-item prop="checkAllGroup">
      <div style="text-align: left;">
        <checkbox-group v-model="carStyles.checkAllGroup">
            <row>
                <i-col span="7" offset="1">
                    <checkbox label = "SUV">
                      <span>SUV</span>
                    </checkbox>
                </i-col>
                <i-col span="7" offset="1">
                    <checkbox label = "Sedan">
                      <span>Sedan</span>
                    </checkbox>
                </i-col>
                <i-col span="7" offset="1">
                    <checkbox label = "Minivan">
                      <span>Minivan</span>
                    </checkbox>
                </i-col>
            </row>

            <row>
                <i-col span="7" offset="1">
                    <checkbox label = "Coupe">
                      <span>Coupe</span>
                    </checkbox>
                </i-col>
                <i-col span="7" offset="1">
                    <checkbox label = "Hatchback">
                      <span>Hatchback</span>
                    </checkbox>
                </i-col>
                <i-col span="7" offset="1">
                    <checkbox label = "Wagon">
                      <span>Wagon</span>
                    </checkbox>
                </i-col>
            </row>

            <row>
                <i-col span="7" offset="1">
                    <checkbox label = "Convertible">
                      <span>Convertible</span>
                    </checkbox>
                </i-col>
            </row>
        </checkbox-group>
      </div>
    </form-item>

    <form-item>
      <row>
        <i-col>
          <i-button type="primary" @click="next('carstyles')">Next step</i-button>
        </i-col>
      </row>
    </form-item>

  </i-form>

  <i-form v-if="current===1" ref="cars" :model="cars" style="margin-top: 10px">
    <form-item>
      <row v-for="(car, index) in cars.carinfo" :key="index">
        <i-col span="5">
          <checkbox :label = "car.label" @on-change="initCarInfo(index)">{{car.label}}</checkbox>
        </i-col>

        <i-col span="5" offset="1">
          <i-select v-model="car.year" :disabled="car.yearDisabled" placeholder="Select Year" @on-change="setMake(index)">
            <i-option v-for="(item, index) in carYear" :key="index" :value="item.year">{{item.year}}</i-option>
          </i-select>
        </i-col>
        <i-col span="5" offset="1">
            <i-select v-model="car.make" :disabled="car.makeDisabled" placeholder="Select Make" @on-change="setModel(index)">
              <i-option v-for="(item, index) in carMake" :key="index" :value="item.make">{{item.make}}</i-option>
            </i-select>
        </i-col>
        <i-col span="5" offset="1">
            <i-select v-model="car.model" :disabled="car.modelDisabled" placeholder="Select Model" @on-change="car.model === undefined || car.model === '' ?car.checked = false: car.checked=true">
              <i-option v-for="(item, index) in carModel" :key="index" :value="item.model">{{item.model}}</i-option>
            </i-select>
        </i-col>
      </row>

    </form-item>

    <form-item>
      <row>
        <i-col span="23" offset="1">
          <i-input type="textarea" v-model="cars.message" :rows="5" placeholder="What's your question"></i-input>
        </i-col>
      </row>
    </form-item>

    <form-item>
      <row>
        <i-col>
          <i-button type="primary" @click="next('cars')">Next step</i-button>
          <i-button @click="handleBack('cars')" style="margin-left: 8px">Go Back</i-button>
        </i-col>
      </row>
    </form-item>

  </i-form>

  <i-form v-if="current===2" ref="contact" :model="contactForm"  :rules="validateContact" style="margin-top: 10px">

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
            <form-item prop="budget">
              <i-input type="text" v-model="contactForm.budget" placeholder="My Monthly Budget"></i-input>
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
        <i-col>
          <i-button type="primary" @click="next('contact')">Next step</i-button>
          <i-button @click="handleBack('contact')" style="margin-left: 8px">Go Back</i-button>
        </i-col>
      </row>
    </form-item>

  </i-form>

    <i-form v-if="current===3" ref="review" :model="reviewForm" :label-width="80" style="margin-top: 10px">
      <form-item :label="getLabel(index)" v-for="(i, index) in myCars" :key="index">
      <row type="flex">
        <i-col span="6" offset="1">
            <i-input readonly v-model="cars.carinfo[i].year" placeholder="2019"></i-input>
        </i-col>
        <i-col span="7" offset="1">
            <i-input readonly v-model="cars.carinfo[i].make" placeholder="Acura"></i-input>
        </i-col>
        <i-col span="7" offset="1">
            <i-input readonly v-model="cars.carinfo[i].model" placeholder="MDX"></i-input>
        </i-col>
      </row>
      </form-item>

      <form-item label="Budget">
        <row>
          <i-col span="22" offset="1">
              <i-input readonly v-model="contactForm.budget" placeholder="My Budget"><span slot="append"> $ </span></i-input>
          </i-col>
        </row>
      </form-item>

      <form-item label="Message">
        <row>
          <i-col span="22" offset="1">
              <i-input type="textarea" :rows="2" readonly v-model="cars.message" placeholder="Text Message"></i-input>
          </i-col>
        </row>
      </form-item>

      <form-item label="Name">
        <row>
          <i-col span="10" offset="1">
              <i-input readonly v-model="contactForm.firstName" placeholder="Bliss"></i-input>
          </i-col>
          <i-col span="10" offset="2">

              <i-input readonly v-model="contactForm.lastName" placeholder="Lease"></i-input>

          </i-col>
        </row>
      </form-item>

      <form-item label="Phone">
        <row>
          <i-col span="22" offset="1">
            <i-input readonly v-model="contactForm.phone" placeholder="1234567"></i-input>
          </i-col>
        </row>
      </form-item>

      <form-item label="Zip Code">
        <row>
         <i-col span="22" offset="1">
          <i-input readonly v-model="contactForm.zipCode" placeholder="60611"></i-input>
          </i-col>
        </row>
      </form-item>

      <form-item label="Email">
        <row>
         <i-col span="22" offset="1">
          <i-input readonly v-model="contactForm.email" placeholder="customercare@blissmotors.com"></i-input>
          </i-col>
        </row>
      </form-item>

      <form-item prop="agreeTerm">
      <row>
        <i-col span="10" offset="1">
          <a href='#/terms-of-service' target="blank">Terms & Conditions</a>
        </i-col>
        <i-col span="10" offset="2">
          <RadioGroup v-model="reviewForm.agreeTerm" @on-change="showMessage = false">
            <Radio label="yes">Yes</Radio>
            <Radio label="no">No</Radio>
          </RadioGroup>
        </i-col>
      </row>
    </form-item>

    <form-item>
      <i-button type="primary" @click="handleSubmit('review')">Submit</i-button>
      <i-button  @click="handleBack('review')" style="margin-left: 8px">Go Back</i-button>
    </form-item>

    </i-form>

    <i-form v-if="current===4" ref="done" :label-width="80" style="margin-top: 10px">
      <form-item>
        <row>
         <i-col span="22" offset="1" style="text-align: left">
          Thank you for submitting your inquiry. We will contact you soon.
         </i-col>
        </row>
      </form-item>

      <form-item>
        <i-button type="primary" @click="handleDone">Done</i-button>
      </form-item>
    </i-form>

    <div class="alert" v-show="showMessage">
  <alert type="warning" show-icon>{{message}}</alert>

  </div>
  </div>
    </div>
</template>
<script>
import { carService } from '@/api/carService'
import {leadService} from '@/api/leadService'

export default {
  name: 'FreeConcierge',
  data () {
    return {
      current: 0,
      stepSize: 'large',
      message: '',
      showMessage: false,
      carYear: [{year: '2019'}, {year: '2018'}],
      carMake: [],
      carModel: [],
      carStyles: {
        checkAllGroup: []
      },
      contactForm: {
        firstName: '',
        lastName: '',
        phone: '',
        zipCode: '',
        email: '',
        budget: '',
        contactMethod: 'email'
      },
      cars: {
        message: '',
        carinfo: [
          {
            label: 'Car 1',
            checked: false,
            year: '',
            make: '',
            model: '',
            yearDisabled: true,
            makeDisabled: true,
            modelDisabled: true
          },
          {
            label: 'Car 2',
            checked: false,
            year: '',
            make: '',
            model: '',
            yearDisabled: true,
            makeDisabled: true,
            modelDisabled: true
          },
          {
            label: 'Car 3',
            checked: false,
            year: '',
            make: '',
            model: '',
            yearDisabled: true,
            makeDisabled: true,
            modelDisabled: true
          }
        ]
      },
      reviewForm: {
        agreeTerm: 'no'
      },
      validateStyle: {
        checkAllGroup: [
          {required: true, type: 'array', min: 1, message: 'Please select at least one style', trigger: 'change'}
        ]
      },
      validateContact: {
        phone: [
          { required: true, type: 'string', message: 'The phone cannot be empty', trigger: 'blur' }
        ],
        budget: [
          { required: true, type: 'string', message: 'The budget cannot be empty', trigger: 'blur' }
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
      },
      validateReview: {
        agreeTerm: [
          {required: true, type: 'string', len: 3, message: 'Please read and agree the terms to continue', trigger: 'change'}
        ]
      }
    }
  },
  computed: {
    myCars () {
      var countList = []
      for (var i = 0; i < this.cars.carinfo.length; i++) {
        if (this.cars.carinfo[i].checked) {
          countList.push(i)
        }
      }
      return countList
    }
  },
  methods: {
    getLabel (index) {
      return index === 0 ? 'My Cars' : ''
    },
    handleSubmit (name, event) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          console.log(this.formItem)

          var message = `ZipCode: ${this.contactForm.zipCode}\n`
          message += `Budget: ${this.contactForm.budget}\nContact Method: ${this.contactForm.contactMethod}\n`
          for (var i = 0; i < this.myCars.length; i++) {
            message += `Year: ${this.myCars[i].year} Make: ${this.myCars[i].make} Model: ${this.myCars[i].model}\n`
          }
          message += this.cars.message
          var inquiry = {
            firstName: this.contactForm.firstName,
            lastName: this.contactForm.lastName,
            phone: this.contactForm.phone,
            email: this.contactForm.email,
            message: message
          }
          leadService.sendFormService(inquiry).then((resp) => {
            console.log(resp)
            this.$Message.success('Thank you for submitting inquiry!')
            this.current = 4
          }).catch((err) => {
            console.error(err)
          })
        } else {
          this.$Message.error('Please fill the required fields before submit.')
        }
      })
    },
    handleReset (name) {
      this.$refs[name].resetFields()
    },
    next (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          if (this.current === 4) {
            this.current = 0
          } else {
            this.current += 1
          }
        } else {
          this.$Message.error('Please fill the required field.')
        }
      })
    },
    handleBack (name) {
      this.showMessage = false
      this.message = ''
      if (this.current === 0) {
        this.current = 0
        // this.$refs[name].resetFields()
      } else {
        this.current -= 1
        // this.$refs[name].resetFields()
      }
    },
    handleDone (event) {
      this.carStyles.checkAllGroup = []
      this.contactForm.firstName = ''
      this.contactForm.lastName = ''
      this.contactForm.phone = ''
      this.contactForm.zipCode = ''
      this.contactForm.email = ''
      this.contactForm.budget = ''
      this.contactForm.contactMethod = 'email'
      this.cars.message = ''
      this.cars.carinfo.forEach((car) => {
        car.checked = false
        car.year = ''
        car.make = ''
        car.model = ''
        car.yearDisabled = true
        car.makeDisabled = true
        car.modelDisabled = true
      })
      this.reviewForm.agreeTerm = 'no'
      this.current = 0
      this.$emit('close', event.target)
    },
    initCarInfo (index) {
      this.cars.carinfo[index].yearDisabled = !this.cars.carinfo[index].yearDisabled
      if (this.cars.carinfo[index].yearDisabled) {
        this.cars.carinfo[index].year = ''
        this.cars.carinfo[index].make = ''
        this.cars.carinfo[index].model = ''
        this.cars.carinfo[index].checked = false
        this.cars.carinfo[index].makeDisabled = true
        this.cars.carinfo[index].modelDisabled = true
      }
    },
    setMake (index) {
      // console.log('Change')
      this.showMessage = false
      this.message = ''
      if (this.carMake.length > 0) {
        this.cars.carinfo[index].makeDisabled = false
        return
      }
      carService.getCarMake().then((resp) => {
        var carList = []
        for (var i = 0; i < resp.length; i++) {
          carList.push({ make: resp[i]['name'] })
        }
        this.carMake = carList
        // console.log(carList)
        this.cars.carinfo[index].makeDisabled = false
      })
    },
    setModel (index) {
      this.showMessage = false
      this.message = ''
      if (this.carModel.length > 0) {
        this.cars.carinfo[index].modelDisabled = false
        return
      }
      carService.getCarModel(this.cars.carinfo[index].make, 1, 100).then((resp) => {
        var results = resp['results']
        var carList = []
        for (var i = 0; i < results.length; i++) {
          carList.push({ model: results[i]['name'] })
        }
        this.carModel = carList
        this.cars.carinfo[index].modelDisabled = false
        // console.log(carList)
      })
    }
  }

}
</script>

<style scoped>
  .fc-box {
    width: 800px;
    background-color: #ffffff;
    margin: 0px auto;
    padding: 0px;
  }
  .fc-steps {
    width: 550px;
    height: 60px;
    margin: 0px auto;
    padding: 20px;
  }
  .title {
    width: 550px;
    height: 60px;
    margin-left: auto;
    margin-right: auto;
    padding: 10px;
    font-size: 20px;
    font-weight: bold;
    /* font-family: Verdana, Geneva, Tahoma, sans-serif; */
    text-align: center;
  }
  .form {
    width: 600px;
    background-color: #ffffff;
    margin: 0px auto;
    padding-bottom: 40px;
    text-align: center;
  }
.alert{
  padding: 0px 100px;
}
</style>
