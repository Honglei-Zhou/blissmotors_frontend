<template>
  <div class="row">
    <div class="leftcolumn">
    </div>
    <div class="maincolumn">
      <!--Bugs here: pics should not be transparent, and should be the same size -->
      <div class="carousel-wrapper">
        <carousel
          autoplay
          loop
          :autoplay-speed="setting.autoplaySpeed"
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

      <div class="rc-box">
        <div class="rc-form">
          <h2>Get Password</h2>
          <div>
            <i-form
              ref="rc"
              :model="registrationCodeForm"
              :rules="registrationCodeRule"
            >
              <form-item prop="mail">
                <i-input
                  v-model="registrationCodeForm.mail"
                  placeholder="Email"
                >
                  <Icon
                    type="ios-mail-outline"
                    size=22
                    slot="prepend"
                  ></Icon>
                </i-input>
              </form-item>

              <form-item>
                <row>
                  <i-button
                    type="primary"
                    @click="handleSubmit('registrationCodeForm')"
                  >Send password</i-button>
                  <router-link to="/signup">
                    <i-button type="text">Sign Up</i-button>
                  </router-link>
                </row>
              </form-item>

            </i-form>
          </div>
        </div>
      </div>

    </div>
    <div class="rightcolumn">
    </div>
  </div>

</template>

<script>

import { mapState, mapActions } from 'vuex'

export default {
  name: 'ForgotPassword',
  data () {
    return {
      registrationCodeForm: {
        email: '',
        submitted: false
      },
      registrationCodeRule: {
        mail: [
          { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' },
          { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
        ]
      },
      sliderInfo: [
        {
          img: '/static/img/index/car/test3.jpg',
          url: 'https://www.blissmotors.com'
        },
        {
          img: '/static/img/index/car/test3.jpg',
          url: 'https://www.blissmotors.com'
        },
        {
          img: '/static/img/index/car/test3.jpg',
          url: 'https://www.blissmotors.com'
        },
        {
          img: '/static/img/index/car/test3.jpg',
          url: 'https://www.blissmotors.com'
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
  created () {
    this.logout()
  },
  methods: {
    ...mapActions('account', ['login', 'logout']),
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.submitted = true
          const { username, password } = this
          this.login({ username, password })
        } else {
          this.$Message.error('Incorrect username or password!')
        }
      })
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

.rc-box {
  width: 1140px;
  height: 350px;
  background-color: #ffffff;
  margin: 0px auto;
  padding-top: 40px;
}
.rc-form {
  width: 350px;
  height: 250px;
  background-color: #ffffff;
  margin: 0 auto;
  padding: 10px;
  text-align: center;
  border: 1px solid #464444;
}
.rc-form h2 {
  margin-top: 15px;
}
.rc-form div {
  margin-top: 15px;
}
</style>
