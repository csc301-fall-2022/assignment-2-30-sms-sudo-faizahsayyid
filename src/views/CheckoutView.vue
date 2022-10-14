<template>
    <div>
        <h1 class="h3 mb-4 text-right">Your Shopping Cart</h1>
        <div>{{ JSON.stringify(checkoutCart) }}</div>
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

export default {
    name: 'CheckoutView',
    props: {
        checkoutCart: Array,
    },
    async created() {
      this.products = await getAllProducts();
    },
    emits: ['add-to-cart', 'increase-quantity', 'decrease-quantity']
}
</script>
