<template>
  <div>
      <h1 class="h3 mb-4 text-center">Browse Our Collection Of Books</h1>
      <div class="w-75 mx-auto">
          <ProductCard v-for="product in products" 
            :checkoutCart='checkoutCart' 
            @add-to-cart="$emit('add-to-cart', product.id)" 
            @increase-quantity="$emit('increase-quantity', product.id)"
            @decrease-quantity="$emit('decrease-quantity', product.id)"
            v-bind:key="product.id" 
            :product="product"/>
      </div>
  </div>
</template>

<script>
import ProductCard from '../components/widgets/ProductCard.vue'
import { getAllProducts } from '../api/product';

export default {
  name: 'HomeView',
  props: {
    checkoutCart: Array,
  },
  components: {
    ProductCard
  },
  data() {
    return {
      products: [],
    }
  },
  async created() {
      this.products = await getAllProducts();
    },
    emits: ['add-to-cart', 'increase-quantity', 'decrease-quantity']
}
</script>
