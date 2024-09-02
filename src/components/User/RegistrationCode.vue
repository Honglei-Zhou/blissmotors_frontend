<template>
      <div class="rc-form" v-show="showFlag">
        <h3>Send Registration Code</h3>
        <div>
          <i-form
            ref="registrationCodeForm"
            :model="registrationCodeForm"
            :rules="registrationCodeRule"
            v-show="!formSubmitted"
          >
            <form-item prop="email">
              <i-input
                v-model="registrationCodeForm.email"
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
                >Send</i-button>
                <i-button type="text" @click="handleClose('registrationCodeForm')">Close</i-button>
              </row>
            </form-item>

          </i-form>
          <div class="close-btn" v-show="formSubmitted">
          <i-button type="primary" @click="handleClose('registrationCodeForm')" >Close</i-button>
          </div>
        </div>
      </div>
</template>

<script>

import { mapState, mapActions } from 'vuex'

export default {
  name: 'RegistrationCode',
  data () {
    return {
      registrationCodeForm: {
        email: '',
        submitted: false
      },
      registrationCodeRule: {
        email: [
          { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' },
          { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
        ]
      },
      showFlag: false
    }
  },
  computed: {
    ...mapState('account', ['status']),
    formSubmitted () {
      return this.registrationCodeForm.submitted
    }
  },
  methods: {
    ...mapActions('account', ['getRegisterCode']),
    reset (name) {
      this.$refs[name].resetFields()
      this.registrationCodeForm.email = ''
      this.registrationCodeForm.submitted = false
      // console.log(this.registrationCodeForm)
    },
    handleSubmit (name) {
      // console.log('Send clicked')
      this.$refs[name].validate((valid) => {
        if (valid) {
          // console.log(this.registrationCodeForm.email)
          this.registrationCodeForm.submitted = true
          this.getRegisterCode(this.registrationCodeForm.email)
        } else {
          this.$Message.error('Invalid Email Address!')
        }
      })
    },
    handleClose (name) {
      // console.log('clicked close')
      this.showFlag = false
      this.reset(name)
    },
    handleShow () {
      this.showFlag = true
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

.rc-form {
  width: 350px;
  height: 250px;
  background-color: #ffffff;
  margin: 20px;
  padding: 10px;
  text-align: center;
  border: 1px solid #464444;
}
.rc-form h3 {
  margin: 20px 0px;
}
.rc-form div {
  margin-top: 15px;
}

.close-btn {
  margin-bottom: 30px;
  height: 120px;
  align-items: center;
  padding-top: 80px;
}
</style>
