<template>
    <div>
        <h1 class="h3 mb-4 text-right">Your Shopping Cart</h1>
        
        <CheckoutCard v-for="item in checkoutCart"
          @increase-quantity="$emit('increase-quantity', item.id)" 
          @decrease-quantity="$emit('decrease-quantity', item.id)"
          @remove-from-cart="$emit('remove-from-cart', item.id)"
          :product="products.find(product => product.id === item.id)"
          :quantity="item.quantity"
          :key="item.id"/> 
        
        <p class="h5 mt-5 mb-2 text-muted text-end"><span class="text-primary">Total Cost (Before HST): </span>${{ totalCost.toFixed(2) }} CAD</p>
        <p class="h5 text-muted text-end"><span class="text-primary">After HST: </span>${{ costAfterTax.toFixed(2) }} CAD</p>

        <div class="d-flex justify-content-center w-100 mt-4"><button class="btn btn-danger text-center bg-info" type="button" @click="confirmPurchase">Confirm Purchases</button></div>
        
    </div>
  </template>

<script>
import { getProductsByIds } from '../api/product';
import CheckoutCard from '../components/widgets/CheckoutCard.vue'

export default {
  name: 'CheckoutView',
  props: {
    checkoutCart: Array,
  },
  components: {
    CheckoutCard
  },
  data() {
    return {
      products: [],
    }
  },
  methods: {
    confirmPurchase() {
      this.$router.push("/success")
      this.$emit("clear-cart")
    }
  },
  computed: {
    totalCost() {
      return this.checkoutCart.reduce((acc, curr) => {
        const itemProduct = this.products.find(product => product.id === curr.id)
        if (itemProduct) {
          return acc + itemProduct.price * curr.quantity
        }
        else {
          return acc
        }
      }, 0)
    },
    costAfterTax() {
      return this.totalCost * 1.13
    }
  },
  async created() {
      const idList = this.checkoutCart.map(item => item.id)
      this.products = await getProductsByIds(idList);
    },
    emits: ['clear-cart', 'add-to-cart', 'increase-quantity', 'decrease-quantity', 'remove-from-cart']
}
</script>