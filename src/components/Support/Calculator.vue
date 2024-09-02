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

     <!-- <div class="leftcolumn">
    </div>
    <div class="maincolumn">
      <div class="page-head-wrapper">
      <div class="page-head">
        <div class="page-head-intro">
          Auto Lease Calculator
        </div>
        <div class="page-head-detail">
          <div>Use this auto lease calculator to estimate what your car lease will really cost. Enter the car's MSRP, final negotiated price, down payment, sales tax, length of the lease, new car lending rate and the car's value after the lease ends. The calculator will estimate the capitalized cost, lease price, residual value, the depreciation and financing fees, the monthly payment without taxes and the monthly payment after the tax is applied.
         </div>
          <div style="padding-top: 20px;"><i-button type="primary" @click="$router.push('/research')">Start Search</i-button></div>

          </div>
      </div>
    </div>
    </div>
    <div class="rightcolumn">
    </div> -->

    <div class="leftcolumn">
    </div>
    <div class="maincolumn">
      <div class="main-wrapper">
      <div class="calculator-head">
        <div class="calculator-head-title">
          Auto Lease Calculator
          </div>
          <div class="calculator-head-intro">
            Use this auto lease calculator to estimate what your car lease will really cost. Enter the car's MSRP, final negotiated price, down payment, sales tax, length of the lease, new car lending rate and the car's value after the lease ends. The calculator will estimate the capitalized cost, lease price, residual value, the depreciation and financing fees, the monthly payment without taxes and the monthly payment after the tax is applied.
          </div>
      </div>
      <div class="calculator-wrapper">
        <div class="calculator-input">
          <i-form
            ref="calculatorForm"
            :model="calculatorForm"
            label-position="left"
            :label-width="200"
          >
            <h6 class="title">
              Vehicle Cost
            </h6>
            <form-item label="MSRP">
              <i-input
                number
                v-model="calculatorForm.msrp"
                placeholder="MSRP"
              >
              <Icon
                  type="logo-usd"
                  size=15
                  slot="prepend"
                ></Icon>

              </i-input>
            </form-item>

            <form-item label="Vehicle Sales Price">
              <i-input
                number
                v-model="calculatorForm.sale"
                placeholder="Vehicle Sales Price"
              >
               <Icon
                  type="logo-usd"
                  size=15
                  slot="prepend"
                ></Icon>
              </i-input>
            </form-item>

            <form-item label="Title, Registration and Other Fees">
              <i-input
                number
                v-model="calculatorForm.fee"
                placeholder="Title, Registration and Other Fees"
              >
               <Icon
                  type="logo-usd"
                  size=15
                  slot="prepend"
                ></Icon>
              </i-input>
            </form-item>

            <form-item label="Incentives and Rebates">
              <i-input
                number
                v-model="calculatorForm.rebates"
                placeholder="Incentives and Rebates"
              >
               <Icon
                  type="logo-usd"
                  size=15
                  slot="prepend"
                ></Icon>
              </i-input>
            </form-item>

            <form-item label="Cash Down Payment">
              <i-input
                number
                v-model="calculatorForm.downPay"
                placeholder="Cash Down Payment"
              >
              <Icon
                  type="logo-usd"
                  size=15
                  slot="prepend"
                ></Icon>
              </i-input>
            </form-item>

            <h6 class="title">
              Lease Financing
            </h6>
            <form-item label="Lease Term">
              <i-select v-model="calculatorForm.term" clearable placeholder="36 Months">
                <i-option v-for="item in terms" :value="item.value" :key="item.value">{{ item.label }}</i-option>
              </i-select>

              <!-- <i-input
                type="text"
                v-model="calculatorForm.term"
                placeholder="Lease Term"
              >

              </i-input> -->

            </form-item>

            <form-item label="Lease Residual Value">
              <i-input
                number
                v-model="calculatorForm.residual"
                placeholder="Lease Residual Value"
              >
              <span slot="append">%</span>
              </i-input>
            </form-item>

            <form-item label="Money Factor">
              <i-input
                number
                v-model="calculatorForm.moneyFactor"
                placeholder="Money Factor"
              >
              </i-input>
            </form-item>

            <form-item label="Miles Driven per Year">
              <i-select v-model="calculatorForm.mileage" clearable placeholder="10000 Miles">
                <i-option v-for="item in mileages" :value="item.value" :key="item.value">{{ item.label }}</i-option>
              </i-select>

            </form-item>

            <form-item label="Tax Rate">
              <i-input
                number
                v-model="calculatorForm.taxRate"
                placeholder="Tax Rate"
              >
              <span slot="append">%</span>
              </i-input>
            </form-item>

            <form-item label="Acquisition Fee">
              <i-input
                number
                v-model="calculatorForm.acquisitionFee"
                placeholder="Acquisition Fee"
              >
               <Icon
                  type="logo-usd"
                  size=15
                  slot="prepend"
                ></Icon>
              </i-input>
            </form-item>

          </i-form>

          <div class="calculator-btn">
            <i-button
              type="primary"
              @click="handleSubmit('calcualtorForm')"
            >Submit</i-button>
          </div>
        </div>

        <div class="calculator-result">
          <div class="payment-summary">
            <h6 class="payment-title">Total Monthly Payment</h6>
            <span class="payment-info">${{calculatorForm.pay}}</span>
          </div>

          <div class="payment-details">
            <i-form
              ref="calculatorForm"
              :model="calculatorForm"
              label-position="left"
              :label-width="200"
            >

              <form-item label="Sales Price">
                <i-input
                  readonly
                  number
                  v-model="calculatorForm.sale"
                  placeholder="Sales Price"
                >

                 <Icon
                  type="logo-usd"
                  size=15
                  slot="prepend"
                ></Icon>

                </i-input>
              </form-item>

              <form-item label="Net Capitalized Cost">
                <i-input
                  readonly
                  number
                  v-model="calculatorForm.cost"
                  placeholder="Net Capitalized Cost"
                >

                 <Icon
                  type="logo-usd"
                  size=15
                  slot="prepend"
                ></Icon>

                </i-input>
              </form-item>

              <form-item label="Residual Value">
                <i-input
                  readonly
                  number
                  v-model="calculatorForm.residualValue"
                  placeholder="Residual Value"
                >
                 <Icon
                  type="logo-usd"
                  size=15
                  slot="prepend"
                ></Icon>

                </i-input>
              </form-item>

              <form-item label="Depreciation Fee">
                <i-input
                  readonly
                  number
                  v-model="calculatorForm.depreciationFee"
                  placeholder="Depreciation Fee"
                >
                 <Icon
                  type="logo-usd"
                  size=15
                  slot="prepend"
                ></Icon>

                </i-input>
              </form-item>

              <form-item label="Financing Fee">
                <i-input
                  readonly
                  number
                  v-model="calculatorForm.financeFee"
                  placeholder="Financing Fee"
                >
                 <Icon
                  type="logo-usd"
                  size=15
                  slot="prepend"
                ></Icon>
                </i-input>
              </form-item>

              <form-item label="Pre-tax Monthly Payment">
                <i-input
                  readonly
                  number
                  v-model="calculatorForm.pretaxPay"
                  placeholder="Pre-tax Monthly Payment"
                >
                 <Icon
                  type="logo-usd"
                  size=15
                  slot="prepend"
                ></Icon>

                </i-input>
              </form-item>

              <form-item label="Monthly Usage Tax">
                <i-input
                  readonly
                  number
                  v-model="calculatorForm.tax"
                  placeholder="Monthly Usage Tax"
                >
                 <Icon
                  type="logo-usd"
                  size=15
                  slot="prepend"
                ></Icon>

                </i-input>
              </form-item>

              <form-item label="Due at signing">
                <i-input
                  readonly
                  number
                  v-model="calculatorForm.dueAtSign"
                  placeholder="Due at signing"
                >
                 <Icon
                  type="logo-usd"
                  size=15
                  slot="prepend"
                ></Icon>

                </i-input>
              </form-item>

            </i-form>

          </div>
        </div>

      </div>
      </div>

    </div>
    <div class="rightcolumn">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Calculator',
  data () {
    return {
      sliderInfo: [
        {
          img: '/static/img/index/car/page_head_2.png',
          url: 'https://www.blisslease.com'
        }
      ],
      setting: {
        autoplaySpeed: 5000
      },
      calculatorForm: {
        msrp: 25000,
        sale: 23000,
        fee: 850,
        rebates: 500,
        downPay: 2000,
        term: 36,
        residual: 51,
        moneyFactor: 0.001,
        mileage: 10000,
        taxRate: 7,
        acquisitionFee: 1000,
        cost: 23000,
        residualValue: 0,
        depreciationFee: 0,
        financeFee: 0,
        pretaxPay: 0,
        tax: 0,
        dueAtSign: 0,
        pay: 0
      },
      terms: [
        {
          value: 24,
          label: '24 Months'
        },
        {
          value: 30,
          label: '30 Months'
        },
        {
          value: 36,
          label: '36 Months'
        },
        {
          value: 40,
          label: '40 Months'
        }
      ],
      mileages: [
        {
          value: 7500,
          label: '7500 Miles'
        },
        {
          value: 10000,
          label: '10000 Miles'
        },
        {
          value: 12000,
          label: '12000 Miles'
        },
        {
          value: 15000,
          label: '15000 Miles'
        }
      ]
    }
  },
  watch: {
    'calculatorForm.msrp': {
      handler (newVal, oldVal) {
        this._calculate()
      },
      immediate: true
    },
    'calculatorForm.sale': {
      handler (newVal, oldVal) {
        this._calculate()
      },
      immediate: true
    },
    'calculatorForm.fee': {
      handler (newVal, oldVal) {
        this._calculate()
      },
      immediate: true
    },
    'calculatorForm.rebates': {
      handler (newVal, oldVal) {
        this._calculate()
      },
      immediate: true
    },
    'calculatorForm.downPay': {
      handler (newVal, oldVal) {
        this._calculate()
      },
      immediate: true
    },
    'calculatorForm.term': {
      handler (newVal, oldVal) {
        this._calculate()
      },
      immediate: true
    },
    'calculatorForm.residual': {
      handler (newVal, oldVal) {
        this._calculate()
      },
      immediate: true
    },
    'calculatorForm.moneyFactor': {
      handler (newVal, oldVal) {
        this._calculate()
      },
      immediate: true
    },
    'calculatorForm.taxRate': {
      handler (newVal, oldVal) {
        this._calculate()
      },
      immediate: true
    },
    'calculatorForm.acquisitionFee': {
      handler (newVal, oldVal) {
        this._calculate()
      },
      immediate: true
    }
  },
  created () {
    this._calculate()
  },
  methods: {
    _calculate () {
      var msrp = Number(this.calculatorForm.msrp)
      var residual = Number(this.calculatorForm.residual)
      var sale = Number(this.calculatorForm.sale)
      var downPay = Number(this.calculatorForm.downPay)
      var rebates = Number(this.calculatorForm.rebates)
      var term = Number(this.calculatorForm.term)
      var moneyFactor = Number(this.calculatorForm.moneyFactor)
      var taxRate = Number(this.calculatorForm.taxRate)
      var acquisitionFee = Number(this.calculatorForm.acquisitionFee)
      var fee = Number(this.calculatorForm.fee)

      var cost = sale - downPay - rebates
      var residualValue = (msrp * residual / 100.0)
      var depreciationFee = ((cost - residualValue) / term)
      var financeFee = ((cost + residualValue) * moneyFactor)
      var pretaxPay = depreciationFee + financeFee
      var tax = (pretaxPay * taxRate / 100.0)
      var pay = pretaxPay + tax
      var dueAtSign = downPay + acquisitionFee + fee + pay

      this.calculatorForm.cost = cost
      this.calculatorForm.residualValue = residualValue
      this.calculatorForm.depreciationFee = depreciationFee.toPrecision(5)
      this.calculatorForm.financeFee = financeFee.toPrecision(4)
      this.calculatorForm.pretaxPay = pretaxPay.toPrecision(5)
      this.calculatorForm.tax = tax.toPrecision(4)
      this.calculatorForm.pay = pay.toPrecision(4)
      this.calculatorForm.dueAtSign = dueAtSign.toPrecision(6)

      // this._formatNumber()
    },

    _formatNumber () {
      Object.keys(this.calculatorForm).forEach(key => {
        if (key !== 'moneyFactor') {
          this.calculatorForm[key] = Number(this.calculatorForm[key]).toFixed(2)
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
.page-head-wrapper{
  width: 100%;
  height: 380px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 10px;
  background-image: url('../../../static/img/index/car/page_head_1.png');
  background-color: #808695;
  background-blend-mode: screen;
  background-repeat: no-repeat;
  background-size: cover;
}
.page-head{
 width: 100%;
}
.page-head-title{
  padding-top: 70px;
  padding-left: 30px;
  padding-right: 30px;
  height: 120px;
  font-size: 23px;
  /* color: #17233d; */
}
.page-head-intro {
  padding-top: 40px;
  padding-left: 30px;
  padding-right: 30px;
  height: 120px;
  font-size: 30px;
  font-weight: 600;
}

.page-head-detail{
  padding-top: 50px;
  padding-left: 200px;
  padding-right: 200px;
  height: 150px;
  font-size: 16px;
  font-style: normal;
  line-height: 20pt;
  color: #17233d;
}

.main-wrapper{
  width: 100%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.calculator-head {
  width: 100%;
  display: block;
}
.calculator-head-title {
  width: 100%;
  height: 60px;
  line-height: 50px;
  font-size: 26px;
  font-weight: 700;
  text-align: center;
  margin: 10px 0px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.calculator-head-intro{
  padding: 0px 100px;
  font-size: 16px;
}
.calculator-wrapper {
  display: flex;
  flex: row;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
}
.calculator-input {
  margin-left: 40px;
  margin-top: 20px;
  width: 40%;
  padding: 30px;
  font-size: 30px;
  text-align: left;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.calculator-result {
  margin-right: 40px;
  margin-top: 20px;
  width: 40%;
  padding: 30px;
  font-size: 30px;
  border: 1px solid rgba(0, 0, 0, 0.1);
}
.title {
  width: 100%;
  height: 50px;
  line-height: 50px;
  font-size: 20px;
  text-align: left;
  margin: 10px 0px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.calculator-btn{
  width: 100%;
  padding-left: 40%;
}

.payment-summary{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.payment-title {
  width: 100%;
  height: 50px;
  line-height: 50px;
  font-size: 20px;
  text-align: center;
  margin: 10px 0px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.payment-info {
  font-size: 30px;
  color: red;
  font-weight: 700;
}
.payment-details {
  margin-top: 30px;
  text-align: center;

}
</style>
