<template>
<div class="sv-container">
  <div class="sv-box">
    <div class="sv-left">
      <div class="title">
        <p>Select a Vehicle</p>
      </div>

      <i-form
        ref="svForm1"
        :model="formItem"
        style="margin-top: 10px"
      >
        <form-item>
          <row>
            <i-col span="7">
              <i-select
                v-model="formItem.make"
                clearable
                placeholder="Make"
                style="text-align:center"
                @on-change="setModel"
              >
                <i-option
                  v-for="(item, index) in carMake"
                  :key="index"
                  :value="item.make"
                >{{item.make}}</i-option>
              </i-select>
            </i-col>
            <i-col
              span="7"
              offset="1"
            >
              <i-select
                clearable
                v-model="formItem.model"
                :disabled="formItem.modelDisabled"
                placeholder="Model"
                style="text-align:center"
                @on-change="setTrim"
              >
                <i-option
                  v-for="(item, index) in carModel"
                  :key="index"
                  :value="item.model"
                >{{item.model}}</i-option>
              </i-select>
            </i-col>
            <!-- <i-col
              span="5"
              offset="1"
            >
              <i-select
                v-model="formItem.trim"
                :disabled="formItem.trimDisabled"
                placeholder="Trim"
                style="text-align:center"
              >
                <i-option
                  v-for="(item, index) in carTrim"
                  :key="index"
                  :value="item.trim"
                >{{item.trim}}</i-option>
              </i-select>
            </i-col> -->

            <i-col
              span="5"
              offset="1"
            >
              <i-button
                type="primary"
                @click="searchByMakeModel"
              >Search</i-button>
            </i-col>

          </row>
        </form-item>

      </i-form>
    </div>

    <div class="sv-right">
      <div class="title">
        <p>Select a Style</p>
      </div>

      <i-form
        ref="svForm2"
        :model="formItem"
        style="margin-top: 10px"
      >
        <form-item>
          <row>
            <i-col span="13">
              <i-select
                clearable
                v-model="formItem.type"
                :disabled="formItem.typeDisabled"
                placeholder="Style"
                style="text-align:center"
                @on-change="setType"
              >
                <i-option
                  v-for="(item, index) in carType"
                  :key="index"
                  :value="item.type"
                >{{item.type}}</i-option>
              </i-select>
            </i-col>
            <i-col
              span="5"
              offset="3"
            >
              <i-button
                type="primary"
                @click="searchByType"
              >Search</i-button>
            </i-col>
          </row>
        </form-item>
      </i-form>
    </div>

    <div class="sv-right">
      <div class="title">
        <p>Select a Category</p>
      </div>

      <i-form
        ref="svForm2"
        :model="formItem"
        style="margin-top: 10px"
      >
        <form-item>
          <row>
            <i-col span="13">
              <i-select
                clearable
                v-model="formItem.category"
                :disabled="formItem.categoryDisabled"
                placeholder="Category"
                style="text-align:center"
                @on-change="setCategory"
              >
                <i-option
                  v-for="(item, index) in carCategory"
                  :key="index"
                  :value="item.category"
                >{{item.category}}</i-option>
              </i-select>
            </i-col>
            <i-col
              span="5"
              offset="3"
            >
              <i-button
                type="primary"
                @click="searchByCategory"
              >Search</i-button>
            </i-col>
          </row>
        </form-item>
      </i-form>
    </div>
  </div>
  <div class="alert" v-show="showMessage">
  <alert type="warning" show-icon>{{message}}</alert>
  </div>
</div>
</template>

<script>
import { carService } from '@/api/carService'

export default {
  name: 'SearchElement',
  data () {
    return {
      formItem: {
        make: '',
        model: '',
        type: '',
        category: '',
        makeDisabled: false,
        modelDisabled: true
      },
      message: '',
      showMessage: false,
      carMake: [],
      carModel: [],
      carType: [
        { type: 'Convertible' },
        { type: 'SUV' },
        { type: 'Sedan' },
        { type: 'Coupe' },
        // { type: 'Pickup' },
        { type: 'Hatchback' },
        { type: 'Minivan' },
        { type: 'Wagon' }
      ],
      carCategory: [
        { category: 'Economy' },
        { category: 'Premium' },
        { category: 'Luxury' }
      ]
    }
  },
  created () {
    this.setMake()
  },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('Success!')
        } else {
          this.$Message.error('Fail!')
        }
      })
    },
    setMake () {
      // console.log('Change')
      this.showMessage = false
      this.message = ''
      carService.getCarMake().then((resp) => {
        var carList = []
        for (var i = 0; i < resp.length; i++) {
          carList.push({ make: resp[i]['name'] })
        }
        this.carMake = carList
        // console.log(carList)
        this.formItem.makeDisabled = false
      })
    },
    setModel () {
      this.showMessage = false
      this.message = ''
      carService.getCarModel(this.formItem.make, 1, 100).then((resp) => {
        var results = resp['results']
        var carList = []
        for (var i = 0; i < results.length; i++) {
          if (results[i]['logo'] === undefined || results[i]['logo'] === null) {
            continue
          }
          carList.push({ model: results[i]['name'] })
        }
        this.carModel = carList
        this.formItem.modelDisabled = false
        // console.log(carList)
      })
    },
    setTrim () {
      this.showMessage = false
      this.message = ''
      carService.getCarTrim(this.formItem.make, this.formItem.model, this.formItem.year).then((resp) => {
        var results = resp['results']
        var carList = []
        for (var i = 0; i < results.length; i++) {
          carList.push({ trim: results[i]['trim'] })
        }
        this.carTrim = carList
        if (this.carTrim.length > 0) {
          this.formItem.trimDisabled = false
        }
      })
    },
    searchByMakeModel () {
      if (this.formItem.make !== '' && this.formItem.model !== '') {
        this.$router.push({
          path: `/research/${this.formItem.make}/${this.formItem.model}`
        })
      } else {
        this.message = 'Please Select Make and Model.'
        this.showMessage = true
      }
    },
    searchByType () {
      // console.log(this.formItem.type)
      if (this.formItem.type !== undefined && this.formItem.type !== '') {
        this.$router.push({
          path: `/research/style/${this.formItem.type}`
        })
      } else {
        this.message = 'Please Select a Style.'
        this.showMessage = true
      }
    },
    searchByCategory () {
      if (this.formItem.category !== undefined && this.formItem.category !== '') {
        this.$router.push({
          path: `/research/category/${this.formItem.category}`
        })
      } else {
        this.message = 'Please Select a Category.'
        this.showMessage = true
      }
    },
    setType () {
      this.showMessage = false
      this.message = ''
    },
    setCategory () {
      this.showMessage = false
      this.message = ''
    }
  }

}
</script>

<style scoped>
.sv-container{
  width: 100%;
}
.sv-box {
  width: 100%;
  height: 150px;
  position: relative;
  background-color: #ffffff;
  margin: 10px, 0px;
  padding: 20px 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgba(0,0,0,0.1);
}
.sv-left {
  width: 40%;
  height: 100%;
  margin-left:2%;
  /* float: left; */
}
.sv-right {
  width: 25%;
  margin-left: 5%;
  height: 100%;
  /* float: left; */
}
/* .sv-right {
  width: 20%;
  margin-left: 5%;
  height: 100%;
  float: left;
} */
.title {
  /* width: 100%; */
  height: 50px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 10px;
  font-size: 20px;
  font-weight: 700;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  text-align: left;
}
.browsetitle {
  width: 100%;
  height: 50%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 10px;
  font-size: 20px;
  font-weight: 700;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  text-align: center;
}
.alert{
  padding: 0px 400px;
}
</style>
