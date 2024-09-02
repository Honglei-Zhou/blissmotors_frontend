<template>
    <div class="payment-container">
        <div class="payment-summary">
          <h2 class="title">Order</h2>
          <i-table stripe ref="selection" size="large" :data="items" :columns="columns">
          </i-table>
          <span style="float: right; font-size: 20px; margin-top: 20px">Total Price: $ {{cartTotalPrice()}}</span>

          <div class="payment-info">
          <alert type="success" show-icon closable v-show="isSucceeded" @on-close="isSucceeded=false">
            Payment Succeeded!
            <span slot="desc">Thank you for your payment. We will process your order soon.</span>
        </alert>
        <alert type="error" show-icon closable v-show="isFailed" @on-close="isFailed = false">
            Payment Failed!
            <span slot="desc">Sorry, payment failed. Please try again or contact our customer service.</span>
        </alert>
          </div>
        </div>
        <div class="payment-form-wrapper">
          <h2 class="title">Payment</h2>
          <div class="payment-form">
            <i-form ref="paymentForm" :model="paymentForm" :rules="paymentRule" :inline="inline">
              <h6>
              Contact Information
              </h6>
                <form-item prop="name">
                  <i-input type="text" v-model="paymentForm.name"  placeholder="Jane Doe"></i-input>
                </form-item>

                <form-item prop="address">
                    <i-input v-model="paymentForm.address" placeholder="160 E Grand Ave">
                    </i-input>
                </form-item>

                <form-item prop="city">
                    <i-input v-model="paymentForm.city" placeholder="City" style="width: 33%;">
                    </i-input>

                    <i-input v-model="paymentForm.state" placeholder="State" style="width: 33%;">
                    </i-input>

                    <i-input v-model="paymentForm.zipCode" placeholder="Zip Code" style="width: 32%;">
                    </i-input>
                </form-item>
              <h6>
                Credit Card Information
                </h6>
                <form-item prop="phone">
                  <i-input v-model="paymentForm.phone" placeholder="312-500-8535">
                    <Icon type="ios-call-outline" size=22 slot="prepend"></Icon>
                  </i-input>
                </form-item>

                <form-item prop="email">
                    <i-input v-model="paymentForm.email" placeholder="Email">
                        <Icon type="ios-mail-outline" size=22 slot="prepend"></Icon>
                    </i-input>
                </form-item>

                <form-item>
                    <div ref="card" class="card">
                        Credit Card
                    </div>
                </form-item>

        <form-item prop="agreeTerm">
          <a href='#/terms-of-service' target="blank" style="padding-right: 20px;">Accept Terms & Conditions</a>
          <RadioGroup v-model="paymentForm.agreeTerm">
            <Radio label="yes">Yes</Radio>
            <Radio label="no">No</Radio>
          </RadioGroup>
          </form-item>

                <form-item>
                        <i-button type="primary" @click="handleSubmit('paymentForm')" style="width: 90%;" :disabled="buttonDisabled">Place Order</i-button>
                </form-item>

            </i-form>

          </div>
        </div>
      <spin fix v-if="spinShow">
        <Icon type="ios-loading" size=30 class="spin-icon-load"></Icon>
      </spin>
    </div>
</template>

<script>

import { mapState, mapActions } from 'vuex'
// import {shopService} from '@/api/shopService'

export default {
  name: 'StripePay',
  data () {
    return {
      spinShow: false,
      inline: false,
      cvcVisible: false,
      isFailed: false,
      isSucceeded: false,
      cvcField: 'password',
      card: null,
      stripe: null,
      columns: [
        {
          title: 'Item',
          key: 'product_name',
          align: 'center'
        },
        {
          title: 'Quantity',
          key: 'quantity',
          align: 'center'
        },
        {
          title: 'Price',
          key: 'price',
          align: 'center'
        }
      ],
      paymentForm: {
        name: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        email: '',
        token: '',
        agreeTerm: 'no',
        submitted: false
      },
      paymentRule: {
        name: [
          {required: true, message: 'Name can not be empty', trigger: 'blur'}
        ],
        phone: [
          {required: true, message: 'Phone Number can not be empty', trigger: 'blur'}
        ],
        email: [
          { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' },
          { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
        ],
        address: [
          {required: true, message: 'Address can not be empty', trigger: 'blur'}
        ],
        city: [
          {required: true, message: 'City, State, and ZipCode can not be empty', trigger: 'blur'}
        ]
      }
    }
  },
  created () {
    this.cartTotalPrice()
  },
  mounted () {
    var baseStyle = {
      base: {
        color: '#32325d',
        '::placeholder': {
          color: '#aab7c4'
        }
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a'
      }
    }
    this.stripe = window.Stripe('pk_live_ZzxSM4GB3EPRs8VOYpn81oTl')
    var elements = this.stripe.elements()
    this.card = elements.create('card', {style: baseStyle})
    this.card.mount(this.$refs.card)
  },
  computed: {
    // ...mapState('account', ['status'])
    ...mapState({status: state => state.account.status, items: state => state.cart.items}),
    buttonDisabled () {
      // return true
      // In Debugging
      return this.total === 0 || this.paymentForm.agreeTerm === 'no'
    }
  },
  methods: {
    // ...mapActions('account', ['register']),
    ...mapActions({checkout: 'cart/checkout'}),
    handleSubmit (name) {
      this.buttonDisabled = true
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.paymentForm.submitted = true
          this.spinShow = true
          // console.log(this.card)
          this.stripe.createToken(this.card).then((resp) => {
            this.paymentForm.token = resp.token
            this.checkout(this.paymentForm).then((resp) => {
              this.cartTotalPrice()
              if (resp.success === '0') {
                this.isSucceeded = true
              } else {
                this.isFailed = true
              }
              this.spinShow = false
              setTimeout(() => this.$router.push('/product'), 2000)
            }).catch(() => {
              // console.log(err)
              this.hasCardErrors = true
              this.isFailed = true
              setTimeout(() => this.$router.push('/cart'), 2000)
            })
          }).catch(() => {
            // console.log(err)
            this.hasCardErrors = true
            this.isFailed = true
            setTimeout(() => this.$router.push('/cart'), 2000)
            // this.$Message.error('Payment Failed: ' + err)
          })
        }
      })
    },
    cartTotalPrice () {
      // console.log(this.items)
      var total = 0
      for (var i = 0; i < this.items.length; i++) {
        total += this.items[i].price * this.items[i].quantity
      }
      return total
    }
  }
}
</script>

<style scoped>
  .payment-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: baseline;
    width: 100%;
    margin: 0px auto;
    margin-top: 20px;
    padding: 0px;
    background-color: #ffffff;
  }
  .payment-summary {
    width: 400px;
    background-color: #ffffff;
    margin: 0 auto;
    padding: 10px;
    text-align: center;
  }
  .title {
    width: 400px;
    text-align: center;
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(0,0,0,0.1);
  }
  .payment-info{
    margin-top: 100px;
  }
  .payment-form-wrapper {
    width: 400px;
  }
  .payment-form {
    width: 400px;
    background-color: #ffffff;
    margin: 0 auto;
    padding: 10px;
    text-align: center;
  }
  .payment-form h6 {
    margin-top: 15px;
    text-align: left;
  }
  .payment-form div {
    margin-top: 10px;
  }
  .card {
    height: 32px;
    line-height: 32px;
    padding: 7px 2px 7px 4px;
  }

  .spin-icon-load{
    animation: ani-demo-spin 1s linear infinite;
  }
</style>
