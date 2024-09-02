<template>
  <div class="content-wrapper">
    <div class="content-row">
      <div class="content-left">
        <div class="title">
            Monthly Payment ($)
        </div>

        <div class="detail">
          <slider
            v-model="mongthlyPayment.value"
            :step="100"
            range
            :min="100"
            :max="1500"
            show-stops
          ></slider>
          <div class="detail-info-wrapper">
          <div class="detail-info-left">
            <i-input
              v-model="mongthlyPayment.value[0]"
              placeholder="Minimum price"
            >
              <span slot="prepend">Minimum</span>
            </i-input>
          </div>
          <div class="detail-info-right">
            <i-input
              v-model="mongthlyPayment.value[1]"
              placeholder="Maximum price"
            >
              <span slot="prepend">Maximum</span>
            </i-input>
          </div>
          </div>
        </div>

      </div>

      <div class="content-right">
          <div class="title">
            MSRP ($)
        </div>

        <div class="detail">
          <slider
            v-model="msrp.value"
            :step="5000"
            range
            :min="10000"
            :max="150000"
            show-stops
          ></slider>
          <div class="detail-info-wrapper">
          <div class="detail-info-left">
            <i-input
              v-model="msrp.value[0]"
              placeholder="Minimum price"
            >
              <span slot="prepend">Minimum</span>
            </i-input>
          </div>
          <div class="detail-info-right">
            <i-input
              v-model="msrp.value[1]"
              placeholder="Maximum price"
            >
              <span slot="prepend">Maximum</span>
            </i-input>
          </div>
          </div>
        </div>
      </div>

    </div>

    <div class="content-row">
      <div class="content-left">
        <div class="title">
            Down Payment ($)
        </div>

        <div class="detail">
          <slider
            v-model="downPayment.value"
            :step="1000"
            :max = "20000"
          ></slider>
          <div class="detail-info-wrapper">
          <div class="detail-info-left" style="width: 50%;">
            <i-input
              v-model="downPayment.value"
              placeholder="Minimum price"
            >
              <span slot="prepend">Down Payment</span>
            </i-input>
          </div>
          <!-- <div class="detail-info-right">
            <i-input
              v-model="downPayment.value"
              placeholder="Maximum price"
            >
              <span slot="prepend">Maximum</span>
            </i-input>
          </div> -->
          </div>
        </div>
      </div>

      <div class="content-right">
          <!-- <div class="title">
            Yearly Mileage
        </div>

        <div class="detail">
          <slider
            v-model="yearlyMileage.value"
            :step="1000"
            range
            :min="7500"
            :max="20000"
            show-stops
          ></slider>
          <div class="detail-info-wrapper">
          <div class="detail-info-left">
            <i-input
              v-model="yearlyMileage.value[0]"
              placeholder="Minimum price"
            >
              <span slot="prepend">Minimum</span>
            </i-input>
          </div>
          <div class="detail-info-right">
            <i-input
              v-model="yearlyMileage.value[1]"
              placeholder="Maximum price"
            >
              <span slot="prepend">Maximum</span>
            </i-input>
          </div>
          </div>
        </div> -->
      </div>
    </div>

    <div class="content-row">
      <div class="content-left">
        <div class="title">
            Lease Term (Month)
        </div>

        <div class="detail">
          <slider
            v-model="leaseTerm.value"
            :step="6"
            range
            :min="24"
            :max="48"
            show-stops
          ></slider>
          <div class="detail-info-wrapper">
          <div class="detail-info-left">
            <i-input
              v-model="leaseTerm.value[0]"
              placeholder="Minimum Term"
            >
              <span slot="prepend">Minimum</span>
            </i-input>
          </div>
          <div class="detail-info-right">
            <i-input
              v-model="leaseTerm.value[1]"
              placeholder="Maximum Term"
            >
              <span slot="prepend">Maximum</span>
            </i-input>
          </div>
          </div>
        </div>
      </div>

      <div class="content-right">
          <div class="title">
            Yearly Mileage (Mile)
          </div>

        <div class="detail">
          <slider
            v-model="yearlyMileage.value"
            :step="1000"
            range
            :min="7500"
            :max="20000"
            show-stops
          ></slider>
          <div class="detail-info-wrapper">
          <div class="detail-info-left">
            <i-input
              v-model="yearlyMileage.value[0]"
              placeholder="Minimum price"
            >
              <span slot="prepend">Minimum</span>
            </i-input>
          </div>
          <div class="detail-info-right">
            <i-input
              v-model="yearlyMileage.value[1]"
              placeholder="Maximum price"
            >
              <span slot="prepend">Maximum</span>
            </i-input>
          </div>
          </div>
        </div>
      </div>
    </div>

<div class="content-row" style="margin-bottom: 50px;">
      <div class="content-left">
        <div class="title">
            Style
        </div>

        <div class="detail-style">
            <div class="check-box" @click="convertible = !convertible">
                <div class="check-box-box">
                    <checkbox v-model="convertible">
                    </checkbox>
                    <span>Convertible</span>
                </div>
                <div class="check-box-img">
                    <img src="/static/img/index/car/types/CONVERT.png">
                </div>
            </div>

            <div class="check-box" @click="suv = !suv">
                <div class="check-box-box">
                    <checkbox v-model="suv">
                    </checkbox>
                    <span>SUV</span>
                </div>
                <div class="check-box-img">
                    <img src="/static/img/index/car/types/SUVCROSS.png">
                </div>
            </div>

            <div class="check-box" @click="sedan = !sedan">
                <div class="check-box-box">
                    <checkbox v-model="sedan">
                    </checkbox>
                    <span>Sedan</span>
                </div>
                <div class="check-box-img">
                    <img src="/static/img/index/car/types/SEDAN.png">
                </div>
            </div>
        </div>

        <div class="detail-style">
            <div class="check-box" @click="coupe = !coupe">
                <div class="check-box-box">
                    <checkbox v-model="coupe">
                    </checkbox>
                    <span>Coupe</span>
                </div>
                <div class="check-box-img">
                    <img src="static/img/index/car/types/COUPE.png">
                </div>
            </div>

            <div class="check-box" @click="pickup = !pickup">
                <div class="check-box-box">
                    <checkbox v-model="pickup">
                    </checkbox>
                    <span>Pickup</span>
                </div>
                <div class="check-box-img">
                    <img src="/static/img/index/car/types/TRUCKS.png">
                </div>
            </div>

            <div class="check-box" @click="hatchback = !hatchback">
                <div class="check-box-box">
                    <checkbox v-model="hatchback">
                    </checkbox>
                    <span>Hatchback</span>
                </div>
                <div class="check-box-img">
                    <img src="/static/img/index/car/types/HATCH.png">
                </div>
            </div>
        </div>

        <div class="detail-style">

            <div class="check-box" @click="minivan = !minivan">
                <div class="check-box-box">
                    <checkbox v-model="minivan">
                    </checkbox>
                    <span>Minivan</span>
                </div>
                <div class="check-box-img">
                    <img src="/static/img/index/car/types/VANMV.png">
                </div>
            </div>

            <div class="check-box" @click="wagon = !wagon">
                <div class="check-box-box">
                    <checkbox v-model="wagon">
                    </checkbox>
                    <span>Wagon</span>
                </div>
                <div class="check-box-img">
                    <img src="/static/img/index/car/types/WAGON.png">
                </div>
            </div>
        </div>

      </div>

      <div class="content-right">
          <div class="title">
            Category
        </div>
        <div class="detail-style">
            <div class="check-box" @click="economy = !economy">
                <div class="check-box-box">
                    <checkbox v-model="economy">
                    </checkbox>
                    <span>Economy</span>
                </div>
                <div class="check-box-img">
                    <img src="static/img/index/car/types/economy.jpg">
                </div>
            </div>
            <div class="check-box" @click="premium = !premium">
                <div class="check-box-box">
                    <checkbox v-model="premium">
                    </checkbox>
                    <span>Premium</span>
                </div>
                <div class="check-box-img">
                    <img src="static/img/index/car/types/premium.jpg">
                </div>
            </div>
            <div class="check-box" @click="luxury = !luxury">
                <div class="check-box-box">
                    <checkbox v-model="luxury">
                    </checkbox>
                    <span>Luxury</span>
                </div>
                <div class="check-box-img">
                    <img src="static/img/index/car/types/luxury.jpg">
                </div>
            </div>
        </div>

        <!-- <div class="detail">
          <slider
            v-model="value"
            :step="100"
            range
            :min="0"
            :max="1500"
          ></slider>
          <div class="detail-info-wrapper">
          <div class="detail-info-left">
            <i-input
              v-model="value[0]"
              placeholder="Minimum price"
            >
              <span slot="prepend">Minimum</span>
            </i-input>
          </div>
          <div class="detail-info-right">
            <i-input
              v-model="value[1]"
              placeholder="Maximum price"
            >
              <span slot="prepend">Maximum</span>
            </i-input>
          </div>
          </div>
        </div> -->
      </div>
    </div>

    <div class="search-button">
        <i-button type="primary" icon="ios-search" @click.stop.prevent="search">Search</i-button>
        <i-button @click.stop.prevent="reset">Reset</i-button>
        <i-button @click="hide">Hide</i-button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'SearchComplex',
  data () {
    return {
      // bug here: refresh will reload activeTitle
      minimumPrice: 0,
      maxPrice: 0,
      value: [0, 1000],
      mongthlyPayment: {
        // minimumPrice: 180,
        // maxPrice: 1500,
        value: [100, 1500]
      },
      msrp: {
        // minimumPrice: 10000,
        // maxPrice: 150000,
        value: [10000, 150000]
      },
      downPayment: {
        value: 2000
      },
      yearlyMileage: {
        // minimumMileage: 7500,
        // maxMileage: 20000,
        value: [7500, 20000]
      },
      leaseTerm: {
        // minimumTerm: 24,
        // maxTerm: 48,
        value: [24, 48]
      },
      formItem: {
        make: '',
        model: '',
        trim: '',
        type: '',
        category: '',
        makeDisabled: false,
        modelDisabled: true,
        trimDisabled: true,
        typeDisabled: false,
        categoryDisabled: false
      },
      ruleValidate: {
        name: [
          { required: true, message: 'The name cannot be empty', trigger: 'blur' }
        ]
      },
      carMake: [{
        make: 'Audi'
      },
      {
        make: 'Porshe'
      }],
      carModel: [],
      carTrim: [],
      convertible: false,
      suv: false,
      pickup: false,
      sedan: false,
      hatchback: false,
      minivan: false,
      coupe: false,
      wagon: false,
      economy: false,
      premium: false,
      luxury: false,
      carType: [
        {
          value: false,
          label: 'Convertible',
          image: 'static/img/index/car/types/CONVERT.png'
        },
        {
          value: false,
          label: 'SUV',
          image: 'static/img/index/car/types/SUVCROSS.png'
        },
        {
          value: false,
          label: 'Pickup',
          image: 'static/img/index/car/types/TRUCKS.png'
        },
        {
          value: false,
          label: 'Sedan',
          image: 'static/img/index/car/types/SEDAN.png'
        },
        {
          value: false,
          label: 'Coupe',
          image: 'static/img/index/car/types/COUPE.png'
        },
        {
          value: false,
          label: 'Hatchback',
          image: 'static/img/index/car/types/HATCH.png'
        },
        {
          value: false,
          label: 'Minivan',
          image: 'static/img/index/car/types/VANMV.png'
        },
        {
          value: false,
          label: 'Wagon',
          image: 'static/img/index/car/types/WAGON.png'
        }
      ]

    }
  },
  methods: {
    search () {
      // console.log(this.make)
      // this.$router.push('/results')
      console.log(this.mongthlyPayment)
      console.log(this.leaseTerm)
    },
    reset () {
      console.log('reset')
    },
    toggleCheck (index) {
      this.carType[index].value = !this.carType[index].value
    },
    hide (event) {
      this.$emit('hide', event.target)
    }
  }
}
</script>

<style scoped>
@import "../../common/css/base.css";

.content-wrapper {
  width: 100%;
  margin-top: 40px;
}
.content-row {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
  position: relative;
  margin-bottom: 100px;
}

.content-left{
    width: 40%;
}

.title {
    height: 30px;
    line-height: 30px;
    font-size: 20px;
    font-weight: 700;
    text-align: left;
}

.detail{
    margin-top: 40px;
    padding: 0px 40px;
}
.detail-info-wrapper{
    margin-top: 30px;
    position: relative;
}
.detail-info-left{
    display: inline-block;
    width: 40%;
    position: absolute;
    left: 0px;
}
.detail-info-right{
    display: inline-block;
    width: 40%;
    position: absolute;
    right: 0px;
}
.content-right{
    width: 40%;
}
.detail-style{
    margin-top: 40px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
}
.check-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 15px 10px 10px 10px;
  margin-left: 10px;
  border-radius: 20px;
  border: 1px solid rgba(0,0,0,0.1);
  width: 120px;
}

.check-box:hover{
    box-shadow: 1px 1px rgba(0,0,0,0.1);
    color: #2b85e4;
}

.check-box-box{
    width: 100px;
    border-bottom: 1px solid rgba(0,0,0,0.1);
}
.check-box-img{
    width: 100px;
    height: 70px;

}

.check-box-img img {
     width: 100px;
    height: 70px;
    object-fit: scale-down;
}

.search-button{
    height: 100px;
}
</style>
