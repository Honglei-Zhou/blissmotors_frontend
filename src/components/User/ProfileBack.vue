<template>
<div class="profile-container">
    <div class="profile-head">
        My Profile
    </div>
    <div class="profile-box">
    <i-form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="100">
        <row>
        <i-col span="12">
                        <form-item label="First Name" prop="firstName" v-if="edit==true">
                            <i-input type="text" v-model="formValidate.firstName"  placeholder="First Name">
                            </i-input>
                        </form-item>

                        <form-item label="First Name" required v-else>
                            <i-input type="text" v-model="formValidate.firstName"  readonly :placeholder="formValidate.firstName">
                            </i-input>
                        </form-item>
                    </i-col>

                    <i-col span="12">
                        <form-item label="Last Name" prop="lastName" v-if="edit==true">
                            <i-input type="text" v-model="formValidate.lastName"  placeholder="Last Name">
                            </i-input>
                        </form-item>

                        <form-item label="Last Name" required v-else>
                            <i-input type="text" v-model="formValidate.lastName"  readonly :placeholder="formValidate.lastName">
                            </i-input>
                        </form-item>
                    </i-col>
        </row>

        <!-- Email -->
        <form-item label="E-mail" prop="mail" v-if="edit==true">
            <i-input v-model="formValidate.mail" placeholder="Enter your e-mail"></i-input>
        </form-item>

        <form-item label="E-mail" required v-else>
            <i-input v-model="formValidate.mail" :placeholder="formValidate.mail" readonly></i-input>
        </form-item>

        <!-- Phone -->
        <form-item label="Phone" prop="phone" v-if="edit==true">
            <i-input v-model="formValidate.phone" placeholder="312-500-8535"></i-input>
        </form-item>

        <form-item label="Phone" required v-else>
            <i-input v-model="formValidate.phone" :placeholder="formValidate.phone" readonly></i-input>
        </form-item>

        <!-- Address -->
        <form-item label="Address 1" prop="address1" v-if="edit==true">
            <i-input v-model="formValidate.address1" placeholder="Enter your Address"></i-input>
        </form-item>

        <form-item label="Address 1" v-else>
            <i-input v-model="formValidate.address1" :placeholder="formValidate.address1" readonly></i-input>
        </form-item>

        <form-item label="Address 2" prop="address2" v-if="edit==true">
            <i-input v-model="formValidate.address2" placeholder="Enter your Address"></i-input>
        </form-item>

        <form-item label="Address 2" prop="address2" v-else>
            <i-input v-model="formValidate.address2" :placeholder="formValidate.address2" readonly></i-input>
        </form-item>

        <form-item label="Apt/Unit" prop="address3" v-if="edit==true">
            <i-input v-model="formValidate.address3" placeholder="Enter your Apt/Unit number"></i-input>
        </form-item>

        <form-item label="Apt/Unit" prop="address3" v-else>
            <i-input v-model="formValidate.address3" :placeholder="formValidate.address3" readonly></i-input>
        </form-item>

        <!-- City State Zip Code -->
        <row>
             <i-col span="8">
                <form-item label="State" prop="state" v-if="edit==true">
                    <i-select v-model="formValidate.state" placeholder="Select state">
                        <i-option value="beijing">New York</i-option>
                        <i-option value="shanghai">London</i-option>
                        <i-option value="shenzhen">Sydney</i-option>
                    </i-select>
                </form-item>

                <form-item label="State" required v-else>
                    <i-input v-model="formValidate.state" :placeholder="formValidate.state" readonly>
                    </i-input>
                </form-item>
             </i-col>

             <i-col span="8">
                <form-item label="City" prop="city" v-if="edit==true">
                    <i-select v-model="formValidate.city" placeholder="Select city">
                        <i-option value="beijing">New York</i-option>
                        <i-option value="shanghai">London</i-option>
                        <i-option value="shenzhen">Sydney</i-option>
                    </i-select>
                </form-item>

                <form-item label="City" required v-else>
                    <i-input v-model="formValidate.city" :placeholder="formValidate.city" readonly>
                    </i-input>
                </form-item>
             </i-col>

             <i-col span="8">
                <form-item label="Zip" prop="zip" v-if="eidt==true">
                    <i-input v-model="formValidate.zip" placeholder="Zip Code"></i-input>
                </form-item>

                <form-item label="Zip" required v-else>
                    <i-input v-model="formValidate.zip" :placeholder="formValidate.zip" readonly></i-input>
                </form-item>
             </i-col>
        </row>

        <!-- Subscribe -->
         <form-item label="Send me deals" prop="subscribe">
            <radio-group v-model="formValidate.subscribe" @on-change="showCar">
                <radio label="yes">Yes</radio>
                <radio label="no">No</radio>
            </radio-group>
        </form-item>

        <!-- Detailed Information -->
        <row v-if="formValidate.subscribe=='yes'">
             <i-col span="8">
                <form-item label="Car Type" prop="carType">
                    <i-select v-model="formValidate.carType" multiple >
                        <i-option v-for="item in carTypeList" :value="item.value" :key="item.value">{{ item.label }}</i-option>
                    </i-select>
                </form-item>
             </i-col>
              <i-col span="8">
                <form-item label="Car Make" prop="carMake">
                    <i-select v-model="formValidate.carMake" multiple >
                        <i-option v-for="item in carMakeList" :value="item.value" :key="item.value">{{ item.label }}</i-option>
                    </i-select>
                </form-item>
              </i-col>
               <i-col span="8">
                <form-item label="Car Model" prop="carModel">
                    <i-select v-model="formValidate.carModel" multiple >
                        <i-option v-for="item in carModelList" :value="item.value" :key="item.value">{{ item.label }}</i-option>
                    </i-select>
                </form-item>
               </i-col>
        </row>

        <!-- Introduction -->
        <form-item label="Desc" prop="desc">
            <i-input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></i-input>
        </form-item>

        <!-- Button -->
        <form-item v-if="edit">
            <i-button type="primary" @click="handleSubmit('formValidate')">Save</i-button>
            <i-button @click="handleReset('formValidate')" style="margin-left: 8px">Cancel</i-button>
        </form-item>

        <form-item v-else>
            <i-button type="primary" @click="handleEdit()">Edit Profile</i-button>
        </form-item>

        <!-- End Of Form-->
    </i-form>
    </div>
</div>
</template>

<script>
export default {
  name: 'Profile',
  data () {
    return {
      edit: false,
      formValidate: {
        firstName: '',
        lastName: '',
        mail: '',
        address1: '',
        address2: '',
        address3: '',
        state: '',
        city: '',
        zip: '',
        subscribe: 'no',
        carType: [],
        carMake: [],
        carModel: [],
        interest: [],
        desc: ''
      },
      ruleValidate: {
        firstName: [
          { required: true, message: 'The name cannot be empty', trigger: 'blur' }
        ],
        lastName: [
          { required: true, message: 'The name cannot be empty', trigger: 'blur' }
        ],
        mail: [
          { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' },
          { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: 'Phone number cannot be empty', trigger: 'blur' },
          { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
        ],
        state: [
          { required: true, message: 'Please select the state', trigger: 'change' }
        ],
        city: [
          { required: true, message: 'Please select the city', trigger: 'change' }
        ],
        zip: [
          { required: true, message: 'Zip Code cannot be empty', trigger: 'blur' }
        ],
        interest: [
          { required: true, type: 'array', min: 1, message: 'Choose at least one hobby', trigger: 'change' },
          { type: 'array', max: 2, message: 'Choose two hobbies at best', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    handleSubmit (name) {
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
      this.edit = false
    },
    handleEdit () {
      this.edit = true
    },
    showCar () {
      if (this.subscribe === 'yes') { this.subscribe = 'no' } else { this.subscribe = 'yes' }
      console.log(this.subscribe)
    }
  }
}
</script>

<style scoped>
.profile-container {
    width: 100%;
    height: 800px;
    background-color: #ffffff;
    margin: 0px auto;
    padding: 0px;
  }
  .profile-head {
      width: 100%;
      height: 100px;
      text-align: center;
      padding-top: 40px;
      font-size: 25px;
  }
  .profile-box {
    width: 650px;
    height: 750px;
    background-color: #ffffff;
    margin: 0px auto;
    padding-top: 40px;
  }

  .profile-form {
    width: 300px;
    height: 320px;
    background-color: #ffffff;
    margin: 0 auto;
    padding: 10px;
    text-align: center;
    border: 1px solid #464444;
  }

</style>
