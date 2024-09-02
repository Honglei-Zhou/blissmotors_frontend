<template>
  <!--
    <div class="sv-container">
        <div class="sv-content">
 -->
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
         <div class="carousel-container">
              <img
                :src="item.img"
                style="width: 100%; object-fit: scale-down"
              />
            </div>
        </carousel-item>
      </carousel>
      </div>
    </div>

    <div class="rightcolumn">
    </div>

    <div class="leftcolumn">
    </div>

    <div class="maincolumn">

        <div class="products-container">
            <div class="products-head">
                <div class="products-head-title">
                  PRODUCTS AND PRICING
                </div>
                <div class="products-head-info">
                  Get the best deal without the hassle.
                </div>
                <div>
                  <div class="products-head-intro">
                    We guarantee we will find the best deal on your next lease! Otherwise we will refund all your service fee back to you!
                  </div>
                </div>
            </div>
            <div class="products-content">
              <div v-for="(product, index) in allProducts" class="product" :key="index">
                   <card :padding="0" :bordered="false" :dis-hover="true">
                       <div class="product-title" :class="{'product-title-color1': index===0, 'product-title-color2': index===1, 'product-title-color3': index===2}">
                        <p slot="title">{{product.product_name}}</p>
                       </div>
                       <div class="product-details">
                           <p class="commission">$ {{product.price}}
                           </p>
                        <p  :class="{'product-details-item-even':2 % 2 === 0, 'product-details-item-odd': 2 % 2 === 1}"><strong>Description:</strong> {{product.description}}</p>
                       </div>
                    </card>
                    <div class="button">
                         <i-button type="primary" @click="handleBtnClick(index)">Add to Cart</i-button>
                    </div>
              </div>
            </div>
          </div>

          <modal
        v-model="showCart"
        title="Shopping Cart"
        scrollable
        ok-text="Checkout"
        cancel-text="Keep Shopping"
        width="700"
        @on-ok="checkout"
        @on-cancel="cancel">
        <ShoppingCart :showCheckout="showCheckout"></ShoppingCart>
    </modal>

    </div>

    <div class="rightcolumn">
    </div>

  </div>
</template>

<script>
// import { shopService } from '@/api/shopService'
import { mapState, mapActions } from 'vuex'
import ShoppingCart from '@/components/Cart/ShoppingCart'

export default {
  name: 'Product',
  components: {
    ShoppingCart
  },
  data () {
    return {
      showCart: false,
      showCheckout: false,
      gutter: 23,
      iconCols: [0, 1],
      sliderInfo: [
        {
          img: '/static/img/index/car/page_head_2.png',
          url: 'https://www.blissmotors.com'
        }
      ],
      setting: {
        autoplaySpeed: 5000
      }
    }
  },
  created () {
    this.getAllProducts()
  },
  computed: {
    // ...mapState('account', ['status'])
    ...mapState({status: state => state.account.status, items: state => state.cart.items, allProducts: state => state.products.all})
  },
  methods: {
    ...mapActions({getAllProducts: 'products/getAllProducts', addProductToCart: 'cart/addProductToCart'}),
    handleBtnClick (index) {
      // console.log(this.allProducts[index])
      this.addProductToCart(this.allProducts[index])
      this.showCart = true
      // console.log(index)
    },
    checkout () {
      this.$router.push('/pay')
    },
    cancel () {
      this.showCart = false
    }
    // _getProducts () {
    //   console.log('Product')
    //   shopService.getProducts().then((resp) => {
    //     var products = []
    //     for (var i = 0; i < resp.length; i++) {
    //       var product = {
    //         name: resp[i]['product_name'],
    //         price: resp[i]['price'],
    //         detail:
    //             [
    //               {key: 'Description',
    //                 value: resp[i]['description']}
    //             ]
    //       }
    //       products.push(product)
    //     }
    //     this.products = products
    //   })
    // }
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

.carousel-container{
  position: relative;
  width: 100%;
}

.sv-container {
  width: 100%;
  background-color: #ffffff;
  margin: 0px auto;
  padding: 0px;
}
.sv-content {
  width: 1140px;
  position: relative;
  margin: 0px auto;
  margin-top: 15px;
}

.sv-box {
  width: 100%;
  height: 200px;
  position: relative;
  background-color: #ffffff;
  margin: auto;
  margin-top: 10px;
}
.sv-left {
  width: 40%;
  height: 100px;
  margin-left: 5%;
  float: left;
}
.sv-right {
  width: 20%;
  margin-left: 5%;
  height: 100px;
  float: left;
}
.sv-right {
  width: 20%;
  margin-left: 5%;
  height: 100px;
  float: left;
}
.title {
  width: 100%;
  height: 50px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 10px;
  font-size: 20px;
  font-weight: bold;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  text-align: left;
}
.browsetitle {
  width: 100%;
  height: 50px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 10px;
  font-size: 20px;
  font-weight: bold;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  text-align: center;
}

.products-container{
    width: 100%;
    border-top: 1px solid rgba(0,0,0,0.1);
    padding-top: 20px;
}

.products-head {
  width: 100%;
  height: 220px;
  text-align: left;
}

.products-head-title {
  width: 100%;
  padding-top: 20px;
  padding-left: 30px;
  padding-right: 30px;
  font-size: 23px;
  background-color: #fff;
}
.products-head-info {
  width: 100%;
  padding-top: 20px;
  padding-left: 30px;
  padding-right: 30px;
  font-size: 30px;
  font-weight: bold;
}
.products-head-intro {
  width: 100%;
  padding-top: 30px;
  padding-left: 30px;
  padding-right: 30px;
  font-size: 18px;
  color: #515a6e;
  font-style: normal;
  line-height: 20pt;
}

.products-content{
  display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 300px;
    margin: 20px 0px;
    margin: 20px 0px;
    padding: 20px 200px;
}
.product {
    width: 32%;
    position: relative;
    background-color: #f8f8f9;
}
.product-title {
    height: 60px;
    line-height: 60px;
    font-size: 20px;
    font-weight: 400;
    color: #e8eaec;
}

.product-title-color1 {
  background-color: #2db7f5;
}

.product-title-color2 {
  background-color: #19be6b;
}

.product-title-color3 {
  background-color: #ff9900;
}

.product-details {
    background-color: #f8f8f9;
}

.commission {
  height: 60px;
    line-height: 60px;
    font-size: 16px;
    text-align: center;
}
.product-details-item-even {
    line-height: 18px;
    font-size: 14px;
    background-color: #c5c8ce;
    /* text-align: left; */
    padding: 10px 20px;
}

.product-details-item-odd {
    line-height: 18px;
    font-size: 14px;
    /* text-align: left; */
    background-color: #e8eaec;
    padding: 10px 20px;
}

.button {
  position: absolute;
  width: 100%;
  bottom: 30px;
  align-items: center;
}
</style>
