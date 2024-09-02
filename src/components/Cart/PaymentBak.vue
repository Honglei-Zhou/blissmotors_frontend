<template>
<div class="payment-container">
    <div class="payment-box">
        <div class="payment-carnumber">
            <card-number class='stripe-element card-number'
            ref='cardNumber'
            :stripe='stripe'
            :options='options'
            @change='number = $event.complete'
            />
        </div>
        <card-expiry class='stripe-element card-expiry'
        ref='cardExpiry'
        :stripe='stripe'
        :options='options'
        @change='expiry = $event.complete'
        />
        <card-cvc class='stripe-element card-cvc'
        ref='cardCvc'
        :stripe='stripe'
        :options='options'
        @change='cvc = $event.complete'
        />
    </div>
</div>
</template>

<script>
import { CardNumber, CardExpiry, CardCvc } from 'vue-stripe-elements-plus'

export default {
  // props: [ 'stripe', 'options' ],
  data () {
    return {
      complete: false,
      number: false,
      expiry: false,
      cvc: false,
      stripe: 'pk_test_TYooMQauvdEDq54NiTphI7jx',
      options: {}
    }
  },
  components: { CardNumber, CardExpiry, CardCvc },
  methods: {
    update () {
      this.complete = this.number && this.expiry && this.cvc

      // field completed, find field to focus next
      if (this.number) {
        if (!this.expiry) {
          this.$refs.cardExpiry.focus()
        } else if (!this.cvc) {
          this.$refs.cardCvc.focus()
        }
      } else if (this.expiry) {
        if (!this.cvc) {
          this.$refs.cardCvc.focus()
        } else if (!this.number) {
          this.$refs.cardNumber.focus()
        }
      }
      // no focus magic for the CVC field as it gets complete with three
      // numbers, but can also have four
    }
  },
  watch: {
    number () { this.update() },
    expiry () { this.update() },
    cvc () { this.update() }
  }
}
</script>

<style>
.payment-container{
    width: 100%;
    height: 400px;
    position: relative;
    align-items: center;
}
.payment-box{
    width: 800px;
    height: 400px;
    margin: 0px auto;
    align-items: center;
}
.payment-carnumber{
    width: 600px;
    height: 100px;
    border:greenyellow;
}
.credit-card-inputs.complete {
  border: 2px solid green;
}
</style>
