<template>
  <div class="profile-container">

    <div
      class="profile-box"
      v-if="edit==false"
    >
      <i-form
        ref="userProfile"
        :model="userProfile"
        :rules="ruleValidate"
        :label-width="100"
      >
        <row>
          <i-col span="12">

            <form-item
              label="First Name"
              prop="firstName"
            >
              <i-input
                type="text"
                v-model="userProfile.firstName"
                readonly
                :placeholder="userProfile.firstName"
              >
              </i-input>
            </form-item>
          </i-col>

          <i-col span="12">
            <form-item
              label="Last Name"
              prop="lastName"
            >
              <i-input
                type="text"
                v-model="userProfile.lastName"
                readonly
                placeholder="Last Name"
              >
              </i-input>
            </form-item>
          </i-col>
        </row>

        <!-- Email -->
        <form-item
          label="E-mail"
          prop="email"
        >
          <i-input
            v-model="userProfile.email"
            readonly
            placeholder="Enter your e-mail"
          ></i-input>
        </form-item>

        <!-- Phone -->
        <form-item
          label="Phone"
          prop="phone"
        >
          <i-input
            v-model="userProfile.phone"
            readonly
            placeholder="312-500-8535"
          ></i-input>
        </form-item>

        <!-- Address -->
        <form-item
          label="Address 1"
          prop="address1"
        >
          <i-input
            v-model="userProfile.address1"
            readonly
            placeholder="Enter your Address"
          ></i-input>
        </form-item>

        <form-item
          label="Address 2"
          prop="address2"
        >
          <i-input
            v-model="userProfile.address2"
            readonly
            placeholder="Enter your Address"
          ></i-input>
        </form-item>

        <form-item
          label="Apt/Unit"
          prop="address3"
        >
          <i-input
            v-model="userProfile.address3"
            readonly
            placeholder="Enter your Apt/Unit number"
          ></i-input>
        </form-item>

        <!-- City State Zip Code -->
        <row>
          <i-col span="8">
            <form-item
              label="State"
              prop="state"
            >
              <i-select
                v-model="userProfile.state"
                readonly
                :placeholder="userProfile.state"
                disabled
              >
                <i-option value="beijing">New York</i-option>
                <i-option value="shanghai">London</i-option>
                <i-option value="shenzhen">Sydney</i-option>
              </i-select>
            </form-item>

          </i-col>

          <i-col span="8">
            <form-item
              label="City"
              prop="city"
            >
              <i-select
                v-model="userProfile.city"
                readonly
                :placeholder="userProfile.city"
                disabled
              >
                <i-option value="beijing">New York</i-option>
                <i-option value="shanghai">London</i-option>
                <i-option value="shenzhen">Sydney</i-option>
              </i-select>
            </form-item>

          </i-col>

          <i-col span="8">
            <form-item
              label="Zip"
              prop="zip"
            >
              <i-input
                v-model="userProfile.zip"
                readonly
                :placeholder="userProfile.zip"
              ></i-input>
            </form-item>

          </i-col>
        </row>

        <!-- Subscribe -->
        <form-item
          label="Send me deals"
          prop="subscribe"
        >
          <radio-group
            v-model="userProfile.subscribe"
            readonly
            @on-change="showCar"
          >
            <radio label="yes">Yes</radio>
            <radio label="no">No</radio>
          </radio-group>
        </form-item>

        <!-- Detailed Information -->
        <row v-if="userProfile.subscribe=='yes'">
          <i-col span="8">
            <form-item
              label="Car Type"
              prop="carType"
            >
              <i-select
                v-model="userProfile.carType"
                multiple
              >
                <i-option
                  v-for="item in carTypeList"
                  :value="item.value"
                  :key="item.value"
                >{{ item.label }}</i-option>
              </i-select>
            </form-item>
          </i-col>
          <i-col span="8">
            <form-item
              label="Car Make"
              prop="carMake"
            >
              <i-select
                v-model="userProfile.carMake"
                multiple
              >
                <i-option
                  v-for="item in carMakeList"
                  :value="item.value"
                  :key="item.value"
                >{{ item.label }}</i-option>
              </i-select>
            </form-item>
          </i-col>
          <i-col span="8">
            <form-item
              label="Car Model"
              prop="carModel"
            >
              <i-select
                v-model="userProfile.carModel"
                multiple
              >
                <i-option
                  v-for="item in carModelList"
                  :value="item.value"
                  :key="item.value"
                >{{ item.label }}</i-option>
              </i-select>
            </form-item>
          </i-col>
        </row>

        <!-- Introduction -->
        <form-item
          label="Desc"
          prop="desc"
        >
          <i-input
            v-model="userProfile.desc"
            type="textarea"
            :autosize="{minRows: 2,maxRows: 5}"
            placeholder="Enter something..."
          ></i-input>
        </form-item>

        <!-- Button -->
        <form-item v-if="edit">
          <i-button
            type="primary"
            @click="handleSubmit('userProfile')"
          >Save</i-button>
          <i-button
            @click="handleReset('userProfile')"
            style="margin-left: 8px"
          >Cancel</i-button>
        </form-item>

        <form-item v-else>
          <i-button
            type="primary"
            @click="handleEdit()"
          >Edit Profile</i-button>
        </form-item>

        <!-- End Of Form-->
      </i-form>

    </div>

    <div
      class="profile-box"
      v-else
    >
      <i-form
        ref="userProfile"
        :model="userProfile"
        :label-width="100"
      >
        <row>
          <i-col span="12">

            <form-item
              label="First Name"
              prop="firstName"
            >
              <i-input
                type="text"
                v-model="userProfile.firstName"
                placeholder="First Name"
              >
              </i-input>
            </form-item>
          </i-col>

          <i-col span="12">
            <form-item
              label="Last Name"
              prop="lastName"
            >
              <i-input
                type="text"
                v-model="userProfile.lastName"
                placeholder="Last Name"
              >
              </i-input>
            </form-item>
          </i-col>
        </row>

        <!-- Email -->
        <form-item
          label="E-mail"
          prop="email"
        >
          <i-input
            v-model="userProfile.email"
            placeholder="Enter your e-mail"
          ></i-input>
        </form-item>

        <!-- Phone -->
        <form-item
          label="Phone"
          prop="phone"
        >
          <i-input
            v-model="userProfile.phone"
            placeholder="312-500-8535"
          ></i-input>
        </form-item>

        <!-- Address -->
        <form-item
          label="Address 1"
          prop="address1"
        >
          <i-input
            v-model="userProfile.address1"
            placeholder="Enter your Address"
          ></i-input>
        </form-item>

        <form-item
          label="Address 2"
          prop="address2"
        >
          <i-input
            v-model="userProfile.address2"
            placeholder="Enter your Address"
          ></i-input>
        </form-item>

        <form-item
          label="Apt/Unit"
          prop="address3"
        >
          <i-input
            v-model="userProfile.address3"
            placeholder="Enter your Apt/Unit number"
          ></i-input>
        </form-item>

        <!-- City State Zip Code -->
        <row>
          <i-col span="8">
            <form-item
              label="State"
              prop="state"
            >
              <i-select
                v-model="userProfile.state"
                :placeholder="userProfile.state"
              >
                <i-option value="beijing">New York</i-option>
                <i-option value="shanghai">London</i-option>
                <i-option value="shenzhen">Sydney</i-option>
              </i-select>
            </form-item>

          </i-col>

          <i-col span="8">
            <form-item
              label="City"
              prop="city"
            >
              <i-select
                v-model="userProfile.city"
                :placeholder="userProfile.city"
              >
                <i-option value="beijing">New York</i-option>
                <i-option value="shanghai">London</i-option>
                <i-option value="shenzhen">Sydney</i-option>
              </i-select>
            </form-item>

          </i-col>

          <i-col span="8">
            <form-item
              label="Zip"
              prop="zip"
            >
              <i-input
                v-model="userProfile.zip"
                :placeholder="userProfile.zip"
              ></i-input>
            </form-item>

          </i-col>
        </row>

        <!-- Subscribe -->
        <form-item
          label="Send me deals"
          prop="subscribe"
        >
          <radio-group
            v-model="userProfile.subscribe"
            @on-change="showCar"
          >
            <radio label="yes">Yes</radio>
            <radio label="no">No</radio>
          </radio-group>
        </form-item>

        <!-- Detailed Information -->
        <row v-if="userProfile.subscribe=='yes'">
          <i-col span="8">
            <form-item
              label="Car Type"
              prop="carType"
            >
              <i-select
                v-model="userProfile.carType"
                multiple
              >
                <i-option
                  v-for="item in carTypeList"
                  :value="item.value"
                  :key="item.value"
                >{{ item.label }}</i-option>
              </i-select>
            </form-item>
          </i-col>
          <i-col span="8">
            <form-item
              label="Car Make"
              prop="carMake"
            >
              <i-select
                v-model="userProfile.carMake"
                multiple
              >
                <i-option
                  v-for="item in carMakeList"
                  :value="item.value"
                  :key="item.value"
                >{{ item.label }}</i-option>
              </i-select>
            </form-item>
          </i-col>
          <i-col span="8">
            <form-item
              label="Car Model"
              prop="carModel"
            >
              <i-select
                v-model="userProfile.carModel"
                multiple
              >
                <i-option
                  v-for="item in carModelList"
                  :value="item.value"
                  :key="item.value"
                >{{ item.label }}</i-option>
              </i-select>
            </form-item>
          </i-col>
        </row>

        <!-- Introduction -->
        <form-item
          label="Desc"
          prop="desc"
        >
          <i-input
            v-model="userProfile.desc"
            type="textarea"
            :autosize="{minRows: 2,maxRows: 5}"
            placeholder="Enter something..."
          ></i-input>
        </form-item>

        <!-- Button -->
        <form-item v-if="edit">
          <i-button
            type="primary"
            @click="handleSubmit('userProfile')"
          >Save</i-button>
          <i-button
            @click="handleReset('userProfile')"
            style="margin-left: 8px"
          >Cancel</i-button>
        </form-item>

        <form-item v-else>
          <i-button
            type="primary"
            @click="handleEdit()"
          >Edit Profile</i-button>
        </form-item>

        <!-- End Of Form-->
      </i-form>

    </div>
  </div>
</template>

<script>
import { userService } from '@/api/userService'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Profile',
  data () {
    return {
      edit: false,
      userProfile: {
        firstName: 'Hello',
        lastName: 'World',
        email: 'abc@gmail.com',
        phone: '312-500-8535',
        address1: '',
        address2: '',
        address3: '',
        state: 'IL',
        city: 'Chicago',
        zip: '60611',
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
        email: [
          { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' },
          { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: 'Phone number cannot be empty', trigger: 'blur' }
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
  created () {
    this.isLogin()
    console.log('Loading...')
  },
  computed: {
    ...mapState('account', ['status'])
  },
  mounted () {
    var token = localStorage.getItem('token')
    if (token !== undefined && token !== null) {
      this._getProfile(token)
    } else {
      console.log('status')
      this.$router.push('/login')
    }
  },
  methods: {
    ...mapActions('account', ['isLogin']),
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('Success!')
          this.edit = false
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
    },
    _getProfile (token) {
      userService.getById(token).then(resp => {
        console.log(resp)
        this.userProfile.firstName = resp.first_name
        this.userProfile.lastName = resp.last_name
        this.userProfile.mail = resp.email
        this.userProfile.phone = resp.mobile_phone
        this.userProfile.address1 = resp.address_1
        this.userProfile.address2 = resp.address_2
        this.userProfile.address3 = resp.address_3
        this.userProfile.state = resp.state
        this.userProfile.city = resp.city
        this.userProfile.zip = resp.zipcode
        // Description
        // Subscription
      })
    }
  }
}
</script>

<style scoped>
.profile-container {
  width: 100%;
  background-color: #ffffff;
  margin: 0px auto;
  padding: 0px;
}
.profile-head {
  width: 100%;
  height: 80px;
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
