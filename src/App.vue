<template>
  <div>
    <AppHeader :cartItemCount='cartItemCount' 
      @open-login-modal="openLoginModal" 
      :isLoggedIn="isLoggedIn"/>
    <main class="container mt-4 min-vh-100">
      <LoginSignUpModal :showLoginModal='showLoginModal' 
      @close-login-modal="closeLoginModal" 
      @on-login="onLogin" @on-signup="onSignUp"/>
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
  import LoginSignUpModal from './components/widgets/LoginSignUpModal.vue';

  export default {
    name: "App",
    components: {
      AppHeader,
      AppFooter,
      LoginSignUpModal,
    },
    data() {
      return {
        checkoutCart: [], // ex. [{ id: 1, quantity: 3 }, { id: 2, quantity: 1 }]
        showLoginModal: false,
        isLoggedIn: false,
      }
    },
    computed: {
      cartItemCount() {
        return this.checkoutCart.reduce((prev, curr) => prev + curr.quantity, 0);
      }
    },
    methods: {
      onLogin(email, password) {
        console.log('Login', email, password);
        this.closeLoginModal();
      },
      onSignUp(email, password) {
        console.log('Sign Up', email, password);
        this.closeLoginModal();
      },
      openLoginModal() {
        this.showLoginModal = true;
      },
      closeLoginModal() {
        this.showLoginModal = false;
      },
      addToCart(productId) {
        this.checkoutCart = [...this.checkoutCart, {id: productId, quantity: 1}]
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
  