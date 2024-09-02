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

    <div class="leftcolumn">
    </div>
    <div class="maincolumn">
      <div class="register-form">
        <h2>New User Register</h2>
        <div>
          <i-form
            ref="signUpForm"
            :model="signUpForm"
            :rules="signUpRule"
          >
            <row>
              <i-col span="11">
                <form-item prop="firstName">
                  <i-input
                    type="text"
                    v-model="signUpForm.firstName"
                    placeholder="First Name"
                  >
                    <Icon
                      type="ios-create-outline"
                      size=22
                      slot="prepend"
                    ></Icon>
                  </i-input>
                </form-item>
              </i-col>

              <i-col
                span="11"
                offset="2"
              >
                <form-item prop="lastName">
                  <i-input
                    type="text"
                    v-model="signUpForm.lastName"
                    placeholder="Last Name"
                  >
                    <Icon
                      type="ios-create-outline"
                      size=22
                      slot="prepend"
                    ></Icon>
                  </i-input>
                </form-item>
              </i-col>
            </row>

            <form-item prop="username">
              <i-input
                v-model="signUpForm.username"
                placeholder="Username"
              >
                <Icon
                  type="ios-person-outline"
                  size=22
                  slot="prepend"
                ></Icon>
              </i-input>
            </form-item>

            <form-item prop="mail">
              <i-input
                v-model="signUpForm.mail"
                placeholder="Email"
              >
                <Icon
                  type="ios-mail-outline"
                  size=22
                  slot="prepend"
                ></Icon>
              </i-input>
            </form-item>

            <form-item prop="registrationCode">
              <i-input
                v-model="signUpForm.registrationCode"
                placeholder="Registration Code"
              >
                <Icon
                  type="ios-barcode-outline"
                  size=22
                  slot="prepend"
                ></Icon>
                <i-button
                  slot="append"
                  @click="getRegistrationCode"
                >Get Registration Code</i-button>
              </i-input>
            </form-item>

            <form-item prop="password1">
              <i-input
                :type="passwordFieldType1"
                v-model="signUpForm.password1"
                placeholder="Password"
              >
                <Icon
                  type="ios-lock-outline"
                  size=22
                  slot="prepend"
                ></Icon>
                <Icon
                  v-if="!showPass1"
                  type="ios-eye-outline"
                  size=22
                  slot="append"
                  @click="showPassword1"
                ></Icon>
                <Icon
                  v-else
                  type="ios-eye-off-outline"
                  size=22
                  slot="append"
                  @click="showPassword1"
                ></Icon>
              </i-input>
            </form-item>

            <form-item prop="password2">
              <i-input
                :type="passwordFieldType2"
                v-model="signUpForm.password2"
                placeholder="Confirm Password"
              >
                <Icon
                  type="ios-lock-outline"
                  size=22
                  slot="prepend"
                ></Icon>
                <Icon
                  v-if="!showPass2"
                  type="ios-eye-outline"
                  size=22
                  slot="append"
                  @click="showPassword2"
                ></Icon>
                <Icon
                  v-else
                  type="ios-eye-off-outline"
                  size=22
                  slot="append"
                  @click="showPassword2"
                ></Icon>
              </i-input>
            </form-item>

            <form-item>
              <row>
                <i-button
                  type="primary"
                  @click="handleSubmit('signUpForm')"
                >Sign Up</i-button>
                <router-link to="/login">
                  <i-button type="text">Already have an account?</i-button>
                </router-link>
              </row>
            </form-item>

          </i-form>
        </div>
      </div>

      <div class="registration-code">
        <RegistrationCode ref="registrationcode"></RegistrationCode>
      </div>
    </div>

    <div class="rightcolumn">
    </div>
  </div>
</template>

<script>

import { mapState, mapActions } from 'vuex'
import RegistrationCode from '@/components/User/RegistrationCode'

export default {
  name: 'SignUp',
  data () {
    return {
      showPass1: false,
      showPass2: false,
      passwordFieldType1: 'password',
      passwordFieldType2: 'password',
      signUpForm: {
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        registrationCode: '',
        password1: '',
        password2: '',
        submitted: false
      },
      signUpRule: {
        firstName: [
          { required: true, message: 'First Name can not be empty', trigger: 'blur' }
        ],
        lastName: [
          { required: true, message: 'Last Name can not be empty', trigger: 'blur' }
        ],
        username: [
          { required: true, message: 'Username can not be empty', trigger: 'blur' }
        ],
        mail: [
          { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' },
          { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
        ],
        registrationCode: [
          { required: true, message: 'Registration Code can not be empty', trigger: 'blur' }
        ],
        password1: [
          { required: true, message: 'Please fill in the password.', trigger: 'blur' },
          { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
        ],
        password2: [
          { required: true, message: 'Please confirm the password.', trigger: 'blur' },
          { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
        ]
      },
      sliderInfo: [
        {
          img: '/static/img/index/car/page_head_2.png',
          url: 'https://www.blisslease.com'
        }
      ],
      setting: {
        autoplaySpeed: 5000
      }
    }
  },
  computed: {
    ...mapState('account', ['status'])
  },
  methods: {
    ...mapActions('account', ['register']),
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.signUpForm.submitted = true
          const user = {
            'username': this.signUpForm.username,
            'password1': this.signUpForm.password1,
            'password2': this.signUpForm.password2,
            'registration_code': this.signUpForm.registrationCode
          }
          console.log(user)
          this.register(user)
        } else {
          this.$Message.error('Incorrect username or password!')
        }
      })
    },
    showPassword1 () {
      if (this.showPass1) {
        this.showPass1 = false
        this.passwordFieldType1 = 'password'
      } else {
        this.showPass1 = true
        this.passwordFieldType1 = 'text'
      }
    },
    showPassword2 () {
      if (this.showPass2) {
        this.showPass2 = false
        this.passwordFieldType2 = 'password'
      } else {
        this.showPass2 = true
        this.passwordFieldType2 = 'text'
      }
    },
    getRegistrationCode () {
      // this.$router.push('/code')
      this.$refs.registrationcode.handleShow()
    }
  },
  components: {
    RegistrationCode
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

.register-form {
  width: 400px;
  height: 570px;
  background-color: #ffffff;
  margin: 20px;
  padding: 10px;
  text-align: center;
  border: 1px solid #464444;
}
.register-form h2 {
  margin-top: 15px;
}
.register-form div {
  margin-top: 10px;
}

.registration-code{
  position: fixed;
  right: 0px;
  top: 40px;
  z-index: 30;
}
</style>
