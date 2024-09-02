<template>
  <div class="shopping-cart">
    <i-table border ref="selection" size="large" :data="items" :columns="columns">
    </i-table>
    <div class="check-out" v-show="showCheckout">
      <i-button @click="checkOut" type="primary" :disabled="buttonDisabled">Check out</i-button>
    </div>
  </div>

</template>

<script>

import { mapState, mapActions } from 'vuex'

export default {
  name: 'ShoppingCart',
  props: {
    showCheckout: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      columns: [
        {
          title: 'Item',
          key: 'product_name',
          align: 'center'
        },
        {
          title: 'Description',
          key: 'description',
          align: 'center'
        },
        {
          title: 'Quantity',
          key: 'quantity',
          align: 'center',
          render: (h, params) => {
            return h('div', {style: {display: 'Table', margin: '0 auto'}}, [
              h('div', {style: {width: '30px', float: 'left'}}, [h('span', this.items[params.index].quantity, {}, [])]),
              h('div', {style: {width: '30px', float: 'left'}}, [h('Button', {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                on: {
                  click: () => {
                    this.addOne(params.index)
                  }
                }
              }, '+')]),
              h('div', {style: {width: '30px', float: 'left'}}, [h('Button', {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                on: {
                  click: () => {
                    this.reduceOne(params.index)
                  }
                }
              }, '-')])]
            )
          }
        },
        {
          title: 'Price',
          key: 'price',
          align: 'center'
        },
        {
          title: 'Action',
          key: 'action',
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'error',
                  size: 'small'
                },
                on: {
                  click: () => {
                    this.remove(params.index)
                  }
                }
              }, 'Delete')
            ])
          }
        }
      ],
      data: [
        {
          product_name: 'Service',
          description: 'Commission',
          quantity: 5,
          price: 100
        },
        {
          product_name: 'Service',
          description: 'Commission',
          quantity: 5,
          price: 100
        }
      ]
    }
  },
  // created () {
  //   this.initializeCart()
  // },
  computed: {
    ...mapState('cart', ['items']),
    buttonDisabled () {
      return this.items.length === 0
    }
  },
  methods: {
    ...mapActions('cart', ['initializeCart', 'removeProductFromCart']),
    checkOut () {
      this.$router.push('/pay')
    },
    remove (index) {
      this.items.splice(index, 1)
    },
    addOne (index) {
      // use items for test with db
      this.items[index].quantity++
    },
    reduceOne (index) {
      // use items for test with db
      if (this.items[index].quantity > 0) {
        this.items[index].quantity--
        if (this.items[index].quantity === 0) {
          this.removeProductFromCart(this.items[index])
        }
      }
    }
  }
}
</script>

<style scoped>
.shopping-cart {
  width: 100%;
}

.check-out {
  margin: 15px;
}
</style>
