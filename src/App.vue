<template>
  <div>
    <AppHeader :cartItemCount='cartItemCount'/>
    <main class="container mt-4 min-vh-100">
      <router-view @add-to-cart='addToCart' 
        @increase-quantity='increaseQuantity'
        @decrease-quantity='decreaseQuantity'  
        :checkoutCart='checkoutCart'>
      </router-view>
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
        checkoutCart: [],
      }
    },
    computed: {
      cartItemCount() {
        return this.checkoutCart.reduce((prev, curr) => prev + curr.quantity, 0);
      }
    },
    methods: {
      addToCart(productId) {
        this.checkoutCart = [...this.checkoutCart, {id: productId, quantity: 1}]
        console.log(this.checkoutCart)
      }, 
      increaseQuantity(productId) {
        this.checkoutCart = this.checkoutCart.map((item) => {
          if (item.id === productId) {
            return {...item, quantity: item.quantity + 1};
          }
          else return item;
        })
      },
      decreaseQuantity(productId) {
        this.checkoutCart = this.checkoutCart.map((item) => {
          if (item.id === productId && item.quantity - 1 > 0) {
            return {...item, quantity: item.quantity - 1};
          }
          else if (item.id === productId && item.quantity - 1 <= 0) {
            return null;
          }
          else return item;
        }).filter((item) => item !== null);
      }
    }
  }
</script>
  