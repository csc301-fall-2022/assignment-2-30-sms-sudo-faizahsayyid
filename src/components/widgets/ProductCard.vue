<template>
    <section class="row gap-3 my-5 row align-items-center">
        <div class="col-md-3 d-flex justify-content-center align-items-center">
            <img class="w-100 mh-100" v-bind:src="product.image" v-bind:alt="altText">
        </div>
        <div class="col">
            <div class="d-flex justify-content-between align-items-center">
                <div>
                    <h2 class="card-title h5">{{ product.title }}</h2>
                    <h3 class="card-subtitle h6">by {{ product.author }}</h3>
                </div>
                <ProductCardActions @add-to-cart="$emit('add-to-cart')" 
                    @increase-quantity="$emit('increase-quantity')" 
                    @decrease-quantity="$emit('decrease-quantity')"
                    :isInCart="isInCart"
                    :quantity="quantity"
                    :isForSmallScreen="false"/>
            </div>
            <p class="card-text mb-0 mt-2">{{ product.coverType }} <span class="text-muted">| {{ formattedDate }}</span></p>
            <p class="text-primary">${{ product.price }}</p>
            <p class="card-text pb-0">{{ product.description }}</p>
            <ProductCardActions @add-to-cart="$emit('add-to-cart')" 
                @increase-quantity="$emit('increase-quantity')" 
                @decrease-quantity="$emit('decrease-quantity')"
                :isInCart="isInCart"
                :quantity="quantity"
                :isForSmallScreen="true"/>
        </div>
    </section>
</template>

<script>
import ProductCardActions from './ProductCardActions.vue'
export default {
    name: 'ProductCard',
    components: {
        ProductCardActions,
    },
    props: {
        product: Object,
        checkoutCart: Array,
    },
    computed: {
        formattedDate() {
            return new Date(this.product.date)
            .toLocaleDateString(
                'en', 
                { 
                    month: 'long', 
                    day: 'numeric', 
                    year: 'numeric' 
                }
            );
        },
        altText() {
            return this.product.title + ' Cover';
        },
        isInCart() {
            return this.checkoutCart.some((item) => item.id === this.product.id);
        },
        quantity() {
            return this.checkoutCart.find((item) => item.id === this.product.id)?.quantity || 0;
        }
    },
    emits: ['add-to-cart', 'increase-quantity', 'decrease-quantity']
}
</script>