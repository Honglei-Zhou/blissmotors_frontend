<template>
  <div class="name-your-price">
    <div class="steps">
      <steps :current="current" size="large">
        <step title="Step 1" icon="ios-car-outline"></step>
        <step title="Step 2" icon="ios-contact-outline"></step>
        <step title="Step 3" icon="ios-clipboard-outline"></step>
        <step title="Step 4" icon="ios-checkbox-outline"></step>
      </steps>
    </div>

    <div class="title">
        <p v-if="current===0">Step 1: Please choose your car</p>
        <p v-if="current===1">Step 2: Please fill your contact information</p>
        <p v-if="current===2">Step 3: Please review information and submit</p>
        <p v-if="current===3">Step 4: Finished</p>
    </div>

  <div class="form">
  <i-form v-if="current===0" ref="formItem0" :model="formItem" :rules="ruleValidate" style="margin-top: 10px">
    <form-item>
      <row style="margin-left: 0px">
        <i-col span="10" offset="1">
          <i-select v-model="formItem.year" placeholder="Select Year">
            <i-option v-for="(item, index) in carYear" :key="index" :value="item.year">{{item.year}}</i-option>
          </i-select>

        </i-col>
        <i-col span="10" offset="2">
          <i-select v-model="formItem.make" :disabled="formItem.makeDisabled" placeholder="Select Make">
            <i-option v-for="(item, index) in carMake" :key="index" :value="item.make">{{item.make}}</i-option>
          </i-select>
        </i-col>
      </row>
    </form-item>

    <form-item>
      <row>
        <i-col span="10" offset="1">
            <i-select v-model="formItem.model" :disabled="formItem.modelDisabled" placeholder="Select Model">
              <i-option v-for="(item, index) in carModel" :key="index" :value="item.model">{{item.model}}</i-option>
            </i-select>
        </i-col>
        <i-col span="10" offset="2">
            <i-select v-model="formItem.trim" :disabled="formItem.trimDisabled" placeholder="Select Trim">
              <i-option v-for="(item, index) in carTrim" :key="index" :value="item.trim">{{item.trim}}</i-option>
            </i-select>
        </i-col>
      </row>
    </form-item>

     <form-item>
      <row>
        <i-col span="22" offset="1">
          <i-input type="text" v-model="formItem.price" placeholder="Name Your Price ($/Month)"></i-input>
        </i-col>
      </row>
    </form-item>

    <form-item>
      <row>
        <i-col span="22" offset="1">
          <i-input type="textarea" v-model="formItem.message" rows=5 placeholder="What's your question"></i-input>
        </i-col>
      </row>
    </form-item>

    <form-item>
      <row>
        <i-col>
          <i-button type="primary" @click="next">Next step</i-button>
        </i-col>
      </row>
    </form-item>

  </i-form>

  <i-form v-if="current===1" ref="formItem1" :model="formItem" :rules="ruleValidate" style="margin-top: 10px">
    <form-item>
      <row>
        <i-col span="10" offset="1">

          <i-input type="text" v-model="formItem.firstName" placeholder="First Name"></i-input>

        </i-col>
        <i-col span="10" offset="2">

          <i-input type="text" v-model="formItem.lastName" placeholder="Last Name"></i-input>
        </i-col>
      </row>
    </form-item>

    <form-item>
      <row>
        <i-col span="10" offset="1">
          <i-input type="text" v-model="formItem.phone" placeholder="Phone Number"></i-input>
        </i-col>
        <i-col span="10" offset="2">
          <i-input type="text" v-model="formItem.zipCode" placeholder="Zip Code"></i-input>
        </i-col>
      </row>
    </form-item>

    <form-item>
      <row>
        <i-col span="22" offset="1">
          <i-input type="email" v-model="formItem.email" placeholder="Email Address"></i-input>
        </i-col>
      </row>
    </form-item>

    <form-item>
      <row>
        <i-col span="10" offset="1">
          Best way to contact
        </i-col>
        <i-col span="10" offset="2">
          <RadioGroup v-model="formItem.contactMethod">
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
          <i-button type="primary" @click="next">Next step</i-button>
          <i-button type="light" @click="handleBack" style="margin-left: 8px">Back</i-button>
        </i-col>
      </row>
    </form-item>

  </i-form>
    <i-form v-if="current===2" ref="formItem2" :model="formItem" :rules="ruleValidate" :label-width="80" style="margin-top: 10px">
      <form-item label="My Car">
      <row type="flex">
        <i-col span="4" offset="1">
            <i-input readonly v-model="formItem.year" placeholder="2017"></i-input>
        </i-col>
        <i-col span="5" offset="1">
            <i-input readonly v-model="formItem.make" placeholder="Acura"></i-input>
        </i-col>
        <i-col span="5" offset="1">
            <i-input readonly v-model="formItem.model" placeholder="MDX"></i-input>
        </i-col>
        <i-col span="5" offset="1">
            <i-input readonly v-model="formItem.trim" placeholder="Sports"></i-input>
        </i-col>
      </row>
      </form-item>

      <form-item label="My Price">
        <row>
          <i-col span="22" offset="1">
              <i-input readonly v-model="formItem.price" placeholder="300$"></i-input>
          </i-col>
        </row>
      </form-item>

      <form-item label="Message">
        <row>
          <i-col span="22" offset="1">
              <i-input type="textarea" rows=2 readonly v-model="formItem.message" placeholder="Text Message"></i-input>
          </i-col>
        </row>
      </form-item>

      <form-item label="Name">
        <row>
          <i-col span="10" offset="1">
              <i-input readonly v-model="formItem.firstName" placeholder="Hello"></i-input>
          </i-col>
          <i-col span="10" offset="2">

              <i-input readonly v-model="formItem.lastName" placeholder="World"></i-input>

          </i-col>
        </row>
      </form-item>

      <form-item label="Phone">
        <row>
          <i-col span="22" offset="1">
            <i-input readonly v-model="formItem.phone" placeholder="1234567"></i-input>
          </i-col>
        </row>
      </form-item>

      <form-item label="Email">
        <row>
         <i-col span="22" offset="1">
          <i-input readonly v-model="formItem.email" placeholder="abc@blissmotors.com"></i-input>
          </i-col>
        </row>
      </form-item>

      <form-item>
      <row>
        <i-col span="10" offset="1">
          <a href="#" target="blank">Terms & Conditions</a>
        </i-col>
        <i-col span="10" offset="2">
          <RadioGroup v-model="formItem.accept">
            <Radio label="yes">Yes</Radio>
            <Radio label="no">No</Radio>
          </RadioGroup>
        </i-col>
      </row>
    </form-item>

    <form-item>
      <i-button type="primary" @click="handleSubmit('formValidate')">Submit</i-button>
      <i-button type="light" @click="handleBack" style="margin-left: 8px">Back</i-button>
    </form-item>

    </i-form>

    <i-form v-if="current===3" ref="formItem3" :model="formItem" :rules="ruleValidate" :label-width="80" style="margin-top: 10px">
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
  </div>

  </div>
</template>
<script>
export default {
  name: 'NameYourPrice',
  data () {
    return {
      current: 0,
      formItem: {
        firstName: '',
        lastName: '',
        phone: '',
        zipCode: '',
        email: '',
        message: '',
        year: '',
        make: '',
        model: '',
        trim: '',
        price: '',
        contactMethod: 'email',
        accept: 'no',
        makeDisabled: true,
        modelDisabled: true,
        trimDisabled: true
      },
      ruleValidate: {
        name: [
          { required: true, message: 'The name cannot be empty', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleSubmit (name) {
      this.current = 3
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('Success!')
        } else {
          this.$Message.error('Fail!')
        }
      })
    },
    handleReset (name) {
      this.$refs[name].resetFields()
    },
    next () {
      if (this.current === 3) {
        this.current = 0
      } else {
        this.current += 1
      }
    },
    handleBack () {
      if (this.current === 0) {
        this.current = 0
      } else {
        this.current -= 1
      }
    },
    handleDone () {
      this.current = 0
    }
  }

}
</script>

<style scoped>

  .name-your-price {
    width: 500px;
    background-color: #ffffff;
    text-align:center;
  }
  .steps {
    width: 425px;
    height: 60px;
    background-color: #ffffff;
    margin: auto;
    padding: 15px;
  }
  .title {
    width: 100%;
    height: 60px;
    margin-left: auto;
    margin-right: auto;
    padding: 10px;
    font-size: 20px;
    font-weight: bold;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
  .form {
    width: 500px;
    height: 500px;
    background-color: #ffffff;
    margin: auto;
    padding: 0px;
  }

</style>
