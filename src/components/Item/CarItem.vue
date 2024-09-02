<template>
  <div class="car-item" v-if="car">
    <div class="item-detail-show">
      <div class="item-detail-left">
        <div class="item-detail-big-img">
          <img
            :src="images[imgIndex]"
            :alt="carTitle"
             @error="imgUrlAlt"
          >
        </div>
        <div class="item-detail-img-row">
          <div
            class="item-detail-img-small"
            v-for="(item, index) in images"
            :key="index"
            @mouseover="showBigImg(index)"
          >
            <img
              :src="item"
              :alt="car.year"
               @error="imgUrlAlt"
            >
          </div>
        </div>
      </div>

        <div class="content">
          <div class="content-up">
            <div class="name">
                {{carTitle}}
              <!-- {{car.year}} {{car.make}} {{car.model}} {{car.trim}} -->
            </div>
            <div class="price">
              <div class="payment" v-if="showPrice && price">$ {{price}} / Mo*</div>
              <div class="payment" v-else>
              <i-button @click.stop.prevent="contact">Monthly Payment</i-button>
              </div>
              <span class="msrp">$ {{car.msrp}} MSRP</span>
            </div>
          </div>
          <div class="content-middle">
               <div class="info">
               {{car.feature}}
                </div>
          </div>
          <div class="content-bottom">
            <!-- <div class="contact">
              <div class="phone">
                SMS: {{contactInfo.phone}}
              </div>
              <div class="email">
                Email: {{contactInfo.email}}
              </div>
              <div class="address">
                Address: {{contactInfo.address}} {{contactInfo.city}}, {{contactInfo.state}} - {{contactInfo.zipCode}}
              </div>
            </div> -->
            <div class="competitors-title">
            Similar Cars:
            </div>
            <div class="competitors" v-show="competitors.length > 0">
              <i-button v-for="(item, index) in competitors" :key="index" @click="selectItem(item.make, item.model)">{{item.make}} {{item.model}}</i-button>
            </div>
            <div class="contact-button">
              <i-button
                type = "success"
                @click.stop.prevent="contact"
                :size="buttonSize"
              >Get Quote</i-button>
            </div>
          </div>
        </div>
      </div>

  </div>
</template>

<script>

export default {
  name: 'CarItem',
  props: {
    car: {
      type: Object
    },
    images: {
      type: Array,
      default () {
        return ['/static/img/index/car/car1.png']
      }
    },
    price: {
      type: String
    },
    showPrice: {
      type: Boolean,
      default: false
    },
    competitors: {
      type: Array,
      default () {
        return []
      }
    }
  },
  // created () {
  //   console.log('Car')
  // },
  computed: {
    carTitle () {
      return `${this.car.year} ${this.car.make} ${this.car.model} ${this.car.trim}`
    }
  },
  data () {
    return {
      buttonSize: 'large',
      imgIndex: 0,
      contactInfo: {
        phone: '312-500-8535',
        email: 'customercare@blissmotors.com',
        city: 'Chicago',
        state: 'IL',
        zipCode: 60615
      }
    }
  },
  methods: {
    showBigImg (index) {
      this.imgIndex = index
    },
    selectItem (make, model) {
      this.$router.push(`/research/${make}/${model}`)
    },
    imgUrlAlt (event) {
      event.target.src = '/static/img/logo/bliss-motors-logo.png'
    },
    contact (event) {
      this.$emit('contact', event.target)
    }
  }
}
</script>

<style scoped>

.car-item{
    width: 100%;
}

.item-detail-show {
  width: 80%;
  margin: 15px auto;
  display: flex;
  flex-direction: row;
  background-color: #fff;
}
.item-detail-left {
  width: 350px;
  margin-right: 30px;
}
.item-detail-big-img {
  width: 350px;
  height: 280px;
  box-shadow: 0px 0px 8px #ccc;
  text-align: center;
  cursor: pointer;
}
.item-detail-big-img img {
  width: 350px;
  height: 100%;
  object-fit: scale-down;
}
.item-detail-img-row {
  margin-top: 15px;
  display: flex;
  /* flex-direction: row;
  justify-content: center;
  align-items: center;  */
  overflow: scroll;
}
.item-detail-img-small {
  width: 68px;
  height: 68px;
  margin-left: 4px;
  box-shadow: 0px 0px 8px #ccc;
  cursor: pointer;
}
.item-detail-img-small img {
  width: 68px;
  height: 100%;
  object-fit: scale-down;
}
.content {
  width: 100%;
  padding-top: 20px;
}
.content-up {
  position: relative;
  height: 100px;
  left: 0;
  top: 0;
  padding-top: 20px;
}
.name {
  display: inline-block;
  position: absolute;
  left: 0;
  width: 320px;
  overflow-wrap: break-word;
  height: 28px;
  line-height: 28px;
  font-size: 24px;
  color: rgba(7, 17, 27, 0.8);
}

.price {
  display: inline-block;
  position: absolute;
  right: 0;
  height: 80px;
  line-height: 28px;
  color: rgba(7, 17, 27, 0.5);
}

.payment {
  display: block;
  padding-left: 30px;
  font-size: 24px;
}

.msrp {
  display: block;
  margin-top: 5px;
  font-size: 14px;
}

.content-middle {
  margin-top: 10px;
}
.info {
  display: inline-block;
  overflow-wrap: break-word;
  height: 40px;
  line-height: 20px;
  font-size: 16px;
  margin-right: 5px;
  margin-top: 4px;
  padding-right: 5px;
  /* border-right: 1px solid rgba(7, 17, 27, 0.5); */
}

.content-bottom {
  position: relative;
  left: 0;
  margin-top: 20px;
  margin-bottom: 0px;
  padding-top: 20px;
  border-top: 1px solid rgba(7, 17, 27, 0.1);
}
.competitors-title{
  height: 40px;
  line-height: 20px;
  padding-left: 20px;
  font-size: 14px;
  font-weight: 700;
  text-align: left;
}
.competitors {
  margin-top: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}
/* .contact {
  display: inline-block;
  width: 50%;
  padding-top: 30px;
  margin-bottom: 0;
  vertical-align: bottom;
  text-align: left;
}
.phone {
  margin: 4px 0 4px 0;
  height: 20px;
  line-height: 20px;
  font-size: 14px;
  color: rgba(7, 17, 27, 0.8);
}

.email {
  margin: 4px 0 4px 0;
  height: 20px;
  line-height: 20px;
  font-size: 14px;
  color: rgba(7, 17, 27, 0.8);
}

.address {
  margin: 4px 0 4px 0;
  height: 20px;
  line-height: 20px;
  font-size: 14px;
  color: rgba(7, 17, 27, 0.8);
} */

.contact-button {
  padding-top: 80px;
  /* margin-bottom: 0; */
}
.icon {
  width: 70%;
  height: 100%;
  margin-left: 30%;
  border-radius: 25px;
  background: #5cadff;
  font-size: 24px;
  color: rgba(7, 17, 27, 0.8);
  border: none;
  text-align: center;
}
.icon:hover {
  background: #2d8cf0;
}
</style>
