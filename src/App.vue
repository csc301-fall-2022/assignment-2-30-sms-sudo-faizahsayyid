<template>
  <div>
    <AppHeader :cartItemCount='cartItemCount'/>
    <main class="container mt-4 min-vh-100">
      <router-view></router-view>
    </main>
    <AppFooter />
  </div>
</template>

<script>
  import AppHeader from './components/layouts/Header.vue';
  import AppFooter from './components/layouts/Footer.vue';
  export default {
    name: "App",
    components: {
      AppHeader,
      AppFooter,
    },
    data() {
      return {
        checkoutCart: []
      }
    },
    computed: {
      cartItemCount() {
        return this.checkoutCart.length;
      }
    }
  }
</script>
  