<template>
    <button data-test="add-to-cart" v-if="!isInCart && !isForCheckout" @click="$emit('add-to-cart')" :class="addToCartBtnClasses">Add To Cart</button>
    <div data-test="plus-minus-quantity" v-else :class="quantityBtnContainerClasses">
        <button @click="$emit('increase-quantity')" class="plus-minus btn btn-primary btn-sm">+</button>
        <div data-test="product-quantity">{{ quantity }}</div>
        <button @click="$emit('decrease-quantity')" :disabled="disableDecrease" class="plus-minus btn btn-primary btn-sm">-</button>
    </div>
</template>

<script>
export default {
    name: 'ProductCardActions',
    props: {
        isInCart: Boolean,
        isForSmallScreen: Boolean,
        quantity: Number,
        isForCheckout: { type:Boolean, default:false }
    },
    computed: {
        addToCartBtnClasses() {
            return [
                this.isForSmallScreen ? "d-md-none d-block w-100": "d-md-block d-none btn-sm", 
                "btn btn-primary"
            ]
        },
        quantityBtnContainerClasses() {
            if (this.isForCheckout) {
                return ["d-flex w-100 justify-content-center gap-3 align-items-center"]
            } else {
                return [
                this.isForSmallScreen ? 
                    "d-md-none d-flex w-100 justify-content-center" : 
                    "d-md-flex d-none", 
                "gap-3 align-items-center"
                ]
            }
        },
        disableDecrease() {
            return this.quantity <= 1 && this.isForCheckout
        }
    },
    emits: ['add-to-cart', 'increase-quantity', 'decrease-quantity', 'remove-from-cart']
}
</script>

<style scoped>
    .plus-minus {
        font-size: 1rem;
    }
</style>
