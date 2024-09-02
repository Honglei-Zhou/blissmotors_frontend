<template>
  <div class="row">
    <div class="leftcolumn">
    </div>
    <div class="maincolumn">
      <!--Bugs here: pics should not be transparent, and should be the same size -->
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
      <div class="login-choice-wrapper" v-show="facebookLogin">
        <div class="login-account">
          <i-button class="button" type="primary" @click="accountLoginClicked">Login with Account</i-button>
        </div>
        <!-- <div class="login-facebook">
          <v-facebook-login app-id="2179448452110593"></v-facebook-login>
        </div> -->
      </div>
      <div class="login-form" v-show="!facebookLogin">
          <h2>Login</h2>
        <div>
          <i-form
            ref="loginForm"
            :model="loginForm"
            :rules="loginRule"
          >

            <form-item prop="username">
              <i-input
                type="text"
                v-model="loginForm.username"
                placeholder="Username"
              >
                <Icon
                  type="ios-contact-outline"
                  size=22
                  slot="prepend"
                ></Icon>
              </i-input>
            </form-item>

            <form-item prop="password">
              <i-input
                type="password"
                v-model="loginForm.password"
                placeholder="Password"
              >
                <Icon
                  type="ios-lock-outline"
                  size=22
                  slot="prepend"
                ></Icon>
              </i-input>
            </form-item>

            <form-item>
              <row>
                <i-button
                  type="primary"
                  @click="handleSubmit('loginForm')"
                >Login</i-button>
                <i-button
                  type="info"
                  @click="accountLoginClicked"
                >Back</i-button>
              </row>
              <row>
                <router-link to="/signup">
                  <i-button type="text">Not Registered ?</i-button>
                </router-link>

                <router-link to="/forgotpassword">
                  <i-button type="text">Forgot Password ?</i-button>
                </router-link>

              </row>
            </form-item>

          </i-form>
        </div>
      </div>
    </div>

    <div class="rightcolumn">
    </div>
  </div>
</template>

<script>

import { mapState, mapActions } from 'vuex'
import {VFBLogin as VFacebookLogin} from 'vue-facebook-login-component'

export default {
  name: 'Login',
  data () {
    return {
      loginForm: {
        username: '',
        password: '',
        submitted: false
      },
      loginRule: {
        username: [
          { required: true, message: 'Please fill in the user name', trigger: 'blur' }
        ],
        password: [
          { required: true, message: 'Please fill in the password.', trigger: 'blur' },
          { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
        ]
      },
      sliderInfo: [
        {
          img: '/static/img/index/car/page_head_2.png',
          url: 'https://www.blissmotors.com'
        }
      ],
      facebookLogin: true
    }
  },
  computed: {
    ...mapState('account', ['status'])
  },
  methods: {
    ...mapActions('account', ['login', 'logout']),
    accountLoginClicked () {
      this.facebookLogin = !this.facebookLogin
    },
    handleSubmit (name) {
      // console.log(this.loginForm.username)
      this.$refs[name].validate((valid) => {
        if (valid) {
          // console.log(this.loginForm.password)
          this.loginForm.submitted = true
          const username = this.loginForm.username
          const password = this.loginForm.password
          const user = { username, password }
          this.login(user)
        } else {
          this.$Message.error('Incorrect username or password!')
        }
      })
    }
  },
  components: {
    VFacebookLogin
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
.login-choice-wrapper{
  width: 650px;
  height: 360px;
  margin: 20px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.login-account{
  width: 40%;
}
.button{
  width: 240px;
  height: 42px;
  background-color: #2d8cf0;
}
.login-facebook{
  width: 40%;
}
.login-form {
  width: 400px;
  height: 360px;
  background-color: #ffffff;
  margin: 20px;
  padding: 10px;
  text-align: center;
  border: 1px solid #464444;
}
.login-form h2 {
  margin-top: 15px;
}
.login-form div {
  margin-top: 15px;
}
</style>
