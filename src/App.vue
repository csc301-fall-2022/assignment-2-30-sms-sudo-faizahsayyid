<template>
  <div>
    <AppHeader :cartItemCount='cartItemCount' 
      @open-login-modal="openLoginModal" 
      @log-out="logOut"
      :isLoggedIn="isLoggedIn"/>
    <main class="container min-vh-100">
      <LoginSignUpModal :showLoginModal='showLoginModal' 
      @close-login-modal="closeLoginModal" 
      @on-login="onLogin" @on-signup="onSignUp"
      :error="authError"/>
      <router-view @add-to-cart='addToCart' 
        @increase-quantity='increaseQuantity'
        @decrease-quantity='decreaseQuantity'
        @remove-from-cart='removeFromCart'
        @clear-cart='clearCart'
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
  import { signUp, logIn } from './api/auth'; 

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
        authError: '',
        userEmail: '',
        userId: '',
      }
    },
    computed: {
      cartItemCount() {
        return this.checkoutCart.reduce((prev, curr) => prev + curr.quantity, 0);
      },
      isLoggedIn() {
        return !!this.userId && !!this.userEmail;
      }
    },
    created() {
      this.userEmail = localStorage.getItem('userEmail');
      this.userId = localStorage.getItem('userId');
      this.checkoutCart = JSON.parse(localStorage.getItem('checkoutCart')) || [];
    },
    methods: {
      logOut() {
        this.userEmail = '';
        localStorage.setItem('userEmail', '');
        this.userId = '';
        localStorage.setItem('userId', '');
      },
      async onLogin(email, password) {
        const { data, error } = await logIn(email, password);
        if (error) {
          this.authError = error.message;
        } else {
          this.userEmail = data.user.email;
          this.userId = data.user.id;
          localStorage.setItem('userEmail', this.userEmail);
          localStorage.setItem('userId', this.userId);
          this.closeLoginModal();
        }
      },
      async onSignUp(email, password) {
        const { data, error } = await signUp(email, password);
        if (error) {
          this.authError = error.message;
        } else {
          this.userEmail = data.user.email;
          this.userId = data.user.id;
          this.closeLoginModal();
        }
      },
      openLoginModal() {
        this.showLoginModal = true;
      },
      closeLoginModal() {
        this.showLoginModal = false;
      },
      addToCart(productId) {
        this.checkoutCart = [...this.checkoutCart, {id: productId, quantity: 1}]
        localStorage.setItem('checkoutCart', JSON.stringify(this.checkoutCart));
      }, 
      increaseQuantity(productId) {
        this.checkoutCart = this.checkoutCart.map((item) => {
          if (item.id === productId) {
            return {...item, quantity: item.quantity + 1};
          }
          else return item;
        })
        localStorage.setItem('checkoutCart', JSON.stringify(this.checkoutCart));
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
        localStorage.setItem('checkoutCart', JSON.stringify(this.checkoutCart));
      },
      removeFromCart(productID) {
        this.checkoutCart = this.checkoutCart.filter((item) => item.id !== productID);
      },
      clearCart(){
        this.checkoutCart = []
        localStorage.clear("checkoutCart")
      }
    }
  }
</script>

<style scoped>
  main {
    margin-top: 6rem;
  }
</style>