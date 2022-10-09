<template>
    <div>
        <h1>Checkout</h1>
        <!-- TODO: Add UI for this -->
        <div>{{ JSON.stringify(checkoutCart) }}</div>
    </div>
</template>

<script>
export default {
    name: 'CheckoutView',
    props: {
        checkoutCart: Array,
    }
}
</script>