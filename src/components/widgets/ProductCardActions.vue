<template>
    <button v-if="!isInCart" @click="$emit('add-to-cart')" :class="addToCartBtnClasses">Add To Cart</button>
    <div v-else :class="quantityBtnContainerClasses">
        <button @click="$emit('increase-quantity')" class="plus-minus btn btn-primary btn-sm">+</button>
        <div>{{ quantity }}</div>
        <button @click="$emit('decrease-quantity')" class="plus-minus btn btn-primary btn-sm">-</button>
    </div>
</template>

<script>
export default {
    name: 'ProductCardActions',
    props: {
        isInCart: Boolean,
        isForSmallScreen: Boolean,
        quantity: Number,
    },
    computed: {
        addToCartBtnClasses() {
            return [
                this.isForSmallScreen ? "d-md-none d-block w-100": "d-md-block d-none btn-sm", 
                "btn btn-primary"
            ]
        },
        quantityBtnContainerClasses() {
            return [
                this.isForSmallScreen ? 
                    "d-md-none d-flex w-100 justify-content-center" : 
                    "d-md-flex d-none", 
                "gap-3 align-items-center"
            ]
        }
    },
    emits: ['add-to-cart', 'increase-quantity', 'decrease-quantity']
}
</script>

<style scoped>
    .plus-minus {
        font-size: 1rem;
    }
</style>
