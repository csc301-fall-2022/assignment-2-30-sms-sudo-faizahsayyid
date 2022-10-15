<template>
    <section v-if="product" class="mb-3">
        <div class="row align-items-center gap-2">

            <div class="col-12 col-sm-2 d-flex justify-content-center">
                <img class="w-75" v-bind:src="product.image" />
            </div>

            <div class="col-12 col-sm-2 d-flex justify-content-center text-center">
                <h2 class="h3">{{ product.title }}</h2> 
            </div>

            <div class="col-12 col-sm-1 d-flex justify-content-center align-items-center">
                <p class="mb-0">${{ product.price }}</p> 
            </div>

            <ProductCardActions class="my-2 col d-flex justify-content-center"
                    @increase-quantity="$emit('increase-quantity')" 
                    @decrease-quantity="$emit('decrease-quantity')"
                    :isInCart="true"
                    :quantity="quantity"
                    :isForSmallScreen="false"
                    :isForCheckout="true"/>

            <div class="col-12 col-sm-2 d-flex justify-content-center justify-content-sm-end">
                <button class="btn btn-danger" type="button" @click="$emit('remove-from-cart')">Remove</button>
            </div>
                    
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
    emits: ['increase-quantity', 'decrease-quantity', 'remove-from-cart']
}
</script>
