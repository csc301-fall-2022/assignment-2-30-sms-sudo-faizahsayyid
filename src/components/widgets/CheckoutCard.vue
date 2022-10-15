<template>
    <section v-if="product" class="mb-3">
        <div class="row align-items-center">

            <img class="col-1" v-bind:src="product.image" />
            <h2 class="h4 col">{{ product.title }}</h2> 

            <p class="col">${{ product.price }}</p> 

            <ProductCardActions class="col" @add-to-cart="$emit('add-to-cart')"
                    @increase-quantity="$emit('increase-quantity')" 
                    @decrease-quantity="$emit('decrease-quantity')"
                    :isInCart="true"
                    :quantity="quantity"
                    :isForSmallScreen="false"
                    :isForCheckout="true"/>

            <button class="btn btn-danger col-1" type="button" @click="$emit('remove-from-cart')">Remove</button>
                    
        </div>
    </section>
</template>

<script>

import ProductCardActions from './ProductCardActions.vue'

export default {
    name: 'CheckoutCard',
    components: {
        ProductCardActions,
    },
    props: {
        product: Object,
        quantity: Number,
    },
    created() {
        console.log(this.product)
    },
    // computed:{
    //     quantity(){
    //         return this.checkoutCart.find(item => item.id === this.product.id).quantity
    //     }
    // },
    emits: ['add-to-cart', 'increase-quantity', 'decrease-quantity', 'remove-from-cart']
}
</script>
