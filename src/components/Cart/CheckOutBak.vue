<template>
    <div class="payment-container">
        <div class="payment-summary">
          <h2 class="title">Order</h2>
          <i-table stripe ref="selection" size="large" :data="items" :columns="columns">
          </i-table>
          <span style="float: right; font-size: 20px; margin-top: 20px">Total Price: $ {{total}}</span>
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

                    <i-input v-model="paymentForm.zip" placeholder="Zip Code" style="width: 32%;">
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
                <form-item>
                        <i-button type="primary" @click="handleSubmit('paymentForm')" style="width: 90%;">Place Order</i-button>
                </form-item>

            </i-form>

          </div>
        </div>
    </div>
</template>

<script>

import { mapState, mapActions } from 'vuex'
import {shopService} from '@/api/shopService'

export default {
  name: 'StripePay',
  data () {
    return {
      total: 0,
      inline: false,
      cvcVisible: false,
      cvcField: 'password',
      card: null,
      stripe: null,
      columns: [
        {
          title: 'Item',
          key: 'title',
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
        zipcode: '',
        email: '',
        toekn: '',
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
    this.stripe = window.Stripe('pk_test_tV2Q3ZhAeIK9qG7UXTP1YdRy00oDSpil7r')
    var elements = this.stripe.elements()
    this.card = elements.create('card', {style: baseStyle})
    this.card.mount(this.$refs.card)
  },
  computed: {
    // ...mapState('account', ['status'])
    ...mapState({status: state => state.account.status, items: state => state.cart.items})
  },
  methods: {
    // ...mapActions('account', ['register']),
    ...mapActions({register: actions => actions.account.register}),
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.paymentForm.submitted = true
          // console.log(this.card)
          this.stripe.createToken(this.card).then((resp) => {
            console.log(resp.token)
            this.paymentForm.token = resp.toekn
            shopService.charge(this.paymentForm, this.items).then(() => {
              this.$Message.success('Thank you for your order.')
            }).catch((err) => {
              console.log(err)
              this.$Message.error('Payment Failed: ' + err)
            })
          }).catch((err) => {
            console.log(err)
            this.hasCardErrors = true
            this.$forceUpdate()
            // this.$Message.error('Payment Failed: ' + err)
          })
        }
      })
    },
    showCVC () {
      if (this.cvcVisible) {
        this.cvcVisible = false
        this.cvcField = 'password'
      } else {
        this.cvcVisible = true
        this.cvcField = 'text'
      }
    },
    cartTotalPrice () {
      console.log(this.items)
      for (var i = 0; i < this.items.length; i++) {
        this.total += this.items[i].price * this.items[i].quantity
      }
    }
  }
}
</script>

<style scoped>
  .payment-container {
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
</style>
