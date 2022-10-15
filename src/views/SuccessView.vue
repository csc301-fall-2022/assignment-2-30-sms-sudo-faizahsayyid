<template>
    <div class="d-flex flex-column align-items-center justify-content-center w-100 vh-90">
        <p class="text-success">Purchases have been confirmed!</p>

        <router-link to="/" class="btn btn-sm btn-primary">Continue Shopping</router-link>
    </div>
</template>

<script>
export default {
    name: 'SuccessView'
}
</script>